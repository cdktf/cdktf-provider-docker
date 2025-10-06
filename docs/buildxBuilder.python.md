# `buildxBuilder` Submodule <a name="`buildxBuilder` Submodule" id="@cdktf/provider-docker.buildxBuilder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BuildxBuilder <a name="BuildxBuilder" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder docker_buildx_builder}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilder(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  append: bool | IResolvable = None,
  bootstrap: bool | IResolvable = None,
  buildkit_config: str = None,
  buildkit_flags: str = None,
  docker_container: BuildxBuilderDockerContainer = None,
  driver: str = None,
  driver_options: typing.Mapping[str] = None,
  endpoint: str = None,
  id: str = None,
  kubernetes: BuildxBuilderKubernetes = None,
  name: str = None,
  node_attribute: str = None,
  platform: typing.List[str] = None,
  remote: BuildxBuilderRemote = None,
  use: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.append">append</a></code> | <code>bool \| cdktf.IResolvable</code> | Append a node to builder instead of changing it. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.bootstrap">bootstrap</a></code> | <code>bool \| cdktf.IResolvable</code> | Automatically boot the builder after creation. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.buildkitConfig">buildkit_config</a></code> | <code>str</code> | BuildKit daemon config file. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.buildkitFlags">buildkit_flags</a></code> | <code>str</code> | BuildKit flags to set for the builder. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.dockerContainer">docker_container</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | docker_container block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.driver">driver</a></code> | <code>str</code> | The driver to use for the Buildx builder (e.g., docker-container, kubernetes). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.driverOptions">driver_options</a></code> | <code>typing.Mapping[str]</code> | Additional options for the Buildx driver in the form of `key=value,...`. These options are driver-specific. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.endpoint">endpoint</a></code> | <code>str</code> | The endpoint or context to use for the Buildx builder, where context is the name of a context from docker context ls and endpoint is the address for Docker socket (eg. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#id BuildxBuilder#id}. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Buildx builder. IF not specified, a random name will be generated. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.nodeAttribute">node_attribute</a></code> | <code>str</code> | Create/modify node with given name. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.platform">platform</a></code> | <code>typing.List[str]</code> | Fixed platforms for current node. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.remote">remote</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | remote block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.use">use</a></code> | <code>bool \| cdktf.IResolvable</code> | Set the current builder instance as the default for the current context. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `append`<sup>Optional</sup> <a name="append" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.append"></a>

- *Type:* bool | cdktf.IResolvable

Append a node to builder instead of changing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#append BuildxBuilder#append}

---

##### `bootstrap`<sup>Optional</sup> <a name="bootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.bootstrap"></a>

- *Type:* bool | cdktf.IResolvable

Automatically boot the builder after creation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#bootstrap BuildxBuilder#bootstrap}

---

##### `buildkit_config`<sup>Optional</sup> <a name="buildkit_config" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.buildkitConfig"></a>

- *Type:* str

BuildKit daemon config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#buildkit_config BuildxBuilder#buildkit_config}

---

##### `buildkit_flags`<sup>Optional</sup> <a name="buildkit_flags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.buildkitFlags"></a>

- *Type:* str

BuildKit flags to set for the builder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#buildkit_flags BuildxBuilder#buildkit_flags}

---

##### `docker_container`<sup>Optional</sup> <a name="docker_container" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.dockerContainer"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

docker_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#docker_container BuildxBuilder#docker_container}

---

##### `driver`<sup>Optional</sup> <a name="driver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.driver"></a>

- *Type:* str

The driver to use for the Buildx builder (e.g., docker-container, kubernetes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#driver BuildxBuilder#driver}

---

##### `driver_options`<sup>Optional</sup> <a name="driver_options" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.driverOptions"></a>

- *Type:* typing.Mapping[str]

Additional options for the Buildx driver in the form of `key=value,...`. These options are driver-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#driver_options BuildxBuilder#driver_options}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.endpoint"></a>

- *Type:* str

The endpoint or context to use for the Buildx builder, where context is the name of a context from docker context ls and endpoint is the address for Docker socket (eg.

DOCKER_HOST value). By default, the current Docker configuration is used for determining the context/endpoint value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#endpoint BuildxBuilder#endpoint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#id BuildxBuilder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.kubernetes"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#kubernetes BuildxBuilder#kubernetes}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.name"></a>

- *Type:* str

The name of the Buildx builder. IF not specified, a random name will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#name BuildxBuilder#name}

---

##### `node_attribute`<sup>Optional</sup> <a name="node_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.nodeAttribute"></a>

- *Type:* str

Create/modify node with given name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#node BuildxBuilder#node}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.platform"></a>

- *Type:* typing.List[str]

Fixed platforms for current node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#platform BuildxBuilder#platform}

---

##### `remote`<sup>Optional</sup> <a name="remote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.remote"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

remote block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#remote BuildxBuilder#remote}

---

##### `use`<sup>Optional</sup> <a name="use" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.use"></a>

- *Type:* bool | cdktf.IResolvable

Set the current builder instance as the default for the current context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#use BuildxBuilder#use}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer">put_docker_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes">put_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote">put_remote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetAppend">reset_append</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBootstrap">reset_bootstrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBuildkitConfig">reset_buildkit_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBuildkitFlags">reset_buildkit_flags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDockerContainer">reset_docker_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDriver">reset_driver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDriverOptions">reset_driver_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetKubernetes">reset_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetNodeAttribute">reset_node_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetPlatform">reset_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetRemote">reset_remote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetUse">reset_use</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_docker_container` <a name="put_docker_container" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer"></a>

```python
def put_docker_container(
  cgroup_parent: str = None,
  cpu_period: str = None,
  cpu_quota: str = None,
  cpuset_cpus: str = None,
  cpuset_mems: str = None,
  cpu_shares: str = None,
  default_load: bool | IResolvable = None,
  env: typing.Mapping[str] = None,
  image: str = None,
  memory: str = None,
  memory_swap: str = None,
  network: str = None,
  restart_policy: str = None
) -> None
```

###### `cgroup_parent`<sup>Optional</sup> <a name="cgroup_parent" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.cgroupParent"></a>

- *Type:* str

Sets the cgroup parent of the container if Docker is using the "cgroupfs" driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cgroup_parent BuildxBuilder#cgroup_parent}

---

###### `cpu_period`<sup>Optional</sup> <a name="cpu_period" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.cpuPeriod"></a>

- *Type:* str

Sets the CPU CFS scheduler period for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpu_period BuildxBuilder#cpu_period}

---

###### `cpu_quota`<sup>Optional</sup> <a name="cpu_quota" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.cpuQuota"></a>

- *Type:* str

Imposes a CPU CFS quota on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpu_quota BuildxBuilder#cpu_quota}

---

###### `cpuset_cpus`<sup>Optional</sup> <a name="cpuset_cpus" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.cpusetCpus"></a>

- *Type:* str

Limits the set of CPU cores the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpuset_cpus BuildxBuilder#cpuset_cpus}

---

###### `cpuset_mems`<sup>Optional</sup> <a name="cpuset_mems" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.cpusetMems"></a>

- *Type:* str

Limits the set of CPU memory nodes the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpuset_mems BuildxBuilder#cpuset_mems}

---

###### `cpu_shares`<sup>Optional</sup> <a name="cpu_shares" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.cpuShares"></a>

- *Type:* str

Configures CPU shares (relative weight) of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpu_shares BuildxBuilder#cpu_shares}

---

###### `default_load`<sup>Optional</sup> <a name="default_load" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.defaultLoad"></a>

- *Type:* bool | cdktf.IResolvable

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

###### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.env"></a>

- *Type:* typing.Mapping[str]

Sets environment variables in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#env BuildxBuilder#env}

---

###### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.image"></a>

- *Type:* str

Sets the BuildKit image to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#image BuildxBuilder#image}

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.memory"></a>

- *Type:* str

Sets the amount of memory the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

###### `memory_swap`<sup>Optional</sup> <a name="memory_swap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.memorySwap"></a>

- *Type:* str

Sets the memory swap limit for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#memory_swap BuildxBuilder#memory_swap}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.network"></a>

- *Type:* str

Sets the network mode for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#network BuildxBuilder#network}

---

###### `restart_policy`<sup>Optional</sup> <a name="restart_policy" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.restartPolicy"></a>

- *Type:* str

Sets the container's restart policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#restart_policy BuildxBuilder#restart_policy}

---

##### `put_kubernetes` <a name="put_kubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes"></a>

```python
def put_kubernetes(
  annotations: str = None,
  default_load: bool | IResolvable = None,
  image: str = None,
  labels: str = None,
  limits: BuildxBuilderKubernetesLimits = None,
  loadbalance: str = None,
  namespace: str = None,
  nodeselector: str = None,
  qemu: BuildxBuilderKubernetesQemu = None,
  replicas: typing.Union[int, float] = None,
  requests: BuildxBuilderKubernetesRequests = None,
  rootless: bool | IResolvable = None,
  schedulername: str = None,
  serviceaccount: str = None,
  timeout: str = None,
  tolerations: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.annotations"></a>

- *Type:* str

Sets additional annotations on the deployments and pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#annotations BuildxBuilder#annotations}

---

###### `default_load`<sup>Optional</sup> <a name="default_load" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.defaultLoad"></a>

- *Type:* bool | cdktf.IResolvable

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

###### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.image"></a>

- *Type:* str

Sets the image to use for running BuildKit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#image BuildxBuilder#image}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.labels"></a>

- *Type:* str

Sets additional labels on the deployments and pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#labels BuildxBuilder#labels}

---

###### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.limits"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#limits BuildxBuilder#limits}

---

###### `loadbalance`<sup>Optional</sup> <a name="loadbalance" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.loadbalance"></a>

- *Type:* str

Load-balancing strategy (sticky or random).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#loadbalance BuildxBuilder#loadbalance}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.namespace"></a>

- *Type:* str

Sets the Kubernetes namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#namespace BuildxBuilder#namespace}

---

###### `nodeselector`<sup>Optional</sup> <a name="nodeselector" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.nodeselector"></a>

- *Type:* str

Sets the pod's nodeSelector label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#nodeselector BuildxBuilder#nodeselector}

---

###### `qemu`<sup>Optional</sup> <a name="qemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.qemu"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

qemu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#qemu BuildxBuilder#qemu}

---

###### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.replicas"></a>

- *Type:* typing.Union[int, float]

Sets the number of Pod replicas to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#replicas BuildxBuilder#replicas}

---

###### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.requests"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

requests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#requests BuildxBuilder#requests}

---

###### `rootless`<sup>Optional</sup> <a name="rootless" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.rootless"></a>

- *Type:* bool | cdktf.IResolvable

Run the container as a non-root user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#rootless BuildxBuilder#rootless}

---

###### `schedulername`<sup>Optional</sup> <a name="schedulername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.schedulername"></a>

- *Type:* str

Sets the scheduler responsible for scheduling the pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#schedulername BuildxBuilder#schedulername}

---

###### `serviceaccount`<sup>Optional</sup> <a name="serviceaccount" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.serviceaccount"></a>

- *Type:* str

Sets the pod's serviceAccountName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#serviceaccount BuildxBuilder#serviceaccount}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.timeout"></a>

- *Type:* str

Set the timeout limit for pod provisioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#timeout BuildxBuilder#timeout}

---

###### `tolerations`<sup>Optional</sup> <a name="tolerations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.tolerations"></a>

- *Type:* str

Configures the pod's taint toleration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#tolerations BuildxBuilder#tolerations}

---

##### `put_remote` <a name="put_remote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote"></a>

```python
def put_remote(
  cacert: str = None,
  cert: str = None,
  default_load: bool | IResolvable = None,
  key: str = None,
  servername: str = None
) -> None
```

###### `cacert`<sup>Optional</sup> <a name="cacert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote.parameter.cacert"></a>

- *Type:* str

Absolute path to the TLS certificate authority used for validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cacert BuildxBuilder#cacert}

---

###### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote.parameter.cert"></a>

- *Type:* str

Absolute path to the TLS client certificate to present to buildkitd.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cert BuildxBuilder#cert}

---

###### `default_load`<sup>Optional</sup> <a name="default_load" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote.parameter.defaultLoad"></a>

- *Type:* bool | cdktf.IResolvable

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote.parameter.key"></a>

- *Type:* str

Sets the TLS client key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#key BuildxBuilder#key}

---

###### `servername`<sup>Optional</sup> <a name="servername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote.parameter.servername"></a>

- *Type:* str

TLS server name used in requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#servername BuildxBuilder#servername}

---

##### `reset_append` <a name="reset_append" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetAppend"></a>

```python
def reset_append() -> None
```

##### `reset_bootstrap` <a name="reset_bootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBootstrap"></a>

```python
def reset_bootstrap() -> None
```

##### `reset_buildkit_config` <a name="reset_buildkit_config" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBuildkitConfig"></a>

```python
def reset_buildkit_config() -> None
```

##### `reset_buildkit_flags` <a name="reset_buildkit_flags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBuildkitFlags"></a>

```python
def reset_buildkit_flags() -> None
```

##### `reset_docker_container` <a name="reset_docker_container" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDockerContainer"></a>

```python
def reset_docker_container() -> None
```

##### `reset_driver` <a name="reset_driver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDriver"></a>

```python
def reset_driver() -> None
```

##### `reset_driver_options` <a name="reset_driver_options" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDriverOptions"></a>

```python
def reset_driver_options() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kubernetes` <a name="reset_kubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetKubernetes"></a>

```python
def reset_kubernetes() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_node_attribute` <a name="reset_node_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetNodeAttribute"></a>

```python
def reset_node_attribute() -> None
```

##### `reset_platform` <a name="reset_platform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetPlatform"></a>

```python
def reset_platform() -> None
```

##### `reset_remote` <a name="reset_remote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetRemote"></a>

```python
def reset_remote() -> None
```

##### `reset_use` <a name="reset_use" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetUse"></a>

```python
def reset_use() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BuildxBuilder resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isConstruct"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilder.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilder.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilder.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilder.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BuildxBuilder resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BuildxBuilder to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BuildxBuilder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BuildxBuilder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainer">docker_container</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference">BuildxBuilderDockerContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference">BuildxBuilderKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remote">remote</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference">BuildxBuilderRemoteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.appendInput">append_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrapInput">bootstrap_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfigInput">buildkit_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlagsInput">buildkit_flags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainerInput">docker_container_input</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverInput">driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptionsInput">driver_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetesInput">kubernetes_input</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttributeInput">node_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platformInput">platform_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remoteInput">remote_input</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.useInput">use_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.append">append</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrap">bootstrap</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfig">buildkit_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlags">buildkit_flags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driver">driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptions">driver_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttribute">node_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platform">platform</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.use">use</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `docker_container`<sup>Required</sup> <a name="docker_container" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainer"></a>

```python
docker_container: BuildxBuilderDockerContainerOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference">BuildxBuilderDockerContainerOutputReference</a>

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetes"></a>

```python
kubernetes: BuildxBuilderKubernetesOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference">BuildxBuilderKubernetesOutputReference</a>

---

##### `remote`<sup>Required</sup> <a name="remote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remote"></a>

```python
remote: BuildxBuilderRemoteOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference">BuildxBuilderRemoteOutputReference</a>

---

##### `append_input`<sup>Optional</sup> <a name="append_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.appendInput"></a>

```python
append_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `bootstrap_input`<sup>Optional</sup> <a name="bootstrap_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrapInput"></a>

```python
bootstrap_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `buildkit_config_input`<sup>Optional</sup> <a name="buildkit_config_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfigInput"></a>

```python
buildkit_config_input: str
```

- *Type:* str

---

##### `buildkit_flags_input`<sup>Optional</sup> <a name="buildkit_flags_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlagsInput"></a>

```python
buildkit_flags_input: str
```

- *Type:* str

---

##### `docker_container_input`<sup>Optional</sup> <a name="docker_container_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainerInput"></a>

```python
docker_container_input: BuildxBuilderDockerContainer
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

---

##### `driver_input`<sup>Optional</sup> <a name="driver_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverInput"></a>

```python
driver_input: str
```

- *Type:* str

---

##### `driver_options_input`<sup>Optional</sup> <a name="driver_options_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptionsInput"></a>

```python
driver_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kubernetes_input`<sup>Optional</sup> <a name="kubernetes_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetesInput"></a>

```python
kubernetes_input: BuildxBuilderKubernetes
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_attribute_input`<sup>Optional</sup> <a name="node_attribute_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttributeInput"></a>

```python
node_attribute_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platformInput"></a>

```python
platform_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `remote_input`<sup>Optional</sup> <a name="remote_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remoteInput"></a>

```python
remote_input: BuildxBuilderRemote
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

---

##### `use_input`<sup>Optional</sup> <a name="use_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.useInput"></a>

```python
use_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `append`<sup>Required</sup> <a name="append" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.append"></a>

```python
append: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `bootstrap`<sup>Required</sup> <a name="bootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrap"></a>

```python
bootstrap: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `buildkit_config`<sup>Required</sup> <a name="buildkit_config" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfig"></a>

```python
buildkit_config: str
```

- *Type:* str

---

##### `buildkit_flags`<sup>Required</sup> <a name="buildkit_flags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlags"></a>

```python
buildkit_flags: str
```

- *Type:* str

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driver"></a>

```python
driver: str
```

- *Type:* str

---

##### `driver_options`<sup>Required</sup> <a name="driver_options" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptions"></a>

```python
driver_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_attribute`<sup>Required</sup> <a name="node_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttribute"></a>

```python
node_attribute: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platform"></a>

```python
platform: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.use"></a>

```python
use: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BuildxBuilderConfig <a name="BuildxBuilderConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  append: bool | IResolvable = None,
  bootstrap: bool | IResolvable = None,
  buildkit_config: str = None,
  buildkit_flags: str = None,
  docker_container: BuildxBuilderDockerContainer = None,
  driver: str = None,
  driver_options: typing.Mapping[str] = None,
  endpoint: str = None,
  id: str = None,
  kubernetes: BuildxBuilderKubernetes = None,
  name: str = None,
  node_attribute: str = None,
  platform: typing.List[str] = None,
  remote: BuildxBuilderRemote = None,
  use: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.append">append</a></code> | <code>bool \| cdktf.IResolvable</code> | Append a node to builder instead of changing it. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.bootstrap">bootstrap</a></code> | <code>bool \| cdktf.IResolvable</code> | Automatically boot the builder after creation. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitConfig">buildkit_config</a></code> | <code>str</code> | BuildKit daemon config file. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitFlags">buildkit_flags</a></code> | <code>str</code> | BuildKit flags to set for the builder. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dockerContainer">docker_container</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | docker_container block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driver">driver</a></code> | <code>str</code> | The driver to use for the Buildx builder (e.g., docker-container, kubernetes). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driverOptions">driver_options</a></code> | <code>typing.Mapping[str]</code> | Additional options for the Buildx driver in the form of `key=value,...`. These options are driver-specific. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.endpoint">endpoint</a></code> | <code>str</code> | The endpoint or context to use for the Buildx builder, where context is the name of a context from docker context ls and endpoint is the address for Docker socket (eg. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#id BuildxBuilder#id}. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.name">name</a></code> | <code>str</code> | The name of the Buildx builder. IF not specified, a random name will be generated. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.nodeAttribute">node_attribute</a></code> | <code>str</code> | Create/modify node with given name. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.platform">platform</a></code> | <code>typing.List[str]</code> | Fixed platforms for current node. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.remote">remote</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | remote block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.use">use</a></code> | <code>bool \| cdktf.IResolvable</code> | Set the current builder instance as the default for the current context. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `append`<sup>Optional</sup> <a name="append" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.append"></a>

```python
append: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Append a node to builder instead of changing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#append BuildxBuilder#append}

---

##### `bootstrap`<sup>Optional</sup> <a name="bootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.bootstrap"></a>

```python
bootstrap: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Automatically boot the builder after creation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#bootstrap BuildxBuilder#bootstrap}

---

##### `buildkit_config`<sup>Optional</sup> <a name="buildkit_config" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitConfig"></a>

```python
buildkit_config: str
```

- *Type:* str

BuildKit daemon config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#buildkit_config BuildxBuilder#buildkit_config}

---

##### `buildkit_flags`<sup>Optional</sup> <a name="buildkit_flags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitFlags"></a>

```python
buildkit_flags: str
```

- *Type:* str

BuildKit flags to set for the builder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#buildkit_flags BuildxBuilder#buildkit_flags}

---

##### `docker_container`<sup>Optional</sup> <a name="docker_container" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dockerContainer"></a>

```python
docker_container: BuildxBuilderDockerContainer
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

docker_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#docker_container BuildxBuilder#docker_container}

---

##### `driver`<sup>Optional</sup> <a name="driver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driver"></a>

```python
driver: str
```

- *Type:* str

The driver to use for the Buildx builder (e.g., docker-container, kubernetes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#driver BuildxBuilder#driver}

---

##### `driver_options`<sup>Optional</sup> <a name="driver_options" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driverOptions"></a>

```python
driver_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Additional options for the Buildx driver in the form of `key=value,...`. These options are driver-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#driver_options BuildxBuilder#driver_options}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

The endpoint or context to use for the Buildx builder, where context is the name of a context from docker context ls and endpoint is the address for Docker socket (eg.

DOCKER_HOST value). By default, the current Docker configuration is used for determining the context/endpoint value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#endpoint BuildxBuilder#endpoint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#id BuildxBuilder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.kubernetes"></a>

```python
kubernetes: BuildxBuilderKubernetes
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#kubernetes BuildxBuilder#kubernetes}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Buildx builder. IF not specified, a random name will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#name BuildxBuilder#name}

---

##### `node_attribute`<sup>Optional</sup> <a name="node_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.nodeAttribute"></a>

```python
node_attribute: str
```

- *Type:* str

Create/modify node with given name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#node BuildxBuilder#node}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.platform"></a>

```python
platform: typing.List[str]
```

- *Type:* typing.List[str]

Fixed platforms for current node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#platform BuildxBuilder#platform}

---

##### `remote`<sup>Optional</sup> <a name="remote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.remote"></a>

```python
remote: BuildxBuilderRemote
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

remote block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#remote BuildxBuilder#remote}

---

##### `use`<sup>Optional</sup> <a name="use" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.use"></a>

```python
use: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Set the current builder instance as the default for the current context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#use BuildxBuilder#use}

---

### BuildxBuilderDockerContainer <a name="BuildxBuilderDockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilderDockerContainer(
  cgroup_parent: str = None,
  cpu_period: str = None,
  cpu_quota: str = None,
  cpuset_cpus: str = None,
  cpuset_mems: str = None,
  cpu_shares: str = None,
  default_load: bool | IResolvable = None,
  env: typing.Mapping[str] = None,
  image: str = None,
  memory: str = None,
  memory_swap: str = None,
  network: str = None,
  restart_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cgroupParent">cgroup_parent</a></code> | <code>str</code> | Sets the cgroup parent of the container if Docker is using the "cgroupfs" driver. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuPeriod">cpu_period</a></code> | <code>str</code> | Sets the CPU CFS scheduler period for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuQuota">cpu_quota</a></code> | <code>str</code> | Imposes a CPU CFS quota on the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetCpus">cpuset_cpus</a></code> | <code>str</code> | Limits the set of CPU cores the container can use. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetMems">cpuset_mems</a></code> | <code>str</code> | Limits the set of CPU memory nodes the container can use. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuShares">cpu_shares</a></code> | <code>str</code> | Configures CPU shares (relative weight) of the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.defaultLoad">default_load</a></code> | <code>bool \| cdktf.IResolvable</code> | Automatically load images to the Docker Engine image store. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.env">env</a></code> | <code>typing.Mapping[str]</code> | Sets environment variables in the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.image">image</a></code> | <code>str</code> | Sets the BuildKit image to use for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memory">memory</a></code> | <code>str</code> | Sets the amount of memory the container can use. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memorySwap">memory_swap</a></code> | <code>str</code> | Sets the memory swap limit for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.network">network</a></code> | <code>str</code> | Sets the network mode for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.restartPolicy">restart_policy</a></code> | <code>str</code> | Sets the container's restart policy. |

---

##### `cgroup_parent`<sup>Optional</sup> <a name="cgroup_parent" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cgroupParent"></a>

```python
cgroup_parent: str
```

- *Type:* str

Sets the cgroup parent of the container if Docker is using the "cgroupfs" driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cgroup_parent BuildxBuilder#cgroup_parent}

---

##### `cpu_period`<sup>Optional</sup> <a name="cpu_period" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuPeriod"></a>

```python
cpu_period: str
```

- *Type:* str

Sets the CPU CFS scheduler period for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpu_period BuildxBuilder#cpu_period}

---

##### `cpu_quota`<sup>Optional</sup> <a name="cpu_quota" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuQuota"></a>

```python
cpu_quota: str
```

- *Type:* str

Imposes a CPU CFS quota on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpu_quota BuildxBuilder#cpu_quota}

---

##### `cpuset_cpus`<sup>Optional</sup> <a name="cpuset_cpus" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetCpus"></a>

```python
cpuset_cpus: str
```

- *Type:* str

Limits the set of CPU cores the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpuset_cpus BuildxBuilder#cpuset_cpus}

---

##### `cpuset_mems`<sup>Optional</sup> <a name="cpuset_mems" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetMems"></a>

```python
cpuset_mems: str
```

- *Type:* str

Limits the set of CPU memory nodes the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpuset_mems BuildxBuilder#cpuset_mems}

---

##### `cpu_shares`<sup>Optional</sup> <a name="cpu_shares" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuShares"></a>

```python
cpu_shares: str
```

- *Type:* str

Configures CPU shares (relative weight) of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpu_shares BuildxBuilder#cpu_shares}

---

##### `default_load`<sup>Optional</sup> <a name="default_load" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.defaultLoad"></a>

```python
default_load: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.env"></a>

```python
env: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Sets environment variables in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#env BuildxBuilder#env}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.image"></a>

```python
image: str
```

- *Type:* str

Sets the BuildKit image to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#image BuildxBuilder#image}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memory"></a>

```python
memory: str
```

- *Type:* str

Sets the amount of memory the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

##### `memory_swap`<sup>Optional</sup> <a name="memory_swap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memorySwap"></a>

```python
memory_swap: str
```

- *Type:* str

Sets the memory swap limit for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#memory_swap BuildxBuilder#memory_swap}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.network"></a>

```python
network: str
```

- *Type:* str

Sets the network mode for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#network BuildxBuilder#network}

---

##### `restart_policy`<sup>Optional</sup> <a name="restart_policy" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.restartPolicy"></a>

```python
restart_policy: str
```

- *Type:* str

Sets the container's restart policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#restart_policy BuildxBuilder#restart_policy}

---

### BuildxBuilderKubernetes <a name="BuildxBuilderKubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilderKubernetes(
  annotations: str = None,
  default_load: bool | IResolvable = None,
  image: str = None,
  labels: str = None,
  limits: BuildxBuilderKubernetesLimits = None,
  loadbalance: str = None,
  namespace: str = None,
  nodeselector: str = None,
  qemu: BuildxBuilderKubernetesQemu = None,
  replicas: typing.Union[int, float] = None,
  requests: BuildxBuilderKubernetesRequests = None,
  rootless: bool | IResolvable = None,
  schedulername: str = None,
  serviceaccount: str = None,
  timeout: str = None,
  tolerations: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.annotations">annotations</a></code> | <code>str</code> | Sets additional annotations on the deployments and pods. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.defaultLoad">default_load</a></code> | <code>bool \| cdktf.IResolvable</code> | Automatically load images to the Docker Engine image store. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.image">image</a></code> | <code>str</code> | Sets the image to use for running BuildKit. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.labels">labels</a></code> | <code>str</code> | Sets additional labels on the deployments and pods. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.loadbalance">loadbalance</a></code> | <code>str</code> | Load-balancing strategy (sticky or random). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.namespace">namespace</a></code> | <code>str</code> | Sets the Kubernetes namespace. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.nodeselector">nodeselector</a></code> | <code>str</code> | Sets the pod's nodeSelector label(s). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.qemu">qemu</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a></code> | qemu block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.replicas">replicas</a></code> | <code>typing.Union[int, float]</code> | Sets the number of Pod replicas to create. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.requests">requests</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a></code> | requests block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.rootless">rootless</a></code> | <code>bool \| cdktf.IResolvable</code> | Run the container as a non-root user. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.schedulername">schedulername</a></code> | <code>str</code> | Sets the scheduler responsible for scheduling the pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.serviceaccount">serviceaccount</a></code> | <code>str</code> | Sets the pod's serviceAccountName. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.timeout">timeout</a></code> | <code>str</code> | Set the timeout limit for pod provisioning. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.tolerations">tolerations</a></code> | <code>str</code> | Configures the pod's taint toleration. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.annotations"></a>

```python
annotations: str
```

- *Type:* str

Sets additional annotations on the deployments and pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#annotations BuildxBuilder#annotations}

---

##### `default_load`<sup>Optional</sup> <a name="default_load" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.defaultLoad"></a>

```python
default_load: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.image"></a>

```python
image: str
```

- *Type:* str

Sets the image to use for running BuildKit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#image BuildxBuilder#image}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.labels"></a>

```python
labels: str
```

- *Type:* str

Sets additional labels on the deployments and pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#labels BuildxBuilder#labels}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.limits"></a>

```python
limits: BuildxBuilderKubernetesLimits
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#limits BuildxBuilder#limits}

---

##### `loadbalance`<sup>Optional</sup> <a name="loadbalance" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.loadbalance"></a>

```python
loadbalance: str
```

- *Type:* str

Load-balancing strategy (sticky or random).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#loadbalance BuildxBuilder#loadbalance}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Sets the Kubernetes namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#namespace BuildxBuilder#namespace}

---

##### `nodeselector`<sup>Optional</sup> <a name="nodeselector" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.nodeselector"></a>

```python
nodeselector: str
```

- *Type:* str

Sets the pod's nodeSelector label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#nodeselector BuildxBuilder#nodeselector}

---

##### `qemu`<sup>Optional</sup> <a name="qemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.qemu"></a>

```python
qemu: BuildxBuilderKubernetesQemu
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

qemu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#qemu BuildxBuilder#qemu}

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.replicas"></a>

```python
replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets the number of Pod replicas to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#replicas BuildxBuilder#replicas}

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.requests"></a>

```python
requests: BuildxBuilderKubernetesRequests
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

requests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#requests BuildxBuilder#requests}

---

##### `rootless`<sup>Optional</sup> <a name="rootless" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.rootless"></a>

```python
rootless: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Run the container as a non-root user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#rootless BuildxBuilder#rootless}

---

##### `schedulername`<sup>Optional</sup> <a name="schedulername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.schedulername"></a>

```python
schedulername: str
```

- *Type:* str

Sets the scheduler responsible for scheduling the pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#schedulername BuildxBuilder#schedulername}

---

##### `serviceaccount`<sup>Optional</sup> <a name="serviceaccount" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.serviceaccount"></a>

```python
serviceaccount: str
```

- *Type:* str

Sets the pod's serviceAccountName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#serviceaccount BuildxBuilder#serviceaccount}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Set the timeout limit for pod provisioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#timeout BuildxBuilder#timeout}

---

##### `tolerations`<sup>Optional</sup> <a name="tolerations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.tolerations"></a>

```python
tolerations: str
```

- *Type:* str

Configures the pod's taint toleration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#tolerations BuildxBuilder#tolerations}

---

### BuildxBuilderKubernetesLimits <a name="BuildxBuilderKubernetesLimits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilderKubernetesLimits(
  cpu: str = None,
  ephemeral_storage: str = None,
  memory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.cpu">cpu</a></code> | <code>str</code> | CPU limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.ephemeralStorage">ephemeral_storage</a></code> | <code>str</code> | Ephemeral storage limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.memory">memory</a></code> | <code>str</code> | Memory limit for the Kubernetes pod. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

CPU limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpu BuildxBuilder#cpu}

---

##### `ephemeral_storage`<sup>Optional</sup> <a name="ephemeral_storage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.ephemeralStorage"></a>

```python
ephemeral_storage: str
```

- *Type:* str

Ephemeral storage limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#ephemeral_storage BuildxBuilder#ephemeral_storage}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.memory"></a>

```python
memory: str
```

- *Type:* str

Memory limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

### BuildxBuilderKubernetesQemu <a name="BuildxBuilderKubernetesQemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilderKubernetesQemu(
  image: str = None,
  install: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.image">image</a></code> | <code>str</code> | Sets the QEMU emulation image. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.install">install</a></code> | <code>bool \| cdktf.IResolvable</code> | Install QEMU emulation for multi-platform support. |

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.image"></a>

```python
image: str
```

- *Type:* str

Sets the QEMU emulation image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#image BuildxBuilder#image}

---

##### `install`<sup>Optional</sup> <a name="install" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.install"></a>

```python
install: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Install QEMU emulation for multi-platform support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#install BuildxBuilder#install}

---

### BuildxBuilderKubernetesRequests <a name="BuildxBuilderKubernetesRequests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilderKubernetesRequests(
  cpu: str = None,
  ephemeral_storage: str = None,
  memory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.cpu">cpu</a></code> | <code>str</code> | CPU limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.ephemeralStorage">ephemeral_storage</a></code> | <code>str</code> | Ephemeral storage limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.memory">memory</a></code> | <code>str</code> | Memory limit for the Kubernetes pod. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

CPU limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpu BuildxBuilder#cpu}

---

##### `ephemeral_storage`<sup>Optional</sup> <a name="ephemeral_storage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.ephemeralStorage"></a>

```python
ephemeral_storage: str
```

- *Type:* str

Ephemeral storage limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#ephemeral_storage BuildxBuilder#ephemeral_storage}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.memory"></a>

```python
memory: str
```

- *Type:* str

Memory limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

### BuildxBuilderRemote <a name="BuildxBuilderRemote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilderRemote(
  cacert: str = None,
  cert: str = None,
  default_load: bool | IResolvable = None,
  key: str = None,
  servername: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cacert">cacert</a></code> | <code>str</code> | Absolute path to the TLS certificate authority used for validation. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cert">cert</a></code> | <code>str</code> | Absolute path to the TLS client certificate to present to buildkitd. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.defaultLoad">default_load</a></code> | <code>bool \| cdktf.IResolvable</code> | Automatically load images to the Docker Engine image store. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.key">key</a></code> | <code>str</code> | Sets the TLS client key. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.servername">servername</a></code> | <code>str</code> | TLS server name used in requests. |

---

##### `cacert`<sup>Optional</sup> <a name="cacert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cacert"></a>

```python
cacert: str
```

- *Type:* str

Absolute path to the TLS certificate authority used for validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cacert BuildxBuilder#cacert}

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cert"></a>

```python
cert: str
```

- *Type:* str

Absolute path to the TLS client certificate to present to buildkitd.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cert BuildxBuilder#cert}

---

##### `default_load`<sup>Optional</sup> <a name="default_load" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.defaultLoad"></a>

```python
default_load: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.key"></a>

```python
key: str
```

- *Type:* str

Sets the TLS client key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#key BuildxBuilder#key}

---

##### `servername`<sup>Optional</sup> <a name="servername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.servername"></a>

```python
servername: str
```

- *Type:* str

TLS server name used in requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#servername BuildxBuilder#servername}

---

## Classes <a name="Classes" id="Classes"></a>

### BuildxBuilderDockerContainerOutputReference <a name="BuildxBuilderDockerContainerOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilderDockerContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCgroupParent">reset_cgroup_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuPeriod">reset_cpu_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuQuota">reset_cpu_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpusetCpus">reset_cpuset_cpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpusetMems">reset_cpuset_mems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuShares">reset_cpu_shares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetDefaultLoad">reset_default_load</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetMemory">reset_memory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetMemorySwap">reset_memory_swap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetRestartPolicy">reset_restart_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cgroup_parent` <a name="reset_cgroup_parent" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCgroupParent"></a>

```python
def reset_cgroup_parent() -> None
```

##### `reset_cpu_period` <a name="reset_cpu_period" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuPeriod"></a>

```python
def reset_cpu_period() -> None
```

##### `reset_cpu_quota` <a name="reset_cpu_quota" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuQuota"></a>

```python
def reset_cpu_quota() -> None
```

##### `reset_cpuset_cpus` <a name="reset_cpuset_cpus" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpusetCpus"></a>

```python
def reset_cpuset_cpus() -> None
```

##### `reset_cpuset_mems` <a name="reset_cpuset_mems" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpusetMems"></a>

```python
def reset_cpuset_mems() -> None
```

##### `reset_cpu_shares` <a name="reset_cpu_shares" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuShares"></a>

```python
def reset_cpu_shares() -> None
```

##### `reset_default_load` <a name="reset_default_load" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetDefaultLoad"></a>

```python
def reset_default_load() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```

##### `reset_memory_swap` <a name="reset_memory_swap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetMemorySwap"></a>

```python
def reset_memory_swap() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_restart_policy` <a name="reset_restart_policy" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetRestartPolicy"></a>

```python
def reset_restart_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParentInput">cgroup_parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriodInput">cpu_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuotaInput">cpu_quota_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpusInput">cpuset_cpus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMemsInput">cpuset_mems_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuSharesInput">cpu_shares_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoadInput">default_load_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.envInput">env_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwapInput">memory_swap_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicyInput">restart_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParent">cgroup_parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriod">cpu_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuota">cpu_quota</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpus">cpuset_cpus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMems">cpuset_mems</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuShares">cpu_shares</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoad">default_load</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.env">env</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwap">memory_swap</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicy">restart_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cgroup_parent_input`<sup>Optional</sup> <a name="cgroup_parent_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParentInput"></a>

```python
cgroup_parent_input: str
```

- *Type:* str

---

##### `cpu_period_input`<sup>Optional</sup> <a name="cpu_period_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriodInput"></a>

```python
cpu_period_input: str
```

- *Type:* str

---

##### `cpu_quota_input`<sup>Optional</sup> <a name="cpu_quota_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuotaInput"></a>

```python
cpu_quota_input: str
```

- *Type:* str

---

##### `cpuset_cpus_input`<sup>Optional</sup> <a name="cpuset_cpus_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpusInput"></a>

```python
cpuset_cpus_input: str
```

- *Type:* str

---

##### `cpuset_mems_input`<sup>Optional</sup> <a name="cpuset_mems_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMemsInput"></a>

```python
cpuset_mems_input: str
```

- *Type:* str

---

##### `cpu_shares_input`<sup>Optional</sup> <a name="cpu_shares_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuSharesInput"></a>

```python
cpu_shares_input: str
```

- *Type:* str

---

##### `default_load_input`<sup>Optional</sup> <a name="default_load_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoadInput"></a>

```python
default_load_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.envInput"></a>

```python
env_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `memory_swap_input`<sup>Optional</sup> <a name="memory_swap_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwapInput"></a>

```python
memory_swap_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `restart_policy_input`<sup>Optional</sup> <a name="restart_policy_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicyInput"></a>

```python
restart_policy_input: str
```

- *Type:* str

---

##### `cgroup_parent`<sup>Required</sup> <a name="cgroup_parent" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParent"></a>

```python
cgroup_parent: str
```

- *Type:* str

---

##### `cpu_period`<sup>Required</sup> <a name="cpu_period" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriod"></a>

```python
cpu_period: str
```

- *Type:* str

---

##### `cpu_quota`<sup>Required</sup> <a name="cpu_quota" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuota"></a>

```python
cpu_quota: str
```

- *Type:* str

---

##### `cpuset_cpus`<sup>Required</sup> <a name="cpuset_cpus" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpus"></a>

```python
cpuset_cpus: str
```

- *Type:* str

---

##### `cpuset_mems`<sup>Required</sup> <a name="cpuset_mems" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMems"></a>

```python
cpuset_mems: str
```

- *Type:* str

---

##### `cpu_shares`<sup>Required</sup> <a name="cpu_shares" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuShares"></a>

```python
cpu_shares: str
```

- *Type:* str

---

##### `default_load`<sup>Required</sup> <a name="default_load" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoad"></a>

```python
default_load: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.env"></a>

```python
env: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `memory_swap`<sup>Required</sup> <a name="memory_swap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwap"></a>

```python
memory_swap: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `restart_policy`<sup>Required</sup> <a name="restart_policy" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicy"></a>

```python
restart_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.internalValue"></a>

```python
internal_value: BuildxBuilderDockerContainer
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

---


### BuildxBuilderKubernetesLimitsOutputReference <a name="BuildxBuilderKubernetesLimitsOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetEphemeralStorage">reset_ephemeral_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetMemory">reset_memory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_ephemeral_storage` <a name="reset_ephemeral_storage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetEphemeralStorage"></a>

```python
def reset_ephemeral_storage() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpuInput">cpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorageInput">ephemeral_storage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorage">ephemeral_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpuInput"></a>

```python
cpu_input: str
```

- *Type:* str

---

##### `ephemeral_storage_input`<sup>Optional</sup> <a name="ephemeral_storage_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorageInput"></a>

```python
ephemeral_storage_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `ephemeral_storage`<sup>Required</sup> <a name="ephemeral_storage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorage"></a>

```python
ephemeral_storage: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.internalValue"></a>

```python
internal_value: BuildxBuilderKubernetesLimits
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

---


### BuildxBuilderKubernetesOutputReference <a name="BuildxBuilderKubernetesOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilderKubernetesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putLimits">put_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putQemu">put_qemu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putRequests">put_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetDefaultLoad">reset_default_load</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLimits">reset_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLoadbalance">reset_loadbalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetNodeselector">reset_nodeselector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetQemu">reset_qemu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetReplicas">reset_replicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetRequests">reset_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetRootless">reset_rootless</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetSchedulername">reset_schedulername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetServiceaccount">reset_serviceaccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetTolerations">reset_tolerations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_limits` <a name="put_limits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putLimits"></a>

```python
def put_limits(
  cpu: str = None,
  ephemeral_storage: str = None,
  memory: str = None
) -> None
```

###### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putLimits.parameter.cpu"></a>

- *Type:* str

CPU limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpu BuildxBuilder#cpu}

---

###### `ephemeral_storage`<sup>Optional</sup> <a name="ephemeral_storage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putLimits.parameter.ephemeralStorage"></a>

- *Type:* str

Ephemeral storage limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#ephemeral_storage BuildxBuilder#ephemeral_storage}

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putLimits.parameter.memory"></a>

- *Type:* str

Memory limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

##### `put_qemu` <a name="put_qemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putQemu"></a>

```python
def put_qemu(
  image: str = None,
  install: bool | IResolvable = None
) -> None
```

###### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putQemu.parameter.image"></a>

- *Type:* str

Sets the QEMU emulation image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#image BuildxBuilder#image}

---

###### `install`<sup>Optional</sup> <a name="install" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putQemu.parameter.install"></a>

- *Type:* bool | cdktf.IResolvable

Install QEMU emulation for multi-platform support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#install BuildxBuilder#install}

---

##### `put_requests` <a name="put_requests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putRequests"></a>

```python
def put_requests(
  cpu: str = None,
  ephemeral_storage: str = None,
  memory: str = None
) -> None
```

###### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putRequests.parameter.cpu"></a>

- *Type:* str

CPU limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpu BuildxBuilder#cpu}

---

###### `ephemeral_storage`<sup>Optional</sup> <a name="ephemeral_storage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putRequests.parameter.ephemeralStorage"></a>

- *Type:* str

Ephemeral storage limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#ephemeral_storage BuildxBuilder#ephemeral_storage}

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putRequests.parameter.memory"></a>

- *Type:* str

Memory limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_default_load` <a name="reset_default_load" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetDefaultLoad"></a>

```python
def reset_default_load() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_limits` <a name="reset_limits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLimits"></a>

```python
def reset_limits() -> None
```

##### `reset_loadbalance` <a name="reset_loadbalance" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLoadbalance"></a>

```python
def reset_loadbalance() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_nodeselector` <a name="reset_nodeselector" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetNodeselector"></a>

```python
def reset_nodeselector() -> None
```

##### `reset_qemu` <a name="reset_qemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetQemu"></a>

```python
def reset_qemu() -> None
```

##### `reset_replicas` <a name="reset_replicas" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetReplicas"></a>

```python
def reset_replicas() -> None
```

##### `reset_requests` <a name="reset_requests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetRequests"></a>

```python
def reset_requests() -> None
```

##### `reset_rootless` <a name="reset_rootless" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetRootless"></a>

```python
def reset_rootless() -> None
```

##### `reset_schedulername` <a name="reset_schedulername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetSchedulername"></a>

```python
def reset_schedulername() -> None
```

##### `reset_serviceaccount` <a name="reset_serviceaccount" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetServiceaccount"></a>

```python
def reset_serviceaccount() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_tolerations` <a name="reset_tolerations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetTolerations"></a>

```python
def reset_tolerations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference">BuildxBuilderKubernetesLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemu">qemu</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference">BuildxBuilderKubernetesQemuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requests">requests</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference">BuildxBuilderKubernetesRequestsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotationsInput">annotations_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoadInput">default_load_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labelsInput">labels_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limitsInput">limits_input</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalanceInput">loadbalance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselectorInput">nodeselector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemuInput">qemu_input</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicasInput">replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requestsInput">requests_input</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootlessInput">rootless_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulernameInput">schedulername_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccountInput">serviceaccount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerationsInput">tolerations_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotations">annotations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoad">default_load</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labels">labels</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalance">loadbalance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselector">nodeselector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicas">replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootless">rootless</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulername">schedulername</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccount">serviceaccount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerations">tolerations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limits"></a>

```python
limits: BuildxBuilderKubernetesLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference">BuildxBuilderKubernetesLimitsOutputReference</a>

---

##### `qemu`<sup>Required</sup> <a name="qemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemu"></a>

```python
qemu: BuildxBuilderKubernetesQemuOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference">BuildxBuilderKubernetesQemuOutputReference</a>

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requests"></a>

```python
requests: BuildxBuilderKubernetesRequestsOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference">BuildxBuilderKubernetesRequestsOutputReference</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotationsInput"></a>

```python
annotations_input: str
```

- *Type:* str

---

##### `default_load_input`<sup>Optional</sup> <a name="default_load_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoadInput"></a>

```python
default_load_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labelsInput"></a>

```python
labels_input: str
```

- *Type:* str

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limitsInput"></a>

```python
limits_input: BuildxBuilderKubernetesLimits
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

---

##### `loadbalance_input`<sup>Optional</sup> <a name="loadbalance_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalanceInput"></a>

```python
loadbalance_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `nodeselector_input`<sup>Optional</sup> <a name="nodeselector_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselectorInput"></a>

```python
nodeselector_input: str
```

- *Type:* str

---

##### `qemu_input`<sup>Optional</sup> <a name="qemu_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemuInput"></a>

```python
qemu_input: BuildxBuilderKubernetesQemu
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

---

##### `replicas_input`<sup>Optional</sup> <a name="replicas_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicasInput"></a>

```python
replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requests_input`<sup>Optional</sup> <a name="requests_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requestsInput"></a>

```python
requests_input: BuildxBuilderKubernetesRequests
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

---

##### `rootless_input`<sup>Optional</sup> <a name="rootless_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootlessInput"></a>

```python
rootless_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `schedulername_input`<sup>Optional</sup> <a name="schedulername_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulernameInput"></a>

```python
schedulername_input: str
```

- *Type:* str

---

##### `serviceaccount_input`<sup>Optional</sup> <a name="serviceaccount_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccountInput"></a>

```python
serviceaccount_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `tolerations_input`<sup>Optional</sup> <a name="tolerations_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerationsInput"></a>

```python
tolerations_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotations"></a>

```python
annotations: str
```

- *Type:* str

---

##### `default_load`<sup>Required</sup> <a name="default_load" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoad"></a>

```python
default_load: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labels"></a>

```python
labels: str
```

- *Type:* str

---

##### `loadbalance`<sup>Required</sup> <a name="loadbalance" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalance"></a>

```python
loadbalance: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `nodeselector`<sup>Required</sup> <a name="nodeselector" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselector"></a>

```python
nodeselector: str
```

- *Type:* str

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicas"></a>

```python
replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rootless`<sup>Required</sup> <a name="rootless" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootless"></a>

```python
rootless: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `schedulername`<sup>Required</sup> <a name="schedulername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulername"></a>

```python
schedulername: str
```

- *Type:* str

---

##### `serviceaccount`<sup>Required</sup> <a name="serviceaccount" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccount"></a>

```python
serviceaccount: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `tolerations`<sup>Required</sup> <a name="tolerations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerations"></a>

```python
tolerations: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.internalValue"></a>

```python
internal_value: BuildxBuilderKubernetes
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

---


### BuildxBuilderKubernetesQemuOutputReference <a name="BuildxBuilderKubernetesQemuOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilderKubernetesQemuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resetInstall">reset_install</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image` <a name="reset_image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_install` <a name="reset_install" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resetInstall"></a>

```python
def reset_install() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.installInput">install_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.install">install</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `install_input`<sup>Optional</sup> <a name="install_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.installInput"></a>

```python
install_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `install`<sup>Required</sup> <a name="install" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.install"></a>

```python
install: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.internalValue"></a>

```python
internal_value: BuildxBuilderKubernetesQemu
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

---


### BuildxBuilderKubernetesRequestsOutputReference <a name="BuildxBuilderKubernetesRequestsOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetEphemeralStorage">reset_ephemeral_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetMemory">reset_memory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_ephemeral_storage` <a name="reset_ephemeral_storage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetEphemeralStorage"></a>

```python
def reset_ephemeral_storage() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpuInput">cpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorageInput">ephemeral_storage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpu">cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorage">ephemeral_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpuInput"></a>

```python
cpu_input: str
```

- *Type:* str

---

##### `ephemeral_storage_input`<sup>Optional</sup> <a name="ephemeral_storage_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorageInput"></a>

```python
ephemeral_storage_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpu"></a>

```python
cpu: str
```

- *Type:* str

---

##### `ephemeral_storage`<sup>Required</sup> <a name="ephemeral_storage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorage"></a>

```python
ephemeral_storage: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.internalValue"></a>

```python
internal_value: BuildxBuilderKubernetesRequests
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

---


### BuildxBuilderRemoteOutputReference <a name="BuildxBuilderRemoteOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import buildx_builder

buildxBuilder.BuildxBuilderRemoteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetCacert">reset_cacert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetCert">reset_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetDefaultLoad">reset_default_load</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetServername">reset_servername</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cacert` <a name="reset_cacert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetCacert"></a>

```python
def reset_cacert() -> None
```

##### `reset_cert` <a name="reset_cert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetCert"></a>

```python
def reset_cert() -> None
```

##### `reset_default_load` <a name="reset_default_load" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetDefaultLoad"></a>

```python
def reset_default_load() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_servername` <a name="reset_servername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetServername"></a>

```python
def reset_servername() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacertInput">cacert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.certInput">cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoadInput">default_load_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servernameInput">servername_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacert">cacert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoad">default_load</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servername">servername</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cacert_input`<sup>Optional</sup> <a name="cacert_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacertInput"></a>

```python
cacert_input: str
```

- *Type:* str

---

##### `cert_input`<sup>Optional</sup> <a name="cert_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.certInput"></a>

```python
cert_input: str
```

- *Type:* str

---

##### `default_load_input`<sup>Optional</sup> <a name="default_load_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoadInput"></a>

```python
default_load_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `servername_input`<sup>Optional</sup> <a name="servername_input" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servernameInput"></a>

```python
servername_input: str
```

- *Type:* str

---

##### `cacert`<sup>Required</sup> <a name="cacert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacert"></a>

```python
cacert: str
```

- *Type:* str

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `default_load`<sup>Required</sup> <a name="default_load" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoad"></a>

```python
default_load: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `servername`<sup>Required</sup> <a name="servername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servername"></a>

```python
servername: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.internalValue"></a>

```python
internal_value: BuildxBuilderRemote
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

---



