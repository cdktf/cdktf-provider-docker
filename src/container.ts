// https://www.terraform.io/docs/providers/docker/r/container.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#attach Container#attach}
  */
  readonly attach?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#command Container#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#cpu_set Container#cpu_set}
  */
  readonly cpuSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#cpu_shares Container#cpu_shares}
  */
  readonly cpuShares?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#destroy_grace_seconds Container#destroy_grace_seconds}
  */
  readonly destroyGraceSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#dns Container#dns}
  */
  readonly dns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#dns_opts Container#dns_opts}
  */
  readonly dnsOpts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#dns_search Container#dns_search}
  */
  readonly dnsSearch?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#domainname Container#domainname}
  */
  readonly domainname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#entrypoint Container#entrypoint}
  */
  readonly entrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#env Container#env}
  */
  readonly env?: string[];
  /**
  * Additional groups for the container user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#group_add Container#group_add}
  */
  readonly groupAdd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#hostname Container#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#image Container#image}
  */
  readonly image: string;
  /**
  * IPC sharing mode for the container
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#ipc_mode Container#ipc_mode}
  */
  readonly ipcMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#links Container#links}
  */
  readonly links?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#log_driver Container#log_driver}
  */
  readonly logDriver?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#log_opts Container#log_opts}
  */
  readonly logOpts?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#logs Container#logs}
  */
  readonly logs?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#max_retry_count Container#max_retry_count}
  */
  readonly maxRetryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#memory Container#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#memory_swap Container#memory_swap}
  */
  readonly memorySwap?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#must_run Container#must_run}
  */
  readonly mustRun?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#name Container#name}
  */
  readonly name: string;
  /**
  * Set an alias for the container in all specified networks
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#network_alias Container#network_alias}
  */
  readonly networkAlias?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#network_mode Container#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#networks Container#networks}
  */
  readonly networks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#pid_mode Container#pid_mode}
  */
  readonly pidMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#privileged Container#privileged}
  */
  readonly privileged?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#publish_all_ports Container#publish_all_ports}
  */
  readonly publishAllPorts?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#read_only Container#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#restart Container#restart}
  */
  readonly restart?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#rm Container#rm}
  */
  readonly rm?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#shm_size Container#shm_size}
  */
  readonly shmSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#start Container#start}
  */
  readonly start?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#sysctls Container#sysctls}
  */
  readonly sysctls?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#tmpfs Container#tmpfs}
  */
  readonly tmpfs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#user Container#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#userns_mode Container#userns_mode}
  */
  readonly usernsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#working_dir Container#working_dir}
  */
  readonly workingDir?: string;
  /**
  * capabilities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#capabilities Container#capabilities}
  */
  readonly capabilities?: ContainerCapabilities[];
  /**
  * devices block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#devices Container#devices}
  */
  readonly devices?: ContainerDevices[];
  /**
  * healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#healthcheck Container#healthcheck}
  */
  readonly healthcheck?: ContainerHealthcheck[];
  /**
  * host block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#host Container#host}
  */
  readonly host?: ContainerHost[];
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#labels Container#labels}
  */
  readonly labels?: ContainerLabels[];
  /**
  * mounts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#mounts Container#mounts}
  */
  readonly mounts?: ContainerMounts[];
  /**
  * networks_advanced block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#networks_advanced Container#networks_advanced}
  */
  readonly networksAdvanced?: ContainerNetworksAdvanced[];
  /**
  * ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#ports Container#ports}
  */
  readonly ports?: ContainerPorts[];
  /**
  * ulimit block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#ulimit Container#ulimit}
  */
  readonly ulimit?: ContainerUlimit[];
  /**
  * upload block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#upload Container#upload}
  */
  readonly upload?: ContainerUpload[];
  /**
  * volumes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#volumes Container#volumes}
  */
  readonly volumes?: ContainerVolumes[];
}
export class ContainerNetworkData extends cdktf.ComplexComputedList {

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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#add Container#add}
  */
  readonly add?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#drop Container#drop}
  */
  readonly drop?: string[];
}

function containerCapabilitiesToTerraform(struct?: ContainerCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export interface ContainerDevices {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#container_path Container#container_path}
  */
  readonly containerPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#host_path Container#host_path}
  */
  readonly hostPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#permissions Container#permissions}
  */
  readonly permissions?: string;
}

function containerDevicesToTerraform(struct?: ContainerDevices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_path: cdktf.stringToTerraform(struct!.containerPath),
    host_path: cdktf.stringToTerraform(struct!.hostPath),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}

export interface ContainerHealthcheck {
  /**
  * Time between running the check (ms|s|m|h)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#interval Container#interval}
  */
  readonly interval?: string;
  /**
  * Consecutive failures needed to report unhealthy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#retries Container#retries}
  */
  readonly retries?: number;
  /**
  * Start period for the container to initialize before counting retries towards unstable (ms|s|m|h)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#start_period Container#start_period}
  */
  readonly startPeriod?: string;
  /**
  * The test to perform as list
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#test Container#test}
  */
  readonly test: string[];
  /**
  * Maximum time to allow one check to run (ms|s|m|h)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#timeout Container#timeout}
  */
  readonly timeout?: string;
}

function containerHealthcheckToTerraform(struct?: ContainerHealthcheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    retries: cdktf.numberToTerraform(struct!.retries),
    start_period: cdktf.stringToTerraform(struct!.startPeriod),
    test: cdktf.listMapper(cdktf.stringToTerraform)(struct!.test),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}

export interface ContainerHost {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#host Container#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#ip Container#ip}
  */
  readonly ip: string;
}

function containerHostToTerraform(struct?: ContainerHost): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}

export interface ContainerLabels {
  /**
  * Name of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#label Container#label}
  */
  readonly label: string;
  /**
  * Value of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#value Container#value}
  */
  readonly value: string;
}

function containerLabelsToTerraform(struct?: ContainerLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ContainerMountsBindOptions {
  /**
  * A propagation mode with the value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#propagation Container#propagation}
  */
  readonly propagation?: string;
}

function containerMountsBindOptionsToTerraform(struct?: ContainerMountsBindOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    propagation: cdktf.stringToTerraform(struct!.propagation),
  }
}

export interface ContainerMountsTmpfsOptions {
  /**
  * The permission mode for the tmpfs mount in an integer
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#mode Container#mode}
  */
  readonly mode?: number;
  /**
  * The size for the tmpfs mount in bytes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#size_bytes Container#size_bytes}
  */
  readonly sizeBytes?: number;
}

function containerMountsTmpfsOptionsToTerraform(struct?: ContainerMountsTmpfsOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.numberToTerraform(struct!.mode),
    size_bytes: cdktf.numberToTerraform(struct!.sizeBytes),
  }
}

export interface ContainerMountsVolumeOptionsLabels {
  /**
  * Name of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#label Container#label}
  */
  readonly label: string;
  /**
  * Value of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#value Container#value}
  */
  readonly value: string;
}

function containerMountsVolumeOptionsLabelsToTerraform(struct?: ContainerMountsVolumeOptionsLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ContainerMountsVolumeOptions {
  /**
  * Name of the driver to use to create the volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#driver_name Container#driver_name}
  */
  readonly driverName?: string;
  /**
  * key/value map of driver specific options
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#driver_options Container#driver_options}
  */
  readonly driverOptions?: { [key: string]: string };
  /**
  * Populate volume with data from the target
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#no_copy Container#no_copy}
  */
  readonly noCopy?: boolean;
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#labels Container#labels}
  */
  readonly labels?: ContainerMountsVolumeOptionsLabels[];
}

function containerMountsVolumeOptionsToTerraform(struct?: ContainerMountsVolumeOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_name: cdktf.stringToTerraform(struct!.driverName),
    driver_options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverOptions),
    no_copy: cdktf.booleanToTerraform(struct!.noCopy),
    labels: cdktf.listMapper(containerMountsVolumeOptionsLabelsToTerraform)(struct!.labels),
  }
}

export interface ContainerMounts {
  /**
  * Whether the mount should be read-only
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#read_only Container#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Mount source (e.g. a volume name, a host path)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#source Container#source}
  */
  readonly source?: string;
  /**
  * Container path
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#target Container#target}
  */
  readonly target: string;
  /**
  * The mount type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#type Container#type}
  */
  readonly type: string;
  /**
  * bind_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#bind_options Container#bind_options}
  */
  readonly bindOptions?: ContainerMountsBindOptions[];
  /**
  * tmpfs_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#tmpfs_options Container#tmpfs_options}
  */
  readonly tmpfsOptions?: ContainerMountsTmpfsOptions[];
  /**
  * volume_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#volume_options Container#volume_options}
  */
  readonly volumeOptions?: ContainerMountsVolumeOptions[];
}

function containerMountsToTerraform(struct?: ContainerMounts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
    bind_options: cdktf.listMapper(containerMountsBindOptionsToTerraform)(struct!.bindOptions),
    tmpfs_options: cdktf.listMapper(containerMountsTmpfsOptionsToTerraform)(struct!.tmpfsOptions),
    volume_options: cdktf.listMapper(containerMountsVolumeOptionsToTerraform)(struct!.volumeOptions),
  }
}

export interface ContainerNetworksAdvanced {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#aliases Container#aliases}
  */
  readonly aliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#ipv4_address Container#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#ipv6_address Container#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#name Container#name}
  */
  readonly name: string;
}

function containerNetworksAdvancedToTerraform(struct?: ContainerNetworksAdvanced): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aliases: cdktf.listMapper(cdktf.stringToTerraform)(struct!.aliases),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ContainerPorts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#external Container#external}
  */
  readonly external?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#internal Container#internal}
  */
  readonly internal: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#ip Container#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#protocol Container#protocol}
  */
  readonly protocol?: string;
}

function containerPortsToTerraform(struct?: ContainerPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    external: cdktf.numberToTerraform(struct!.external),
    internal: cdktf.numberToTerraform(struct!.internal),
    ip: cdktf.stringToTerraform(struct!.ip),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface ContainerUlimit {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#hard Container#hard}
  */
  readonly hard: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#name Container#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#soft Container#soft}
  */
  readonly soft: number;
}

function containerUlimitToTerraform(struct?: ContainerUlimit): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hard: cdktf.numberToTerraform(struct!.hard),
    name: cdktf.stringToTerraform(struct!.name),
    soft: cdktf.numberToTerraform(struct!.soft),
  }
}

export interface ContainerUpload {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#content Container#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#content_base64 Container#content_base64}
  */
  readonly contentBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#executable Container#executable}
  */
  readonly executable?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#file Container#file}
  */
  readonly file: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#source Container#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#source_hash Container#source_hash}
  */
  readonly sourceHash?: string;
}

function containerUploadToTerraform(struct?: ContainerUpload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_base64: cdktf.stringToTerraform(struct!.contentBase64),
    executable: cdktf.booleanToTerraform(struct!.executable),
    file: cdktf.stringToTerraform(struct!.file),
    source: cdktf.stringToTerraform(struct!.source),
    source_hash: cdktf.stringToTerraform(struct!.sourceHash),
  }
}

export interface ContainerVolumes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#container_path Container#container_path}
  */
  readonly containerPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#from_container Container#from_container}
  */
  readonly fromContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#host_path Container#host_path}
  */
  readonly hostPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#read_only Container#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container.html#volume_name Container#volume_name}
  */
  readonly volumeName?: string;
}

function containerVolumesToTerraform(struct?: ContainerVolumes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_path: cdktf.stringToTerraform(struct!.containerPath),
    from_container: cdktf.stringToTerraform(struct!.fromContainer),
    host_path: cdktf.stringToTerraform(struct!.hostPath),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/docker/r/container.html docker_container}
*/
export class Container extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/docker/r/container.html docker_container} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerConfig
  */
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
      attach: cdktf.booleanToTerraform(this._attach),
      command: cdktf.listMapper(cdktf.stringToTerraform)(this._command),
      cpu_set: cdktf.stringToTerraform(this._cpuSet),
      cpu_shares: cdktf.numberToTerraform(this._cpuShares),
      destroy_grace_seconds: cdktf.numberToTerraform(this._destroyGraceSeconds),
      dns: cdktf.listMapper(cdktf.stringToTerraform)(this._dns),
      dns_opts: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsOpts),
      dns_search: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsSearch),
      domainname: cdktf.stringToTerraform(this._domainname),
      entrypoint: cdktf.listMapper(cdktf.stringToTerraform)(this._entrypoint),
      env: cdktf.listMapper(cdktf.stringToTerraform)(this._env),
      group_add: cdktf.listMapper(cdktf.stringToTerraform)(this._groupAdd),
      hostname: cdktf.stringToTerraform(this._hostname),
      image: cdktf.stringToTerraform(this._image),
      ipc_mode: cdktf.stringToTerraform(this._ipcMode),
      links: cdktf.listMapper(cdktf.stringToTerraform)(this._links),
      log_driver: cdktf.stringToTerraform(this._logDriver),
      log_opts: cdktf.hashMapper(cdktf.anyToTerraform)(this._logOpts),
      logs: cdktf.booleanToTerraform(this._logs),
      max_retry_count: cdktf.numberToTerraform(this._maxRetryCount),
      memory: cdktf.numberToTerraform(this._memory),
      memory_swap: cdktf.numberToTerraform(this._memorySwap),
      must_run: cdktf.booleanToTerraform(this._mustRun),
      name: cdktf.stringToTerraform(this._name),
      network_alias: cdktf.listMapper(cdktf.stringToTerraform)(this._networkAlias),
      network_mode: cdktf.stringToTerraform(this._networkMode),
      networks: cdktf.listMapper(cdktf.stringToTerraform)(this._networks),
      pid_mode: cdktf.stringToTerraform(this._pidMode),
      privileged: cdktf.booleanToTerraform(this._privileged),
      publish_all_ports: cdktf.booleanToTerraform(this._publishAllPorts),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      restart: cdktf.stringToTerraform(this._restart),
      rm: cdktf.booleanToTerraform(this._rm),
      shm_size: cdktf.numberToTerraform(this._shmSize),
      start: cdktf.booleanToTerraform(this._start),
      sysctls: cdktf.hashMapper(cdktf.anyToTerraform)(this._sysctls),
      tmpfs: cdktf.hashMapper(cdktf.anyToTerraform)(this._tmpfs),
      user: cdktf.stringToTerraform(this._user),
      userns_mode: cdktf.stringToTerraform(this._usernsMode),
      working_dir: cdktf.stringToTerraform(this._workingDir),
      capabilities: cdktf.listMapper(containerCapabilitiesToTerraform)(this._capabilities),
      devices: cdktf.listMapper(containerDevicesToTerraform)(this._devices),
      healthcheck: cdktf.listMapper(containerHealthcheckToTerraform)(this._healthcheck),
      host: cdktf.listMapper(containerHostToTerraform)(this._host),
      labels: cdktf.listMapper(containerLabelsToTerraform)(this._labels),
      mounts: cdktf.listMapper(containerMountsToTerraform)(this._mounts),
      networks_advanced: cdktf.listMapper(containerNetworksAdvancedToTerraform)(this._networksAdvanced),
      ports: cdktf.listMapper(containerPortsToTerraform)(this._ports),
      ulimit: cdktf.listMapper(containerUlimitToTerraform)(this._ulimit),
      upload: cdktf.listMapper(containerUploadToTerraform)(this._upload),
      volumes: cdktf.listMapper(containerVolumesToTerraform)(this._volumes),
    };
  }
}
