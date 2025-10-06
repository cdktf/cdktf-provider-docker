# `dataDockerLogs` Submodule <a name="`dataDockerLogs` Submodule" id="@cdktf/provider-docker.dataDockerLogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDockerLogs <a name="DataDockerLogs" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs docker_logs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_logs

dataDockerLogs.DataDockerLogs(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  details: bool | IResolvable = None,
  discard_headers: bool | IResolvable = None,
  follow: bool | IResolvable = None,
  id: str = None,
  logs_list_string_enabled: bool | IResolvable = None,
  show_stderr: bool | IResolvable = None,
  show_stdout: bool | IResolvable = None,
  since: str = None,
  tail: str = None,
  timestamps: bool | IResolvable = None,
  until: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Docker Container. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.details">details</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#details DataDockerLogs#details}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.discardHeaders">discard_headers</a></code> | <code>bool \| cdktf.IResolvable</code> | Discard headers that docker appends to each log entry. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.follow">follow</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#follow DataDockerLogs#follow}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#id DataDockerLogs#id}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.logsListStringEnabled">logs_list_string_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | If true populate computed value `logs_list_string`. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.showStderr">show_stderr</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#show_stderr DataDockerLogs#show_stderr}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.showStdout">show_stdout</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#show_stdout DataDockerLogs#show_stdout}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.since">since</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#since DataDockerLogs#since}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.tail">tail</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#tail DataDockerLogs#tail}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.timestamps">timestamps</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#timestamps DataDockerLogs#timestamps}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.until">until</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#until DataDockerLogs#until}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.name"></a>

- *Type:* str

The name of the Docker Container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#name DataDockerLogs#name}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.details"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#details DataDockerLogs#details}.

---

##### `discard_headers`<sup>Optional</sup> <a name="discard_headers" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.discardHeaders"></a>

- *Type:* bool | cdktf.IResolvable

Discard headers that docker appends to each log entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#discard_headers DataDockerLogs#discard_headers}

---

##### `follow`<sup>Optional</sup> <a name="follow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.follow"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#follow DataDockerLogs#follow}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#id DataDockerLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logs_list_string_enabled`<sup>Optional</sup> <a name="logs_list_string_enabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.logsListStringEnabled"></a>

- *Type:* bool | cdktf.IResolvable

If true populate computed value `logs_list_string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#logs_list_string_enabled DataDockerLogs#logs_list_string_enabled}

---

##### `show_stderr`<sup>Optional</sup> <a name="show_stderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.showStderr"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#show_stderr DataDockerLogs#show_stderr}.

---

##### `show_stdout`<sup>Optional</sup> <a name="show_stdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.showStdout"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#show_stdout DataDockerLogs#show_stdout}.

---

##### `since`<sup>Optional</sup> <a name="since" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.since"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#since DataDockerLogs#since}.

---

##### `tail`<sup>Optional</sup> <a name="tail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.tail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#tail DataDockerLogs#tail}.

---

##### `timestamps`<sup>Optional</sup> <a name="timestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.timestamps"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#timestamps DataDockerLogs#timestamps}.

---

##### `until`<sup>Optional</sup> <a name="until" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.until"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#until DataDockerLogs#until}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDetails">reset_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDiscardHeaders">reset_discard_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetFollow">reset_follow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetLogsListStringEnabled">reset_logs_list_string_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStderr">reset_show_stderr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStdout">reset_show_stdout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetSince">reset_since</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTail">reset_tail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTimestamps">reset_timestamps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetUntil">reset_until</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_details` <a name="reset_details" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDetails"></a>

```python
def reset_details() -> None
```

##### `reset_discard_headers` <a name="reset_discard_headers" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDiscardHeaders"></a>

```python
def reset_discard_headers() -> None
```

##### `reset_follow` <a name="reset_follow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetFollow"></a>

```python
def reset_follow() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logs_list_string_enabled` <a name="reset_logs_list_string_enabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetLogsListStringEnabled"></a>

```python
def reset_logs_list_string_enabled() -> None
```

##### `reset_show_stderr` <a name="reset_show_stderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStderr"></a>

```python
def reset_show_stderr() -> None
```

##### `reset_show_stdout` <a name="reset_show_stdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStdout"></a>

```python
def reset_show_stdout() -> None
```

##### `reset_since` <a name="reset_since" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetSince"></a>

```python
def reset_since() -> None
```

##### `reset_tail` <a name="reset_tail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTail"></a>

```python
def reset_tail() -> None
```

##### `reset_timestamps` <a name="reset_timestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTimestamps"></a>

```python
def reset_timestamps() -> None
```

##### `reset_until` <a name="reset_until" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetUntil"></a>

```python
def reset_until() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDockerLogs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isConstruct"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_logs

dataDockerLogs.DataDockerLogs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_logs

dataDockerLogs.DataDockerLogs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_logs

dataDockerLogs.DataDockerLogs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_logs

dataDockerLogs.DataDockerLogs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDockerLogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDockerLogs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDockerLogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDockerLogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListString">logs_list_string</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.detailsInput">details_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeadersInput">discard_headers_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.followInput">follow_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabledInput">logs_list_string_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderrInput">show_stderr_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdoutInput">show_stdout_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.sinceInput">since_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tailInput">tail_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestampsInput">timestamps_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.untilInput">until_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.details">details</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeaders">discard_headers</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.follow">follow</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabled">logs_list_string_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderr">show_stderr</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdout">show_stdout</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.since">since</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tail">tail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestamps">timestamps</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.until">until</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `logs_list_string`<sup>Required</sup> <a name="logs_list_string" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListString"></a>

```python
logs_list_string: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `details_input`<sup>Optional</sup> <a name="details_input" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.detailsInput"></a>

```python
details_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `discard_headers_input`<sup>Optional</sup> <a name="discard_headers_input" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeadersInput"></a>

```python
discard_headers_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `follow_input`<sup>Optional</sup> <a name="follow_input" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.followInput"></a>

```python
follow_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logs_list_string_enabled_input`<sup>Optional</sup> <a name="logs_list_string_enabled_input" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabledInput"></a>

```python
logs_list_string_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `show_stderr_input`<sup>Optional</sup> <a name="show_stderr_input" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderrInput"></a>

```python
show_stderr_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `show_stdout_input`<sup>Optional</sup> <a name="show_stdout_input" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdoutInput"></a>

```python
show_stdout_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `since_input`<sup>Optional</sup> <a name="since_input" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.sinceInput"></a>

```python
since_input: str
```

- *Type:* str

---

##### `tail_input`<sup>Optional</sup> <a name="tail_input" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tailInput"></a>

```python
tail_input: str
```

- *Type:* str

---

##### `timestamps_input`<sup>Optional</sup> <a name="timestamps_input" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestampsInput"></a>

```python
timestamps_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `until_input`<sup>Optional</sup> <a name="until_input" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.untilInput"></a>

```python
until_input: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.details"></a>

```python
details: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `discard_headers`<sup>Required</sup> <a name="discard_headers" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeaders"></a>

```python
discard_headers: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `follow`<sup>Required</sup> <a name="follow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.follow"></a>

```python
follow: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logs_list_string_enabled`<sup>Required</sup> <a name="logs_list_string_enabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabled"></a>

```python
logs_list_string_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `show_stderr`<sup>Required</sup> <a name="show_stderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderr"></a>

```python
show_stderr: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `show_stdout`<sup>Required</sup> <a name="show_stdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdout"></a>

```python
show_stdout: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.since"></a>

```python
since: str
```

- *Type:* str

---

##### `tail`<sup>Required</sup> <a name="tail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tail"></a>

```python
tail: str
```

- *Type:* str

---

##### `timestamps`<sup>Required</sup> <a name="timestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestamps"></a>

```python
timestamps: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `until`<sup>Required</sup> <a name="until" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.until"></a>

```python
until: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDockerLogsConfig <a name="DataDockerLogsConfig" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import data_docker_logs

dataDockerLogs.DataDockerLogsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  details: bool | IResolvable = None,
  discard_headers: bool | IResolvable = None,
  follow: bool | IResolvable = None,
  id: str = None,
  logs_list_string_enabled: bool | IResolvable = None,
  show_stderr: bool | IResolvable = None,
  show_stdout: bool | IResolvable = None,
  since: str = None,
  tail: str = None,
  timestamps: bool | IResolvable = None,
  until: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.name">name</a></code> | <code>str</code> | The name of the Docker Container. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.details">details</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#details DataDockerLogs#details}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.discardHeaders">discard_headers</a></code> | <code>bool \| cdktf.IResolvable</code> | Discard headers that docker appends to each log entry. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.follow">follow</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#follow DataDockerLogs#follow}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#id DataDockerLogs#id}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.logsListStringEnabled">logs_list_string_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | If true populate computed value `logs_list_string`. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStderr">show_stderr</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#show_stderr DataDockerLogs#show_stderr}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStdout">show_stdout</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#show_stdout DataDockerLogs#show_stdout}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.since">since</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#since DataDockerLogs#since}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.tail">tail</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#tail DataDockerLogs#tail}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.timestamps">timestamps</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#timestamps DataDockerLogs#timestamps}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.until">until</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#until DataDockerLogs#until}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Docker Container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#name DataDockerLogs#name}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.details"></a>

```python
details: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#details DataDockerLogs#details}.

---

##### `discard_headers`<sup>Optional</sup> <a name="discard_headers" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.discardHeaders"></a>

```python
discard_headers: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Discard headers that docker appends to each log entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#discard_headers DataDockerLogs#discard_headers}

---

##### `follow`<sup>Optional</sup> <a name="follow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.follow"></a>

```python
follow: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#follow DataDockerLogs#follow}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#id DataDockerLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logs_list_string_enabled`<sup>Optional</sup> <a name="logs_list_string_enabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.logsListStringEnabled"></a>

```python
logs_list_string_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true populate computed value `logs_list_string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#logs_list_string_enabled DataDockerLogs#logs_list_string_enabled}

---

##### `show_stderr`<sup>Optional</sup> <a name="show_stderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStderr"></a>

```python
show_stderr: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#show_stderr DataDockerLogs#show_stderr}.

---

##### `show_stdout`<sup>Optional</sup> <a name="show_stdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStdout"></a>

```python
show_stdout: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#show_stdout DataDockerLogs#show_stdout}.

---

##### `since`<sup>Optional</sup> <a name="since" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.since"></a>

```python
since: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#since DataDockerLogs#since}.

---

##### `tail`<sup>Optional</sup> <a name="tail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.tail"></a>

```python
tail: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#tail DataDockerLogs#tail}.

---

##### `timestamps`<sup>Optional</sup> <a name="timestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.timestamps"></a>

```python
timestamps: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#timestamps DataDockerLogs#timestamps}.

---

##### `until`<sup>Optional</sup> <a name="until" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.until"></a>

```python
until: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/data-sources/logs#until DataDockerLogs#until}.

---



