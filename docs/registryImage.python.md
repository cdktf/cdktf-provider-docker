# `registryImage` Submodule <a name="`registryImage` Submodule" id="@cdktf/provider-docker.registryImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RegistryImage <a name="RegistryImage" id="@cdktf/provider-docker.registryImage.RegistryImage"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image docker_registry_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import registry_image

registryImage.RegistryImage(
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
  auth_config: RegistryImageAuthConfig = None,
  id: str = None,
  insecure_skip_verify: typing.Union[bool, IResolvable] = None,
  keep_remotely: typing.Union[bool, IResolvable] = None,
  triggers: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Docker image. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.authConfig">auth_config</a></code> | <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#id RegistryImage#id}. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.insecureSkipVerify">insecure_skip_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.keepRemotely">keep_remotely</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then the Docker image won't be deleted on destroy operation. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | A map of arbitrary strings that, when changed, will force the `docker_registry_image` resource to be replaced. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.name"></a>

- *Type:* str

The name of the Docker image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#name RegistryImage#name}

---

##### `auth_config`<sup>Optional</sup> <a name="auth_config" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.authConfig"></a>

- *Type:* <a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#auth_config RegistryImage#auth_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#id RegistryImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecure_skip_verify`<sup>Optional</sup> <a name="insecure_skip_verify" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.insecureSkipVerify"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#insecure_skip_verify RegistryImage#insecure_skip_verify}

---

##### `keep_remotely`<sup>Optional</sup> <a name="keep_remotely" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.keepRemotely"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the Docker image won't be deleted on destroy operation.

If this is false, it will delete the image from the docker registry on destroy operation. Defaults to `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#keep_remotely RegistryImage#keep_remotely}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.triggers"></a>

- *Type:* typing.Mapping[str]

A map of arbitrary strings that, when changed, will force the `docker_registry_image` resource to be replaced.

This can be used to repush a local image

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#triggers RegistryImage#triggers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.putAuthConfig">put_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.resetAuthConfig">reset_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.resetInsecureSkipVerify">reset_insecure_skip_verify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.resetKeepRemotely">reset_keep_remotely</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.resetTriggers">reset_triggers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.registryImage.RegistryImage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-docker.registryImage.RegistryImage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.registryImage.RegistryImage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.registryImage.RegistryImage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-docker.registryImage.RegistryImage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-docker.registryImage.RegistryImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-docker.registryImage.RegistryImage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-docker.registryImage.RegistryImage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-docker.registryImage.RegistryImage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-docker.registryImage.RegistryImage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-docker.registryImage.RegistryImage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-docker.registryImage.RegistryImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-docker.registryImage.RegistryImage.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-docker.registryImage.RegistryImage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.registryImage.RegistryImage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.registryImage.RegistryImage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-docker.registryImage.RegistryImage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.registryImage.RegistryImage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-docker.registryImage.RegistryImage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-docker.registryImage.RegistryImage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-docker.registryImage.RegistryImage.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-docker.registryImage.RegistryImage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.registryImage.RegistryImage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auth_config` <a name="put_auth_config" id="@cdktf/provider-docker.registryImage.RegistryImage.putAuthConfig"></a>

```python
def put_auth_config(
  address: str,
  password: str,
  username: str
) -> None
```

###### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-docker.registryImage.RegistryImage.putAuthConfig.parameter.address"></a>

- *Type:* str

The address of the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#address RegistryImage#address}

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.registryImage.RegistryImage.putAuthConfig.parameter.password"></a>

- *Type:* str

The password for the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#password RegistryImage#password}

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-docker.registryImage.RegistryImage.putAuthConfig.parameter.username"></a>

- *Type:* str

The username for the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#username RegistryImage#username}

---

##### `reset_auth_config` <a name="reset_auth_config" id="@cdktf/provider-docker.registryImage.RegistryImage.resetAuthConfig"></a>

```python
def reset_auth_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-docker.registryImage.RegistryImage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_insecure_skip_verify` <a name="reset_insecure_skip_verify" id="@cdktf/provider-docker.registryImage.RegistryImage.resetInsecureSkipVerify"></a>

```python
def reset_insecure_skip_verify() -> None
```

##### `reset_keep_remotely` <a name="reset_keep_remotely" id="@cdktf/provider-docker.registryImage.RegistryImage.resetKeepRemotely"></a>

```python
def reset_keep_remotely() -> None
```

##### `reset_triggers` <a name="reset_triggers" id="@cdktf/provider-docker.registryImage.RegistryImage.resetTriggers"></a>

```python
def reset_triggers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RegistryImage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-docker.registryImage.RegistryImage.isConstruct"></a>

```python
from cdktf_cdktf_provider_docker import registry_image

registryImage.RegistryImage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.registryImage.RegistryImage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-docker.registryImage.RegistryImage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_docker import registry_image

registryImage.RegistryImage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.registryImage.RegistryImage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-docker.registryImage.RegistryImage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_docker import registry_image

registryImage.RegistryImage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.registryImage.RegistryImage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-docker.registryImage.RegistryImage.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_docker import registry_image

registryImage.RegistryImage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RegistryImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.registryImage.RegistryImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-docker.registryImage.RegistryImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RegistryImage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-docker.registryImage.RegistryImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RegistryImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.registryImage.RegistryImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RegistryImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.authConfig">auth_config</a></code> | <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference">RegistryImageAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.sha256Digest">sha256_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.authConfigInput">auth_config_input</a></code> | <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.insecureSkipVerifyInput">insecure_skip_verify_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.keepRemotelyInput">keep_remotely_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.triggersInput">triggers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.insecureSkipVerify">insecure_skip_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.keepRemotely">keep_remotely</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.registryImage.RegistryImage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-docker.registryImage.RegistryImage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.registryImage.RegistryImage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-docker.registryImage.RegistryImage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-docker.registryImage.RegistryImage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-docker.registryImage.RegistryImage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-docker.registryImage.RegistryImage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.registryImage.RegistryImage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.registryImage.RegistryImage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.registryImage.RegistryImage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.registryImage.RegistryImage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.registryImage.RegistryImage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.registryImage.RegistryImage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.registryImage.RegistryImage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_config`<sup>Required</sup> <a name="auth_config" id="@cdktf/provider-docker.registryImage.RegistryImage.property.authConfig"></a>

```python
auth_config: RegistryImageAuthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference">RegistryImageAuthConfigOutputReference</a>

---

##### `sha256_digest`<sup>Required</sup> <a name="sha256_digest" id="@cdktf/provider-docker.registryImage.RegistryImage.property.sha256Digest"></a>

```python
sha256_digest: str
```

- *Type:* str

---

##### `auth_config_input`<sup>Optional</sup> <a name="auth_config_input" id="@cdktf/provider-docker.registryImage.RegistryImage.property.authConfigInput"></a>

```python
auth_config_input: RegistryImageAuthConfig
```

- *Type:* <a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-docker.registryImage.RegistryImage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `insecure_skip_verify_input`<sup>Optional</sup> <a name="insecure_skip_verify_input" id="@cdktf/provider-docker.registryImage.RegistryImage.property.insecureSkipVerifyInput"></a>

```python
insecure_skip_verify_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keep_remotely_input`<sup>Optional</sup> <a name="keep_remotely_input" id="@cdktf/provider-docker.registryImage.RegistryImage.property.keepRemotelyInput"></a>

```python
keep_remotely_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-docker.registryImage.RegistryImage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `triggers_input`<sup>Optional</sup> <a name="triggers_input" id="@cdktf/provider-docker.registryImage.RegistryImage.property.triggersInput"></a>

```python
triggers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.registryImage.RegistryImage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `insecure_skip_verify`<sup>Required</sup> <a name="insecure_skip_verify" id="@cdktf/provider-docker.registryImage.RegistryImage.property.insecureSkipVerify"></a>

```python
insecure_skip_verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keep_remotely`<sup>Required</sup> <a name="keep_remotely" id="@cdktf/provider-docker.registryImage.RegistryImage.property.keepRemotely"></a>

```python
keep_remotely: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.registryImage.RegistryImage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-docker.registryImage.RegistryImage.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.registryImage.RegistryImage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RegistryImageAuthConfig <a name="RegistryImageAuthConfig" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import registry_image

registryImage.RegistryImageAuthConfig(
  address: str,
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig.property.address">address</a></code> | <code>str</code> | The address of the Docker registry. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig.property.password">password</a></code> | <code>str</code> | The password for the Docker registry. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig.property.username">username</a></code> | <code>str</code> | The username for the Docker registry. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfig.property.address"></a>

```python
address: str
```

- *Type:* str

The address of the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#address RegistryImage#address}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The password for the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#password RegistryImage#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The username for the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#username RegistryImage#username}

---

### RegistryImageConfig <a name="RegistryImageConfig" id="@cdktf/provider-docker.registryImage.RegistryImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import registry_image

registryImage.RegistryImageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  auth_config: RegistryImageAuthConfig = None,
  id: str = None,
  insecure_skip_verify: typing.Union[bool, IResolvable] = None,
  keep_remotely: typing.Union[bool, IResolvable] = None,
  triggers: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.name">name</a></code> | <code>str</code> | The name of the Docker image. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.authConfig">auth_config</a></code> | <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#id RegistryImage#id}. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.insecureSkipVerify">insecure_skip_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.keepRemotely">keep_remotely</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then the Docker image won't be deleted on destroy operation. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | A map of arbitrary strings that, when changed, will force the `docker_registry_image` resource to be replaced. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Docker image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#name RegistryImage#name}

---

##### `auth_config`<sup>Optional</sup> <a name="auth_config" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.authConfig"></a>

```python
auth_config: RegistryImageAuthConfig
```

- *Type:* <a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#auth_config RegistryImage#auth_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#id RegistryImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecure_skip_verify`<sup>Optional</sup> <a name="insecure_skip_verify" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.insecureSkipVerify"></a>

```python
insecure_skip_verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#insecure_skip_verify RegistryImage#insecure_skip_verify}

---

##### `keep_remotely`<sup>Optional</sup> <a name="keep_remotely" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.keepRemotely"></a>

```python
keep_remotely: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the Docker image won't be deleted on destroy operation.

If this is false, it will delete the image from the docker registry on destroy operation. Defaults to `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#keep_remotely RegistryImage#keep_remotely}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of arbitrary strings that, when changed, will force the `docker_registry_image` resource to be replaced.

This can be used to repush a local image

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/resources/registry_image#triggers RegistryImage#triggers}

---

## Classes <a name="Classes" id="Classes"></a>

### RegistryImageAuthConfigOutputReference <a name="RegistryImageAuthConfigOutputReference" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import registry_image

registryImage.RegistryImageAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: RegistryImageAuthConfig
```

- *Type:* <a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a>

---



