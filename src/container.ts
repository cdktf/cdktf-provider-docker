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

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_prefix_length - computed: true, optional: false, required: false
  public get ipPrefixLength() {
    return this.getNumberAttribute('ip_prefix_length');
  }

  // network_name - computed: true, optional: false, required: false
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
    return this.getBooleanAttribute('attach');
  }
  public set attach(value: boolean ) {
    this._attach = value;
  }
  public resetAttach() {
    this._attach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachInput() {
    return this._attach
  }

  // bridge - computed: true, optional: false, required: false
  public get bridge() {
    return this.getStringAttribute('bridge');
  }

  // command - computed: true, optional: true, required: false
  private _command?: string[];
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command
  }

  // container_logs - computed: true, optional: false, required: false
  public get containerLogs() {
    return this.getStringAttribute('container_logs');
  }

  // cpu_set - computed: false, optional: true, required: false
  private _cpuSet?: string;
  public get cpuSet() {
    return this.getStringAttribute('cpu_set');
  }
  public set cpuSet(value: string ) {
    this._cpuSet = value;
  }
  public resetCpuSet() {
    this._cpuSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSetInput() {
    return this._cpuSet
  }

  // cpu_shares - computed: false, optional: true, required: false
  private _cpuShares?: number;
  public get cpuShares() {
    return this.getNumberAttribute('cpu_shares');
  }
  public set cpuShares(value: number ) {
    this._cpuShares = value;
  }
  public resetCpuShares() {
    this._cpuShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSharesInput() {
    return this._cpuShares
  }

  // destroy_grace_seconds - computed: false, optional: true, required: false
  private _destroyGraceSeconds?: number;
  public get destroyGraceSeconds() {
    return this.getNumberAttribute('destroy_grace_seconds');
  }
  public set destroyGraceSeconds(value: number ) {
    this._destroyGraceSeconds = value;
  }
  public resetDestroyGraceSeconds() {
    this._destroyGraceSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyGraceSecondsInput() {
    return this._destroyGraceSeconds
  }

  // dns - computed: true, optional: true, required: false
  private _dns?: string[];
  public get dns() {
    return this.getListAttribute('dns');
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns
  }

  // dns_opts - computed: true, optional: true, required: false
  private _dnsOpts?: string[];
  public get dnsOpts() {
    return this.getListAttribute('dns_opts');
  }
  public set dnsOpts(value: string[]) {
    this._dnsOpts = value;
  }
  public resetDnsOpts() {
    this._dnsOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOptsInput() {
    return this._dnsOpts
  }

  // dns_search - computed: false, optional: true, required: false
  private _dnsSearch?: string[];
  public get dnsSearch() {
    return this.getListAttribute('dns_search');
  }
  public set dnsSearch(value: string[] ) {
    this._dnsSearch = value;
  }
  public resetDnsSearch() {
    this._dnsSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSearchInput() {
    return this._dnsSearch
  }

  // domainname - computed: false, optional: true, required: false
  private _domainname?: string;
  public get domainname() {
    return this.getStringAttribute('domainname');
  }
  public set domainname(value: string ) {
    this._domainname = value;
  }
  public resetDomainname() {
    this._domainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainnameInput() {
    return this._domainname
  }

  // entrypoint - computed: true, optional: true, required: false
  private _entrypoint?: string[];
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }
  public set entrypoint(value: string[]) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint
  }

  // env - computed: false, optional: true, required: false
  private _env?: string[];
  public get env() {
    return this.getListAttribute('env');
  }
  public set env(value: string[] ) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env
  }

  // exit_code - computed: true, optional: false, required: false
  public get exitCode() {
    return this.getNumberAttribute('exit_code');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // group_add - computed: false, optional: true, required: false
  private _groupAdd?: string[];
  public get groupAdd() {
    return this.getListAttribute('group_add');
  }
  public set groupAdd(value: string[] ) {
    this._groupAdd = value;
  }
  public resetGroupAdd() {
    this._groupAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAddInput() {
    return this._groupAdd
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string;
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: false, optional: false, required: true
  private _image: string;
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_prefix_length - computed: true, optional: false, required: false
  public get ipPrefixLength() {
    return this.getNumberAttribute('ip_prefix_length');
  }

  // ipc_mode - computed: true, optional: true, required: false
  private _ipcMode?: string;
  public get ipcMode() {
    return this.getStringAttribute('ipc_mode');
  }
  public set ipcMode(value: string) {
    this._ipcMode = value;
  }
  public resetIpcMode() {
    this._ipcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipcModeInput() {
    return this._ipcMode
  }

  // links - computed: false, optional: true, required: false
  private _links?: string[];
  public get links() {
    return this.getListAttribute('links');
  }
  public set links(value: string[] ) {
    this._links = value;
  }
  public resetLinks() {
    this._links = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links
  }

  // log_driver - computed: true, optional: true, required: false
  private _logDriver?: string;
  public get logDriver() {
    return this.getStringAttribute('log_driver');
  }
  public set logDriver(value: string) {
    this._logDriver = value;
  }
  public resetLogDriver() {
    this._logDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDriverInput() {
    return this._logDriver
  }

  // log_opts - computed: true, optional: true, required: false
  private _logOpts?: { [key: string]: string }
  public get logOpts(): { [key: string]: string } {
    return this.interpolationForAttribute('log_opts') as any; // Getting the computed value is not yet implemented
  }
  public set logOpts(value: { [key: string]: string }) {
    this._logOpts = value;
  }
  public resetLogOpts() {
    this._logOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOptsInput() {
    return this._logOpts
  }

  // logs - computed: false, optional: true, required: false
  private _logs?: boolean;
  public get logs() {
    return this.getBooleanAttribute('logs');
  }
  public set logs(value: boolean ) {
    this._logs = value;
  }
  public resetLogs() {
    this._logs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs
  }

  // max_retry_count - computed: false, optional: true, required: false
  private _maxRetryCount?: number;
  public get maxRetryCount() {
    return this.getNumberAttribute('max_retry_count');
  }
  public set maxRetryCount(value: number ) {
    this._maxRetryCount = value;
  }
  public resetMaxRetryCount() {
    this._maxRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryCountInput() {
    return this._maxRetryCount
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number;
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number ) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory
  }

  // memory_swap - computed: false, optional: true, required: false
  private _memorySwap?: number;
  public get memorySwap() {
    return this.getNumberAttribute('memory_swap');
  }
  public set memorySwap(value: number ) {
    this._memorySwap = value;
  }
  public resetMemorySwap() {
    this._memorySwap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySwapInput() {
    return this._memorySwap
  }

  // must_run - computed: false, optional: true, required: false
  private _mustRun?: boolean;
  public get mustRun() {
    return this.getBooleanAttribute('must_run');
  }
  public set mustRun(value: boolean ) {
    this._mustRun = value;
  }
  public resetMustRun() {
    this._mustRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustRunInput() {
    return this._mustRun
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

  // network_alias - computed: false, optional: true, required: false
  private _networkAlias?: string[];
  public get networkAlias() {
    return this.getListAttribute('network_alias');
  }
  public set networkAlias(value: string[] ) {
    this._networkAlias = value;
  }
  public resetNetworkAlias() {
    this._networkAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAliasInput() {
    return this._networkAlias
  }

  // network_data - computed: true, optional: false, required: false
  public networkData(index: string) {
    return new ContainerNetworkData(this, 'network_data', index);
  }

  // network_mode - computed: false, optional: true, required: false
  private _networkMode?: string;
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string ) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: string[];
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[] ) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks
  }

  // pid_mode - computed: false, optional: true, required: false
  private _pidMode?: string;
  public get pidMode() {
    return this.getStringAttribute('pid_mode');
  }
  public set pidMode(value: string ) {
    this._pidMode = value;
  }
  public resetPidMode() {
    this._pidMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidModeInput() {
    return this._pidMode
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean;
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean ) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged
  }

  // publish_all_ports - computed: false, optional: true, required: false
  private _publishAllPorts?: boolean;
  public get publishAllPorts() {
    return this.getBooleanAttribute('publish_all_ports');
  }
  public set publishAllPorts(value: boolean ) {
    this._publishAllPorts = value;
  }
  public resetPublishAllPorts() {
    this._publishAllPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishAllPortsInput() {
    return this._publishAllPorts
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean;
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean ) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // restart - computed: false, optional: true, required: false
  private _restart?: string;
  public get restart() {
    return this.getStringAttribute('restart');
  }
  public set restart(value: string ) {
    this._restart = value;
  }
  public resetRestart() {
    this._restart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartInput() {
    return this._restart
  }

  // rm - computed: false, optional: true, required: false
  private _rm?: boolean;
  public get rm() {
    return this.getBooleanAttribute('rm');
  }
  public set rm(value: boolean ) {
    this._rm = value;
  }
  public resetRm() {
    this._rm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmInput() {
    return this._rm
  }

  // shm_size - computed: true, optional: true, required: false
  private _shmSize?: number;
  public get shmSize() {
    return this.getNumberAttribute('shm_size');
  }
  public set shmSize(value: number) {
    this._shmSize = value;
  }
  public resetShmSize() {
    this._shmSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shmSizeInput() {
    return this._shmSize
  }

  // start - computed: false, optional: true, required: false
  private _start?: boolean;
  public get start() {
    return this.getBooleanAttribute('start');
  }
  public set start(value: boolean ) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls?: { [key: string]: string };
  public get sysctls() {
    return this.interpolationForAttribute('sysctls') as any;
  }
  public set sysctls(value: { [key: string]: string } ) {
    this._sysctls = value;
  }
  public resetSysctls() {
    this._sysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls
  }

  // tmpfs - computed: false, optional: true, required: false
  private _tmpfs?: { [key: string]: string };
  public get tmpfs() {
    return this.interpolationForAttribute('tmpfs') as any;
  }
  public set tmpfs(value: { [key: string]: string } ) {
    this._tmpfs = value;
  }
  public resetTmpfs() {
    this._tmpfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpfsInput() {
    return this._tmpfs
  }

  // user - computed: true, optional: true, required: false
  private _user?: string;
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }

  // userns_mode - computed: false, optional: true, required: false
  private _usernsMode?: string;
  public get usernsMode() {
    return this.getStringAttribute('userns_mode');
  }
  public set usernsMode(value: string ) {
    this._usernsMode = value;
  }
  public resetUsernsMode() {
    this._usernsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernsModeInput() {
    return this._usernsMode
  }

  // working_dir - computed: true, optional: true, required: false
  private _workingDir?: string;
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: ContainerCapabilities[];
  public get capabilities() {
    return this.interpolationForAttribute('capabilities') as any;
  }
  public set capabilities(value: ContainerCapabilities[] ) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities
  }

  // devices - computed: false, optional: true, required: false
  private _devices?: ContainerDevices[];
  public get devices() {
    return this.interpolationForAttribute('devices') as any;
  }
  public set devices(value: ContainerDevices[] ) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck?: ContainerHealthcheck[];
  public get healthcheck() {
    return this.interpolationForAttribute('healthcheck') as any;
  }
  public set healthcheck(value: ContainerHealthcheck[] ) {
    this._healthcheck = value;
  }
  public resetHealthcheck() {
    this._healthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck
  }

  // host - computed: false, optional: true, required: false
  private _host?: ContainerHost[];
  public get host() {
    return this.interpolationForAttribute('host') as any;
  }
  public set host(value: ContainerHost[] ) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: ContainerLabels[];
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: ContainerLabels[] ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // mounts - computed: false, optional: true, required: false
  private _mounts?: ContainerMounts[];
  public get mounts() {
    return this.interpolationForAttribute('mounts') as any;
  }
  public set mounts(value: ContainerMounts[] ) {
    this._mounts = value;
  }
  public resetMounts() {
    this._mounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountsInput() {
    return this._mounts
  }

  // networks_advanced - computed: false, optional: true, required: false
  private _networksAdvanced?: ContainerNetworksAdvanced[];
  public get networksAdvanced() {
    return this.interpolationForAttribute('networks_advanced') as any;
  }
  public set networksAdvanced(value: ContainerNetworksAdvanced[] ) {
    this._networksAdvanced = value;
  }
  public resetNetworksAdvanced() {
    this._networksAdvanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksAdvancedInput() {
    return this._networksAdvanced
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: ContainerPorts[];
  public get ports() {
    return this.interpolationForAttribute('ports') as any;
  }
  public set ports(value: ContainerPorts[] ) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports
  }

  // ulimit - computed: false, optional: true, required: false
  private _ulimit?: ContainerUlimit[];
  public get ulimit() {
    return this.interpolationForAttribute('ulimit') as any;
  }
  public set ulimit(value: ContainerUlimit[] ) {
    this._ulimit = value;
  }
  public resetUlimit() {
    this._ulimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ulimitInput() {
    return this._ulimit
  }

  // upload - computed: false, optional: true, required: false
  private _upload?: ContainerUpload[];
  public get upload() {
    return this.interpolationForAttribute('upload') as any;
  }
  public set upload(value: ContainerUpload[] ) {
    this._upload = value;
  }
  public resetUpload() {
    this._upload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInput() {
    return this._upload
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: ContainerVolumes[];
  public get volumes() {
    return this.interpolationForAttribute('volumes') as any;
  }
  public set volumes(value: ContainerVolumes[] ) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes
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
