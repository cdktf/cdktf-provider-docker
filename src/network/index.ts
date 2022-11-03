// https://www.terraform.io/docs/providers/docker/r/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable manual container attachment to the network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#attachable Network#attachable}
  */
  readonly attachable?: boolean | cdktf.IResolvable;
  /**
  * Requests daemon to check for networks with same name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#check_duplicate Network#check_duplicate}
  */
  readonly checkDuplicate?: boolean | cdktf.IResolvable;
  /**
  * The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#driver Network#driver}
  */
  readonly driver?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#id Network#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Create swarm routing-mesh network. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#ingress Network#ingress}
  */
  readonly ingress?: boolean | cdktf.IResolvable;
  /**
  * Whether the network is internal.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#internal Network#internal}
  */
  readonly internal?: boolean | cdktf.IResolvable;
  /**
  * Driver used by the custom IP scheme of the network. Defaults to `default`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#ipam_driver Network#ipam_driver}
  */
  readonly ipamDriver?: string;
  /**
  * Enable IPv6 networking. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#ipv6 Network#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * The name of the Docker network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#name Network#name}
  */
  readonly name: string;
  /**
  * Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#options Network#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * ipam_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#ipam_config Network#ipam_config}
  */
  readonly ipamConfig?: NetworkIpamConfig[] | cdktf.IResolvable;
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#labels Network#labels}
  */
  readonly labels?: NetworkLabels[] | cdktf.IResolvable;
}
export interface NetworkIpamConfig {
  /**
  * Auxiliary IPv4 or IPv6 addresses used by Network driver
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#aux_address Network#aux_address}
  */
  readonly auxAddress?: { [key: string]: string };
  /**
  * The IP address of the gateway
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#gateway Network#gateway}
  */
  readonly gateway?: string;
  /**
  * The ip range in CIDR form
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#ip_range Network#ip_range}
  */
  readonly ipRange?: string;
  /**
  * The subnet in CIDR form
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#subnet Network#subnet}
  */
  readonly subnet?: string;
}

export function networkIpamConfigToTerraform(struct?: NetworkIpamConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aux_address: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.auxAddress),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip_range: cdktf.stringToTerraform(struct!.ipRange),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}

export class NetworkIpamConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkIpamConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auxAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.auxAddress = this._auxAddress;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._ipRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkIpamConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auxAddress = undefined;
      this._gateway = undefined;
      this._ipRange = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auxAddress = value.auxAddress;
      this._gateway = value.gateway;
      this._ipRange = value.ipRange;
      this._subnet = value.subnet;
    }
  }

  // aux_address - computed: false, optional: true, required: false
  private _auxAddress?: { [key: string]: string }; 
  public get auxAddress() {
    return this.getStringMapAttribute('aux_address');
  }
  public set auxAddress(value: { [key: string]: string }) {
    this._auxAddress = value;
  }
  public resetAuxAddress() {
    this._auxAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxAddressInput() {
    return this._auxAddress;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  public resetIpRange() {
    this._ipRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}

export class NetworkIpamConfigList extends cdktf.ComplexList {
  public internalValue? : NetworkIpamConfig[] | cdktf.IResolvable

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
  public get(index: number): NetworkIpamConfigOutputReference {
    return new NetworkIpamConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkLabels {
  /**
  * Name of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#label Network#label}
  */
  readonly label: string;
  /**
  * Value of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#value Network#value}
  */
  readonly value: string;
}

export function networkLabelsToTerraform(struct?: NetworkLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class NetworkLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NetworkLabelsList extends cdktf.ComplexList {
  public internalValue? : NetworkLabels[] | cdktf.IResolvable

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
  public get(index: number): NetworkLabelsOutputReference {
    return new NetworkLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/docker/r/network docker_network}
*/
export class Network extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "docker_network";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/docker/r/network docker_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_network',
      terraformGeneratorMetadata: {
        providerName: 'docker',
        providerVersion: '2.23.0',
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
    this._attachable = config.attachable;
    this._checkDuplicate = config.checkDuplicate;
    this._driver = config.driver;
    this._id = config.id;
    this._ingress = config.ingress;
    this._internal = config.internal;
    this._ipamDriver = config.ipamDriver;
    this._ipv6 = config.ipv6;
    this._name = config.name;
    this._options = config.options;
    this._ipamConfig.internalValue = config.ipamConfig;
    this._labels.internalValue = config.labels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachable - computed: false, optional: true, required: false
  private _attachable?: boolean | cdktf.IResolvable; 
  public get attachable() {
    return this.getBooleanAttribute('attachable');
  }
  public set attachable(value: boolean | cdktf.IResolvable) {
    this._attachable = value;
  }
  public resetAttachable() {
    this._attachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachableInput() {
    return this._attachable;
  }

  // check_duplicate - computed: false, optional: true, required: false
  private _checkDuplicate?: boolean | cdktf.IResolvable; 
  public get checkDuplicate() {
    return this.getBooleanAttribute('check_duplicate');
  }
  public set checkDuplicate(value: boolean | cdktf.IResolvable) {
    this._checkDuplicate = value;
  }
  public resetCheckDuplicate() {
    this._checkDuplicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkDuplicateInput() {
    return this._checkDuplicate;
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
    return this._driver;
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

  // ingress - computed: false, optional: true, required: false
  private _ingress?: boolean | cdktf.IResolvable; 
  public get ingress() {
    return this.getBooleanAttribute('ingress');
  }
  public set ingress(value: boolean | cdktf.IResolvable) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress;
  }

  // internal - computed: true, optional: true, required: false
  private _internal?: boolean | cdktf.IResolvable; 
  public get internal() {
    return this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean | cdktf.IResolvable) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
  }

  // ipam_driver - computed: false, optional: true, required: false
  private _ipamDriver?: string; 
  public get ipamDriver() {
    return this.getStringAttribute('ipam_driver');
  }
  public set ipamDriver(value: string) {
    this._ipamDriver = value;
  }
  public resetIpamDriver() {
    this._ipamDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamDriverInput() {
    return this._ipamDriver;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
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

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // ipam_config - computed: false, optional: true, required: false
  private _ipamConfig = new NetworkIpamConfigList(this, "ipam_config", true);
  public get ipamConfig() {
    return this._ipamConfig;
  }
  public putIpamConfig(value: NetworkIpamConfig[] | cdktf.IResolvable) {
    this._ipamConfig.internalValue = value;
  }
  public resetIpamConfig() {
    this._ipamConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamConfigInput() {
    return this._ipamConfig.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new NetworkLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: NetworkLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attachable: cdktf.booleanToTerraform(this._attachable),
      check_duplicate: cdktf.booleanToTerraform(this._checkDuplicate),
      driver: cdktf.stringToTerraform(this._driver),
      id: cdktf.stringToTerraform(this._id),
      ingress: cdktf.booleanToTerraform(this._ingress),
      internal: cdktf.booleanToTerraform(this._internal),
      ipam_driver: cdktf.stringToTerraform(this._ipamDriver),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.hashMapper(cdktf.stringToTerraform)(this._options),
      ipam_config: cdktf.listMapper(networkIpamConfigToTerraform, true)(this._ipamConfig.internalValue),
      labels: cdktf.listMapper(networkLabelsToTerraform, true)(this._labels.internalValue),
    };
  }
}
