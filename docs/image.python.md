# `image` Submodule <a name="`image` Submodule" id="@cdktf/provider-docker.image"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Image <a name="Image" id="@cdktf/provider-docker.image.Image"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image docker_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.Image.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import image

image.Image(
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
  build_attribute: ImageBuild = None,
  force_remove: typing.Union[bool, IResolvable] = None,
  keep_locally: typing.Union[bool, IResolvable] = None,
  platform: str = None,
  pull_triggers: typing.List[str] = None,
  timeouts: ImageTimeouts = None,
  triggers: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Docker image, including any tags or SHA256 repo digests. |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.buildAttribute">build_attribute</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a></code> | build block. |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.forceRemove">force_remove</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then the image is removed forcibly when the resource is destroyed. |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.keepLocally">keep_locally</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then the Docker image won't be deleted on destroy operation. |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.platform">platform</a></code> | <code>str</code> | The platform to use when pulling the image. Defaults to the platform of the current machine. |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.pullTriggers">pull_triggers</a></code> | <code>typing.List[str]</code> | List of values which cause an image pull when changed. |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | A map of arbitrary strings that, when changed, will force the `docker_image` resource to be replaced. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.image.Image.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.Image.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.image.Image.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.image.Image.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.image.Image.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.image.Image.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.image.Image.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.image.Image.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.image.Image.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.image.Image.Initializer.parameter.name"></a>

- *Type:* str

The name of the Docker image, including any tags or SHA256 repo digests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#name Image#name}

---

##### `build_attribute`<sup>Optional</sup> <a name="build_attribute" id="@cdktf/provider-docker.image.Image.Initializer.parameter.buildAttribute"></a>

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a>

build block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#build Image#build}

---

##### `force_remove`<sup>Optional</sup> <a name="force_remove" id="@cdktf/provider-docker.image.Image.Initializer.parameter.forceRemove"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the image is removed forcibly when the resource is destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#force_remove Image#force_remove}

---

##### `keep_locally`<sup>Optional</sup> <a name="keep_locally" id="@cdktf/provider-docker.image.Image.Initializer.parameter.keepLocally"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the Docker image won't be deleted on destroy operation.

If this is false, it will delete the image from the docker local storage on destroy operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#keep_locally Image#keep_locally}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-docker.image.Image.Initializer.parameter.platform"></a>

- *Type:* str

The platform to use when pulling the image. Defaults to the platform of the current machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#platform Image#platform}

---

##### `pull_triggers`<sup>Optional</sup> <a name="pull_triggers" id="@cdktf/provider-docker.image.Image.Initializer.parameter.pullTriggers"></a>

- *Type:* typing.List[str]

List of values which cause an image pull when changed.

This is used to store the image digest from the registry when using the [docker_registry_image](../data-sources/registry_image.md).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#pull_triggers Image#pull_triggers}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-docker.image.Image.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#timeouts Image#timeouts}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-docker.image.Image.Initializer.parameter.triggers"></a>

- *Type:* typing.Mapping[str]

A map of arbitrary strings that, when changed, will force the `docker_image` resource to be replaced.

This can be used to rebuild an image when contents of source code folders change

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#triggers Image#triggers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.image.Image.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.image.Image.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.image.Image.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.image.Image.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-docker.image.Image.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-docker.image.Image.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-docker.image.Image.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-docker.image.Image.putBuildAttribute">put_build_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetBuildAttribute">reset_build_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetForceRemove">reset_force_remove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetKeepLocally">reset_keep_locally</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetPlatform">reset_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetPullTriggers">reset_pull_triggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetTriggers">reset_triggers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.image.Image.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-docker.image.Image.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.image.Image.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.image.Image.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-docker.image.Image.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-docker.image.Image.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-docker.image.Image.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-docker.image.Image.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-docker.image.Image.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-docker.image.Image.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-docker.image.Image.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-docker.image.Image.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.image.Image.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.Image.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.image.Image.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.Image.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.image.Image.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.Image.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.image.Image.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.Image.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.image.Image.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.Image.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.image.Image.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.Image.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.image.Image.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.Image.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.image.Image.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.Image.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.image.Image.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.Image.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-docker.image.Image.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-docker.image.Image.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.Image.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.image.Image.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.image.Image.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.Image.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-docker.image.Image.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.Image.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-docker.image.Image.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-docker.image.Image.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-docker.image.Image.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-docker.image.Image.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.Image.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_build_attribute` <a name="put_build_attribute" id="@cdktf/provider-docker.image.Image.putBuildAttribute"></a>

```python
def put_build_attribute(
  context: str,
  auth_config: typing.Union[IResolvable, typing.List[ImageBuildAuthConfig]] = None,
  build_args: typing.Mapping[str] = None,
  build_id: str = None,
  cache_from: typing.List[str] = None,
  cgroup_parent: str = None,
  cpu_period: typing.Union[int, float] = None,
  cpu_quota: typing.Union[int, float] = None,
  cpu_set_cpus: str = None,
  cpu_set_mems: str = None,
  cpu_shares: typing.Union[int, float] = None,
  dockerfile: str = None,
  extra_hosts: typing.List[str] = None,
  force_remove: typing.Union[bool, IResolvable] = None,
  isolation: str = None,
  label: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  memory: typing.Union[int, float] = None,
  memory_swap: typing.Union[int, float] = None,
  network_mode: str = None,
  no_cache: typing.Union[bool, IResolvable] = None,
  platform: str = None,
  pull_parent: typing.Union[bool, IResolvable] = None,
  remote_context: str = None,
  remove: typing.Union[bool, IResolvable] = None,
  secrets: typing.Union[IResolvable, typing.List[ImageBuildSecrets]] = None,
  security_opt: typing.List[str] = None,
  session_id: str = None,
  shm_size: typing.Union[int, float] = None,
  squash: typing.Union[bool, IResolvable] = None,
  suppress_output: typing.Union[bool, IResolvable] = None,
  tag: typing.List[str] = None,
  target: str = None,
  ulimit: typing.Union[IResolvable, typing.List[ImageBuildUlimit]] = None,
  version: str = None
) -> None
```

###### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.context"></a>

- *Type:* str

Value to specify the build context.

Currently, only a `PATH` context is supported. You can use the helper function '${path.cwd}/context-dir'. This always refers to the local working directory, even when building images on remote hosts. Please see https://docs.docker.com/build/building/context/ for more information about build contexts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#context Image#context}

---

###### `auth_config`<sup>Optional</sup> <a name="auth_config" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.authConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>]]

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#auth_config Image#auth_config}

---

###### `build_args`<sup>Optional</sup> <a name="build_args" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.buildArgs"></a>

- *Type:* typing.Mapping[str]

Pairs for build-time variables in the form of `ENDPOINT : "https://example.com"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#build_args Image#build_args}

---

###### `build_id`<sup>Optional</sup> <a name="build_id" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.buildId"></a>

- *Type:* str

BuildID is an optional identifier that can be passed together with the build request.

The same identifier can be used to gracefully cancel the build with the cancel request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#build_id Image#build_id}

---

###### `cache_from`<sup>Optional</sup> <a name="cache_from" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.cacheFrom"></a>

- *Type:* typing.List[str]

Images to consider as cache sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cache_from Image#cache_from}

---

###### `cgroup_parent`<sup>Optional</sup> <a name="cgroup_parent" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.cgroupParent"></a>

- *Type:* str

Optional parent cgroup for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cgroup_parent Image#cgroup_parent}

---

###### `cpu_period`<sup>Optional</sup> <a name="cpu_period" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.cpuPeriod"></a>

- *Type:* typing.Union[int, float]

The length of a CPU period in microseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cpu_period Image#cpu_period}

---

###### `cpu_quota`<sup>Optional</sup> <a name="cpu_quota" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.cpuQuota"></a>

- *Type:* typing.Union[int, float]

Microseconds of CPU time that the container can get in a CPU period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cpu_quota Image#cpu_quota}

---

###### `cpu_set_cpus`<sup>Optional</sup> <a name="cpu_set_cpus" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.cpuSetCpus"></a>

- *Type:* str

CPUs in which to allow execution (e.g., `0-3`, `0`, `1`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cpu_set_cpus Image#cpu_set_cpus}

---

###### `cpu_set_mems`<sup>Optional</sup> <a name="cpu_set_mems" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.cpuSetMems"></a>

- *Type:* str

MEMs in which to allow execution (`0-3`, `0`, `1`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cpu_set_mems Image#cpu_set_mems}

---

###### `cpu_shares`<sup>Optional</sup> <a name="cpu_shares" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.cpuShares"></a>

- *Type:* typing.Union[int, float]

CPU shares (relative weight).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cpu_shares Image#cpu_shares}

---

###### `dockerfile`<sup>Optional</sup> <a name="dockerfile" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.dockerfile"></a>

- *Type:* str

Name of the Dockerfile. Defaults to `Dockerfile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#dockerfile Image#dockerfile}

---

###### `extra_hosts`<sup>Optional</sup> <a name="extra_hosts" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.extraHosts"></a>

- *Type:* typing.List[str]

A list of hostnames/IP mappings to add to the container’s /etc/hosts file. Specified in the form ["hostname:IP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#extra_hosts Image#extra_hosts}

---

###### `force_remove`<sup>Optional</sup> <a name="force_remove" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.forceRemove"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Always remove intermediate containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#force_remove Image#force_remove}

---

###### `isolation`<sup>Optional</sup> <a name="isolation" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.isolation"></a>

- *Type:* str

Isolation represents the isolation technology of a container. The supported values are.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#isolation Image#isolation}

---

###### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.label"></a>

- *Type:* typing.Mapping[str]

Set metadata for an image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#label Image#label}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined key/value metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#labels Image#labels}

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.memory"></a>

- *Type:* typing.Union[int, float]

Set memory limit for build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#memory Image#memory}

---

###### `memory_swap`<sup>Optional</sup> <a name="memory_swap" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.memorySwap"></a>

- *Type:* typing.Union[int, float]

Total memory (memory + swap), -1 to enable unlimited swap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#memory_swap Image#memory_swap}

---

###### `network_mode`<sup>Optional</sup> <a name="network_mode" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.networkMode"></a>

- *Type:* str

Set the networking mode for the RUN instructions during build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#network_mode Image#network_mode}

---

###### `no_cache`<sup>Optional</sup> <a name="no_cache" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.noCache"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not use the cache when building the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#no_cache Image#no_cache}

---

###### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.platform"></a>

- *Type:* str

Set platform if server is multi-platform capable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#platform Image#platform}

---

###### `pull_parent`<sup>Optional</sup> <a name="pull_parent" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.pullParent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Attempt to pull the image even if an older image exists locally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#pull_parent Image#pull_parent}

---

###### `remote_context`<sup>Optional</sup> <a name="remote_context" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.remoteContext"></a>

- *Type:* str

A Git repository URI or HTTP/HTTPS context URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#remote_context Image#remote_context}

---

###### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.remove"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Remove intermediate containers after a successful build. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#remove Image#remove}

---

###### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.secrets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>]]

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#secrets Image#secrets}

---

###### `security_opt`<sup>Optional</sup> <a name="security_opt" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.securityOpt"></a>

- *Type:* typing.List[str]

The security options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#security_opt Image#security_opt}

---

###### `session_id`<sup>Optional</sup> <a name="session_id" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.sessionId"></a>

- *Type:* str

Set an ID for the build session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#session_id Image#session_id}

---

###### `shm_size`<sup>Optional</sup> <a name="shm_size" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.shmSize"></a>

- *Type:* typing.Union[int, float]

Size of /dev/shm in bytes. The size must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#shm_size Image#shm_size}

---

###### `squash`<sup>Optional</sup> <a name="squash" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.squash"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true the new layers are squashed into a new image with a single new layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#squash Image#squash}

---

###### `suppress_output`<sup>Optional</sup> <a name="suppress_output" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.suppressOutput"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Suppress the build output and print image ID on success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#suppress_output Image#suppress_output}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.tag"></a>

- *Type:* typing.List[str]

Name and optionally a tag in the 'name:tag' format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#tag Image#tag}

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.target"></a>

- *Type:* str

Set the target build stage to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#target Image#target}

---

###### `ulimit`<sup>Optional</sup> <a name="ulimit" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.ulimit"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>]]

ulimit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#ulimit Image#ulimit}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.version"></a>

- *Type:* str

Version of the underlying builder to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#version Image#version}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-docker.image.Image.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-docker.image.Image.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#create Image#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-docker.image.Image.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#delete Image#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-docker.image.Image.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#update Image#update}.

---

##### `reset_build_attribute` <a name="reset_build_attribute" id="@cdktf/provider-docker.image.Image.resetBuildAttribute"></a>

```python
def reset_build_attribute() -> None
```

##### `reset_force_remove` <a name="reset_force_remove" id="@cdktf/provider-docker.image.Image.resetForceRemove"></a>

```python
def reset_force_remove() -> None
```

##### `reset_keep_locally` <a name="reset_keep_locally" id="@cdktf/provider-docker.image.Image.resetKeepLocally"></a>

```python
def reset_keep_locally() -> None
```

##### `reset_platform` <a name="reset_platform" id="@cdktf/provider-docker.image.Image.resetPlatform"></a>

```python
def reset_platform() -> None
```

##### `reset_pull_triggers` <a name="reset_pull_triggers" id="@cdktf/provider-docker.image.Image.resetPullTriggers"></a>

```python
def reset_pull_triggers() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-docker.image.Image.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_triggers` <a name="reset_triggers" id="@cdktf/provider-docker.image.Image.resetTriggers"></a>

```python
def reset_triggers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.image.Image.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-docker.image.Image.isConstruct"></a>

```python
from cdktf_cdktf_provider_docker import image

image.Image.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.image.Image.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-docker.image.Image.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_docker import image

image.Image.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.image.Image.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-docker.image.Image.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_docker import image

image.Image.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.image.Image.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-docker.image.Image.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_docker import image

image.Image.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.image.Image.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-docker.image.Image.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Image to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-docker.image.Image.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Image that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.image.Image.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Image to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.image.Image.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.buildAttribute">build_attribute</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference">ImageBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.repoDigest">repo_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference">ImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.buildAttributeInput">build_attribute_input</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.forceRemoveInput">force_remove_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.keepLocallyInput">keep_locally_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.pullTriggersInput">pull_triggers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.triggersInput">triggers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.forceRemove">force_remove</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.keepLocally">keep_locally</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.pullTriggers">pull_triggers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.image.Image.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-docker.image.Image.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.Image.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-docker.image.Image.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-docker.image.Image.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-docker.image.Image.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-docker.image.Image.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.image.Image.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.image.Image.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.image.Image.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.image.Image.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.image.Image.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.image.Image.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.image.Image.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `build_attribute`<sup>Required</sup> <a name="build_attribute" id="@cdktf/provider-docker.image.Image.property.buildAttribute"></a>

```python
build_attribute: ImageBuildOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuildOutputReference">ImageBuildOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.Image.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-docker.image.Image.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `repo_digest`<sup>Required</sup> <a name="repo_digest" id="@cdktf/provider-docker.image.Image.property.repoDigest"></a>

```python
repo_digest: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-docker.image.Image.property.timeouts"></a>

```python
timeouts: ImageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference">ImageTimeoutsOutputReference</a>

---

##### `build_attribute_input`<sup>Optional</sup> <a name="build_attribute_input" id="@cdktf/provider-docker.image.Image.property.buildAttributeInput"></a>

```python
build_attribute_input: ImageBuild
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a>

---

##### `force_remove_input`<sup>Optional</sup> <a name="force_remove_input" id="@cdktf/provider-docker.image.Image.property.forceRemoveInput"></a>

```python
force_remove_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keep_locally_input`<sup>Optional</sup> <a name="keep_locally_input" id="@cdktf/provider-docker.image.Image.property.keepLocallyInput"></a>

```python
keep_locally_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-docker.image.Image.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktf/provider-docker.image.Image.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `pull_triggers_input`<sup>Optional</sup> <a name="pull_triggers_input" id="@cdktf/provider-docker.image.Image.property.pullTriggersInput"></a>

```python
pull_triggers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-docker.image.Image.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ImageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a>]

---

##### `triggers_input`<sup>Optional</sup> <a name="triggers_input" id="@cdktf/provider-docker.image.Image.property.triggersInput"></a>

```python
triggers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `force_remove`<sup>Required</sup> <a name="force_remove" id="@cdktf/provider-docker.image.Image.property.forceRemove"></a>

```python
force_remove: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keep_locally`<sup>Required</sup> <a name="keep_locally" id="@cdktf/provider-docker.image.Image.property.keepLocally"></a>

```python
keep_locally: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.image.Image.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-docker.image.Image.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `pull_triggers`<sup>Required</sup> <a name="pull_triggers" id="@cdktf/provider-docker.image.Image.property.pullTriggers"></a>

```python
pull_triggers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-docker.image.Image.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.image.Image.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ImageBuild <a name="ImageBuild" id="@cdktf/provider-docker.image.ImageBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageBuild.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import image

image.ImageBuild(
  context: str,
  auth_config: typing.Union[IResolvable, typing.List[ImageBuildAuthConfig]] = None,
  build_args: typing.Mapping[str] = None,
  build_id: str = None,
  cache_from: typing.List[str] = None,
  cgroup_parent: str = None,
  cpu_period: typing.Union[int, float] = None,
  cpu_quota: typing.Union[int, float] = None,
  cpu_set_cpus: str = None,
  cpu_set_mems: str = None,
  cpu_shares: typing.Union[int, float] = None,
  dockerfile: str = None,
  extra_hosts: typing.List[str] = None,
  force_remove: typing.Union[bool, IResolvable] = None,
  isolation: str = None,
  label: typing.Mapping[str] = None,
  labels: typing.Mapping[str] = None,
  memory: typing.Union[int, float] = None,
  memory_swap: typing.Union[int, float] = None,
  network_mode: str = None,
  no_cache: typing.Union[bool, IResolvable] = None,
  platform: str = None,
  pull_parent: typing.Union[bool, IResolvable] = None,
  remote_context: str = None,
  remove: typing.Union[bool, IResolvable] = None,
  secrets: typing.Union[IResolvable, typing.List[ImageBuildSecrets]] = None,
  security_opt: typing.List[str] = None,
  session_id: str = None,
  shm_size: typing.Union[int, float] = None,
  squash: typing.Union[bool, IResolvable] = None,
  suppress_output: typing.Union[bool, IResolvable] = None,
  tag: typing.List[str] = None,
  target: str = None,
  ulimit: typing.Union[IResolvable, typing.List[ImageBuildUlimit]] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.context">context</a></code> | <code>str</code> | Value to specify the build context. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.authConfig">auth_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>]]</code> | auth_config block. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.buildArgs">build_args</a></code> | <code>typing.Mapping[str]</code> | Pairs for build-time variables in the form of `ENDPOINT : "https://example.com"`. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.buildId">build_id</a></code> | <code>str</code> | BuildID is an optional identifier that can be passed together with the build request. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cacheFrom">cache_from</a></code> | <code>typing.List[str]</code> | Images to consider as cache sources. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cgroupParent">cgroup_parent</a></code> | <code>str</code> | Optional parent cgroup for the container. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuPeriod">cpu_period</a></code> | <code>typing.Union[int, float]</code> | The length of a CPU period in microseconds. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuQuota">cpu_quota</a></code> | <code>typing.Union[int, float]</code> | Microseconds of CPU time that the container can get in a CPU period. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuSetCpus">cpu_set_cpus</a></code> | <code>str</code> | CPUs in which to allow execution (e.g., `0-3`, `0`, `1`). |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuSetMems">cpu_set_mems</a></code> | <code>str</code> | MEMs in which to allow execution (`0-3`, `0`, `1`). |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuShares">cpu_shares</a></code> | <code>typing.Union[int, float]</code> | CPU shares (relative weight). |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.dockerfile">dockerfile</a></code> | <code>str</code> | Name of the Dockerfile. Defaults to `Dockerfile`. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.extraHosts">extra_hosts</a></code> | <code>typing.List[str]</code> | A list of hostnames/IP mappings to add to the container’s /etc/hosts file. Specified in the form ["hostname:IP"]. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.forceRemove">force_remove</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Always remove intermediate containers. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.isolation">isolation</a></code> | <code>str</code> | Isolation represents the isolation technology of a container. The supported values are. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.label">label</a></code> | <code>typing.Mapping[str]</code> | Set metadata for an image. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined key/value metadata. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | Set memory limit for build. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.memorySwap">memory_swap</a></code> | <code>typing.Union[int, float]</code> | Total memory (memory + swap), -1 to enable unlimited swap. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.networkMode">network_mode</a></code> | <code>str</code> | Set the networking mode for the RUN instructions during build. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.noCache">no_cache</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not use the cache when building the image. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.platform">platform</a></code> | <code>str</code> | Set platform if server is multi-platform capable. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.pullParent">pull_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Attempt to pull the image even if an older image exists locally. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.remoteContext">remote_context</a></code> | <code>str</code> | A Git repository URI or HTTP/HTTPS context URI. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.remove">remove</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Remove intermediate containers after a successful build. Defaults to `true`. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.secrets">secrets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>]]</code> | secrets block. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.securityOpt">security_opt</a></code> | <code>typing.List[str]</code> | The security options. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.sessionId">session_id</a></code> | <code>str</code> | Set an ID for the build session. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.shmSize">shm_size</a></code> | <code>typing.Union[int, float]</code> | Size of /dev/shm in bytes. The size must be greater than 0. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.squash">squash</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true the new layers are squashed into a new image with a single new layer. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.suppressOutput">suppress_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Suppress the build output and print image ID on success. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.tag">tag</a></code> | <code>typing.List[str]</code> | Name and optionally a tag in the 'name:tag' format. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.target">target</a></code> | <code>str</code> | Set the target build stage to build. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.ulimit">ulimit</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>]]</code> | ulimit block. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.version">version</a></code> | <code>str</code> | Version of the underlying builder to use. |

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-docker.image.ImageBuild.property.context"></a>

```python
context: str
```

- *Type:* str

Value to specify the build context.

Currently, only a `PATH` context is supported. You can use the helper function '${path.cwd}/context-dir'. This always refers to the local working directory, even when building images on remote hosts. Please see https://docs.docker.com/build/building/context/ for more information about build contexts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#context Image#context}

---

##### `auth_config`<sup>Optional</sup> <a name="auth_config" id="@cdktf/provider-docker.image.ImageBuild.property.authConfig"></a>

```python
auth_config: typing.Union[IResolvable, typing.List[ImageBuildAuthConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>]]

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#auth_config Image#auth_config}

---

##### `build_args`<sup>Optional</sup> <a name="build_args" id="@cdktf/provider-docker.image.ImageBuild.property.buildArgs"></a>

```python
build_args: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Pairs for build-time variables in the form of `ENDPOINT : "https://example.com"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#build_args Image#build_args}

---

##### `build_id`<sup>Optional</sup> <a name="build_id" id="@cdktf/provider-docker.image.ImageBuild.property.buildId"></a>

```python
build_id: str
```

- *Type:* str

BuildID is an optional identifier that can be passed together with the build request.

The same identifier can be used to gracefully cancel the build with the cancel request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#build_id Image#build_id}

---

##### `cache_from`<sup>Optional</sup> <a name="cache_from" id="@cdktf/provider-docker.image.ImageBuild.property.cacheFrom"></a>

```python
cache_from: typing.List[str]
```

- *Type:* typing.List[str]

Images to consider as cache sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cache_from Image#cache_from}

---

##### `cgroup_parent`<sup>Optional</sup> <a name="cgroup_parent" id="@cdktf/provider-docker.image.ImageBuild.property.cgroupParent"></a>

```python
cgroup_parent: str
```

- *Type:* str

Optional parent cgroup for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cgroup_parent Image#cgroup_parent}

---

##### `cpu_period`<sup>Optional</sup> <a name="cpu_period" id="@cdktf/provider-docker.image.ImageBuild.property.cpuPeriod"></a>

```python
cpu_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The length of a CPU period in microseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cpu_period Image#cpu_period}

---

##### `cpu_quota`<sup>Optional</sup> <a name="cpu_quota" id="@cdktf/provider-docker.image.ImageBuild.property.cpuQuota"></a>

```python
cpu_quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Microseconds of CPU time that the container can get in a CPU period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cpu_quota Image#cpu_quota}

---

##### `cpu_set_cpus`<sup>Optional</sup> <a name="cpu_set_cpus" id="@cdktf/provider-docker.image.ImageBuild.property.cpuSetCpus"></a>

```python
cpu_set_cpus: str
```

- *Type:* str

CPUs in which to allow execution (e.g., `0-3`, `0`, `1`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cpu_set_cpus Image#cpu_set_cpus}

---

##### `cpu_set_mems`<sup>Optional</sup> <a name="cpu_set_mems" id="@cdktf/provider-docker.image.ImageBuild.property.cpuSetMems"></a>

```python
cpu_set_mems: str
```

- *Type:* str

MEMs in which to allow execution (`0-3`, `0`, `1`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cpu_set_mems Image#cpu_set_mems}

---

##### `cpu_shares`<sup>Optional</sup> <a name="cpu_shares" id="@cdktf/provider-docker.image.ImageBuild.property.cpuShares"></a>

```python
cpu_shares: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

CPU shares (relative weight).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cpu_shares Image#cpu_shares}

---

##### `dockerfile`<sup>Optional</sup> <a name="dockerfile" id="@cdktf/provider-docker.image.ImageBuild.property.dockerfile"></a>

```python
dockerfile: str
```

- *Type:* str

Name of the Dockerfile. Defaults to `Dockerfile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#dockerfile Image#dockerfile}

---

##### `extra_hosts`<sup>Optional</sup> <a name="extra_hosts" id="@cdktf/provider-docker.image.ImageBuild.property.extraHosts"></a>

```python
extra_hosts: typing.List[str]
```

- *Type:* typing.List[str]

A list of hostnames/IP mappings to add to the container’s /etc/hosts file. Specified in the form ["hostname:IP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#extra_hosts Image#extra_hosts}

---

##### `force_remove`<sup>Optional</sup> <a name="force_remove" id="@cdktf/provider-docker.image.ImageBuild.property.forceRemove"></a>

```python
force_remove: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Always remove intermediate containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#force_remove Image#force_remove}

---

##### `isolation`<sup>Optional</sup> <a name="isolation" id="@cdktf/provider-docker.image.ImageBuild.property.isolation"></a>

```python
isolation: str
```

- *Type:* str

Isolation represents the isolation technology of a container. The supported values are.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#isolation Image#isolation}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-docker.image.ImageBuild.property.label"></a>

```python
label: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set metadata for an image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#label Image#label}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.image.ImageBuild.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined key/value metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#labels Image#labels}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.image.ImageBuild.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Set memory limit for build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#memory Image#memory}

---

##### `memory_swap`<sup>Optional</sup> <a name="memory_swap" id="@cdktf/provider-docker.image.ImageBuild.property.memorySwap"></a>

```python
memory_swap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Total memory (memory + swap), -1 to enable unlimited swap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#memory_swap Image#memory_swap}

---

##### `network_mode`<sup>Optional</sup> <a name="network_mode" id="@cdktf/provider-docker.image.ImageBuild.property.networkMode"></a>

```python
network_mode: str
```

- *Type:* str

Set the networking mode for the RUN instructions during build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#network_mode Image#network_mode}

---

##### `no_cache`<sup>Optional</sup> <a name="no_cache" id="@cdktf/provider-docker.image.ImageBuild.property.noCache"></a>

```python
no_cache: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not use the cache when building the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#no_cache Image#no_cache}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-docker.image.ImageBuild.property.platform"></a>

```python
platform: str
```

- *Type:* str

Set platform if server is multi-platform capable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#platform Image#platform}

---

##### `pull_parent`<sup>Optional</sup> <a name="pull_parent" id="@cdktf/provider-docker.image.ImageBuild.property.pullParent"></a>

```python
pull_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Attempt to pull the image even if an older image exists locally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#pull_parent Image#pull_parent}

---

##### `remote_context`<sup>Optional</sup> <a name="remote_context" id="@cdktf/provider-docker.image.ImageBuild.property.remoteContext"></a>

```python
remote_context: str
```

- *Type:* str

A Git repository URI or HTTP/HTTPS context URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#remote_context Image#remote_context}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-docker.image.ImageBuild.property.remove"></a>

```python
remove: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Remove intermediate containers after a successful build. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#remove Image#remove}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-docker.image.ImageBuild.property.secrets"></a>

```python
secrets: typing.Union[IResolvable, typing.List[ImageBuildSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>]]

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#secrets Image#secrets}

---

##### `security_opt`<sup>Optional</sup> <a name="security_opt" id="@cdktf/provider-docker.image.ImageBuild.property.securityOpt"></a>

```python
security_opt: typing.List[str]
```

- *Type:* typing.List[str]

The security options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#security_opt Image#security_opt}

---

##### `session_id`<sup>Optional</sup> <a name="session_id" id="@cdktf/provider-docker.image.ImageBuild.property.sessionId"></a>

```python
session_id: str
```

- *Type:* str

Set an ID for the build session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#session_id Image#session_id}

---

##### `shm_size`<sup>Optional</sup> <a name="shm_size" id="@cdktf/provider-docker.image.ImageBuild.property.shmSize"></a>

```python
shm_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of /dev/shm in bytes. The size must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#shm_size Image#shm_size}

---

##### `squash`<sup>Optional</sup> <a name="squash" id="@cdktf/provider-docker.image.ImageBuild.property.squash"></a>

```python
squash: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true the new layers are squashed into a new image with a single new layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#squash Image#squash}

---

##### `suppress_output`<sup>Optional</sup> <a name="suppress_output" id="@cdktf/provider-docker.image.ImageBuild.property.suppressOutput"></a>

```python
suppress_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Suppress the build output and print image ID on success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#suppress_output Image#suppress_output}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-docker.image.ImageBuild.property.tag"></a>

```python
tag: typing.List[str]
```

- *Type:* typing.List[str]

Name and optionally a tag in the 'name:tag' format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#tag Image#tag}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-docker.image.ImageBuild.property.target"></a>

```python
target: str
```

- *Type:* str

Set the target build stage to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#target Image#target}

---

##### `ulimit`<sup>Optional</sup> <a name="ulimit" id="@cdktf/provider-docker.image.ImageBuild.property.ulimit"></a>

```python
ulimit: typing.Union[IResolvable, typing.List[ImageBuildUlimit]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>]]

ulimit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#ulimit Image#ulimit}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-docker.image.ImageBuild.property.version"></a>

```python
version: str
```

- *Type:* str

Version of the underlying builder to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#version Image#version}

---

### ImageBuildAuthConfig <a name="ImageBuildAuthConfig" id="@cdktf/provider-docker.image.ImageBuildAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import image

image.ImageBuildAuthConfig(
  host_name: str,
  auth: str = None,
  email: str = None,
  identity_token: str = None,
  password: str = None,
  registry_token: str = None,
  server_address: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.hostName">host_name</a></code> | <code>str</code> | hostname of the registry. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.auth">auth</a></code> | <code>str</code> | the auth token. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.email">email</a></code> | <code>str</code> | the user emal. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.identityToken">identity_token</a></code> | <code>str</code> | the identity token. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.password">password</a></code> | <code>str</code> | the registry password. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.registryToken">registry_token</a></code> | <code>str</code> | the registry token. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.serverAddress">server_address</a></code> | <code>str</code> | the server address. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.userName">user_name</a></code> | <code>str</code> | the registry user name. |

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

hostname of the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#host_name Image#host_name}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.auth"></a>

```python
auth: str
```

- *Type:* str

the auth token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#auth Image#auth}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.email"></a>

```python
email: str
```

- *Type:* str

the user emal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#email Image#email}

---

##### `identity_token`<sup>Optional</sup> <a name="identity_token" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.identityToken"></a>

```python
identity_token: str
```

- *Type:* str

the identity token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#identity_token Image#identity_token}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.password"></a>

```python
password: str
```

- *Type:* str

the registry password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#password Image#password}

---

##### `registry_token`<sup>Optional</sup> <a name="registry_token" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.registryToken"></a>

```python
registry_token: str
```

- *Type:* str

the registry token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#registry_token Image#registry_token}

---

##### `server_address`<sup>Optional</sup> <a name="server_address" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.serverAddress"></a>

```python
server_address: str
```

- *Type:* str

the server address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#server_address Image#server_address}

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

the registry user name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#user_name Image#user_name}

---

### ImageBuildSecrets <a name="ImageBuildSecrets" id="@cdktf/provider-docker.image.ImageBuildSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageBuildSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import image

image.ImageBuildSecrets(
  id: str,
  env: str = None,
  src: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecrets.property.id">id</a></code> | <code>str</code> | ID of the secret. By default, secrets are mounted to /run/secrets/<id>. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecrets.property.env">env</a></code> | <code>str</code> | Environment variable source of the secret. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecrets.property.src">src</a></code> | <code>str</code> | File source of the secret. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.ImageBuildSecrets.property.id"></a>

```python
id: str
```

- *Type:* str

ID of the secret. By default, secrets are mounted to /run/secrets/<id>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#id Image#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.image.ImageBuildSecrets.property.env"></a>

```python
env: str
```

- *Type:* str

Environment variable source of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#env Image#env}

---

##### `src`<sup>Optional</sup> <a name="src" id="@cdktf/provider-docker.image.ImageBuildSecrets.property.src"></a>

```python
src: str
```

- *Type:* str

File source of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#src Image#src}

---

### ImageBuildUlimit <a name="ImageBuildUlimit" id="@cdktf/provider-docker.image.ImageBuildUlimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageBuildUlimit.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import image

image.ImageBuildUlimit(
  hard: typing.Union[int, float],
  name: str,
  soft: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimit.property.hard">hard</a></code> | <code>typing.Union[int, float]</code> | soft limit. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimit.property.name">name</a></code> | <code>str</code> | type of ulimit, e.g. `nofile`. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimit.property.soft">soft</a></code> | <code>typing.Union[int, float]</code> | hard limit. |

---

##### `hard`<sup>Required</sup> <a name="hard" id="@cdktf/provider-docker.image.ImageBuildUlimit.property.hard"></a>

```python
hard: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

soft limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#hard Image#hard}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.image.ImageBuildUlimit.property.name"></a>

```python
name: str
```

- *Type:* str

type of ulimit, e.g. `nofile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#name Image#name}

---

##### `soft`<sup>Required</sup> <a name="soft" id="@cdktf/provider-docker.image.ImageBuildUlimit.property.soft"></a>

```python
soft: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

hard limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#soft Image#soft}

---

### ImageConfig <a name="ImageConfig" id="@cdktf/provider-docker.image.ImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import image

image.ImageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  build_attribute: ImageBuild = None,
  force_remove: typing.Union[bool, IResolvable] = None,
  keep_locally: typing.Union[bool, IResolvable] = None,
  platform: str = None,
  pull_triggers: typing.List[str] = None,
  timeouts: ImageTimeouts = None,
  triggers: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.name">name</a></code> | <code>str</code> | The name of the Docker image, including any tags or SHA256 repo digests. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.buildAttribute">build_attribute</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a></code> | build block. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.forceRemove">force_remove</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then the image is removed forcibly when the resource is destroyed. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.keepLocally">keep_locally</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then the Docker image won't be deleted on destroy operation. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.platform">platform</a></code> | <code>str</code> | The platform to use when pulling the image. Defaults to the platform of the current machine. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.pullTriggers">pull_triggers</a></code> | <code>typing.List[str]</code> | List of values which cause an image pull when changed. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | A map of arbitrary strings that, when changed, will force the `docker_image` resource to be replaced. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.image.ImageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.image.ImageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.image.ImageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.image.ImageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.image.ImageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.image.ImageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.image.ImageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.image.ImageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Docker image, including any tags or SHA256 repo digests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#name Image#name}

---

##### `build_attribute`<sup>Optional</sup> <a name="build_attribute" id="@cdktf/provider-docker.image.ImageConfig.property.buildAttribute"></a>

```python
build_attribute: ImageBuild
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a>

build block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#build Image#build}

---

##### `force_remove`<sup>Optional</sup> <a name="force_remove" id="@cdktf/provider-docker.image.ImageConfig.property.forceRemove"></a>

```python
force_remove: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the image is removed forcibly when the resource is destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#force_remove Image#force_remove}

---

##### `keep_locally`<sup>Optional</sup> <a name="keep_locally" id="@cdktf/provider-docker.image.ImageConfig.property.keepLocally"></a>

```python
keep_locally: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the Docker image won't be deleted on destroy operation.

If this is false, it will delete the image from the docker local storage on destroy operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#keep_locally Image#keep_locally}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-docker.image.ImageConfig.property.platform"></a>

```python
platform: str
```

- *Type:* str

The platform to use when pulling the image. Defaults to the platform of the current machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#platform Image#platform}

---

##### `pull_triggers`<sup>Optional</sup> <a name="pull_triggers" id="@cdktf/provider-docker.image.ImageConfig.property.pullTriggers"></a>

```python
pull_triggers: typing.List[str]
```

- *Type:* typing.List[str]

List of values which cause an image pull when changed.

This is used to store the image digest from the registry when using the [docker_registry_image](../data-sources/registry_image.md).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#pull_triggers Image#pull_triggers}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-docker.image.ImageConfig.property.timeouts"></a>

```python
timeouts: ImageTimeouts
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#timeouts Image#timeouts}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-docker.image.ImageConfig.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of arbitrary strings that, when changed, will force the `docker_image` resource to be replaced.

This can be used to rebuild an image when contents of source code folders change

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#triggers Image#triggers}

---

### ImageTimeouts <a name="ImageTimeouts" id="@cdktf/provider-docker.image.ImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import image

image.ImageTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#create Image#create}. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#delete Image#delete}. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#update Image#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-docker.image.ImageTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#create Image#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-docker.image.ImageTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#delete Image#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-docker.image.ImageTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#update Image#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImageBuildAuthConfigList <a name="ImageBuildAuthConfigList" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import image

image.ImageBuildAuthConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImageBuildAuthConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ImageBuildAuthConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>]]

---


### ImageBuildAuthConfigOutputReference <a name="ImageBuildAuthConfigOutputReference" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import image

image.ImageBuildAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetAuth">reset_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetIdentityToken">reset_identity_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetRegistryToken">reset_registry_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetServerAddress">reset_server_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth` <a name="reset_auth" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetAuth"></a>

```python
def reset_auth() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_identity_token` <a name="reset_identity_token" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetIdentityToken"></a>

```python
def reset_identity_token() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_registry_token` <a name="reset_registry_token" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetRegistryToken"></a>

```python
def reset_registry_token() -> None
```

##### `reset_server_address` <a name="reset_server_address" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetServerAddress"></a>

```python
def reset_server_address() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.authInput">auth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.identityTokenInput">identity_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.registryTokenInput">registry_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.serverAddressInput">server_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.auth">auth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.identityToken">identity_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.registryToken">registry_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.serverAddress">server_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_input`<sup>Optional</sup> <a name="auth_input" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.authInput"></a>

```python
auth_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `identity_token_input`<sup>Optional</sup> <a name="identity_token_input" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.identityTokenInput"></a>

```python
identity_token_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `registry_token_input`<sup>Optional</sup> <a name="registry_token_input" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.registryTokenInput"></a>

```python
registry_token_input: str
```

- *Type:* str

---

##### `server_address_input`<sup>Optional</sup> <a name="server_address_input" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.serverAddressInput"></a>

```python
server_address_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.auth"></a>

```python
auth: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `identity_token`<sup>Required</sup> <a name="identity_token" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.identityToken"></a>

```python
identity_token: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `registry_token`<sup>Required</sup> <a name="registry_token" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.registryToken"></a>

```python
registry_token: str
```

- *Type:* str

---

##### `server_address`<sup>Required</sup> <a name="server_address" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.serverAddress"></a>

```python
server_address: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ImageBuildAuthConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>]

---


### ImageBuildOutputReference <a name="ImageBuildOutputReference" id="@cdktf/provider-docker.image.ImageBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import image

image.ImageBuildOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.putAuthConfig">put_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.putSecrets">put_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.putUlimit">put_ulimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetAuthConfig">reset_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildArgs">reset_build_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildId">reset_build_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCacheFrom">reset_cache_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCgroupParent">reset_cgroup_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuPeriod">reset_cpu_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuQuota">reset_cpu_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuSetCpus">reset_cpu_set_cpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuSetMems">reset_cpu_set_mems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuShares">reset_cpu_shares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetDockerfile">reset_dockerfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetExtraHosts">reset_extra_hosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetForceRemove">reset_force_remove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetIsolation">reset_isolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetMemory">reset_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetMemorySwap">reset_memory_swap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetNetworkMode">reset_network_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetNoCache">reset_no_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetPlatform">reset_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetPullParent">reset_pull_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetRemoteContext">reset_remote_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetRemove">reset_remove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetSecrets">reset_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetSecurityOpt">reset_security_opt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetSessionId">reset_session_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetShmSize">reset_shm_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetSquash">reset_squash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetSuppressOutput">reset_suppress_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetUlimit">reset_ulimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.image.ImageBuildOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.image.ImageBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.image.ImageBuildOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auth_config` <a name="put_auth_config" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putAuthConfig"></a>

```python
def put_auth_config(
  value: typing.Union[IResolvable, typing.List[ImageBuildAuthConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putAuthConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>]]

---

##### `put_secrets` <a name="put_secrets" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putSecrets"></a>

```python
def put_secrets(
  value: typing.Union[IResolvable, typing.List[ImageBuildSecrets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putSecrets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>]]

---

##### `put_ulimit` <a name="put_ulimit" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putUlimit"></a>

```python
def put_ulimit(
  value: typing.Union[IResolvable, typing.List[ImageBuildUlimit]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putUlimit.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>]]

---

##### `reset_auth_config` <a name="reset_auth_config" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetAuthConfig"></a>

```python
def reset_auth_config() -> None
```

##### `reset_build_args` <a name="reset_build_args" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildArgs"></a>

```python
def reset_build_args() -> None
```

##### `reset_build_id` <a name="reset_build_id" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildId"></a>

```python
def reset_build_id() -> None
```

##### `reset_cache_from` <a name="reset_cache_from" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCacheFrom"></a>

```python
def reset_cache_from() -> None
```

##### `reset_cgroup_parent` <a name="reset_cgroup_parent" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCgroupParent"></a>

```python
def reset_cgroup_parent() -> None
```

##### `reset_cpu_period` <a name="reset_cpu_period" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuPeriod"></a>

```python
def reset_cpu_period() -> None
```

##### `reset_cpu_quota` <a name="reset_cpu_quota" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuQuota"></a>

```python
def reset_cpu_quota() -> None
```

##### `reset_cpu_set_cpus` <a name="reset_cpu_set_cpus" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuSetCpus"></a>

```python
def reset_cpu_set_cpus() -> None
```

##### `reset_cpu_set_mems` <a name="reset_cpu_set_mems" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuSetMems"></a>

```python
def reset_cpu_set_mems() -> None
```

##### `reset_cpu_shares` <a name="reset_cpu_shares" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuShares"></a>

```python
def reset_cpu_shares() -> None
```

##### `reset_dockerfile` <a name="reset_dockerfile" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetDockerfile"></a>

```python
def reset_dockerfile() -> None
```

##### `reset_extra_hosts` <a name="reset_extra_hosts" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetExtraHosts"></a>

```python
def reset_extra_hosts() -> None
```

##### `reset_force_remove` <a name="reset_force_remove" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetForceRemove"></a>

```python
def reset_force_remove() -> None
```

##### `reset_isolation` <a name="reset_isolation" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetIsolation"></a>

```python
def reset_isolation() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```

##### `reset_memory_swap` <a name="reset_memory_swap" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetMemorySwap"></a>

```python
def reset_memory_swap() -> None
```

##### `reset_network_mode` <a name="reset_network_mode" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetNetworkMode"></a>

```python
def reset_network_mode() -> None
```

##### `reset_no_cache` <a name="reset_no_cache" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetNoCache"></a>

```python
def reset_no_cache() -> None
```

##### `reset_platform` <a name="reset_platform" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetPlatform"></a>

```python
def reset_platform() -> None
```

##### `reset_pull_parent` <a name="reset_pull_parent" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetPullParent"></a>

```python
def reset_pull_parent() -> None
```

##### `reset_remote_context` <a name="reset_remote_context" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetRemoteContext"></a>

```python
def reset_remote_context() -> None
```

##### `reset_remove` <a name="reset_remove" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetRemove"></a>

```python
def reset_remove() -> None
```

##### `reset_secrets` <a name="reset_secrets" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSecrets"></a>

```python
def reset_secrets() -> None
```

##### `reset_security_opt` <a name="reset_security_opt" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSecurityOpt"></a>

```python
def reset_security_opt() -> None
```

##### `reset_session_id` <a name="reset_session_id" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSessionId"></a>

```python
def reset_session_id() -> None
```

##### `reset_shm_size` <a name="reset_shm_size" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetShmSize"></a>

```python
def reset_shm_size() -> None
```

##### `reset_squash` <a name="reset_squash" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSquash"></a>

```python
def reset_squash() -> None
```

##### `reset_suppress_output` <a name="reset_suppress_output" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSuppressOutput"></a>

```python
def reset_suppress_output() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_ulimit` <a name="reset_ulimit" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetUlimit"></a>

```python
def reset_ulimit() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.authConfig">auth_config</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList">ImageBuildAuthConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList">ImageBuildSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.ulimit">ulimit</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList">ImageBuildUlimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.authConfigInput">auth_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgsInput">build_args_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildIdInput">build_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cacheFromInput">cache_from_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cgroupParentInput">cgroup_parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.contextInput">context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuPeriodInput">cpu_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuQuotaInput">cpu_quota_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetCpusInput">cpu_set_cpus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetMemsInput">cpu_set_mems_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSharesInput">cpu_shares_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.dockerfileInput">dockerfile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.extraHostsInput">extra_hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.forceRemoveInput">force_remove_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.isolationInput">isolation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.labelInput">label_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.memoryInput">memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.memorySwapInput">memory_swap_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.networkModeInput">network_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.noCacheInput">no_cache_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.pullParentInput">pull_parent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.remoteContextInput">remote_context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.removeInput">remove_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.secretsInput">secrets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.securityOptInput">security_opt_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.sessionIdInput">session_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.shmSizeInput">shm_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.squashInput">squash_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.suppressOutputInput">suppress_output_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.tagInput">tag_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.ulimitInput">ulimit_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgs">build_args</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildId">build_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cacheFrom">cache_from</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cgroupParent">cgroup_parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.context">context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuPeriod">cpu_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuQuota">cpu_quota</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetCpus">cpu_set_cpus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetMems">cpu_set_mems</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuShares">cpu_shares</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.dockerfile">dockerfile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.extraHosts">extra_hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.forceRemove">force_remove</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.isolation">isolation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.label">label</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.memory">memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.memorySwap">memory_swap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.networkMode">network_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.noCache">no_cache</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.pullParent">pull_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.remoteContext">remote_context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.remove">remove</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.securityOpt">security_opt</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.sessionId">session_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.shmSize">shm_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.squash">squash</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.suppressOutput">suppress_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.tag">tag</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_config`<sup>Required</sup> <a name="auth_config" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.authConfig"></a>

```python
auth_config: ImageBuildAuthConfigList
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList">ImageBuildAuthConfigList</a>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.secrets"></a>

```python
secrets: ImageBuildSecretsList
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuildSecretsList">ImageBuildSecretsList</a>

---

##### `ulimit`<sup>Required</sup> <a name="ulimit" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.ulimit"></a>

```python
ulimit: ImageBuildUlimitList
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuildUlimitList">ImageBuildUlimitList</a>

---

##### `auth_config_input`<sup>Optional</sup> <a name="auth_config_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.authConfigInput"></a>

```python
auth_config_input: typing.Union[IResolvable, typing.List[ImageBuildAuthConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>]]

---

##### `build_args_input`<sup>Optional</sup> <a name="build_args_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgsInput"></a>

```python
build_args_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `build_id_input`<sup>Optional</sup> <a name="build_id_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildIdInput"></a>

```python
build_id_input: str
```

- *Type:* str

---

##### `cache_from_input`<sup>Optional</sup> <a name="cache_from_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cacheFromInput"></a>

```python
cache_from_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cgroup_parent_input`<sup>Optional</sup> <a name="cgroup_parent_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cgroupParentInput"></a>

```python
cgroup_parent_input: str
```

- *Type:* str

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.contextInput"></a>

```python
context_input: str
```

- *Type:* str

---

##### `cpu_period_input`<sup>Optional</sup> <a name="cpu_period_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuPeriodInput"></a>

```python
cpu_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_quota_input`<sup>Optional</sup> <a name="cpu_quota_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuQuotaInput"></a>

```python
cpu_quota_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_set_cpus_input`<sup>Optional</sup> <a name="cpu_set_cpus_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetCpusInput"></a>

```python
cpu_set_cpus_input: str
```

- *Type:* str

---

##### `cpu_set_mems_input`<sup>Optional</sup> <a name="cpu_set_mems_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetMemsInput"></a>

```python
cpu_set_mems_input: str
```

- *Type:* str

---

##### `cpu_shares_input`<sup>Optional</sup> <a name="cpu_shares_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSharesInput"></a>

```python
cpu_shares_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dockerfile_input`<sup>Optional</sup> <a name="dockerfile_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.dockerfileInput"></a>

```python
dockerfile_input: str
```

- *Type:* str

---

##### `extra_hosts_input`<sup>Optional</sup> <a name="extra_hosts_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.extraHostsInput"></a>

```python
extra_hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `force_remove_input`<sup>Optional</sup> <a name="force_remove_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.forceRemoveInput"></a>

```python
force_remove_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `isolation_input`<sup>Optional</sup> <a name="isolation_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.isolationInput"></a>

```python
isolation_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.labelInput"></a>

```python
label_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.memoryInput"></a>

```python
memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_swap_input`<sup>Optional</sup> <a name="memory_swap_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.memorySwapInput"></a>

```python
memory_swap_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_mode_input`<sup>Optional</sup> <a name="network_mode_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.networkModeInput"></a>

```python
network_mode_input: str
```

- *Type:* str

---

##### `no_cache_input`<sup>Optional</sup> <a name="no_cache_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.noCacheInput"></a>

```python
no_cache_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `pull_parent_input`<sup>Optional</sup> <a name="pull_parent_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.pullParentInput"></a>

```python
pull_parent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remote_context_input`<sup>Optional</sup> <a name="remote_context_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.remoteContextInput"></a>

```python
remote_context_input: str
```

- *Type:* str

---

##### `remove_input`<sup>Optional</sup> <a name="remove_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.removeInput"></a>

```python
remove_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secrets_input`<sup>Optional</sup> <a name="secrets_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.secretsInput"></a>

```python
secrets_input: typing.Union[IResolvable, typing.List[ImageBuildSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>]]

---

##### `security_opt_input`<sup>Optional</sup> <a name="security_opt_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.securityOptInput"></a>

```python
security_opt_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `session_id_input`<sup>Optional</sup> <a name="session_id_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.sessionIdInput"></a>

```python
session_id_input: str
```

- *Type:* str

---

##### `shm_size_input`<sup>Optional</sup> <a name="shm_size_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.shmSizeInput"></a>

```python
shm_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `squash_input`<sup>Optional</sup> <a name="squash_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.squashInput"></a>

```python
squash_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suppress_output_input`<sup>Optional</sup> <a name="suppress_output_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.suppressOutputInput"></a>

```python
suppress_output_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.tagInput"></a>

```python
tag_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `ulimit_input`<sup>Optional</sup> <a name="ulimit_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.ulimitInput"></a>

```python
ulimit_input: typing.Union[IResolvable, typing.List[ImageBuildUlimit]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>]]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `build_args`<sup>Required</sup> <a name="build_args" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgs"></a>

```python
build_args: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `build_id`<sup>Required</sup> <a name="build_id" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildId"></a>

```python
build_id: str
```

- *Type:* str

---

##### `cache_from`<sup>Required</sup> <a name="cache_from" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cacheFrom"></a>

```python
cache_from: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cgroup_parent`<sup>Required</sup> <a name="cgroup_parent" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cgroupParent"></a>

```python
cgroup_parent: str
```

- *Type:* str

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.context"></a>

```python
context: str
```

- *Type:* str

---

##### `cpu_period`<sup>Required</sup> <a name="cpu_period" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuPeriod"></a>

```python
cpu_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_quota`<sup>Required</sup> <a name="cpu_quota" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuQuota"></a>

```python
cpu_quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_set_cpus`<sup>Required</sup> <a name="cpu_set_cpus" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetCpus"></a>

```python
cpu_set_cpus: str
```

- *Type:* str

---

##### `cpu_set_mems`<sup>Required</sup> <a name="cpu_set_mems" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetMems"></a>

```python
cpu_set_mems: str
```

- *Type:* str

---

##### `cpu_shares`<sup>Required</sup> <a name="cpu_shares" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuShares"></a>

```python
cpu_shares: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dockerfile`<sup>Required</sup> <a name="dockerfile" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.dockerfile"></a>

```python
dockerfile: str
```

- *Type:* str

---

##### `extra_hosts`<sup>Required</sup> <a name="extra_hosts" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.extraHosts"></a>

```python
extra_hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `force_remove`<sup>Required</sup> <a name="force_remove" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.forceRemove"></a>

```python
force_remove: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `isolation`<sup>Required</sup> <a name="isolation" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.isolation"></a>

```python
isolation: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.label"></a>

```python
label: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.memory"></a>

```python
memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_swap`<sup>Required</sup> <a name="memory_swap" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.memorySwap"></a>

```python
memory_swap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_mode`<sup>Required</sup> <a name="network_mode" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.networkMode"></a>

```python
network_mode: str
```

- *Type:* str

---

##### `no_cache`<sup>Required</sup> <a name="no_cache" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.noCache"></a>

```python
no_cache: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `pull_parent`<sup>Required</sup> <a name="pull_parent" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.pullParent"></a>

```python
pull_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remote_context`<sup>Required</sup> <a name="remote_context" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.remoteContext"></a>

```python
remote_context: str
```

- *Type:* str

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.remove"></a>

```python
remove: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_opt`<sup>Required</sup> <a name="security_opt" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.securityOpt"></a>

```python
security_opt: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `session_id`<sup>Required</sup> <a name="session_id" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.sessionId"></a>

```python
session_id: str
```

- *Type:* str

---

##### `shm_size`<sup>Required</sup> <a name="shm_size" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.shmSize"></a>

```python
shm_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `squash`<sup>Required</sup> <a name="squash" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.squash"></a>

```python
squash: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suppress_output`<sup>Required</sup> <a name="suppress_output" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.suppressOutput"></a>

```python
suppress_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.tag"></a>

```python
tag: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.internalValue"></a>

```python
internal_value: ImageBuild
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a>

---


### ImageBuildSecretsList <a name="ImageBuildSecretsList" id="@cdktf/provider-docker.image.ImageBuildSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import image

image.ImageBuildSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.image.ImageBuildSecretsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.image.ImageBuildSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.image.ImageBuildSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.image.ImageBuildSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.image.ImageBuildSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.image.ImageBuildSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImageBuildSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.image.ImageBuildSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.image.ImageBuildSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.ImageBuildSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.image.ImageBuildSecretsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ImageBuildSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>]]

---


### ImageBuildSecretsOutputReference <a name="ImageBuildSecretsOutputReference" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import image

image.ImageBuildSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resetSrc">reset_src</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_env` <a name="reset_env" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_src` <a name="reset_src" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resetSrc"></a>

```python
def reset_src() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.envInput">env_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.srcInput">src_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.env">env</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.src">src</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.envInput"></a>

```python
env_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `src_input`<sup>Optional</sup> <a name="src_input" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.srcInput"></a>

```python
src_input: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.env"></a>

```python
env: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `src`<sup>Required</sup> <a name="src" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.src"></a>

```python
src: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ImageBuildSecrets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>]

---


### ImageBuildUlimitList <a name="ImageBuildUlimitList" id="@cdktf/provider-docker.image.ImageBuildUlimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import image

image.ImageBuildUlimitList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.image.ImageBuildUlimitList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.image.ImageBuildUlimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.image.ImageBuildUlimitList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.image.ImageBuildUlimitList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildUlimitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.image.ImageBuildUlimitList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.image.ImageBuildUlimitList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImageBuildUlimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.image.ImageBuildUlimitList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.image.ImageBuildUlimitList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.ImageBuildUlimitList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.image.ImageBuildUlimitList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ImageBuildUlimit]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>]]

---


### ImageBuildUlimitOutputReference <a name="ImageBuildUlimitOutputReference" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import image

image.ImageBuildUlimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.hardInput">hard_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.softInput">soft_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.hard">hard</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.soft">soft</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hard_input`<sup>Optional</sup> <a name="hard_input" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.hardInput"></a>

```python
hard_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `soft_input`<sup>Optional</sup> <a name="soft_input" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.softInput"></a>

```python
soft_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hard`<sup>Required</sup> <a name="hard" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.hard"></a>

```python
hard: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `soft`<sup>Required</sup> <a name="soft" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.soft"></a>

```python
soft: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ImageBuildUlimit]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>]

---


### ImageTimeoutsOutputReference <a name="ImageTimeoutsOutputReference" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import image

image.ImageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ImageTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a>]

---



