// https://www.terraform.io/docs/providers/docker/d/plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDockerPluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * The alias of the Docker plugin. If the tag is omitted, `:latest` is complemented to the attribute value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/d/plugin#alias DataDockerPlugin#alias}
  */
  readonly alias?: string;
  /**
  * The ID of the plugin, which has precedence over the `alias` of both are given
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/d/plugin#id DataDockerPlugin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/docker/d/plugin docker_plugin}
*/
export class DataDockerPlugin extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "docker_plugin";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/docker/d/plugin docker_plugin} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDockerPluginConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDockerPluginConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'docker_plugin',
      terraformGeneratorMetadata: {
        providerName: 'docker',
        providerVersion: '2.23.1',
        providerVersionConstraint: '~> 2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // env - computed: true, optional: false, required: false
  public get env() {
    return cdktf.Fn.tolist(this.getListAttribute('env'));
  }

  // grant_all_permissions - computed: true, optional: false, required: false
  public get grantAllPermissions() {
    return this.getBooleanAttribute('grant_all_permissions');
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // plugin_reference - computed: true, optional: false, required: false
  public get pluginReference() {
    return this.getStringAttribute('plugin_reference');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
