# `volume` Submodule <a name="`volume` Submodule" id="@cdktf/provider-docker.volume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Volume <a name="Volume" id="@cdktf/provider-docker.volume.Volume"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/volume docker_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.volume.Volume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/volume"

volume.NewVolume(scope Construct, id *string, config VolumeConfig) Volume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.volume.Volume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.volume.Volume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.volume.Volume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.volume.VolumeConfig">VolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.volume.Volume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.volume.Volume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-docker.volume.Volume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.volume.VolumeConfig">VolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.volume.Volume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.volume.Volume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.volume.Volume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.volume.Volume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.volume.Volume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-docker.volume.Volume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-docker.volume.Volume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-docker.volume.Volume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-docker.volume.Volume.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.resetDriver">ResetDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.resetDriverOpts">ResetDriverOpts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.volume.Volume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-docker.volume.Volume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.volume.Volume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.volume.Volume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-docker.volume.Volume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.volume.Volume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-docker.volume.Volume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-docker.volume.Volume.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-docker.volume.Volume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-docker.volume.Volume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-docker.volume.Volume.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.volume.Volume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.volume.Volume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.Volume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.volume.Volume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.Volume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.volume.Volume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.Volume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.volume.Volume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.Volume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.volume.Volume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.Volume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.volume.Volume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.Volume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.volume.Volume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.Volume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.volume.Volume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.Volume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.volume.Volume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.Volume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-docker.volume.Volume.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-docker.volume.Volume.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.volume.Volume.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.volume.Volume.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.volume.Volume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.Volume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-docker.volume.Volume.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.volume.Volume.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-docker.volume.Volume.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.volume.Volume.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-docker.volume.Volume.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-docker.volume.Volume.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.volume.Volume.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-docker.volume.Volume.putLabels"></a>

```go
func PutLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.volume.Volume.putLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDriver` <a name="ResetDriver" id="@cdktf/provider-docker.volume.Volume.resetDriver"></a>

```go
func ResetDriver()
```

##### `ResetDriverOpts` <a name="ResetDriverOpts" id="@cdktf/provider-docker.volume.Volume.resetDriverOpts"></a>

```go
func ResetDriverOpts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-docker.volume.Volume.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-docker.volume.Volume.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-docker.volume.Volume.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.volume.Volume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.volume.Volume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-docker.volume.Volume.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/volume"

volume.Volume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.volume.Volume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-docker.volume.Volume.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/volume"

volume.Volume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.volume.Volume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-docker.volume.Volume.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/volume"

volume.Volume_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.volume.Volume.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-docker.volume.Volume.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/volume"

volume.Volume_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Volume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.volume.Volume.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.volume.Volume.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Volume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.volume.Volume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Volume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.volume.Volume.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Volume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsList">VolumeLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.mountpoint">Mountpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.driverInput">DriverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.driverOptsInput">DriverOptsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.labelsInput">LabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.driver">Driver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.driverOpts">DriverOpts</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-docker.volume.Volume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-docker.volume.Volume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.volume.Volume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-docker.volume.Volume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-docker.volume.Volume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-docker.volume.Volume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-docker.volume.Volume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.volume.Volume.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.volume.Volume.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.volume.Volume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.volume.Volume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.volume.Volume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.volume.Volume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.volume.Volume.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-docker.volume.Volume.property.labels"></a>

```go
func Labels() VolumeLabelsList
```

- *Type:* <a href="#@cdktf/provider-docker.volume.VolumeLabelsList">VolumeLabelsList</a>

---

##### `Mountpoint`<sup>Required</sup> <a name="Mountpoint" id="@cdktf/provider-docker.volume.Volume.property.mountpoint"></a>

```go
func Mountpoint() *string
```

- *Type:* *string

---

##### `DriverInput`<sup>Optional</sup> <a name="DriverInput" id="@cdktf/provider-docker.volume.Volume.property.driverInput"></a>

```go
func DriverInput() *string
```

- *Type:* *string

---

##### `DriverOptsInput`<sup>Optional</sup> <a name="DriverOptsInput" id="@cdktf/provider-docker.volume.Volume.property.driverOptsInput"></a>

```go
func DriverOptsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-docker.volume.Volume.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-docker.volume.Volume.property.labelsInput"></a>

```go
func LabelsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.volume.Volume.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-docker.volume.Volume.property.driver"></a>

```go
func Driver() *string
```

- *Type:* *string

---

##### `DriverOpts`<sup>Required</sup> <a name="DriverOpts" id="@cdktf/provider-docker.volume.Volume.property.driverOpts"></a>

```go
func DriverOpts() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.volume.Volume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.volume.Volume.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.volume.Volume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-docker.volume.Volume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VolumeConfig <a name="VolumeConfig" id="@cdktf/provider-docker.volume.VolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.volume.VolumeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/volume"

&volume.VolumeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Driver: *string,
	DriverOpts: *map[string]*string,
	Id: *string,
	Labels: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.volume.VolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeConfig.property.driver">Driver</a></code> | <code>*string</code> | Driver type for the volume. Defaults to `local`. |
| <code><a href="#@cdktf/provider-docker.volume.VolumeConfig.property.driverOpts">DriverOpts</a></code> | <code>*map[string]*string</code> | Options specific to the driver. |
| <code><a href="#@cdktf/provider-docker.volume.VolumeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/volume#id Volume#id}. |
| <code><a href="#@cdktf/provider-docker.volume.VolumeConfig.property.labels">Labels</a></code> | <code>interface{}</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.volume.VolumeConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Docker volume (will be generated if not provided). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.volume.VolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.volume.VolumeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.volume.VolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.volume.VolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.volume.VolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.volume.VolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.volume.VolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Driver`<sup>Optional</sup> <a name="Driver" id="@cdktf/provider-docker.volume.VolumeConfig.property.driver"></a>

```go
Driver *string
```

- *Type:* *string

Driver type for the volume. Defaults to `local`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/volume#driver Volume#driver}

---

##### `DriverOpts`<sup>Optional</sup> <a name="DriverOpts" id="@cdktf/provider-docker.volume.VolumeConfig.property.driverOpts"></a>

```go
DriverOpts *map[string]*string
```

- *Type:* *map[string]*string

Options specific to the driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/volume#driver_opts Volume#driver_opts}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-docker.volume.VolumeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/volume#id Volume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-docker.volume.VolumeConfig.property.labels"></a>

```go
Labels interface{}
```

- *Type:* interface{}

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/volume#labels Volume#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-docker.volume.VolumeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Docker volume (will be generated if not provided).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/volume#name Volume#name}

---

### VolumeLabels <a name="VolumeLabels" id="@cdktf/provider-docker.volume.VolumeLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.volume.VolumeLabels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/volume"

&volume.VolumeLabels {
	Label: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabels.property.label">Label</a></code> | <code>*string</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabels.property.value">Value</a></code> | <code>*string</code> | Value of the label. |

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-docker.volume.VolumeLabels.property.label"></a>

```go
Label *string
```

- *Type:* *string

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/volume#label Volume#label}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.volume.VolumeLabels.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/volume#value Volume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### VolumeLabelsList <a name="VolumeLabelsList" id="@cdktf/provider-docker.volume.VolumeLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.volume.VolumeLabelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/volume"

volume.NewVolumeLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VolumeLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.volume.VolumeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.volume.VolumeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-docker.volume.VolumeLabelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.volume.VolumeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.volume.VolumeLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.volume.VolumeLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.volume.VolumeLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.volume.VolumeLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.volume.VolumeLabelsList.get"></a>

```go
func Get(index *f64) VolumeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.volume.VolumeLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.volume.VolumeLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.volume.VolumeLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.volume.VolumeLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VolumeLabelsOutputReference <a name="VolumeLabelsOutputReference" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/volume"

volume.NewVolumeLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VolumeLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.volume.VolumeLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.volume.VolumeLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



