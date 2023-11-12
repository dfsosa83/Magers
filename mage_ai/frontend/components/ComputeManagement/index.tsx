import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useMutation } from 'react-query';

import Button from '@oracle/elements/Button';
import Clusters from './Clusters';
import ComputeServiceType, {
  SetupStepStatusEnum,
  SetupStepType,
} from '@interfaces/ComputeServiceType';
import ConnectionSettings from './ConnectionSettings';
import Divider from '@oracle/elements/Divider';
import Flex from '@oracle/components/Flex';
import FlexContainer from '@oracle/components/FlexContainer';
import Headline from '@oracle/elements/Headline';
import Link from '@oracle/elements/Link';
import Monitoring from './Monitoring';
import ProjectType, { SparkConfigType } from '@interfaces/ProjectType';
import ResourceManagement from './ResourceManagement';
import SetupSettings from './SetupSettings';
import SetupSteps from './Clusters/SetupSteps';
import Spacing from '@oracle/elements/Spacing';
import SparkGraph from './SparkGraph';
import System from './System';
import Text from '@oracle/elements/Text';
import Tooltip from '@oracle/components/Tooltip';
import TripleLayout from '@components/TripleLayout';
import api from '@api';
import useComputeService from '@utils/models/computeService/useComputeService'
import { CardStyle } from './index.style';
import {
  AlertTriangle,
  Check,
  Info,
  PowerOnOffButton,
} from '@oracle/icons';
import {
  COMPUTE_SERVICES,
  COMPUTE_SERVICE_DISPLAY_NAME,
  COMPUTE_SERVICE_KICKER,
  COMPUTE_SERVICE_RENDER_ICON_MAPPING,
  ComputeServiceEnum,
  MAIN_NAVIGATION_TAB_DISPLAY_NAME_MAPPING,
  MainNavigationTabEnum,
  ObjectAttributesType,
  TabType,
  buildTabs,
} from './constants';
import { HEADER_HEIGHT } from '@components/shared/Header/index.style';
import { NavigationStyle } from '@components/DataIntegrationModal/index.style';
import { SparkSQLType } from '@interfaces/SparkType';
import {
  PADDING_UNITS,
  UNIT,
  UNITS_BETWEEN_ITEMS_IN_SECTIONS,
  UNITS_BETWEEN_SECTIONS,
} from '@oracle/styles/units/spacing';
import { capitalizeRemoveUnderscoreLower } from '@utils/string';
import { get, set } from '@storage/localStorage';
import { getComputeServiceFromProject } from './utils';
import { goToWithQuery } from '@utils/routing';
import { indexBy } from '@utils/array';
import { onSuccess } from '@api/utils/response';
import { queryFromUrl } from '@utils/url';
import { selectKeys } from '@utils/hash';
import { useError } from '@context/Error';
import { useWindowSize } from '@utils/sizes';

const QUERY_PARAM_TAB = 'tab';

type ComputeManagementProps = {
  contained?: boolean;
  heightOffset?: number;
  mainContainerRef: any;
};

function ComputeManagement({
  contained,
  heightOffset,
  mainContainerRef,
}: ComputeManagementProps) {
  const {
    height: heightWindow,
    width: widthWindow,
  } = useWindowSize();

  const componentUUID =
    useMemo(() => `ComputeManagement/${contained ? 'contained' : 'open'}`, [contained]);
  const [showError] = useError(null, {}, [], {
    uuid: componentUUID,
  });

  const refAfterHeader = useRef(null);
  const refAfterFooter = useRef(null);
  const refSubheader = useRef(null);
  const refButtonTabs = useRef(null);

  const containerHeight = useMemo(() => heightWindow - (heightOffset || 0), [
    heightOffset,
    heightWindow,
  ]);

  const [buttonTabsRect, setButtonTabsRect] = useState(null);

  useEffect(() => {
    setButtonTabsRect(refButtonTabs?.current?.getBoundingClientRect());
  }, [
    heightWindow,
    refButtonTabs,
  ]);

  const localStorageKeyAfter =
    useMemo(() => `compute_management_after_width_${componentUUID}`, [componentUUID]);
  const localStorageKeyBefore =
    useMemo(() => `compute_management_before_width_${componentUUID}`, [componentUUID]);

  const [afterWidth, setAfterWidthState] = useState(get(localStorageKeyAfter, UNIT * 60));
  const setAfterWidth = useCallback((width) => {
    setAfterWidthState(width);
    set(localStorageKeyAfter, Math.max(width, UNIT * 60));
  }, [
    localStorageKeyAfter,
    setAfterWidthState,
  ]);

  const [afterMousedownActive, setAfterMousedownActive] = useState(false);
  const [beforeWidth, setBeforeWidthState] = useState(Math.max(
    get(localStorageKeyBefore),
    UNIT * 20,
  ));
  const setBeforeWidth = useCallback((width: number) => {
    setBeforeWidthState(width || UNIT * 20);
    set(localStorageKeyBefore, width || UNIT * 20);
  }, [
    localStorageKeyBefore,
    setBeforeWidthState,
  ]);

  const [beforeMousedownActive, setBeforeMousedownActive] = useState(false);
  const [afterHidden, setAfterHidden] = useState<boolean>(true);

  const [selectedSql, setSelectedSqlState] = useState<SparkSQLType>(null);

  const setSelectedSql = useCallback((prev1) => {
    setSelectedSqlState(prev2 => {
      const val = prev1(prev2);

      if (val && afterHidden) {
        setAfterHidden(false);
      } else if (!val && !afterHidden) {
        setAfterHidden(true);
      }

      return val;
    });

  }, [
    afterHidden,
    setAfterHidden,
    setSelectedSqlState,
  ]);

  const [selectedTab, setSelectedTabState] = useState<{
    main?: MainNavigationTabEnum;
  }>(null);
  const setSelectedTab = useCallback((prev) => {
    goToWithQuery({
      [QUERY_PARAM_TAB]: (typeof prev === 'function' ? prev?.() : prev)?.main,
    });
    setSelectedSql(() => null);
  }, [
    setSelectedSql,
  ]);

  const queryURL = queryFromUrl();
  useEffect(() => {
    const uuid = queryURL?.[QUERY_PARAM_TAB];
    if (selectedTab?.main !== uuid) {
      setSelectedTabState(uuid ? { main: uuid } : null);
    }
  }, [
    selectedTab,
    queryURL,
  ]);

  const [includeAllStates, setIncludeAllStates] = useState(false);
  const [selectedComputeService, setSelectedComputeService] = useState<ComputeServiceEnum>(null);

  const [objectAttributes, setObjectAttributesState] = useState<ObjectAttributesType>(null);
  const [attributesTouched, setAttributesTouched] = useState<ObjectAttributesType>({});
  const setObjectAttributes = useCallback((data) => {
    setAttributesTouched(prev => ({
      ...prev,
      ...data,
    }));
    setObjectAttributesState(prev => ({
      ...prev,
      ...data,
    }));
  }, [
    setAttributesTouched,
    setObjectAttributesState,
  ]);
  const setObjectAttributesSparkConfig =
    useCallback((data: SparkConfigType) => setObjectAttributes({
      spark_config: {
        ...objectAttributes?.spark_config,
        ...data,
      },
    }), [
      objectAttributes,
      setObjectAttributes,
    ]);

  const { data } = api.projects.list({}, {
    revalidateOnFocus: false,
  });
  const project: ProjectType = useMemo(() => data?.projects?.[0], [data]);
  const projectName = useMemo(() => project?.name, [project]);

  const {
    activeCluster,
    clusters,
    clustersLoading,
    computeService,
    connections,
    fetchComputeClusters,
    fetchComputeConnections,
    fetchComputeService,
    setupComplete,
  }: ComputeServiceType = useComputeService({
    clustersRefreshInterval: 10000,
    includeAllStates,
  });

  useEffect(() => {
    if (project) {
      setObjectAttributesState(project);
      setSelectedComputeService(getComputeServiceFromProject(project));
    }
  }, [
    project,
    setObjectAttributesState,
    setSelectedComputeService,
    setSelectedTab,
  ]);

  useEffect(() => {
    if (!selectedTab && selectedComputeService) {
      setSelectedTab({
        main: MainNavigationTabEnum.SETUP,
      });
    }
  }, [
    selectedComputeService,
    selectedTab,
    setSelectedTab,
  ]);

  const [updateProjectBase, { isLoading: isLoadingUpdateProject }]: any = useMutation(
    api.projects.useUpdate(projectName),
    {
      onSuccess: (response: any) => onSuccess(
        response, {
          callback: ({
            project: objectServer,
          }) => {
            setAttributesTouched({});
            setObjectAttributesState(objectServer);
            fetchComputeService();
          },
          onErrorCallback: (response, errors) => showError({
            errors,
            response,
          }),
        },
      ),
    },
  );
  const updateProject = useCallback((data?: ObjectAttributesType) => updateProjectBase({
    project: selectKeys({
      ...objectAttributes,
      ...data,
    }, [
      'emr_config',
      'remote_variables_dir',
      'spark_config',
    ]),
  }), [
    objectAttributes,
    updateProjectBase,
  ]);

  const before = useMemo(() => {
    const arr = buildTabs(computeService).map(({
      Icon,
      renderStatus,
      uuid,
    }: TabType) => {
      let statusEl;

      if (renderStatus) {
        statusEl = renderStatus?.({
          computeConnections: connections,
          computeService,
        });
      }

      return (
        <NavigationStyle
          key={uuid}
          selected={selectedTab?.main === uuid}
        >
          <Link
            block
            disabled={!selectedComputeService}
            noHoverUnderline
            noOutline
            onClick={() => setSelectedTab(() => ({
              main: uuid,
            }))}
            preventDefault
          >
            <Spacing p={PADDING_UNITS}>
              <FlexContainer alignItems="center" justifyContent="space-between">
                <Flex alignItems="center" flex={1}>
                  <Icon size={UNIT * 2} />

                  <Spacing mr={2} />

                  <Text bold large>
                    {MAIN_NAVIGATION_TAB_DISPLAY_NAME_MAPPING[uuid]}
                  </Text>
                </Flex>

                {statusEl && (
                  <>
                    <Spacing mr={PADDING_UNITS} />

                    {statusEl}
                  </>
                )}
              </FlexContainer>
            </Spacing>
          </Link>
        </NavigationStyle>
      );
    });

    if (selectedComputeService) {
      const displayName = COMPUTE_SERVICE_DISPLAY_NAME[selectedComputeService];
      const kicker = COMPUTE_SERVICE_KICKER[selectedComputeService];
      const renderIcon = COMPUTE_SERVICE_RENDER_ICON_MAPPING[selectedComputeService];

      if (computeService?.setup_steps) {
        if (!setupComplete) {
          arr.unshift(
            <>
              <Divider light />

              <Spacing mb={1} px={PADDING_UNITS} pt={PADDING_UNITS}>
                <Headline level={5}>
                  Setup steps
                </Headline>
              </Spacing>

              <SetupSteps
                computeService={computeService}
                onClickStep={(tab: string) => setSelectedTab(() => ({
                  // @ts-ignore
                  main: tab,
                }))}
              />

              <Spacing mt={1}>
                <Divider light />
              </Spacing>
            </>
          );
        }
      }

      if (displayName && kicker && renderIcon) {
        let setupStepsTooltipMessage;
        if (computeService?.setup_steps) {
          if (setupComplete) {
            if (activeCluster) {
              if (activeCluster?.ready) {
                setupStepsTooltipMessage = 'Cluster is ready, commence coding.';
              } else {
                setupStepsTooltipMessage = 'Cluster activated and initializing.';
              }
            } else {
              setupStepsTooltipMessage = 'Setup complete but no clusters activated.';
            }
          } else {
            setupStepsTooltipMessage = 'All setup steps have not been completed yet.';
          }
        }

        const connectionStatusesEl = [];

        if (computeService?.setup_steps) {
          connectionStatusesEl.push(
            <Spacing key="compute-service-setup-steps" py={1}>
              <FlexContainer
                alignItems="center"
              >
                {setupComplete && (
                  <PowerOnOffButton
                    muted={!activeCluster?.ready}
                    size={1.5 * UNIT}
                    success={activeCluster?.ready}
                  />
                )}
                {!setupComplete && (
                  <AlertTriangle
                    danger
                    size={1.5 * UNIT}
                  />
                )}

                <Spacing mr={1} />

                <Flex flex={1} flexDirection="column">
                  <Text default={!setupComplete || !activeCluster} small>
                    {setupComplete && activeCluster
                      ? 'Compute service connected'
                      : 'Compute service unconnected'
                    }
                  </Text>

                  {setupStepsTooltipMessage && (
                    <Text muted xsmall>
                      {setupStepsTooltipMessage}
                    </Text>
                  )}
                </Flex>
              </FlexContainer>
            </Spacing>
          );
        }

        if (connections?.length) {
          connections?.forEach(({
            active,
            description,
            id,
            name,
          }, idx: number) => {
            connectionStatusesEl.push(
              <Spacing key={id} py={1}>
                <FlexContainer
                  alignItems="center"
                >
                  <PowerOnOffButton
                    muted={!active}
                    size={1.5 * UNIT}
                    success={active}
                  />

                  <Spacing mr={1} />

                  <Flex flex={1} flexDirection="column">
                    <Text default={!active} small>
                      {name || capitalizeRemoveUnderscoreLower(id || '')}
                    </Text>

                    {description && (
                      <Text muted xsmall>
                        {description}
                      </Text>
                    )}
                  </Flex>
                </FlexContainer>
              </Spacing>
            );
          });
        }

        arr.unshift(
          <Spacing
            key={`${displayName}-${kicker}`}
            p={PADDING_UNITS}
          >
            <CardStyle inline>
              <FlexContainer alignItems="flex-start">
                <Flex flex={1}>
                  {renderIcon()}
                </Flex>

                <Button
                  compact
                  onClick={() => {
                    setSelectedComputeService(null)
                    setSelectedTab(null);
                  }}
                  secondary
                  small
                >
                  Change
                </Button>
              </FlexContainer>

              <Spacing mt={PADDING_UNITS}>
                <FlexContainer alignItems="flex-end">
                  <Flex flex={1} flexDirection="column">
                    <Text default monospace>
                      {kicker}
                    </Text>
                    <Headline level={5}>
                      {displayName}
                    </Headline>
                  </Flex>
                </FlexContainer>
              </Spacing>

              {connectionStatusesEl?.length >= 1 && (
                <Spacing mt={PADDING_UNITS}>
                  {connectionStatusesEl}
                </Spacing>
              )}
            </CardStyle>
          </Spacing>
        );
      }
    }

    return arr;
  }, [
    activeCluster,
    clusters,
    computeService,
    connections,
    selectedComputeService,
    selectedTab,
    setSelectedTab,
    setupComplete,
  ]);

  const after = useMemo(() => {
    if (selectedSql) {
      return (
        <SparkGraph
          height={containerHeight - ((buttonTabsRect?.height || 0) + HEADER_HEIGHT + 1)}
          model={selectedSql}
        />
      );
    }
  }, [
    containerHeight,
    selectedSql,
  ]);

  const setupMemo = useMemo(() => (
    <SetupSettings
      attributesTouched={attributesTouched || {}}
      computeService={computeService}
      isLoading={isLoadingUpdateProject}
      mutateObject={updateProject}
      objectAttributes={objectAttributes}
      selectedComputeService={selectedComputeService}
      setObjectAttributes={setObjectAttributes}
    />
  ), [
    attributesTouched,
    computeService,
    isLoadingUpdateProject,
    objectAttributes,
    selectedComputeService,
    setObjectAttributes,
    updateProject,
  ]);

  const resourcesMemo = useMemo(() => (
    <ResourceManagement
      attributesTouched={attributesTouched || {}}
      isLoading={isLoadingUpdateProject}
      mutateObject={updateProject}
      objectAttributes={objectAttributes}
      selectedComputeService={selectedComputeService}
      setObjectAttributes={setObjectAttributes}
    />
  ), [
    attributesTouched,
    isLoadingUpdateProject,
    objectAttributes,
    selectedComputeService,
    setObjectAttributes,
    updateProject,
  ]);

  const connectionMemo = useMemo(() => (
    <ConnectionSettings
      computeService={computeService}
      connections={connections}
      fetchComputeConnections={fetchComputeConnections}
      fetchComputeService={fetchComputeService}
    />
  ), [
    computeService,
    connections,
    fetchComputeConnections,
    fetchComputeService,
  ]);

  const monitoringMemo = useMemo(() => {
    if ([
      ComputeServiceEnum.AWS_EMR,
      ComputeServiceEnum.STANDALONE_CLUSTER,
    ].includes(selectedComputeService)) {
      return (
        <Monitoring
          objectAttributes={objectAttributes}
          refButtonTabs={refButtonTabs}
          selectedComputeService={selectedComputeService}
          // @ts-ignore
          setSelectedSql={setSelectedSql}
        />
      );
    }
  }, [
    objectAttributes,
    refButtonTabs,
    selectedComputeService,
    setSelectedSql,
  ]);

  const systemMemo = useMemo(() => {
    if ([
      ComputeServiceEnum.AWS_EMR,
      ComputeServiceEnum.STANDALONE_CLUSTER,
    ].includes(selectedComputeService)) {
      return (
        <System
          objectAttributes={objectAttributes}
        />
      );
    }
  }, [
    objectAttributes,
    selectedComputeService,
  ]);

  const computeServicesMemo = useMemo(() => (
    <Spacing mx={1} py={PADDING_UNITS}>
      <Spacing mb={PADDING_UNITS} px={PADDING_UNITS}>
        <Headline>
          Select a compute service
        </Headline>
      </Spacing>

      <FlexContainer alignItems="center" flexWrap="wrap">
        {COMPUTE_SERVICES.map(({
          buildPayload,
          displayName,
          documentationHref,
          kicker,
          renderIcon,
          uuid,
        }) => (
          <CardStyle key={uuid}>
            {renderIcon()}

            <Spacing mt={PADDING_UNITS}>
              <Text default monospace>
                {kicker}
              </Text>
              <Headline level={4}>
                {displayName}
              </Headline>
            </Spacing>

            <Spacing mt={PADDING_UNITS}>
              <FlexContainer alignItems="center">
                <Button
                  loading={isLoadingUpdateProject && uuid === selectedComputeService}
                  onClick={() => {
                    setSelectedComputeService(uuid as ComputeServiceEnum);
                    updateProject(buildPayload(objectAttributes));
                  }}
                  primary
                >
                  Enable
                </Button>

                <Spacing mr={PADDING_UNITS} />

                <Link
                  href={documentationHref}
                  default
                  openNewWindow
                >
                  View setup documentation
                </Link>
              </FlexContainer>
            </Spacing>
          </CardStyle>
        ))}
      </FlexContainer>
    </Spacing>
  ), [
    isLoadingUpdateProject,
    objectAttributes,
    selectedComputeService,
    setSelectedComputeService,
    updateProject,
  ]);

  const clustersMemo = useMemo(() => (
    <Clusters
      clusters={clusters}
      computeService={computeService}
      fetchComputeClusters={fetchComputeClusters}
      includeAllStates={includeAllStates}
      loading={clustersLoading}
      setIncludeAllStates={setIncludeAllStates}
    />
  ), [
    clusters,
    clustersLoading,
    computeService,
    fetchComputeClusters,
    includeAllStates,
    setIncludeAllStates,
  ]);

  const contentMemo = useMemo(() => {
    if (!selectedComputeService && objectAttributes) {
      return computeServicesMemo;
    }

    if (selectedComputeService && project && selectedTab?.main) {
      const uuid = selectedTab?.main;

      if (MainNavigationTabEnum.SETUP === uuid) {
        return setupMemo;
      }

      if (MainNavigationTabEnum.RESOURCES === uuid) {
        return resourcesMemo;
      }

      if (MainNavigationTabEnum.MONITORING === uuid) {
        return monitoringMemo;
      }

      if (MainNavigationTabEnum.SYSTEM === uuid) {
        return systemMemo;
      }

      if (MainNavigationTabEnum.CLUSTERS === uuid) {
        return clustersMemo;
      }

      if (MainNavigationTabEnum.CONNECTION === uuid) {
        return connectionMemo;
      }
    }
  }, [
    clustersMemo,
    computeServicesMemo,
    connectionMemo,
    monitoringMemo,
    objectAttributes,
    project,
    resourcesMemo,
    selectedComputeService,
    selectedTab,
    setupMemo,
    systemMemo,
  ]);

  return (
    <TripleLayout
      after={after}
      afterHeightOffset={HEADER_HEIGHT}
      afterHidden={afterHidden || !selectedSql}
      afterMousedownActive={afterMousedownActive}
      afterWidth={afterWidth}
      before={before}
      beforeDividerContrast
      beforeHeightOffset={0}
      beforeHidden={!selectedComputeService}
      beforeMousedownActive={beforeMousedownActive}
      beforeWidth={beforeWidth}
      contained
      height={containerHeight}
      hideAfterCompletely
      hideBeforeCompletely={!selectedComputeService}
      inline
      mainContainerRef={mainContainerRef}
      setAfterHidden={setAfterHidden}
      setAfterMousedownActive={setAfterMousedownActive}
      setAfterWidth={setAfterWidth}
      setBeforeMousedownActive={setBeforeMousedownActive}
      setBeforeWidth={setBeforeWidth}
      uuid={componentUUID}
    >
      {contentMemo}
    </TripleLayout>
  );
}

export default ComputeManagement;
