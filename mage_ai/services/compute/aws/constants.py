from enum import Enum

CONNECTION_CREDENTIAL_AWS_ACCESS_KEY_ID = 'AWS_ACCESS_KEY_ID'
CONNECTION_CREDENTIAL_AWS_SECRET_ACCESS_KEY = 'AWS_SECRET_ACCESS_KEY'


class ClusterStatusState(str, Enum):
    BOOTSTRAPPING = 'BOOTSTRAPPING'
    RUNNING = 'RUNNING'
    STARTING = 'STARTING'
    TERMINATED = 'TERMINATED'
    TERMINATED_WITH_ERRORS = 'TERMINATED_WITH_ERRORS'
    TERMINATING = 'TERMINATING'
    WAITING = 'WAITING'


INVALID_STATES = [
    ClusterStatusState.TERMINATED,
    ClusterStatusState.TERMINATED_WITH_ERRORS,
    ClusterStatusState.TERMINATING,
]
