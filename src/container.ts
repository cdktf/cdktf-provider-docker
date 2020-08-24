// https://www.terraform.io/docs/providers/docker/r/container.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface ContainerConfig extends TerraformMetaArguments {
  readonly attach?: boolean;
  readonly command?: string[];
  readonly cpuSet?: string;
  readonly cpuShares?: number;
  readonly destroyGraceSeconds?: number;
  readonly dns?: string[];
  readonly dnsOpts?: string[];
  readonly dnsSearch?: string[];
  readonly domainname?: string;
  readonly entrypoint?: string[];
  readonly env?: string[];
  /** Additional groups for the container user */
  readonly groupAdd?: string[];
  readonly hostname?: string;
  readonly image: string;
  /** IPC sharing mode for the container */
  readonly ipcMode?: string;
  readonly links?: string[];
  readonly logDriver?: string;
  readonly logOpts?: { [key: string]: string };
  readonly logs?: boolean;
  readonly maxRetryCount?: number;
  readonly memory?: number;
  readonly memorySwap?: number;
  readonly mustRun?: boolean;
  readonly name: string;
  /** Set an alias for the container in all specified networks */
  readonly networkAlias?: string[];
  readonly networkMode?: string;
  readonly networks?: string[];
  readonly pidMode?: string;
  readonly privileged?: boolean;
  readonly publishAllPorts?: boolean;
  readonly readOnly?: boolean;
  readonly restart?: string;
  readonly rm?: boolean;
  readonly shmSize?: number;
  readonly start?: boolean;
  readonly sysctls?: { [key: string]: string };
  readonly tmpfs?: { [key: string]: string };
  readonly user?: string;
  readonly usernsMode?: string;
  readonly workingDir?: string;
  /** capabilities block */
  readonly capabilities?: ContainerCapabilities[];
  /** devices block */
  readonly devices?: ContainerDevices[];
  /** healthcheck block */
  readonly healthcheck?: ContainerHealthcheck[];
  /** host block */
  readonly host?: ContainerHost[];
  /** labels block */
  readonly labels?: ContainerLabels[];
  /** mounts block */
  readonly mounts?: ContainerMounts[];
  /** networks_advanced block */
  readonly networksAdvanced?: ContainerNetworksAdvanced[];
  /** ports block */
  readonly ports?: ContainerPorts[];
  /** ulimit block */
  readonly ulimit?: ContainerUlimit[];
  /** upload block */
  readonly upload?: ContainerUpload[];
  /** volumes block */
  readonly volumes?: ContainerVolumes[];
}
export class ContainerNetworkData extends ComplexComputedList {

  // gateway - computed: true, optional: false, required: true
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_prefix_length - computed: true, optional: false, required: true
  public get ipPrefixLength() {
    return this.getNumberAttribute('ip_prefix_length');
  }

  // network_name - computed: true, optional: false, required: true
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
}
export interface ContainerCapabilities {
  readonly add?: string[];
  readonly drop?: string[];
}
export interface ContainerDevices {
  readonly containerPath?: string;
  readonly hostPath: string;
  readonly permissions?: string;
}
export interface ContainerHealthcheck {
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
export interface ContainerHost {
  readonly host: string;
  readonly ip: string;
}
export interface ContainerLabels {
  /** Name of the label */
  readonly label: string;
  /** Value of the label */
  readonly value: string;
}
export interface ContainerMountsBindOptions {
  /** A propagation mode with the value */
  readonly propagation?: string;
}
export interface ContainerMountsTmpfsOptions {
  /** The permission mode for the tmpfs mount in an integer */
  readonly mode?: number;
  /** The size for the tmpfs mount in bytes */
  readonly sizeBytes?: number;
}
export interface ContainerMountsVolumeOptionsLabels {
  /** Name of the label */
  readonly label: string;
  /** Value of the label */
  readonly value: string;
}
export interface ContainerMountsVolumeOptions {
  /** Name of the driver to use to create the volume. */
  readonly driverName?: string;
  /** key/value map of driver specific options */
  readonly driverOptions?: { [key: string]: string };
  /** Populate volume with data from the target */
  readonly noCopy?: boolean;
  /** labels block */
  readonly labels?: ContainerMountsVolumeOptionsLabels[];
}
export interface ContainerMounts {
  /** Whether the mount should be read-only */
  readonly readOnly?: boolean;
  /** Mount source (e.g. a volume name, a host path) */
  readonly source?: string;
  /** Container path */
  readonly target: string;
  /** The mount type */
  readonly type: string;
  /** bind_options block */
  readonly bindOptions?: ContainerMountsBindOptions[];
  /** tmpfs_options block */
  readonly tmpfsOptions?: ContainerMountsTmpfsOptions[];
  /** volume_options block */
  readonly volumeOptions?: ContainerMountsVolumeOptions[];
}
export interface ContainerNetworksAdvanced {
  readonly aliases?: string[];
  readonly ipv4Address?: string;
  readonly ipv6Address?: string;
  readonly name: string;
}
export interface ContainerPorts {
  readonly external?: number;
  readonly internal: number;
  readonly ip?: string;
  readonly protocol?: string;
}
export interface ContainerUlimit {
  readonly hard: number;
  readonly name: string;
  readonly soft: number;
}
export interface ContainerUpload {
  readonly content?: string;
  readonly contentBase64?: string;
  readonly executable?: boolean;
  readonly file: string;
  readonly source?: string;
  readonly sourceHash?: string;
}
export interface ContainerVolumes {
  readonly containerPath?: string;
  readonly fromContainer?: string;
  readonly hostPath?: string;
  readonly readOnly?: boolean;
  readonly volumeName?: string;
}

// Resource

export class Container extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_container',
      terraformGeneratorMetadata: {
        providerName: 'docker'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._attach = config.attach;
    this._command = config.command;
    this._cpuSet = config.cpuSet;
    this._cpuShares = config.cpuShares;
    this._destroyGraceSeconds = config.destroyGraceSeconds;
    this._dns = config.dns;
    this._dnsOpts = config.dnsOpts;
    this._dnsSearch = config.dnsSearch;
    this._domainname = config.domainname;
    this._entrypoint = config.entrypoint;
    this._env = config.env;
    this._groupAdd = config.groupAdd;
    this._hostname = config.hostname;
    this._image = config.image;
    this._ipcMode = config.ipcMode;
    this._links = config.links;
    this._logDriver = config.logDriver;
    this._logOpts = config.logOpts;
    this._logs = config.logs;
    this._maxRetryCount = config.maxRetryCount;
    this._memory = config.memory;
    this._memorySwap = config.memorySwap;
    this._mustRun = config.mustRun;
    this._name = config.name;
    this._networkAlias = config.networkAlias;
    this._networkMode = config.networkMode;
    this._networks = config.networks;
    this._pidMode = config.pidMode;
    this._privileged = config.privileged;
    this._publishAllPorts = config.publishAllPorts;
    this._readOnly = config.readOnly;
    this._restart = config.restart;
    this._rm = config.rm;
    this._shmSize = config.shmSize;
    this._start = config.start;
    this._sysctls = config.sysctls;
    this._tmpfs = config.tmpfs;
    this._user = config.user;
    this._usernsMode = config.usernsMode;
    this._workingDir = config.workingDir;
    this._capabilities = config.capabilities;
    this._devices = config.devices;
    this._healthcheck = config.healthcheck;
    this._host = config.host;
    this._labels = config.labels;
    this._mounts = config.mounts;
    this._networksAdvanced = config.networksAdvanced;
    this._ports = config.ports;
    this._ulimit = config.ulimit;
    this._upload = config.upload;
    this._volumes = config.volumes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attach - computed: false, optional: true, required: false
  private _attach?: boolean;
  public get attach() {
    return this._attach;
  }
  public set attach(value: boolean | undefined) {
    this._attach = value;
  }

  // bridge - computed: true, optional: false, required: true
  public get bridge() {
    return this.getStringAttribute('bridge');
  }

  // command - computed: true, optional: true, required: false
  private _command?: string[];
  public get command() {
    return this._command ?? this.getListAttribute('command');
  }
  public set command(value: string[] | undefined) {
    this._command = value;
  }

  // container_logs - computed: true, optional: false, required: true
  public get containerLogs() {
    return this.getStringAttribute('container_logs');
  }

  // cpu_set - computed: false, optional: true, required: false
  private _cpuSet?: string;
  public get cpuSet() {
    return this._cpuSet;
  }
  public set cpuSet(value: string | undefined) {
    this._cpuSet = value;
  }

  // cpu_shares - computed: false, optional: true, required: false
  private _cpuShares?: number;
  public get cpuShares() {
    return this._cpuShares;
  }
  public set cpuShares(value: number | undefined) {
    this._cpuShares = value;
  }

  // destroy_grace_seconds - computed: false, optional: true, required: false
  private _destroyGraceSeconds?: number;
  public get destroyGraceSeconds() {
    return this._destroyGraceSeconds;
  }
  public set destroyGraceSeconds(value: number | undefined) {
    this._destroyGraceSeconds = value;
  }

  // dns - computed: true, optional: true, required: false
  private _dns?: string[];
  public get dns() {
    return this._dns ?? this.getListAttribute('dns');
  }
  public set dns(value: string[] | undefined) {
    this._dns = value;
  }

  // dns_opts - computed: true, optional: true, required: false
  private _dnsOpts?: string[];
  public get dnsOpts() {
    return this._dnsOpts ?? this.getListAttribute('dns_opts');
  }
  public set dnsOpts(value: string[] | undefined) {
    this._dnsOpts = value;
  }

  // dns_search - computed: false, optional: true, required: false
  private _dnsSearch?: string[];
  public get dnsSearch() {
    return this._dnsSearch;
  }
  public set dnsSearch(value: string[] | undefined) {
    this._dnsSearch = value;
  }

  // domainname - computed: false, optional: true, required: false
  private _domainname?: string;
  public get domainname() {
    return this._domainname;
  }
  public set domainname(value: string | undefined) {
    this._domainname = value;
  }

  // entrypoint - computed: true, optional: true, required: false
  private _entrypoint?: string[];
  public get entrypoint() {
    return this._entrypoint ?? this.getListAttribute('entrypoint');
  }
  public set entrypoint(value: string[] | undefined) {
    this._entrypoint = value;
  }

  // env - computed: false, optional: true, required: false
  private _env?: string[];
  public get env() {
    return this._env;
  }
  public set env(value: string[] | undefined) {
    this._env = value;
  }

  // exit_code - computed: true, optional: false, required: true
  public get exitCode() {
    return this.getNumberAttribute('exit_code');
  }

  // gateway - computed: true, optional: false, required: true
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // group_add - computed: false, optional: true, required: false
  private _groupAdd?: string[];
  public get groupAdd() {
    return this._groupAdd;
  }
  public set groupAdd(value: string[] | undefined) {
    this._groupAdd = value;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string;
  public get hostname() {
    return this._hostname ?? this.getStringAttribute('hostname');
  }
  public set hostname(value: string | undefined) {
    this._hostname = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // image - computed: false, optional: false, required: true
  private _image: string;
  public get image() {
    return this._image;
  }
  public set image(value: string) {
    this._image = value;
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_prefix_length - computed: true, optional: false, required: true
  public get ipPrefixLength() {
    return this.getNumberAttribute('ip_prefix_length');
  }

  // ipc_mode - computed: true, optional: true, required: false
  private _ipcMode?: string;
  public get ipcMode() {
    return this._ipcMode ?? this.getStringAttribute('ipc_mode');
  }
  public set ipcMode(value: string | undefined) {
    this._ipcMode = value;
  }

  // links - computed: false, optional: true, required: false
  private _links?: string[];
  public get links() {
    return this._links;
  }
  public set links(value: string[] | undefined) {
    this._links = value;
  }

  // log_driver - computed: true, optional: true, required: false
  private _logDriver?: string;
  public get logDriver() {
    return this._logDriver ?? this.getStringAttribute('log_driver');
  }
  public set logDriver(value: string | undefined) {
    this._logDriver = value;
  }

  // log_opts - computed: true, optional: true, required: false
  private _logOpts?: { [key: string]: string }
  public get logOpts(): { [key: string]: string } | undefined {
    return this._logOpts; // Getting the computed value is not yet implemented
  }
  public set logOpts(value: { [key: string]: string } | undefined) {
    this._logOpts = value;
  }

  // logs - computed: false, optional: true, required: false
  private _logs?: boolean;
  public get logs() {
    return this._logs;
  }
  public set logs(value: boolean | undefined) {
    this._logs = value;
  }

  // max_retry_count - computed: false, optional: true, required: false
  private _maxRetryCount?: number;
  public get maxRetryCount() {
    return this._maxRetryCount;
  }
  public set maxRetryCount(value: number | undefined) {
    this._maxRetryCount = value;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number;
  public get memory() {
    return this._memory;
  }
  public set memory(value: number | undefined) {
    this._memory = value;
  }

  // memory_swap - computed: false, optional: true, required: false
  private _memorySwap?: number;
  public get memorySwap() {
    return this._memorySwap;
  }
  public set memorySwap(value: number | undefined) {
    this._memorySwap = value;
  }

  // must_run - computed: false, optional: true, required: false
  private _mustRun?: boolean;
  public get mustRun() {
    return this._mustRun;
  }
  public set mustRun(value: boolean | undefined) {
    this._mustRun = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network_alias - computed: false, optional: true, required: false
  private _networkAlias?: string[];
  public get networkAlias() {
    return this._networkAlias;
  }
  public set networkAlias(value: string[] | undefined) {
    this._networkAlias = value;
  }

  // network_data - computed: true, optional: false, required: true
  public networkData(index: string) {
    return new ContainerNetworkData(this, 'network_data', index);
  }

  // network_mode - computed: false, optional: true, required: false
  private _networkMode?: string;
  public get networkMode() {
    return this._networkMode;
  }
  public set networkMode(value: string | undefined) {
    this._networkMode = value;
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: string[];
  public get networks() {
    return this._networks;
  }
  public set networks(value: string[] | undefined) {
    this._networks = value;
  }

  // pid_mode - computed: false, optional: true, required: false
  private _pidMode?: string;
  public get pidMode() {
    return this._pidMode;
  }
  public set pidMode(value: string | undefined) {
    this._pidMode = value;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean;
  public get privileged() {
    return this._privileged;
  }
  public set privileged(value: boolean | undefined) {
    this._privileged = value;
  }

  // publish_all_ports - computed: false, optional: true, required: false
  private _publishAllPorts?: boolean;
  public get publishAllPorts() {
    return this._publishAllPorts;
  }
  public set publishAllPorts(value: boolean | undefined) {
    this._publishAllPorts = value;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean;
  public get readOnly() {
    return this._readOnly;
  }
  public set readOnly(value: boolean | undefined) {
    this._readOnly = value;
  }

  // restart - computed: false, optional: true, required: false
  private _restart?: string;
  public get restart() {
    return this._restart;
  }
  public set restart(value: string | undefined) {
    this._restart = value;
  }

  // rm - computed: false, optional: true, required: false
  private _rm?: boolean;
  public get rm() {
    return this._rm;
  }
  public set rm(value: boolean | undefined) {
    this._rm = value;
  }

  // shm_size - computed: true, optional: true, required: false
  private _shmSize?: number;
  public get shmSize() {
    return this._shmSize ?? this.getNumberAttribute('shm_size');
  }
  public set shmSize(value: number | undefined) {
    this._shmSize = value;
  }

  // start - computed: false, optional: true, required: false
  private _start?: boolean;
  public get start() {
    return this._start;
  }
  public set start(value: boolean | undefined) {
    this._start = value;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls?: { [key: string]: string };
  public get sysctls() {
    return this._sysctls;
  }
  public set sysctls(value: { [key: string]: string } | undefined) {
    this._sysctls = value;
  }

  // tmpfs - computed: false, optional: true, required: false
  private _tmpfs?: { [key: string]: string };
  public get tmpfs() {
    return this._tmpfs;
  }
  public set tmpfs(value: { [key: string]: string } | undefined) {
    this._tmpfs = value;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string;
  public get user() {
    return this._user ?? this.getStringAttribute('user');
  }
  public set user(value: string | undefined) {
    this._user = value;
  }

  // userns_mode - computed: false, optional: true, required: false
  private _usernsMode?: string;
  public get usernsMode() {
    return this._usernsMode;
  }
  public set usernsMode(value: string | undefined) {
    this._usernsMode = value;
  }

  // working_dir - computed: true, optional: true, required: false
  private _workingDir?: string;
  public get workingDir() {
    return this._workingDir ?? this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string | undefined) {
    this._workingDir = value;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: ContainerCapabilities[];
  public get capabilities() {
    return this._capabilities;
  }
  public set capabilities(value: ContainerCapabilities[] | undefined) {
    this._capabilities = value;
  }

  // devices - computed: false, optional: true, required: false
  private _devices?: ContainerDevices[];
  public get devices() {
    return this._devices;
  }
  public set devices(value: ContainerDevices[] | undefined) {
    this._devices = value;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck?: ContainerHealthcheck[];
  public get healthcheck() {
    return this._healthcheck;
  }
  public set healthcheck(value: ContainerHealthcheck[] | undefined) {
    this._healthcheck = value;
  }

  // host - computed: false, optional: true, required: false
  private _host?: ContainerHost[];
  public get host() {
    return this._host;
  }
  public set host(value: ContainerHost[] | undefined) {
    this._host = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: ContainerLabels[];
  public get labels() {
    return this._labels;
  }
  public set labels(value: ContainerLabels[] | undefined) {
    this._labels = value;
  }

  // mounts - computed: false, optional: true, required: false
  private _mounts?: ContainerMounts[];
  public get mounts() {
    return this._mounts;
  }
  public set mounts(value: ContainerMounts[] | undefined) {
    this._mounts = value;
  }

  // networks_advanced - computed: false, optional: true, required: false
  private _networksAdvanced?: ContainerNetworksAdvanced[];
  public get networksAdvanced() {
    return this._networksAdvanced;
  }
  public set networksAdvanced(value: ContainerNetworksAdvanced[] | undefined) {
    this._networksAdvanced = value;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: ContainerPorts[];
  public get ports() {
    return this._ports;
  }
  public set ports(value: ContainerPorts[] | undefined) {
    this._ports = value;
  }

  // ulimit - computed: false, optional: true, required: false
  private _ulimit?: ContainerUlimit[];
  public get ulimit() {
    return this._ulimit;
  }
  public set ulimit(value: ContainerUlimit[] | undefined) {
    this._ulimit = value;
  }

  // upload - computed: false, optional: true, required: false
  private _upload?: ContainerUpload[];
  public get upload() {
    return this._upload;
  }
  public set upload(value: ContainerUpload[] | undefined) {
    this._upload = value;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: ContainerVolumes[];
  public get volumes() {
    return this._volumes;
  }
  public set volumes(value: ContainerVolumes[] | undefined) {
    this._volumes = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attach: this._attach,
      command: this._command,
      cpu_set: this._cpuSet,
      cpu_shares: this._cpuShares,
      destroy_grace_seconds: this._destroyGraceSeconds,
      dns: this._dns,
      dns_opts: this._dnsOpts,
      dns_search: this._dnsSearch,
      domainname: this._domainname,
      entrypoint: this._entrypoint,
      env: this._env,
      group_add: this._groupAdd,
      hostname: this._hostname,
      image: this._image,
      ipc_mode: this._ipcMode,
      links: this._links,
      log_driver: this._logDriver,
      log_opts: this._logOpts,
      logs: this._logs,
      max_retry_count: this._maxRetryCount,
      memory: this._memory,
      memory_swap: this._memorySwap,
      must_run: this._mustRun,
      name: this._name,
      network_alias: this._networkAlias,
      network_mode: this._networkMode,
      networks: this._networks,
      pid_mode: this._pidMode,
      privileged: this._privileged,
      publish_all_ports: this._publishAllPorts,
      read_only: this._readOnly,
      restart: this._restart,
      rm: this._rm,
      shm_size: this._shmSize,
      start: this._start,
      sysctls: this._sysctls,
      tmpfs: this._tmpfs,
      user: this._user,
      userns_mode: this._usernsMode,
      working_dir: this._workingDir,
      capabilities: this._capabilities,
      devices: this._devices,
      healthcheck: this._healthcheck,
      host: this._host,
      labels: this._labels,
      mounts: this._mounts,
      networks_advanced: this._networksAdvanced,
      ports: this._ports,
      ulimit: this._ulimit,
      upload: this._upload,
      volumes: this._volumes,
    };
  }
}
