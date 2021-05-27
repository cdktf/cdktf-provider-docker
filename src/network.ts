// https://www.terraform.io/docs/providers/docker/r/network.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#attachable Network#attachable}
  */
  readonly attachable?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#check_duplicate Network#check_duplicate}
  */
  readonly checkDuplicate?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#driver Network#driver}
  */
  readonly driver?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#ingress Network#ingress}
  */
  readonly ingress?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#internal Network#internal}
  */
  readonly internal?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#ipam_driver Network#ipam_driver}
  */
  readonly ipamDriver?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#ipv6 Network#ipv6}
  */
  readonly ipv6?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#name Network#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#options Network#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * ipam_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#ipam_config Network#ipam_config}
  */
  readonly ipamConfig?: NetworkIpamConfig[];
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#labels Network#labels}
  */
  readonly labels?: NetworkLabels[];
}
export interface NetworkIpamConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#aux_address Network#aux_address}
  */
  readonly auxAddress?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#gateway Network#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#ip_range Network#ip_range}
  */
  readonly ipRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#subnet Network#subnet}
  */
  readonly subnet?: string;
}

function networkIpamConfigToTerraform(struct?: NetworkIpamConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aux_address: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.auxAddress),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip_range: cdktf.stringToTerraform(struct!.ipRange),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}

export interface NetworkLabels {
  /**
  * Name of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#label Network#label}
  */
  readonly label: string;
  /**
  * Value of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network.html#value Network#value}
  */
  readonly value: string;
}

function networkLabelsToTerraform(struct?: NetworkLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/docker/r/network.html docker_network}
*/
export class Network extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/docker/r/network.html docker_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConfig
  */
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
    return this.getBooleanAttribute('attachable');
  }
  public set attachable(value: boolean ) {
    this._attachable = value;
  }
  public resetAttachable() {
    this._attachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachableInput() {
    return this._attachable
  }

  // check_duplicate - computed: false, optional: true, required: false
  private _checkDuplicate?: boolean;
  public get checkDuplicate() {
    return this.getBooleanAttribute('check_duplicate');
  }
  public set checkDuplicate(value: boolean ) {
    this._checkDuplicate = value;
  }
  public resetCheckDuplicate() {
    this._checkDuplicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkDuplicateInput() {
    return this._checkDuplicate
  }

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress?: boolean;
  public get ingress() {
    return this.getBooleanAttribute('ingress');
  }
  public set ingress(value: boolean ) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress
  }

  // internal - computed: true, optional: true, required: false
  private _internal?: boolean;
  public get internal() {
    return this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal
  }

  // ipam_driver - computed: false, optional: true, required: false
  private _ipamDriver?: string;
  public get ipamDriver() {
    return this.getStringAttribute('ipam_driver');
  }
  public set ipamDriver(value: string ) {
    this._ipamDriver = value;
  }
  public resetIpamDriver() {
    this._ipamDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamDriverInput() {
    return this._ipamDriver
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: boolean;
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean ) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6
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

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }
  public get options(): { [key: string]: string } {
    return this.interpolationForAttribute('options') as any; // Getting the computed value is not yet implemented
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // ipam_config - computed: false, optional: true, required: false
  private _ipamConfig?: NetworkIpamConfig[];
  public get ipamConfig() {
    return this.interpolationForAttribute('ipam_config') as any;
  }
  public set ipamConfig(value: NetworkIpamConfig[] ) {
    this._ipamConfig = value;
  }
  public resetIpamConfig() {
    this._ipamConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamConfigInput() {
    return this._ipamConfig
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: NetworkLabels[];
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: NetworkLabels[] ) {
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
      attachable: cdktf.booleanToTerraform(this._attachable),
      check_duplicate: cdktf.booleanToTerraform(this._checkDuplicate),
      driver: cdktf.stringToTerraform(this._driver),
      ingress: cdktf.booleanToTerraform(this._ingress),
      internal: cdktf.booleanToTerraform(this._internal),
      ipam_driver: cdktf.stringToTerraform(this._ipamDriver),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.hashMapper(cdktf.anyToTerraform)(this._options),
      ipam_config: cdktf.listMapper(networkIpamConfigToTerraform)(this._ipamConfig),
      labels: cdktf.listMapper(networkLabelsToTerraform)(this._labels),
    };
  }
}
