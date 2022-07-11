// https://www.terraform.io/docs/providers/docker/r/plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docker Plugin alias
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#alias Plugin#alias}
  */
  readonly alias?: string;
  /**
  * HTTP client timeout to enable the plugin
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#enable_timeout Plugin#enable_timeout}
  */
  readonly enableTimeout?: number;
  /**
  * If `true` the plugin is enabled. Defaults to `true`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#enabled Plugin#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The environment variables in the form of `KEY=VALUE`, e.g. `DEBUG=0`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#env Plugin#env}
  */
  readonly env?: string[];
  /**
  * If true, then the plugin is destroyed forcibly
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#force_destroy Plugin#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * If true, then the plugin is disabled forcibly
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#force_disable Plugin#force_disable}
  */
  readonly forceDisable?: boolean | cdktf.IResolvable;
  /**
  * If true, grant all permissions necessary to run the plugin
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#grant_all_permissions Plugin#grant_all_permissions}
  */
  readonly grantAllPermissions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#id Plugin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docker Plugin name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#name Plugin#name}
  */
  readonly name: string;
  /**
  * grant_permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#grant_permissions Plugin#grant_permissions}
  */
  readonly grantPermissions?: PluginGrantPermissions[] | cdktf.IResolvable;
}
export interface PluginGrantPermissions {
  /**
  * The name of the permission
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#name Plugin#name}
  */
  readonly name: string;
  /**
  * The value of the permission
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#value Plugin#value}
  */
  readonly value: string[];
}

export function pluginGrantPermissionsToTerraform(struct?: PluginGrantPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform)(struct!.value),
  }
}

export class PluginGrantPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PluginGrantPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PluginGrantPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PluginGrantPermissionsList extends cdktf.ComplexList {
  public internalValue? : PluginGrantPermissions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PluginGrantPermissionsOutputReference {
    return new PluginGrantPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/docker/r/plugin docker_plugin}
*/
export class Plugin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "docker_plugin";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/docker/r/plugin docker_plugin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PluginConfig
  */
  public constructor(scope: Construct, id: string, config: PluginConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_plugin',
      terraformGeneratorMetadata: {
        providerName: 'docker',
        providerVersion: '2.18.0',
        providerVersionConstraint: '~> 2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alias = config.alias;
    this._enableTimeout = config.enableTimeout;
    this._enabled = config.enabled;
    this._env = config.env;
    this._forceDestroy = config.forceDestroy;
    this._forceDisable = config.forceDisable;
    this._grantAllPermissions = config.grantAllPermissions;
    this._id = config.id;
    this._name = config.name;
    this._grantPermissions.internalValue = config.grantPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // enable_timeout - computed: false, optional: true, required: false
  private _enableTimeout?: number; 
  public get enableTimeout() {
    return this.getNumberAttribute('enable_timeout');
  }
  public set enableTimeout(value: number) {
    this._enableTimeout = value;
  }
  public resetEnableTimeout() {
    this._enableTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTimeoutInput() {
    return this._enableTimeout;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // env - computed: true, optional: true, required: false
  private _env?: string[]; 
  public get env() {
    return cdktf.Fn.tolist(this.getListAttribute('env'));
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

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // force_disable - computed: false, optional: true, required: false
  private _forceDisable?: boolean | cdktf.IResolvable; 
  public get forceDisable() {
    return this.getBooleanAttribute('force_disable');
  }
  public set forceDisable(value: boolean | cdktf.IResolvable) {
    this._forceDisable = value;
  }
  public resetForceDisable() {
    this._forceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDisableInput() {
    return this._forceDisable;
  }

  // grant_all_permissions - computed: false, optional: true, required: false
  private _grantAllPermissions?: boolean | cdktf.IResolvable; 
  public get grantAllPermissions() {
    return this.getBooleanAttribute('grant_all_permissions');
  }
  public set grantAllPermissions(value: boolean | cdktf.IResolvable) {
    this._grantAllPermissions = value;
  }
  public resetGrantAllPermissions() {
    this._grantAllPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantAllPermissionsInput() {
    return this._grantAllPermissions;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // plugin_reference - computed: true, optional: false, required: false
  public get pluginReference() {
    return this.getStringAttribute('plugin_reference');
  }

  // grant_permissions - computed: false, optional: true, required: false
  private _grantPermissions = new PluginGrantPermissionsList(this, "grant_permissions", true);
  public get grantPermissions() {
    return this._grantPermissions;
  }
  public putGrantPermissions(value: PluginGrantPermissions[] | cdktf.IResolvable) {
    this._grantPermissions.internalValue = value;
  }
  public resetGrantPermissions() {
    this._grantPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantPermissionsInput() {
    return this._grantPermissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      enable_timeout: cdktf.numberToTerraform(this._enableTimeout),
      enabled: cdktf.booleanToTerraform(this._enabled),
      env: cdktf.listMapper(cdktf.stringToTerraform)(this._env),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      force_disable: cdktf.booleanToTerraform(this._forceDisable),
      grant_all_permissions: cdktf.booleanToTerraform(this._grantAllPermissions),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      grant_permissions: cdktf.listMapper(pluginGrantPermissionsToTerraform)(this._grantPermissions.internalValue),
    };
  }
}
