# `docker_plugin`

Refer to the Terraform Registory for docs: [`docker_plugin`](https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/plugin).

# `plugin` Submodule <a name="`plugin` Submodule" id="@cdktf/provider-docker.plugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Plugin <a name="Plugin" id="@cdktf/provider-docker.plugin.Plugin"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/plugin docker_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.plugin.Plugin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/plugin"

plugin.NewPlugin(scope Construct, id *string, config PluginConfig) Plugin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.plugin.PluginConfig">PluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.plugin.PluginConfig">PluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.putGrantPermissions">PutGrantPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetEnableTimeout">ResetEnableTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetForceDisable">ResetForceDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetGrantAllPermissions">ResetGrantAllPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetGrantPermissions">ResetGrantPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.plugin.Plugin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-docker.plugin.Plugin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.plugin.Plugin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.plugin.Plugin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-docker.plugin.Plugin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.plugin.Plugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-docker.plugin.Plugin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-docker.plugin.Plugin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-docker.plugin.Plugin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.plugin.Plugin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.plugin.Plugin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.plugin.Plugin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.plugin.Plugin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.plugin.Plugin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.plugin.Plugin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.plugin.Plugin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGrantPermissions` <a name="PutGrantPermissions" id="@cdktf/provider-docker.plugin.Plugin.putGrantPermissions"></a>

```go
func PutGrantPermissions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.plugin.Plugin.putGrantPermissions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-docker.plugin.Plugin.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-docker.plugin.Plugin.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEnableTimeout` <a name="ResetEnableTimeout" id="@cdktf/provider-docker.plugin.Plugin.resetEnableTimeout"></a>

```go
func ResetEnableTimeout()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-docker.plugin.Plugin.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-docker.plugin.Plugin.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetForceDisable` <a name="ResetForceDisable" id="@cdktf/provider-docker.plugin.Plugin.resetForceDisable"></a>

```go
func ResetForceDisable()
```

##### `ResetGrantAllPermissions` <a name="ResetGrantAllPermissions" id="@cdktf/provider-docker.plugin.Plugin.resetGrantAllPermissions"></a>

```go
func ResetGrantAllPermissions()
```

##### `ResetGrantPermissions` <a name="ResetGrantPermissions" id="@cdktf/provider-docker.plugin.Plugin.resetGrantPermissions"></a>

```go
func ResetGrantPermissions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-docker.plugin.Plugin.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-docker.plugin.Plugin.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/plugin"

plugin.Plugin_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-docker.plugin.Plugin.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/plugin"

plugin.Plugin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.plugin.Plugin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-docker.plugin.Plugin.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/plugin"

plugin.Plugin_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.plugin.Plugin.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.grantPermissions">GrantPermissions</a></code> | <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList">PluginGrantPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.pluginReference">PluginReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.enableTimeoutInput">EnableTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.envInput">EnvInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.forceDisableInput">ForceDisableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.grantAllPermissionsInput">GrantAllPermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.grantPermissionsInput">GrantPermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.enableTimeout">EnableTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.env">Env</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.forceDisable">ForceDisable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.grantAllPermissions">GrantAllPermissions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-docker.plugin.Plugin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-docker.plugin.Plugin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.plugin.Plugin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-docker.plugin.Plugin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-docker.plugin.Plugin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-docker.plugin.Plugin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-docker.plugin.Plugin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.plugin.Plugin.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.plugin.Plugin.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.plugin.Plugin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.plugin.Plugin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.plugin.Plugin.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.plugin.Plugin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.plugin.Plugin.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GrantPermissions`<sup>Required</sup> <a name="GrantPermissions" id="@cdktf/provider-docker.plugin.Plugin.property.grantPermissions"></a>

```go
func GrantPermissions() PluginGrantPermissionsList
```

- *Type:* <a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList">PluginGrantPermissionsList</a>

---

##### `PluginReference`<sup>Required</sup> <a name="PluginReference" id="@cdktf/provider-docker.plugin.Plugin.property.pluginReference"></a>

```go
func PluginReference() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-docker.plugin.Plugin.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-docker.plugin.Plugin.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnableTimeoutInput`<sup>Optional</sup> <a name="EnableTimeoutInput" id="@cdktf/provider-docker.plugin.Plugin.property.enableTimeoutInput"></a>

```go
func EnableTimeoutInput() *f64
```

- *Type:* *f64

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-docker.plugin.Plugin.property.envInput"></a>

```go
func EnvInput() *[]*string
```

- *Type:* *[]*string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-docker.plugin.Plugin.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `ForceDisableInput`<sup>Optional</sup> <a name="ForceDisableInput" id="@cdktf/provider-docker.plugin.Plugin.property.forceDisableInput"></a>

```go
func ForceDisableInput() interface{}
```

- *Type:* interface{}

---

##### `GrantAllPermissionsInput`<sup>Optional</sup> <a name="GrantAllPermissionsInput" id="@cdktf/provider-docker.plugin.Plugin.property.grantAllPermissionsInput"></a>

```go
func GrantAllPermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `GrantPermissionsInput`<sup>Optional</sup> <a name="GrantPermissionsInput" id="@cdktf/provider-docker.plugin.Plugin.property.grantPermissionsInput"></a>

```go
func GrantPermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-docker.plugin.Plugin.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.plugin.Plugin.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-docker.plugin.Plugin.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-docker.plugin.Plugin.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EnableTimeout`<sup>Required</sup> <a name="EnableTimeout" id="@cdktf/provider-docker.plugin.Plugin.property.enableTimeout"></a>

```go
func EnableTimeout() *f64
```

- *Type:* *f64

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-docker.plugin.Plugin.property.env"></a>

```go
func Env() *[]*string
```

- *Type:* *[]*string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-docker.plugin.Plugin.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `ForceDisable`<sup>Required</sup> <a name="ForceDisable" id="@cdktf/provider-docker.plugin.Plugin.property.forceDisable"></a>

```go
func ForceDisable() interface{}
```

- *Type:* interface{}

---

##### `GrantAllPermissions`<sup>Required</sup> <a name="GrantAllPermissions" id="@cdktf/provider-docker.plugin.Plugin.property.grantAllPermissions"></a>

```go
func GrantAllPermissions() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.plugin.Plugin.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.plugin.Plugin.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-docker.plugin.Plugin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PluginConfig <a name="PluginConfig" id="@cdktf/provider-docker.plugin.PluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.plugin.PluginConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/plugin"

&plugin.PluginConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Alias: *string,
	Enabled: interface{},
	EnableTimeout: *f64,
	Env: *[]*string,
	ForceDestroy: interface{},
	ForceDisable: interface{},
	GrantAllPermissions: interface{},
	GrantPermissions: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.name">Name</a></code> | <code>*string</code> | Docker Plugin name. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.alias">Alias</a></code> | <code>*string</code> | Docker Plugin alias. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | If `true` the plugin is enabled. Defaults to `true`. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.enableTimeout">EnableTimeout</a></code> | <code>*f64</code> | HTTP client timeout to enable the plugin. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.env">Env</a></code> | <code>*[]*string</code> | The environment variables in the form of `KEY=VALUE`, e.g. `DEBUG=0`. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | If true, then the plugin is destroyed forcibly. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.forceDisable">ForceDisable</a></code> | <code>interface{}</code> | If true, then the plugin is disabled forcibly. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.grantAllPermissions">GrantAllPermissions</a></code> | <code>interface{}</code> | If true, grant all permissions necessary to run the plugin. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.grantPermissions">GrantPermissions</a></code> | <code>interface{}</code> | grant_permissions block. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/plugin#id Plugin#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.plugin.PluginConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.plugin.PluginConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.plugin.PluginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.plugin.PluginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.plugin.PluginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.plugin.PluginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.plugin.PluginConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.plugin.PluginConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docker Plugin name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/plugin#name Plugin#name}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-docker.plugin.PluginConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Docker Plugin alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/plugin#alias Plugin#alias}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-docker.plugin.PluginConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

If `true` the plugin is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/plugin#enabled Plugin#enabled}

---

##### `EnableTimeout`<sup>Optional</sup> <a name="EnableTimeout" id="@cdktf/provider-docker.plugin.PluginConfig.property.enableTimeout"></a>

```go
EnableTimeout *f64
```

- *Type:* *f64

HTTP client timeout to enable the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/plugin#enable_timeout Plugin#enable_timeout}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-docker.plugin.PluginConfig.property.env"></a>

```go
Env *[]*string
```

- *Type:* *[]*string

The environment variables in the form of `KEY=VALUE`, e.g. `DEBUG=0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/plugin#env Plugin#env}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-docker.plugin.PluginConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

If true, then the plugin is destroyed forcibly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/plugin#force_destroy Plugin#force_destroy}

---

##### `ForceDisable`<sup>Optional</sup> <a name="ForceDisable" id="@cdktf/provider-docker.plugin.PluginConfig.property.forceDisable"></a>

```go
ForceDisable interface{}
```

- *Type:* interface{}

If true, then the plugin is disabled forcibly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/plugin#force_disable Plugin#force_disable}

---

##### `GrantAllPermissions`<sup>Optional</sup> <a name="GrantAllPermissions" id="@cdktf/provider-docker.plugin.PluginConfig.property.grantAllPermissions"></a>

```go
GrantAllPermissions interface{}
```

- *Type:* interface{}

If true, grant all permissions necessary to run the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/plugin#grant_all_permissions Plugin#grant_all_permissions}

---

##### `GrantPermissions`<sup>Optional</sup> <a name="GrantPermissions" id="@cdktf/provider-docker.plugin.PluginConfig.property.grantPermissions"></a>

```go
GrantPermissions interface{}
```

- *Type:* interface{}

grant_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/plugin#grant_permissions Plugin#grant_permissions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-docker.plugin.PluginConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/plugin#id Plugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### PluginGrantPermissions <a name="PluginGrantPermissions" id="@cdktf/provider-docker.plugin.PluginGrantPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.plugin.PluginGrantPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/plugin"

&plugin.PluginGrantPermissions {
	Name: *string,
	Value: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions.property.name">Name</a></code> | <code>*string</code> | The name of the permission. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions.property.value">Value</a></code> | <code>*[]*string</code> | The value of the permission. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.plugin.PluginGrantPermissions.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/plugin#name Plugin#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.plugin.PluginGrantPermissions.property.value"></a>

```go
Value *[]*string
```

- *Type:* *[]*string

The value of the permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/plugin#value Plugin#value}

---

## Classes <a name="Classes" id="Classes"></a>

### PluginGrantPermissionsList <a name="PluginGrantPermissionsList" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/plugin"

plugin.NewPluginGrantPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PluginGrantPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.get"></a>

```go
func Get(index *f64) PluginGrantPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PluginGrantPermissionsOutputReference <a name="PluginGrantPermissionsOutputReference" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/plugin"

plugin.NewPluginGrantPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PluginGrantPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.value">Value</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.value"></a>

```go
func Value() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



