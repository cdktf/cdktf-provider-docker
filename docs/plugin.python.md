# `docker_plugin`

Refer to the Terraform Registory for docs: [`docker_plugin`](https://www.terraform.io/docs/providers/docker/r/plugin).

# `plugin` Submodule <a name="`plugin` Submodule" id="@cdktf/provider-docker.plugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Plugin <a name="Plugin" id="@cdktf/provider-docker.plugin.Plugin"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/r/plugin docker_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.plugin.Plugin.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import plugin

plugin.Plugin(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  alias: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  enable_timeout: typing.Union[int, float] = None,
  env: typing.List[str] = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  force_disable: typing.Union[bool, IResolvable] = None,
  grant_all_permissions: typing.Union[bool, IResolvable] = None,
  grant_permissions: typing.Union[IResolvable, typing.List[PluginGrantPermissions]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.name">name</a></code> | <code>str</code> | Docker Plugin name. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Docker Plugin alias. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true` the plugin is enabled. Defaults to `true`. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.enableTimeout">enable_timeout</a></code> | <code>typing.Union[int, float]</code> | HTTP client timeout to enable the plugin. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.env">env</a></code> | <code>typing.List[str]</code> | The environment variables in the form of `KEY=VALUE`, e.g. `DEBUG=0`. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then the plugin is destroyed forcibly. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.forceDisable">force_disable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then the plugin is disabled forcibly. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.grantAllPermissions">grant_all_permissions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, grant all permissions necessary to run the plugin. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.grantPermissions">grant_permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>]]</code> | grant_permissions block. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#id Plugin#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.name"></a>

- *Type:* str

Docker Plugin name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#name Plugin#name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.alias"></a>

- *Type:* str

Docker Plugin alias.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#alias Plugin#alias}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true` the plugin is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#enabled Plugin#enabled}

---

##### `enable_timeout`<sup>Optional</sup> <a name="enable_timeout" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.enableTimeout"></a>

- *Type:* typing.Union[int, float]

HTTP client timeout to enable the plugin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#enable_timeout Plugin#enable_timeout}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.env"></a>

- *Type:* typing.List[str]

The environment variables in the form of `KEY=VALUE`, e.g. `DEBUG=0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#env Plugin#env}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the plugin is destroyed forcibly.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#force_destroy Plugin#force_destroy}

---

##### `force_disable`<sup>Optional</sup> <a name="force_disable" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.forceDisable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the plugin is disabled forcibly.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#force_disable Plugin#force_disable}

---

##### `grant_all_permissions`<sup>Optional</sup> <a name="grant_all_permissions" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.grantAllPermissions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, grant all permissions necessary to run the plugin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#grant_all_permissions Plugin#grant_all_permissions}

---

##### `grant_permissions`<sup>Optional</sup> <a name="grant_permissions" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.grantPermissions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>]]

grant_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#grant_permissions Plugin#grant_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#id Plugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.putGrantPermissions">put_grant_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetEnableTimeout">reset_enable_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetForceDisable">reset_force_disable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetGrantAllPermissions">reset_grant_all_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetGrantPermissions">reset_grant_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.plugin.Plugin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-docker.plugin.Plugin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.plugin.Plugin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.plugin.Plugin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-docker.plugin.Plugin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-docker.plugin.Plugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-docker.plugin.Plugin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-docker.plugin.Plugin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-docker.plugin.Plugin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.plugin.Plugin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.Plugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.plugin.Plugin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.Plugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.plugin.Plugin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.Plugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.plugin.Plugin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.Plugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.plugin.Plugin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.Plugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.plugin.Plugin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.Plugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.plugin.Plugin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.Plugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_grant_permissions` <a name="put_grant_permissions" id="@cdktf/provider-docker.plugin.Plugin.putGrantPermissions"></a>

```python
def put_grant_permissions(
  value: typing.Union[IResolvable, typing.List[PluginGrantPermissions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.plugin.Plugin.putGrantPermissions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>]]

---

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-docker.plugin.Plugin.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-docker.plugin.Plugin.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_enable_timeout` <a name="reset_enable_timeout" id="@cdktf/provider-docker.plugin.Plugin.resetEnableTimeout"></a>

```python
def reset_enable_timeout() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktf/provider-docker.plugin.Plugin.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-docker.plugin.Plugin.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_force_disable` <a name="reset_force_disable" id="@cdktf/provider-docker.plugin.Plugin.resetForceDisable"></a>

```python
def reset_force_disable() -> None
```

##### `reset_grant_all_permissions` <a name="reset_grant_all_permissions" id="@cdktf/provider-docker.plugin.Plugin.resetGrantAllPermissions"></a>

```python
def reset_grant_all_permissions() -> None
```

##### `reset_grant_permissions` <a name="reset_grant_permissions" id="@cdktf/provider-docker.plugin.Plugin.resetGrantPermissions"></a>

```python
def reset_grant_permissions() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-docker.plugin.Plugin.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-docker.plugin.Plugin.isConstruct"></a>

```python
from cdktf_cdktf_provider_docker import plugin

plugin.Plugin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.plugin.Plugin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-docker.plugin.Plugin.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_docker import plugin

plugin.Plugin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.plugin.Plugin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-docker.plugin.Plugin.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_docker import plugin

plugin.Plugin.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.plugin.Plugin.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.grantPermissions">grant_permissions</a></code> | <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList">PluginGrantPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.pluginReference">plugin_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.enableTimeoutInput">enable_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.envInput">env_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.forceDisableInput">force_disable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.grantAllPermissionsInput">grant_all_permissions_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.grantPermissionsInput">grant_permissions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.enableTimeout">enable_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.env">env</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.forceDisable">force_disable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.grantAllPermissions">grant_all_permissions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.plugin.Plugin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-docker.plugin.Plugin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.plugin.Plugin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-docker.plugin.Plugin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-docker.plugin.Plugin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-docker.plugin.Plugin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-docker.plugin.Plugin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.plugin.Plugin.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.plugin.Plugin.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.plugin.Plugin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.plugin.Plugin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.plugin.Plugin.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.plugin.Plugin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.plugin.Plugin.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `grant_permissions`<sup>Required</sup> <a name="grant_permissions" id="@cdktf/provider-docker.plugin.Plugin.property.grantPermissions"></a>

```python
grant_permissions: PluginGrantPermissionsList
```

- *Type:* <a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList">PluginGrantPermissionsList</a>

---

##### `plugin_reference`<sup>Required</sup> <a name="plugin_reference" id="@cdktf/provider-docker.plugin.Plugin.property.pluginReference"></a>

```python
plugin_reference: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-docker.plugin.Plugin.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-docker.plugin.Plugin.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_timeout_input`<sup>Optional</sup> <a name="enable_timeout_input" id="@cdktf/provider-docker.plugin.Plugin.property.enableTimeoutInput"></a>

```python
enable_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-docker.plugin.Plugin.property.envInput"></a>

```python
env_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-docker.plugin.Plugin.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_disable_input`<sup>Optional</sup> <a name="force_disable_input" id="@cdktf/provider-docker.plugin.Plugin.property.forceDisableInput"></a>

```python
force_disable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grant_all_permissions_input`<sup>Optional</sup> <a name="grant_all_permissions_input" id="@cdktf/provider-docker.plugin.Plugin.property.grantAllPermissionsInput"></a>

```python
grant_all_permissions_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grant_permissions_input`<sup>Optional</sup> <a name="grant_permissions_input" id="@cdktf/provider-docker.plugin.Plugin.property.grantPermissionsInput"></a>

```python
grant_permissions_input: typing.Union[IResolvable, typing.List[PluginGrantPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-docker.plugin.Plugin.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-docker.plugin.Plugin.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-docker.plugin.Plugin.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-docker.plugin.Plugin.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_timeout`<sup>Required</sup> <a name="enable_timeout" id="@cdktf/provider-docker.plugin.Plugin.property.enableTimeout"></a>

```python
enable_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-docker.plugin.Plugin.property.env"></a>

```python
env: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-docker.plugin.Plugin.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_disable`<sup>Required</sup> <a name="force_disable" id="@cdktf/provider-docker.plugin.Plugin.property.forceDisable"></a>

```python
force_disable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grant_all_permissions`<sup>Required</sup> <a name="grant_all_permissions" id="@cdktf/provider-docker.plugin.Plugin.property.grantAllPermissions"></a>

```python
grant_all_permissions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.plugin.Plugin.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.plugin.Plugin.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.plugin.Plugin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PluginConfig <a name="PluginConfig" id="@cdktf/provider-docker.plugin.PluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.plugin.PluginConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import plugin

plugin.PluginConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  alias: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  enable_timeout: typing.Union[int, float] = None,
  env: typing.List[str] = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  force_disable: typing.Union[bool, IResolvable] = None,
  grant_all_permissions: typing.Union[bool, IResolvable] = None,
  grant_permissions: typing.Union[IResolvable, typing.List[PluginGrantPermissions]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.name">name</a></code> | <code>str</code> | Docker Plugin name. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.alias">alias</a></code> | <code>str</code> | Docker Plugin alias. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true` the plugin is enabled. Defaults to `true`. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.enableTimeout">enable_timeout</a></code> | <code>typing.Union[int, float]</code> | HTTP client timeout to enable the plugin. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.env">env</a></code> | <code>typing.List[str]</code> | The environment variables in the form of `KEY=VALUE`, e.g. `DEBUG=0`. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then the plugin is destroyed forcibly. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.forceDisable">force_disable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, then the plugin is disabled forcibly. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.grantAllPermissions">grant_all_permissions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, grant all permissions necessary to run the plugin. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.grantPermissions">grant_permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>]]</code> | grant_permissions block. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#id Plugin#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.plugin.PluginConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.plugin.PluginConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-docker.plugin.PluginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-docker.plugin.PluginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.plugin.PluginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.plugin.PluginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.plugin.PluginConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.plugin.PluginConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docker Plugin name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#name Plugin#name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-docker.plugin.PluginConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docker Plugin alias.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#alias Plugin#alias}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-docker.plugin.PluginConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true` the plugin is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#enabled Plugin#enabled}

---

##### `enable_timeout`<sup>Optional</sup> <a name="enable_timeout" id="@cdktf/provider-docker.plugin.PluginConfig.property.enableTimeout"></a>

```python
enable_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

HTTP client timeout to enable the plugin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#enable_timeout Plugin#enable_timeout}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.plugin.PluginConfig.property.env"></a>

```python
env: typing.List[str]
```

- *Type:* typing.List[str]

The environment variables in the form of `KEY=VALUE`, e.g. `DEBUG=0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#env Plugin#env}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-docker.plugin.PluginConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the plugin is destroyed forcibly.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#force_destroy Plugin#force_destroy}

---

##### `force_disable`<sup>Optional</sup> <a name="force_disable" id="@cdktf/provider-docker.plugin.PluginConfig.property.forceDisable"></a>

```python
force_disable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, then the plugin is disabled forcibly.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#force_disable Plugin#force_disable}

---

##### `grant_all_permissions`<sup>Optional</sup> <a name="grant_all_permissions" id="@cdktf/provider-docker.plugin.PluginConfig.property.grantAllPermissions"></a>

```python
grant_all_permissions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, grant all permissions necessary to run the plugin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#grant_all_permissions Plugin#grant_all_permissions}

---

##### `grant_permissions`<sup>Optional</sup> <a name="grant_permissions" id="@cdktf/provider-docker.plugin.PluginConfig.property.grantPermissions"></a>

```python
grant_permissions: typing.Union[IResolvable, typing.List[PluginGrantPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>]]

grant_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#grant_permissions Plugin#grant_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.plugin.PluginConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#id Plugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### PluginGrantPermissions <a name="PluginGrantPermissions" id="@cdktf/provider-docker.plugin.PluginGrantPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.plugin.PluginGrantPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import plugin

plugin.PluginGrantPermissions(
  name: str,
  value: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions.property.name">name</a></code> | <code>str</code> | The name of the permission. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions.property.value">value</a></code> | <code>typing.List[str]</code> | The value of the permission. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.plugin.PluginGrantPermissions.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the permission.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#name Plugin#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.plugin.PluginGrantPermissions.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

The value of the permission.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#value Plugin#value}

---

## Classes <a name="Classes" id="Classes"></a>

### PluginGrantPermissionsList <a name="PluginGrantPermissionsList" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import plugin

plugin.PluginGrantPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PluginGrantPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PluginGrantPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>]]

---


### PluginGrantPermissionsOutputReference <a name="PluginGrantPermissionsOutputReference" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_docker import plugin

plugin.PluginGrantPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.valueInput">value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.value">value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.valueInput"></a>

```python
value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[PluginGrantPermissions, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>, cdktf.IResolvable]

---



