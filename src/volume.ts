// https://www.terraform.io/docs/providers/docker/r/volume.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VolumeConfig extends cdktf.TerraformMetaArguments {
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

function volumeLabelsToTerraform(struct?: VolumeLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


// Resource

export class Volume extends cdktf.TerraformResource {

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
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver
  }

  // driver_opts - computed: false, optional: true, required: false
  private _driverOpts?: { [key: string]: string };
  public get driverOpts() {
    return this.interpolationForAttribute('driver_opts') as any;
  }
  public set driverOpts(value: { [key: string]: string } ) {
    this._driverOpts = value;
  }
  public resetDriverOpts() {
    this._driverOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverOptsInput() {
    return this._driverOpts
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mountpoint - computed: true, optional: false, required: false
  public get mountpoint() {
    return this.getStringAttribute('mountpoint');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: VolumeLabels[];
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: VolumeLabels[] ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      driver: cdktf.stringToTerraform(this._driver),
      driver_opts: cdktf.hashMapper(cdktf.anyToTerraform)(this._driverOpts),
      name: cdktf.stringToTerraform(this._name),
      labels: cdktf.listMapper(volumeLabelsToTerraform)(this._labels),
    };
  }
}
