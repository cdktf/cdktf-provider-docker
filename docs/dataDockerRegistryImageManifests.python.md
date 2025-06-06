# `dataDockerRegistryImageManifests` Submodule <a name="`dataDockerRegistryImageManifests` Submodule" id="@cdktf/provider-docker.dataDockerRegistryImageManifests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDockerRegistryImageManifests <a name="DataDockerRegistryImageManifests" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests docker_registry_image_manifests}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_registry_image_manifests

dataDockerRegistryImageManifests.DataDockerRegistryImageManifests(
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
  auth_config: DataDockerRegistryImageManifestsAuthConfig = None,
  id: str = None,
  insecure_skip_verify: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Docker image, including any tags. e.g. `alpine:latest`. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.authConfig">auth_config</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#id DataDockerRegistryImageManifests#id}. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.insecureSkipVerify">insecure_skip_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.name"></a>

- *Type:* str

The name of the Docker image, including any tags. e.g. `alpine:latest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#name DataDockerRegistryImageManifests#name}

---

##### `auth_config`<sup>Optional</sup> <a name="auth_config" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.authConfig"></a>

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#auth_config DataDockerRegistryImageManifests#auth_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#id DataDockerRegistryImageManifests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecure_skip_verify`<sup>Optional</sup> <a name="insecure_skip_verify" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.insecureSkipVerify"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#insecure_skip_verify DataDockerRegistryImageManifests#insecure_skip_verify}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.putAuthConfig">put_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetAuthConfig">reset_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetInsecureSkipVerify">reset_insecure_skip_verify</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_auth_config` <a name="put_auth_config" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.putAuthConfig"></a>

```python
def put_auth_config(
  address: str,
  password: str,
  username: str
) -> None
```

###### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.putAuthConfig.parameter.address"></a>

- *Type:* str

The address of the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#address DataDockerRegistryImageManifests#address}

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.putAuthConfig.parameter.password"></a>

- *Type:* str

The password for the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#password DataDockerRegistryImageManifests#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.putAuthConfig.parameter.username"></a>

- *Type:* str

The username for the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#username DataDockerRegistryImageManifests#username}

---

##### `reset_auth_config` <a name="reset_auth_config" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetAuthConfig"></a>

```python
def reset_auth_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_insecure_skip_verify` <a name="reset_insecure_skip_verify" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetInsecureSkipVerify"></a>

```python
def reset_insecure_skip_verify() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDockerRegistryImageManifests resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isConstruct"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_registry_image_manifests

dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_registry_image_manifests

dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_registry_image_manifests

dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_registry_image_manifests

dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDockerRegistryImageManifests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDockerRegistryImageManifests to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDockerRegistryImageManifests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDockerRegistryImageManifests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.authConfig">auth_config</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference">DataDockerRegistryImageManifestsAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.manifests">manifests</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList">DataDockerRegistryImageManifestsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.authConfigInput">auth_config_input</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.insecureSkipVerifyInput">insecure_skip_verify_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.insecureSkipVerify">insecure_skip_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `auth_config`<sup>Required</sup> <a name="auth_config" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.authConfig"></a>

```python
auth_config: DataDockerRegistryImageManifestsAuthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference">DataDockerRegistryImageManifestsAuthConfigOutputReference</a>

---

##### `manifests`<sup>Required</sup> <a name="manifests" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.manifests"></a>

```python
manifests: DataDockerRegistryImageManifestsManifestsList
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList">DataDockerRegistryImageManifestsManifestsList</a>

---

##### `auth_config_input`<sup>Optional</sup> <a name="auth_config_input" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.authConfigInput"></a>

```python
auth_config_input: DataDockerRegistryImageManifestsAuthConfig
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `insecure_skip_verify_input`<sup>Optional</sup> <a name="insecure_skip_verify_input" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.insecureSkipVerifyInput"></a>

```python
insecure_skip_verify_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `insecure_skip_verify`<sup>Required</sup> <a name="insecure_skip_verify" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.insecureSkipVerify"></a>

```python
insecure_skip_verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDockerRegistryImageManifestsAuthConfig <a name="DataDockerRegistryImageManifestsAuthConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_registry_image_manifests

dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig(
  address: str,
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.address">address</a></code> | <code>str</code> | The address of the Docker registry. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.password">password</a></code> | <code>str</code> | The password for the Docker registry. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.username">username</a></code> | <code>str</code> | The username for the Docker registry. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.address"></a>

```python
address: str
```

- *Type:* str

The address of the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#address DataDockerRegistryImageManifests#address}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The password for the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#password DataDockerRegistryImageManifests#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The username for the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#username DataDockerRegistryImageManifests#username}

---

### DataDockerRegistryImageManifestsConfig <a name="DataDockerRegistryImageManifestsConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_registry_image_manifests

dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  auth_config: DataDockerRegistryImageManifestsAuthConfig = None,
  id: str = None,
  insecure_skip_verify: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.name">name</a></code> | <code>str</code> | The name of the Docker image, including any tags. e.g. `alpine:latest`. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.authConfig">auth_config</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#id DataDockerRegistryImageManifests#id}. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.insecureSkipVerify">insecure_skip_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Docker image, including any tags. e.g. `alpine:latest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#name DataDockerRegistryImageManifests#name}

---

##### `auth_config`<sup>Optional</sup> <a name="auth_config" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.authConfig"></a>

```python
auth_config: DataDockerRegistryImageManifestsAuthConfig
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#auth_config DataDockerRegistryImageManifests#auth_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#id DataDockerRegistryImageManifests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecure_skip_verify`<sup>Optional</sup> <a name="insecure_skip_verify" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.insecureSkipVerify"></a>

```python
insecure_skip_verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#insecure_skip_verify DataDockerRegistryImageManifests#insecure_skip_verify}

---

### DataDockerRegistryImageManifestsManifests <a name="DataDockerRegistryImageManifestsManifests" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_registry_image_manifests

dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDockerRegistryImageManifestsAuthConfigOutputReference <a name="DataDockerRegistryImageManifestsAuthConfigOutputReference" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_registry_image_manifests

dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDockerRegistryImageManifestsAuthConfig
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

---


### DataDockerRegistryImageManifestsManifestsList <a name="DataDockerRegistryImageManifestsManifestsList" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_registry_image_manifests

dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDockerRegistryImageManifestsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDockerRegistryImageManifestsManifestsOutputReference <a name="DataDockerRegistryImageManifestsManifestsOutputReference" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_registry_image_manifests

dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.mediaType">media_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.os">os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.sha256Digest">sha256_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests">DataDockerRegistryImageManifestsManifests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `media_type`<sup>Required</sup> <a name="media_type" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.mediaType"></a>

```python
media_type: str
```

- *Type:* str

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.os"></a>

```python
os: str
```

- *Type:* str

---

##### `sha256_digest`<sup>Required</sup> <a name="sha256_digest" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.sha256Digest"></a>

```python
sha256_digest: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.internalValue"></a>

```python
internal_value: DataDockerRegistryImageManifestsManifests
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests">DataDockerRegistryImageManifestsManifests</a>

---



