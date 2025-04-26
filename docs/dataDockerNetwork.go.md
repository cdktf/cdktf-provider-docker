# `dataDockerNetwork` Submodule <a name="`dataDockerNetwork` Submodule" id="@cdktf/provider-docker.dataDockerNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDockerNetwork <a name="DataDockerNetwork" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/data-sources/network docker_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v11/datadockernetwork"

datadockernetwork.NewDataDockerNetwork(scope Construct, id *string, config DataDockerNetworkConfig) DataDockerNetwork
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig">DataDockerNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig">DataDockerNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDockerNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v11/datadockernetwork"

datadockernetwork.DataDockerNetwork_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v11/datadockernetwork"

datadockernetwork.DataDockerNetwork_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v11/datadockernetwork"

datadockernetwork.DataDockerNetwork_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v11/datadockernetwork"

datadockernetwork.DataDockerNetwork_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDockerNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDockerNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDockerNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/data-sources/network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDockerNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.driver">Driver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.internal">Internal</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.ipamConfig">IpamConfig</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList">DataDockerNetworkIpamConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.options">Options</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.driver"></a>

```go
func Driver() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Internal`<sup>Required</sup> <a name="Internal" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.internal"></a>

```go
func Internal() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IpamConfig`<sup>Required</sup> <a name="IpamConfig" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.ipamConfig"></a>

```go
func IpamConfig() DataDockerNetworkIpamConfigList
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList">DataDockerNetworkIpamConfigList</a>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.options"></a>

```go
func Options() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetwork.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDockerNetworkConfig <a name="DataDockerNetworkConfig" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v11/datadockernetwork"

&datadockernetwork.DataDockerNetworkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Docker network. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Docker network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/data-sources/network#name DataDockerNetwork#name}

---

### DataDockerNetworkIpamConfig <a name="DataDockerNetworkIpamConfig" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v11/datadockernetwork"

&datadockernetwork.DataDockerNetworkIpamConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDockerNetworkIpamConfigList <a name="DataDockerNetworkIpamConfigList" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v11/datadockernetwork"

datadockernetwork.NewDataDockerNetworkIpamConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDockerNetworkIpamConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.get"></a>

```go
func Get(index *f64) DataDockerNetworkIpamConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDockerNetworkIpamConfigOutputReference <a name="DataDockerNetworkIpamConfigOutputReference" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v11/datadockernetwork"

datadockernetwork.NewDataDockerNetworkIpamConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDockerNetworkIpamConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.property.auxAddress">AuxAddress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.property.ipRange">IpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.property.subnet">Subnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfig">DataDockerNetworkIpamConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuxAddress`<sup>Required</sup> <a name="AuxAddress" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.property.auxAddress"></a>

```go
func AuxAddress() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.property.ipRange"></a>

```go
func IpRange() *string
```

- *Type:* *string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.property.subnet"></a>

```go
func Subnet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDockerNetworkIpamConfig
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerNetwork.DataDockerNetworkIpamConfig">DataDockerNetworkIpamConfig</a>

---



