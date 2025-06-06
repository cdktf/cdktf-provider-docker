# `buildxBuilder` Submodule <a name="`buildxBuilder` Submodule" id="@cdktf/provider-docker.buildxBuilder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BuildxBuilder <a name="BuildxBuilder" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder docker_buildx_builder}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

buildxbuilder.NewBuildxBuilder(scope Construct, id *string, config BuildxBuilderConfig) BuildxBuilder
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig">BuildxBuilderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig">BuildxBuilderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer">PutDockerContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes">PutKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote">PutRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetAppend">ResetAppend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBootstrap">ResetBootstrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBuildkitConfig">ResetBuildkitConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBuildkitFlags">ResetBuildkitFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDockerContainer">ResetDockerContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDriver">ResetDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDriverOptions">ResetDriverOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetKubernetes">ResetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetNodeAttribute">ResetNodeAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetRemote">ResetRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetUse">ResetUse</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDockerContainer` <a name="PutDockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer"></a>

```go
func PutDockerContainer(value BuildxBuilderDockerContainer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

---

##### `PutKubernetes` <a name="PutKubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes"></a>

```go
func PutKubernetes(value BuildxBuilderKubernetes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

---

##### `PutRemote` <a name="PutRemote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote"></a>

```go
func PutRemote(value BuildxBuilderRemote)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

---

##### `ResetAppend` <a name="ResetAppend" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetAppend"></a>

```go
func ResetAppend()
```

##### `ResetBootstrap` <a name="ResetBootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBootstrap"></a>

```go
func ResetBootstrap()
```

##### `ResetBuildkitConfig` <a name="ResetBuildkitConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBuildkitConfig"></a>

```go
func ResetBuildkitConfig()
```

##### `ResetBuildkitFlags` <a name="ResetBuildkitFlags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBuildkitFlags"></a>

```go
func ResetBuildkitFlags()
```

##### `ResetDockerContainer` <a name="ResetDockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDockerContainer"></a>

```go
func ResetDockerContainer()
```

##### `ResetDriver` <a name="ResetDriver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDriver"></a>

```go
func ResetDriver()
```

##### `ResetDriverOptions` <a name="ResetDriverOptions" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDriverOptions"></a>

```go
func ResetDriverOptions()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetId"></a>

```go
func ResetId()
```

##### `ResetKubernetes` <a name="ResetKubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetKubernetes"></a>

```go
func ResetKubernetes()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetName"></a>

```go
func ResetName()
```

##### `ResetNodeAttribute` <a name="ResetNodeAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetNodeAttribute"></a>

```go
func ResetNodeAttribute()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetPlatform"></a>

```go
func ResetPlatform()
```

##### `ResetRemote` <a name="ResetRemote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetRemote"></a>

```go
func ResetRemote()
```

##### `ResetUse` <a name="ResetUse" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetUse"></a>

```go
func ResetUse()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BuildxBuilder resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

buildxbuilder.BuildxBuilder_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

buildxbuilder.BuildxBuilder_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

buildxbuilder.BuildxBuilder_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

buildxbuilder.BuildxBuilder_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BuildxBuilder resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BuildxBuilder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BuildxBuilder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BuildxBuilder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainer">DockerContainer</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference">BuildxBuilderDockerContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference">BuildxBuilderKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remote">Remote</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference">BuildxBuilderRemoteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.appendInput">AppendInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrapInput">BootstrapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfigInput">BuildkitConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlagsInput">BuildkitFlagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainerInput">DockerContainerInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverInput">DriverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptionsInput">DriverOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetesInput">KubernetesInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttributeInput">NodeAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platformInput">PlatformInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remoteInput">RemoteInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.useInput">UseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.append">Append</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrap">Bootstrap</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfig">BuildkitConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlags">BuildkitFlags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driver">Driver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptions">DriverOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttribute">NodeAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platform">Platform</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.use">Use</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DockerContainer`<sup>Required</sup> <a name="DockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainer"></a>

```go
func DockerContainer() BuildxBuilderDockerContainerOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference">BuildxBuilderDockerContainerOutputReference</a>

---

##### `Kubernetes`<sup>Required</sup> <a name="Kubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetes"></a>

```go
func Kubernetes() BuildxBuilderKubernetesOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference">BuildxBuilderKubernetesOutputReference</a>

---

##### `Remote`<sup>Required</sup> <a name="Remote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remote"></a>

```go
func Remote() BuildxBuilderRemoteOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference">BuildxBuilderRemoteOutputReference</a>

---

##### `AppendInput`<sup>Optional</sup> <a name="AppendInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.appendInput"></a>

```go
func AppendInput() interface{}
```

- *Type:* interface{}

---

##### `BootstrapInput`<sup>Optional</sup> <a name="BootstrapInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrapInput"></a>

```go
func BootstrapInput() interface{}
```

- *Type:* interface{}

---

##### `BuildkitConfigInput`<sup>Optional</sup> <a name="BuildkitConfigInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfigInput"></a>

```go
func BuildkitConfigInput() *string
```

- *Type:* *string

---

##### `BuildkitFlagsInput`<sup>Optional</sup> <a name="BuildkitFlagsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlagsInput"></a>

```go
func BuildkitFlagsInput() *string
```

- *Type:* *string

---

##### `DockerContainerInput`<sup>Optional</sup> <a name="DockerContainerInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainerInput"></a>

```go
func DockerContainerInput() BuildxBuilderDockerContainer
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

---

##### `DriverInput`<sup>Optional</sup> <a name="DriverInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverInput"></a>

```go
func DriverInput() *string
```

- *Type:* *string

---

##### `DriverOptionsInput`<sup>Optional</sup> <a name="DriverOptionsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptionsInput"></a>

```go
func DriverOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubernetesInput`<sup>Optional</sup> <a name="KubernetesInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetesInput"></a>

```go
func KubernetesInput() BuildxBuilderKubernetes
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeAttributeInput`<sup>Optional</sup> <a name="NodeAttributeInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttributeInput"></a>

```go
func NodeAttributeInput() *string
```

- *Type:* *string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platformInput"></a>

```go
func PlatformInput() *[]*string
```

- *Type:* *[]*string

---

##### `RemoteInput`<sup>Optional</sup> <a name="RemoteInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remoteInput"></a>

```go
func RemoteInput() BuildxBuilderRemote
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

---

##### `UseInput`<sup>Optional</sup> <a name="UseInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.useInput"></a>

```go
func UseInput() interface{}
```

- *Type:* interface{}

---

##### `Append`<sup>Required</sup> <a name="Append" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.append"></a>

```go
func Append() interface{}
```

- *Type:* interface{}

---

##### `Bootstrap`<sup>Required</sup> <a name="Bootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrap"></a>

```go
func Bootstrap() interface{}
```

- *Type:* interface{}

---

##### `BuildkitConfig`<sup>Required</sup> <a name="BuildkitConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfig"></a>

```go
func BuildkitConfig() *string
```

- *Type:* *string

---

##### `BuildkitFlags`<sup>Required</sup> <a name="BuildkitFlags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlags"></a>

```go
func BuildkitFlags() *string
```

- *Type:* *string

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driver"></a>

```go
func Driver() *string
```

- *Type:* *string

---

##### `DriverOptions`<sup>Required</sup> <a name="DriverOptions" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptions"></a>

```go
func DriverOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeAttribute`<sup>Required</sup> <a name="NodeAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttribute"></a>

```go
func NodeAttribute() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platform"></a>

```go
func Platform() *[]*string
```

- *Type:* *[]*string

---

##### `Use`<sup>Required</sup> <a name="Use" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.use"></a>

```go
func Use() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BuildxBuilderConfig <a name="BuildxBuilderConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

&buildxbuilder.BuildxBuilderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Append: interface{},
	Bootstrap: interface{},
	BuildkitConfig: *string,
	BuildkitFlags: *string,
	DockerContainer: github.com/cdktf/cdktf-provider-docker-go/docker/v12.buildxBuilder.BuildxBuilderDockerContainer,
	Driver: *string,
	DriverOptions: *map[string]*string,
	Endpoint: *string,
	Id: *string,
	Kubernetes: github.com/cdktf/cdktf-provider-docker-go/docker/v12.buildxBuilder.BuildxBuilderKubernetes,
	Name: *string,
	NodeAttribute: *string,
	Platform: *[]*string,
	Remote: github.com/cdktf/cdktf-provider-docker-go/docker/v12.buildxBuilder.BuildxBuilderRemote,
	Use: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.append">Append</a></code> | <code>interface{}</code> | Append a node to builder instead of changing it. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.bootstrap">Bootstrap</a></code> | <code>interface{}</code> | Automatically boot the builder after creation. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitConfig">BuildkitConfig</a></code> | <code>*string</code> | BuildKit daemon config file. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitFlags">BuildkitFlags</a></code> | <code>*string</code> | BuildKit flags to set for the builder. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dockerContainer">DockerContainer</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | docker_container block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driver">Driver</a></code> | <code>*string</code> | The driver to use for the Buildx builder (e.g., docker-container, kubernetes). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driverOptions">DriverOptions</a></code> | <code>*map[string]*string</code> | Additional options for the Buildx driver in the form of `key=value,...`. These options are driver-specific. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | The endpoint or context to use for the Buildx builder, where context is the name of a context from docker context ls and endpoint is the address for Docker socket (eg. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#id BuildxBuilder#id}. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Buildx builder. IF not specified, a random name will be generated. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.nodeAttribute">NodeAttribute</a></code> | <code>*string</code> | Create/modify node with given name. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.platform">Platform</a></code> | <code>*[]*string</code> | Fixed platforms for current node. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.remote">Remote</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | remote block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.use">Use</a></code> | <code>interface{}</code> | Set the current builder instance as the default for the current context. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Append`<sup>Optional</sup> <a name="Append" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.append"></a>

```go
Append interface{}
```

- *Type:* interface{}

Append a node to builder instead of changing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#append BuildxBuilder#append}

---

##### `Bootstrap`<sup>Optional</sup> <a name="Bootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.bootstrap"></a>

```go
Bootstrap interface{}
```

- *Type:* interface{}

Automatically boot the builder after creation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#bootstrap BuildxBuilder#bootstrap}

---

##### `BuildkitConfig`<sup>Optional</sup> <a name="BuildkitConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitConfig"></a>

```go
BuildkitConfig *string
```

- *Type:* *string

BuildKit daemon config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#buildkit_config BuildxBuilder#buildkit_config}

---

##### `BuildkitFlags`<sup>Optional</sup> <a name="BuildkitFlags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitFlags"></a>

```go
BuildkitFlags *string
```

- *Type:* *string

BuildKit flags to set for the builder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#buildkit_flags BuildxBuilder#buildkit_flags}

---

##### `DockerContainer`<sup>Optional</sup> <a name="DockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dockerContainer"></a>

```go
DockerContainer BuildxBuilderDockerContainer
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

docker_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#docker_container BuildxBuilder#docker_container}

---

##### `Driver`<sup>Optional</sup> <a name="Driver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driver"></a>

```go
Driver *string
```

- *Type:* *string

The driver to use for the Buildx builder (e.g., docker-container, kubernetes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#driver BuildxBuilder#driver}

---

##### `DriverOptions`<sup>Optional</sup> <a name="DriverOptions" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driverOptions"></a>

```go
DriverOptions *map[string]*string
```

- *Type:* *map[string]*string

Additional options for the Buildx driver in the form of `key=value,...`. These options are driver-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#driver_options BuildxBuilder#driver_options}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

The endpoint or context to use for the Buildx builder, where context is the name of a context from docker context ls and endpoint is the address for Docker socket (eg.

DOCKER_HOST value). By default, the current Docker configuration is used for determining the context/endpoint value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#endpoint BuildxBuilder#endpoint}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#id BuildxBuilder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Kubernetes`<sup>Optional</sup> <a name="Kubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.kubernetes"></a>

```go
Kubernetes BuildxBuilderKubernetes
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#kubernetes BuildxBuilder#kubernetes}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Buildx builder. IF not specified, a random name will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#name BuildxBuilder#name}

---

##### `NodeAttribute`<sup>Optional</sup> <a name="NodeAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.nodeAttribute"></a>

```go
NodeAttribute *string
```

- *Type:* *string

Create/modify node with given name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#node BuildxBuilder#node}

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.platform"></a>

```go
Platform *[]*string
```

- *Type:* *[]*string

Fixed platforms for current node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#platform BuildxBuilder#platform}

---

##### `Remote`<sup>Optional</sup> <a name="Remote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.remote"></a>

```go
Remote BuildxBuilderRemote
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

remote block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#remote BuildxBuilder#remote}

---

##### `Use`<sup>Optional</sup> <a name="Use" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.use"></a>

```go
Use interface{}
```

- *Type:* interface{}

Set the current builder instance as the default for the current context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#use BuildxBuilder#use}

---

### BuildxBuilderDockerContainer <a name="BuildxBuilderDockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

&buildxbuilder.BuildxBuilderDockerContainer {
	CgroupParent: *string,
	CpuPeriod: *string,
	CpuQuota: *string,
	CpusetCpus: *string,
	CpusetMems: *string,
	CpuShares: *string,
	DefaultLoad: interface{},
	Env: *map[string]*string,
	Image: *string,
	Memory: *string,
	MemorySwap: *string,
	Network: *string,
	RestartPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cgroupParent">CgroupParent</a></code> | <code>*string</code> | Sets the cgroup parent of the container if Docker is using the "cgroupfs" driver. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuPeriod">CpuPeriod</a></code> | <code>*string</code> | Sets the CPU CFS scheduler period for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuQuota">CpuQuota</a></code> | <code>*string</code> | Imposes a CPU CFS quota on the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetCpus">CpusetCpus</a></code> | <code>*string</code> | Limits the set of CPU cores the container can use. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetMems">CpusetMems</a></code> | <code>*string</code> | Limits the set of CPU memory nodes the container can use. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuShares">CpuShares</a></code> | <code>*string</code> | Configures CPU shares (relative weight) of the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.defaultLoad">DefaultLoad</a></code> | <code>interface{}</code> | Automatically load images to the Docker Engine image store. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.env">Env</a></code> | <code>*map[string]*string</code> | Sets environment variables in the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.image">Image</a></code> | <code>*string</code> | Sets the BuildKit image to use for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memory">Memory</a></code> | <code>*string</code> | Sets the amount of memory the container can use. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memorySwap">MemorySwap</a></code> | <code>*string</code> | Sets the memory swap limit for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.network">Network</a></code> | <code>*string</code> | Sets the network mode for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.restartPolicy">RestartPolicy</a></code> | <code>*string</code> | Sets the container's restart policy. |

---

##### `CgroupParent`<sup>Optional</sup> <a name="CgroupParent" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cgroupParent"></a>

```go
CgroupParent *string
```

- *Type:* *string

Sets the cgroup parent of the container if Docker is using the "cgroupfs" driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cgroup_parent BuildxBuilder#cgroup_parent}

---

##### `CpuPeriod`<sup>Optional</sup> <a name="CpuPeriod" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuPeriod"></a>

```go
CpuPeriod *string
```

- *Type:* *string

Sets the CPU CFS scheduler period for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cpu_period BuildxBuilder#cpu_period}

---

##### `CpuQuota`<sup>Optional</sup> <a name="CpuQuota" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuQuota"></a>

```go
CpuQuota *string
```

- *Type:* *string

Imposes a CPU CFS quota on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cpu_quota BuildxBuilder#cpu_quota}

---

##### `CpusetCpus`<sup>Optional</sup> <a name="CpusetCpus" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetCpus"></a>

```go
CpusetCpus *string
```

- *Type:* *string

Limits the set of CPU cores the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cpuset_cpus BuildxBuilder#cpuset_cpus}

---

##### `CpusetMems`<sup>Optional</sup> <a name="CpusetMems" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetMems"></a>

```go
CpusetMems *string
```

- *Type:* *string

Limits the set of CPU memory nodes the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cpuset_mems BuildxBuilder#cpuset_mems}

---

##### `CpuShares`<sup>Optional</sup> <a name="CpuShares" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuShares"></a>

```go
CpuShares *string
```

- *Type:* *string

Configures CPU shares (relative weight) of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cpu_shares BuildxBuilder#cpu_shares}

---

##### `DefaultLoad`<sup>Optional</sup> <a name="DefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.defaultLoad"></a>

```go
DefaultLoad interface{}
```

- *Type:* interface{}

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.env"></a>

```go
Env *map[string]*string
```

- *Type:* *map[string]*string

Sets environment variables in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#env BuildxBuilder#env}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.image"></a>

```go
Image *string
```

- *Type:* *string

Sets the BuildKit image to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#image BuildxBuilder#image}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memory"></a>

```go
Memory *string
```

- *Type:* *string

Sets the amount of memory the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

##### `MemorySwap`<sup>Optional</sup> <a name="MemorySwap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memorySwap"></a>

```go
MemorySwap *string
```

- *Type:* *string

Sets the memory swap limit for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#memory_swap BuildxBuilder#memory_swap}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.network"></a>

```go
Network *string
```

- *Type:* *string

Sets the network mode for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#network BuildxBuilder#network}

---

##### `RestartPolicy`<sup>Optional</sup> <a name="RestartPolicy" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.restartPolicy"></a>

```go
RestartPolicy *string
```

- *Type:* *string

Sets the container's restart policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#restart_policy BuildxBuilder#restart_policy}

---

### BuildxBuilderKubernetes <a name="BuildxBuilderKubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

&buildxbuilder.BuildxBuilderKubernetes {
	Annotations: *string,
	DefaultLoad: interface{},
	Image: *string,
	Labels: *string,
	Limits: github.com/cdktf/cdktf-provider-docker-go/docker/v12.buildxBuilder.BuildxBuilderKubernetesLimits,
	Loadbalance: *string,
	Namespace: *string,
	Nodeselector: *string,
	Qemu: github.com/cdktf/cdktf-provider-docker-go/docker/v12.buildxBuilder.BuildxBuilderKubernetesQemu,
	Replicas: *f64,
	Requests: github.com/cdktf/cdktf-provider-docker-go/docker/v12.buildxBuilder.BuildxBuilderKubernetesRequests,
	Rootless: interface{},
	Schedulername: *string,
	Serviceaccount: *string,
	Timeout: *string,
	Tolerations: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.annotations">Annotations</a></code> | <code>*string</code> | Sets additional annotations on the deployments and pods. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.defaultLoad">DefaultLoad</a></code> | <code>interface{}</code> | Automatically load images to the Docker Engine image store. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.image">Image</a></code> | <code>*string</code> | Sets the image to use for running BuildKit. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.labels">Labels</a></code> | <code>*string</code> | Sets additional labels on the deployments and pods. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.loadbalance">Loadbalance</a></code> | <code>*string</code> | Load-balancing strategy (sticky or random). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.namespace">Namespace</a></code> | <code>*string</code> | Sets the Kubernetes namespace. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.nodeselector">Nodeselector</a></code> | <code>*string</code> | Sets the pod's nodeSelector label(s). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.qemu">Qemu</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a></code> | qemu block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.replicas">Replicas</a></code> | <code>*f64</code> | Sets the number of Pod replicas to create. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.requests">Requests</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a></code> | requests block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.rootless">Rootless</a></code> | <code>interface{}</code> | Run the container as a non-root user. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.schedulername">Schedulername</a></code> | <code>*string</code> | Sets the scheduler responsible for scheduling the pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.serviceaccount">Serviceaccount</a></code> | <code>*string</code> | Sets the pod's serviceAccountName. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.timeout">Timeout</a></code> | <code>*string</code> | Set the timeout limit for pod provisioning. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.tolerations">Tolerations</a></code> | <code>*string</code> | Configures the pod's taint toleration. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.annotations"></a>

```go
Annotations *string
```

- *Type:* *string

Sets additional annotations on the deployments and pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#annotations BuildxBuilder#annotations}

---

##### `DefaultLoad`<sup>Optional</sup> <a name="DefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.defaultLoad"></a>

```go
DefaultLoad interface{}
```

- *Type:* interface{}

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.image"></a>

```go
Image *string
```

- *Type:* *string

Sets the image to use for running BuildKit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#image BuildxBuilder#image}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.labels"></a>

```go
Labels *string
```

- *Type:* *string

Sets additional labels on the deployments and pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#labels BuildxBuilder#labels}

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.limits"></a>

```go
Limits BuildxBuilderKubernetesLimits
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#limits BuildxBuilder#limits}

---

##### `Loadbalance`<sup>Optional</sup> <a name="Loadbalance" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.loadbalance"></a>

```go
Loadbalance *string
```

- *Type:* *string

Load-balancing strategy (sticky or random).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#loadbalance BuildxBuilder#loadbalance}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Sets the Kubernetes namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#namespace BuildxBuilder#namespace}

---

##### `Nodeselector`<sup>Optional</sup> <a name="Nodeselector" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.nodeselector"></a>

```go
Nodeselector *string
```

- *Type:* *string

Sets the pod's nodeSelector label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#nodeselector BuildxBuilder#nodeselector}

---

##### `Qemu`<sup>Optional</sup> <a name="Qemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.qemu"></a>

```go
Qemu BuildxBuilderKubernetesQemu
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

qemu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#qemu BuildxBuilder#qemu}

---

##### `Replicas`<sup>Optional</sup> <a name="Replicas" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.replicas"></a>

```go
Replicas *f64
```

- *Type:* *f64

Sets the number of Pod replicas to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#replicas BuildxBuilder#replicas}

---

##### `Requests`<sup>Optional</sup> <a name="Requests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.requests"></a>

```go
Requests BuildxBuilderKubernetesRequests
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

requests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#requests BuildxBuilder#requests}

---

##### `Rootless`<sup>Optional</sup> <a name="Rootless" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.rootless"></a>

```go
Rootless interface{}
```

- *Type:* interface{}

Run the container as a non-root user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#rootless BuildxBuilder#rootless}

---

##### `Schedulername`<sup>Optional</sup> <a name="Schedulername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.schedulername"></a>

```go
Schedulername *string
```

- *Type:* *string

Sets the scheduler responsible for scheduling the pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#schedulername BuildxBuilder#schedulername}

---

##### `Serviceaccount`<sup>Optional</sup> <a name="Serviceaccount" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.serviceaccount"></a>

```go
Serviceaccount *string
```

- *Type:* *string

Sets the pod's serviceAccountName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#serviceaccount BuildxBuilder#serviceaccount}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Set the timeout limit for pod provisioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#timeout BuildxBuilder#timeout}

---

##### `Tolerations`<sup>Optional</sup> <a name="Tolerations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.tolerations"></a>

```go
Tolerations *string
```

- *Type:* *string

Configures the pod's taint toleration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#tolerations BuildxBuilder#tolerations}

---

### BuildxBuilderKubernetesLimits <a name="BuildxBuilderKubernetesLimits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

&buildxbuilder.BuildxBuilderKubernetesLimits {
	Cpu: *string,
	EphemeralStorage: *string,
	Memory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.cpu">Cpu</a></code> | <code>*string</code> | CPU limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.ephemeralStorage">EphemeralStorage</a></code> | <code>*string</code> | Ephemeral storage limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.memory">Memory</a></code> | <code>*string</code> | Memory limit for the Kubernetes pod. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.cpu"></a>

```go
Cpu *string
```

- *Type:* *string

CPU limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cpu BuildxBuilder#cpu}

---

##### `EphemeralStorage`<sup>Optional</sup> <a name="EphemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.ephemeralStorage"></a>

```go
EphemeralStorage *string
```

- *Type:* *string

Ephemeral storage limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#ephemeral_storage BuildxBuilder#ephemeral_storage}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.memory"></a>

```go
Memory *string
```

- *Type:* *string

Memory limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

### BuildxBuilderKubernetesQemu <a name="BuildxBuilderKubernetesQemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

&buildxbuilder.BuildxBuilderKubernetesQemu {
	Image: *string,
	Install: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.image">Image</a></code> | <code>*string</code> | Sets the QEMU emulation image. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.install">Install</a></code> | <code>interface{}</code> | Install QEMU emulation for multi-platform support. |

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.image"></a>

```go
Image *string
```

- *Type:* *string

Sets the QEMU emulation image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#image BuildxBuilder#image}

---

##### `Install`<sup>Optional</sup> <a name="Install" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.install"></a>

```go
Install interface{}
```

- *Type:* interface{}

Install QEMU emulation for multi-platform support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#install BuildxBuilder#install}

---

### BuildxBuilderKubernetesRequests <a name="BuildxBuilderKubernetesRequests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

&buildxbuilder.BuildxBuilderKubernetesRequests {
	Cpu: *string,
	EphemeralStorage: *string,
	Memory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.cpu">Cpu</a></code> | <code>*string</code> | CPU limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.ephemeralStorage">EphemeralStorage</a></code> | <code>*string</code> | Ephemeral storage limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.memory">Memory</a></code> | <code>*string</code> | Memory limit for the Kubernetes pod. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.cpu"></a>

```go
Cpu *string
```

- *Type:* *string

CPU limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cpu BuildxBuilder#cpu}

---

##### `EphemeralStorage`<sup>Optional</sup> <a name="EphemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.ephemeralStorage"></a>

```go
EphemeralStorage *string
```

- *Type:* *string

Ephemeral storage limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#ephemeral_storage BuildxBuilder#ephemeral_storage}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.memory"></a>

```go
Memory *string
```

- *Type:* *string

Memory limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

### BuildxBuilderRemote <a name="BuildxBuilderRemote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

&buildxbuilder.BuildxBuilderRemote {
	Cacert: *string,
	Cert: *string,
	DefaultLoad: interface{},
	Key: *string,
	Servername: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cacert">Cacert</a></code> | <code>*string</code> | Absolute path to the TLS certificate authority used for validation. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cert">Cert</a></code> | <code>*string</code> | Absolute path to the TLS client certificate to present to buildkitd. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.defaultLoad">DefaultLoad</a></code> | <code>interface{}</code> | Automatically load images to the Docker Engine image store. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.key">Key</a></code> | <code>*string</code> | Sets the TLS client key. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.servername">Servername</a></code> | <code>*string</code> | TLS server name used in requests. |

---

##### `Cacert`<sup>Optional</sup> <a name="Cacert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cacert"></a>

```go
Cacert *string
```

- *Type:* *string

Absolute path to the TLS certificate authority used for validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cacert BuildxBuilder#cacert}

---

##### `Cert`<sup>Optional</sup> <a name="Cert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cert"></a>

```go
Cert *string
```

- *Type:* *string

Absolute path to the TLS client certificate to present to buildkitd.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cert BuildxBuilder#cert}

---

##### `DefaultLoad`<sup>Optional</sup> <a name="DefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.defaultLoad"></a>

```go
DefaultLoad interface{}
```

- *Type:* interface{}

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.key"></a>

```go
Key *string
```

- *Type:* *string

Sets the TLS client key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#key BuildxBuilder#key}

---

##### `Servername`<sup>Optional</sup> <a name="Servername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.servername"></a>

```go
Servername *string
```

- *Type:* *string

TLS server name used in requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#servername BuildxBuilder#servername}

---

## Classes <a name="Classes" id="Classes"></a>

### BuildxBuilderDockerContainerOutputReference <a name="BuildxBuilderDockerContainerOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

buildxbuilder.NewBuildxBuilderDockerContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BuildxBuilderDockerContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCgroupParent">ResetCgroupParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuPeriod">ResetCpuPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuQuota">ResetCpuQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpusetCpus">ResetCpusetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpusetMems">ResetCpusetMems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuShares">ResetCpuShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetDefaultLoad">ResetDefaultLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetMemorySwap">ResetMemorySwap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetRestartPolicy">ResetRestartPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCgroupParent` <a name="ResetCgroupParent" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCgroupParent"></a>

```go
func ResetCgroupParent()
```

##### `ResetCpuPeriod` <a name="ResetCpuPeriod" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuPeriod"></a>

```go
func ResetCpuPeriod()
```

##### `ResetCpuQuota` <a name="ResetCpuQuota" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuQuota"></a>

```go
func ResetCpuQuota()
```

##### `ResetCpusetCpus` <a name="ResetCpusetCpus" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpusetCpus"></a>

```go
func ResetCpusetCpus()
```

##### `ResetCpusetMems` <a name="ResetCpusetMems" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpusetMems"></a>

```go
func ResetCpusetMems()
```

##### `ResetCpuShares` <a name="ResetCpuShares" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuShares"></a>

```go
func ResetCpuShares()
```

##### `ResetDefaultLoad` <a name="ResetDefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetDefaultLoad"></a>

```go
func ResetDefaultLoad()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetMemory"></a>

```go
func ResetMemory()
```

##### `ResetMemorySwap` <a name="ResetMemorySwap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetMemorySwap"></a>

```go
func ResetMemorySwap()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetRestartPolicy` <a name="ResetRestartPolicy" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetRestartPolicy"></a>

```go
func ResetRestartPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParentInput">CgroupParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriodInput">CpuPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuotaInput">CpuQuotaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpusInput">CpusetCpusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMemsInput">CpusetMemsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuSharesInput">CpuSharesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoadInput">DefaultLoadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.envInput">EnvInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwapInput">MemorySwapInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicyInput">RestartPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParent">CgroupParent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriod">CpuPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuota">CpuQuota</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpus">CpusetCpus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMems">CpusetMems</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuShares">CpuShares</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoad">DefaultLoad</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.env">Env</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwap">MemorySwap</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicy">RestartPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CgroupParentInput`<sup>Optional</sup> <a name="CgroupParentInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParentInput"></a>

```go
func CgroupParentInput() *string
```

- *Type:* *string

---

##### `CpuPeriodInput`<sup>Optional</sup> <a name="CpuPeriodInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriodInput"></a>

```go
func CpuPeriodInput() *string
```

- *Type:* *string

---

##### `CpuQuotaInput`<sup>Optional</sup> <a name="CpuQuotaInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuotaInput"></a>

```go
func CpuQuotaInput() *string
```

- *Type:* *string

---

##### `CpusetCpusInput`<sup>Optional</sup> <a name="CpusetCpusInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpusInput"></a>

```go
func CpusetCpusInput() *string
```

- *Type:* *string

---

##### `CpusetMemsInput`<sup>Optional</sup> <a name="CpusetMemsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMemsInput"></a>

```go
func CpusetMemsInput() *string
```

- *Type:* *string

---

##### `CpuSharesInput`<sup>Optional</sup> <a name="CpuSharesInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuSharesInput"></a>

```go
func CpuSharesInput() *string
```

- *Type:* *string

---

##### `DefaultLoadInput`<sup>Optional</sup> <a name="DefaultLoadInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoadInput"></a>

```go
func DefaultLoadInput() interface{}
```

- *Type:* interface{}

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.envInput"></a>

```go
func EnvInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *string
```

- *Type:* *string

---

##### `MemorySwapInput`<sup>Optional</sup> <a name="MemorySwapInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwapInput"></a>

```go
func MemorySwapInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `RestartPolicyInput`<sup>Optional</sup> <a name="RestartPolicyInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicyInput"></a>

```go
func RestartPolicyInput() *string
```

- *Type:* *string

---

##### `CgroupParent`<sup>Required</sup> <a name="CgroupParent" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParent"></a>

```go
func CgroupParent() *string
```

- *Type:* *string

---

##### `CpuPeriod`<sup>Required</sup> <a name="CpuPeriod" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriod"></a>

```go
func CpuPeriod() *string
```

- *Type:* *string

---

##### `CpuQuota`<sup>Required</sup> <a name="CpuQuota" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuota"></a>

```go
func CpuQuota() *string
```

- *Type:* *string

---

##### `CpusetCpus`<sup>Required</sup> <a name="CpusetCpus" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpus"></a>

```go
func CpusetCpus() *string
```

- *Type:* *string

---

##### `CpusetMems`<sup>Required</sup> <a name="CpusetMems" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMems"></a>

```go
func CpusetMems() *string
```

- *Type:* *string

---

##### `CpuShares`<sup>Required</sup> <a name="CpuShares" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuShares"></a>

```go
func CpuShares() *string
```

- *Type:* *string

---

##### `DefaultLoad`<sup>Required</sup> <a name="DefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoad"></a>

```go
func DefaultLoad() interface{}
```

- *Type:* interface{}

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.env"></a>

```go
func Env() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `MemorySwap`<sup>Required</sup> <a name="MemorySwap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwap"></a>

```go
func MemorySwap() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `RestartPolicy`<sup>Required</sup> <a name="RestartPolicy" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicy"></a>

```go
func RestartPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() BuildxBuilderDockerContainer
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

---


### BuildxBuilderKubernetesLimitsOutputReference <a name="BuildxBuilderKubernetesLimitsOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

buildxbuilder.NewBuildxBuilderKubernetesLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BuildxBuilderKubernetesLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetEphemeralStorage">ResetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetEphemeralStorage` <a name="ResetEphemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetEphemeralStorage"></a>

```go
func ResetEphemeralStorage()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetMemory"></a>

```go
func ResetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpuInput">CpuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorageInput">EphemeralStorageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpu">Cpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorage">EphemeralStorage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpuInput"></a>

```go
func CpuInput() *string
```

- *Type:* *string

---

##### `EphemeralStorageInput`<sup>Optional</sup> <a name="EphemeralStorageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorageInput"></a>

```go
func EphemeralStorageInput() *string
```

- *Type:* *string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpu"></a>

```go
func Cpu() *string
```

- *Type:* *string

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorage"></a>

```go
func EphemeralStorage() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() BuildxBuilderKubernetesLimits
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

---


### BuildxBuilderKubernetesOutputReference <a name="BuildxBuilderKubernetesOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

buildxbuilder.NewBuildxBuilderKubernetesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BuildxBuilderKubernetesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putQemu">PutQemu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putRequests">PutRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetDefaultLoad">ResetDefaultLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLoadbalance">ResetLoadbalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetNodeselector">ResetNodeselector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetQemu">ResetQemu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetReplicas">ResetReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetRequests">ResetRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetRootless">ResetRootless</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetSchedulername">ResetSchedulername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetServiceaccount">ResetServiceaccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetTolerations">ResetTolerations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLimits` <a name="PutLimits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putLimits"></a>

```go
func PutLimits(value BuildxBuilderKubernetesLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

---

##### `PutQemu` <a name="PutQemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putQemu"></a>

```go
func PutQemu(value BuildxBuilderKubernetesQemu)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putQemu.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

---

##### `PutRequests` <a name="PutRequests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putRequests"></a>

```go
func PutRequests(value BuildxBuilderKubernetesRequests)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putRequests.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDefaultLoad` <a name="ResetDefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetDefaultLoad"></a>

```go
func ResetDefaultLoad()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLimits"></a>

```go
func ResetLimits()
```

##### `ResetLoadbalance` <a name="ResetLoadbalance" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLoadbalance"></a>

```go
func ResetLoadbalance()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNodeselector` <a name="ResetNodeselector" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetNodeselector"></a>

```go
func ResetNodeselector()
```

##### `ResetQemu` <a name="ResetQemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetQemu"></a>

```go
func ResetQemu()
```

##### `ResetReplicas` <a name="ResetReplicas" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetReplicas"></a>

```go
func ResetReplicas()
```

##### `ResetRequests` <a name="ResetRequests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetRequests"></a>

```go
func ResetRequests()
```

##### `ResetRootless` <a name="ResetRootless" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetRootless"></a>

```go
func ResetRootless()
```

##### `ResetSchedulername` <a name="ResetSchedulername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetSchedulername"></a>

```go
func ResetSchedulername()
```

##### `ResetServiceaccount` <a name="ResetServiceaccount" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetServiceaccount"></a>

```go
func ResetServiceaccount()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetTolerations` <a name="ResetTolerations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetTolerations"></a>

```go
func ResetTolerations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference">BuildxBuilderKubernetesLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemu">Qemu</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference">BuildxBuilderKubernetesQemuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requests">Requests</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference">BuildxBuilderKubernetesRequestsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoadInput">DefaultLoadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limitsInput">LimitsInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalanceInput">LoadbalanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselectorInput">NodeselectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemuInput">QemuInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicasInput">ReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requestsInput">RequestsInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootlessInput">RootlessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulernameInput">SchedulernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccountInput">ServiceaccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerationsInput">TolerationsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotations">Annotations</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoad">DefaultLoad</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labels">Labels</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalance">Loadbalance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselector">Nodeselector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicas">Replicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootless">Rootless</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulername">Schedulername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccount">Serviceaccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerations">Tolerations</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limits"></a>

```go
func Limits() BuildxBuilderKubernetesLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference">BuildxBuilderKubernetesLimitsOutputReference</a>

---

##### `Qemu`<sup>Required</sup> <a name="Qemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemu"></a>

```go
func Qemu() BuildxBuilderKubernetesQemuOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference">BuildxBuilderKubernetesQemuOutputReference</a>

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requests"></a>

```go
func Requests() BuildxBuilderKubernetesRequestsOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference">BuildxBuilderKubernetesRequestsOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *string
```

- *Type:* *string

---

##### `DefaultLoadInput`<sup>Optional</sup> <a name="DefaultLoadInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoadInput"></a>

```go
func DefaultLoadInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *string
```

- *Type:* *string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limitsInput"></a>

```go
func LimitsInput() BuildxBuilderKubernetesLimits
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

---

##### `LoadbalanceInput`<sup>Optional</sup> <a name="LoadbalanceInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalanceInput"></a>

```go
func LoadbalanceInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NodeselectorInput`<sup>Optional</sup> <a name="NodeselectorInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselectorInput"></a>

```go
func NodeselectorInput() *string
```

- *Type:* *string

---

##### `QemuInput`<sup>Optional</sup> <a name="QemuInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemuInput"></a>

```go
func QemuInput() BuildxBuilderKubernetesQemu
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicasInput"></a>

```go
func ReplicasInput() *f64
```

- *Type:* *f64

---

##### `RequestsInput`<sup>Optional</sup> <a name="RequestsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requestsInput"></a>

```go
func RequestsInput() BuildxBuilderKubernetesRequests
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

---

##### `RootlessInput`<sup>Optional</sup> <a name="RootlessInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootlessInput"></a>

```go
func RootlessInput() interface{}
```

- *Type:* interface{}

---

##### `SchedulernameInput`<sup>Optional</sup> <a name="SchedulernameInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulernameInput"></a>

```go
func SchedulernameInput() *string
```

- *Type:* *string

---

##### `ServiceaccountInput`<sup>Optional</sup> <a name="ServiceaccountInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccountInput"></a>

```go
func ServiceaccountInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `TolerationsInput`<sup>Optional</sup> <a name="TolerationsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerationsInput"></a>

```go
func TolerationsInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotations"></a>

```go
func Annotations() *string
```

- *Type:* *string

---

##### `DefaultLoad`<sup>Required</sup> <a name="DefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoad"></a>

```go
func DefaultLoad() interface{}
```

- *Type:* interface{}

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labels"></a>

```go
func Labels() *string
```

- *Type:* *string

---

##### `Loadbalance`<sup>Required</sup> <a name="Loadbalance" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalance"></a>

```go
func Loadbalance() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Nodeselector`<sup>Required</sup> <a name="Nodeselector" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselector"></a>

```go
func Nodeselector() *string
```

- *Type:* *string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicas"></a>

```go
func Replicas() *f64
```

- *Type:* *f64

---

##### `Rootless`<sup>Required</sup> <a name="Rootless" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootless"></a>

```go
func Rootless() interface{}
```

- *Type:* interface{}

---

##### `Schedulername`<sup>Required</sup> <a name="Schedulername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulername"></a>

```go
func Schedulername() *string
```

- *Type:* *string

---

##### `Serviceaccount`<sup>Required</sup> <a name="Serviceaccount" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccount"></a>

```go
func Serviceaccount() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `Tolerations`<sup>Required</sup> <a name="Tolerations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerations"></a>

```go
func Tolerations() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.internalValue"></a>

```go
func InternalValue() BuildxBuilderKubernetes
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

---


### BuildxBuilderKubernetesQemuOutputReference <a name="BuildxBuilderKubernetesQemuOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

buildxbuilder.NewBuildxBuilderKubernetesQemuOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BuildxBuilderKubernetesQemuOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resetInstall">ResetInstall</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetInstall` <a name="ResetInstall" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resetInstall"></a>

```go
func ResetInstall()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.installInput">InstallInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.install">Install</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `InstallInput`<sup>Optional</sup> <a name="InstallInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.installInput"></a>

```go
func InstallInput() interface{}
```

- *Type:* interface{}

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Install`<sup>Required</sup> <a name="Install" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.install"></a>

```go
func Install() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.internalValue"></a>

```go
func InternalValue() BuildxBuilderKubernetesQemu
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

---


### BuildxBuilderKubernetesRequestsOutputReference <a name="BuildxBuilderKubernetesRequestsOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

buildxbuilder.NewBuildxBuilderKubernetesRequestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BuildxBuilderKubernetesRequestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetEphemeralStorage">ResetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetEphemeralStorage` <a name="ResetEphemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetEphemeralStorage"></a>

```go
func ResetEphemeralStorage()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetMemory"></a>

```go
func ResetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpuInput">CpuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorageInput">EphemeralStorageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpu">Cpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorage">EphemeralStorage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpuInput"></a>

```go
func CpuInput() *string
```

- *Type:* *string

---

##### `EphemeralStorageInput`<sup>Optional</sup> <a name="EphemeralStorageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorageInput"></a>

```go
func EphemeralStorageInput() *string
```

- *Type:* *string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpu"></a>

```go
func Cpu() *string
```

- *Type:* *string

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorage"></a>

```go
func EphemeralStorage() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.internalValue"></a>

```go
func InternalValue() BuildxBuilderKubernetesRequests
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

---


### BuildxBuilderRemoteOutputReference <a name="BuildxBuilderRemoteOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/buildxbuilder"

buildxbuilder.NewBuildxBuilderRemoteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BuildxBuilderRemoteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetCacert">ResetCacert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetCert">ResetCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetDefaultLoad">ResetDefaultLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetServername">ResetServername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacert` <a name="ResetCacert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetCacert"></a>

```go
func ResetCacert()
```

##### `ResetCert` <a name="ResetCert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetCert"></a>

```go
func ResetCert()
```

##### `ResetDefaultLoad` <a name="ResetDefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetDefaultLoad"></a>

```go
func ResetDefaultLoad()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetServername` <a name="ResetServername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetServername"></a>

```go
func ResetServername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacertInput">CacertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.certInput">CertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoadInput">DefaultLoadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servernameInput">ServernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacert">Cacert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cert">Cert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoad">DefaultLoad</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servername">Servername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacertInput`<sup>Optional</sup> <a name="CacertInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacertInput"></a>

```go
func CacertInput() *string
```

- *Type:* *string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.certInput"></a>

```go
func CertInput() *string
```

- *Type:* *string

---

##### `DefaultLoadInput`<sup>Optional</sup> <a name="DefaultLoadInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoadInput"></a>

```go
func DefaultLoadInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ServernameInput`<sup>Optional</sup> <a name="ServernameInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servernameInput"></a>

```go
func ServernameInput() *string
```

- *Type:* *string

---

##### `Cacert`<sup>Required</sup> <a name="Cacert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacert"></a>

```go
func Cacert() *string
```

- *Type:* *string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cert"></a>

```go
func Cert() *string
```

- *Type:* *string

---

##### `DefaultLoad`<sup>Required</sup> <a name="DefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoad"></a>

```go
func DefaultLoad() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Servername`<sup>Required</sup> <a name="Servername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servername"></a>

```go
func Servername() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.internalValue"></a>

```go
func InternalValue() BuildxBuilderRemote
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

---



