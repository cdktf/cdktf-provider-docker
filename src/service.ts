// https://www.terraform.io/docs/providers/docker/r/service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServiceConfig extends TerraformMetaArguments {
  readonly auth?: { [key: string]: string };
  /** Name of the service */
  readonly name: string;
  /** converge_config block */
  readonly convergeConfig?: ServiceConvergeConfig[];
  /** endpoint_spec block */
  readonly endpointSpec?: ServiceEndpointSpec[];
  /** labels block */
  readonly labels?: ServiceLabels[];
  /** mode block */
  readonly mode?: ServiceMode[];
  /** rollback_config block */
  readonly rollbackConfig?: ServiceRollbackConfig[];
  /** task_spec block */
  readonly taskSpec: ServiceTaskSpec[];
  /** update_config block */
  readonly updateConfig?: ServiceUpdateConfig[];
}
export interface ServiceConvergeConfig {
  /** The interval to check if the desired state is reached (ms|s). Default: 7s */
  readonly delay?: string;
  /** The timeout of the service to reach the desired state (s|m). Default: 3m */
  readonly timeout?: string;
}
export interface ServiceEndpointSpecPorts {
  /** A random name for the port */
  readonly name?: string;
  /** Rrepresents the protocol of a port: 'tcp', 'udp' or 'sctp' */
  readonly protocol?: string;
  /** Represents the mode in which the port is to be published: 'ingress' or 'host' */
  readonly publishMode?: string;
  /** The port on the swarm hosts. */
  readonly publishedPort?: number;
  /** The port inside the container */
  readonly targetPort: number;
}
export interface ServiceEndpointSpec {
  /** The mode of resolution to use for internal load balancing between tasks */
  readonly mode?: string;
  /** ports block */
  readonly ports?: ServiceEndpointSpecPorts[];
}
export interface ServiceLabels {
  /** Name of the label */
  readonly label: string;
  /** Value of the label */
  readonly value: string;
}
export interface ServiceModeReplicated {
  /** The amount of replicas of the service */
  readonly replicas?: number;
}
export interface ServiceMode {
  /** The global service mode */
  readonly global?: boolean;
  /** replicated block */
  readonly replicated?: ServiceModeReplicated[];
}
export interface ServiceRollbackConfig {
  /** Delay between task rollbacks (ns|us|ms|s|m|h) */
  readonly delay?: string;
  /** Action on rollback failure: pause | continue */
  readonly failureAction?: string;
  /** Failure rate to tolerate during a rollback */
  readonly maxFailureRatio?: string;
  /** Duration after each task rollback to monitor for failure (ns|us|ms|s|m|h) */
  readonly monitor?: string;
  /** Rollback order: either 'stop-first' or 'start-first' */
  readonly order?: string;
  /** Maximum number of tasks to be rollbacked in one iteration */
  readonly parallelism?: number;
}
export interface ServiceTaskSpecContainerSpecConfigs {
  /** ID of the specific config that we're referencing */
  readonly configId: string;
  /** Name of the config that this references, but this is just provided for lookup/display purposes. The config in the reference will be identified by its ID */
  readonly configName?: string;
  /** Represents the file GID */
  readonly fileGid?: string;
  /** Represents represents the FileMode of the file */
  readonly fileMode?: number;
  /** Represents the final filename in the filesystem */
  readonly fileName: string;
  /** Represents the file UID */
  readonly fileUid?: string;
}
export interface ServiceTaskSpecContainerSpecDnsConfig {
  /** The IP addresses of the name servers */
  readonly nameservers: string[];
  /** A list of internal resolver variables to be modified (e.g., debug, ndots:3, etc.) */
  readonly options?: string[];
  /** A search list for host-name lookup */
  readonly search?: string[];
}
export interface ServiceTaskSpecContainerSpecHealthcheck {
  /** Time between running the check (ms|s|m|h) */
  readonly interval?: string;
  /** Consecutive failures needed to report unhealthy */
  readonly retries?: number;
  /** Start period for the container to initialize before counting retries towards unstable (ms|s|m|h) */
  readonly startPeriod?: string;
  /** The test to perform as list */
  readonly test: string[];
  /** Maximum time to allow one check to run (ms|s|m|h) */
  readonly timeout?: string;
}
export interface ServiceTaskSpecContainerSpecHosts {
  readonly host: string;
  readonly ip: string;
}
export interface ServiceTaskSpecContainerSpecLabels {
  /** Name of the label */
  readonly label: string;
  /** Value of the label */
  readonly value: string;
}
export interface ServiceTaskSpecContainerSpecMountsBindOptions {
  /** A propagation mode with the value */
  readonly propagation?: string;
}
export interface ServiceTaskSpecContainerSpecMountsTmpfsOptions {
  /** The permission mode for the tmpfs mount in an integer */
  readonly mode?: number;
  /** The size for the tmpfs mount in bytes */
  readonly sizeBytes?: number;
}
export interface ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels {
  /** Name of the label */
  readonly label: string;
  /** Value of the label */
  readonly value: string;
}
export interface ServiceTaskSpecContainerSpecMountsVolumeOptions {
  /** Name of the driver to use to create the volume. */
  readonly driverName?: string;
  /** key/value map of driver specific options */
  readonly driverOptions?: { [key: string]: string };
  /** Populate volume with data from the target */
  readonly noCopy?: boolean;
  /** labels block */
  readonly labels?: ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels[];
}
export interface ServiceTaskSpecContainerSpecMounts {
  /** Whether the mount should be read-only */
  readonly readOnly?: boolean;
  /** Mount source (e.g. a volume name, a host path) */
  readonly source?: string;
  /** Container path */
  readonly target: string;
  /** The mount type */
  readonly type: string;
  /** bind_options block */
  readonly bindOptions?: ServiceTaskSpecContainerSpecMountsBindOptions[];
  /** tmpfs_options block */
  readonly tmpfsOptions?: ServiceTaskSpecContainerSpecMountsTmpfsOptions[];
  /** volume_options block */
  readonly volumeOptions?: ServiceTaskSpecContainerSpecMountsVolumeOptions[];
}
export interface ServiceTaskSpecContainerSpecPrivilegesCredentialSpec {
  /** Load credential spec from this file */
  readonly file?: string;
  /** Load credential spec from this value in the Windows registry */
  readonly registry?: string;
}
export interface ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext {
  /** Disable SELinux */
  readonly disable?: boolean;
  /** SELinux level label */
  readonly level?: string;
  /** SELinux role label */
  readonly role?: string;
  /** SELinux type label */
  readonly type?: string;
  /** SELinux user label */
  readonly user?: string;
}
export interface ServiceTaskSpecContainerSpecPrivileges {
  /** credential_spec block */
  readonly credentialSpec?: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec[];
  /** se_linux_context block */
  readonly seLinuxContext?: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext[];
}
export interface ServiceTaskSpecContainerSpecSecrets {
  /** Represents the file GID */
  readonly fileGid?: string;
  /** Represents represents the FileMode of the file */
  readonly fileMode?: number;
  /** Represents the final filename in the filesystem */
  readonly fileName: string;
  /** Represents the file UID */
  readonly fileUid?: string;
  /** ID of the specific secret that we're referencing */
  readonly secretId: string;
  /** Name of the secret that this references, but this is just provided for lookup/display purposes. The config in the reference will be identified by its ID */
  readonly secretName?: string;
}
export interface ServiceTaskSpecContainerSpec {
  /** Arguments to the command */
  readonly args?: string[];
  /** The command to be run in the image */
  readonly command?: string[];
  /** The working directory for commands to run in */
  readonly dir?: string;
  /** A list of environment variables in the form VAR="value" */
  readonly env?: { [key: string]: string };
  /** A list of additional groups that the container process will run as */
  readonly groups?: string[];
  /** The hostname to use for the container, as a valid RFC 1123 hostname */
  readonly hostname?: string;
  /** The image name to use for the containers of the service */
  readonly image: string;
  /** Isolation technology of the containers running the service. (Windows only) */
  readonly isolation?: string;
  /** Mount the container's root filesystem as read only */
  readonly readOnly?: boolean;
  /** Amount of time to wait for the container to terminate before forcefully removing it (ms|s|m|h) */
  readonly stopGracePeriod?: string;
  /** Signal to stop the container */
  readonly stopSignal?: string;
  /** The user inside the container */
  readonly user?: string;
  /** configs block */
  readonly configs?: ServiceTaskSpecContainerSpecConfigs[];
  /** dns_config block */
  readonly dnsConfig?: ServiceTaskSpecContainerSpecDnsConfig[];
  /** healthcheck block */
  readonly healthcheck?: ServiceTaskSpecContainerSpecHealthcheck[];
  /** hosts block */
  readonly hosts?: ServiceTaskSpecContainerSpecHosts[];
  /** labels block */
  readonly labels?: ServiceTaskSpecContainerSpecLabels[];
  /** mounts block */
  readonly mounts?: ServiceTaskSpecContainerSpecMounts[];
  /** privileges block */
  readonly privileges?: ServiceTaskSpecContainerSpecPrivileges[];
  /** secrets block */
  readonly secrets?: ServiceTaskSpecContainerSpecSecrets[];
}
export interface ServiceTaskSpecLogDriver {
  /** The logging driver to use */
  readonly name: string;
  /** The options for the logging driver */
  readonly options?: { [key: string]: string };
}
export interface ServiceTaskSpecPlacementPlatforms {
  /** The architecture, e.g. amd64 */
  readonly architecture: string;
  /** The operation system, e.g. linux */
  readonly os: string;
}
export interface ServiceTaskSpecPlacement {
  /** An array of constraints. e.g.: node.role==manager */
  readonly constraints?: string[];
  /** Preferences provide a way to make the scheduler aware of factors such as topology. They are provided in order from highest to lowest precedence, e.g.: spread=node.role.manager */
  readonly prefs?: string[];
  /** platforms block */
  readonly platforms?: ServiceTaskSpecPlacementPlatforms[];
}
export interface ServiceTaskSpecResourcesLimitsGenericResources {
  /** The Integer resources */
  readonly discreteResourcesSpec?: string[];
  /** The String resources */
  readonly namedResourcesSpec?: string[];
}
export interface ServiceTaskSpecResourcesLimits {
  /** The amounf of memory in bytes the container allocates */
  readonly memoryBytes?: number;
  /** CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least 1000000 */
  readonly nanoCpus?: number;
  /** generic_resources block */
  readonly genericResources?: ServiceTaskSpecResourcesLimitsGenericResources[];
}
export interface ServiceTaskSpecResourcesReservationGenericResources {
  /** The Integer resources */
  readonly discreteResourcesSpec?: string[];
  /** The String resources */
  readonly namedResourcesSpec?: string[];
}
export interface ServiceTaskSpecResourcesReservation {
  /** The amounf of memory in bytes the container allocates */
  readonly memoryBytes?: number;
  /** CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least 1000000 */
  readonly nanoCpus?: number;
  /** generic_resources block */
  readonly genericResources?: ServiceTaskSpecResourcesReservationGenericResources[];
}
export interface ServiceTaskSpecResources {
  /** limits block */
  readonly limits?: ServiceTaskSpecResourcesLimits[];
  /** reservation block */
  readonly reservation?: ServiceTaskSpecResourcesReservation[];
}
export interface ServiceTaskSpec {
  /** A counter that triggers an update even if no relevant parameters have been changed. See https://github.com/docker/swarmkit/blob/master/api/specs.proto#L126 */
  readonly forceUpdate?: number;
  /** Ids of the networks in which the  container will be put in. */
  readonly networks?: string[];
  /** Specification for the restart policy which applies to containers created as part of this service. */
  readonly restartPolicy?: { [key: string]: string };
  /** Runtime is the type of runtime specified for the task executor. See https://github.com/moby/moby/blob/master/api/types/swarm/runtime.go */
  readonly runtime?: string;
  /** container_spec block */
  readonly containerSpec: ServiceTaskSpecContainerSpec[];
  /** log_driver block */
  readonly logDriver?: ServiceTaskSpecLogDriver[];
  /** placement block */
  readonly placement?: ServiceTaskSpecPlacement[];
  /** resources block */
  readonly resources?: ServiceTaskSpecResources[];
}
export interface ServiceUpdateConfig {
  /** Delay between task updates (ns|us|ms|s|m|h) */
  readonly delay?: string;
  /** Action on update failure: pause | continue | rollback */
  readonly failureAction?: string;
  /** Failure rate to tolerate during an update */
  readonly maxFailureRatio?: string;
  /** Duration after each task update to monitor for failure (ns|us|ms|s|m|h) */
  readonly monitor?: string;
  /** Update order: either 'stop-first' or 'start-first' */
  readonly order?: string;
  /** Maximum number of tasks to be updated in one iteration */
  readonly parallelism?: number;
}

// Resource

export class Service extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_service',
      terraformGeneratorMetadata: {
        providerName: 'docker'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._auth = config.auth;
    this._name = config.name;
    this._convergeConfig = config.convergeConfig;
    this._endpointSpec = config.endpointSpec;
    this._labels = config.labels;
    this._mode = config.mode;
    this._rollbackConfig = config.rollbackConfig;
    this._taskSpec = config.taskSpec;
    this._updateConfig = config.updateConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: false, optional: true, required: false
  private _auth?: { [key: string]: string };
  public get auth() {
    return this.interpolationForAttribute('auth') as any;
  }
  public set auth(value: { [key: string]: string } ) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // converge_config - computed: false, optional: true, required: false
  private _convergeConfig?: ServiceConvergeConfig[];
  public get convergeConfig() {
    return this.interpolationForAttribute('converge_config') as any;
  }
  public set convergeConfig(value: ServiceConvergeConfig[] ) {
    this._convergeConfig = value;
  }
  public resetConvergeConfig() {
    this._convergeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convergeConfigInput() {
    return this._convergeConfig
  }

  // endpoint_spec - computed: false, optional: true, required: false
  private _endpointSpec?: ServiceEndpointSpec[];
  public get endpointSpec() {
    return this.interpolationForAttribute('endpoint_spec') as any;
  }
  public set endpointSpec(value: ServiceEndpointSpec[] ) {
    this._endpointSpec = value;
  }
  public resetEndpointSpec() {
    this._endpointSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSpecInput() {
    return this._endpointSpec
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: ServiceLabels[];
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: ServiceLabels[] ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: ServiceMode[];
  public get mode() {
    return this.interpolationForAttribute('mode') as any;
  }
  public set mode(value: ServiceMode[] ) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
  }

  // rollback_config - computed: false, optional: true, required: false
  private _rollbackConfig?: ServiceRollbackConfig[];
  public get rollbackConfig() {
    return this.interpolationForAttribute('rollback_config') as any;
  }
  public set rollbackConfig(value: ServiceRollbackConfig[] ) {
    this._rollbackConfig = value;
  }
  public resetRollbackConfig() {
    this._rollbackConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackConfigInput() {
    return this._rollbackConfig
  }

  // task_spec - computed: false, optional: false, required: true
  private _taskSpec: ServiceTaskSpec[];
  public get taskSpec() {
    return this.interpolationForAttribute('task_spec') as any;
  }
  public set taskSpec(value: ServiceTaskSpec[]) {
    this._taskSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskSpecInput() {
    return this._taskSpec
  }

  // update_config - computed: false, optional: true, required: false
  private _updateConfig?: ServiceUpdateConfig[];
  public get updateConfig() {
    return this.interpolationForAttribute('update_config') as any;
  }
  public set updateConfig(value: ServiceUpdateConfig[] ) {
    this._updateConfig = value;
  }
  public resetUpdateConfig() {
    this._updateConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateConfigInput() {
    return this._updateConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth: this._auth,
      name: this._name,
      converge_config: this._convergeConfig,
      endpoint_spec: this._endpointSpec,
      labels: this._labels,
      mode: this._mode,
      rollback_config: this._rollbackConfig,
      task_spec: this._taskSpec,
      update_config: this._updateConfig,
    };
  }
}
