from mage_ai.api.oauth_scope import OauthScope
from mage_ai.api.operations.constants import OperationType
from mage_ai.api.policies.BasePolicy import BasePolicy
from mage_ai.api.presenters.ComputeConnectionPresenter import ComputeConnectionPresenter


class ComputeConnectionPolicy(BasePolicy):
    pass


ComputeConnectionPolicy.allow_actions(
    [
        OperationType.DETAIL,
        OperationType.LIST,
    ],
    scopes=[
        OauthScope.CLIENT_PRIVATE,
    ],
    condition=lambda policy: policy.has_at_least_viewer_role(),
    override_permission_condition=lambda _policy: True,
)


ComputeConnectionPolicy.allow_actions(
    [
        OperationType.CREATE,
        OperationType.DELETE,
        OperationType.UPDATE,
    ],
    scopes=[
        OauthScope.CLIENT_PRIVATE,
    ],
    condition=lambda policy: policy.has_at_least_editor_role(),
    override_permission_condition=lambda _policy: True,
)


ComputeConnectionPolicy.allow_read(
    ComputeConnectionPresenter.default_attributes,
    scopes=[
        OauthScope.CLIENT_PRIVATE,
    ],
    on_action=[
        OperationType.DETAIL,
        OperationType.LIST,
    ],
    condition=lambda policy: policy.has_at_least_viewer_role(),
    override_permission_condition=lambda _policy: True,
)


ComputeConnectionPolicy.allow_read(
    ComputeConnectionPresenter.default_attributes,
    scopes=[
        OauthScope.CLIENT_PRIVATE,
    ],
    on_action=[
        OperationType.CREATE,
        OperationType.DELETE,
        OperationType.UPDATE,
    ],
    condition=lambda policy: policy.has_at_least_editor_role(),
    override_permission_condition=lambda _policy: True,
)


ComputeConnectionPolicy.allow_write(
    [
        'action',
    ],
    scopes=[
        OauthScope.CLIENT_PRIVATE,
    ],
    on_action=[
        OperationType.CREATE,
        OperationType.DELETE,
        OperationType.UPDATE,
    ],
    condition=lambda policy: policy.has_at_least_editor_role(),
    override_permission_condition=lambda _policy: True,
)
