# `image` Submodule <a name="`image` Submodule" id="@cdktf/provider-docker.image"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Image <a name="Image" id="@cdktf/provider-docker.image.Image"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image docker_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.Image.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

image.NewImage(scope Construct, id *string, config ImageConfig) Image
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageConfig">ImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.image.Image.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.Image.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-docker.image.Image.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.image.ImageConfig">ImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.image.Image.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.image.Image.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.image.Image.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.image.Image.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-docker.image.Image.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-docker.image.Image.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-docker.image.Image.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-docker.image.Image.putBuildAttribute">PutBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetBuildAttribute">ResetBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetForceRemove">ResetForceRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetKeepLocally">ResetKeepLocally</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetPullTriggers">ResetPullTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetTriggers">ResetTriggers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.image.Image.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-docker.image.Image.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.image.Image.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.image.Image.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-docker.image.Image.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.image.Image.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-docker.image.Image.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-docker.image.Image.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-docker.image.Image.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-docker.image.Image.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-docker.image.Image.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.image.Image.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.image.Image.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.image.Image.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.image.Image.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.image.Image.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.image.Image.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.image.Image.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.image.Image.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.image.Image.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.image.Image.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-docker.image.Image.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-docker.image.Image.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.Image.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.image.Image.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.image.Image.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-docker.image.Image.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.Image.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-docker.image.Image.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.image.Image.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-docker.image.Image.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-docker.image.Image.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.Image.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBuildAttribute` <a name="PutBuildAttribute" id="@cdktf/provider-docker.image.Image.putBuildAttribute"></a>

```go
func PutBuildAttribute(value ImageBuild)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-docker.image.Image.putTimeouts"></a>

```go
func PutTimeouts(value ImageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.image.Image.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a>

---

##### `ResetBuildAttribute` <a name="ResetBuildAttribute" id="@cdktf/provider-docker.image.Image.resetBuildAttribute"></a>

```go
func ResetBuildAttribute()
```

##### `ResetForceRemove` <a name="ResetForceRemove" id="@cdktf/provider-docker.image.Image.resetForceRemove"></a>

```go
func ResetForceRemove()
```

##### `ResetKeepLocally` <a name="ResetKeepLocally" id="@cdktf/provider-docker.image.Image.resetKeepLocally"></a>

```go
func ResetKeepLocally()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktf/provider-docker.image.Image.resetPlatform"></a>

```go
func ResetPlatform()
```

##### `ResetPullTriggers` <a name="ResetPullTriggers" id="@cdktf/provider-docker.image.Image.resetPullTriggers"></a>

```go
func ResetPullTriggers()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-docker.image.Image.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktf/provider-docker.image.Image.resetTriggers"></a>

```go
func ResetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.image.Image.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-docker.image.Image.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

image.Image_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-docker.image.Image.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

image.Image_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.image.Image.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-docker.image.Image.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

image.Image_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.image.Image.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-docker.image.Image.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

image.Image_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.image.Image.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.image.Image.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Image to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.image.Image.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Image that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.image.Image.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Image to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.image.Image.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.buildAttribute">BuildAttribute</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference">ImageBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.repoDigest">RepoDigest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference">ImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.buildAttributeInput">BuildAttributeInput</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.forceRemoveInput">ForceRemoveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.keepLocallyInput">KeepLocallyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.platformInput">PlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.pullTriggersInput">PullTriggersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.triggersInput">TriggersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.forceRemove">ForceRemove</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.keepLocally">KeepLocally</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.pullTriggers">PullTriggers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.triggers">Triggers</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-docker.image.Image.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-docker.image.Image.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.image.Image.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-docker.image.Image.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-docker.image.Image.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-docker.image.Image.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-docker.image.Image.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.image.Image.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.image.Image.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.image.Image.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.image.Image.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.image.Image.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.image.Image.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.image.Image.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-docker.image.Image.property.buildAttribute"></a>

```go
func BuildAttribute() ImageBuildOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuildOutputReference">ImageBuildOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.image.Image.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-docker.image.Image.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `RepoDigest`<sup>Required</sup> <a name="RepoDigest" id="@cdktf/provider-docker.image.Image.property.repoDigest"></a>

```go
func RepoDigest() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-docker.image.Image.property.timeouts"></a>

```go
func Timeouts() ImageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference">ImageTimeoutsOutputReference</a>

---

##### `BuildAttributeInput`<sup>Optional</sup> <a name="BuildAttributeInput" id="@cdktf/provider-docker.image.Image.property.buildAttributeInput"></a>

```go
func BuildAttributeInput() ImageBuild
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a>

---

##### `ForceRemoveInput`<sup>Optional</sup> <a name="ForceRemoveInput" id="@cdktf/provider-docker.image.Image.property.forceRemoveInput"></a>

```go
func ForceRemoveInput() interface{}
```

- *Type:* interface{}

---

##### `KeepLocallyInput`<sup>Optional</sup> <a name="KeepLocallyInput" id="@cdktf/provider-docker.image.Image.property.keepLocallyInput"></a>

```go
func KeepLocallyInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.image.Image.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-docker.image.Image.property.platformInput"></a>

```go
func PlatformInput() *string
```

- *Type:* *string

---

##### `PullTriggersInput`<sup>Optional</sup> <a name="PullTriggersInput" id="@cdktf/provider-docker.image.Image.property.pullTriggersInput"></a>

```go
func PullTriggersInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-docker.image.Image.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-docker.image.Image.property.triggersInput"></a>

```go
func TriggersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ForceRemove`<sup>Required</sup> <a name="ForceRemove" id="@cdktf/provider-docker.image.Image.property.forceRemove"></a>

```go
func ForceRemove() interface{}
```

- *Type:* interface{}

---

##### `KeepLocally`<sup>Required</sup> <a name="KeepLocally" id="@cdktf/provider-docker.image.Image.property.keepLocally"></a>

```go
func KeepLocally() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.image.Image.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-docker.image.Image.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `PullTriggers`<sup>Required</sup> <a name="PullTriggers" id="@cdktf/provider-docker.image.Image.property.pullTriggers"></a>

```go
func PullTriggers() *[]*string
```

- *Type:* *[]*string

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-docker.image.Image.property.triggers"></a>

```go
func Triggers() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-docker.image.Image.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ImageBuild <a name="ImageBuild" id="@cdktf/provider-docker.image.ImageBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageBuild.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

&image.ImageBuild {
	Context: *string,
	AuthConfig: interface{},
	BuildArgs: *map[string]*string,
	Builder: *string,
	BuildId: *string,
	BuildLogFile: *string,
	CacheFrom: *[]*string,
	CgroupParent: *string,
	CpuPeriod: *f64,
	CpuQuota: *f64,
	CpuSetCpus: *string,
	CpuSetMems: *string,
	CpuShares: *f64,
	Dockerfile: *string,
	ExtraHosts: *[]*string,
	ForceRemove: interface{},
	Isolation: *string,
	Label: *map[string]*string,
	Labels: *map[string]*string,
	Memory: *f64,
	MemorySwap: *f64,
	NetworkMode: *string,
	NoCache: interface{},
	Platform: *string,
	PullParent: interface{},
	RemoteContext: *string,
	Remove: interface{},
	Secrets: interface{},
	SecurityOpt: *[]*string,
	SessionId: *string,
	ShmSize: *f64,
	Squash: interface{},
	SuppressOutput: interface{},
	Tag: *[]*string,
	Target: *string,
	Ulimit: interface{},
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.context">Context</a></code> | <code>*string</code> | Value to specify the build context. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.authConfig">AuthConfig</a></code> | <code>interface{}</code> | auth_config block. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.buildArgs">BuildArgs</a></code> | <code>*map[string]*string</code> | Pairs for build-time variables in the form of `ENDPOINT : "https://example.com"`. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.builder">Builder</a></code> | <code>*string</code> | Set the name of the buildx builder to use. If not set, the legacy builder is used. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.buildId">BuildId</a></code> | <code>*string</code> | BuildID is an optional identifier that can be passed together with the build request. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.buildLogFile">BuildLogFile</a></code> | <code>*string</code> | Path to a file where the buildx log are written to. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cacheFrom">CacheFrom</a></code> | <code>*[]*string</code> | Images to consider as cache sources. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cgroupParent">CgroupParent</a></code> | <code>*string</code> | Optional parent cgroup for the container. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuPeriod">CpuPeriod</a></code> | <code>*f64</code> | The length of a CPU period in microseconds. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuQuota">CpuQuota</a></code> | <code>*f64</code> | Microseconds of CPU time that the container can get in a CPU period. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuSetCpus">CpuSetCpus</a></code> | <code>*string</code> | CPUs in which to allow execution (e.g., `0-3`, `0`, `1`). |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuSetMems">CpuSetMems</a></code> | <code>*string</code> | MEMs in which to allow execution (`0-3`, `0`, `1`). |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuShares">CpuShares</a></code> | <code>*f64</code> | CPU shares (relative weight). |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.dockerfile">Dockerfile</a></code> | <code>*string</code> | Name of the Dockerfile. Defaults to `Dockerfile`. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.extraHosts">ExtraHosts</a></code> | <code>*[]*string</code> | A list of hostnames/IP mappings to add to the container’s /etc/hosts file. Specified in the form ["hostname:IP"]. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.forceRemove">ForceRemove</a></code> | <code>interface{}</code> | Always remove intermediate containers. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.isolation">Isolation</a></code> | <code>*string</code> | Isolation represents the isolation technology of a container. The supported values are. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.label">Label</a></code> | <code>*map[string]*string</code> | Set metadata for an image. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-defined key/value metadata. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.memory">Memory</a></code> | <code>*f64</code> | Set memory limit for build. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.memorySwap">MemorySwap</a></code> | <code>*f64</code> | Total memory (memory + swap), -1 to enable unlimited swap. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.networkMode">NetworkMode</a></code> | <code>*string</code> | Set the networking mode for the RUN instructions during build. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.noCache">NoCache</a></code> | <code>interface{}</code> | Do not use the cache when building the image. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.platform">Platform</a></code> | <code>*string</code> | Set the target platform for the build. Defaults to `GOOS/GOARCH`. For more information see the [docker documentation](https://github.com/docker/buildx/blob/master/docs/reference/buildx.md#-set-the-target-platforms-for-the-build---platform). |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.pullParent">PullParent</a></code> | <code>interface{}</code> | Attempt to pull the image even if an older image exists locally. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.remoteContext">RemoteContext</a></code> | <code>*string</code> | A Git repository URI or HTTP/HTTPS context URI. Will be ignored if `builder` is set. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.remove">Remove</a></code> | <code>interface{}</code> | Remove intermediate containers after a successful build. Defaults to `true`. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.secrets">Secrets</a></code> | <code>interface{}</code> | secrets block. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.securityOpt">SecurityOpt</a></code> | <code>*[]*string</code> | The security options. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.sessionId">SessionId</a></code> | <code>*string</code> | Set an ID for the build session. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.shmSize">ShmSize</a></code> | <code>*f64</code> | Size of /dev/shm in bytes. The size must be greater than 0. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.squash">Squash</a></code> | <code>interface{}</code> | If true the new layers are squashed into a new image with a single new layer. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.suppressOutput">SuppressOutput</a></code> | <code>interface{}</code> | Suppress the build output and print image ID on success. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.tag">Tag</a></code> | <code>*[]*string</code> | Name and optionally a tag in the 'name:tag' format. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.target">Target</a></code> | <code>*string</code> | Set the target build stage to build. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.ulimit">Ulimit</a></code> | <code>interface{}</code> | ulimit block. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.version">Version</a></code> | <code>*string</code> | Version of the underlying builder to use. |

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.image.ImageBuild.property.context"></a>

```go
Context *string
```

- *Type:* *string

Value to specify the build context.

Currently, only a `PATH` context is supported. You can use the helper function '${path.cwd}/context-dir'. This always refers to the local working directory, even when building images on remote hosts. Please see https://docs.docker.com/build/building/context/ for more information about build contexts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#context Image#context}

---

##### `AuthConfig`<sup>Optional</sup> <a name="AuthConfig" id="@cdktf/provider-docker.image.ImageBuild.property.authConfig"></a>

```go
AuthConfig interface{}
```

- *Type:* interface{}

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#auth_config Image#auth_config}

---

##### `BuildArgs`<sup>Optional</sup> <a name="BuildArgs" id="@cdktf/provider-docker.image.ImageBuild.property.buildArgs"></a>

```go
BuildArgs *map[string]*string
```

- *Type:* *map[string]*string

Pairs for build-time variables in the form of `ENDPOINT : "https://example.com"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#build_args Image#build_args}

---

##### `Builder`<sup>Optional</sup> <a name="Builder" id="@cdktf/provider-docker.image.ImageBuild.property.builder"></a>

```go
Builder *string
```

- *Type:* *string

Set the name of the buildx builder to use. If not set, the legacy builder is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#builder Image#builder}

---

##### `BuildId`<sup>Optional</sup> <a name="BuildId" id="@cdktf/provider-docker.image.ImageBuild.property.buildId"></a>

```go
BuildId *string
```

- *Type:* *string

BuildID is an optional identifier that can be passed together with the build request.

The same identifier can be used to gracefully cancel the build with the cancel request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#build_id Image#build_id}

---

##### `BuildLogFile`<sup>Optional</sup> <a name="BuildLogFile" id="@cdktf/provider-docker.image.ImageBuild.property.buildLogFile"></a>

```go
BuildLogFile *string
```

- *Type:* *string

Path to a file where the buildx log are written to.

Only available when `builder` is set. If not set, no logs are available. The path is taken as is, so make sure to use a path that is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#build_log_file Image#build_log_file}

---

##### `CacheFrom`<sup>Optional</sup> <a name="CacheFrom" id="@cdktf/provider-docker.image.ImageBuild.property.cacheFrom"></a>

```go
CacheFrom *[]*string
```

- *Type:* *[]*string

Images to consider as cache sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#cache_from Image#cache_from}

---

##### `CgroupParent`<sup>Optional</sup> <a name="CgroupParent" id="@cdktf/provider-docker.image.ImageBuild.property.cgroupParent"></a>

```go
CgroupParent *string
```

- *Type:* *string

Optional parent cgroup for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#cgroup_parent Image#cgroup_parent}

---

##### `CpuPeriod`<sup>Optional</sup> <a name="CpuPeriod" id="@cdktf/provider-docker.image.ImageBuild.property.cpuPeriod"></a>

```go
CpuPeriod *f64
```

- *Type:* *f64

The length of a CPU period in microseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#cpu_period Image#cpu_period}

---

##### `CpuQuota`<sup>Optional</sup> <a name="CpuQuota" id="@cdktf/provider-docker.image.ImageBuild.property.cpuQuota"></a>

```go
CpuQuota *f64
```

- *Type:* *f64

Microseconds of CPU time that the container can get in a CPU period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#cpu_quota Image#cpu_quota}

---

##### `CpuSetCpus`<sup>Optional</sup> <a name="CpuSetCpus" id="@cdktf/provider-docker.image.ImageBuild.property.cpuSetCpus"></a>

```go
CpuSetCpus *string
```

- *Type:* *string

CPUs in which to allow execution (e.g., `0-3`, `0`, `1`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#cpu_set_cpus Image#cpu_set_cpus}

---

##### `CpuSetMems`<sup>Optional</sup> <a name="CpuSetMems" id="@cdktf/provider-docker.image.ImageBuild.property.cpuSetMems"></a>

```go
CpuSetMems *string
```

- *Type:* *string

MEMs in which to allow execution (`0-3`, `0`, `1`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#cpu_set_mems Image#cpu_set_mems}

---

##### `CpuShares`<sup>Optional</sup> <a name="CpuShares" id="@cdktf/provider-docker.image.ImageBuild.property.cpuShares"></a>

```go
CpuShares *f64
```

- *Type:* *f64

CPU shares (relative weight).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#cpu_shares Image#cpu_shares}

---

##### `Dockerfile`<sup>Optional</sup> <a name="Dockerfile" id="@cdktf/provider-docker.image.ImageBuild.property.dockerfile"></a>

```go
Dockerfile *string
```

- *Type:* *string

Name of the Dockerfile. Defaults to `Dockerfile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#dockerfile Image#dockerfile}

---

##### `ExtraHosts`<sup>Optional</sup> <a name="ExtraHosts" id="@cdktf/provider-docker.image.ImageBuild.property.extraHosts"></a>

```go
ExtraHosts *[]*string
```

- *Type:* *[]*string

A list of hostnames/IP mappings to add to the container’s /etc/hosts file. Specified in the form ["hostname:IP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#extra_hosts Image#extra_hosts}

---

##### `ForceRemove`<sup>Optional</sup> <a name="ForceRemove" id="@cdktf/provider-docker.image.ImageBuild.property.forceRemove"></a>

```go
ForceRemove interface{}
```

- *Type:* interface{}

Always remove intermediate containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#force_remove Image#force_remove}

---

##### `Isolation`<sup>Optional</sup> <a name="Isolation" id="@cdktf/provider-docker.image.ImageBuild.property.isolation"></a>

```go
Isolation *string
```

- *Type:* *string

Isolation represents the isolation technology of a container. The supported values are.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#isolation Image#isolation}

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-docker.image.ImageBuild.property.label"></a>

```go
Label *map[string]*string
```

- *Type:* *map[string]*string

Set metadata for an image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#label Image#label}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-docker.image.ImageBuild.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-defined key/value metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#labels Image#labels}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-docker.image.ImageBuild.property.memory"></a>

```go
Memory *f64
```

- *Type:* *f64

Set memory limit for build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#memory Image#memory}

---

##### `MemorySwap`<sup>Optional</sup> <a name="MemorySwap" id="@cdktf/provider-docker.image.ImageBuild.property.memorySwap"></a>

```go
MemorySwap *f64
```

- *Type:* *f64

Total memory (memory + swap), -1 to enable unlimited swap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#memory_swap Image#memory_swap}

---

##### `NetworkMode`<sup>Optional</sup> <a name="NetworkMode" id="@cdktf/provider-docker.image.ImageBuild.property.networkMode"></a>

```go
NetworkMode *string
```

- *Type:* *string

Set the networking mode for the RUN instructions during build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#network_mode Image#network_mode}

---

##### `NoCache`<sup>Optional</sup> <a name="NoCache" id="@cdktf/provider-docker.image.ImageBuild.property.noCache"></a>

```go
NoCache interface{}
```

- *Type:* interface{}

Do not use the cache when building the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#no_cache Image#no_cache}

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktf/provider-docker.image.ImageBuild.property.platform"></a>

```go
Platform *string
```

- *Type:* *string

Set the target platform for the build. Defaults to `GOOS/GOARCH`. For more information see the [docker documentation](https://github.com/docker/buildx/blob/master/docs/reference/buildx.md#-set-the-target-platforms-for-the-build---platform).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#platform Image#platform}

---

##### `PullParent`<sup>Optional</sup> <a name="PullParent" id="@cdktf/provider-docker.image.ImageBuild.property.pullParent"></a>

```go
PullParent interface{}
```

- *Type:* interface{}

Attempt to pull the image even if an older image exists locally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#pull_parent Image#pull_parent}

---

##### `RemoteContext`<sup>Optional</sup> <a name="RemoteContext" id="@cdktf/provider-docker.image.ImageBuild.property.remoteContext"></a>

```go
RemoteContext *string
```

- *Type:* *string

A Git repository URI or HTTP/HTTPS context URI. Will be ignored if `builder` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#remote_context Image#remote_context}

---

##### `Remove`<sup>Optional</sup> <a name="Remove" id="@cdktf/provider-docker.image.ImageBuild.property.remove"></a>

```go
Remove interface{}
```

- *Type:* interface{}

Remove intermediate containers after a successful build. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#remove Image#remove}

---

##### `Secrets`<sup>Optional</sup> <a name="Secrets" id="@cdktf/provider-docker.image.ImageBuild.property.secrets"></a>

```go
Secrets interface{}
```

- *Type:* interface{}

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#secrets Image#secrets}

---

##### `SecurityOpt`<sup>Optional</sup> <a name="SecurityOpt" id="@cdktf/provider-docker.image.ImageBuild.property.securityOpt"></a>

```go
SecurityOpt *[]*string
```

- *Type:* *[]*string

The security options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#security_opt Image#security_opt}

---

##### `SessionId`<sup>Optional</sup> <a name="SessionId" id="@cdktf/provider-docker.image.ImageBuild.property.sessionId"></a>

```go
SessionId *string
```

- *Type:* *string

Set an ID for the build session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#session_id Image#session_id}

---

##### `ShmSize`<sup>Optional</sup> <a name="ShmSize" id="@cdktf/provider-docker.image.ImageBuild.property.shmSize"></a>

```go
ShmSize *f64
```

- *Type:* *f64

Size of /dev/shm in bytes. The size must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#shm_size Image#shm_size}

---

##### `Squash`<sup>Optional</sup> <a name="Squash" id="@cdktf/provider-docker.image.ImageBuild.property.squash"></a>

```go
Squash interface{}
```

- *Type:* interface{}

If true the new layers are squashed into a new image with a single new layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#squash Image#squash}

---

##### `SuppressOutput`<sup>Optional</sup> <a name="SuppressOutput" id="@cdktf/provider-docker.image.ImageBuild.property.suppressOutput"></a>

```go
SuppressOutput interface{}
```

- *Type:* interface{}

Suppress the build output and print image ID on success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#suppress_output Image#suppress_output}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-docker.image.ImageBuild.property.tag"></a>

```go
Tag *[]*string
```

- *Type:* *[]*string

Name and optionally a tag in the 'name:tag' format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#tag Image#tag}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-docker.image.ImageBuild.property.target"></a>

```go
Target *string
```

- *Type:* *string

Set the target build stage to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#target Image#target}

---

##### `Ulimit`<sup>Optional</sup> <a name="Ulimit" id="@cdktf/provider-docker.image.ImageBuild.property.ulimit"></a>

```go
Ulimit interface{}
```

- *Type:* interface{}

ulimit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#ulimit Image#ulimit}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-docker.image.ImageBuild.property.version"></a>

```go
Version *string
```

- *Type:* *string

Version of the underlying builder to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#version Image#version}

---

### ImageBuildAuthConfig <a name="ImageBuildAuthConfig" id="@cdktf/provider-docker.image.ImageBuildAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

&image.ImageBuildAuthConfig {
	HostName: *string,
	Auth: *string,
	Email: *string,
	IdentityToken: *string,
	Password: *string,
	RegistryToken: *string,
	ServerAddress: *string,
	UserName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.hostName">HostName</a></code> | <code>*string</code> | hostname of the registry. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.auth">Auth</a></code> | <code>*string</code> | the auth token. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.email">Email</a></code> | <code>*string</code> | the user emal. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.identityToken">IdentityToken</a></code> | <code>*string</code> | the identity token. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.password">Password</a></code> | <code>*string</code> | the registry password. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.registryToken">RegistryToken</a></code> | <code>*string</code> | the registry token. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.serverAddress">ServerAddress</a></code> | <code>*string</code> | the server address. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.userName">UserName</a></code> | <code>*string</code> | the registry user name. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

hostname of the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#host_name Image#host_name}

---

##### `Auth`<sup>Optional</sup> <a name="Auth" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.auth"></a>

```go
Auth *string
```

- *Type:* *string

the auth token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#auth Image#auth}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

the user emal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#email Image#email}

---

##### `IdentityToken`<sup>Optional</sup> <a name="IdentityToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.identityToken"></a>

```go
IdentityToken *string
```

- *Type:* *string

the identity token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#identity_token Image#identity_token}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

the registry password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#password Image#password}

---

##### `RegistryToken`<sup>Optional</sup> <a name="RegistryToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.registryToken"></a>

```go
RegistryToken *string
```

- *Type:* *string

the registry token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#registry_token Image#registry_token}

---

##### `ServerAddress`<sup>Optional</sup> <a name="ServerAddress" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.serverAddress"></a>

```go
ServerAddress *string
```

- *Type:* *string

the server address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#server_address Image#server_address}

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

the registry user name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#user_name Image#user_name}

---

### ImageBuildSecrets <a name="ImageBuildSecrets" id="@cdktf/provider-docker.image.ImageBuildSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageBuildSecrets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

&image.ImageBuildSecrets {
	Id: *string,
	Env: *string,
	Src: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecrets.property.id">Id</a></code> | <code>*string</code> | ID of the secret. By default, secrets are mounted to /run/secrets/<id>. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecrets.property.env">Env</a></code> | <code>*string</code> | Environment variable source of the secret. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecrets.property.src">Src</a></code> | <code>*string</code> | File source of the secret. Takes precedence over `env`. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.image.ImageBuildSecrets.property.id"></a>

```go
Id *string
```

- *Type:* *string

ID of the secret. By default, secrets are mounted to /run/secrets/<id>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#id Image#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-docker.image.ImageBuildSecrets.property.env"></a>

```go
Env *string
```

- *Type:* *string

Environment variable source of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#env Image#env}

---

##### `Src`<sup>Optional</sup> <a name="Src" id="@cdktf/provider-docker.image.ImageBuildSecrets.property.src"></a>

```go
Src *string
```

- *Type:* *string

File source of the secret. Takes precedence over `env`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#src Image#src}

---

### ImageBuildUlimit <a name="ImageBuildUlimit" id="@cdktf/provider-docker.image.ImageBuildUlimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageBuildUlimit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

&image.ImageBuildUlimit {
	Hard: *f64,
	Name: *string,
	Soft: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimit.property.hard">Hard</a></code> | <code>*f64</code> | soft limit. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimit.property.name">Name</a></code> | <code>*string</code> | type of ulimit, e.g. `nofile`. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimit.property.soft">Soft</a></code> | <code>*f64</code> | hard limit. |

---

##### `Hard`<sup>Required</sup> <a name="Hard" id="@cdktf/provider-docker.image.ImageBuildUlimit.property.hard"></a>

```go
Hard *f64
```

- *Type:* *f64

soft limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#hard Image#hard}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.image.ImageBuildUlimit.property.name"></a>

```go
Name *string
```

- *Type:* *string

type of ulimit, e.g. `nofile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#name Image#name}

---

##### `Soft`<sup>Required</sup> <a name="Soft" id="@cdktf/provider-docker.image.ImageBuildUlimit.property.soft"></a>

```go
Soft *f64
```

- *Type:* *f64

hard limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#soft Image#soft}

---

### ImageConfig <a name="ImageConfig" id="@cdktf/provider-docker.image.ImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

&image.ImageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	BuildAttribute: github.com/cdktf/cdktf-provider-docker-go/docker/v12.image.ImageBuild,
	ForceRemove: interface{},
	KeepLocally: interface{},
	Platform: *string,
	PullTriggers: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-docker-go/docker/v12.image.ImageTimeouts,
	Triggers: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Docker image, including any tags or SHA256 repo digests. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.buildAttribute">BuildAttribute</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a></code> | build block. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.forceRemove">ForceRemove</a></code> | <code>interface{}</code> | If true, then the image is removed forcibly when the resource is destroyed. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.keepLocally">KeepLocally</a></code> | <code>interface{}</code> | If true, then the Docker image won't be deleted on destroy operation. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.platform">Platform</a></code> | <code>*string</code> | The platform to use when pulling the image. Defaults to the platform of the current machine. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.pullTriggers">PullTriggers</a></code> | <code>*[]*string</code> | List of values which cause an image pull when changed. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.triggers">Triggers</a></code> | <code>*map[string]*string</code> | A map of arbitrary strings that, when changed, will force the `docker_image` resource to be replaced. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.image.ImageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.image.ImageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.image.ImageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.image.ImageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.image.ImageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.image.ImageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.image.ImageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.image.ImageConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Docker image, including any tags or SHA256 repo digests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#name Image#name}

---

##### `BuildAttribute`<sup>Optional</sup> <a name="BuildAttribute" id="@cdktf/provider-docker.image.ImageConfig.property.buildAttribute"></a>

```go
BuildAttribute ImageBuild
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a>

build block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#build Image#build}

---

##### `ForceRemove`<sup>Optional</sup> <a name="ForceRemove" id="@cdktf/provider-docker.image.ImageConfig.property.forceRemove"></a>

```go
ForceRemove interface{}
```

- *Type:* interface{}

If true, then the image is removed forcibly when the resource is destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#force_remove Image#force_remove}

---

##### `KeepLocally`<sup>Optional</sup> <a name="KeepLocally" id="@cdktf/provider-docker.image.ImageConfig.property.keepLocally"></a>

```go
KeepLocally interface{}
```

- *Type:* interface{}

If true, then the Docker image won't be deleted on destroy operation.

If this is false, it will delete the image from the docker local storage on destroy operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#keep_locally Image#keep_locally}

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktf/provider-docker.image.ImageConfig.property.platform"></a>

```go
Platform *string
```

- *Type:* *string

The platform to use when pulling the image. Defaults to the platform of the current machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#platform Image#platform}

---

##### `PullTriggers`<sup>Optional</sup> <a name="PullTriggers" id="@cdktf/provider-docker.image.ImageConfig.property.pullTriggers"></a>

```go
PullTriggers *[]*string
```

- *Type:* *[]*string

List of values which cause an image pull when changed.

This is used to store the image digest from the registry when using the [docker_registry_image](../data-sources/registry_image.md).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#pull_triggers Image#pull_triggers}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-docker.image.ImageConfig.property.timeouts"></a>

```go
Timeouts ImageTimeouts
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#timeouts Image#timeouts}

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktf/provider-docker.image.ImageConfig.property.triggers"></a>

```go
Triggers *map[string]*string
```

- *Type:* *map[string]*string

A map of arbitrary strings that, when changed, will force the `docker_image` resource to be replaced.

This can be used to rebuild an image when contents of source code folders change

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#triggers Image#triggers}

---

### ImageTimeouts <a name="ImageTimeouts" id="@cdktf/provider-docker.image.ImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

&image.ImageTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#create Image#create}. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#delete Image#delete}. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#update Image#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-docker.image.ImageTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#create Image#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-docker.image.ImageTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#delete Image#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-docker.image.ImageTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/image#update Image#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImageBuildAuthConfigList <a name="ImageBuildAuthConfigList" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

image.NewImageBuildAuthConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ImageBuildAuthConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.get"></a>

```go
func Get(index *f64) ImageBuildAuthConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImageBuildAuthConfigOutputReference <a name="ImageBuildAuthConfigOutputReference" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

image.NewImageBuildAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ImageBuildAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetAuth">ResetAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetIdentityToken">ResetIdentityToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetRegistryToken">ResetRegistryToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetServerAddress">ResetServerAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuth` <a name="ResetAuth" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetAuth"></a>

```go
func ResetAuth()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetIdentityToken` <a name="ResetIdentityToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetIdentityToken"></a>

```go
func ResetIdentityToken()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetRegistryToken` <a name="ResetRegistryToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetRegistryToken"></a>

```go
func ResetRegistryToken()
```

##### `ResetServerAddress` <a name="ResetServerAddress" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetServerAddress"></a>

```go
func ResetServerAddress()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetUserName"></a>

```go
func ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.authInput">AuthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.identityTokenInput">IdentityTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.registryTokenInput">RegistryTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.serverAddressInput">ServerAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.auth">Auth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.identityToken">IdentityToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.registryToken">RegistryToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.serverAddress">ServerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthInput`<sup>Optional</sup> <a name="AuthInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.authInput"></a>

```go
func AuthInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `IdentityTokenInput`<sup>Optional</sup> <a name="IdentityTokenInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.identityTokenInput"></a>

```go
func IdentityTokenInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `RegistryTokenInput`<sup>Optional</sup> <a name="RegistryTokenInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.registryTokenInput"></a>

```go
func RegistryTokenInput() *string
```

- *Type:* *string

---

##### `ServerAddressInput`<sup>Optional</sup> <a name="ServerAddressInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.serverAddressInput"></a>

```go
func ServerAddressInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.auth"></a>

```go
func Auth() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `IdentityToken`<sup>Required</sup> <a name="IdentityToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.identityToken"></a>

```go
func IdentityToken() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `RegistryToken`<sup>Required</sup> <a name="RegistryToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.registryToken"></a>

```go
func RegistryToken() *string
```

- *Type:* *string

---

##### `ServerAddress`<sup>Required</sup> <a name="ServerAddress" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.serverAddress"></a>

```go
func ServerAddress() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImageBuildOutputReference <a name="ImageBuildOutputReference" id="@cdktf/provider-docker.image.ImageBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

image.NewImageBuildOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImageBuildOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.putAuthConfig">PutAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.putSecrets">PutSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.putUlimit">PutUlimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetAuthConfig">ResetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildArgs">ResetBuildArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuilder">ResetBuilder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildId">ResetBuildId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildLogFile">ResetBuildLogFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCacheFrom">ResetCacheFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCgroupParent">ResetCgroupParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuPeriod">ResetCpuPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuQuota">ResetCpuQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuSetCpus">ResetCpuSetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuSetMems">ResetCpuSetMems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuShares">ResetCpuShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetDockerfile">ResetDockerfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetExtraHosts">ResetExtraHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetForceRemove">ResetForceRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetIsolation">ResetIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetMemorySwap">ResetMemorySwap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetNetworkMode">ResetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetNoCache">ResetNoCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetPullParent">ResetPullParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetRemoteContext">ResetRemoteContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetRemove">ResetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetSecrets">ResetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetSecurityOpt">ResetSecurityOpt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetSessionId">ResetSessionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetShmSize">ResetShmSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetSquash">ResetSquash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetSuppressOutput">ResetSuppressOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetUlimit">ResetUlimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.image.ImageBuildOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.image.ImageBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.image.ImageBuildOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthConfig` <a name="PutAuthConfig" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putAuthConfig"></a>

```go
func PutAuthConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putAuthConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSecrets` <a name="PutSecrets" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putSecrets"></a>

```go
func PutSecrets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putSecrets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUlimit` <a name="PutUlimit" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putUlimit"></a>

```go
func PutUlimit(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putUlimit.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuthConfig` <a name="ResetAuthConfig" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetAuthConfig"></a>

```go
func ResetAuthConfig()
```

##### `ResetBuildArgs` <a name="ResetBuildArgs" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildArgs"></a>

```go
func ResetBuildArgs()
```

##### `ResetBuilder` <a name="ResetBuilder" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuilder"></a>

```go
func ResetBuilder()
```

##### `ResetBuildId` <a name="ResetBuildId" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildId"></a>

```go
func ResetBuildId()
```

##### `ResetBuildLogFile` <a name="ResetBuildLogFile" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildLogFile"></a>

```go
func ResetBuildLogFile()
```

##### `ResetCacheFrom` <a name="ResetCacheFrom" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCacheFrom"></a>

```go
func ResetCacheFrom()
```

##### `ResetCgroupParent` <a name="ResetCgroupParent" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCgroupParent"></a>

```go
func ResetCgroupParent()
```

##### `ResetCpuPeriod` <a name="ResetCpuPeriod" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuPeriod"></a>

```go
func ResetCpuPeriod()
```

##### `ResetCpuQuota` <a name="ResetCpuQuota" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuQuota"></a>

```go
func ResetCpuQuota()
```

##### `ResetCpuSetCpus` <a name="ResetCpuSetCpus" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuSetCpus"></a>

```go
func ResetCpuSetCpus()
```

##### `ResetCpuSetMems` <a name="ResetCpuSetMems" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuSetMems"></a>

```go
func ResetCpuSetMems()
```

##### `ResetCpuShares` <a name="ResetCpuShares" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuShares"></a>

```go
func ResetCpuShares()
```

##### `ResetDockerfile` <a name="ResetDockerfile" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetDockerfile"></a>

```go
func ResetDockerfile()
```

##### `ResetExtraHosts` <a name="ResetExtraHosts" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetExtraHosts"></a>

```go
func ResetExtraHosts()
```

##### `ResetForceRemove` <a name="ResetForceRemove" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetForceRemove"></a>

```go
func ResetForceRemove()
```

##### `ResetIsolation` <a name="ResetIsolation" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetIsolation"></a>

```go
func ResetIsolation()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetMemory"></a>

```go
func ResetMemory()
```

##### `ResetMemorySwap` <a name="ResetMemorySwap" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetMemorySwap"></a>

```go
func ResetMemorySwap()
```

##### `ResetNetworkMode` <a name="ResetNetworkMode" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetNetworkMode"></a>

```go
func ResetNetworkMode()
```

##### `ResetNoCache` <a name="ResetNoCache" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetNoCache"></a>

```go
func ResetNoCache()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetPlatform"></a>

```go
func ResetPlatform()
```

##### `ResetPullParent` <a name="ResetPullParent" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetPullParent"></a>

```go
func ResetPullParent()
```

##### `ResetRemoteContext` <a name="ResetRemoteContext" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetRemoteContext"></a>

```go
func ResetRemoteContext()
```

##### `ResetRemove` <a name="ResetRemove" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetRemove"></a>

```go
func ResetRemove()
```

##### `ResetSecrets` <a name="ResetSecrets" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSecrets"></a>

```go
func ResetSecrets()
```

##### `ResetSecurityOpt` <a name="ResetSecurityOpt" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSecurityOpt"></a>

```go
func ResetSecurityOpt()
```

##### `ResetSessionId` <a name="ResetSessionId" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSessionId"></a>

```go
func ResetSessionId()
```

##### `ResetShmSize` <a name="ResetShmSize" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetShmSize"></a>

```go
func ResetShmSize()
```

##### `ResetSquash` <a name="ResetSquash" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSquash"></a>

```go
func ResetSquash()
```

##### `ResetSuppressOutput` <a name="ResetSuppressOutput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSuppressOutput"></a>

```go
func ResetSuppressOutput()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetUlimit` <a name="ResetUlimit" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetUlimit"></a>

```go
func ResetUlimit()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList">ImageBuildAuthConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.secrets">Secrets</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList">ImageBuildSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.ulimit">Ulimit</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList">ImageBuildUlimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.authConfigInput">AuthConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgsInput">BuildArgsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.builderInput">BuilderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildIdInput">BuildIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildLogFileInput">BuildLogFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cacheFromInput">CacheFromInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cgroupParentInput">CgroupParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.contextInput">ContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuPeriodInput">CpuPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuQuotaInput">CpuQuotaInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetCpusInput">CpuSetCpusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetMemsInput">CpuSetMemsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSharesInput">CpuSharesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.dockerfileInput">DockerfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.extraHostsInput">ExtraHostsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.forceRemoveInput">ForceRemoveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.isolationInput">IsolationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.labelInput">LabelInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.memorySwapInput">MemorySwapInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.networkModeInput">NetworkModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.noCacheInput">NoCacheInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.platformInput">PlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.pullParentInput">PullParentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.remoteContextInput">RemoteContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.removeInput">RemoveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.secretsInput">SecretsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.securityOptInput">SecurityOptInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.sessionIdInput">SessionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.shmSizeInput">ShmSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.squashInput">SquashInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.suppressOutputInput">SuppressOutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.tagInput">TagInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.ulimitInput">UlimitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgs">BuildArgs</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.builder">Builder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildId">BuildId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildLogFile">BuildLogFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cacheFrom">CacheFrom</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cgroupParent">CgroupParent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.context">Context</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuPeriod">CpuPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuQuota">CpuQuota</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetCpus">CpuSetCpus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetMems">CpuSetMems</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuShares">CpuShares</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.dockerfile">Dockerfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.extraHosts">ExtraHosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.forceRemove">ForceRemove</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.isolation">Isolation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.label">Label</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.memorySwap">MemorySwap</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.networkMode">NetworkMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.noCache">NoCache</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.pullParent">PullParent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.remoteContext">RemoteContext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.remove">Remove</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.securityOpt">SecurityOpt</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.sessionId">SessionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.shmSize">ShmSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.squash">Squash</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.suppressOutput">SuppressOutput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.tag">Tag</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthConfig`<sup>Required</sup> <a name="AuthConfig" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.authConfig"></a>

```go
func AuthConfig() ImageBuildAuthConfigList
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList">ImageBuildAuthConfigList</a>

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.secrets"></a>

```go
func Secrets() ImageBuildSecretsList
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuildSecretsList">ImageBuildSecretsList</a>

---

##### `Ulimit`<sup>Required</sup> <a name="Ulimit" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.ulimit"></a>

```go
func Ulimit() ImageBuildUlimitList
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuildUlimitList">ImageBuildUlimitList</a>

---

##### `AuthConfigInput`<sup>Optional</sup> <a name="AuthConfigInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.authConfigInput"></a>

```go
func AuthConfigInput() interface{}
```

- *Type:* interface{}

---

##### `BuildArgsInput`<sup>Optional</sup> <a name="BuildArgsInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgsInput"></a>

```go
func BuildArgsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BuilderInput`<sup>Optional</sup> <a name="BuilderInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.builderInput"></a>

```go
func BuilderInput() *string
```

- *Type:* *string

---

##### `BuildIdInput`<sup>Optional</sup> <a name="BuildIdInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildIdInput"></a>

```go
func BuildIdInput() *string
```

- *Type:* *string

---

##### `BuildLogFileInput`<sup>Optional</sup> <a name="BuildLogFileInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildLogFileInput"></a>

```go
func BuildLogFileInput() *string
```

- *Type:* *string

---

##### `CacheFromInput`<sup>Optional</sup> <a name="CacheFromInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cacheFromInput"></a>

```go
func CacheFromInput() *[]*string
```

- *Type:* *[]*string

---

##### `CgroupParentInput`<sup>Optional</sup> <a name="CgroupParentInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cgroupParentInput"></a>

```go
func CgroupParentInput() *string
```

- *Type:* *string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.contextInput"></a>

```go
func ContextInput() *string
```

- *Type:* *string

---

##### `CpuPeriodInput`<sup>Optional</sup> <a name="CpuPeriodInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuPeriodInput"></a>

```go
func CpuPeriodInput() *f64
```

- *Type:* *f64

---

##### `CpuQuotaInput`<sup>Optional</sup> <a name="CpuQuotaInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuQuotaInput"></a>

```go
func CpuQuotaInput() *f64
```

- *Type:* *f64

---

##### `CpuSetCpusInput`<sup>Optional</sup> <a name="CpuSetCpusInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetCpusInput"></a>

```go
func CpuSetCpusInput() *string
```

- *Type:* *string

---

##### `CpuSetMemsInput`<sup>Optional</sup> <a name="CpuSetMemsInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetMemsInput"></a>

```go
func CpuSetMemsInput() *string
```

- *Type:* *string

---

##### `CpuSharesInput`<sup>Optional</sup> <a name="CpuSharesInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSharesInput"></a>

```go
func CpuSharesInput() *f64
```

- *Type:* *f64

---

##### `DockerfileInput`<sup>Optional</sup> <a name="DockerfileInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.dockerfileInput"></a>

```go
func DockerfileInput() *string
```

- *Type:* *string

---

##### `ExtraHostsInput`<sup>Optional</sup> <a name="ExtraHostsInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.extraHostsInput"></a>

```go
func ExtraHostsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ForceRemoveInput`<sup>Optional</sup> <a name="ForceRemoveInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.forceRemoveInput"></a>

```go
func ForceRemoveInput() interface{}
```

- *Type:* interface{}

---

##### `IsolationInput`<sup>Optional</sup> <a name="IsolationInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.isolationInput"></a>

```go
func IsolationInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.labelInput"></a>

```go
func LabelInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *f64
```

- *Type:* *f64

---

##### `MemorySwapInput`<sup>Optional</sup> <a name="MemorySwapInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.memorySwapInput"></a>

```go
func MemorySwapInput() *f64
```

- *Type:* *f64

---

##### `NetworkModeInput`<sup>Optional</sup> <a name="NetworkModeInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.networkModeInput"></a>

```go
func NetworkModeInput() *string
```

- *Type:* *string

---

##### `NoCacheInput`<sup>Optional</sup> <a name="NoCacheInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.noCacheInput"></a>

```go
func NoCacheInput() interface{}
```

- *Type:* interface{}

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.platformInput"></a>

```go
func PlatformInput() *string
```

- *Type:* *string

---

##### `PullParentInput`<sup>Optional</sup> <a name="PullParentInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.pullParentInput"></a>

```go
func PullParentInput() interface{}
```

- *Type:* interface{}

---

##### `RemoteContextInput`<sup>Optional</sup> <a name="RemoteContextInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.remoteContextInput"></a>

```go
func RemoteContextInput() *string
```

- *Type:* *string

---

##### `RemoveInput`<sup>Optional</sup> <a name="RemoveInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.removeInput"></a>

```go
func RemoveInput() interface{}
```

- *Type:* interface{}

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.secretsInput"></a>

```go
func SecretsInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityOptInput`<sup>Optional</sup> <a name="SecurityOptInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.securityOptInput"></a>

```go
func SecurityOptInput() *[]*string
```

- *Type:* *[]*string

---

##### `SessionIdInput`<sup>Optional</sup> <a name="SessionIdInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.sessionIdInput"></a>

```go
func SessionIdInput() *string
```

- *Type:* *string

---

##### `ShmSizeInput`<sup>Optional</sup> <a name="ShmSizeInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.shmSizeInput"></a>

```go
func ShmSizeInput() *f64
```

- *Type:* *f64

---

##### `SquashInput`<sup>Optional</sup> <a name="SquashInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.squashInput"></a>

```go
func SquashInput() interface{}
```

- *Type:* interface{}

---

##### `SuppressOutputInput`<sup>Optional</sup> <a name="SuppressOutputInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.suppressOutputInput"></a>

```go
func SuppressOutputInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.tagInput"></a>

```go
func TagInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `UlimitInput`<sup>Optional</sup> <a name="UlimitInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.ulimitInput"></a>

```go
func UlimitInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `BuildArgs`<sup>Required</sup> <a name="BuildArgs" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgs"></a>

```go
func BuildArgs() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Builder`<sup>Required</sup> <a name="Builder" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.builder"></a>

```go
func Builder() *string
```

- *Type:* *string

---

##### `BuildId`<sup>Required</sup> <a name="BuildId" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildId"></a>

```go
func BuildId() *string
```

- *Type:* *string

---

##### `BuildLogFile`<sup>Required</sup> <a name="BuildLogFile" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildLogFile"></a>

```go
func BuildLogFile() *string
```

- *Type:* *string

---

##### `CacheFrom`<sup>Required</sup> <a name="CacheFrom" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cacheFrom"></a>

```go
func CacheFrom() *[]*string
```

- *Type:* *[]*string

---

##### `CgroupParent`<sup>Required</sup> <a name="CgroupParent" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cgroupParent"></a>

```go
func CgroupParent() *string
```

- *Type:* *string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.context"></a>

```go
func Context() *string
```

- *Type:* *string

---

##### `CpuPeriod`<sup>Required</sup> <a name="CpuPeriod" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuPeriod"></a>

```go
func CpuPeriod() *f64
```

- *Type:* *f64

---

##### `CpuQuota`<sup>Required</sup> <a name="CpuQuota" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuQuota"></a>

```go
func CpuQuota() *f64
```

- *Type:* *f64

---

##### `CpuSetCpus`<sup>Required</sup> <a name="CpuSetCpus" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetCpus"></a>

```go
func CpuSetCpus() *string
```

- *Type:* *string

---

##### `CpuSetMems`<sup>Required</sup> <a name="CpuSetMems" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetMems"></a>

```go
func CpuSetMems() *string
```

- *Type:* *string

---

##### `CpuShares`<sup>Required</sup> <a name="CpuShares" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuShares"></a>

```go
func CpuShares() *f64
```

- *Type:* *f64

---

##### `Dockerfile`<sup>Required</sup> <a name="Dockerfile" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.dockerfile"></a>

```go
func Dockerfile() *string
```

- *Type:* *string

---

##### `ExtraHosts`<sup>Required</sup> <a name="ExtraHosts" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.extraHosts"></a>

```go
func ExtraHosts() *[]*string
```

- *Type:* *[]*string

---

##### `ForceRemove`<sup>Required</sup> <a name="ForceRemove" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.forceRemove"></a>

```go
func ForceRemove() interface{}
```

- *Type:* interface{}

---

##### `Isolation`<sup>Required</sup> <a name="Isolation" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.isolation"></a>

```go
func Isolation() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.label"></a>

```go
func Label() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `MemorySwap`<sup>Required</sup> <a name="MemorySwap" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.memorySwap"></a>

```go
func MemorySwap() *f64
```

- *Type:* *f64

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.networkMode"></a>

```go
func NetworkMode() *string
```

- *Type:* *string

---

##### `NoCache`<sup>Required</sup> <a name="NoCache" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.noCache"></a>

```go
func NoCache() interface{}
```

- *Type:* interface{}

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `PullParent`<sup>Required</sup> <a name="PullParent" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.pullParent"></a>

```go
func PullParent() interface{}
```

- *Type:* interface{}

---

##### `RemoteContext`<sup>Required</sup> <a name="RemoteContext" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.remoteContext"></a>

```go
func RemoteContext() *string
```

- *Type:* *string

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.remove"></a>

```go
func Remove() interface{}
```

- *Type:* interface{}

---

##### `SecurityOpt`<sup>Required</sup> <a name="SecurityOpt" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.securityOpt"></a>

```go
func SecurityOpt() *[]*string
```

- *Type:* *[]*string

---

##### `SessionId`<sup>Required</sup> <a name="SessionId" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.sessionId"></a>

```go
func SessionId() *string
```

- *Type:* *string

---

##### `ShmSize`<sup>Required</sup> <a name="ShmSize" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.shmSize"></a>

```go
func ShmSize() *f64
```

- *Type:* *f64

---

##### `Squash`<sup>Required</sup> <a name="Squash" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.squash"></a>

```go
func Squash() interface{}
```

- *Type:* interface{}

---

##### `SuppressOutput`<sup>Required</sup> <a name="SuppressOutput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.suppressOutput"></a>

```go
func SuppressOutput() interface{}
```

- *Type:* interface{}

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.tag"></a>

```go
func Tag() *[]*string
```

- *Type:* *[]*string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.internalValue"></a>

```go
func InternalValue() ImageBuild
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a>

---


### ImageBuildSecretsList <a name="ImageBuildSecretsList" id="@cdktf/provider-docker.image.ImageBuildSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

image.NewImageBuildSecretsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ImageBuildSecretsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-docker.image.ImageBuildSecretsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.image.ImageBuildSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.image.ImageBuildSecretsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.image.ImageBuildSecretsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildSecretsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.image.ImageBuildSecretsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.image.ImageBuildSecretsList.get"></a>

```go
func Get(index *f64) ImageBuildSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.image.ImageBuildSecretsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.image.ImageBuildSecretsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.image.ImageBuildSecretsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.image.ImageBuildSecretsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImageBuildSecretsOutputReference <a name="ImageBuildSecretsOutputReference" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

image.NewImageBuildSecretsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ImageBuildSecretsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resetSrc">ResetSrc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetSrc` <a name="ResetSrc" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resetSrc"></a>

```go
func ResetSrc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.envInput">EnvInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.srcInput">SrcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.env">Env</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.src">Src</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.envInput"></a>

```go
func EnvInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SrcInput`<sup>Optional</sup> <a name="SrcInput" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.srcInput"></a>

```go
func SrcInput() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.env"></a>

```go
func Env() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Src`<sup>Required</sup> <a name="Src" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.src"></a>

```go
func Src() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImageBuildUlimitList <a name="ImageBuildUlimitList" id="@cdktf/provider-docker.image.ImageBuildUlimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

image.NewImageBuildUlimitList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ImageBuildUlimitList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-docker.image.ImageBuildUlimitList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.image.ImageBuildUlimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.image.ImageBuildUlimitList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.image.ImageBuildUlimitList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildUlimitList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.image.ImageBuildUlimitList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.image.ImageBuildUlimitList.get"></a>

```go
func Get(index *f64) ImageBuildUlimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.image.ImageBuildUlimitList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.image.ImageBuildUlimitList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.image.ImageBuildUlimitList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.image.ImageBuildUlimitList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImageBuildUlimitOutputReference <a name="ImageBuildUlimitOutputReference" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

image.NewImageBuildUlimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ImageBuildUlimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.hardInput">HardInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.softInput">SoftInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.hard">Hard</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.soft">Soft</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HardInput`<sup>Optional</sup> <a name="HardInput" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.hardInput"></a>

```go
func HardInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SoftInput`<sup>Optional</sup> <a name="SoftInput" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.softInput"></a>

```go
func SoftInput() *f64
```

- *Type:* *f64

---

##### `Hard`<sup>Required</sup> <a name="Hard" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.hard"></a>

```go
func Hard() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Soft`<sup>Required</sup> <a name="Soft" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.soft"></a>

```go
func Soft() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImageTimeoutsOutputReference <a name="ImageTimeoutsOutputReference" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/image"

image.NewImageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



