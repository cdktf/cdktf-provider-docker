# `service` Submodule <a name="`service` Submodule" id="@cdktf/provider-docker.service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Service <a name="Service" id="@cdktf/provider-docker.service.Service"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service docker_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.Service.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.Service(
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
  task_spec: ServiceTaskSpec,
  auth: ServiceAuth = None,
  converge_config: ServiceConvergeConfig = None,
  endpoint_spec: ServiceEndpointSpec = None,
  id: str = None,
  labels: typing.Union[IResolvable, typing.List[ServiceLabels]] = None,
  mode: ServiceMode = None,
  rollback_config: ServiceRollbackConfig = None,
  update_config: ServiceUpdateConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the service. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.taskSpec">task_spec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a></code> | task_spec block. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.auth">auth</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.convergeConfig">converge_config</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a></code> | converge_config block. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.endpointSpec">endpoint_spec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a></code> | endpoint_spec block. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.mode">mode</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a></code> | mode block. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.rollbackConfig">rollback_config</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a></code> | rollback_config block. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.updateConfig">update_config</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a></code> | update_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.service.Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.service.Service.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.service.Service.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.service.Service.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.service.Service.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.service.Service.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.service.Service.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.service.Service.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.service.Service.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.Service.Initializer.parameter.name"></a>

- *Type:* str

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#name Service#name}

---

##### `task_spec`<sup>Required</sup> <a name="task_spec" id="@cdktf/provider-docker.service.Service.Initializer.parameter.taskSpec"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

task_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#task_spec Service#task_spec}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktf/provider-docker.service.Service.Initializer.parameter.auth"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#auth Service#auth}

---

##### `converge_config`<sup>Optional</sup> <a name="converge_config" id="@cdktf/provider-docker.service.Service.Initializer.parameter.convergeConfig"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

converge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#converge_config Service#converge_config}

---

##### `endpoint_spec`<sup>Optional</sup> <a name="endpoint_spec" id="@cdktf/provider-docker.service.Service.Initializer.parameter.endpointSpec"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

endpoint_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#endpoint_spec Service#endpoint_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.service.Service.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.service.Service.Initializer.parameter.labels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#labels Service#labels}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.service.Service.Initializer.parameter.mode"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#mode Service#mode}

---

##### `rollback_config`<sup>Optional</sup> <a name="rollback_config" id="@cdktf/provider-docker.service.Service.Initializer.parameter.rollbackConfig"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

rollback_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#rollback_config Service#rollback_config}

---

##### `update_config`<sup>Optional</sup> <a name="update_config" id="@cdktf/provider-docker.service.Service.Initializer.parameter.updateConfig"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

update_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#update_config Service#update_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.service.Service.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.service.Service.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.service.Service.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.service.Service.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-docker.service.Service.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-docker.service.Service.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-docker.service.Service.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-docker.service.Service.putAuth">put_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putConvergeConfig">put_converge_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putEndpointSpec">put_endpoint_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putMode">put_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putRollbackConfig">put_rollback_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putTaskSpec">put_task_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putUpdateConfig">put_update_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetAuth">reset_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetConvergeConfig">reset_converge_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetEndpointSpec">reset_endpoint_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetRollbackConfig">reset_rollback_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetUpdateConfig">reset_update_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.Service.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-docker.service.Service.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.service.Service.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-docker.service.Service.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-docker.service.Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-docker.service.Service.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-docker.service.Service.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-docker.service.Service.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-docker.service.Service.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-docker.service.Service.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-docker.service.Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.Service.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.Service.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.Service.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.Service.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.Service.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.Service.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.Service.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.Service.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.Service.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-docker.service.Service.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-docker.service.Service.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.service.Service.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.service.Service.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.Service.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-docker.service.Service.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.service.Service.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-docker.service.Service.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-docker.service.Service.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-docker.service.Service.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-docker.service.Service.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.service.Service.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auth` <a name="put_auth" id="@cdktf/provider-docker.service.Service.putAuth"></a>

```python
def put_auth(
  server_address: str,
  password: str = None,
  username: str = None
) -> None
```

###### `server_address`<sup>Required</sup> <a name="server_address" id="@cdktf/provider-docker.service.Service.putAuth.parameter.serverAddress"></a>

- *Type:* str

The address of the server for the authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#server_address Service#server_address}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-docker.service.Service.putAuth.parameter.password"></a>

- *Type:* str

The password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#password Service#password}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-docker.service.Service.putAuth.parameter.username"></a>

- *Type:* str

The username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#username Service#username}

---

##### `put_converge_config` <a name="put_converge_config" id="@cdktf/provider-docker.service.Service.putConvergeConfig"></a>

```python
def put_converge_config(
  delay: str = None,
  timeout: str = None
) -> None
```

###### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-docker.service.Service.putConvergeConfig.parameter.delay"></a>

- *Type:* str

The interval to check if the desired state is reached `(ms|s)`. Defaults to `7s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#delay Service#delay}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-docker.service.Service.putConvergeConfig.parameter.timeout"></a>

- *Type:* str

The timeout of the service to reach the desired state `(s|m)`. Defaults to `3m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#timeout Service#timeout}

---

##### `put_endpoint_spec` <a name="put_endpoint_spec" id="@cdktf/provider-docker.service.Service.putEndpointSpec"></a>

```python
def put_endpoint_spec(
  mode: str = None,
  ports: typing.Union[IResolvable, typing.List[ServiceEndpointSpecPorts]] = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.service.Service.putEndpointSpec.parameter.mode"></a>

- *Type:* str

The mode of resolution to use for internal load balancing between tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#mode Service#mode}

---

###### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-docker.service.Service.putEndpointSpec.parameter.ports"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>]]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#ports Service#ports}

---

##### `put_labels` <a name="put_labels" id="@cdktf/provider-docker.service.Service.putLabels"></a>

```python
def put_labels(
  value: typing.Union[IResolvable, typing.List[ServiceLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>]]

---

##### `put_mode` <a name="put_mode" id="@cdktf/provider-docker.service.Service.putMode"></a>

```python
def put_mode(
  global: typing.Union[bool, IResolvable] = None,
  replicated: ServiceModeReplicated = None
) -> None
```

###### `global`<sup>Optional</sup> <a name="global" id="@cdktf/provider-docker.service.Service.putMode.parameter.global"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The global service mode. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#global Service#global}

---

###### `replicated`<sup>Optional</sup> <a name="replicated" id="@cdktf/provider-docker.service.Service.putMode.parameter.replicated"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a>

replicated block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#replicated Service#replicated}

---

##### `put_rollback_config` <a name="put_rollback_config" id="@cdktf/provider-docker.service.Service.putRollbackConfig"></a>

```python
def put_rollback_config(
  delay: str = None,
  failure_action: str = None,
  max_failure_ratio: str = None,
  monitor: str = None,
  order: str = None,
  parallelism: typing.Union[int, float] = None
) -> None
```

###### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-docker.service.Service.putRollbackConfig.parameter.delay"></a>

- *Type:* str

Delay between task rollbacks (ns|us|ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#delay Service#delay}

---

###### `failure_action`<sup>Optional</sup> <a name="failure_action" id="@cdktf/provider-docker.service.Service.putRollbackConfig.parameter.failureAction"></a>

- *Type:* str

Action on rollback failure: pause | continue. Defaults to `pause`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#failure_action Service#failure_action}

---

###### `max_failure_ratio`<sup>Optional</sup> <a name="max_failure_ratio" id="@cdktf/provider-docker.service.Service.putRollbackConfig.parameter.maxFailureRatio"></a>

- *Type:* str

Failure rate to tolerate during a rollback. Defaults to `0.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#max_failure_ratio Service#max_failure_ratio}

---

###### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-docker.service.Service.putRollbackConfig.parameter.monitor"></a>

- *Type:* str

Duration after each task rollback to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#monitor Service#monitor}

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-docker.service.Service.putRollbackConfig.parameter.order"></a>

- *Type:* str

Rollback order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#order Service#order}

---

###### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-docker.service.Service.putRollbackConfig.parameter.parallelism"></a>

- *Type:* typing.Union[int, float]

Maximum number of tasks to be rollbacked in one iteration. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#parallelism Service#parallelism}

---

##### `put_task_spec` <a name="put_task_spec" id="@cdktf/provider-docker.service.Service.putTaskSpec"></a>

```python
def put_task_spec(
  container_spec: ServiceTaskSpecContainerSpec,
  force_update: typing.Union[int, float] = None,
  log_driver: ServiceTaskSpecLogDriver = None,
  networks_advanced: typing.Union[IResolvable, typing.List[ServiceTaskSpecNetworksAdvanced]] = None,
  placement: ServiceTaskSpecPlacement = None,
  resources: ServiceTaskSpecResources = None,
  restart_policy: ServiceTaskSpecRestartPolicy = None,
  runtime: str = None
) -> None
```

###### `container_spec`<sup>Required</sup> <a name="container_spec" id="@cdktf/provider-docker.service.Service.putTaskSpec.parameter.containerSpec"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#container_spec Service#container_spec}

---

###### `force_update`<sup>Optional</sup> <a name="force_update" id="@cdktf/provider-docker.service.Service.putTaskSpec.parameter.forceUpdate"></a>

- *Type:* typing.Union[int, float]

A counter that triggers an update even if no relevant parameters have been changed. See the [spec](https://github.com/docker/swarmkit/blob/master/api/specs.proto#L126).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#force_update Service#force_update}

---

###### `log_driver`<sup>Optional</sup> <a name="log_driver" id="@cdktf/provider-docker.service.Service.putTaskSpec.parameter.logDriver"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a>

log_driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#log_driver Service#log_driver}

---

###### `networks_advanced`<sup>Optional</sup> <a name="networks_advanced" id="@cdktf/provider-docker.service.Service.putTaskSpec.parameter.networksAdvanced"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>]]

networks_advanced block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#networks_advanced Service#networks_advanced}

---

###### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-docker.service.Service.putTaskSpec.parameter.placement"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#placement Service#placement}

---

###### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-docker.service.Service.putTaskSpec.parameter.resources"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#resources Service#resources}

---

###### `restart_policy`<sup>Optional</sup> <a name="restart_policy" id="@cdktf/provider-docker.service.Service.putTaskSpec.parameter.restartPolicy"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a>

restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#restart_policy Service#restart_policy}

---

###### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-docker.service.Service.putTaskSpec.parameter.runtime"></a>

- *Type:* str

Runtime is the type of runtime specified for the task executor. See the [types](https://github.com/moby/moby/blob/master/api/types/swarm/runtime.go).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#runtime Service#runtime}

---

##### `put_update_config` <a name="put_update_config" id="@cdktf/provider-docker.service.Service.putUpdateConfig"></a>

```python
def put_update_config(
  delay: str = None,
  failure_action: str = None,
  max_failure_ratio: str = None,
  monitor: str = None,
  order: str = None,
  parallelism: typing.Union[int, float] = None
) -> None
```

###### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-docker.service.Service.putUpdateConfig.parameter.delay"></a>

- *Type:* str

Delay between task updates `(ns|us|ms|s|m|h)`. Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#delay Service#delay}

---

###### `failure_action`<sup>Optional</sup> <a name="failure_action" id="@cdktf/provider-docker.service.Service.putUpdateConfig.parameter.failureAction"></a>

- *Type:* str

Action on update failure: `pause`, `continue` or `rollback`. Defaults to `pause`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#failure_action Service#failure_action}

---

###### `max_failure_ratio`<sup>Optional</sup> <a name="max_failure_ratio" id="@cdktf/provider-docker.service.Service.putUpdateConfig.parameter.maxFailureRatio"></a>

- *Type:* str

Failure rate to tolerate during an update. Defaults to `0.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#max_failure_ratio Service#max_failure_ratio}

---

###### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-docker.service.Service.putUpdateConfig.parameter.monitor"></a>

- *Type:* str

Duration after each task update to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#monitor Service#monitor}

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-docker.service.Service.putUpdateConfig.parameter.order"></a>

- *Type:* str

Update order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#order Service#order}

---

###### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-docker.service.Service.putUpdateConfig.parameter.parallelism"></a>

- *Type:* typing.Union[int, float]

Maximum number of tasks to be updated in one iteration. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#parallelism Service#parallelism}

---

##### `reset_auth` <a name="reset_auth" id="@cdktf/provider-docker.service.Service.resetAuth"></a>

```python
def reset_auth() -> None
```

##### `reset_converge_config` <a name="reset_converge_config" id="@cdktf/provider-docker.service.Service.resetConvergeConfig"></a>

```python
def reset_converge_config() -> None
```

##### `reset_endpoint_spec` <a name="reset_endpoint_spec" id="@cdktf/provider-docker.service.Service.resetEndpointSpec"></a>

```python
def reset_endpoint_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-docker.service.Service.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-docker.service.Service.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-docker.service.Service.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_rollback_config` <a name="reset_rollback_config" id="@cdktf/provider-docker.service.Service.resetRollbackConfig"></a>

```python
def reset_rollback_config() -> None
```

##### `reset_update_config` <a name="reset_update_config" id="@cdktf/provider-docker.service.Service.resetUpdateConfig"></a>

```python
def reset_update_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.service.Service.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-docker.service.Service.isConstruct"></a>

```python
from cdktf_cdktf_provider_docker import service

service.Service.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.service.Service.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-docker.service.Service.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_docker import service

service.Service.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.service.Service.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-docker.service.Service.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_docker import service

service.Service.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.service.Service.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-docker.service.Service.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_docker import service

service.Service.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.service.Service.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-docker.service.Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Service to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-docker.service.Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.service.Service.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.service.Service.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference">ServiceAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.convergeConfig">converge_config</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference">ServiceConvergeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.endpointSpec">endpoint_spec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference">ServiceEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList">ServiceLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.mode">mode</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference">ServiceModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.rollbackConfig">rollback_config</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference">ServiceRollbackConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.taskSpec">task_spec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference">ServiceTaskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.updateConfig">update_config</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference">ServiceUpdateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.authInput">auth_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.convergeConfigInput">converge_config_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.endpointSpecInput">endpoint_spec_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.labelsInput">labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.modeInput">mode_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.rollbackConfigInput">rollback_config_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.taskSpecInput">task_spec_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.updateConfigInput">update_config_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.service.Service.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-docker.service.Service.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.Service.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-docker.service.Service.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-docker.service.Service.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-docker.service.Service.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-docker.service.Service.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.service.Service.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.service.Service.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.service.Service.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.service.Service.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.service.Service.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.service.Service.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.service.Service.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-docker.service.Service.property.auth"></a>

```python
auth: ServiceAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference">ServiceAuthOutputReference</a>

---

##### `converge_config`<sup>Required</sup> <a name="converge_config" id="@cdktf/provider-docker.service.Service.property.convergeConfig"></a>

```python
converge_config: ServiceConvergeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference">ServiceConvergeConfigOutputReference</a>

---

##### `endpoint_spec`<sup>Required</sup> <a name="endpoint_spec" id="@cdktf/provider-docker.service.Service.property.endpointSpec"></a>

```python
endpoint_spec: ServiceEndpointSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference">ServiceEndpointSpecOutputReference</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.service.Service.property.labels"></a>

```python
labels: ServiceLabelsList
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceLabelsList">ServiceLabelsList</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-docker.service.Service.property.mode"></a>

```python
mode: ServiceModeOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeOutputReference">ServiceModeOutputReference</a>

---

##### `rollback_config`<sup>Required</sup> <a name="rollback_config" id="@cdktf/provider-docker.service.Service.property.rollbackConfig"></a>

```python
rollback_config: ServiceRollbackConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference">ServiceRollbackConfigOutputReference</a>

---

##### `task_spec`<sup>Required</sup> <a name="task_spec" id="@cdktf/provider-docker.service.Service.property.taskSpec"></a>

```python
task_spec: ServiceTaskSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference">ServiceTaskSpecOutputReference</a>

---

##### `update_config`<sup>Required</sup> <a name="update_config" id="@cdktf/provider-docker.service.Service.property.updateConfig"></a>

```python
update_config: ServiceUpdateConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference">ServiceUpdateConfigOutputReference</a>

---

##### `auth_input`<sup>Optional</sup> <a name="auth_input" id="@cdktf/provider-docker.service.Service.property.authInput"></a>

```python
auth_input: ServiceAuth
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

---

##### `converge_config_input`<sup>Optional</sup> <a name="converge_config_input" id="@cdktf/provider-docker.service.Service.property.convergeConfigInput"></a>

```python
converge_config_input: ServiceConvergeConfig
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

---

##### `endpoint_spec_input`<sup>Optional</sup> <a name="endpoint_spec_input" id="@cdktf/provider-docker.service.Service.property.endpointSpecInput"></a>

```python
endpoint_spec_input: ServiceEndpointSpec
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-docker.service.Service.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-docker.service.Service.property.labelsInput"></a>

```python
labels_input: typing.Union[IResolvable, typing.List[ServiceLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>]]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-docker.service.Service.property.modeInput"></a>

```python
mode_input: ServiceMode
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-docker.service.Service.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rollback_config_input`<sup>Optional</sup> <a name="rollback_config_input" id="@cdktf/provider-docker.service.Service.property.rollbackConfigInput"></a>

```python
rollback_config_input: ServiceRollbackConfig
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

---

##### `task_spec_input`<sup>Optional</sup> <a name="task_spec_input" id="@cdktf/provider-docker.service.Service.property.taskSpecInput"></a>

```python
task_spec_input: ServiceTaskSpec
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

---

##### `update_config_input`<sup>Optional</sup> <a name="update_config_input" id="@cdktf/provider-docker.service.Service.property.updateConfigInput"></a>

```python
update_config_input: ServiceUpdateConfig
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.service.Service.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.Service.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.service.Service.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAuth <a name="ServiceAuth" id="@cdktf/provider-docker.service.ServiceAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceAuth(
  server_address: str,
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuth.property.serverAddress">server_address</a></code> | <code>str</code> | The address of the server for the authentication. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuth.property.password">password</a></code> | <code>str</code> | The password. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuth.property.username">username</a></code> | <code>str</code> | The username. |

---

##### `server_address`<sup>Required</sup> <a name="server_address" id="@cdktf/provider-docker.service.ServiceAuth.property.serverAddress"></a>

```python
server_address: str
```

- *Type:* str

The address of the server for the authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#server_address Service#server_address}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-docker.service.ServiceAuth.property.password"></a>

```python
password: str
```

- *Type:* str

The password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#password Service#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-docker.service.ServiceAuth.property.username"></a>

```python
username: str
```

- *Type:* str

The username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#username Service#username}

---

### ServiceConfig <a name="ServiceConfig" id="@cdktf/provider-docker.service.ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  task_spec: ServiceTaskSpec,
  auth: ServiceAuth = None,
  converge_config: ServiceConvergeConfig = None,
  endpoint_spec: ServiceEndpointSpec = None,
  id: str = None,
  labels: typing.Union[IResolvable, typing.List[ServiceLabels]] = None,
  mode: ServiceMode = None,
  rollback_config: ServiceRollbackConfig = None,
  update_config: ServiceUpdateConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.name">name</a></code> | <code>str</code> | Name of the service. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.taskSpec">task_spec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a></code> | task_spec block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.convergeConfig">converge_config</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a></code> | converge_config block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.endpointSpec">endpoint_spec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a></code> | endpoint_spec block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.mode">mode</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a></code> | mode block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.rollbackConfig">rollback_config</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a></code> | rollback_config block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.updateConfig">update_config</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a></code> | update_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.service.ServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.service.ServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.service.ServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.service.ServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.service.ServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.service.ServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.service.ServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#name Service#name}

---

##### `task_spec`<sup>Required</sup> <a name="task_spec" id="@cdktf/provider-docker.service.ServiceConfig.property.taskSpec"></a>

```python
task_spec: ServiceTaskSpec
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

task_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#task_spec Service#task_spec}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktf/provider-docker.service.ServiceConfig.property.auth"></a>

```python
auth: ServiceAuth
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#auth Service#auth}

---

##### `converge_config`<sup>Optional</sup> <a name="converge_config" id="@cdktf/provider-docker.service.ServiceConfig.property.convergeConfig"></a>

```python
converge_config: ServiceConvergeConfig
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

converge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#converge_config Service#converge_config}

---

##### `endpoint_spec`<sup>Optional</sup> <a name="endpoint_spec" id="@cdktf/provider-docker.service.ServiceConfig.property.endpointSpec"></a>

```python
endpoint_spec: ServiceEndpointSpec
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

endpoint_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#endpoint_spec Service#endpoint_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.service.ServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceConfig.property.labels"></a>

```python
labels: typing.Union[IResolvable, typing.List[ServiceLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#labels Service#labels}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.service.ServiceConfig.property.mode"></a>

```python
mode: ServiceMode
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#mode Service#mode}

---

##### `rollback_config`<sup>Optional</sup> <a name="rollback_config" id="@cdktf/provider-docker.service.ServiceConfig.property.rollbackConfig"></a>

```python
rollback_config: ServiceRollbackConfig
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

rollback_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#rollback_config Service#rollback_config}

---

##### `update_config`<sup>Optional</sup> <a name="update_config" id="@cdktf/provider-docker.service.ServiceConfig.property.updateConfig"></a>

```python
update_config: ServiceUpdateConfig
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

update_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#update_config Service#update_config}

---

### ServiceConvergeConfig <a name="ServiceConvergeConfig" id="@cdktf/provider-docker.service.ServiceConvergeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceConvergeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceConvergeConfig(
  delay: str = None,
  timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig.property.delay">delay</a></code> | <code>str</code> | The interval to check if the desired state is reached `(ms\|s)`. Defaults to `7s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig.property.timeout">timeout</a></code> | <code>str</code> | The timeout of the service to reach the desired state `(s\|m)`. Defaults to `3m`. |

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceConvergeConfig.property.delay"></a>

```python
delay: str
```

- *Type:* str

The interval to check if the desired state is reached `(ms|s)`. Defaults to `7s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#delay Service#delay}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-docker.service.ServiceConvergeConfig.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

The timeout of the service to reach the desired state `(s|m)`. Defaults to `3m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#timeout Service#timeout}

---

### ServiceEndpointSpec <a name="ServiceEndpointSpec" id="@cdktf/provider-docker.service.ServiceEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceEndpointSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceEndpointSpec(
  mode: str = None,
  ports: typing.Union[IResolvable, typing.List[ServiceEndpointSpecPorts]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec.property.mode">mode</a></code> | <code>str</code> | The mode of resolution to use for internal load balancing between tasks. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec.property.ports">ports</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>]]</code> | ports block. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.service.ServiceEndpointSpec.property.mode"></a>

```python
mode: str
```

- *Type:* str

The mode of resolution to use for internal load balancing between tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#mode Service#mode}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-docker.service.ServiceEndpointSpec.property.ports"></a>

```python
ports: typing.Union[IResolvable, typing.List[ServiceEndpointSpecPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>]]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#ports Service#ports}

---

### ServiceEndpointSpecPorts <a name="ServiceEndpointSpecPorts" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceEndpointSpecPorts(
  target_port: typing.Union[int, float],
  name: str = None,
  protocol: str = None,
  published_port: typing.Union[int, float] = None,
  publish_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.targetPort">target_port</a></code> | <code>typing.Union[int, float]</code> | The port inside the container. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.name">name</a></code> | <code>str</code> | A random name for the port. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.protocol">protocol</a></code> | <code>str</code> | Rrepresents the protocol of a port: `tcp`, `udp` or `sctp`. Defaults to `tcp`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.publishedPort">published_port</a></code> | <code>typing.Union[int, float]</code> | The port on the swarm hosts. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.publishMode">publish_mode</a></code> | <code>str</code> | Represents the mode in which the port is to be published: 'ingress' or 'host'. Defaults to `ingress`. |

---

##### `target_port`<sup>Required</sup> <a name="target_port" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.targetPort"></a>

```python
target_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#target_port Service#target_port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.name"></a>

```python
name: str
```

- *Type:* str

A random name for the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#name Service#name}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Rrepresents the protocol of a port: `tcp`, `udp` or `sctp`. Defaults to `tcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#protocol Service#protocol}

---

##### `published_port`<sup>Optional</sup> <a name="published_port" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.publishedPort"></a>

```python
published_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port on the swarm hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#published_port Service#published_port}

---

##### `publish_mode`<sup>Optional</sup> <a name="publish_mode" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.publishMode"></a>

```python
publish_mode: str
```

- *Type:* str

Represents the mode in which the port is to be published: 'ingress' or 'host'. Defaults to `ingress`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#publish_mode Service#publish_mode}

---

### ServiceLabels <a name="ServiceLabels" id="@cdktf/provider-docker.service.ServiceLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceLabels(
  label: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabels.property.label">label</a></code> | <code>str</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabels.property.value">value</a></code> | <code>str</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceLabels.property.label"></a>

```python
label: str
```

- *Type:* str

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#label Service#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#value Service#value}

---

### ServiceMode <a name="ServiceMode" id="@cdktf/provider-docker.service.ServiceMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceMode.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceMode(
  global: typing.Union[bool, IResolvable] = None,
  replicated: ServiceModeReplicated = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceMode.property.global">global</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The global service mode. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceMode.property.replicated">replicated</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a></code> | replicated block. |

---

##### `global`<sup>Optional</sup> <a name="global" id="@cdktf/provider-docker.service.ServiceMode.property.global"></a>

```python
global: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The global service mode. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#global Service#global}

---

##### `replicated`<sup>Optional</sup> <a name="replicated" id="@cdktf/provider-docker.service.ServiceMode.property.replicated"></a>

```python
replicated: ServiceModeReplicated
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a>

replicated block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#replicated Service#replicated}

---

### ServiceModeReplicated <a name="ServiceModeReplicated" id="@cdktf/provider-docker.service.ServiceModeReplicated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceModeReplicated.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceModeReplicated(
  replicas: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicated.property.replicas">replicas</a></code> | <code>typing.Union[int, float]</code> | The amount of replicas of the service. Defaults to `1`. |

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-docker.service.ServiceModeReplicated.property.replicas"></a>

```python
replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of replicas of the service. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#replicas Service#replicas}

---

### ServiceRollbackConfig <a name="ServiceRollbackConfig" id="@cdktf/provider-docker.service.ServiceRollbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceRollbackConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceRollbackConfig(
  delay: str = None,
  failure_action: str = None,
  max_failure_ratio: str = None,
  monitor: str = None,
  order: str = None,
  parallelism: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.delay">delay</a></code> | <code>str</code> | Delay between task rollbacks (ns\|us\|ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.failureAction">failure_action</a></code> | <code>str</code> | Action on rollback failure: pause \| continue. Defaults to `pause`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.maxFailureRatio">max_failure_ratio</a></code> | <code>str</code> | Failure rate to tolerate during a rollback. Defaults to `0.0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.monitor">monitor</a></code> | <code>str</code> | Duration after each task rollback to monitor for failure (ns\|us\|ms\|s\|m\|h). Defaults to `5s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.order">order</a></code> | <code>str</code> | Rollback order: either 'stop-first' or 'start-first'. Defaults to `stop-first`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | Maximum number of tasks to be rollbacked in one iteration. Defaults to `1`. |

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.delay"></a>

```python
delay: str
```

- *Type:* str

Delay between task rollbacks (ns|us|ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#delay Service#delay}

---

##### `failure_action`<sup>Optional</sup> <a name="failure_action" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.failureAction"></a>

```python
failure_action: str
```

- *Type:* str

Action on rollback failure: pause | continue. Defaults to `pause`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#failure_action Service#failure_action}

---

##### `max_failure_ratio`<sup>Optional</sup> <a name="max_failure_ratio" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.maxFailureRatio"></a>

```python
max_failure_ratio: str
```

- *Type:* str

Failure rate to tolerate during a rollback. Defaults to `0.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#max_failure_ratio Service#max_failure_ratio}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.monitor"></a>

```python
monitor: str
```

- *Type:* str

Duration after each task rollback to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#monitor Service#monitor}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.order"></a>

```python
order: str
```

- *Type:* str

Rollback order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#order Service#order}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.parallelism"></a>

```python
parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of tasks to be rollbacked in one iteration. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#parallelism Service#parallelism}

---

### ServiceTaskSpec <a name="ServiceTaskSpec" id="@cdktf/provider-docker.service.ServiceTaskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpec(
  container_spec: ServiceTaskSpecContainerSpec,
  force_update: typing.Union[int, float] = None,
  log_driver: ServiceTaskSpecLogDriver = None,
  networks_advanced: typing.Union[IResolvable, typing.List[ServiceTaskSpecNetworksAdvanced]] = None,
  placement: ServiceTaskSpecPlacement = None,
  resources: ServiceTaskSpecResources = None,
  restart_policy: ServiceTaskSpecRestartPolicy = None,
  runtime: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.containerSpec">container_spec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.forceUpdate">force_update</a></code> | <code>typing.Union[int, float]</code> | A counter that triggers an update even if no relevant parameters have been changed. See the [spec](https://github.com/docker/swarmkit/blob/master/api/specs.proto#L126). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.logDriver">log_driver</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a></code> | log_driver block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.networksAdvanced">networks_advanced</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>]]</code> | networks_advanced block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.restartPolicy">restart_policy</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a></code> | restart_policy block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.runtime">runtime</a></code> | <code>str</code> | Runtime is the type of runtime specified for the task executor. See the [types](https://github.com/moby/moby/blob/master/api/types/swarm/runtime.go). |

---

##### `container_spec`<sup>Required</sup> <a name="container_spec" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.containerSpec"></a>

```python
container_spec: ServiceTaskSpecContainerSpec
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#container_spec Service#container_spec}

---

##### `force_update`<sup>Optional</sup> <a name="force_update" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.forceUpdate"></a>

```python
force_update: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A counter that triggers an update even if no relevant parameters have been changed. See the [spec](https://github.com/docker/swarmkit/blob/master/api/specs.proto#L126).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#force_update Service#force_update}

---

##### `log_driver`<sup>Optional</sup> <a name="log_driver" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.logDriver"></a>

```python
log_driver: ServiceTaskSpecLogDriver
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a>

log_driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#log_driver Service#log_driver}

---

##### `networks_advanced`<sup>Optional</sup> <a name="networks_advanced" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.networksAdvanced"></a>

```python
networks_advanced: typing.Union[IResolvable, typing.List[ServiceTaskSpecNetworksAdvanced]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>]]

networks_advanced block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#networks_advanced Service#networks_advanced}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.placement"></a>

```python
placement: ServiceTaskSpecPlacement
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#placement Service#placement}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.resources"></a>

```python
resources: ServiceTaskSpecResources
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#resources Service#resources}

---

##### `restart_policy`<sup>Optional</sup> <a name="restart_policy" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.restartPolicy"></a>

```python
restart_policy: ServiceTaskSpecRestartPolicy
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a>

restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#restart_policy Service#restart_policy}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Runtime is the type of runtime specified for the task executor. See the [types](https://github.com/moby/moby/blob/master/api/types/swarm/runtime.go).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#runtime Service#runtime}

---

### ServiceTaskSpecContainerSpec <a name="ServiceTaskSpecContainerSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpec(
  image: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  configs: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecConfigs]] = None,
  dir: str = None,
  dns_config: ServiceTaskSpecContainerSpecDnsConfig = None,
  env: typing.Mapping[str] = None,
  groups: typing.List[str] = None,
  healthcheck: ServiceTaskSpecContainerSpecHealthcheck = None,
  hostname: str = None,
  hosts: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecHosts]] = None,
  isolation: str = None,
  labels: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecLabels]] = None,
  mounts: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecMounts]] = None,
  privileges: ServiceTaskSpecContainerSpecPrivileges = None,
  read_only: typing.Union[bool, IResolvable] = None,
  secrets: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecSecrets]] = None,
  stop_grace_period: str = None,
  stop_signal: str = None,
  sysctl: typing.Mapping[str] = None,
  user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.image">image</a></code> | <code>str</code> | The image name to use for the containers of the service, like `nginx:1.17.6`. Also use the data-source or resource of `docker_image` with the `repo_digest` or `docker_registry_image` with the `name` attribute for this, as shown in the examples. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.args">args</a></code> | <code>typing.List[str]</code> | Arguments to the command. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.command">command</a></code> | <code>typing.List[str]</code> | The command/entrypoint to be run in the image. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.configs">configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>]]</code> | configs block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.dir">dir</a></code> | <code>str</code> | The working directory for commands to run in. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.dnsConfig">dns_config</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.env">env</a></code> | <code>typing.Mapping[str]</code> | A list of environment variables in the form VAR="value". |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.groups">groups</a></code> | <code>typing.List[str]</code> | A list of additional groups that the container process will run as. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.hostname">hostname</a></code> | <code>str</code> | The hostname to use for the container, as a valid RFC 1123 hostname. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.hosts">hosts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>]]</code> | hosts block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.isolation">isolation</a></code> | <code>str</code> | Isolation technology of the containers running the service. (Windows only). Defaults to `default`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.mounts">mounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>]]</code> | mounts block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.privileges">privileges</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a></code> | privileges block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Mount the container's root filesystem as read only. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.secrets">secrets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>]]</code> | secrets block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.stopGracePeriod">stop_grace_period</a></code> | <code>str</code> | Amount of time to wait for the container to terminate before forcefully removing it (ms\|s\|m\|h). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.stopSignal">stop_signal</a></code> | <code>str</code> | Signal to stop the container. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.sysctl">sysctl</a></code> | <code>typing.Mapping[str]</code> | Sysctls config (Linux only). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.user">user</a></code> | <code>str</code> | The user inside the container. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.image"></a>

```python
image: str
```

- *Type:* str

The image name to use for the containers of the service, like `nginx:1.17.6`. Also use the data-source or resource of `docker_image` with the `repo_digest` or `docker_registry_image` with the `name` attribute for this, as shown in the examples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#image Service#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Arguments to the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#args Service#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

The command/entrypoint to be run in the image.

According to the [docker cli](https://github.com/docker/cli/blob/v20.10.7/cli/command/service/opts.go#L705) the override of the entrypoint is also passed to the `command` property and there is no `entrypoint` attribute in the `ContainerSpec` of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#command Service#command}

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.configs"></a>

```python
configs: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>]]

configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#configs Service#configs}

---

##### `dir`<sup>Optional</sup> <a name="dir" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.dir"></a>

```python
dir: str
```

- *Type:* str

The working directory for commands to run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#dir Service#dir}

---

##### `dns_config`<sup>Optional</sup> <a name="dns_config" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.dnsConfig"></a>

```python
dns_config: ServiceTaskSpecContainerSpecDnsConfig
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#dns_config Service#dns_config}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.env"></a>

```python
env: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of environment variables in the form VAR="value".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#env Service#env}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

A list of additional groups that the container process will run as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#groups Service#groups}

---

##### `healthcheck`<sup>Optional</sup> <a name="healthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.healthcheck"></a>

```python
healthcheck: ServiceTaskSpecContainerSpecHealthcheck
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#healthcheck Service#healthcheck}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

The hostname to use for the container, as a valid RFC 1123 hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#hostname Service#hostname}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.hosts"></a>

```python
hosts: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecHosts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>]]

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#hosts Service#hosts}

---

##### `isolation`<sup>Optional</sup> <a name="isolation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.isolation"></a>

```python
isolation: str
```

- *Type:* str

Isolation technology of the containers running the service. (Windows only). Defaults to `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#isolation Service#isolation}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.labels"></a>

```python
labels: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#labels Service#labels}

---

##### `mounts`<sup>Optional</sup> <a name="mounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.mounts"></a>

```python
mounts: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>]]

mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#mounts Service#mounts}

---

##### `privileges`<sup>Optional</sup> <a name="privileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.privileges"></a>

```python
privileges: ServiceTaskSpecContainerSpecPrivileges
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a>

privileges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#privileges Service#privileges}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Mount the container's root filesystem as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#read_only Service#read_only}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.secrets"></a>

```python
secrets: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>]]

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#secrets Service#secrets}

---

##### `stop_grace_period`<sup>Optional</sup> <a name="stop_grace_period" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.stopGracePeriod"></a>

```python
stop_grace_period: str
```

- *Type:* str

Amount of time to wait for the container to terminate before forcefully removing it (ms|s|m|h).

If not specified or '0s' the destroy will not check if all tasks/containers of the service terminate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#stop_grace_period Service#stop_grace_period}

---

##### `stop_signal`<sup>Optional</sup> <a name="stop_signal" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.stopSignal"></a>

```python
stop_signal: str
```

- *Type:* str

Signal to stop the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#stop_signal Service#stop_signal}

---

##### `sysctl`<sup>Optional</sup> <a name="sysctl" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.sysctl"></a>

```python
sysctl: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Sysctls config (Linux only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#sysctl Service#sysctl}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.user"></a>

```python
user: str
```

- *Type:* str

The user inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#user Service#user}

---

### ServiceTaskSpecContainerSpecConfigs <a name="ServiceTaskSpecContainerSpecConfigs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecConfigs(
  config_id: str,
  file_name: str,
  config_name: str = None,
  file_gid: str = None,
  file_mode: typing.Union[int, float] = None,
  file_uid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.configId">config_id</a></code> | <code>str</code> | ID of the specific config that we're referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileName">file_name</a></code> | <code>str</code> | Represents the final filename in the filesystem. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.configName">config_name</a></code> | <code>str</code> | Name of the config that this references, but this is just provided for lookup/display purposes. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileGid">file_gid</a></code> | <code>str</code> | Represents the file GID. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileMode">file_mode</a></code> | <code>typing.Union[int, float]</code> | Represents represents the FileMode of the file. Defaults to `0o444`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileUid">file_uid</a></code> | <code>str</code> | Represents the file UID. Defaults to `0`. |

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.configId"></a>

```python
config_id: str
```

- *Type:* str

ID of the specific config that we're referencing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#config_id Service#config_id}

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

Represents the final filename in the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#file_name Service#file_name}

---

##### `config_name`<sup>Optional</sup> <a name="config_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.configName"></a>

```python
config_name: str
```

- *Type:* str

Name of the config that this references, but this is just provided for lookup/display purposes.

The config in the reference will be identified by its ID

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#config_name Service#config_name}

---

##### `file_gid`<sup>Optional</sup> <a name="file_gid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileGid"></a>

```python
file_gid: str
```

- *Type:* str

Represents the file GID. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#file_gid Service#file_gid}

---

##### `file_mode`<sup>Optional</sup> <a name="file_mode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileMode"></a>

```python
file_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Represents represents the FileMode of the file. Defaults to `0o444`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#file_mode Service#file_mode}

---

##### `file_uid`<sup>Optional</sup> <a name="file_uid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileUid"></a>

```python
file_uid: str
```

- *Type:* str

Represents the file UID. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#file_uid Service#file_uid}

---

### ServiceTaskSpecContainerSpecDnsConfig <a name="ServiceTaskSpecContainerSpecDnsConfig" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecDnsConfig(
  nameservers: typing.List[str],
  options: typing.List[str] = None,
  search: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.nameservers">nameservers</a></code> | <code>typing.List[str]</code> | The IP addresses of the name servers. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.options">options</a></code> | <code>typing.List[str]</code> | A list of internal resolver variables to be modified (e.g., `debug`, `ndots:3`, etc.). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.search">search</a></code> | <code>typing.List[str]</code> | A search list for host-name lookup. |

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.nameservers"></a>

```python
nameservers: typing.List[str]
```

- *Type:* typing.List[str]

The IP addresses of the name servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#nameservers Service#nameservers}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

A list of internal resolver variables to be modified (e.g., `debug`, `ndots:3`, etc.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#options Service#options}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.search"></a>

```python
search: typing.List[str]
```

- *Type:* typing.List[str]

A search list for host-name lookup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#search Service#search}

---

### ServiceTaskSpecContainerSpecHealthcheck <a name="ServiceTaskSpecContainerSpecHealthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecHealthcheck(
  test: typing.List[str],
  interval: str = None,
  retries: typing.Union[int, float] = None,
  start_period: str = None,
  timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.test">test</a></code> | <code>typing.List[str]</code> | The test to perform as list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.interval">interval</a></code> | <code>str</code> | Time between running the check (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Consecutive failures needed to report unhealthy. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.startPeriod">start_period</a></code> | <code>str</code> | Start period for the container to initialize before counting retries towards unstable (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.timeout">timeout</a></code> | <code>str</code> | Maximum time to allow one check to run (ms\|s\|m\|h). Defaults to `0s`. |

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.test"></a>

```python
test: typing.List[str]
```

- *Type:* typing.List[str]

The test to perform as list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#test Service#test}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.interval"></a>

```python
interval: str
```

- *Type:* str

Time between running the check (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#interval Service#interval}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Consecutive failures needed to report unhealthy. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#retries Service#retries}

---

##### `start_period`<sup>Optional</sup> <a name="start_period" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.startPeriod"></a>

```python
start_period: str
```

- *Type:* str

Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#start_period Service#start_period}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#timeout Service#timeout}

---

### ServiceTaskSpecContainerSpecHosts <a name="ServiceTaskSpecContainerSpecHosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecHosts(
  host: str,
  ip: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.property.host">host</a></code> | <code>str</code> | The name of the host. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.property.ip">ip</a></code> | <code>str</code> | The ip of the host. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.property.host"></a>

```python
host: str
```

- *Type:* str

The name of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#host Service#host}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.property.ip"></a>

```python
ip: str
```

- *Type:* str

The ip of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#ip Service#ip}

---

### ServiceTaskSpecContainerSpecLabels <a name="ServiceTaskSpecContainerSpecLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecLabels(
  label: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.property.label">label</a></code> | <code>str</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.property.value">value</a></code> | <code>str</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.property.label"></a>

```python
label: str
```

- *Type:* str

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#label Service#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#value Service#value}

---

### ServiceTaskSpecContainerSpecMounts <a name="ServiceTaskSpecContainerSpecMounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecMounts(
  target: str,
  type: str,
  bind_options: ServiceTaskSpecContainerSpecMountsBindOptions = None,
  read_only: typing.Union[bool, IResolvable] = None,
  source: str = None,
  tmpfs_options: ServiceTaskSpecContainerSpecMountsTmpfsOptions = None,
  volume_options: ServiceTaskSpecContainerSpecMountsVolumeOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.target">target</a></code> | <code>str</code> | Container path. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.type">type</a></code> | <code>str</code> | The mount type. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.bindOptions">bind_options</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a></code> | bind_options block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the mount should be read-only. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.source">source</a></code> | <code>str</code> | Mount source (e.g. a volume name, a host path). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.tmpfsOptions">tmpfs_options</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a></code> | tmpfs_options block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.volumeOptions">volume_options</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a></code> | volume_options block. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.target"></a>

```python
target: str
```

- *Type:* str

Container path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#target Service#target}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.type"></a>

```python
type: str
```

- *Type:* str

The mount type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#type Service#type}

---

##### `bind_options`<sup>Optional</sup> <a name="bind_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.bindOptions"></a>

```python
bind_options: ServiceTaskSpecContainerSpecMountsBindOptions
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a>

bind_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#bind_options Service#bind_options}

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the mount should be read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#read_only Service#read_only}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.source"></a>

```python
source: str
```

- *Type:* str

Mount source (e.g. a volume name, a host path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#source Service#source}

---

##### `tmpfs_options`<sup>Optional</sup> <a name="tmpfs_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.tmpfsOptions"></a>

```python
tmpfs_options: ServiceTaskSpecContainerSpecMountsTmpfsOptions
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a>

tmpfs_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#tmpfs_options Service#tmpfs_options}

---

##### `volume_options`<sup>Optional</sup> <a name="volume_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.volumeOptions"></a>

```python
volume_options: ServiceTaskSpecContainerSpecMountsVolumeOptions
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a>

volume_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#volume_options Service#volume_options}

---

### ServiceTaskSpecContainerSpecMountsBindOptions <a name="ServiceTaskSpecContainerSpecMountsBindOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecMountsBindOptions(
  propagation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions.property.propagation">propagation</a></code> | <code>str</code> | Bind propagation refers to whether or not mounts created within a given bind-mount or named volume can be propagated to replicas of that mount. |

---

##### `propagation`<sup>Optional</sup> <a name="propagation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions.property.propagation"></a>

```python
propagation: str
```

- *Type:* str

Bind propagation refers to whether or not mounts created within a given bind-mount or named volume can be propagated to replicas of that mount.

See the [docs](https://docs.docker.com/storage/bind-mounts/#configure-bind-propagation) for details. Defaults to `rprivate`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#propagation Service#propagation}

---

### ServiceTaskSpecContainerSpecMountsTmpfsOptions <a name="ServiceTaskSpecContainerSpecMountsTmpfsOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecMountsTmpfsOptions(
  mode: typing.Union[int, float] = None,
  size_bytes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.property.mode">mode</a></code> | <code>typing.Union[int, float]</code> | The permission mode for the tmpfs mount in an integer. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.property.sizeBytes">size_bytes</a></code> | <code>typing.Union[int, float]</code> | The size for the tmpfs mount in bytes. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.property.mode"></a>

```python
mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The permission mode for the tmpfs mount in an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#mode Service#mode}

---

##### `size_bytes`<sup>Optional</sup> <a name="size_bytes" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.property.sizeBytes"></a>

```python
size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size for the tmpfs mount in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#size_bytes Service#size_bytes}

---

### ServiceTaskSpecContainerSpecMountsVolumeOptions <a name="ServiceTaskSpecContainerSpecMountsVolumeOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecMountsVolumeOptions(
  driver_name: str = None,
  driver_options: typing.Mapping[str] = None,
  labels: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels]] = None,
  no_copy: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.driverName">driver_name</a></code> | <code>str</code> | Name of the driver to use to create the volume. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.driverOptions">driver_options</a></code> | <code>typing.Mapping[str]</code> | key/value map of driver specific options. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.noCopy">no_copy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Populate volume with data from the target. |

---

##### `driver_name`<sup>Optional</sup> <a name="driver_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.driverName"></a>

```python
driver_name: str
```

- *Type:* str

Name of the driver to use to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#driver_name Service#driver_name}

---

##### `driver_options`<sup>Optional</sup> <a name="driver_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.driverOptions"></a>

```python
driver_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

key/value map of driver specific options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#driver_options Service#driver_options}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.labels"></a>

```python
labels: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#labels Service#labels}

---

##### `no_copy`<sup>Optional</sup> <a name="no_copy" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.noCopy"></a>

```python
no_copy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Populate volume with data from the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#no_copy Service#no_copy}

---

### ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels <a name="ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels(
  label: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.property.label">label</a></code> | <code>str</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.property.value">value</a></code> | <code>str</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.property.label"></a>

```python
label: str
```

- *Type:* str

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#label Service#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#value Service#value}

---

### ServiceTaskSpecContainerSpecPrivileges <a name="ServiceTaskSpecContainerSpecPrivileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecPrivileges(
  credential_spec: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec = None,
  se_linux_context: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.property.credentialSpec">credential_spec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a></code> | credential_spec block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.property.seLinuxContext">se_linux_context</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a></code> | se_linux_context block. |

---

##### `credential_spec`<sup>Optional</sup> <a name="credential_spec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.property.credentialSpec"></a>

```python
credential_spec: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a>

credential_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#credential_spec Service#credential_spec}

---

##### `se_linux_context`<sup>Optional</sup> <a name="se_linux_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.property.seLinuxContext"></a>

```python
se_linux_context: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a>

se_linux_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#se_linux_context Service#se_linux_context}

---

### ServiceTaskSpecContainerSpecPrivilegesCredentialSpec <a name="ServiceTaskSpecContainerSpecPrivilegesCredentialSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec(
  file: str = None,
  registry: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.property.file">file</a></code> | <code>str</code> | Load credential spec from this file. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.property.registry">registry</a></code> | <code>str</code> | Load credential spec from this value in the Windows registry. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.property.file"></a>

```python
file: str
```

- *Type:* str

Load credential spec from this file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#file Service#file}

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.property.registry"></a>

```python
registry: str
```

- *Type:* str

Load credential spec from this value in the Windows registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#registry Service#registry}

---

### ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext <a name="ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext(
  disable: typing.Union[bool, IResolvable] = None,
  level: str = None,
  role: str = None,
  type: str = None,
  user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.disable">disable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable SELinux. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.level">level</a></code> | <code>str</code> | SELinux level label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.role">role</a></code> | <code>str</code> | SELinux role label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.type">type</a></code> | <code>str</code> | SELinux type label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.user">user</a></code> | <code>str</code> | SELinux user label. |

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.disable"></a>

```python
disable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable SELinux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#disable Service#disable}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.level"></a>

```python
level: str
```

- *Type:* str

SELinux level label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#level Service#level}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.role"></a>

```python
role: str
```

- *Type:* str

SELinux role label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#role Service#role}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.type"></a>

```python
type: str
```

- *Type:* str

SELinux type label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#type Service#type}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.user"></a>

```python
user: str
```

- *Type:* str

SELinux user label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#user Service#user}

---

### ServiceTaskSpecContainerSpecSecrets <a name="ServiceTaskSpecContainerSpecSecrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecSecrets(
  file_name: str,
  secret_id: str,
  file_gid: str = None,
  file_mode: typing.Union[int, float] = None,
  file_uid: str = None,
  secret_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileName">file_name</a></code> | <code>str</code> | Represents the final filename in the filesystem. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.secretId">secret_id</a></code> | <code>str</code> | ID of the specific secret that we're referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileGid">file_gid</a></code> | <code>str</code> | Represents the file GID. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileMode">file_mode</a></code> | <code>typing.Union[int, float]</code> | Represents represents the FileMode of the file. Defaults to `0o444`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileUid">file_uid</a></code> | <code>str</code> | Represents the file UID. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.secretName">secret_name</a></code> | <code>str</code> | Name of the secret that this references, but this is just provided for lookup/display purposes. |

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

Represents the final filename in the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#file_name Service#file_name}

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

ID of the specific secret that we're referencing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#secret_id Service#secret_id}

---

##### `file_gid`<sup>Optional</sup> <a name="file_gid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileGid"></a>

```python
file_gid: str
```

- *Type:* str

Represents the file GID. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#file_gid Service#file_gid}

---

##### `file_mode`<sup>Optional</sup> <a name="file_mode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileMode"></a>

```python
file_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Represents represents the FileMode of the file. Defaults to `0o444`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#file_mode Service#file_mode}

---

##### `file_uid`<sup>Optional</sup> <a name="file_uid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileUid"></a>

```python
file_uid: str
```

- *Type:* str

Represents the file UID. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#file_uid Service#file_uid}

---

##### `secret_name`<sup>Optional</sup> <a name="secret_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Name of the secret that this references, but this is just provided for lookup/display purposes.

The config in the reference will be identified by its ID

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#secret_name Service#secret_name}

---

### ServiceTaskSpecLogDriver <a name="ServiceTaskSpecLogDriver" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecLogDriver(
  name: str,
  options: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.property.name">name</a></code> | <code>str</code> | The logging driver to use. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.property.options">options</a></code> | <code>typing.Mapping[str]</code> | The options for the logging driver. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.property.name"></a>

```python
name: str
```

- *Type:* str

The logging driver to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#name Service#name}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The options for the logging driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#options Service#options}

---

### ServiceTaskSpecNetworksAdvanced <a name="ServiceTaskSpecNetworksAdvanced" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecNetworksAdvanced(
  name: str,
  aliases: typing.List[str] = None,
  driver_opts: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.name">name</a></code> | <code>str</code> | The name/id of the network. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | The network aliases of the container in the specific network. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.driverOpts">driver_opts</a></code> | <code>typing.List[str]</code> | An array of driver options for the network, e.g. `opts1=value`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.name"></a>

```python
name: str
```

- *Type:* str

The name/id of the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#name Service#name}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

The network aliases of the container in the specific network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#aliases Service#aliases}

---

##### `driver_opts`<sup>Optional</sup> <a name="driver_opts" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.driverOpts"></a>

```python
driver_opts: typing.List[str]
```

- *Type:* typing.List[str]

An array of driver options for the network, e.g. `opts1=value`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#driver_opts Service#driver_opts}

---

### ServiceTaskSpecPlacement <a name="ServiceTaskSpecPlacement" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecPlacement(
  constraints: typing.List[str] = None,
  max_replicas: typing.Union[int, float] = None,
  platforms: typing.Union[IResolvable, typing.List[ServiceTaskSpecPlacementPlatforms]] = None,
  prefs: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.constraints">constraints</a></code> | <code>typing.List[str]</code> | An array of constraints. e.g.: `node.role==manager`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.maxReplicas">max_replicas</a></code> | <code>typing.Union[int, float]</code> | Maximum number of replicas for per node (default value is `0`, which is unlimited). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.platforms">platforms</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>]]</code> | platforms block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.prefs">prefs</a></code> | <code>typing.List[str]</code> | Preferences provide a way to make the scheduler aware of factors such as topology. |

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.constraints"></a>

```python
constraints: typing.List[str]
```

- *Type:* typing.List[str]

An array of constraints. e.g.: `node.role==manager`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#constraints Service#constraints}

---

##### `max_replicas`<sup>Optional</sup> <a name="max_replicas" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.maxReplicas"></a>

```python
max_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of replicas for per node (default value is `0`, which is unlimited).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#max_replicas Service#max_replicas}

---

##### `platforms`<sup>Optional</sup> <a name="platforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.platforms"></a>

```python
platforms: typing.Union[IResolvable, typing.List[ServiceTaskSpecPlacementPlatforms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>]]

platforms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#platforms Service#platforms}

---

##### `prefs`<sup>Optional</sup> <a name="prefs" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.prefs"></a>

```python
prefs: typing.List[str]
```

- *Type:* typing.List[str]

Preferences provide a way to make the scheduler aware of factors such as topology.

They are provided in order from highest to lowest precedence, e.g.: `spread=node.role.manager`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#prefs Service#prefs}

---

### ServiceTaskSpecPlacementPlatforms <a name="ServiceTaskSpecPlacementPlatforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecPlacementPlatforms(
  architecture: str,
  os: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.property.architecture">architecture</a></code> | <code>str</code> | The architecture, e.g. `amd64`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.property.os">os</a></code> | <code>str</code> | The operation system, e.g. `linux`. |

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

The architecture, e.g. `amd64`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#architecture Service#architecture}

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.property.os"></a>

```python
os: str
```

- *Type:* str

The operation system, e.g. `linux`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#os Service#os}

---

### ServiceTaskSpecResources <a name="ServiceTaskSpecResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecResources.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecResources(
  limits: ServiceTaskSpecResourcesLimits = None,
  reservation: ServiceTaskSpecResourcesReservation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources.property.reservation">reservation</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a></code> | reservation block. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-docker.service.ServiceTaskSpecResources.property.limits"></a>

```python
limits: ServiceTaskSpecResourcesLimits
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#limits Service#limits}

---

##### `reservation`<sup>Optional</sup> <a name="reservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResources.property.reservation"></a>

```python
reservation: ServiceTaskSpecResourcesReservation
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a>

reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#reservation Service#reservation}

---

### ServiceTaskSpecResourcesLimits <a name="ServiceTaskSpecResourcesLimits" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecResourcesLimits(
  memory_bytes: typing.Union[int, float] = None,
  nano_cpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.property.memoryBytes">memory_bytes</a></code> | <code>typing.Union[int, float]</code> | The amounf of memory in bytes the container allocates. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.property.nanoCpus">nano_cpus</a></code> | <code>typing.Union[int, float]</code> | CPU shares in units of `1/1e9` (or `10^-9`) of the CPU. Should be at least `1000000`. |

---

##### `memory_bytes`<sup>Optional</sup> <a name="memory_bytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.property.memoryBytes"></a>

```python
memory_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amounf of memory in bytes the container allocates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#memory_bytes Service#memory_bytes}

---

##### `nano_cpus`<sup>Optional</sup> <a name="nano_cpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.property.nanoCpus"></a>

```python
nano_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

CPU shares in units of `1/1e9` (or `10^-9`) of the CPU. Should be at least `1000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#nano_cpus Service#nano_cpus}

---

### ServiceTaskSpecResourcesReservation <a name="ServiceTaskSpecResourcesReservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecResourcesReservation(
  generic_resources: ServiceTaskSpecResourcesReservationGenericResources = None,
  memory_bytes: typing.Union[int, float] = None,
  nano_cpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.genericResources">generic_resources</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a></code> | generic_resources block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.memoryBytes">memory_bytes</a></code> | <code>typing.Union[int, float]</code> | The amounf of memory in bytes the container allocates. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.nanoCpus">nano_cpus</a></code> | <code>typing.Union[int, float]</code> | CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least `1000000`. |

---

##### `generic_resources`<sup>Optional</sup> <a name="generic_resources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.genericResources"></a>

```python
generic_resources: ServiceTaskSpecResourcesReservationGenericResources
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a>

generic_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#generic_resources Service#generic_resources}

---

##### `memory_bytes`<sup>Optional</sup> <a name="memory_bytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.memoryBytes"></a>

```python
memory_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amounf of memory in bytes the container allocates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#memory_bytes Service#memory_bytes}

---

##### `nano_cpus`<sup>Optional</sup> <a name="nano_cpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.nanoCpus"></a>

```python
nano_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least `1000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#nano_cpus Service#nano_cpus}

---

### ServiceTaskSpecResourcesReservationGenericResources <a name="ServiceTaskSpecResourcesReservationGenericResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecResourcesReservationGenericResources(
  discrete_resources_spec: typing.List[str] = None,
  named_resources_spec: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.property.discreteResourcesSpec">discrete_resources_spec</a></code> | <code>typing.List[str]</code> | The Integer resources. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.property.namedResourcesSpec">named_resources_spec</a></code> | <code>typing.List[str]</code> | The String resources. |

---

##### `discrete_resources_spec`<sup>Optional</sup> <a name="discrete_resources_spec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.property.discreteResourcesSpec"></a>

```python
discrete_resources_spec: typing.List[str]
```

- *Type:* typing.List[str]

The Integer resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#discrete_resources_spec Service#discrete_resources_spec}

---

##### `named_resources_spec`<sup>Optional</sup> <a name="named_resources_spec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.property.namedResourcesSpec"></a>

```python
named_resources_spec: typing.List[str]
```

- *Type:* typing.List[str]

The String resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#named_resources_spec Service#named_resources_spec}

---

### ServiceTaskSpecRestartPolicy <a name="ServiceTaskSpecRestartPolicy" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecRestartPolicy(
  condition: str = None,
  delay: str = None,
  max_attempts: typing.Union[int, float] = None,
  window: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.condition">condition</a></code> | <code>str</code> | Condition for restart. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.delay">delay</a></code> | <code>str</code> | Delay between restart attempts (ms\|s\|m\|h). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | Maximum attempts to restart a given container before giving up (default value is `0`, which is ignored). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.window">window</a></code> | <code>str</code> | The time window used to evaluate the restart policy (default value is `0`, which is unbounded) (ms\|s\|m\|h). |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.condition"></a>

```python
condition: str
```

- *Type:* str

Condition for restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#condition Service#condition}

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.delay"></a>

```python
delay: str
```

- *Type:* str

Delay between restart attempts (ms|s|m|h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#delay Service#delay}

---

##### `max_attempts`<sup>Optional</sup> <a name="max_attempts" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum attempts to restart a given container before giving up (default value is `0`, which is ignored).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#max_attempts Service#max_attempts}

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.window"></a>

```python
window: str
```

- *Type:* str

The time window used to evaluate the restart policy (default value is `0`, which is unbounded) (ms|s|m|h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#window Service#window}

---

### ServiceUpdateConfig <a name="ServiceUpdateConfig" id="@cdktf/provider-docker.service.ServiceUpdateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceUpdateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceUpdateConfig(
  delay: str = None,
  failure_action: str = None,
  max_failure_ratio: str = None,
  monitor: str = None,
  order: str = None,
  parallelism: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.delay">delay</a></code> | <code>str</code> | Delay between task updates `(ns\|us\|ms\|s\|m\|h)`. Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.failureAction">failure_action</a></code> | <code>str</code> | Action on update failure: `pause`, `continue` or `rollback`. Defaults to `pause`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.maxFailureRatio">max_failure_ratio</a></code> | <code>str</code> | Failure rate to tolerate during an update. Defaults to `0.0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.monitor">monitor</a></code> | <code>str</code> | Duration after each task update to monitor for failure (ns\|us\|ms\|s\|m\|h). Defaults to `5s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.order">order</a></code> | <code>str</code> | Update order: either 'stop-first' or 'start-first'. Defaults to `stop-first`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | Maximum number of tasks to be updated in one iteration. Defaults to `1`. |

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.delay"></a>

```python
delay: str
```

- *Type:* str

Delay between task updates `(ns|us|ms|s|m|h)`. Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#delay Service#delay}

---

##### `failure_action`<sup>Optional</sup> <a name="failure_action" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.failureAction"></a>

```python
failure_action: str
```

- *Type:* str

Action on update failure: `pause`, `continue` or `rollback`. Defaults to `pause`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#failure_action Service#failure_action}

---

##### `max_failure_ratio`<sup>Optional</sup> <a name="max_failure_ratio" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.maxFailureRatio"></a>

```python
max_failure_ratio: str
```

- *Type:* str

Failure rate to tolerate during an update. Defaults to `0.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#max_failure_ratio Service#max_failure_ratio}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.monitor"></a>

```python
monitor: str
```

- *Type:* str

Duration after each task update to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#monitor Service#monitor}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.order"></a>

```python
order: str
```

- *Type:* str

Update order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#order Service#order}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.parallelism"></a>

```python
parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of tasks to be updated in one iteration. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#parallelism Service#parallelism}

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceAuthOutputReference <a name="ServiceAuthOutputReference" id="@cdktf/provider-docker.service.ServiceAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.serverAddressInput">server_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.serverAddress">server_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `server_address_input`<sup>Optional</sup> <a name="server_address_input" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.serverAddressInput"></a>

```python
server_address_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `server_address`<sup>Required</sup> <a name="server_address" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.serverAddress"></a>

```python
server_address: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.internalValue"></a>

```python
internal_value: ServiceAuth
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

---


### ServiceConvergeConfigOutputReference <a name="ServiceConvergeConfigOutputReference" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceConvergeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resetDelay">reset_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delay` <a name="reset_delay" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resetDelay"></a>

```python
def reset_delay() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.delayInput">delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.delay">delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delay_input`<sup>Optional</sup> <a name="delay_input" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.delayInput"></a>

```python
delay_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.delay"></a>

```python
delay: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.internalValue"></a>

```python
internal_value: ServiceConvergeConfig
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

---


### ServiceEndpointSpecOutputReference <a name="ServiceEndpointSpecOutputReference" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceEndpointSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.putPorts">put_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resetPorts">reset_ports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ports` <a name="put_ports" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.putPorts"></a>

```python
def put_ports(
  value: typing.Union[IResolvable, typing.List[ServiceEndpointSpecPorts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.putPorts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>]]

---

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList">ServiceEndpointSpecPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.portsInput">ports_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.ports"></a>

```python
ports: ServiceEndpointSpecPortsList
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList">ServiceEndpointSpecPortsList</a>

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.portsInput"></a>

```python
ports_input: typing.Union[IResolvable, typing.List[ServiceEndpointSpecPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>]]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.internalValue"></a>

```python
internal_value: ServiceEndpointSpec
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

---


### ServiceEndpointSpecPortsList <a name="ServiceEndpointSpecPortsList" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceEndpointSpecPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceEndpointSpecPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceEndpointSpecPorts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>]]

---


### ServiceEndpointSpecPortsOutputReference <a name="ServiceEndpointSpecPortsOutputReference" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceEndpointSpecPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetPublishedPort">reset_published_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetPublishMode">reset_publish_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_published_port` <a name="reset_published_port" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetPublishedPort"></a>

```python
def reset_published_port() -> None
```

##### `reset_publish_mode` <a name="reset_publish_mode" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetPublishMode"></a>

```python
def reset_publish_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishedPortInput">published_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishModeInput">publish_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.targetPortInput">target_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishedPort">published_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishMode">publish_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.targetPort">target_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `published_port_input`<sup>Optional</sup> <a name="published_port_input" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishedPortInput"></a>

```python
published_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publish_mode_input`<sup>Optional</sup> <a name="publish_mode_input" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishModeInput"></a>

```python
publish_mode_input: str
```

- *Type:* str

---

##### `target_port_input`<sup>Optional</sup> <a name="target_port_input" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.targetPortInput"></a>

```python
target_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `published_port`<sup>Required</sup> <a name="published_port" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishedPort"></a>

```python
published_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publish_mode`<sup>Required</sup> <a name="publish_mode" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishMode"></a>

```python
publish_mode: str
```

- *Type:* str

---

##### `target_port`<sup>Required</sup> <a name="target_port" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.targetPort"></a>

```python
target_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceEndpointSpecPorts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>]

---


### ServiceLabelsList <a name="ServiceLabelsList" id="@cdktf/provider-docker.service.ServiceLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.service.ServiceLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.service.ServiceLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>]]

---


### ServiceLabelsOutputReference <a name="ServiceLabelsOutputReference" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>]

---


### ServiceModeOutputReference <a name="ServiceModeOutputReference" id="@cdktf/provider-docker.service.ServiceModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceModeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.putReplicated">put_replicated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.resetGlobal">reset_global</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.resetReplicated">reset_replicated</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceModeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceModeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceModeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_replicated` <a name="put_replicated" id="@cdktf/provider-docker.service.ServiceModeOutputReference.putReplicated"></a>

```python
def put_replicated(
  replicas: typing.Union[int, float] = None
) -> None
```

###### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-docker.service.ServiceModeOutputReference.putReplicated.parameter.replicas"></a>

- *Type:* typing.Union[int, float]

The amount of replicas of the service. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#replicas Service#replicas}

---

##### `reset_global` <a name="reset_global" id="@cdktf/provider-docker.service.ServiceModeOutputReference.resetGlobal"></a>

```python
def reset_global() -> None
```

##### `reset_replicated` <a name="reset_replicated" id="@cdktf/provider-docker.service.ServiceModeOutputReference.resetReplicated"></a>

```python
def reset_replicated() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.replicated">replicated</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference">ServiceModeReplicatedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.globalInput">global_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.replicatedInput">replicated_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.global">global</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replicated`<sup>Required</sup> <a name="replicated" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.replicated"></a>

```python
replicated: ServiceModeReplicatedOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference">ServiceModeReplicatedOutputReference</a>

---

##### `global_input`<sup>Optional</sup> <a name="global_input" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.globalInput"></a>

```python
global_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replicated_input`<sup>Optional</sup> <a name="replicated_input" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.replicatedInput"></a>

```python
replicated_input: ServiceModeReplicated
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a>

---

##### `global`<sup>Required</sup> <a name="global" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.global"></a>

```python
global: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.internalValue"></a>

```python
internal_value: ServiceMode
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

---


### ServiceModeReplicatedOutputReference <a name="ServiceModeReplicatedOutputReference" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceModeReplicatedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resetReplicas">reset_replicas</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_replicas` <a name="reset_replicas" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resetReplicas"></a>

```python
def reset_replicas() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.replicasInput">replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.replicas">replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replicas_input`<sup>Optional</sup> <a name="replicas_input" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.replicasInput"></a>

```python
replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.replicas"></a>

```python
replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.internalValue"></a>

```python
internal_value: ServiceModeReplicated
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a>

---


### ServiceRollbackConfigOutputReference <a name="ServiceRollbackConfigOutputReference" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceRollbackConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetDelay">reset_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetFailureAction">reset_failure_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetMaxFailureRatio">reset_max_failure_ratio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetMonitor">reset_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetParallelism">reset_parallelism</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delay` <a name="reset_delay" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetDelay"></a>

```python
def reset_delay() -> None
```

##### `reset_failure_action` <a name="reset_failure_action" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetFailureAction"></a>

```python
def reset_failure_action() -> None
```

##### `reset_max_failure_ratio` <a name="reset_max_failure_ratio" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetMaxFailureRatio"></a>

```python
def reset_max_failure_ratio() -> None
```

##### `reset_monitor` <a name="reset_monitor" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetMonitor"></a>

```python
def reset_monitor() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_parallelism` <a name="reset_parallelism" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetParallelism"></a>

```python
def reset_parallelism() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.delayInput">delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.failureActionInput">failure_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.maxFailureRatioInput">max_failure_ratio_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.monitorInput">monitor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.parallelismInput">parallelism_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.delay">delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.failureAction">failure_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.maxFailureRatio">max_failure_ratio</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.monitor">monitor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delay_input`<sup>Optional</sup> <a name="delay_input" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.delayInput"></a>

```python
delay_input: str
```

- *Type:* str

---

##### `failure_action_input`<sup>Optional</sup> <a name="failure_action_input" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.failureActionInput"></a>

```python
failure_action_input: str
```

- *Type:* str

---

##### `max_failure_ratio_input`<sup>Optional</sup> <a name="max_failure_ratio_input" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.maxFailureRatioInput"></a>

```python
max_failure_ratio_input: str
```

- *Type:* str

---

##### `monitor_input`<sup>Optional</sup> <a name="monitor_input" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.monitorInput"></a>

```python
monitor_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `parallelism_input`<sup>Optional</sup> <a name="parallelism_input" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.parallelismInput"></a>

```python
parallelism_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.delay"></a>

```python
delay: str
```

- *Type:* str

---

##### `failure_action`<sup>Required</sup> <a name="failure_action" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.failureAction"></a>

```python
failure_action: str
```

- *Type:* str

---

##### `max_failure_ratio`<sup>Required</sup> <a name="max_failure_ratio" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.maxFailureRatio"></a>

```python
max_failure_ratio: str
```

- *Type:* str

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.monitor"></a>

```python
monitor: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.parallelism"></a>

```python
parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.internalValue"></a>

```python
internal_value: ServiceRollbackConfig
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

---


### ServiceTaskSpecContainerSpecConfigsList <a name="ServiceTaskSpecContainerSpecConfigsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceTaskSpecContainerSpecConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>]]

---


### ServiceTaskSpecContainerSpecConfigsOutputReference <a name="ServiceTaskSpecContainerSpecConfigsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetConfigName">reset_config_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileGid">reset_file_gid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileMode">reset_file_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileUid">reset_file_uid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_config_name` <a name="reset_config_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetConfigName"></a>

```python
def reset_config_name() -> None
```

##### `reset_file_gid` <a name="reset_file_gid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileGid"></a>

```python
def reset_file_gid() -> None
```

##### `reset_file_mode` <a name="reset_file_mode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileMode"></a>

```python
def reset_file_mode() -> None
```

##### `reset_file_uid` <a name="reset_file_uid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileUid"></a>

```python
def reset_file_uid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configIdInput">config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configNameInput">config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileGidInput">file_gid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileModeInput">file_mode_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileNameInput">file_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileUidInput">file_uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configName">config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileGid">file_gid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileMode">file_mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileUid">file_uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_id_input`<sup>Optional</sup> <a name="config_id_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configIdInput"></a>

```python
config_id_input: str
```

- *Type:* str

---

##### `config_name_input`<sup>Optional</sup> <a name="config_name_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configNameInput"></a>

```python
config_name_input: str
```

- *Type:* str

---

##### `file_gid_input`<sup>Optional</sup> <a name="file_gid_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileGidInput"></a>

```python
file_gid_input: str
```

- *Type:* str

---

##### `file_mode_input`<sup>Optional</sup> <a name="file_mode_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileModeInput"></a>

```python
file_mode_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `file_name_input`<sup>Optional</sup> <a name="file_name_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileNameInput"></a>

```python
file_name_input: str
```

- *Type:* str

---

##### `file_uid_input`<sup>Optional</sup> <a name="file_uid_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileUidInput"></a>

```python
file_uid_input: str
```

- *Type:* str

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `config_name`<sup>Required</sup> <a name="config_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configName"></a>

```python
config_name: str
```

- *Type:* str

---

##### `file_gid`<sup>Required</sup> <a name="file_gid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileGid"></a>

```python
file_gid: str
```

- *Type:* str

---

##### `file_mode`<sup>Required</sup> <a name="file_mode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileMode"></a>

```python
file_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `file_uid`<sup>Required</sup> <a name="file_uid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileUid"></a>

```python
file_uid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceTaskSpecContainerSpecConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>]

---


### ServiceTaskSpecContainerSpecDnsConfigOutputReference <a name="ServiceTaskSpecContainerSpecDnsConfigOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecDnsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resetSearch">reset_search</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_options` <a name="reset_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resetSearch"></a>

```python
def reset_search() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.nameserversInput">nameservers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.optionsInput">options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.searchInput">search_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.nameservers">nameservers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.options">options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.search">search</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nameservers_input`<sup>Optional</sup> <a name="nameservers_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.nameserversInput"></a>

```python
nameservers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.optionsInput"></a>

```python
options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.searchInput"></a>

```python
search_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.nameservers"></a>

```python
nameservers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.search"></a>

```python
search: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpecContainerSpecDnsConfig
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a>

---


### ServiceTaskSpecContainerSpecHealthcheckOutputReference <a name="ServiceTaskSpecContainerSpecHealthcheckOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecHealthcheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetStartPeriod">reset_start_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_retries` <a name="reset_retries" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_start_period` <a name="reset_start_period" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetStartPeriod"></a>

```python
def reset_start_period() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.startPeriodInput">start_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.testInput">test_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.startPeriod">start_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.test">test</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_period_input`<sup>Optional</sup> <a name="start_period_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.startPeriodInput"></a>

```python
start_period_input: str
```

- *Type:* str

---

##### `test_input`<sup>Optional</sup> <a name="test_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.testInput"></a>

```python
test_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_period`<sup>Required</sup> <a name="start_period" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.startPeriod"></a>

```python
start_period: str
```

- *Type:* str

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.test"></a>

```python
test: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpecContainerSpecHealthcheck
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a>

---


### ServiceTaskSpecContainerSpecHostsList <a name="ServiceTaskSpecContainerSpecHostsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecHostsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceTaskSpecContainerSpecHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecHosts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>]]

---


### ServiceTaskSpecContainerSpecHostsOutputReference <a name="ServiceTaskSpecContainerSpecHostsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecHostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.ipInput">ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.ipInput"></a>

```python
ip_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceTaskSpecContainerSpecHosts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>]

---


### ServiceTaskSpecContainerSpecLabelsList <a name="ServiceTaskSpecContainerSpecLabelsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceTaskSpecContainerSpecLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>]]

---


### ServiceTaskSpecContainerSpecLabelsOutputReference <a name="ServiceTaskSpecContainerSpecLabelsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceTaskSpecContainerSpecLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>]

---


### ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference <a name="ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resetPropagation">reset_propagation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_propagation` <a name="reset_propagation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resetPropagation"></a>

```python
def reset_propagation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.propagationInput">propagation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.propagation">propagation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `propagation_input`<sup>Optional</sup> <a name="propagation_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.propagationInput"></a>

```python
propagation_input: str
```

- *Type:* str

---

##### `propagation`<sup>Required</sup> <a name="propagation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.propagation"></a>

```python
propagation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpecContainerSpecMountsBindOptions
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a>

---


### ServiceTaskSpecContainerSpecMountsList <a name="ServiceTaskSpecContainerSpecMountsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecMountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceTaskSpecContainerSpecMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>]]

---


### ServiceTaskSpecContainerSpecMountsOutputReference <a name="ServiceTaskSpecContainerSpecMountsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecMountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putBindOptions">put_bind_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putTmpfsOptions">put_tmpfs_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putVolumeOptions">put_volume_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetBindOptions">reset_bind_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetTmpfsOptions">reset_tmpfs_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetVolumeOptions">reset_volume_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bind_options` <a name="put_bind_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putBindOptions"></a>

```python
def put_bind_options(
  propagation: str = None
) -> None
```

###### `propagation`<sup>Optional</sup> <a name="propagation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putBindOptions.parameter.propagation"></a>

- *Type:* str

Bind propagation refers to whether or not mounts created within a given bind-mount or named volume can be propagated to replicas of that mount.

See the [docs](https://docs.docker.com/storage/bind-mounts/#configure-bind-propagation) for details. Defaults to `rprivate`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#propagation Service#propagation}

---

##### `put_tmpfs_options` <a name="put_tmpfs_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putTmpfsOptions"></a>

```python
def put_tmpfs_options(
  mode: typing.Union[int, float] = None,
  size_bytes: typing.Union[int, float] = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putTmpfsOptions.parameter.mode"></a>

- *Type:* typing.Union[int, float]

The permission mode for the tmpfs mount in an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#mode Service#mode}

---

###### `size_bytes`<sup>Optional</sup> <a name="size_bytes" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putTmpfsOptions.parameter.sizeBytes"></a>

- *Type:* typing.Union[int, float]

The size for the tmpfs mount in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#size_bytes Service#size_bytes}

---

##### `put_volume_options` <a name="put_volume_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putVolumeOptions"></a>

```python
def put_volume_options(
  driver_name: str = None,
  driver_options: typing.Mapping[str] = None,
  labels: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels]] = None,
  no_copy: typing.Union[bool, IResolvable] = None
) -> None
```

###### `driver_name`<sup>Optional</sup> <a name="driver_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putVolumeOptions.parameter.driverName"></a>

- *Type:* str

Name of the driver to use to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#driver_name Service#driver_name}

---

###### `driver_options`<sup>Optional</sup> <a name="driver_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putVolumeOptions.parameter.driverOptions"></a>

- *Type:* typing.Mapping[str]

key/value map of driver specific options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#driver_options Service#driver_options}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putVolumeOptions.parameter.labels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#labels Service#labels}

---

###### `no_copy`<sup>Optional</sup> <a name="no_copy" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putVolumeOptions.parameter.noCopy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Populate volume with data from the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#no_copy Service#no_copy}

---

##### `reset_bind_options` <a name="reset_bind_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetBindOptions"></a>

```python
def reset_bind_options() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_tmpfs_options` <a name="reset_tmpfs_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetTmpfsOptions"></a>

```python
def reset_tmpfs_options() -> None
```

##### `reset_volume_options` <a name="reset_volume_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetVolumeOptions"></a>

```python
def reset_volume_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.bindOptions">bind_options</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference">ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.tmpfsOptions">tmpfs_options</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference">ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.volumeOptions">volume_options</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference">ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.bindOptionsInput">bind_options_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.tmpfsOptionsInput">tmpfs_options_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.volumeOptionsInput">volume_options_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bind_options`<sup>Required</sup> <a name="bind_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.bindOptions"></a>

```python
bind_options: ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference">ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference</a>

---

##### `tmpfs_options`<sup>Required</sup> <a name="tmpfs_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.tmpfsOptions"></a>

```python
tmpfs_options: ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference">ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference</a>

---

##### `volume_options`<sup>Required</sup> <a name="volume_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.volumeOptions"></a>

```python
volume_options: ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference">ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference</a>

---

##### `bind_options_input`<sup>Optional</sup> <a name="bind_options_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.bindOptionsInput"></a>

```python
bind_options_input: ServiceTaskSpecContainerSpecMountsBindOptions
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a>

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `tmpfs_options_input`<sup>Optional</sup> <a name="tmpfs_options_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.tmpfsOptionsInput"></a>

```python
tmpfs_options_input: ServiceTaskSpecContainerSpecMountsTmpfsOptions
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `volume_options_input`<sup>Optional</sup> <a name="volume_options_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.volumeOptionsInput"></a>

```python
volume_options_input: ServiceTaskSpecContainerSpecMountsVolumeOptions
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a>

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceTaskSpecContainerSpecMounts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>]

---


### ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference <a name="ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resetSizeBytes">reset_size_bytes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_size_bytes` <a name="reset_size_bytes" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resetSizeBytes"></a>

```python
def reset_size_bytes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.modeInput">mode_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.sizeBytesInput">size_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.mode">mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.sizeBytes">size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.modeInput"></a>

```python
mode_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_bytes_input`<sup>Optional</sup> <a name="size_bytes_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.sizeBytesInput"></a>

```python
size_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.mode"></a>

```python
mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_bytes`<sup>Required</sup> <a name="size_bytes" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.sizeBytes"></a>

```python
size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpecContainerSpecMountsTmpfsOptions
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a>

---


### ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList <a name="ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>]]

---


### ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference <a name="ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>]

---


### ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference <a name="ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetDriverName">reset_driver_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetDriverOptions">reset_driver_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetNoCopy">reset_no_copy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_labels` <a name="put_labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.putLabels"></a>

```python
def put_labels(
  value: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.putLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>]]

---

##### `reset_driver_name` <a name="reset_driver_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetDriverName"></a>

```python
def reset_driver_name() -> None
```

##### `reset_driver_options` <a name="reset_driver_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetDriverOptions"></a>

```python
def reset_driver_options() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_no_copy` <a name="reset_no_copy" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetNoCopy"></a>

```python
def reset_no_copy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverNameInput">driver_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverOptionsInput">driver_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.noCopyInput">no_copy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverName">driver_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverOptions">driver_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.noCopy">no_copy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.labels"></a>

```python
labels: ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList</a>

---

##### `driver_name_input`<sup>Optional</sup> <a name="driver_name_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverNameInput"></a>

```python
driver_name_input: str
```

- *Type:* str

---

##### `driver_options_input`<sup>Optional</sup> <a name="driver_options_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverOptionsInput"></a>

```python
driver_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>]]

---

##### `no_copy_input`<sup>Optional</sup> <a name="no_copy_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.noCopyInput"></a>

```python
no_copy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `driver_name`<sup>Required</sup> <a name="driver_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverName"></a>

```python
driver_name: str
```

- *Type:* str

---

##### `driver_options`<sup>Required</sup> <a name="driver_options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverOptions"></a>

```python
driver_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `no_copy`<sup>Required</sup> <a name="no_copy" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.noCopy"></a>

```python
no_copy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpecContainerSpecMountsVolumeOptions
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a>

---


### ServiceTaskSpecContainerSpecOutputReference <a name="ServiceTaskSpecContainerSpecOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putConfigs">put_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putDnsConfig">put_dns_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHealthcheck">put_healthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHosts">put_hosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putMounts">put_mounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putPrivileges">put_privileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putSecrets">put_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetConfigs">reset_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetDir">reset_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetDnsConfig">reset_dns_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHealthcheck">reset_healthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHosts">reset_hosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetIsolation">reset_isolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetMounts">reset_mounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetPrivileges">reset_privileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetSecrets">reset_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetStopGracePeriod">reset_stop_grace_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetStopSignal">reset_stop_signal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetSysctl">reset_sysctl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_configs` <a name="put_configs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putConfigs"></a>

```python
def put_configs(
  value: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>]]

---

##### `put_dns_config` <a name="put_dns_config" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putDnsConfig"></a>

```python
def put_dns_config(
  nameservers: typing.List[str],
  options: typing.List[str] = None,
  search: typing.List[str] = None
) -> None
```

###### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putDnsConfig.parameter.nameservers"></a>

- *Type:* typing.List[str]

The IP addresses of the name servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#nameservers Service#nameservers}

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putDnsConfig.parameter.options"></a>

- *Type:* typing.List[str]

A list of internal resolver variables to be modified (e.g., `debug`, `ndots:3`, etc.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#options Service#options}

---

###### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putDnsConfig.parameter.search"></a>

- *Type:* typing.List[str]

A search list for host-name lookup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#search Service#search}

---

##### `put_healthcheck` <a name="put_healthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHealthcheck"></a>

```python
def put_healthcheck(
  test: typing.List[str],
  interval: str = None,
  retries: typing.Union[int, float] = None,
  start_period: str = None,
  timeout: str = None
) -> None
```

###### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHealthcheck.parameter.test"></a>

- *Type:* typing.List[str]

The test to perform as list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#test Service#test}

---

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHealthcheck.parameter.interval"></a>

- *Type:* str

Time between running the check (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#interval Service#interval}

---

###### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHealthcheck.parameter.retries"></a>

- *Type:* typing.Union[int, float]

Consecutive failures needed to report unhealthy. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#retries Service#retries}

---

###### `start_period`<sup>Optional</sup> <a name="start_period" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHealthcheck.parameter.startPeriod"></a>

- *Type:* str

Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#start_period Service#start_period}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHealthcheck.parameter.timeout"></a>

- *Type:* str

Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#timeout Service#timeout}

---

##### `put_hosts` <a name="put_hosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHosts"></a>

```python
def put_hosts(
  value: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecHosts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHosts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>]]

---

##### `put_labels` <a name="put_labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putLabels"></a>

```python
def put_labels(
  value: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>]]

---

##### `put_mounts` <a name="put_mounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putMounts"></a>

```python
def put_mounts(
  value: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecMounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putMounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>]]

---

##### `put_privileges` <a name="put_privileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putPrivileges"></a>

```python
def put_privileges(
  credential_spec: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec = None,
  se_linux_context: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext = None
) -> None
```

###### `credential_spec`<sup>Optional</sup> <a name="credential_spec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putPrivileges.parameter.credentialSpec"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a>

credential_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#credential_spec Service#credential_spec}

---

###### `se_linux_context`<sup>Optional</sup> <a name="se_linux_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putPrivileges.parameter.seLinuxContext"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a>

se_linux_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#se_linux_context Service#se_linux_context}

---

##### `put_secrets` <a name="put_secrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putSecrets"></a>

```python
def put_secrets(
  value: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecSecrets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putSecrets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>]]

---

##### `reset_args` <a name="reset_args" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_configs` <a name="reset_configs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetConfigs"></a>

```python
def reset_configs() -> None
```

##### `reset_dir` <a name="reset_dir" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetDir"></a>

```python
def reset_dir() -> None
```

##### `reset_dns_config` <a name="reset_dns_config" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetDnsConfig"></a>

```python
def reset_dns_config() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_groups` <a name="reset_groups" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_healthcheck` <a name="reset_healthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHealthcheck"></a>

```python
def reset_healthcheck() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_hosts` <a name="reset_hosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHosts"></a>

```python
def reset_hosts() -> None
```

##### `reset_isolation` <a name="reset_isolation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetIsolation"></a>

```python
def reset_isolation() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_mounts` <a name="reset_mounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetMounts"></a>

```python
def reset_mounts() -> None
```

##### `reset_privileges` <a name="reset_privileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetPrivileges"></a>

```python
def reset_privileges() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_secrets` <a name="reset_secrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetSecrets"></a>

```python
def reset_secrets() -> None
```

##### `reset_stop_grace_period` <a name="reset_stop_grace_period" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetStopGracePeriod"></a>

```python
def reset_stop_grace_period() -> None
```

##### `reset_stop_signal` <a name="reset_stop_signal" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetStopSignal"></a>

```python
def reset_stop_signal() -> None
```

##### `reset_sysctl` <a name="reset_sysctl" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetSysctl"></a>

```python
def reset_sysctl() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.configs">configs</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList">ServiceTaskSpecContainerSpecConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dnsConfig">dns_config</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference">ServiceTaskSpecContainerSpecDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference">ServiceTaskSpecContainerSpecHealthcheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hosts">hosts</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList">ServiceTaskSpecContainerSpecHostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList">ServiceTaskSpecContainerSpecLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.mounts">mounts</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList">ServiceTaskSpecContainerSpecMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.privileges">privileges</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference">ServiceTaskSpecContainerSpecPrivilegesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList">ServiceTaskSpecContainerSpecSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.configsInput">configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dirInput">dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dnsConfigInput">dns_config_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.envInput">env_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.groupsInput">groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.healthcheckInput">healthcheck_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostsInput">hosts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.isolationInput">isolation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.mountsInput">mounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.privilegesInput">privileges_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.secretsInput">secrets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopGracePeriodInput">stop_grace_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopSignalInput">stop_signal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.sysctlInput">sysctl_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dir">dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.env">env</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.isolation">isolation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopGracePeriod">stop_grace_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopSignal">stop_signal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.sysctl">sysctl</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configs`<sup>Required</sup> <a name="configs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.configs"></a>

```python
configs: ServiceTaskSpecContainerSpecConfigsList
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList">ServiceTaskSpecContainerSpecConfigsList</a>

---

##### `dns_config`<sup>Required</sup> <a name="dns_config" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dnsConfig"></a>

```python
dns_config: ServiceTaskSpecContainerSpecDnsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference">ServiceTaskSpecContainerSpecDnsConfigOutputReference</a>

---

##### `healthcheck`<sup>Required</sup> <a name="healthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.healthcheck"></a>

```python
healthcheck: ServiceTaskSpecContainerSpecHealthcheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference">ServiceTaskSpecContainerSpecHealthcheckOutputReference</a>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hosts"></a>

```python
hosts: ServiceTaskSpecContainerSpecHostsList
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList">ServiceTaskSpecContainerSpecHostsList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.labels"></a>

```python
labels: ServiceTaskSpecContainerSpecLabelsList
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList">ServiceTaskSpecContainerSpecLabelsList</a>

---

##### `mounts`<sup>Required</sup> <a name="mounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.mounts"></a>

```python
mounts: ServiceTaskSpecContainerSpecMountsList
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList">ServiceTaskSpecContainerSpecMountsList</a>

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.privileges"></a>

```python
privileges: ServiceTaskSpecContainerSpecPrivilegesOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference">ServiceTaskSpecContainerSpecPrivilegesOutputReference</a>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.secrets"></a>

```python
secrets: ServiceTaskSpecContainerSpecSecretsList
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList">ServiceTaskSpecContainerSpecSecretsList</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configs_input`<sup>Optional</sup> <a name="configs_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.configsInput"></a>

```python
configs_input: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>]]

---

##### `dir_input`<sup>Optional</sup> <a name="dir_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dirInput"></a>

```python
dir_input: str
```

- *Type:* str

---

##### `dns_config_input`<sup>Optional</sup> <a name="dns_config_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dnsConfigInput"></a>

```python
dns_config_input: ServiceTaskSpecContainerSpecDnsConfig
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a>

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.envInput"></a>

```python
env_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.groupsInput"></a>

```python
groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `healthcheck_input`<sup>Optional</sup> <a name="healthcheck_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.healthcheckInput"></a>

```python
healthcheck_input: ServiceTaskSpecContainerSpecHealthcheck
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a>

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostsInput"></a>

```python
hosts_input: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecHosts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>]]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `isolation_input`<sup>Optional</sup> <a name="isolation_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.isolationInput"></a>

```python
isolation_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>]]

---

##### `mounts_input`<sup>Optional</sup> <a name="mounts_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.mountsInput"></a>

```python
mounts_input: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>]]

---

##### `privileges_input`<sup>Optional</sup> <a name="privileges_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.privilegesInput"></a>

```python
privileges_input: ServiceTaskSpecContainerSpecPrivileges
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a>

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secrets_input`<sup>Optional</sup> <a name="secrets_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.secretsInput"></a>

```python
secrets_input: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>]]

---

##### `stop_grace_period_input`<sup>Optional</sup> <a name="stop_grace_period_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopGracePeriodInput"></a>

```python
stop_grace_period_input: str
```

- *Type:* str

---

##### `stop_signal_input`<sup>Optional</sup> <a name="stop_signal_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopSignalInput"></a>

```python
stop_signal_input: str
```

- *Type:* str

---

##### `sysctl_input`<sup>Optional</sup> <a name="sysctl_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.sysctlInput"></a>

```python
sysctl_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dir"></a>

```python
dir: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.env"></a>

```python
env: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `isolation`<sup>Required</sup> <a name="isolation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.isolation"></a>

```python
isolation: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `stop_grace_period`<sup>Required</sup> <a name="stop_grace_period" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopGracePeriod"></a>

```python
stop_grace_period: str
```

- *Type:* str

---

##### `stop_signal`<sup>Required</sup> <a name="stop_signal" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopSignal"></a>

```python
stop_signal: str
```

- *Type:* str

---

##### `sysctl`<sup>Required</sup> <a name="sysctl" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.sysctl"></a>

```python
sysctl: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpecContainerSpec
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a>

---


### ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference <a name="ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resetFile">reset_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resetRegistry">reset_registry</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file` <a name="reset_file" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resetFile"></a>

```python
def reset_file() -> None
```

##### `reset_registry` <a name="reset_registry" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resetRegistry"></a>

```python
def reset_registry() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.registryInput">registry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.registry">registry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `registry_input`<sup>Optional</sup> <a name="registry_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.registryInput"></a>

```python
registry_input: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.registry"></a>

```python
registry: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a>

---


### ServiceTaskSpecContainerSpecPrivilegesOutputReference <a name="ServiceTaskSpecContainerSpecPrivilegesOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecPrivilegesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putCredentialSpec">put_credential_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putSeLinuxContext">put_se_linux_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resetCredentialSpec">reset_credential_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resetSeLinuxContext">reset_se_linux_context</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_credential_spec` <a name="put_credential_spec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putCredentialSpec"></a>

```python
def put_credential_spec(
  file: str = None,
  registry: str = None
) -> None
```

###### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putCredentialSpec.parameter.file"></a>

- *Type:* str

Load credential spec from this file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#file Service#file}

---

###### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putCredentialSpec.parameter.registry"></a>

- *Type:* str

Load credential spec from this value in the Windows registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#registry Service#registry}

---

##### `put_se_linux_context` <a name="put_se_linux_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putSeLinuxContext"></a>

```python
def put_se_linux_context(
  disable: typing.Union[bool, IResolvable] = None,
  level: str = None,
  role: str = None,
  type: str = None,
  user: str = None
) -> None
```

###### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putSeLinuxContext.parameter.disable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable SELinux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#disable Service#disable}

---

###### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putSeLinuxContext.parameter.level"></a>

- *Type:* str

SELinux level label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#level Service#level}

---

###### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putSeLinuxContext.parameter.role"></a>

- *Type:* str

SELinux role label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#role Service#role}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putSeLinuxContext.parameter.type"></a>

- *Type:* str

SELinux type label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#type Service#type}

---

###### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putSeLinuxContext.parameter.user"></a>

- *Type:* str

SELinux user label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#user Service#user}

---

##### `reset_credential_spec` <a name="reset_credential_spec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resetCredentialSpec"></a>

```python
def reset_credential_spec() -> None
```

##### `reset_se_linux_context` <a name="reset_se_linux_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resetSeLinuxContext"></a>

```python
def reset_se_linux_context() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.credentialSpec">credential_spec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference">ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.seLinuxContext">se_linux_context</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.credentialSpecInput">credential_spec_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.seLinuxContextInput">se_linux_context_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_spec`<sup>Required</sup> <a name="credential_spec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.credentialSpec"></a>

```python
credential_spec: ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference">ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference</a>

---

##### `se_linux_context`<sup>Required</sup> <a name="se_linux_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.seLinuxContext"></a>

```python
se_linux_context: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference</a>

---

##### `credential_spec_input`<sup>Optional</sup> <a name="credential_spec_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.credentialSpecInput"></a>

```python
credential_spec_input: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a>

---

##### `se_linux_context_input`<sup>Optional</sup> <a name="se_linux_context_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.seLinuxContextInput"></a>

```python
se_linux_context_input: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpecContainerSpecPrivileges
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a>

---


### ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference <a name="ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetDisable">reset_disable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetLevel">reset_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable` <a name="reset_disable" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetDisable"></a>

```python
def reset_disable() -> None
```

##### `reset_level` <a name="reset_level" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetLevel"></a>

```python
def reset_level() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.disableInput">disable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.disable">disable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_input`<sup>Optional</sup> <a name="disable_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.disableInput"></a>

```python
disable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `disable`<sup>Required</sup> <a name="disable" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.disable"></a>

```python
disable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a>

---


### ServiceTaskSpecContainerSpecSecretsList <a name="ServiceTaskSpecContainerSpecSecretsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceTaskSpecContainerSpecSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>]]

---


### ServiceTaskSpecContainerSpecSecretsOutputReference <a name="ServiceTaskSpecContainerSpecSecretsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecContainerSpecSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileGid">reset_file_gid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileMode">reset_file_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileUid">reset_file_uid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetSecretName">reset_secret_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_gid` <a name="reset_file_gid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileGid"></a>

```python
def reset_file_gid() -> None
```

##### `reset_file_mode` <a name="reset_file_mode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileMode"></a>

```python
def reset_file_mode() -> None
```

##### `reset_file_uid` <a name="reset_file_uid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileUid"></a>

```python
def reset_file_uid() -> None
```

##### `reset_secret_name` <a name="reset_secret_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetSecretName"></a>

```python
def reset_secret_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileGidInput">file_gid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileModeInput">file_mode_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileNameInput">file_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileUidInput">file_uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileGid">file_gid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileMode">file_mode</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileUid">file_uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_gid_input`<sup>Optional</sup> <a name="file_gid_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileGidInput"></a>

```python
file_gid_input: str
```

- *Type:* str

---

##### `file_mode_input`<sup>Optional</sup> <a name="file_mode_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileModeInput"></a>

```python
file_mode_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `file_name_input`<sup>Optional</sup> <a name="file_name_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileNameInput"></a>

```python
file_name_input: str
```

- *Type:* str

---

##### `file_uid_input`<sup>Optional</sup> <a name="file_uid_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileUidInput"></a>

```python
file_uid_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `file_gid`<sup>Required</sup> <a name="file_gid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileGid"></a>

```python
file_gid: str
```

- *Type:* str

---

##### `file_mode`<sup>Required</sup> <a name="file_mode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileMode"></a>

```python
file_mode: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `file_uid`<sup>Required</sup> <a name="file_uid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileUid"></a>

```python
file_uid: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceTaskSpecContainerSpecSecrets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>]

---


### ServiceTaskSpecLogDriverOutputReference <a name="ServiceTaskSpecLogDriverOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecLogDriverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resetOptions">reset_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_options` <a name="reset_options" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpecLogDriver
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a>

---


### ServiceTaskSpecNetworksAdvancedList <a name="ServiceTaskSpecNetworksAdvancedList" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecNetworksAdvancedList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceTaskSpecNetworksAdvancedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceTaskSpecNetworksAdvanced]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>]]

---


### ServiceTaskSpecNetworksAdvancedOutputReference <a name="ServiceTaskSpecNetworksAdvancedOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecNetworksAdvancedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resetAliases">reset_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resetDriverOpts">reset_driver_opts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aliases` <a name="reset_aliases" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resetAliases"></a>

```python
def reset_aliases() -> None
```

##### `reset_driver_opts` <a name="reset_driver_opts" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resetDriverOpts"></a>

```python
def reset_driver_opts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.aliasesInput">aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.driverOptsInput">driver_opts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.driverOpts">driver_opts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aliases_input`<sup>Optional</sup> <a name="aliases_input" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.aliasesInput"></a>

```python
aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `driver_opts_input`<sup>Optional</sup> <a name="driver_opts_input" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.driverOptsInput"></a>

```python
driver_opts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `driver_opts`<sup>Required</sup> <a name="driver_opts" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.driverOpts"></a>

```python
driver_opts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceTaskSpecNetworksAdvanced]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>]

---


### ServiceTaskSpecOutputReference <a name="ServiceTaskSpecOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec">put_container_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putLogDriver">put_log_driver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putNetworksAdvanced">put_networks_advanced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putPlacement">put_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putRestartPolicy">put_restart_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetForceUpdate">reset_force_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetLogDriver">reset_log_driver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetNetworksAdvanced">reset_networks_advanced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetPlacement">reset_placement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetRestartPolicy">reset_restart_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetRuntime">reset_runtime</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container_spec` <a name="put_container_spec" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec"></a>

```python
def put_container_spec(
  image: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  configs: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecConfigs]] = None,
  dir: str = None,
  dns_config: ServiceTaskSpecContainerSpecDnsConfig = None,
  env: typing.Mapping[str] = None,
  groups: typing.List[str] = None,
  healthcheck: ServiceTaskSpecContainerSpecHealthcheck = None,
  hostname: str = None,
  hosts: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecHosts]] = None,
  isolation: str = None,
  labels: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecLabels]] = None,
  mounts: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecMounts]] = None,
  privileges: ServiceTaskSpecContainerSpecPrivileges = None,
  read_only: typing.Union[bool, IResolvable] = None,
  secrets: typing.Union[IResolvable, typing.List[ServiceTaskSpecContainerSpecSecrets]] = None,
  stop_grace_period: str = None,
  stop_signal: str = None,
  sysctl: typing.Mapping[str] = None,
  user: str = None
) -> None
```

###### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.image"></a>

- *Type:* str

The image name to use for the containers of the service, like `nginx:1.17.6`. Also use the data-source or resource of `docker_image` with the `repo_digest` or `docker_registry_image` with the `name` attribute for this, as shown in the examples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#image Service#image}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.args"></a>

- *Type:* typing.List[str]

Arguments to the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#args Service#args}

---

###### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.command"></a>

- *Type:* typing.List[str]

The command/entrypoint to be run in the image.

According to the [docker cli](https://github.com/docker/cli/blob/v20.10.7/cli/command/service/opts.go#L705) the override of the entrypoint is also passed to the `command` property and there is no `entrypoint` attribute in the `ContainerSpec` of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#command Service#command}

---

###### `configs`<sup>Optional</sup> <a name="configs" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.configs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>]]

configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#configs Service#configs}

---

###### `dir`<sup>Optional</sup> <a name="dir" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.dir"></a>

- *Type:* str

The working directory for commands to run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#dir Service#dir}

---

###### `dns_config`<sup>Optional</sup> <a name="dns_config" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.dnsConfig"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#dns_config Service#dns_config}

---

###### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.env"></a>

- *Type:* typing.Mapping[str]

A list of environment variables in the form VAR="value".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#env Service#env}

---

###### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.groups"></a>

- *Type:* typing.List[str]

A list of additional groups that the container process will run as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#groups Service#groups}

---

###### `healthcheck`<sup>Optional</sup> <a name="healthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.healthcheck"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#healthcheck Service#healthcheck}

---

###### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.hostname"></a>

- *Type:* str

The hostname to use for the container, as a valid RFC 1123 hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#hostname Service#hostname}

---

###### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.hosts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>]]

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#hosts Service#hosts}

---

###### `isolation`<sup>Optional</sup> <a name="isolation" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.isolation"></a>

- *Type:* str

Isolation technology of the containers running the service. (Windows only). Defaults to `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#isolation Service#isolation}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.labels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#labels Service#labels}

---

###### `mounts`<sup>Optional</sup> <a name="mounts" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.mounts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>]]

mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#mounts Service#mounts}

---

###### `privileges`<sup>Optional</sup> <a name="privileges" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.privileges"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a>

privileges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#privileges Service#privileges}

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Mount the container's root filesystem as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#read_only Service#read_only}

---

###### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.secrets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>]]

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#secrets Service#secrets}

---

###### `stop_grace_period`<sup>Optional</sup> <a name="stop_grace_period" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.stopGracePeriod"></a>

- *Type:* str

Amount of time to wait for the container to terminate before forcefully removing it (ms|s|m|h).

If not specified or '0s' the destroy will not check if all tasks/containers of the service terminate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#stop_grace_period Service#stop_grace_period}

---

###### `stop_signal`<sup>Optional</sup> <a name="stop_signal" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.stopSignal"></a>

- *Type:* str

Signal to stop the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#stop_signal Service#stop_signal}

---

###### `sysctl`<sup>Optional</sup> <a name="sysctl" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.sysctl"></a>

- *Type:* typing.Mapping[str]

Sysctls config (Linux only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#sysctl Service#sysctl}

---

###### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.user"></a>

- *Type:* str

The user inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#user Service#user}

---

##### `put_log_driver` <a name="put_log_driver" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putLogDriver"></a>

```python
def put_log_driver(
  name: str,
  options: typing.Mapping[str] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putLogDriver.parameter.name"></a>

- *Type:* str

The logging driver to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#name Service#name}

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putLogDriver.parameter.options"></a>

- *Type:* typing.Mapping[str]

The options for the logging driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#options Service#options}

---

##### `put_networks_advanced` <a name="put_networks_advanced" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putNetworksAdvanced"></a>

```python
def put_networks_advanced(
  value: typing.Union[IResolvable, typing.List[ServiceTaskSpecNetworksAdvanced]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putNetworksAdvanced.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>]]

---

##### `put_placement` <a name="put_placement" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putPlacement"></a>

```python
def put_placement(
  constraints: typing.List[str] = None,
  max_replicas: typing.Union[int, float] = None,
  platforms: typing.Union[IResolvable, typing.List[ServiceTaskSpecPlacementPlatforms]] = None,
  prefs: typing.List[str] = None
) -> None
```

###### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putPlacement.parameter.constraints"></a>

- *Type:* typing.List[str]

An array of constraints. e.g.: `node.role==manager`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#constraints Service#constraints}

---

###### `max_replicas`<sup>Optional</sup> <a name="max_replicas" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putPlacement.parameter.maxReplicas"></a>

- *Type:* typing.Union[int, float]

Maximum number of replicas for per node (default value is `0`, which is unlimited).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#max_replicas Service#max_replicas}

---

###### `platforms`<sup>Optional</sup> <a name="platforms" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putPlacement.parameter.platforms"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>]]

platforms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#platforms Service#platforms}

---

###### `prefs`<sup>Optional</sup> <a name="prefs" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putPlacement.parameter.prefs"></a>

- *Type:* typing.List[str]

Preferences provide a way to make the scheduler aware of factors such as topology.

They are provided in order from highest to lowest precedence, e.g.: `spread=node.role.manager`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#prefs Service#prefs}

---

##### `put_resources` <a name="put_resources" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putResources"></a>

```python
def put_resources(
  limits: ServiceTaskSpecResourcesLimits = None,
  reservation: ServiceTaskSpecResourcesReservation = None
) -> None
```

###### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putResources.parameter.limits"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#limits Service#limits}

---

###### `reservation`<sup>Optional</sup> <a name="reservation" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putResources.parameter.reservation"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a>

reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#reservation Service#reservation}

---

##### `put_restart_policy` <a name="put_restart_policy" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putRestartPolicy"></a>

```python
def put_restart_policy(
  condition: str = None,
  delay: str = None,
  max_attempts: typing.Union[int, float] = None,
  window: str = None
) -> None
```

###### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putRestartPolicy.parameter.condition"></a>

- *Type:* str

Condition for restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#condition Service#condition}

---

###### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putRestartPolicy.parameter.delay"></a>

- *Type:* str

Delay between restart attempts (ms|s|m|h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#delay Service#delay}

---

###### `max_attempts`<sup>Optional</sup> <a name="max_attempts" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putRestartPolicy.parameter.maxAttempts"></a>

- *Type:* typing.Union[int, float]

Maximum attempts to restart a given container before giving up (default value is `0`, which is ignored).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#max_attempts Service#max_attempts}

---

###### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putRestartPolicy.parameter.window"></a>

- *Type:* str

The time window used to evaluate the restart policy (default value is `0`, which is unbounded) (ms|s|m|h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#window Service#window}

---

##### `reset_force_update` <a name="reset_force_update" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetForceUpdate"></a>

```python
def reset_force_update() -> None
```

##### `reset_log_driver` <a name="reset_log_driver" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetLogDriver"></a>

```python
def reset_log_driver() -> None
```

##### `reset_networks_advanced` <a name="reset_networks_advanced" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetNetworksAdvanced"></a>

```python
def reset_networks_advanced() -> None
```

##### `reset_placement` <a name="reset_placement" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetPlacement"></a>

```python
def reset_placement() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_restart_policy` <a name="reset_restart_policy" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetRestartPolicy"></a>

```python
def reset_restart_policy() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetRuntime"></a>

```python
def reset_runtime() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.containerSpec">container_spec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference">ServiceTaskSpecContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.logDriver">log_driver</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference">ServiceTaskSpecLogDriverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.networksAdvanced">networks_advanced</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList">ServiceTaskSpecNetworksAdvancedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference">ServiceTaskSpecPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference">ServiceTaskSpecResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.restartPolicy">restart_policy</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference">ServiceTaskSpecRestartPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.containerSpecInput">container_spec_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.forceUpdateInput">force_update_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.logDriverInput">log_driver_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.networksAdvancedInput">networks_advanced_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.placementInput">placement_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.resourcesInput">resources_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.restartPolicyInput">restart_policy_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.forceUpdate">force_update</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_spec`<sup>Required</sup> <a name="container_spec" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.containerSpec"></a>

```python
container_spec: ServiceTaskSpecContainerSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference">ServiceTaskSpecContainerSpecOutputReference</a>

---

##### `log_driver`<sup>Required</sup> <a name="log_driver" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.logDriver"></a>

```python
log_driver: ServiceTaskSpecLogDriverOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference">ServiceTaskSpecLogDriverOutputReference</a>

---

##### `networks_advanced`<sup>Required</sup> <a name="networks_advanced" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.networksAdvanced"></a>

```python
networks_advanced: ServiceTaskSpecNetworksAdvancedList
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList">ServiceTaskSpecNetworksAdvancedList</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.placement"></a>

```python
placement: ServiceTaskSpecPlacementOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference">ServiceTaskSpecPlacementOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.resources"></a>

```python
resources: ServiceTaskSpecResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference">ServiceTaskSpecResourcesOutputReference</a>

---

##### `restart_policy`<sup>Required</sup> <a name="restart_policy" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.restartPolicy"></a>

```python
restart_policy: ServiceTaskSpecRestartPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference">ServiceTaskSpecRestartPolicyOutputReference</a>

---

##### `container_spec_input`<sup>Optional</sup> <a name="container_spec_input" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.containerSpecInput"></a>

```python
container_spec_input: ServiceTaskSpecContainerSpec
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a>

---

##### `force_update_input`<sup>Optional</sup> <a name="force_update_input" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.forceUpdateInput"></a>

```python
force_update_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_driver_input`<sup>Optional</sup> <a name="log_driver_input" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.logDriverInput"></a>

```python
log_driver_input: ServiceTaskSpecLogDriver
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a>

---

##### `networks_advanced_input`<sup>Optional</sup> <a name="networks_advanced_input" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.networksAdvancedInput"></a>

```python
networks_advanced_input: typing.Union[IResolvable, typing.List[ServiceTaskSpecNetworksAdvanced]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>]]

---

##### `placement_input`<sup>Optional</sup> <a name="placement_input" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.placementInput"></a>

```python
placement_input: ServiceTaskSpecPlacement
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a>

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.resourcesInput"></a>

```python
resources_input: ServiceTaskSpecResources
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a>

---

##### `restart_policy_input`<sup>Optional</sup> <a name="restart_policy_input" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.restartPolicyInput"></a>

```python
restart_policy_input: ServiceTaskSpecRestartPolicy
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a>

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `force_update`<sup>Required</sup> <a name="force_update" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.forceUpdate"></a>

```python
force_update: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpec
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

---


### ServiceTaskSpecPlacementOutputReference <a name="ServiceTaskSpecPlacementOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecPlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.putPlatforms">put_platforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetConstraints">reset_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetMaxReplicas">reset_max_replicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetPlatforms">reset_platforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetPrefs">reset_prefs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_platforms` <a name="put_platforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.putPlatforms"></a>

```python
def put_platforms(
  value: typing.Union[IResolvable, typing.List[ServiceTaskSpecPlacementPlatforms]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.putPlatforms.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>]]

---

##### `reset_constraints` <a name="reset_constraints" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetConstraints"></a>

```python
def reset_constraints() -> None
```

##### `reset_max_replicas` <a name="reset_max_replicas" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetMaxReplicas"></a>

```python
def reset_max_replicas() -> None
```

##### `reset_platforms` <a name="reset_platforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetPlatforms"></a>

```python
def reset_platforms() -> None
```

##### `reset_prefs` <a name="reset_prefs" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetPrefs"></a>

```python
def reset_prefs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.platforms">platforms</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList">ServiceTaskSpecPlacementPlatformsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.constraintsInput">constraints_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.maxReplicasInput">max_replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.platformsInput">platforms_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.prefsInput">prefs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.constraints">constraints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.maxReplicas">max_replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.prefs">prefs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.platforms"></a>

```python
platforms: ServiceTaskSpecPlacementPlatformsList
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList">ServiceTaskSpecPlacementPlatformsList</a>

---

##### `constraints_input`<sup>Optional</sup> <a name="constraints_input" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.constraintsInput"></a>

```python
constraints_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_replicas_input`<sup>Optional</sup> <a name="max_replicas_input" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.maxReplicasInput"></a>

```python
max_replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `platforms_input`<sup>Optional</sup> <a name="platforms_input" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.platformsInput"></a>

```python
platforms_input: typing.Union[IResolvable, typing.List[ServiceTaskSpecPlacementPlatforms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>]]

---

##### `prefs_input`<sup>Optional</sup> <a name="prefs_input" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.prefsInput"></a>

```python
prefs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.constraints"></a>

```python
constraints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_replicas`<sup>Required</sup> <a name="max_replicas" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.maxReplicas"></a>

```python
max_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefs`<sup>Required</sup> <a name="prefs" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.prefs"></a>

```python
prefs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpecPlacement
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a>

---


### ServiceTaskSpecPlacementPlatformsList <a name="ServiceTaskSpecPlacementPlatformsList" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecPlacementPlatformsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceTaskSpecPlacementPlatformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceTaskSpecPlacementPlatforms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>]]

---


### ServiceTaskSpecPlacementPlatformsOutputReference <a name="ServiceTaskSpecPlacementPlatformsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecPlacementPlatformsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.architectureInput">architecture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.osInput">os_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.os">os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture_input`<sup>Optional</sup> <a name="architecture_input" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.architectureInput"></a>

```python
architecture_input: str
```

- *Type:* str

---

##### `os_input`<sup>Optional</sup> <a name="os_input" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.osInput"></a>

```python
os_input: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.os"></a>

```python
os: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceTaskSpecPlacementPlatforms]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>]

---


### ServiceTaskSpecResourcesLimitsOutputReference <a name="ServiceTaskSpecResourcesLimitsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecResourcesLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resetMemoryBytes">reset_memory_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resetNanoCpus">reset_nano_cpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_bytes` <a name="reset_memory_bytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resetMemoryBytes"></a>

```python
def reset_memory_bytes() -> None
```

##### `reset_nano_cpus` <a name="reset_nano_cpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resetNanoCpus"></a>

```python
def reset_nano_cpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.memoryBytesInput">memory_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.nanoCpusInput">nano_cpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.memoryBytes">memory_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.nanoCpus">nano_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_bytes_input`<sup>Optional</sup> <a name="memory_bytes_input" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.memoryBytesInput"></a>

```python
memory_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nano_cpus_input`<sup>Optional</sup> <a name="nano_cpus_input" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.nanoCpusInput"></a>

```python
nano_cpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_bytes`<sup>Required</sup> <a name="memory_bytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.memoryBytes"></a>

```python
memory_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nano_cpus`<sup>Required</sup> <a name="nano_cpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.nanoCpus"></a>

```python
nano_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpecResourcesLimits
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a>

---


### ServiceTaskSpecResourcesOutputReference <a name="ServiceTaskSpecResourcesOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putLimits">put_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putReservation">put_reservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resetLimits">reset_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resetReservation">reset_reservation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_limits` <a name="put_limits" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putLimits"></a>

```python
def put_limits(
  memory_bytes: typing.Union[int, float] = None,
  nano_cpus: typing.Union[int, float] = None
) -> None
```

###### `memory_bytes`<sup>Optional</sup> <a name="memory_bytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putLimits.parameter.memoryBytes"></a>

- *Type:* typing.Union[int, float]

The amounf of memory in bytes the container allocates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#memory_bytes Service#memory_bytes}

---

###### `nano_cpus`<sup>Optional</sup> <a name="nano_cpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putLimits.parameter.nanoCpus"></a>

- *Type:* typing.Union[int, float]

CPU shares in units of `1/1e9` (or `10^-9`) of the CPU. Should be at least `1000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#nano_cpus Service#nano_cpus}

---

##### `put_reservation` <a name="put_reservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putReservation"></a>

```python
def put_reservation(
  generic_resources: ServiceTaskSpecResourcesReservationGenericResources = None,
  memory_bytes: typing.Union[int, float] = None,
  nano_cpus: typing.Union[int, float] = None
) -> None
```

###### `generic_resources`<sup>Optional</sup> <a name="generic_resources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putReservation.parameter.genericResources"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a>

generic_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#generic_resources Service#generic_resources}

---

###### `memory_bytes`<sup>Optional</sup> <a name="memory_bytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putReservation.parameter.memoryBytes"></a>

- *Type:* typing.Union[int, float]

The amounf of memory in bytes the container allocates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#memory_bytes Service#memory_bytes}

---

###### `nano_cpus`<sup>Optional</sup> <a name="nano_cpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putReservation.parameter.nanoCpus"></a>

- *Type:* typing.Union[int, float]

CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least `1000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#nano_cpus Service#nano_cpus}

---

##### `reset_limits` <a name="reset_limits" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resetLimits"></a>

```python
def reset_limits() -> None
```

##### `reset_reservation` <a name="reset_reservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resetReservation"></a>

```python
def reset_reservation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference">ServiceTaskSpecResourcesLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.reservation">reservation</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference">ServiceTaskSpecResourcesReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.limitsInput">limits_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.reservationInput">reservation_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.limits"></a>

```python
limits: ServiceTaskSpecResourcesLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference">ServiceTaskSpecResourcesLimitsOutputReference</a>

---

##### `reservation`<sup>Required</sup> <a name="reservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.reservation"></a>

```python
reservation: ServiceTaskSpecResourcesReservationOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference">ServiceTaskSpecResourcesReservationOutputReference</a>

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.limitsInput"></a>

```python
limits_input: ServiceTaskSpecResourcesLimits
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a>

---

##### `reservation_input`<sup>Optional</sup> <a name="reservation_input" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.reservationInput"></a>

```python
reservation_input: ServiceTaskSpecResourcesReservation
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpecResources
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a>

---


### ServiceTaskSpecResourcesReservationGenericResourcesOutputReference <a name="ServiceTaskSpecResourcesReservationGenericResourcesOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resetDiscreteResourcesSpec">reset_discrete_resources_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resetNamedResourcesSpec">reset_named_resources_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_discrete_resources_spec` <a name="reset_discrete_resources_spec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resetDiscreteResourcesSpec"></a>

```python
def reset_discrete_resources_spec() -> None
```

##### `reset_named_resources_spec` <a name="reset_named_resources_spec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resetNamedResourcesSpec"></a>

```python
def reset_named_resources_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.discreteResourcesSpecInput">discrete_resources_spec_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.namedResourcesSpecInput">named_resources_spec_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.discreteResourcesSpec">discrete_resources_spec</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.namedResourcesSpec">named_resources_spec</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `discrete_resources_spec_input`<sup>Optional</sup> <a name="discrete_resources_spec_input" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.discreteResourcesSpecInput"></a>

```python
discrete_resources_spec_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `named_resources_spec_input`<sup>Optional</sup> <a name="named_resources_spec_input" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.namedResourcesSpecInput"></a>

```python
named_resources_spec_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discrete_resources_spec`<sup>Required</sup> <a name="discrete_resources_spec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.discreteResourcesSpec"></a>

```python
discrete_resources_spec: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `named_resources_spec`<sup>Required</sup> <a name="named_resources_spec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.namedResourcesSpec"></a>

```python
named_resources_spec: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpecResourcesReservationGenericResources
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a>

---


### ServiceTaskSpecResourcesReservationOutputReference <a name="ServiceTaskSpecResourcesReservationOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecResourcesReservationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.putGenericResources">put_generic_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetGenericResources">reset_generic_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetMemoryBytes">reset_memory_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetNanoCpus">reset_nano_cpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_generic_resources` <a name="put_generic_resources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.putGenericResources"></a>

```python
def put_generic_resources(
  discrete_resources_spec: typing.List[str] = None,
  named_resources_spec: typing.List[str] = None
) -> None
```

###### `discrete_resources_spec`<sup>Optional</sup> <a name="discrete_resources_spec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.putGenericResources.parameter.discreteResourcesSpec"></a>

- *Type:* typing.List[str]

The Integer resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#discrete_resources_spec Service#discrete_resources_spec}

---

###### `named_resources_spec`<sup>Optional</sup> <a name="named_resources_spec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.putGenericResources.parameter.namedResourcesSpec"></a>

- *Type:* typing.List[str]

The String resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.2.0/docs/resources/service#named_resources_spec Service#named_resources_spec}

---

##### `reset_generic_resources` <a name="reset_generic_resources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetGenericResources"></a>

```python
def reset_generic_resources() -> None
```

##### `reset_memory_bytes` <a name="reset_memory_bytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetMemoryBytes"></a>

```python
def reset_memory_bytes() -> None
```

##### `reset_nano_cpus` <a name="reset_nano_cpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetNanoCpus"></a>

```python
def reset_nano_cpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.genericResources">generic_resources</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference">ServiceTaskSpecResourcesReservationGenericResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.genericResourcesInput">generic_resources_input</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.memoryBytesInput">memory_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.nanoCpusInput">nano_cpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.memoryBytes">memory_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.nanoCpus">nano_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generic_resources`<sup>Required</sup> <a name="generic_resources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.genericResources"></a>

```python
generic_resources: ServiceTaskSpecResourcesReservationGenericResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference">ServiceTaskSpecResourcesReservationGenericResourcesOutputReference</a>

---

##### `generic_resources_input`<sup>Optional</sup> <a name="generic_resources_input" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.genericResourcesInput"></a>

```python
generic_resources_input: ServiceTaskSpecResourcesReservationGenericResources
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a>

---

##### `memory_bytes_input`<sup>Optional</sup> <a name="memory_bytes_input" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.memoryBytesInput"></a>

```python
memory_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nano_cpus_input`<sup>Optional</sup> <a name="nano_cpus_input" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.nanoCpusInput"></a>

```python
nano_cpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_bytes`<sup>Required</sup> <a name="memory_bytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.memoryBytes"></a>

```python
memory_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nano_cpus`<sup>Required</sup> <a name="nano_cpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.nanoCpus"></a>

```python
nano_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpecResourcesReservation
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a>

---


### ServiceTaskSpecRestartPolicyOutputReference <a name="ServiceTaskSpecRestartPolicyOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceTaskSpecRestartPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetDelay">reset_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetMaxAttempts">reset_max_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetWindow">reset_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_delay` <a name="reset_delay" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetDelay"></a>

```python
def reset_delay() -> None
```

##### `reset_max_attempts` <a name="reset_max_attempts" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetMaxAttempts"></a>

```python
def reset_max_attempts() -> None
```

##### `reset_window` <a name="reset_window" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetWindow"></a>

```python
def reset_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.delayInput">delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.maxAttemptsInput">max_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.windowInput">window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.delay">delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.maxAttempts">max_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.window">window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `delay_input`<sup>Optional</sup> <a name="delay_input" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.delayInput"></a>

```python
delay_input: str
```

- *Type:* str

---

##### `max_attempts_input`<sup>Optional</sup> <a name="max_attempts_input" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.maxAttemptsInput"></a>

```python
max_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `window_input`<sup>Optional</sup> <a name="window_input" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.windowInput"></a>

```python
window_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.delay"></a>

```python
delay: str
```

- *Type:* str

---

##### `max_attempts`<sup>Required</sup> <a name="max_attempts" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.maxAttempts"></a>

```python
max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.window"></a>

```python
window: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ServiceTaskSpecRestartPolicy
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a>

---


### ServiceUpdateConfigOutputReference <a name="ServiceUpdateConfigOutputReference" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import service

service.ServiceUpdateConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetDelay">reset_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetFailureAction">reset_failure_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetMaxFailureRatio">reset_max_failure_ratio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetMonitor">reset_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetParallelism">reset_parallelism</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delay` <a name="reset_delay" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetDelay"></a>

```python
def reset_delay() -> None
```

##### `reset_failure_action` <a name="reset_failure_action" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetFailureAction"></a>

```python
def reset_failure_action() -> None
```

##### `reset_max_failure_ratio` <a name="reset_max_failure_ratio" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetMaxFailureRatio"></a>

```python
def reset_max_failure_ratio() -> None
```

##### `reset_monitor` <a name="reset_monitor" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetMonitor"></a>

```python
def reset_monitor() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_parallelism` <a name="reset_parallelism" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetParallelism"></a>

```python
def reset_parallelism() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.delayInput">delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.failureActionInput">failure_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.maxFailureRatioInput">max_failure_ratio_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.monitorInput">monitor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.parallelismInput">parallelism_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.delay">delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.failureAction">failure_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.maxFailureRatio">max_failure_ratio</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.monitor">monitor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delay_input`<sup>Optional</sup> <a name="delay_input" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.delayInput"></a>

```python
delay_input: str
```

- *Type:* str

---

##### `failure_action_input`<sup>Optional</sup> <a name="failure_action_input" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.failureActionInput"></a>

```python
failure_action_input: str
```

- *Type:* str

---

##### `max_failure_ratio_input`<sup>Optional</sup> <a name="max_failure_ratio_input" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.maxFailureRatioInput"></a>

```python
max_failure_ratio_input: str
```

- *Type:* str

---

##### `monitor_input`<sup>Optional</sup> <a name="monitor_input" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.monitorInput"></a>

```python
monitor_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `parallelism_input`<sup>Optional</sup> <a name="parallelism_input" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.parallelismInput"></a>

```python
parallelism_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.delay"></a>

```python
delay: str
```

- *Type:* str

---

##### `failure_action`<sup>Required</sup> <a name="failure_action" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.failureAction"></a>

```python
failure_action: str
```

- *Type:* str

---

##### `max_failure_ratio`<sup>Required</sup> <a name="max_failure_ratio" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.maxFailureRatio"></a>

```python
max_failure_ratio: str
```

- *Type:* str

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.monitor"></a>

```python
monitor: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.parallelism"></a>

```python
parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.internalValue"></a>

```python
internal_value: ServiceUpdateConfig
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

---



