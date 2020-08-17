// https://www.terraform.io/docs/providers/docker/r/network.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkConfig extends TerraformMetaArguments {
  readonly attachable?: boolean;
  readonly checkDuplicate?: boolean;
  readonly driver?: string;
  readonly ingress?: boolean;
  readonly internal?: boolean;
  readonly ipamDriver?: string;
  readonly ipv6?: boolean;
  readonly name: string;
  readonly options?: { [key: string]: string };
  /** ipam_config block */
  readonly ipamConfig?: NetworkIpamConfig[];
  /** labels block */
  readonly labels?: NetworkLabels[];
}
export interface NetworkIpamConfig {
  readonly auxAddress?: { [key: string]: string };
  readonly gateway?: string;
  readonly ipRange?: string;
  readonly subnet?: string;
}
export interface NetworkLabels {
  /** Name of the label */
  readonly label: string;
  /** Value of the label */
  readonly value: string;
}

// Resource

export class Network extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkConfig) {
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
    this._attachable = config.attachable;
    this._checkDuplicate = config.checkDuplicate;
    this._driver = config.driver;
    this._ingress = config.ingress;
    this._internal = config.internal;
    this._ipamDriver = config.ipamDriver;
    this._ipv6 = config.ipv6;
    this._name = config.name;
    this._options = config.options;
    this._ipamConfig = config.ipamConfig;
    this._labels = config.labels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachable - computed: false, optional: true, required: false
  private _attachable?: boolean;
  public get attachable() {
    return this._attachable;
  }
  public set attachable(value: boolean | undefined) {
    this._attachable = value;
  }

  // check_duplicate - computed: false, optional: true, required: false
  private _checkDuplicate?: boolean;
  public get checkDuplicate() {
    return this._checkDuplicate;
  }
  public set checkDuplicate(value: boolean | undefined) {
    this._checkDuplicate = value;
  }

  // driver - computed: true, optional: true, required: false
  private _driver?: string;
  public get driver() {
    return this._driver ?? this.getStringAttribute('driver');
  }
  public set driver(value: string | undefined) {
    this._driver = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress?: boolean;
  public get ingress() {
    return this._ingress;
  }
  public set ingress(value: boolean | undefined) {
    this._ingress = value;
  }

  // internal - computed: true, optional: true, required: false
  private _internal?: boolean;
  public get internal() {
    return this._internal ?? this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean | undefined) {
    this._internal = value;
  }

  // ipam_driver - computed: false, optional: true, required: false
  private _ipamDriver?: string;
  public get ipamDriver() {
    return this._ipamDriver;
  }
  public set ipamDriver(value: string | undefined) {
    this._ipamDriver = value;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: boolean;
  public get ipv6() {
    return this._ipv6;
  }
  public set ipv6(value: boolean | undefined) {
    this._ipv6 = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }
  public get options(): { [key: string]: string } | undefined {
    return this._options; // Getting the computed value is not yet implemented
  }
  public set options(value: { [key: string]: string } | undefined) {
    this._options = value;
  }

  // scope - computed: true, optional: false, required: true
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // ipam_config - computed: false, optional: true, required: false
  private _ipamConfig?: NetworkIpamConfig[];
  public get ipamConfig() {
    return this._ipamConfig;
  }
  public set ipamConfig(value: NetworkIpamConfig[] | undefined) {
    this._ipamConfig = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: NetworkLabels[];
  public get labels() {
    return this._labels;
  }
  public set labels(value: NetworkLabels[] | undefined) {
    this._labels = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      attachable: this._attachable,
      check_duplicate: this._checkDuplicate,
      driver: this._driver,
      ingress: this._ingress,
      internal: this._internal,
      ipam_driver: this._ipamDriver,
      ipv6: this._ipv6,
      name: this._name,
      options: this._options,
      ipam_config: this._ipamConfig,
      labels: this._labels,
    };
  }
}
