// https://www.terraform.io/docs/providers/docker/r/data_docker_network.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataDockerNetworkConfig extends TerraformMetaArguments {
  readonly name?: string;
}
export class DataDockerNetworkIpamConfig extends ComplexComputedList {

  // aux_address - computed: true, optional: false, required: true
  public get auxAddress() {
    return 'not implemented' as any;
  }

  // gateway - computed: true, optional: false, required: true
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // ip_range - computed: true, optional: false, required: true
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }

  // subnet - computed: true, optional: false, required: true
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
}

// Resource

export class DataDockerNetwork extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataDockerNetworkConfig = {}) {
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

  // driver - computed: true, optional: false, required: true
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // id - computed: false, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id;
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // internal - computed: true, optional: false, required: true
  public get internal() {
    return this.getBooleanAttribute('internal');
  }

  // ipam_config - computed: true, optional: false, required: true
  public ipamConfig(index: string) {
    return new DataDockerNetworkIpamConfig(this, 'ipam_config', index);
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // options - computed: true, optional: false, required: true
  public options(key: string): string {
    return new StringMap(this, 'options').lookup(key);
  }

  // scope - computed: true, optional: false, required: true
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
    };
  }
}
