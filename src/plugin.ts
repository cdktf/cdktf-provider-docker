// https://www.terraform.io/docs/providers/docker/r/plugin.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docker Plugin alias
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin.html#alias Plugin#alias}
  */
  readonly alias?: string;
  /**
  * HTTP client timeout to enable the plugin
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin.html#enable_timeout Plugin#enable_timeout}
  */
  readonly enableTimeout?: number;
  /**
  * If `true` the plugin is enabled. Defaults to `true`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin.html#enabled Plugin#enabled}
  */
  readonly enabled?: boolean;
  /**
  * The environment variables in the form of `KEY=VALUE`, e.g. `DEBUG=0`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin.html#env Plugin#env}
  */
  readonly env?: string[];
  /**
  * If true, then the plugin is destroyed forcibly
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin.html#force_destroy Plugin#force_destroy}
  */
  readonly forceDestroy?: boolean;
  /**
  * If true, then the plugin is disabled forcibly
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin.html#force_disable Plugin#force_disable}
  */
  readonly forceDisable?: boolean;
  /**
  * If true, grant all permissions necessary to run the plugin
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin.html#grant_all_permissions Plugin#grant_all_permissions}
  */
  readonly grantAllPermissions?: boolean;
  /**
  * Docker Plugin name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin.html#name Plugin#name}
  */
  readonly name: string;
  /**
  * grant_permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin.html#grant_permissions Plugin#grant_permissions}
  */
  readonly grantPermissions?: PluginGrantPermissions[];
}
export interface PluginGrantPermissions {
  /**
  * The name of the permission
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin.html#name Plugin#name}
  */
  readonly name: string;
  /**
  * The value of the permission
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin.html#value Plugin#value}
  */
  readonly value: string[];
}

function pluginGrantPermissionsToTerraform(struct?: PluginGrantPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/docker/r/plugin.html docker_plugin}
*/
export class Plugin extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/docker/r/plugin.html docker_plugin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PluginConfig
  */
  public constructor(scope: Construct, id: string, config: PluginConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_plugin',
      terraformGeneratorMetadata: {
        providerName: 'docker'
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
    this._name = config.name;
    this._grantPermissions = config.grantPermissions;
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
    return this._alias
  }

  // enable_timeout - computed: false, optional: true, required: false
  private _enableTimeout?: number;
  public get enableTimeout() {
    return this.getNumberAttribute('enable_timeout');
  }
  public set enableTimeout(value: number ) {
    this._enableTimeout = value;
  }
  public resetEnableTimeout() {
    this._enableTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTimeoutInput() {
    return this._enableTimeout
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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
    return this._env
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean ) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy
  }

  // force_disable - computed: false, optional: true, required: false
  private _forceDisable?: boolean;
  public get forceDisable() {
    return this.getBooleanAttribute('force_disable');
  }
  public set forceDisable(value: boolean ) {
    this._forceDisable = value;
  }
  public resetForceDisable() {
    this._forceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDisableInput() {
    return this._forceDisable
  }

  // grant_all_permissions - computed: false, optional: true, required: false
  private _grantAllPermissions?: boolean;
  public get grantAllPermissions() {
    return this.getBooleanAttribute('grant_all_permissions');
  }
  public set grantAllPermissions(value: boolean ) {
    this._grantAllPermissions = value;
  }
  public resetGrantAllPermissions() {
    this._grantAllPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantAllPermissionsInput() {
    return this._grantAllPermissions
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

  // plugin_reference - computed: true, optional: false, required: false
  public get pluginReference() {
    return this.getStringAttribute('plugin_reference');
  }

  // grant_permissions - computed: false, optional: true, required: false
  private _grantPermissions?: PluginGrantPermissions[];
  public get grantPermissions() {
    return this.interpolationForAttribute('grant_permissions') as any;
  }
  public set grantPermissions(value: PluginGrantPermissions[] ) {
    this._grantPermissions = value;
  }
  public resetGrantPermissions() {
    this._grantPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantPermissionsInput() {
    return this._grantPermissions
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
      name: cdktf.stringToTerraform(this._name),
      grant_permissions: cdktf.listMapper(pluginGrantPermissionsToTerraform)(this._grantPermissions),
    };
  }
}
