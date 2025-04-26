# `network` Submodule <a name="`network` Submodule" id="@cdktf/provider-docker.network"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Network <a name="Network" id="@cdktf/provider-docker.network.Network"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network docker_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.network.Network.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import network

network.Network(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  attachable: typing.Union[bool, IResolvable] = None,
  check_duplicate: typing.Union[bool, IResolvable] = None,
  driver: str = None,
  id: str = None,
  ingress: typing.Union[bool, IResolvable] = None,
  internal: typing.Union[bool, IResolvable] = None,
  ipam_config: typing.Union[IResolvable, typing.List[NetworkIpamConfig]] = None,
  ipam_driver: str = None,
  ipam_options: typing.Mapping[str] = None,
  ipv6: typing.Union[bool, IResolvable] = None,
  labels: typing.Union[IResolvable, typing.List[NetworkLabels]] = None,
  options: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Docker network. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.attachable">attachable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable manual container attachment to the network. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.checkDuplicate">check_duplicate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Requests daemon to check for networks with same name. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.driver">driver</a></code> | <code>str</code> | The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#id Network#id}. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.ingress">ingress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create swarm routing-mesh network. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.internal">internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the network is internal. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.ipamConfig">ipam_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>]]</code> | ipam_config block. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.ipamDriver">ipam_driver</a></code> | <code>str</code> | Driver used by the custom IP scheme of the network. Defaults to `default`. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.ipamOptions">ipam_options</a></code> | <code>typing.Mapping[str]</code> | Provide explicit options to the IPAM driver. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.ipv6">ipv6</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable IPv6 networking. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.options">options</a></code> | <code>typing.Mapping[str]</code> | Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.network.Network.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.network.Network.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.network.Network.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.network.Network.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.network.Network.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.network.Network.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.network.Network.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.network.Network.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.network.Network.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.network.Network.Initializer.parameter.name"></a>

- *Type:* str

The name of the Docker network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#name Network#name}

---

##### `attachable`<sup>Optional</sup> <a name="attachable" id="@cdktf/provider-docker.network.Network.Initializer.parameter.attachable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable manual container attachment to the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#attachable Network#attachable}

---

##### `check_duplicate`<sup>Optional</sup> <a name="check_duplicate" id="@cdktf/provider-docker.network.Network.Initializer.parameter.checkDuplicate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Requests daemon to check for networks with same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#check_duplicate Network#check_duplicate}

---

##### `driver`<sup>Optional</sup> <a name="driver" id="@cdktf/provider-docker.network.Network.Initializer.parameter.driver"></a>

- *Type:* str

The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#driver Network#driver}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.network.Network.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#id Network#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-docker.network.Network.Initializer.parameter.ingress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create swarm routing-mesh network. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#ingress Network#ingress}

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-docker.network.Network.Initializer.parameter.internal"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the network is internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#internal Network#internal}

---

##### `ipam_config`<sup>Optional</sup> <a name="ipam_config" id="@cdktf/provider-docker.network.Network.Initializer.parameter.ipamConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>]]

ipam_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#ipam_config Network#ipam_config}

---

##### `ipam_driver`<sup>Optional</sup> <a name="ipam_driver" id="@cdktf/provider-docker.network.Network.Initializer.parameter.ipamDriver"></a>

- *Type:* str

Driver used by the custom IP scheme of the network. Defaults to `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#ipam_driver Network#ipam_driver}

---

##### `ipam_options`<sup>Optional</sup> <a name="ipam_options" id="@cdktf/provider-docker.network.Network.Initializer.parameter.ipamOptions"></a>

- *Type:* typing.Mapping[str]

Provide explicit options to the IPAM driver.

Valid options vary with `ipam_driver` and refer to that driver's documentation for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#ipam_options Network#ipam_options}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-docker.network.Network.Initializer.parameter.ipv6"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable IPv6 networking. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#ipv6 Network#ipv6}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.network.Network.Initializer.parameter.labels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#labels Network#labels}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-docker.network.Network.Initializer.parameter.options"></a>

- *Type:* typing.Mapping[str]

Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#options Network#options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.Network.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.network.Network.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.network.Network.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.network.Network.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.network.Network.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-docker.network.Network.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-docker.network.Network.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-docker.network.Network.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-docker.network.Network.putIpamConfig">put_ipam_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetAttachable">reset_attachable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetCheckDuplicate">reset_check_duplicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetDriver">reset_driver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetIngress">reset_ingress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetInternal">reset_internal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetIpamConfig">reset_ipam_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetIpamDriver">reset_ipam_driver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetIpamOptions">reset_ipam_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetIpv6">reset_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetOptions">reset_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.network.Network.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-docker.network.Network.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.network.Network.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.network.Network.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-docker.network.Network.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-docker.network.Network.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-docker.network.Network.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-docker.network.Network.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-docker.network.Network.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-docker.network.Network.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-docker.network.Network.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-docker.network.Network.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.network.Network.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.Network.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.network.Network.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.Network.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.network.Network.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.Network.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.network.Network.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.Network.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.network.Network.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.Network.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.network.Network.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.Network.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.network.Network.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.Network.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.network.Network.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.Network.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.network.Network.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.Network.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-docker.network.Network.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-docker.network.Network.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.network.Network.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.network.Network.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.network.Network.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.Network.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-docker.network.Network.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.network.Network.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-docker.network.Network.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-docker.network.Network.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-docker.network.Network.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-docker.network.Network.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.network.Network.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ipam_config` <a name="put_ipam_config" id="@cdktf/provider-docker.network.Network.putIpamConfig"></a>

```python
def put_ipam_config(
  value: typing.Union[IResolvable, typing.List[NetworkIpamConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.network.Network.putIpamConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>]]

---

##### `put_labels` <a name="put_labels" id="@cdktf/provider-docker.network.Network.putLabels"></a>

```python
def put_labels(
  value: typing.Union[IResolvable, typing.List[NetworkLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.network.Network.putLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>]]

---

##### `reset_attachable` <a name="reset_attachable" id="@cdktf/provider-docker.network.Network.resetAttachable"></a>

```python
def reset_attachable() -> None
```

##### `reset_check_duplicate` <a name="reset_check_duplicate" id="@cdktf/provider-docker.network.Network.resetCheckDuplicate"></a>

```python
def reset_check_duplicate() -> None
```

##### `reset_driver` <a name="reset_driver" id="@cdktf/provider-docker.network.Network.resetDriver"></a>

```python
def reset_driver() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-docker.network.Network.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingress` <a name="reset_ingress" id="@cdktf/provider-docker.network.Network.resetIngress"></a>

```python
def reset_ingress() -> None
```

##### `reset_internal` <a name="reset_internal" id="@cdktf/provider-docker.network.Network.resetInternal"></a>

```python
def reset_internal() -> None
```

##### `reset_ipam_config` <a name="reset_ipam_config" id="@cdktf/provider-docker.network.Network.resetIpamConfig"></a>

```python
def reset_ipam_config() -> None
```

##### `reset_ipam_driver` <a name="reset_ipam_driver" id="@cdktf/provider-docker.network.Network.resetIpamDriver"></a>

```python
def reset_ipam_driver() -> None
```

##### `reset_ipam_options` <a name="reset_ipam_options" id="@cdktf/provider-docker.network.Network.resetIpamOptions"></a>

```python
def reset_ipam_options() -> None
```

##### `reset_ipv6` <a name="reset_ipv6" id="@cdktf/provider-docker.network.Network.resetIpv6"></a>

```python
def reset_ipv6() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-docker.network.Network.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-docker.network.Network.resetOptions"></a>

```python
def reset_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.Network.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.network.Network.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Network resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-docker.network.Network.isConstruct"></a>

```python
from cdktf_cdktf_provider_docker import network

network.Network.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.network.Network.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-docker.network.Network.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_docker import network

network.Network.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.network.Network.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-docker.network.Network.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_docker import network

network.Network.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.network.Network.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-docker.network.Network.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_docker import network

network.Network.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Network resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.network.Network.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-docker.network.Network.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Network to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-docker.network.Network.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Network that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.network.Network.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Network to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.Network.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.network.Network.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamConfig">ipam_config</a></code> | <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList">NetworkIpamConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList">NetworkLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.attachableInput">attachable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.checkDuplicateInput">check_duplicate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.driverInput">driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ingressInput">ingress_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.internalInput">internal_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamConfigInput">ipam_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamDriverInput">ipam_driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamOptionsInput">ipam_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipv6Input">ipv6_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.labelsInput">labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.attachable">attachable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.checkDuplicate">check_duplicate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.driver">driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ingress">ingress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.internal">internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamDriver">ipam_driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamOptions">ipam_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipv6">ipv6</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.network.Network.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-docker.network.Network.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.network.Network.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-docker.network.Network.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-docker.network.Network.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-docker.network.Network.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-docker.network.Network.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.network.Network.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.network.Network.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.network.Network.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.network.Network.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.network.Network.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.network.Network.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.network.Network.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipam_config`<sup>Required</sup> <a name="ipam_config" id="@cdktf/provider-docker.network.Network.property.ipamConfig"></a>

```python
ipam_config: NetworkIpamConfigList
```

- *Type:* <a href="#@cdktf/provider-docker.network.NetworkIpamConfigList">NetworkIpamConfigList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.network.Network.property.labels"></a>

```python
labels: NetworkLabelsList
```

- *Type:* <a href="#@cdktf/provider-docker.network.NetworkLabelsList">NetworkLabelsList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.network.Network.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `attachable_input`<sup>Optional</sup> <a name="attachable_input" id="@cdktf/provider-docker.network.Network.property.attachableInput"></a>

```python
attachable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `check_duplicate_input`<sup>Optional</sup> <a name="check_duplicate_input" id="@cdktf/provider-docker.network.Network.property.checkDuplicateInput"></a>

```python
check_duplicate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `driver_input`<sup>Optional</sup> <a name="driver_input" id="@cdktf/provider-docker.network.Network.property.driverInput"></a>

```python
driver_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-docker.network.Network.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_input`<sup>Optional</sup> <a name="ingress_input" id="@cdktf/provider-docker.network.Network.property.ingressInput"></a>

```python
ingress_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_input`<sup>Optional</sup> <a name="internal_input" id="@cdktf/provider-docker.network.Network.property.internalInput"></a>

```python
internal_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipam_config_input`<sup>Optional</sup> <a name="ipam_config_input" id="@cdktf/provider-docker.network.Network.property.ipamConfigInput"></a>

```python
ipam_config_input: typing.Union[IResolvable, typing.List[NetworkIpamConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>]]

---

##### `ipam_driver_input`<sup>Optional</sup> <a name="ipam_driver_input" id="@cdktf/provider-docker.network.Network.property.ipamDriverInput"></a>

```python
ipam_driver_input: str
```

- *Type:* str

---

##### `ipam_options_input`<sup>Optional</sup> <a name="ipam_options_input" id="@cdktf/provider-docker.network.Network.property.ipamOptionsInput"></a>

```python
ipam_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ipv6_input`<sup>Optional</sup> <a name="ipv6_input" id="@cdktf/provider-docker.network.Network.property.ipv6Input"></a>

```python
ipv6_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-docker.network.Network.property.labelsInput"></a>

```python
labels_input: typing.Union[IResolvable, typing.List[NetworkLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-docker.network.Network.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-docker.network.Network.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `attachable`<sup>Required</sup> <a name="attachable" id="@cdktf/provider-docker.network.Network.property.attachable"></a>

```python
attachable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `check_duplicate`<sup>Required</sup> <a name="check_duplicate" id="@cdktf/provider-docker.network.Network.property.checkDuplicate"></a>

```python
check_duplicate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-docker.network.Network.property.driver"></a>

```python
driver: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.network.Network.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-docker.network.Network.property.ingress"></a>

```python
ingress: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-docker.network.Network.property.internal"></a>

```python
internal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipam_driver`<sup>Required</sup> <a name="ipam_driver" id="@cdktf/provider-docker.network.Network.property.ipamDriver"></a>

```python
ipam_driver: str
```

- *Type:* str

---

##### `ipam_options`<sup>Required</sup> <a name="ipam_options" id="@cdktf/provider-docker.network.Network.property.ipamOptions"></a>

```python
ipam_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-docker.network.Network.property.ipv6"></a>

```python
ipv6: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.network.Network.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-docker.network.Network.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.Network.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.network.Network.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConfig <a name="NetworkConfig" id="@cdktf/provider-docker.network.NetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.network.NetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import network

network.NetworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  attachable: typing.Union[bool, IResolvable] = None,
  check_duplicate: typing.Union[bool, IResolvable] = None,
  driver: str = None,
  id: str = None,
  ingress: typing.Union[bool, IResolvable] = None,
  internal: typing.Union[bool, IResolvable] = None,
  ipam_config: typing.Union[IResolvable, typing.List[NetworkIpamConfig]] = None,
  ipam_driver: str = None,
  ipam_options: typing.Mapping[str] = None,
  ipv6: typing.Union[bool, IResolvable] = None,
  labels: typing.Union[IResolvable, typing.List[NetworkLabels]] = None,
  options: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.name">name</a></code> | <code>str</code> | The name of the Docker network. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.attachable">attachable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable manual container attachment to the network. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.checkDuplicate">check_duplicate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Requests daemon to check for networks with same name. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.driver">driver</a></code> | <code>str</code> | The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#id Network#id}. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.ingress">ingress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create swarm routing-mesh network. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.internal">internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the network is internal. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.ipamConfig">ipam_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>]]</code> | ipam_config block. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.ipamDriver">ipam_driver</a></code> | <code>str</code> | Driver used by the custom IP scheme of the network. Defaults to `default`. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.ipamOptions">ipam_options</a></code> | <code>typing.Mapping[str]</code> | Provide explicit options to the IPAM driver. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.ipv6">ipv6</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable IPv6 networking. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.network.NetworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.network.NetworkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.network.NetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.network.NetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.network.NetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.network.NetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.network.NetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.network.NetworkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Docker network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#name Network#name}

---

##### `attachable`<sup>Optional</sup> <a name="attachable" id="@cdktf/provider-docker.network.NetworkConfig.property.attachable"></a>

```python
attachable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable manual container attachment to the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#attachable Network#attachable}

---

##### `check_duplicate`<sup>Optional</sup> <a name="check_duplicate" id="@cdktf/provider-docker.network.NetworkConfig.property.checkDuplicate"></a>

```python
check_duplicate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Requests daemon to check for networks with same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#check_duplicate Network#check_duplicate}

---

##### `driver`<sup>Optional</sup> <a name="driver" id="@cdktf/provider-docker.network.NetworkConfig.property.driver"></a>

```python
driver: str
```

- *Type:* str

The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#driver Network#driver}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.network.NetworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#id Network#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-docker.network.NetworkConfig.property.ingress"></a>

```python
ingress: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create swarm routing-mesh network. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#ingress Network#ingress}

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-docker.network.NetworkConfig.property.internal"></a>

```python
internal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the network is internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#internal Network#internal}

---

##### `ipam_config`<sup>Optional</sup> <a name="ipam_config" id="@cdktf/provider-docker.network.NetworkConfig.property.ipamConfig"></a>

```python
ipam_config: typing.Union[IResolvable, typing.List[NetworkIpamConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>]]

ipam_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#ipam_config Network#ipam_config}

---

##### `ipam_driver`<sup>Optional</sup> <a name="ipam_driver" id="@cdktf/provider-docker.network.NetworkConfig.property.ipamDriver"></a>

```python
ipam_driver: str
```

- *Type:* str

Driver used by the custom IP scheme of the network. Defaults to `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#ipam_driver Network#ipam_driver}

---

##### `ipam_options`<sup>Optional</sup> <a name="ipam_options" id="@cdktf/provider-docker.network.NetworkConfig.property.ipamOptions"></a>

```python
ipam_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Provide explicit options to the IPAM driver.

Valid options vary with `ipam_driver` and refer to that driver's documentation for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#ipam_options Network#ipam_options}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-docker.network.NetworkConfig.property.ipv6"></a>

```python
ipv6: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable IPv6 networking. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#ipv6 Network#ipv6}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.network.NetworkConfig.property.labels"></a>

```python
labels: typing.Union[IResolvable, typing.List[NetworkLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#labels Network#labels}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-docker.network.NetworkConfig.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#options Network#options}

---

### NetworkIpamConfig <a name="NetworkIpamConfig" id="@cdktf/provider-docker.network.NetworkIpamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.network.NetworkIpamConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import network

network.NetworkIpamConfig(
  aux_address: typing.Mapping[str] = None,
  gateway: str = None,
  ip_range: str = None,
  subnet: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfig.property.auxAddress">aux_address</a></code> | <code>typing.Mapping[str]</code> | Auxiliary IPv4 or IPv6 addresses used by Network driver. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfig.property.gateway">gateway</a></code> | <code>str</code> | The IP address of the gateway. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfig.property.ipRange">ip_range</a></code> | <code>str</code> | The ip range in CIDR form. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfig.property.subnet">subnet</a></code> | <code>str</code> | The subnet in CIDR form. |

---

##### `aux_address`<sup>Optional</sup> <a name="aux_address" id="@cdktf/provider-docker.network.NetworkIpamConfig.property.auxAddress"></a>

```python
aux_address: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Auxiliary IPv4 or IPv6 addresses used by Network driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#aux_address Network#aux_address}

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="@cdktf/provider-docker.network.NetworkIpamConfig.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

The IP address of the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#gateway Network#gateway}

---

##### `ip_range`<sup>Optional</sup> <a name="ip_range" id="@cdktf/provider-docker.network.NetworkIpamConfig.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

The ip range in CIDR form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#ip_range Network#ip_range}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-docker.network.NetworkIpamConfig.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

The subnet in CIDR form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#subnet Network#subnet}

---

### NetworkLabels <a name="NetworkLabels" id="@cdktf/provider-docker.network.NetworkLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.network.NetworkLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import network

network.NetworkLabels(
  label: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabels.property.label">label</a></code> | <code>str</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabels.property.value">value</a></code> | <code>str</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.network.NetworkLabels.property.label"></a>

```python
label: str
```

- *Type:* str

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#label Network#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.network.NetworkLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/network#value Network#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkIpamConfigList <a name="NetworkIpamConfigList" id="@cdktf/provider-docker.network.NetworkIpamConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import network

network.NetworkIpamConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.network.NetworkIpamConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.network.NetworkIpamConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.network.NetworkIpamConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.network.NetworkIpamConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.network.NetworkIpamConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.network.NetworkIpamConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.network.NetworkIpamConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkIpamConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.network.NetworkIpamConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.network.NetworkIpamConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.network.NetworkIpamConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.network.NetworkIpamConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkIpamConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>]]

---


### NetworkIpamConfigOutputReference <a name="NetworkIpamConfigOutputReference" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import network

network.NetworkIpamConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetAuxAddress">reset_aux_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetGateway">reset_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetIpRange">reset_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetSubnet">reset_subnet</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aux_address` <a name="reset_aux_address" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetAuxAddress"></a>

```python
def reset_aux_address() -> None
```

##### `reset_gateway` <a name="reset_gateway" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetGateway"></a>

```python
def reset_gateway() -> None
```

##### `reset_ip_range` <a name="reset_ip_range" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetIpRange"></a>

```python
def reset_ip_range() -> None
```

##### `reset_subnet` <a name="reset_subnet" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetSubnet"></a>

```python
def reset_subnet() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.auxAddressInput">aux_address_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.gatewayInput">gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.ipRangeInput">ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.subnetInput">subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.auxAddress">aux_address</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.gateway">gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.ipRange">ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.subnet">subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aux_address_input`<sup>Optional</sup> <a name="aux_address_input" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.auxAddressInput"></a>

```python
aux_address_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `gateway_input`<sup>Optional</sup> <a name="gateway_input" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.gatewayInput"></a>

```python
gateway_input: str
```

- *Type:* str

---

##### `ip_range_input`<sup>Optional</sup> <a name="ip_range_input" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.ipRangeInput"></a>

```python
ip_range_input: str
```

- *Type:* str

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.subnetInput"></a>

```python
subnet_input: str
```

- *Type:* str

---

##### `aux_address`<sup>Required</sup> <a name="aux_address" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.auxAddress"></a>

```python
aux_address: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.gateway"></a>

```python
gateway: str
```

- *Type:* str

---

##### `ip_range`<sup>Required</sup> <a name="ip_range" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.ipRange"></a>

```python
ip_range: str
```

- *Type:* str

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.subnet"></a>

```python
subnet: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkIpamConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>]

---


### NetworkLabelsList <a name="NetworkLabelsList" id="@cdktf/provider-docker.network.NetworkLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.network.NetworkLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import network

network.NetworkLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.network.NetworkLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.network.NetworkLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.network.NetworkLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.network.NetworkLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.network.NetworkLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.network.NetworkLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.network.NetworkLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.network.NetworkLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.network.NetworkLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.network.NetworkLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.network.NetworkLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>]]

---


### NetworkLabelsOutputReference <a name="NetworkLabelsOutputReference" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import network

network.NetworkLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>]

---



