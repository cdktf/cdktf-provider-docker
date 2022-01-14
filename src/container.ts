// https://www.terraform.io/docs/providers/docker/r/container
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#attach Container#attach}
  */
  readonly attach?: boolean | cdktf.IResolvable;
  /**
  * The command to use to start the container. For example, to run `/usr/bin/myprogram -f baz.conf` set the command to be `["/usr/bin/myprogram","-","baz.con"]`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#command Container#command}
  */
  readonly command?: string[];
  /**
  * A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#cpu_set Container#cpu_set}
  */
  readonly cpuSet?: string;
  /**
  * CPU shares (relative weight) for the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#cpu_shares Container#cpu_shares}
  */
  readonly cpuShares?: number;
  /**
  * If defined will attempt to stop the container before destroying. Container will be destroyed after `n` seconds or on successful stop.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#destroy_grace_seconds Container#destroy_grace_seconds}
  */
  readonly destroyGraceSeconds?: number;
  /**
  * DNS servers to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#dns Container#dns}
  */
  readonly dns?: string[];
  /**
  * DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#dns_opts Container#dns_opts}
  */
  readonly dnsOpts?: string[];
  /**
  * DNS search domains that are used when bare unqualified hostnames are used inside of the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#dns_search Container#dns_search}
  */
  readonly dnsSearch?: string[];
  /**
  * Domain name of the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#domainname Container#domainname}
  */
  readonly domainname?: string;
  /**
  * The command to use as the Entrypoint for the container. The Entrypoint allows you to configure a container to run as an executable. For example, to run `/usr/bin/myprogram` when starting a container, set the entrypoint to be `"/usr/bin/myprogra"]`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#entrypoint Container#entrypoint}
  */
  readonly entrypoint?: string[];
  /**
  * Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#env Container#env}
  */
  readonly env?: string[];
  /**
  * Additional groups for the container user
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#group_add Container#group_add}
  */
  readonly groupAdd?: string[];
  /**
  * Hostname of the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#hostname Container#hostname}
  */
  readonly hostname?: string;
  /**
  * The ID of the image to back this container. The easiest way to get this value is to use the `docker_image` resource as is shown in the example.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#image Container#image}
  */
  readonly image: string;
  /**
  * Configured whether an init process should be injected for this container. If unset this will default to the `dockerd` defaults.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#init Container#init}
  */
  readonly init?: boolean | cdktf.IResolvable;
  /**
  * IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name|id>` or `host`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#ipc_mode Container#ipc_mode}
  */
  readonly ipcMode?: string;
  /**
  * Set of links for link based connectivity between containers that are running on the same host.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#links Container#links}
  */
  readonly links?: string[];
  /**
  * The logging driver to use for the container. Defaults to `json-file`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#log_driver Container#log_driver}
  */
  readonly logDriver?: string;
  /**
  * Key/value pairs to use as options for the logging driver.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#log_opts Container#log_opts}
  */
  readonly logOpts?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Save the container logs (`attach` must be enabled). Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#logs Container#logs}
  */
  readonly logs?: boolean | cdktf.IResolvable;
  /**
  * The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#max_retry_count Container#max_retry_count}
  */
  readonly maxRetryCount?: number;
  /**
  * The memory limit for the container in MBs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#memory Container#memory}
  */
  readonly memory?: number;
  /**
  * The total memory limit (memory + swap) for the container in MBs. This setting may compute to `-1` after `terraform apply` if the target host doesn't support memory swap, when that is the case docker will use a soft limitation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#memory_swap Container#memory_swap}
  */
  readonly memorySwap?: number;
  /**
  * If `true`, then the Docker container will be kept running. If `false`, then as long as the container exists, Terraform assumes it is successful. Defaults to `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#must_run Container#must_run}
  */
  readonly mustRun?: boolean | cdktf.IResolvable;
  /**
  * The name of the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#name Container#name}
  */
  readonly name: string;
  /**
  * Set an alias for the container in all specified networks
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#network_alias Container#network_alias}
  */
  readonly networkAlias?: string[];
  /**
  * Network mode of the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#network_mode Container#network_mode}
  */
  readonly networkMode?: string;
  /**
  * ID of the networks in which the container is.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#networks Container#networks}
  */
  readonly networks?: string[];
  /**
  * he PID (Process) Namespace mode for the container. Either `container:<name|id>` or `host`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#pid_mode Container#pid_mode}
  */
  readonly pidMode?: string;
  /**
  * If `true`, the container runs in privileged mode.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#privileged Container#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Publish all ports of the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#publish_all_ports Container#publish_all_ports}
  */
  readonly publishAllPorts?: boolean | cdktf.IResolvable;
  /**
  * If `true`, the container will be started as readonly. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#read_only Container#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#remove_volumes Container#remove_volumes}
  */
  readonly removeVolumes?: boolean | cdktf.IResolvable;
  /**
  * The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#restart Container#restart}
  */
  readonly restart?: string;
  /**
  * If `true`, then the container will be automatically removed after his execution. Terraform won't check this container after creation. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#rm Container#rm}
  */
  readonly rm?: boolean | cdktf.IResolvable;
  /**
  * List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#security_opts Container#security_opts}
  */
  readonly securityOpts?: string[];
  /**
  * Size of `/dev/shm` in MBs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#shm_size Container#shm_size}
  */
  readonly shmSize?: number;
  /**
  * If `true`, then the Docker container will be started after creation. If `false`, then the container is only created. Defaults to `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#start Container#start}
  */
  readonly start?: boolean | cdktf.IResolvable;
  /**
  * If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#stdin_open Container#stdin_open}
  */
  readonly stdinOpen?: boolean | cdktf.IResolvable;
  /**
  * Key/value pairs for the storage driver options, e.g. `size`: `120G`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#storage_opts Container#storage_opts}
  */
  readonly storageOpts?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * A map of kernel parameters (sysctls) to set in the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#sysctls Container#sysctls}
  */
  readonly sysctls?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#tmpfs Container#tmpfs}
  */
  readonly tmpfs?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#tty Container#tty}
  */
  readonly tty?: boolean | cdktf.IResolvable;
  /**
  * User used for run the first process. Format is `user` or `user:group` which user and group can be passed literraly or by name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#user Container#user}
  */
  readonly user?: string;
  /**
  * Sets the usernamespace mode for the container when usernamespace remapping option is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#userns_mode Container#userns_mode}
  */
  readonly usernsMode?: string;
  /**
  * The working directory for commands to run in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#working_dir Container#working_dir}
  */
  readonly workingDir?: string;
  /**
  * capabilities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#capabilities Container#capabilities}
  */
  readonly capabilities?: ContainerCapabilities;
  /**
  * devices block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#devices Container#devices}
  */
  readonly devices?: ContainerDevices[];
  /**
  * healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#healthcheck Container#healthcheck}
  */
  readonly healthcheck?: ContainerHealthcheck;
  /**
  * host block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#host Container#host}
  */
  readonly host?: ContainerHost[];
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#labels Container#labels}
  */
  readonly labels?: ContainerLabels[];
  /**
  * mounts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#mounts Container#mounts}
  */
  readonly mounts?: ContainerMounts[];
  /**
  * networks_advanced block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#networks_advanced Container#networks_advanced}
  */
  readonly networksAdvanced?: ContainerNetworksAdvanced[];
  /**
  * ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#ports Container#ports}
  */
  readonly ports?: ContainerPorts[];
  /**
  * ulimit block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#ulimit Container#ulimit}
  */
  readonly ulimit?: ContainerUlimit[];
  /**
  * upload block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#upload Container#upload}
  */
  readonly upload?: ContainerUpload[];
  /**
  * volumes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#volumes Container#volumes}
  */
  readonly volumes?: ContainerVolumes[];
}
export class ContainerNetworkData extends cdktf.ComplexComputedList {

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // global_ipv6_address - computed: true, optional: false, required: false
  public get globalIpv6Address() {
    return this.getStringAttribute('global_ipv6_address');
  }

  // global_ipv6_prefix_length - computed: true, optional: false, required: false
  public get globalIpv6PrefixLength() {
    return this.getNumberAttribute('global_ipv6_prefix_length');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_prefix_length - computed: true, optional: false, required: false
  public get ipPrefixLength() {
    return this.getNumberAttribute('ip_prefix_length');
  }

  // ipv6_gateway - computed: true, optional: false, required: false
  public get ipv6Gateway() {
    return this.getStringAttribute('ipv6_gateway');
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
}
export interface ContainerCapabilities {
  /**
  * List of linux capabilities to add.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#add Container#add}
  */
  readonly add?: string[];
  /**
  * List of linux capabilities to drop.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#drop Container#drop}
  */
  readonly drop?: string[];
}

export function containerCapabilitiesToTerraform(struct?: ContainerCapabilitiesOutputReference | ContainerCapabilities): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform)(struct!.drop),
  }
}

export class ContainerCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._add = undefined;
      this._drop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface ContainerDevices {
  /**
  * The path in the container where the device will be bound.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#container_path Container#container_path}
  */
  readonly containerPath?: string;
  /**
  * The path on the host where the device is located.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#host_path Container#host_path}
  */
  readonly hostPath: string;
  /**
  * The cgroup permissions given to the container to access the device. Defaults to `rwm`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#permissions Container#permissions}
  */
  readonly permissions?: string;
}

export function containerDevicesToTerraform(struct?: ContainerDevices): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_path: cdktf.stringToTerraform(struct!.containerPath),
    host_path: cdktf.stringToTerraform(struct!.hostPath),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}

export interface ContainerHealthcheck {
  /**
  * Time between running the check (ms|s|m|h). Defaults to `0s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#interval Container#interval}
  */
  readonly interval?: string;
  /**
  * Consecutive failures needed to report unhealthy. Defaults to `0`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#retries Container#retries}
  */
  readonly retries?: number;
  /**
  * Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#start_period Container#start_period}
  */
  readonly startPeriod?: string;
  /**
  * Command to run to check health. For example, to run `curl -f localhost/health` set the command to be `["CMD", "curl", "-f", "localhost/health"]`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#test Container#test}
  */
  readonly test: string[];
  /**
  * Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#timeout Container#timeout}
  */
  readonly timeout?: string;
}

export function containerHealthcheckToTerraform(struct?: ContainerHealthcheckOutputReference | ContainerHealthcheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    retries: cdktf.numberToTerraform(struct!.retries),
    start_period: cdktf.stringToTerraform(struct!.startPeriod),
    test: cdktf.listMapper(cdktf.stringToTerraform)(struct!.test),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}

export class ContainerHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._startPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPeriod = this._startPeriod;
    }
    if (this._test !== undefined) {
      hasAnyValues = true;
      internalValueResult.test = this._test;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._retries = undefined;
      this._startPeriod = undefined;
      this._test = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._retries = value.retries;
      this._startPeriod = value.startPeriod;
      this._test = value.test;
      this._timeout = value.timeout;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // start_period - computed: false, optional: true, required: false
  private _startPeriod?: string; 
  public get startPeriod() {
    return this.getStringAttribute('start_period');
  }
  public set startPeriod(value: string) {
    this._startPeriod = value;
  }
  public resetStartPeriod() {
    this._startPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPeriodInput() {
    return this._startPeriod;
  }

  // test - computed: false, optional: false, required: true
  private _test?: string[]; 
  public get test() {
    return this.getListAttribute('test');
  }
  public set test(value: string[]) {
    this._test = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface ContainerHost {
  /**
  * Hostname to add
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#host Container#host}
  */
  readonly host: string;
  /**
  * IP address this hostname should resolve to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#ip Container#ip}
  */
  readonly ip: string;
}

export function containerHostToTerraform(struct?: ContainerHost): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}

export interface ContainerLabels {
  /**
  * Name of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#label Container#label}
  */
  readonly label: string;
  /**
  * Value of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#value Container#value}
  */
  readonly value: string;
}

export function containerLabelsToTerraform(struct?: ContainerLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ContainerMountsBindOptions {
  /**
  * A propagation mode with the value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#propagation Container#propagation}
  */
  readonly propagation?: string;
}

export function containerMountsBindOptionsToTerraform(struct?: ContainerMountsBindOptionsOutputReference | ContainerMountsBindOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    propagation: cdktf.stringToTerraform(struct!.propagation),
  }
}

export class ContainerMountsBindOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerMountsBindOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagation = this._propagation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerMountsBindOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._propagation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._propagation = value.propagation;
    }
  }

  // propagation - computed: false, optional: true, required: false
  private _propagation?: string; 
  public get propagation() {
    return this.getStringAttribute('propagation');
  }
  public set propagation(value: string) {
    this._propagation = value;
  }
  public resetPropagation() {
    this._propagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagationInput() {
    return this._propagation;
  }
}
export interface ContainerMountsTmpfsOptions {
  /**
  * The permission mode for the tmpfs mount in an integer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#mode Container#mode}
  */
  readonly mode?: number;
  /**
  * The size for the tmpfs mount in bytes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#size_bytes Container#size_bytes}
  */
  readonly sizeBytes?: number;
}

export function containerMountsTmpfsOptionsToTerraform(struct?: ContainerMountsTmpfsOptionsOutputReference | ContainerMountsTmpfsOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.numberToTerraform(struct!.mode),
    size_bytes: cdktf.numberToTerraform(struct!.sizeBytes),
  }
}

export class ContainerMountsTmpfsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerMountsTmpfsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeBytes = this._sizeBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerMountsTmpfsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._sizeBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._sizeBytes = value.sizeBytes;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // size_bytes - computed: false, optional: true, required: false
  private _sizeBytes?: number; 
  public get sizeBytes() {
    return this.getNumberAttribute('size_bytes');
  }
  public set sizeBytes(value: number) {
    this._sizeBytes = value;
  }
  public resetSizeBytes() {
    this._sizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeBytesInput() {
    return this._sizeBytes;
  }
}
export interface ContainerMountsVolumeOptionsLabels {
  /**
  * Name of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#label Container#label}
  */
  readonly label: string;
  /**
  * Value of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#value Container#value}
  */
  readonly value: string;
}

export function containerMountsVolumeOptionsLabelsToTerraform(struct?: ContainerMountsVolumeOptionsLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ContainerMountsVolumeOptions {
  /**
  * Name of the driver to use to create the volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#driver_name Container#driver_name}
  */
  readonly driverName?: string;
  /**
  * key/value map of driver specific options.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#driver_options Container#driver_options}
  */
  readonly driverOptions?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Populate volume with data from the target.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#no_copy Container#no_copy}
  */
  readonly noCopy?: boolean | cdktf.IResolvable;
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#labels Container#labels}
  */
  readonly labels?: ContainerMountsVolumeOptionsLabels[];
}

export function containerMountsVolumeOptionsToTerraform(struct?: ContainerMountsVolumeOptionsOutputReference | ContainerMountsVolumeOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_name: cdktf.stringToTerraform(struct!.driverName),
    driver_options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverOptions),
    no_copy: cdktf.booleanToTerraform(struct!.noCopy),
    labels: cdktf.listMapper(containerMountsVolumeOptionsLabelsToTerraform)(struct!.labels),
  }
}

export class ContainerMountsVolumeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerMountsVolumeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverName = this._driverName;
    }
    if (this._driverOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverOptions = this._driverOptions;
    }
    if (this._noCopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCopy = this._noCopy;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerMountsVolumeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._driverName = undefined;
      this._driverOptions = undefined;
      this._noCopy = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._driverName = value.driverName;
      this._driverOptions = value.driverOptions;
      this._noCopy = value.noCopy;
      this._labels = value.labels;
    }
  }

  // driver_name - computed: false, optional: true, required: false
  private _driverName?: string; 
  public get driverName() {
    return this.getStringAttribute('driver_name');
  }
  public set driverName(value: string) {
    this._driverName = value;
  }
  public resetDriverName() {
    this._driverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNameInput() {
    return this._driverName;
  }

  // driver_options - computed: false, optional: true, required: false
  private _driverOptions?: { [key: string]: string } | cdktf.IResolvable; 
  public get driverOptions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_options') as any;
  }
  public set driverOptions(value: { [key: string]: string } | cdktf.IResolvable) {
    this._driverOptions = value;
  }
  public resetDriverOptions() {
    this._driverOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverOptionsInput() {
    return this._driverOptions;
  }

  // no_copy - computed: false, optional: true, required: false
  private _noCopy?: boolean | cdktf.IResolvable; 
  public get noCopy() {
    return this.getBooleanAttribute('no_copy') as any;
  }
  public set noCopy(value: boolean | cdktf.IResolvable) {
    this._noCopy = value;
  }
  public resetNoCopy() {
    this._noCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCopyInput() {
    return this._noCopy;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: ContainerMountsVolumeOptionsLabels[]; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: ContainerMountsVolumeOptionsLabels[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}
export interface ContainerMounts {
  /**
  * Whether the mount should be read-only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#read_only Container#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Mount source (e.g. a volume name, a host path).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#source Container#source}
  */
  readonly source?: string;
  /**
  * Container path
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#target Container#target}
  */
  readonly target: string;
  /**
  * The mount type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#type Container#type}
  */
  readonly type: string;
  /**
  * bind_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#bind_options Container#bind_options}
  */
  readonly bindOptions?: ContainerMountsBindOptions;
  /**
  * tmpfs_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#tmpfs_options Container#tmpfs_options}
  */
  readonly tmpfsOptions?: ContainerMountsTmpfsOptions;
  /**
  * volume_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#volume_options Container#volume_options}
  */
  readonly volumeOptions?: ContainerMountsVolumeOptions;
}

export function containerMountsToTerraform(struct?: ContainerMounts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
    bind_options: containerMountsBindOptionsToTerraform(struct!.bindOptions),
    tmpfs_options: containerMountsTmpfsOptionsToTerraform(struct!.tmpfsOptions),
    volume_options: containerMountsVolumeOptionsToTerraform(struct!.volumeOptions),
  }
}

export interface ContainerNetworksAdvanced {
  /**
  * The network aliases of the container in the specific network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#aliases Container#aliases}
  */
  readonly aliases?: string[];
  /**
  * The IPV4 address of the container in the specific network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#ipv4_address Container#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * The IPV6 address of the container in the specific network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#ipv6_address Container#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * The name of the network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#name Container#name}
  */
  readonly name: string;
}

export function containerNetworksAdvancedToTerraform(struct?: ContainerNetworksAdvanced): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aliases: cdktf.listMapper(cdktf.stringToTerraform)(struct!.aliases),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface ContainerPorts {
  /**
  * Port exposed out of the container. If not given a free random port `>= 32768` will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#external Container#external}
  */
  readonly external?: number;
  /**
  * Port within the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#internal Container#internal}
  */
  readonly internal: number;
  /**
  * IP address/mask that can access this port. Defaults to `0.0.0.0`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#ip Container#ip}
  */
  readonly ip?: string;
  /**
  * Protocol that can be used over this port. Defaults to `tcp`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#protocol Container#protocol}
  */
  readonly protocol?: string;
}

export function containerPortsToTerraform(struct?: ContainerPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external: cdktf.numberToTerraform(struct!.external),
    internal: cdktf.numberToTerraform(struct!.internal),
    ip: cdktf.stringToTerraform(struct!.ip),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface ContainerUlimit {
  /**
  * The hard limit
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#hard Container#hard}
  */
  readonly hard: number;
  /**
  * The name of the ulimit
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#name Container#name}
  */
  readonly name: string;
  /**
  * The soft limit
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#soft Container#soft}
  */
  readonly soft: number;
}

export function containerUlimitToTerraform(struct?: ContainerUlimit): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hard: cdktf.numberToTerraform(struct!.hard),
    name: cdktf.stringToTerraform(struct!.name),
    soft: cdktf.numberToTerraform(struct!.soft),
  }
}

export interface ContainerUpload {
  /**
  * Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text. Conflicts with `content_base64` & `source`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#content Container#content}
  */
  readonly content?: string;
  /**
  * Base64-encoded data that will be decoded and uploaded as raw bytes for the object content. This allows safely uploading non-UTF8 binary data, but is recommended only for larger binary content such as the result of the `base64encode` interpolation function. See [here](https://github.com/terraform-providers/terraform-provider-docker/issues/48#issuecomment-374174588) for the reason. Conflicts with `content` & `source`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#content_base64 Container#content_base64}
  */
  readonly contentBase64?: string;
  /**
  * If `true`, the file will be uploaded with user executable permission. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#executable Container#executable}
  */
  readonly executable?: boolean | cdktf.IResolvable;
  /**
  * Path to the file in the container where is upload goes to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#file Container#file}
  */
  readonly file: string;
  /**
  * A filename that references a file which will be uploaded as the object content. This allows for large file uploads that do not get stored in state. Conflicts with `content` & `content_base64`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#source Container#source}
  */
  readonly source?: string;
  /**
  * If using `source`, this will force an update if the file content has updated but the filename has not. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#source_hash Container#source_hash}
  */
  readonly sourceHash?: string;
}

export function containerUploadToTerraform(struct?: ContainerUpload): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  * The path in the container where the volume will be mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#container_path Container#container_path}
  */
  readonly containerPath?: string;
  /**
  * The container where the volume is coming from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#from_container Container#from_container}
  */
  readonly fromContainer?: string;
  /**
  * The path on the host where the volume is coming from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#host_path Container#host_path}
  */
  readonly hostPath?: string;
  /**
  * If `true`, this volume will be readonly. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#read_only Container#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * The name of the docker volume which should be mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/container#volume_name Container#volume_name}
  */
  readonly volumeName?: string;
}

export function containerVolumesToTerraform(struct?: ContainerVolumes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_path: cdktf.stringToTerraform(struct!.containerPath),
    from_container: cdktf.stringToTerraform(struct!.fromContainer),
    host_path: cdktf.stringToTerraform(struct!.hostPath),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/docker/r/container docker_container}
*/
export class Container extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "docker_container";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/docker/r/container docker_container} Resource
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
    this._init = config.init;
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
    this._removeVolumes = config.removeVolumes;
    this._restart = config.restart;
    this._rm = config.rm;
    this._securityOpts = config.securityOpts;
    this._shmSize = config.shmSize;
    this._start = config.start;
    this._stdinOpen = config.stdinOpen;
    this._storageOpts = config.storageOpts;
    this._sysctls = config.sysctls;
    this._tmpfs = config.tmpfs;
    this._tty = config.tty;
    this._user = config.user;
    this._usernsMode = config.usernsMode;
    this._workingDir = config.workingDir;
    this._capabilities.internalValue = config.capabilities;
    this._devices = config.devices;
    this._healthcheck.internalValue = config.healthcheck;
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
  private _attach?: boolean | cdktf.IResolvable; 
  public get attach() {
    return this.getBooleanAttribute('attach') as any;
  }
  public set attach(value: boolean | cdktf.IResolvable) {
    this._attach = value;
  }
  public resetAttach() {
    this._attach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachInput() {
    return this._attach;
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
    return this._command;
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
  public set cpuSet(value: string) {
    this._cpuSet = value;
  }
  public resetCpuSet() {
    this._cpuSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSetInput() {
    return this._cpuSet;
  }

  // cpu_shares - computed: false, optional: true, required: false
  private _cpuShares?: number; 
  public get cpuShares() {
    return this.getNumberAttribute('cpu_shares');
  }
  public set cpuShares(value: number) {
    this._cpuShares = value;
  }
  public resetCpuShares() {
    this._cpuShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSharesInput() {
    return this._cpuShares;
  }

  // destroy_grace_seconds - computed: false, optional: true, required: false
  private _destroyGraceSeconds?: number; 
  public get destroyGraceSeconds() {
    return this.getNumberAttribute('destroy_grace_seconds');
  }
  public set destroyGraceSeconds(value: number) {
    this._destroyGraceSeconds = value;
  }
  public resetDestroyGraceSeconds() {
    this._destroyGraceSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyGraceSecondsInput() {
    return this._destroyGraceSeconds;
  }

  // dns - computed: false, optional: true, required: false
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
    return this._dns;
  }

  // dns_opts - computed: false, optional: true, required: false
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
    return this._dnsOpts;
  }

  // dns_search - computed: false, optional: true, required: false
  private _dnsSearch?: string[]; 
  public get dnsSearch() {
    return this.getListAttribute('dns_search');
  }
  public set dnsSearch(value: string[]) {
    this._dnsSearch = value;
  }
  public resetDnsSearch() {
    this._dnsSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSearchInput() {
    return this._dnsSearch;
  }

  // domainname - computed: false, optional: true, required: false
  private _domainname?: string; 
  public get domainname() {
    return this.getStringAttribute('domainname');
  }
  public set domainname(value: string) {
    this._domainname = value;
  }
  public resetDomainname() {
    this._domainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainnameInput() {
    return this._domainname;
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
    return this._entrypoint;
  }

  // env - computed: true, optional: true, required: false
  private _env?: string[]; 
  public get env() {
    return this.getListAttribute('env');
  }
  public set env(value: string[]) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
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
  public set groupAdd(value: string[]) {
    this._groupAdd = value;
  }
  public resetGroupAdd() {
    this._groupAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAddInput() {
    return this._groupAdd;
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
    return this._hostname;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // init - computed: true, optional: true, required: false
  private _init?: boolean | cdktf.IResolvable; 
  public get init() {
    return this.getBooleanAttribute('init') as any;
  }
  public set init(value: boolean | cdktf.IResolvable) {
    this._init = value;
  }
  public resetInit() {
    this._init = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initInput() {
    return this._init;
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
    return this._ipcMode;
  }

  // links - computed: false, optional: true, required: false
  private _links?: string[]; 
  public get links() {
    return this.getListAttribute('links');
  }
  public set links(value: string[]) {
    this._links = value;
  }
  public resetLinks() {
    this._links = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links;
  }

  // log_driver - computed: false, optional: true, required: false
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
    return this._logDriver;
  }

  // log_opts - computed: false, optional: true, required: false
  private _logOpts?: { [key: string]: string } | cdktf.IResolvable; 
  public get logOpts() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('log_opts') as any;
  }
  public set logOpts(value: { [key: string]: string } | cdktf.IResolvable) {
    this._logOpts = value;
  }
  public resetLogOpts() {
    this._logOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOptsInput() {
    return this._logOpts;
  }

  // logs - computed: false, optional: true, required: false
  private _logs?: boolean | cdktf.IResolvable; 
  public get logs() {
    return this.getBooleanAttribute('logs') as any;
  }
  public set logs(value: boolean | cdktf.IResolvable) {
    this._logs = value;
  }
  public resetLogs() {
    this._logs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs;
  }

  // max_retry_count - computed: false, optional: true, required: false
  private _maxRetryCount?: number; 
  public get maxRetryCount() {
    return this.getNumberAttribute('max_retry_count');
  }
  public set maxRetryCount(value: number) {
    this._maxRetryCount = value;
  }
  public resetMaxRetryCount() {
    this._maxRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryCountInput() {
    return this._maxRetryCount;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // memory_swap - computed: false, optional: true, required: false
  private _memorySwap?: number; 
  public get memorySwap() {
    return this.getNumberAttribute('memory_swap');
  }
  public set memorySwap(value: number) {
    this._memorySwap = value;
  }
  public resetMemorySwap() {
    this._memorySwap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySwapInput() {
    return this._memorySwap;
  }

  // must_run - computed: false, optional: true, required: false
  private _mustRun?: boolean | cdktf.IResolvable; 
  public get mustRun() {
    return this.getBooleanAttribute('must_run') as any;
  }
  public set mustRun(value: boolean | cdktf.IResolvable) {
    this._mustRun = value;
  }
  public resetMustRun() {
    this._mustRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustRunInput() {
    return this._mustRun;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_alias - computed: false, optional: true, required: false
  private _networkAlias?: string[]; 
  public get networkAlias() {
    return this.getListAttribute('network_alias');
  }
  public set networkAlias(value: string[]) {
    this._networkAlias = value;
  }
  public resetNetworkAlias() {
    this._networkAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAliasInput() {
    return this._networkAlias;
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
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // pid_mode - computed: false, optional: true, required: false
  private _pidMode?: string; 
  public get pidMode() {
    return this.getStringAttribute('pid_mode');
  }
  public set pidMode(value: string) {
    this._pidMode = value;
  }
  public resetPidMode() {
    this._pidMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidModeInput() {
    return this._pidMode;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged') as any;
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // publish_all_ports - computed: false, optional: true, required: false
  private _publishAllPorts?: boolean | cdktf.IResolvable; 
  public get publishAllPorts() {
    return this.getBooleanAttribute('publish_all_ports') as any;
  }
  public set publishAllPorts(value: boolean | cdktf.IResolvable) {
    this._publishAllPorts = value;
  }
  public resetPublishAllPorts() {
    this._publishAllPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishAllPortsInput() {
    return this._publishAllPorts;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // remove_volumes - computed: false, optional: true, required: false
  private _removeVolumes?: boolean | cdktf.IResolvable; 
  public get removeVolumes() {
    return this.getBooleanAttribute('remove_volumes') as any;
  }
  public set removeVolumes(value: boolean | cdktf.IResolvable) {
    this._removeVolumes = value;
  }
  public resetRemoveVolumes() {
    this._removeVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeVolumesInput() {
    return this._removeVolumes;
  }

  // restart - computed: false, optional: true, required: false
  private _restart?: string; 
  public get restart() {
    return this.getStringAttribute('restart');
  }
  public set restart(value: string) {
    this._restart = value;
  }
  public resetRestart() {
    this._restart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartInput() {
    return this._restart;
  }

  // rm - computed: false, optional: true, required: false
  private _rm?: boolean | cdktf.IResolvable; 
  public get rm() {
    return this.getBooleanAttribute('rm') as any;
  }
  public set rm(value: boolean | cdktf.IResolvable) {
    this._rm = value;
  }
  public resetRm() {
    this._rm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmInput() {
    return this._rm;
  }

  // security_opts - computed: true, optional: true, required: false
  private _securityOpts?: string[]; 
  public get securityOpts() {
    return this.getListAttribute('security_opts');
  }
  public set securityOpts(value: string[]) {
    this._securityOpts = value;
  }
  public resetSecurityOpts() {
    this._securityOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityOptsInput() {
    return this._securityOpts;
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
    return this._shmSize;
  }

  // start - computed: false, optional: true, required: false
  private _start?: boolean | cdktf.IResolvable; 
  public get start() {
    return this.getBooleanAttribute('start') as any;
  }
  public set start(value: boolean | cdktf.IResolvable) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // stdin_open - computed: false, optional: true, required: false
  private _stdinOpen?: boolean | cdktf.IResolvable; 
  public get stdinOpen() {
    return this.getBooleanAttribute('stdin_open') as any;
  }
  public set stdinOpen(value: boolean | cdktf.IResolvable) {
    this._stdinOpen = value;
  }
  public resetStdinOpen() {
    this._stdinOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdinOpenInput() {
    return this._stdinOpen;
  }

  // storage_opts - computed: false, optional: true, required: false
  private _storageOpts?: { [key: string]: string } | cdktf.IResolvable; 
  public get storageOpts() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('storage_opts') as any;
  }
  public set storageOpts(value: { [key: string]: string } | cdktf.IResolvable) {
    this._storageOpts = value;
  }
  public resetStorageOpts() {
    this._storageOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageOptsInput() {
    return this._storageOpts;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls?: { [key: string]: string } | cdktf.IResolvable; 
  public get sysctls() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sysctls') as any;
  }
  public set sysctls(value: { [key: string]: string } | cdktf.IResolvable) {
    this._sysctls = value;
  }
  public resetSysctls() {
    this._sysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls;
  }

  // tmpfs - computed: false, optional: true, required: false
  private _tmpfs?: { [key: string]: string } | cdktf.IResolvable; 
  public get tmpfs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tmpfs') as any;
  }
  public set tmpfs(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tmpfs = value;
  }
  public resetTmpfs() {
    this._tmpfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpfsInput() {
    return this._tmpfs;
  }

  // tty - computed: false, optional: true, required: false
  private _tty?: boolean | cdktf.IResolvable; 
  public get tty() {
    return this.getBooleanAttribute('tty') as any;
  }
  public set tty(value: boolean | cdktf.IResolvable) {
    this._tty = value;
  }
  public resetTty() {
    this._tty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttyInput() {
    return this._tty;
  }

  // user - computed: false, optional: true, required: false
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
    return this._user;
  }

  // userns_mode - computed: false, optional: true, required: false
  private _usernsMode?: string; 
  public get usernsMode() {
    return this.getStringAttribute('userns_mode');
  }
  public set usernsMode(value: string) {
    this._usernsMode = value;
  }
  public resetUsernsMode() {
    this._usernsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernsModeInput() {
    return this._usernsMode;
  }

  // working_dir - computed: false, optional: true, required: false
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
    return this._workingDir;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new ContainerCapabilitiesOutputReference(this as any, "capabilities", true);
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: ContainerCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // devices - computed: false, optional: true, required: false
  private _devices?: ContainerDevices[]; 
  public get devices() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('devices') as any;
  }
  public set devices(value: ContainerDevices[]) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck = new ContainerHealthcheckOutputReference(this as any, "healthcheck", true);
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: ContainerHealthcheck) {
    this._healthcheck.internalValue = value;
  }
  public resetHealthcheck() {
    this._healthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host?: ContainerHost[]; 
  public get host() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('host') as any;
  }
  public set host(value: ContainerHost[]) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: ContainerLabels[]; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: ContainerLabels[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // mounts - computed: false, optional: true, required: false
  private _mounts?: ContainerMounts[]; 
  public get mounts() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('mounts') as any;
  }
  public set mounts(value: ContainerMounts[]) {
    this._mounts = value;
  }
  public resetMounts() {
    this._mounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountsInput() {
    return this._mounts;
  }

  // networks_advanced - computed: false, optional: true, required: false
  private _networksAdvanced?: ContainerNetworksAdvanced[]; 
  public get networksAdvanced() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('networks_advanced') as any;
  }
  public set networksAdvanced(value: ContainerNetworksAdvanced[]) {
    this._networksAdvanced = value;
  }
  public resetNetworksAdvanced() {
    this._networksAdvanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksAdvancedInput() {
    return this._networksAdvanced;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: ContainerPorts[]; 
  public get ports() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ports') as any;
  }
  public set ports(value: ContainerPorts[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // ulimit - computed: false, optional: true, required: false
  private _ulimit?: ContainerUlimit[]; 
  public get ulimit() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ulimit') as any;
  }
  public set ulimit(value: ContainerUlimit[]) {
    this._ulimit = value;
  }
  public resetUlimit() {
    this._ulimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ulimitInput() {
    return this._ulimit;
  }

  // upload - computed: false, optional: true, required: false
  private _upload?: ContainerUpload[]; 
  public get upload() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('upload') as any;
  }
  public set upload(value: ContainerUpload[]) {
    this._upload = value;
  }
  public resetUpload() {
    this._upload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInput() {
    return this._upload;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: ContainerVolumes[]; 
  public get volumes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('volumes') as any;
  }
  public set volumes(value: ContainerVolumes[]) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
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
      init: cdktf.booleanToTerraform(this._init),
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
      remove_volumes: cdktf.booleanToTerraform(this._removeVolumes),
      restart: cdktf.stringToTerraform(this._restart),
      rm: cdktf.booleanToTerraform(this._rm),
      security_opts: cdktf.listMapper(cdktf.stringToTerraform)(this._securityOpts),
      shm_size: cdktf.numberToTerraform(this._shmSize),
      start: cdktf.booleanToTerraform(this._start),
      stdin_open: cdktf.booleanToTerraform(this._stdinOpen),
      storage_opts: cdktf.hashMapper(cdktf.anyToTerraform)(this._storageOpts),
      sysctls: cdktf.hashMapper(cdktf.anyToTerraform)(this._sysctls),
      tmpfs: cdktf.hashMapper(cdktf.anyToTerraform)(this._tmpfs),
      tty: cdktf.booleanToTerraform(this._tty),
      user: cdktf.stringToTerraform(this._user),
      userns_mode: cdktf.stringToTerraform(this._usernsMode),
      working_dir: cdktf.stringToTerraform(this._workingDir),
      capabilities: containerCapabilitiesToTerraform(this._capabilities.internalValue),
      devices: cdktf.listMapper(containerDevicesToTerraform)(this._devices),
      healthcheck: containerHealthcheckToTerraform(this._healthcheck.internalValue),
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
