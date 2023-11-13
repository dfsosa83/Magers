import { useMemo } from 'react';

import AWSEMRClusterType from './AWSEMRClusterType';
import ComputeClusterType from '@interfaces/ComputeClusterType';
import ComputeConnectionType from '@interfaces/ComputeConnectionType';
import ComputeServiceType, {
  ComputeServiceUUIDEnum,
  SetupStepStatusEnum,
} from '@interfaces/ComputeServiceType';
import api from '@api';
import useProject from '@utils/models/project/useProject';

function useComputeService({
  clustersRefreshInterval,
  computeServiceRefreshInterval,
  connectionsRefreshInterval,
  includeAllStates,
}: {
  clustersRefreshInterval?: number;
  computeServiceRefreshInterval?: number;
  connectionsRefreshInterval?: number;
  includeAllStates?: boolean;
} = {}): {
  activeCluster?: AWSEMRClusterType;
  clusters?: AWSEMRClusterType[];
  clustersLoading?: boolean;
  computeService?: ComputeServiceType;
  // @ts-ignore
  computeServiceUUIDs: {
    [key: string]: ComputeServiceUUIDEnum;
  };
  connections?: ComputeConnectionType[];
  fetchComputeClusters?: () => void;
  fetchComputeConnections?: () => void;
  fetchComputeService?: () => void;
  setupComplete?: boolean;
} {
  const {
    sparkEnabled,
  } = useProject();

  const {
    data: dataComputeService,
    mutate: fetchComputeService,
  } = api.compute_services.detail('compute-service', {}, {
    refreshInterval: computeServiceRefreshInterval,
  }, {
    pauseFetch: !sparkEnabled,
  });
  const computeService: ComputeServiceType = useMemo(() => dataComputeService?.compute_service, [
    dataComputeService,
  ]);

  const computeClustersQuery: {
    include_all_states?: boolean;
  } = {};

  if (includeAllStates) {
    computeClustersQuery.include_all_states = true;
  }

  const {
    data: dataComputeClusters,
    mutate: fetchComputeClusters,
  } = api.compute_clusters.compute_services.list(computeService?.uuid, computeClustersQuery, {
    refreshInterval: clustersRefreshInterval,
  }, {
    pauseFetch: !sparkEnabled,
  });

  const computeClusters: ComputeClusterType[] =
    useMemo(() => dataComputeClusters?.compute_clusters || [], [
      dataComputeClusters,
    ]);

  const clusters: AWSEMRClusterType[] =
    useMemo(() => computeClusters?.map(({ cluster }) => cluster), [
      computeClusters,
    ]);

  const setupComplete: boolean = useMemo(() => {
    if (!computeService?.setup_steps?.length) {
      return null;
    }

    return computeService?.setup_steps?.every(({
      required,
      status,
    }) => !required || !status || SetupStepStatusEnum.COMPLETED === status);
  }, [
    computeService,
  ]);

  const activeCluster = useMemo(() => clusters?.find(({ active }) => active), [
    clusters,
  ]);

  const {
    data: dataComputeConnections,
    mutate: fetchComputeConnections,
  } = api.compute_connections.compute_services.list(computeService?.uuid, {}, {
    refreshInterval: connectionsRefreshInterval,
  }, {
    pauseFetch: !sparkEnabled,
  });
  const computeConnections: ComputeConnectionType[] =
    useMemo(() => dataComputeConnections?.compute_connections || [], [
      dataComputeConnections,
    ]);

  return {
    activeCluster: clusters?.find(({ active }) => active),
    clusters,
    clustersLoading: !dataComputeClusters,
    computeService,
    computeServiceUUIDs: Object.entries(ComputeServiceUUIDEnum).reduce((acc, [k, v]) => ({
      ...acc,
      [k]: v,
    }), {}),
    connections: computeConnections,
    fetchComputeClusters,
    fetchComputeConnections,
    fetchComputeService,
    setupComplete,
  };
}

export default useComputeService;
