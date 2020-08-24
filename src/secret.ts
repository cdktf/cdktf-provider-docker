// https://www.terraform.io/docs/providers/docker/r/secret.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SecretConfig extends TerraformMetaArguments {
  /** Base64-url-safe-encoded secret data */
  readonly data: string;
  /** User-defined name of the secret */
  readonly name: string;
  /** labels block */
  readonly labels?: SecretLabels[];
}
export interface SecretLabels {
  /** Name of the label */
  readonly label: string;
  /** Value of the label */
  readonly value: string;
}

// Resource

export class Secret extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecretConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_secret',
      terraformGeneratorMetadata: {
        providerName: 'docker'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._data = config.data;
    this._name = config.name;
    this._labels = config.labels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: false, optional: false, required: true
  private _data: string;
  public get data() {
    return this._data;
  }
  public set data(value: string) {
    this._data = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: SecretLabels[];
  public get labels() {
    return this._labels;
  }
  public set labels(value: SecretLabels[] | undefined) {
    this._labels = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data: this._data,
      name: this._name,
      labels: this._labels,
    };
  }
}
