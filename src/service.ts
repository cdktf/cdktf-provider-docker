// https://www.terraform.io/docs/providers/docker/r/service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the service
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#name Service#name}
  */
  readonly name: string;
  /**
  * auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#auth Service#auth}
  */
  readonly auth?: ServiceAuth;
  /**
  * converge_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#converge_config Service#converge_config}
  */
  readonly convergeConfig?: ServiceConvergeConfig;
  /**
  * endpoint_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#endpoint_spec Service#endpoint_spec}
  */
  readonly endpointSpec?: ServiceEndpointSpec;
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#labels Service#labels}
  */
  readonly labels?: ServiceLabels[];
  /**
  * mode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#mode Service#mode}
  */
  readonly mode?: ServiceMode;
  /**
  * rollback_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#rollback_config Service#rollback_config}
  */
  readonly rollbackConfig?: ServiceRollbackConfig;
  /**
  * task_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#task_spec Service#task_spec}
  */
  readonly taskSpec: ServiceTaskSpec;
  /**
  * update_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#update_config Service#update_config}
  */
  readonly updateConfig?: ServiceUpdateConfig;
}
export interface ServiceAuth {
  /**
  * The password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#password Service#password}
  */
  readonly password?: string;
  /**
  * The address of the server for the authentication
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#server_address Service#server_address}
  */
  readonly serverAddress: string;
  /**
  * The username
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#username Service#username}
  */
  readonly username?: string;
}

function serviceAuthToTerraform(struct?: ServiceAuthOutputReference | ServiceAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class ServiceAuthOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // password - computed: false, optional: true, required: false
  private _password?: string | undefined; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress
  }

  // username - computed: false, optional: true, required: false
  private _username?: string | undefined; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }
}
export interface ServiceConvergeConfig {
  /**
  * The interval to check if the desired state is reached (ms|s). Defaults to `7s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#delay Service#delay}
  */
  readonly delay?: string;
  /**
  * The timeout of the service to reach the desired state (s|m). Defaults to `3m`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#timeout Service#timeout}
  */
  readonly timeout?: string;
}

function serviceConvergeConfigToTerraform(struct?: ServiceConvergeConfigOutputReference | ServiceConvergeConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.stringToTerraform(struct!.delay),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}

export class ServiceConvergeConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string | undefined; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string | undefined) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string | undefined; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }
}
export interface ServiceEndpointSpecPorts {
  /**
  * A random name for the port
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#name Service#name}
  */
  readonly name?: string;
  /**
  * Rrepresents the protocol of a port: 'tcp', 'udp' or 'sctp'. Defaults to `tcp`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#protocol Service#protocol}
  */
  readonly protocol?: string;
  /**
  * Represents the mode in which the port is to be published: 'ingress' or 'host'. Defaults to `ingress`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#publish_mode Service#publish_mode}
  */
  readonly publishMode?: string;
  /**
  * The port on the swarm hosts
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#published_port Service#published_port}
  */
  readonly publishedPort?: number;
  /**
  * The port inside the container
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#target_port Service#target_port}
  */
  readonly targetPort: number;
}

function serviceEndpointSpecPortsToTerraform(struct?: ServiceEndpointSpecPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    publish_mode: cdktf.stringToTerraform(struct!.publishMode),
    published_port: cdktf.numberToTerraform(struct!.publishedPort),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
  }
}

export interface ServiceEndpointSpec {
  /**
  * The mode of resolution to use for internal load balancing between tasks
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#mode Service#mode}
  */
  readonly mode?: string;
  /**
  * ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#ports Service#ports}
  */
  readonly ports?: ServiceEndpointSpecPorts[];
}

function serviceEndpointSpecToTerraform(struct?: ServiceEndpointSpecOutputReference | ServiceEndpointSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    ports: cdktf.listMapper(serviceEndpointSpecPortsToTerraform)(struct!.ports),
  }
}

export class ServiceEndpointSpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string | undefined; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string | undefined) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: ServiceEndpointSpecPorts[] | undefined; 
  public get ports() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ports') as any;
  }
  public set ports(value: ServiceEndpointSpecPorts[] | undefined) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports
  }
}
export interface ServiceLabels {
  /**
  * Name of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#label Service#label}
  */
  readonly label: string;
  /**
  * Value of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#value Service#value}
  */
  readonly value: string;
}

function serviceLabelsToTerraform(struct?: ServiceLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ServiceModeReplicated {
  /**
  * The amount of replicas of the service. Defaults to `1`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#replicas Service#replicas}
  */
  readonly replicas?: number;
}

function serviceModeReplicatedToTerraform(struct?: ServiceModeReplicatedOutputReference | ServiceModeReplicated): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}

export class ServiceModeReplicatedOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number | undefined; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number | undefined) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas
  }
}
export interface ServiceMode {
  /**
  * The global service mode. Defaults to `false`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#global Service#global}
  */
  readonly global?: boolean | cdktf.IResolvable;
  /**
  * replicated block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#replicated Service#replicated}
  */
  readonly replicated?: ServiceModeReplicated;
}

function serviceModeToTerraform(struct?: ServiceModeOutputReference | ServiceMode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global: cdktf.booleanToTerraform(struct!.global),
    replicated: serviceModeReplicatedToTerraform(struct!.replicated),
  }
}

export class ServiceModeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // global - computed: false, optional: true, required: false
  private _global?: boolean | cdktf.IResolvable | undefined; 
  public get global() {
    return this.getBooleanAttribute('global') as any;
  }
  public set global(value: boolean | cdktf.IResolvable | undefined) {
    this._global = value;
  }
  public resetGlobal() {
    this._global = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global
  }

  // replicated - computed: false, optional: true, required: false
  private _replicated?: ServiceModeReplicated | undefined; 
  private __replicatedOutput = new ServiceModeReplicatedOutputReference(this as any, "replicated", true);
  public get replicated() {
    return this.__replicatedOutput;
  }
  public putReplicated(value: ServiceModeReplicated | undefined) {
    this._replicated = value;
  }
  public resetReplicated() {
    this._replicated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatedInput() {
    return this._replicated
  }
}
export interface ServiceRollbackConfig {
  /**
  * Delay between task rollbacks (ns|us|ms|s|m|h). Defaults to `0s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#delay Service#delay}
  */
  readonly delay?: string;
  /**
  * Action on rollback failure: pause | continue. Defaults to `pause`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#failure_action Service#failure_action}
  */
  readonly failureAction?: string;
  /**
  * Failure rate to tolerate during a rollback. Defaults to `0.0`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#max_failure_ratio Service#max_failure_ratio}
  */
  readonly maxFailureRatio?: string;
  /**
  * Duration after each task rollback to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#monitor Service#monitor}
  */
  readonly monitor?: string;
  /**
  * Rollback order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#order Service#order}
  */
  readonly order?: string;
  /**
  * Maximum number of tasks to be rollbacked in one iteration. Defaults to `1`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#parallelism Service#parallelism}
  */
  readonly parallelism?: number;
}

function serviceRollbackConfigToTerraform(struct?: ServiceRollbackConfigOutputReference | ServiceRollbackConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.stringToTerraform(struct!.delay),
    failure_action: cdktf.stringToTerraform(struct!.failureAction),
    max_failure_ratio: cdktf.stringToTerraform(struct!.maxFailureRatio),
    monitor: cdktf.stringToTerraform(struct!.monitor),
    order: cdktf.stringToTerraform(struct!.order),
    parallelism: cdktf.numberToTerraform(struct!.parallelism),
  }
}

export class ServiceRollbackConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string | undefined; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string | undefined) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay
  }

  // failure_action - computed: false, optional: true, required: false
  private _failureAction?: string | undefined; 
  public get failureAction() {
    return this.getStringAttribute('failure_action');
  }
  public set failureAction(value: string | undefined) {
    this._failureAction = value;
  }
  public resetFailureAction() {
    this._failureAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureActionInput() {
    return this._failureAction
  }

  // max_failure_ratio - computed: false, optional: true, required: false
  private _maxFailureRatio?: string | undefined; 
  public get maxFailureRatio() {
    return this.getStringAttribute('max_failure_ratio');
  }
  public set maxFailureRatio(value: string | undefined) {
    this._maxFailureRatio = value;
  }
  public resetMaxFailureRatio() {
    this._maxFailureRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailureRatioInput() {
    return this._maxFailureRatio
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: string | undefined; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string | undefined) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor
  }

  // order - computed: false, optional: true, required: false
  private _order?: string | undefined; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string | undefined) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism?: number | undefined; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number | undefined) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism
  }
}
export interface ServiceTaskSpecContainerSpecConfigs {
  /**
  * ID of the specific config that we're referencing
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#config_id Service#config_id}
  */
  readonly configId: string;
  /**
  * Name of the config that this references, but this is just provided for lookup/display purposes. The config in the reference will be identified by its ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#config_name Service#config_name}
  */
  readonly configName?: string;
  /**
  * Represents the file GID. Defaults to `0`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file_gid Service#file_gid}
  */
  readonly fileGid?: string;
  /**
  * Represents represents the FileMode of the file. Defaults to `0o444`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file_mode Service#file_mode}
  */
  readonly fileMode?: number;
  /**
  * Represents the final filename in the filesystem
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file_name Service#file_name}
  */
  readonly fileName: string;
  /**
  * Represents the file UID. Defaults to `0`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file_uid Service#file_uid}
  */
  readonly fileUid?: string;
}

function serviceTaskSpecContainerSpecConfigsToTerraform(struct?: ServiceTaskSpecContainerSpecConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_id: cdktf.stringToTerraform(struct!.configId),
    config_name: cdktf.stringToTerraform(struct!.configName),
    file_gid: cdktf.stringToTerraform(struct!.fileGid),
    file_mode: cdktf.numberToTerraform(struct!.fileMode),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    file_uid: cdktf.stringToTerraform(struct!.fileUid),
  }
}

export interface ServiceTaskSpecContainerSpecDnsConfig {
  /**
  * The IP addresses of the name servers
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#nameservers Service#nameservers}
  */
  readonly nameservers: string[];
  /**
  * A list of internal resolver variables to be modified (e.g., debug, ndots:3, etc.)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#options Service#options}
  */
  readonly options?: string[];
  /**
  * A search list for host-name lookup
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#search Service#search}
  */
  readonly search?: string[];
}

function serviceTaskSpecContainerSpecDnsConfigToTerraform(struct?: ServiceTaskSpecContainerSpecDnsConfigOutputReference | ServiceTaskSpecContainerSpecDnsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nameservers),
    options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.options),
    search: cdktf.listMapper(cdktf.stringToTerraform)(struct!.search),
  }
}

export class ServiceTaskSpecContainerSpecDnsConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // nameservers - computed: false, optional: false, required: true
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers
  }

  // options - computed: false, optional: true, required: false
  private _options?: string[] | undefined; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[] | undefined) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }

  // search - computed: false, optional: true, required: false
  private _search?: string[] | undefined; 
  public get search() {
    return this.getListAttribute('search');
  }
  public set search(value: string[] | undefined) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search
  }
}
export interface ServiceTaskSpecContainerSpecHealthcheck {
  /**
  * Time between running the check (ms|s|m|h). Defaults to `0s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#interval Service#interval}
  */
  readonly interval?: string;
  /**
  * Consecutive failures needed to report unhealthy. Defaults to `0`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#retries Service#retries}
  */
  readonly retries?: number;
  /**
  * Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#start_period Service#start_period}
  */
  readonly startPeriod?: string;
  /**
  * The test to perform as list
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#test Service#test}
  */
  readonly test: string[];
  /**
  * Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#timeout Service#timeout}
  */
  readonly timeout?: string;
}

function serviceTaskSpecContainerSpecHealthcheckToTerraform(struct?: ServiceTaskSpecContainerSpecHealthcheckOutputReference | ServiceTaskSpecContainerSpecHealthcheck): any {
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

export class ServiceTaskSpecContainerSpecHealthcheckOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string | undefined; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string | undefined) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number | undefined; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries
  }

  // start_period - computed: false, optional: true, required: false
  private _startPeriod?: string | undefined; 
  public get startPeriod() {
    return this.getStringAttribute('start_period');
  }
  public set startPeriod(value: string | undefined) {
    this._startPeriod = value;
  }
  public resetStartPeriod() {
    this._startPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPeriodInput() {
    return this._startPeriod
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
    return this._test
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string | undefined; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }
}
export interface ServiceTaskSpecContainerSpecHosts {
  /**
  * The name of the host
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#host Service#host}
  */
  readonly host: string;
  /**
  * The ip of the host
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#ip Service#ip}
  */
  readonly ip: string;
}

function serviceTaskSpecContainerSpecHostsToTerraform(struct?: ServiceTaskSpecContainerSpecHosts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}

export interface ServiceTaskSpecContainerSpecLabels {
  /**
  * Name of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#label Service#label}
  */
  readonly label: string;
  /**
  * Value of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#value Service#value}
  */
  readonly value: string;
}

function serviceTaskSpecContainerSpecLabelsToTerraform(struct?: ServiceTaskSpecContainerSpecLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ServiceTaskSpecContainerSpecMountsBindOptions {
  /**
  * Bind propagation refers to whether or not mounts created within a given bind-mount or named volume can be propagated to replicas of that mount. See the [docs](https://docs.docker.com/storage/bind-mounts/#configure-bind-propagation) for details. Defaults to `rprivate`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#propagation Service#propagation}
  */
  readonly propagation?: string;
}

function serviceTaskSpecContainerSpecMountsBindOptionsToTerraform(struct?: ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference | ServiceTaskSpecContainerSpecMountsBindOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    propagation: cdktf.stringToTerraform(struct!.propagation),
  }
}

export class ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // propagation - computed: false, optional: true, required: false
  private _propagation?: string | undefined; 
  public get propagation() {
    return this.getStringAttribute('propagation');
  }
  public set propagation(value: string | undefined) {
    this._propagation = value;
  }
  public resetPropagation() {
    this._propagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagationInput() {
    return this._propagation
  }
}
export interface ServiceTaskSpecContainerSpecMountsTmpfsOptions {
  /**
  * The permission mode for the tmpfs mount in an integer
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#mode Service#mode}
  */
  readonly mode?: number;
  /**
  * The size for the tmpfs mount in bytes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#size_bytes Service#size_bytes}
  */
  readonly sizeBytes?: number;
}

function serviceTaskSpecContainerSpecMountsTmpfsOptionsToTerraform(struct?: ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference | ServiceTaskSpecContainerSpecMountsTmpfsOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.numberToTerraform(struct!.mode),
    size_bytes: cdktf.numberToTerraform(struct!.sizeBytes),
  }
}

export class ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number | undefined; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number | undefined) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
  }

  // size_bytes - computed: false, optional: true, required: false
  private _sizeBytes?: number | undefined; 
  public get sizeBytes() {
    return this.getNumberAttribute('size_bytes');
  }
  public set sizeBytes(value: number | undefined) {
    this._sizeBytes = value;
  }
  public resetSizeBytes() {
    this._sizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeBytesInput() {
    return this._sizeBytes
  }
}
export interface ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels {
  /**
  * Name of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#label Service#label}
  */
  readonly label: string;
  /**
  * Value of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#value Service#value}
  */
  readonly value: string;
}

function serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToTerraform(struct?: ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ServiceTaskSpecContainerSpecMountsVolumeOptions {
  /**
  * Name of the driver to use to create the volume
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#driver_name Service#driver_name}
  */
  readonly driverName?: string;
  /**
  * key/value map of driver specific options
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#driver_options Service#driver_options}
  */
  readonly driverOptions?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Populate volume with data from the target
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#no_copy Service#no_copy}
  */
  readonly noCopy?: boolean | cdktf.IResolvable;
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#labels Service#labels}
  */
  readonly labels?: ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels[];
}

function serviceTaskSpecContainerSpecMountsVolumeOptionsToTerraform(struct?: ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference | ServiceTaskSpecContainerSpecMountsVolumeOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver_name: cdktf.stringToTerraform(struct!.driverName),
    driver_options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverOptions),
    no_copy: cdktf.booleanToTerraform(struct!.noCopy),
    labels: cdktf.listMapper(serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToTerraform)(struct!.labels),
  }
}

export class ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // driver_name - computed: false, optional: true, required: false
  private _driverName?: string | undefined; 
  public get driverName() {
    return this.getStringAttribute('driver_name');
  }
  public set driverName(value: string | undefined) {
    this._driverName = value;
  }
  public resetDriverName() {
    this._driverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNameInput() {
    return this._driverName
  }

  // driver_options - computed: false, optional: true, required: false
  private _driverOptions?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get driverOptions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_options') as any;
  }
  public set driverOptions(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._driverOptions = value;
  }
  public resetDriverOptions() {
    this._driverOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverOptionsInput() {
    return this._driverOptions
  }

  // no_copy - computed: false, optional: true, required: false
  private _noCopy?: boolean | cdktf.IResolvable | undefined; 
  public get noCopy() {
    return this.getBooleanAttribute('no_copy') as any;
  }
  public set noCopy(value: boolean | cdktf.IResolvable | undefined) {
    this._noCopy = value;
  }
  public resetNoCopy() {
    this._noCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCopyInput() {
    return this._noCopy
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels[] | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels[] | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }
}
export interface ServiceTaskSpecContainerSpecMounts {
  /**
  * Whether the mount should be read-only
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#read_only Service#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Mount source (e.g. a volume name, a host path)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#source Service#source}
  */
  readonly source?: string;
  /**
  * Container path
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#target Service#target}
  */
  readonly target: string;
  /**
  * The mount type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#type Service#type}
  */
  readonly type: string;
  /**
  * bind_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#bind_options Service#bind_options}
  */
  readonly bindOptions?: ServiceTaskSpecContainerSpecMountsBindOptions;
  /**
  * tmpfs_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#tmpfs_options Service#tmpfs_options}
  */
  readonly tmpfsOptions?: ServiceTaskSpecContainerSpecMountsTmpfsOptions;
  /**
  * volume_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#volume_options Service#volume_options}
  */
  readonly volumeOptions?: ServiceTaskSpecContainerSpecMountsVolumeOptions;
}

function serviceTaskSpecContainerSpecMountsToTerraform(struct?: ServiceTaskSpecContainerSpecMounts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
    bind_options: serviceTaskSpecContainerSpecMountsBindOptionsToTerraform(struct!.bindOptions),
    tmpfs_options: serviceTaskSpecContainerSpecMountsTmpfsOptionsToTerraform(struct!.tmpfsOptions),
    volume_options: serviceTaskSpecContainerSpecMountsVolumeOptionsToTerraform(struct!.volumeOptions),
  }
}

export interface ServiceTaskSpecContainerSpecPrivilegesCredentialSpec {
  /**
  * Load credential spec from this file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file Service#file}
  */
  readonly file?: string;
  /**
  * Load credential spec from this value in the Windows registry
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#registry Service#registry}
  */
  readonly registry?: string;
}

function serviceTaskSpecContainerSpecPrivilegesCredentialSpecToTerraform(struct?: ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference | ServiceTaskSpecContainerSpecPrivilegesCredentialSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    registry: cdktf.stringToTerraform(struct!.registry),
  }
}

export class ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // file - computed: false, optional: true, required: false
  private _file?: string | undefined; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string | undefined) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string | undefined; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string | undefined) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry
  }
}
export interface ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext {
  /**
  * Disable SELinux
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#disable Service#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * SELinux level label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#level Service#level}
  */
  readonly level?: string;
  /**
  * SELinux role label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#role Service#role}
  */
  readonly role?: string;
  /**
  * SELinux type label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#type Service#type}
  */
  readonly type?: string;
  /**
  * SELinux user label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#user Service#user}
  */
  readonly user?: string;
}

function serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToTerraform(struct?: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference | ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export class ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable | undefined; 
  public get disable() {
    return this.getBooleanAttribute('disable') as any;
  }
  public set disable(value: boolean | cdktf.IResolvable | undefined) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable
  }

  // level - computed: false, optional: true, required: false
  private _level?: string | undefined; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string | undefined) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level
  }

  // role - computed: false, optional: true, required: false
  private _role?: string | undefined; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string | undefined) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // user - computed: false, optional: true, required: false
  private _user?: string | undefined; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }
}
export interface ServiceTaskSpecContainerSpecPrivileges {
  /**
  * credential_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#credential_spec Service#credential_spec}
  */
  readonly credentialSpec?: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec;
  /**
  * se_linux_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#se_linux_context Service#se_linux_context}
  */
  readonly seLinuxContext?: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext;
}

function serviceTaskSpecContainerSpecPrivilegesToTerraform(struct?: ServiceTaskSpecContainerSpecPrivilegesOutputReference | ServiceTaskSpecContainerSpecPrivileges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_spec: serviceTaskSpecContainerSpecPrivilegesCredentialSpecToTerraform(struct!.credentialSpec),
    se_linux_context: serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToTerraform(struct!.seLinuxContext),
  }
}

export class ServiceTaskSpecContainerSpecPrivilegesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // credential_spec - computed: false, optional: true, required: false
  private _credentialSpec?: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec | undefined; 
  private __credentialSpecOutput = new ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference(this as any, "credential_spec", true);
  public get credentialSpec() {
    return this.__credentialSpecOutput;
  }
  public putCredentialSpec(value: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec | undefined) {
    this._credentialSpec = value;
  }
  public resetCredentialSpec() {
    this._credentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialSpecInput() {
    return this._credentialSpec
  }

  // se_linux_context - computed: false, optional: true, required: false
  private _seLinuxContext?: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext | undefined; 
  private __seLinuxContextOutput = new ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference(this as any, "se_linux_context", true);
  public get seLinuxContext() {
    return this.__seLinuxContextOutput;
  }
  public putSeLinuxContext(value: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext | undefined) {
    this._seLinuxContext = value;
  }
  public resetSeLinuxContext() {
    this._seLinuxContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxContextInput() {
    return this._seLinuxContext
  }
}
export interface ServiceTaskSpecContainerSpecSecrets {
  /**
  * Represents the file GID. Defaults to `0`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file_gid Service#file_gid}
  */
  readonly fileGid?: string;
  /**
  * Represents represents the FileMode of the file. Defaults to `0o444`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file_mode Service#file_mode}
  */
  readonly fileMode?: number;
  /**
  * Represents the final filename in the filesystem
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file_name Service#file_name}
  */
  readonly fileName: string;
  /**
  * Represents the file UID. Defaults to `0`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file_uid Service#file_uid}
  */
  readonly fileUid?: string;
  /**
  * ID of the specific secret that we're referencing
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#secret_id Service#secret_id}
  */
  readonly secretId: string;
  /**
  * Name of the secret that this references, but this is just provided for lookup/display purposes. The config in the reference will be identified by its ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#secret_name Service#secret_name}
  */
  readonly secretName?: string;
}

function serviceTaskSpecContainerSpecSecretsToTerraform(struct?: ServiceTaskSpecContainerSpecSecrets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_gid: cdktf.stringToTerraform(struct!.fileGid),
    file_mode: cdktf.numberToTerraform(struct!.fileMode),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    file_uid: cdktf.stringToTerraform(struct!.fileUid),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface ServiceTaskSpecContainerSpec {
  /**
  * Arguments to the command
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#args Service#args}
  */
  readonly args?: string[];
  /**
  * The command/entrypoint to be run in the image. According to the [docker cli](https://github.com/docker/cli/blob/v20.10.7/cli/command/service/opts.go#L705) the override of the entrypoint is also passed to the `command` property and there is no `entrypoint` attribute in the `ContainerSpec` of the service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#command Service#command}
  */
  readonly command?: string[];
  /**
  * The working directory for commands to run in
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#dir Service#dir}
  */
  readonly dir?: string;
  /**
  * A list of environment variables in the form VAR="value"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#env Service#env}
  */
  readonly env?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * A list of additional groups that the container process will run as
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#groups Service#groups}
  */
  readonly groups?: string[];
  /**
  * The hostname to use for the container, as a valid RFC 1123 hostname
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#hostname Service#hostname}
  */
  readonly hostname?: string;
  /**
  * The image name to use for the containers of the service, like `nginx:1.17.6`. Also use the data-source or resource of `docker_image` with the `repo_digest` or `docker_registry_image` with the `name` attribute for this, as shown in the examples.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#image Service#image}
  */
  readonly image: string;
  /**
  * Isolation technology of the containers running the service. (Windows only). Defaults to `default`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#isolation Service#isolation}
  */
  readonly isolation?: string;
  /**
  * Mount the container's root filesystem as read only
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#read_only Service#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Amount of time to wait for the container to terminate before forcefully removing it (ms|s|m|h). If not specified or '0s' the destroy will not check if all tasks/containers of the service terminate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#stop_grace_period Service#stop_grace_period}
  */
  readonly stopGracePeriod?: string;
  /**
  * Signal to stop the container
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#stop_signal Service#stop_signal}
  */
  readonly stopSignal?: string;
  /**
  * The user inside the container
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#user Service#user}
  */
  readonly user?: string;
  /**
  * configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#configs Service#configs}
  */
  readonly configs?: ServiceTaskSpecContainerSpecConfigs[];
  /**
  * dns_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#dns_config Service#dns_config}
  */
  readonly dnsConfig?: ServiceTaskSpecContainerSpecDnsConfig;
  /**
  * healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#healthcheck Service#healthcheck}
  */
  readonly healthcheck?: ServiceTaskSpecContainerSpecHealthcheck;
  /**
  * hosts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#hosts Service#hosts}
  */
  readonly hosts?: ServiceTaskSpecContainerSpecHosts[];
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#labels Service#labels}
  */
  readonly labels?: ServiceTaskSpecContainerSpecLabels[];
  /**
  * mounts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#mounts Service#mounts}
  */
  readonly mounts?: ServiceTaskSpecContainerSpecMounts[];
  /**
  * privileges block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#privileges Service#privileges}
  */
  readonly privileges?: ServiceTaskSpecContainerSpecPrivileges;
  /**
  * secrets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#secrets Service#secrets}
  */
  readonly secrets?: ServiceTaskSpecContainerSpecSecrets[];
}

function serviceTaskSpecContainerSpecToTerraform(struct?: ServiceTaskSpecContainerSpecOutputReference | ServiceTaskSpecContainerSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    dir: cdktf.stringToTerraform(struct!.dir),
    env: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.env),
    groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groups),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    image: cdktf.stringToTerraform(struct!.image),
    isolation: cdktf.stringToTerraform(struct!.isolation),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    stop_grace_period: cdktf.stringToTerraform(struct!.stopGracePeriod),
    stop_signal: cdktf.stringToTerraform(struct!.stopSignal),
    user: cdktf.stringToTerraform(struct!.user),
    configs: cdktf.listMapper(serviceTaskSpecContainerSpecConfigsToTerraform)(struct!.configs),
    dns_config: serviceTaskSpecContainerSpecDnsConfigToTerraform(struct!.dnsConfig),
    healthcheck: serviceTaskSpecContainerSpecHealthcheckToTerraform(struct!.healthcheck),
    hosts: cdktf.listMapper(serviceTaskSpecContainerSpecHostsToTerraform)(struct!.hosts),
    labels: cdktf.listMapper(serviceTaskSpecContainerSpecLabelsToTerraform)(struct!.labels),
    mounts: cdktf.listMapper(serviceTaskSpecContainerSpecMountsToTerraform)(struct!.mounts),
    privileges: serviceTaskSpecContainerSpecPrivilegesToTerraform(struct!.privileges),
    secrets: cdktf.listMapper(serviceTaskSpecContainerSpecSecretsToTerraform)(struct!.secrets),
  }
}

export class ServiceTaskSpecContainerSpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[] | undefined; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[] | undefined) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[] | undefined; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[] | undefined) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string | undefined; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string | undefined) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get env() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('env') as any;
  }
  public set env(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[] | undefined; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[] | undefined) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string | undefined; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string | undefined) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname
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
    return this._image
  }

  // isolation - computed: false, optional: true, required: false
  private _isolation?: string | undefined; 
  public get isolation() {
    return this.getStringAttribute('isolation');
  }
  public set isolation(value: string | undefined) {
    this._isolation = value;
  }
  public resetIsolation() {
    this._isolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationInput() {
    return this._isolation
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable | undefined; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only') as any;
  }
  public set readOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly
  }

  // stop_grace_period - computed: true, optional: true, required: false
  private _stopGracePeriod?: string | undefined; 
  public get stopGracePeriod() {
    return this.getStringAttribute('stop_grace_period');
  }
  public set stopGracePeriod(value: string | undefined) {
    this._stopGracePeriod = value;
  }
  public resetStopGracePeriod() {
    this._stopGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopGracePeriodInput() {
    return this._stopGracePeriod
  }

  // stop_signal - computed: false, optional: true, required: false
  private _stopSignal?: string | undefined; 
  public get stopSignal() {
    return this.getStringAttribute('stop_signal');
  }
  public set stopSignal(value: string | undefined) {
    this._stopSignal = value;
  }
  public resetStopSignal() {
    this._stopSignal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopSignalInput() {
    return this._stopSignal
  }

  // user - computed: false, optional: true, required: false
  private _user?: string | undefined; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }

  // configs - computed: false, optional: true, required: false
  private _configs?: ServiceTaskSpecContainerSpecConfigs[] | undefined; 
  public get configs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('configs') as any;
  }
  public set configs(value: ServiceTaskSpecContainerSpecConfigs[] | undefined) {
    this._configs = value;
  }
  public resetConfigs() {
    this._configs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig?: ServiceTaskSpecContainerSpecDnsConfig | undefined; 
  private __dnsConfigOutput = new ServiceTaskSpecContainerSpecDnsConfigOutputReference(this as any, "dns_config", true);
  public get dnsConfig() {
    return this.__dnsConfigOutput;
  }
  public putDnsConfig(value: ServiceTaskSpecContainerSpecDnsConfig | undefined) {
    this._dnsConfig = value;
  }
  public resetDnsConfig() {
    this._dnsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck?: ServiceTaskSpecContainerSpecHealthcheck | undefined; 
  private __healthcheckOutput = new ServiceTaskSpecContainerSpecHealthcheckOutputReference(this as any, "healthcheck", true);
  public get healthcheck() {
    return this.__healthcheckOutput;
  }
  public putHealthcheck(value: ServiceTaskSpecContainerSpecHealthcheck | undefined) {
    this._healthcheck = value;
  }
  public resetHealthcheck() {
    this._healthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: ServiceTaskSpecContainerSpecHosts[] | undefined; 
  public get hosts() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('hosts') as any;
  }
  public set hosts(value: ServiceTaskSpecContainerSpecHosts[] | undefined) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: ServiceTaskSpecContainerSpecLabels[] | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: ServiceTaskSpecContainerSpecLabels[] | undefined) {
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
  private _mounts?: ServiceTaskSpecContainerSpecMounts[] | undefined; 
  public get mounts() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('mounts') as any;
  }
  public set mounts(value: ServiceTaskSpecContainerSpecMounts[] | undefined) {
    this._mounts = value;
  }
  public resetMounts() {
    this._mounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountsInput() {
    return this._mounts
  }

  // privileges - computed: false, optional: true, required: false
  private _privileges?: ServiceTaskSpecContainerSpecPrivileges | undefined; 
  private __privilegesOutput = new ServiceTaskSpecContainerSpecPrivilegesOutputReference(this as any, "privileges", true);
  public get privileges() {
    return this.__privilegesOutput;
  }
  public putPrivileges(value: ServiceTaskSpecContainerSpecPrivileges | undefined) {
    this._privileges = value;
  }
  public resetPrivileges() {
    this._privileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: ServiceTaskSpecContainerSpecSecrets[] | undefined; 
  public get secrets() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secrets') as any;
  }
  public set secrets(value: ServiceTaskSpecContainerSpecSecrets[] | undefined) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets
  }
}
export interface ServiceTaskSpecLogDriver {
  /**
  * The logging driver to use
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#name Service#name}
  */
  readonly name: string;
  /**
  * The options for the logging driver
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#options Service#options}
  */
  readonly options?: { [key: string]: string } | cdktf.IResolvable;
}

function serviceTaskSpecLogDriverToTerraform(struct?: ServiceTaskSpecLogDriverOutputReference | ServiceTaskSpecLogDriver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.options),
  }
}

export class ServiceTaskSpecLogDriverOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._name
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get options() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('options') as any;
  }
  public set options(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }
}
export interface ServiceTaskSpecPlacementPlatforms {
  /**
  * The architecture, e.g. `amd64`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#architecture Service#architecture}
  */
  readonly architecture: string;
  /**
  * The operation system, e.g. `linux`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#os Service#os}
  */
  readonly os: string;
}

function serviceTaskSpecPlacementPlatformsToTerraform(struct?: ServiceTaskSpecPlacementPlatforms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architecture: cdktf.stringToTerraform(struct!.architecture),
    os: cdktf.stringToTerraform(struct!.os),
  }
}

export interface ServiceTaskSpecPlacement {
  /**
  * An array of constraints. e.g.: `node.role==manager`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#constraints Service#constraints}
  */
  readonly constraints?: string[];
  /**
  * Maximum number of replicas for per node (default value is `0`, which is unlimited)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#max_replicas Service#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Preferences provide a way to make the scheduler aware of factors such as topology. They are provided in order from highest to lowest precedence, e.g.: spread=node.role.manager
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#prefs Service#prefs}
  */
  readonly prefs?: string[];
  /**
  * platforms block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#platforms Service#platforms}
  */
  readonly platforms?: ServiceTaskSpecPlacementPlatforms[];
}

function serviceTaskSpecPlacementToTerraform(struct?: ServiceTaskSpecPlacementOutputReference | ServiceTaskSpecPlacement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constraints: cdktf.listMapper(cdktf.stringToTerraform)(struct!.constraints),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    prefs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.prefs),
    platforms: cdktf.listMapper(serviceTaskSpecPlacementPlatformsToTerraform)(struct!.platforms),
  }
}

export class ServiceTaskSpecPlacementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints?: string[] | undefined; 
  public get constraints() {
    return this.getListAttribute('constraints');
  }
  public set constraints(value: string[] | undefined) {
    this._constraints = value;
  }
  public resetConstraints() {
    this._constraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints
  }

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number | undefined; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number | undefined) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas
  }

  // prefs - computed: false, optional: true, required: false
  private _prefs?: string[] | undefined; 
  public get prefs() {
    return this.getListAttribute('prefs');
  }
  public set prefs(value: string[] | undefined) {
    this._prefs = value;
  }
  public resetPrefs() {
    this._prefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefsInput() {
    return this._prefs
  }

  // platforms - computed: false, optional: true, required: false
  private _platforms?: ServiceTaskSpecPlacementPlatforms[] | undefined; 
  public get platforms() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('platforms') as any;
  }
  public set platforms(value: ServiceTaskSpecPlacementPlatforms[] | undefined) {
    this._platforms = value;
  }
  public resetPlatforms() {
    this._platforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformsInput() {
    return this._platforms
  }
}
export interface ServiceTaskSpecResourcesLimits {
  /**
  * The amounf of memory in bytes the container allocates
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#memory_bytes Service#memory_bytes}
  */
  readonly memoryBytes?: number;
  /**
  * CPU shares in units of `1/1e9` (or `10^-9`) of the CPU. Should be at least 1000000
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#nano_cpus Service#nano_cpus}
  */
  readonly nanoCpus?: number;
}

function serviceTaskSpecResourcesLimitsToTerraform(struct?: ServiceTaskSpecResourcesLimitsOutputReference | ServiceTaskSpecResourcesLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_bytes: cdktf.numberToTerraform(struct!.memoryBytes),
    nano_cpus: cdktf.numberToTerraform(struct!.nanoCpus),
  }
}

export class ServiceTaskSpecResourcesLimitsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // memory_bytes - computed: false, optional: true, required: false
  private _memoryBytes?: number | undefined; 
  public get memoryBytes() {
    return this.getNumberAttribute('memory_bytes');
  }
  public set memoryBytes(value: number | undefined) {
    this._memoryBytes = value;
  }
  public resetMemoryBytes() {
    this._memoryBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryBytesInput() {
    return this._memoryBytes
  }

  // nano_cpus - computed: false, optional: true, required: false
  private _nanoCpus?: number | undefined; 
  public get nanoCpus() {
    return this.getNumberAttribute('nano_cpus');
  }
  public set nanoCpus(value: number | undefined) {
    this._nanoCpus = value;
  }
  public resetNanoCpus() {
    this._nanoCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanoCpusInput() {
    return this._nanoCpus
  }
}
export interface ServiceTaskSpecResourcesReservationGenericResources {
  /**
  * The Integer resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#discrete_resources_spec Service#discrete_resources_spec}
  */
  readonly discreteResourcesSpec?: string[];
  /**
  * The String resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#named_resources_spec Service#named_resources_spec}
  */
  readonly namedResourcesSpec?: string[];
}

function serviceTaskSpecResourcesReservationGenericResourcesToTerraform(struct?: ServiceTaskSpecResourcesReservationGenericResourcesOutputReference | ServiceTaskSpecResourcesReservationGenericResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discrete_resources_spec: cdktf.listMapper(cdktf.stringToTerraform)(struct!.discreteResourcesSpec),
    named_resources_spec: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namedResourcesSpec),
  }
}

export class ServiceTaskSpecResourcesReservationGenericResourcesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // discrete_resources_spec - computed: false, optional: true, required: false
  private _discreteResourcesSpec?: string[] | undefined; 
  public get discreteResourcesSpec() {
    return this.getListAttribute('discrete_resources_spec');
  }
  public set discreteResourcesSpec(value: string[] | undefined) {
    this._discreteResourcesSpec = value;
  }
  public resetDiscreteResourcesSpec() {
    this._discreteResourcesSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discreteResourcesSpecInput() {
    return this._discreteResourcesSpec
  }

  // named_resources_spec - computed: false, optional: true, required: false
  private _namedResourcesSpec?: string[] | undefined; 
  public get namedResourcesSpec() {
    return this.getListAttribute('named_resources_spec');
  }
  public set namedResourcesSpec(value: string[] | undefined) {
    this._namedResourcesSpec = value;
  }
  public resetNamedResourcesSpec() {
    this._namedResourcesSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedResourcesSpecInput() {
    return this._namedResourcesSpec
  }
}
export interface ServiceTaskSpecResourcesReservation {
  /**
  * The amounf of memory in bytes the container allocates
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#memory_bytes Service#memory_bytes}
  */
  readonly memoryBytes?: number;
  /**
  * CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least 1000000
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#nano_cpus Service#nano_cpus}
  */
  readonly nanoCpus?: number;
  /**
  * generic_resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#generic_resources Service#generic_resources}
  */
  readonly genericResources?: ServiceTaskSpecResourcesReservationGenericResources;
}

function serviceTaskSpecResourcesReservationToTerraform(struct?: ServiceTaskSpecResourcesReservationOutputReference | ServiceTaskSpecResourcesReservation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_bytes: cdktf.numberToTerraform(struct!.memoryBytes),
    nano_cpus: cdktf.numberToTerraform(struct!.nanoCpus),
    generic_resources: serviceTaskSpecResourcesReservationGenericResourcesToTerraform(struct!.genericResources),
  }
}

export class ServiceTaskSpecResourcesReservationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // memory_bytes - computed: false, optional: true, required: false
  private _memoryBytes?: number | undefined; 
  public get memoryBytes() {
    return this.getNumberAttribute('memory_bytes');
  }
  public set memoryBytes(value: number | undefined) {
    this._memoryBytes = value;
  }
  public resetMemoryBytes() {
    this._memoryBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryBytesInput() {
    return this._memoryBytes
  }

  // nano_cpus - computed: false, optional: true, required: false
  private _nanoCpus?: number | undefined; 
  public get nanoCpus() {
    return this.getNumberAttribute('nano_cpus');
  }
  public set nanoCpus(value: number | undefined) {
    this._nanoCpus = value;
  }
  public resetNanoCpus() {
    this._nanoCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanoCpusInput() {
    return this._nanoCpus
  }

  // generic_resources - computed: false, optional: true, required: false
  private _genericResources?: ServiceTaskSpecResourcesReservationGenericResources | undefined; 
  private __genericResourcesOutput = new ServiceTaskSpecResourcesReservationGenericResourcesOutputReference(this as any, "generic_resources", true);
  public get genericResources() {
    return this.__genericResourcesOutput;
  }
  public putGenericResources(value: ServiceTaskSpecResourcesReservationGenericResources | undefined) {
    this._genericResources = value;
  }
  public resetGenericResources() {
    this._genericResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericResourcesInput() {
    return this._genericResources
  }
}
export interface ServiceTaskSpecResources {
  /**
  * limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#limits Service#limits}
  */
  readonly limits?: ServiceTaskSpecResourcesLimits;
  /**
  * reservation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#reservation Service#reservation}
  */
  readonly reservation?: ServiceTaskSpecResourcesReservation;
}

function serviceTaskSpecResourcesToTerraform(struct?: ServiceTaskSpecResourcesOutputReference | ServiceTaskSpecResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: serviceTaskSpecResourcesLimitsToTerraform(struct!.limits),
    reservation: serviceTaskSpecResourcesReservationToTerraform(struct!.reservation),
  }
}

export class ServiceTaskSpecResourcesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: ServiceTaskSpecResourcesLimits | undefined; 
  private __limitsOutput = new ServiceTaskSpecResourcesLimitsOutputReference(this as any, "limits", true);
  public get limits() {
    return this.__limitsOutput;
  }
  public putLimits(value: ServiceTaskSpecResourcesLimits | undefined) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits
  }

  // reservation - computed: false, optional: true, required: false
  private _reservation?: ServiceTaskSpecResourcesReservation | undefined; 
  private __reservationOutput = new ServiceTaskSpecResourcesReservationOutputReference(this as any, "reservation", true);
  public get reservation() {
    return this.__reservationOutput;
  }
  public putReservation(value: ServiceTaskSpecResourcesReservation | undefined) {
    this._reservation = value;
  }
  public resetReservation() {
    this._reservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationInput() {
    return this._reservation
  }
}
export interface ServiceTaskSpecRestartPolicy {
  /**
  * Condition for restart
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#condition Service#condition}
  */
  readonly condition?: string;
  /**
  * Delay between restart attempts (ms|s|m|h)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#delay Service#delay}
  */
  readonly delay?: string;
  /**
  * Maximum attempts to restart a given container before giving up (default value is `0`, which is ignored)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#max_attempts Service#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * The time window used to evaluate the restart policy (default value is `0`, which is unbounded) (ms|s|m|h)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#window Service#window}
  */
  readonly window?: string;
}

function serviceTaskSpecRestartPolicyToTerraform(struct?: ServiceTaskSpecRestartPolicyOutputReference | ServiceTaskSpecRestartPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    delay: cdktf.stringToTerraform(struct!.delay),
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    window: cdktf.stringToTerraform(struct!.window),
  }
}

export class ServiceTaskSpecRestartPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string | undefined; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string | undefined) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string | undefined; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string | undefined) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay
  }

  // max_attempts - computed: false, optional: true, required: false
  private _maxAttempts?: number | undefined; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number | undefined) {
    this._maxAttempts = value;
  }
  public resetMaxAttempts() {
    this._maxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts
  }

  // window - computed: false, optional: true, required: false
  private _window?: string | undefined; 
  public get window() {
    return this.getStringAttribute('window');
  }
  public set window(value: string | undefined) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window
  }
}
export interface ServiceTaskSpec {
  /**
  * A counter that triggers an update even if no relevant parameters have been changed. See the [spec](https://github.com/docker/swarmkit/blob/master/api/specs.proto#L126).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#force_update Service#force_update}
  */
  readonly forceUpdate?: number;
  /**
  * Ids of the networks in which the  container will be put in
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#networks Service#networks}
  */
  readonly networks?: string[];
  /**
  * Runtime is the type of runtime specified for the task executor. See the [types](https://github.com/moby/moby/blob/master/api/types/swarm/runtime.go).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#runtime Service#runtime}
  */
  readonly runtime?: string;
  /**
  * container_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#container_spec Service#container_spec}
  */
  readonly containerSpec: ServiceTaskSpecContainerSpec;
  /**
  * log_driver block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#log_driver Service#log_driver}
  */
  readonly logDriver?: ServiceTaskSpecLogDriver;
  /**
  * placement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#placement Service#placement}
  */
  readonly placement?: ServiceTaskSpecPlacement;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#resources Service#resources}
  */
  readonly resources?: ServiceTaskSpecResources;
  /**
  * restart_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#restart_policy Service#restart_policy}
  */
  readonly restartPolicy?: ServiceTaskSpecRestartPolicy;
}

function serviceTaskSpecToTerraform(struct?: ServiceTaskSpecOutputReference | ServiceTaskSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_update: cdktf.numberToTerraform(struct!.forceUpdate),
    networks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.networks),
    runtime: cdktf.stringToTerraform(struct!.runtime),
    container_spec: serviceTaskSpecContainerSpecToTerraform(struct!.containerSpec),
    log_driver: serviceTaskSpecLogDriverToTerraform(struct!.logDriver),
    placement: serviceTaskSpecPlacementToTerraform(struct!.placement),
    resources: serviceTaskSpecResourcesToTerraform(struct!.resources),
    restart_policy: serviceTaskSpecRestartPolicyToTerraform(struct!.restartPolicy),
  }
}

export class ServiceTaskSpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // force_update - computed: true, optional: true, required: false
  private _forceUpdate?: number | undefined; 
  public get forceUpdate() {
    return this.getNumberAttribute('force_update');
  }
  public set forceUpdate(value: number | undefined) {
    this._forceUpdate = value;
  }
  public resetForceUpdate() {
    this._forceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateInput() {
    return this._forceUpdate
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: string[] | undefined; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[] | undefined) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks
  }

  // runtime - computed: true, optional: true, required: false
  private _runtime?: string | undefined; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string | undefined) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime
  }

  // container_spec - computed: false, optional: false, required: true
  private _containerSpec?: ServiceTaskSpecContainerSpec; 
  private __containerSpecOutput = new ServiceTaskSpecContainerSpecOutputReference(this as any, "container_spec", true);
  public get containerSpec() {
    return this.__containerSpecOutput;
  }
  public putContainerSpec(value: ServiceTaskSpecContainerSpec) {
    this._containerSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSpecInput() {
    return this._containerSpec
  }

  // log_driver - computed: false, optional: true, required: false
  private _logDriver?: ServiceTaskSpecLogDriver | undefined; 
  private __logDriverOutput = new ServiceTaskSpecLogDriverOutputReference(this as any, "log_driver", true);
  public get logDriver() {
    return this.__logDriverOutput;
  }
  public putLogDriver(value: ServiceTaskSpecLogDriver | undefined) {
    this._logDriver = value;
  }
  public resetLogDriver() {
    this._logDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDriverInput() {
    return this._logDriver
  }

  // placement - computed: false, optional: true, required: false
  private _placement?: ServiceTaskSpecPlacement | undefined; 
  private __placementOutput = new ServiceTaskSpecPlacementOutputReference(this as any, "placement", true);
  public get placement() {
    return this.__placementOutput;
  }
  public putPlacement(value: ServiceTaskSpecPlacement | undefined) {
    this._placement = value;
  }
  public resetPlacement() {
    this._placement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: ServiceTaskSpecResources | undefined; 
  private __resourcesOutput = new ServiceTaskSpecResourcesOutputReference(this as any, "resources", true);
  public get resources() {
    return this.__resourcesOutput;
  }
  public putResources(value: ServiceTaskSpecResources | undefined) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources
  }

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy?: ServiceTaskSpecRestartPolicy | undefined; 
  private __restartPolicyOutput = new ServiceTaskSpecRestartPolicyOutputReference(this as any, "restart_policy", true);
  public get restartPolicy() {
    return this.__restartPolicyOutput;
  }
  public putRestartPolicy(value: ServiceTaskSpecRestartPolicy | undefined) {
    this._restartPolicy = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy
  }
}
export interface ServiceUpdateConfig {
  /**
  * Delay between task updates (ns|us|ms|s|m|h). Defaults to `0s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#delay Service#delay}
  */
  readonly delay?: string;
  /**
  * Action on update failure: pause | continue | rollback. Defaults to `pause`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#failure_action Service#failure_action}
  */
  readonly failureAction?: string;
  /**
  * Failure rate to tolerate during an update. Defaults to `0.0`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#max_failure_ratio Service#max_failure_ratio}
  */
  readonly maxFailureRatio?: string;
  /**
  * Duration after each task update to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#monitor Service#monitor}
  */
  readonly monitor?: string;
  /**
  * Update order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#order Service#order}
  */
  readonly order?: string;
  /**
  * Maximum number of tasks to be updated in one iteration. Defaults to `1`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#parallelism Service#parallelism}
  */
  readonly parallelism?: number;
}

function serviceUpdateConfigToTerraform(struct?: ServiceUpdateConfigOutputReference | ServiceUpdateConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.stringToTerraform(struct!.delay),
    failure_action: cdktf.stringToTerraform(struct!.failureAction),
    max_failure_ratio: cdktf.stringToTerraform(struct!.maxFailureRatio),
    monitor: cdktf.stringToTerraform(struct!.monitor),
    order: cdktf.stringToTerraform(struct!.order),
    parallelism: cdktf.numberToTerraform(struct!.parallelism),
  }
}

export class ServiceUpdateConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: string | undefined; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string | undefined) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay
  }

  // failure_action - computed: false, optional: true, required: false
  private _failureAction?: string | undefined; 
  public get failureAction() {
    return this.getStringAttribute('failure_action');
  }
  public set failureAction(value: string | undefined) {
    this._failureAction = value;
  }
  public resetFailureAction() {
    this._failureAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureActionInput() {
    return this._failureAction
  }

  // max_failure_ratio - computed: false, optional: true, required: false
  private _maxFailureRatio?: string | undefined; 
  public get maxFailureRatio() {
    return this.getStringAttribute('max_failure_ratio');
  }
  public set maxFailureRatio(value: string | undefined) {
    this._maxFailureRatio = value;
  }
  public resetMaxFailureRatio() {
    this._maxFailureRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailureRatioInput() {
    return this._maxFailureRatio
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: string | undefined; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string | undefined) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor
  }

  // order - computed: false, optional: true, required: false
  private _order?: string | undefined; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string | undefined) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism?: number | undefined; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number | undefined) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/docker/r/service.html docker_service}
*/
export class Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "docker_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/docker/r/service.html docker_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig
  */
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
    this._name = config.name;
    this._auth = config.auth;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._name
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: ServiceAuth | undefined; 
  private __authOutput = new ServiceAuthOutputReference(this as any, "auth", true);
  public get auth() {
    return this.__authOutput;
  }
  public putAuth(value: ServiceAuth | undefined) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth
  }

  // converge_config - computed: false, optional: true, required: false
  private _convergeConfig?: ServiceConvergeConfig | undefined; 
  private __convergeConfigOutput = new ServiceConvergeConfigOutputReference(this as any, "converge_config", true);
  public get convergeConfig() {
    return this.__convergeConfigOutput;
  }
  public putConvergeConfig(value: ServiceConvergeConfig | undefined) {
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
  private _endpointSpec?: ServiceEndpointSpec | undefined; 
  private __endpointSpecOutput = new ServiceEndpointSpecOutputReference(this as any, "endpoint_spec", true);
  public get endpointSpec() {
    return this.__endpointSpecOutput;
  }
  public putEndpointSpec(value: ServiceEndpointSpec | undefined) {
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
  private _labels?: ServiceLabels[] | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: ServiceLabels[] | undefined) {
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
  private _mode?: ServiceMode | undefined; 
  private __modeOutput = new ServiceModeOutputReference(this as any, "mode", true);
  public get mode() {
    return this.__modeOutput;
  }
  public putMode(value: ServiceMode | undefined) {
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
  private _rollbackConfig?: ServiceRollbackConfig | undefined; 
  private __rollbackConfigOutput = new ServiceRollbackConfigOutputReference(this as any, "rollback_config", true);
  public get rollbackConfig() {
    return this.__rollbackConfigOutput;
  }
  public putRollbackConfig(value: ServiceRollbackConfig | undefined) {
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
  private _taskSpec?: ServiceTaskSpec; 
  private __taskSpecOutput = new ServiceTaskSpecOutputReference(this as any, "task_spec", true);
  public get taskSpec() {
    return this.__taskSpecOutput;
  }
  public putTaskSpec(value: ServiceTaskSpec) {
    this._taskSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskSpecInput() {
    return this._taskSpec
  }

  // update_config - computed: false, optional: true, required: false
  private _updateConfig?: ServiceUpdateConfig | undefined; 
  private __updateConfigOutput = new ServiceUpdateConfigOutputReference(this as any, "update_config", true);
  public get updateConfig() {
    return this.__updateConfigOutput;
  }
  public putUpdateConfig(value: ServiceUpdateConfig | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      auth: serviceAuthToTerraform(this._auth),
      converge_config: serviceConvergeConfigToTerraform(this._convergeConfig),
      endpoint_spec: serviceEndpointSpecToTerraform(this._endpointSpec),
      labels: cdktf.listMapper(serviceLabelsToTerraform)(this._labels),
      mode: serviceModeToTerraform(this._mode),
      rollback_config: serviceRollbackConfigToTerraform(this._rollbackConfig),
      task_spec: serviceTaskSpecToTerraform(this._taskSpec),
      update_config: serviceUpdateConfigToTerraform(this._updateConfig),
    };
  }
}
