// https://www.terraform.io/docs/providers/docker/r/volume.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VolumeConfig extends TerraformMetaArguments {
  readonly driver?: string;
  readonly driverOpts?: { [key: string]: string };
  readonly name?: string;
  /** labels block */
  readonly labels?: VolumeLabels[];
}
export interface VolumeLabels {
  /** Name of the label */
  readonly label: string;
  /** Value of the label */
  readonly value: string;
}

// Resource

export class Volume extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VolumeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'docker_volume',
      terraformGeneratorMetadata: {
        providerName: 'docker'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._driver = config.driver;
    this._driverOpts = config.driverOpts;
    this._name = config.name;
    this._labels = config.labels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // driver - computed: true, optional: true, required: false
  private _driver?: string;
  public get driver() {
    return this._driver ?? this.getStringAttribute('driver');
  }
  public set driver(value: string | undefined) {
    this._driver = value;
  }

  // driver_opts - computed: false, optional: true, required: false
  private _driverOpts?: { [key: string]: string };
  public get driverOpts() {
    return this._driverOpts;
  }
  public set driverOpts(value: { [key: string]: string } | undefined) {
    this._driverOpts = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // mountpoint - computed: true, optional: false, required: true
  public get mountpoint() {
    return this.getStringAttribute('mountpoint');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: VolumeLabels[];
  public get labels() {
    return this._labels;
  }
  public set labels(value: VolumeLabels[] | undefined) {
    this._labels = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      driver: this._driver,
      driver_opts: this._driverOpts,
      name: this._name,
      labels: this._labels,
    };
  }
}
