// https://www.terraform.io/docs/providers/docker/d/network.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDockerNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Docker network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/d/network.html#name DataDockerNetwork#name}
  */
  readonly name: string;
}
export class DataDockerNetworkIpamConfig extends cdktf.ComplexComputedList {

  // aux_address - computed: true, optional: false, required: false
  public get auxAddress() {
    return this.interpolationForAttribute('aux_address') as any;
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // ip_range - computed: true, optional: false, required: false
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/docker/d/network.html docker_network}
*/
export class DataDockerNetwork extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/docker/d/network.html docker_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDockerNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataDockerNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_network',
      terraformGeneratorMetadata: {
        providerName: 'docker'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal - computed: true, optional: false, required: false
  public get internal() {
    return this.getBooleanAttribute('internal');
  }

  // ipam_config - computed: true, optional: false, required: false
  public ipamConfig(index: string) {
    return new DataDockerNetworkIpamConfig(this, 'ipam_config', index);
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

  // options - computed: true, optional: false, required: false
  public options(key: string): string {
    return new cdktf.StringMap(this, 'options').lookup(key);
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
