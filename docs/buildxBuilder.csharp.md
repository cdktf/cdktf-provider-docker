# `buildxBuilder` Submodule <a name="`buildxBuilder` Submodule" id="@cdktf/provider-docker.buildxBuilder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BuildxBuilder <a name="BuildxBuilder" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder docker_buildx_builder}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new BuildxBuilder(Construct Scope, string Id, BuildxBuilderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig">BuildxBuilderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDockerContainer` <a name="PutDockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer"></a>

```csharp
private void PutDockerContainer(BuildxBuilderDockerContainer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

---

##### `PutKubernetes` <a name="PutKubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes"></a>

```csharp
private void PutKubernetes(BuildxBuilderKubernetes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

---

##### `PutRemote` <a name="PutRemote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote"></a>

```csharp
private void PutRemote(BuildxBuilderRemote Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

---

##### `ResetAppend` <a name="ResetAppend" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetAppend"></a>

```csharp
private void ResetAppend()
```

##### `ResetBootstrap` <a name="ResetBootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBootstrap"></a>

```csharp
private void ResetBootstrap()
```

##### `ResetBuildkitConfig` <a name="ResetBuildkitConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBuildkitConfig"></a>

```csharp
private void ResetBuildkitConfig()
```

##### `ResetBuildkitFlags` <a name="ResetBuildkitFlags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBuildkitFlags"></a>

```csharp
private void ResetBuildkitFlags()
```

##### `ResetDockerContainer` <a name="ResetDockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDockerContainer"></a>

```csharp
private void ResetDockerContainer()
```

##### `ResetDriver` <a name="ResetDriver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDriver"></a>

```csharp
private void ResetDriver()
```

##### `ResetDriverOptions` <a name="ResetDriverOptions" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDriverOptions"></a>

```csharp
private void ResetDriverOptions()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKubernetes` <a name="ResetKubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetKubernetes"></a>

```csharp
private void ResetKubernetes()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNodeAttribute` <a name="ResetNodeAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetNodeAttribute"></a>

```csharp
private void ResetNodeAttribute()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetPlatform"></a>

```csharp
private void ResetPlatform()
```

##### `ResetRemote` <a name="ResetRemote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetRemote"></a>

```csharp
private void ResetRemote()
```

##### `ResetUse` <a name="ResetUse" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetUse"></a>

```csharp
private void ResetUse()
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

```csharp
using HashiCorp.Cdktf.Providers.Docker;

BuildxBuilder.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

BuildxBuilder.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

BuildxBuilder.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

BuildxBuilder.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BuildxBuilder resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BuildxBuilder to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BuildxBuilder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BuildxBuilder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainer">DockerContainer</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference">BuildxBuilderDockerContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference">BuildxBuilderKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remote">Remote</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference">BuildxBuilderRemoteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.appendInput">AppendInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrapInput">BootstrapInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfigInput">BuildkitConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlagsInput">BuildkitFlagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainerInput">DockerContainerInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverInput">DriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptionsInput">DriverOptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetesInput">KubernetesInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttributeInput">NodeAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platformInput">PlatformInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remoteInput">RemoteInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.useInput">UseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.append">Append</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrap">Bootstrap</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfig">BuildkitConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlags">BuildkitFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driver">Driver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptions">DriverOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttribute">NodeAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platform">Platform</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.use">Use</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DockerContainer`<sup>Required</sup> <a name="DockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainer"></a>

```csharp
public BuildxBuilderDockerContainerOutputReference DockerContainer { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference">BuildxBuilderDockerContainerOutputReference</a>

---

##### `Kubernetes`<sup>Required</sup> <a name="Kubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetes"></a>

```csharp
public BuildxBuilderKubernetesOutputReference Kubernetes { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference">BuildxBuilderKubernetesOutputReference</a>

---

##### `Remote`<sup>Required</sup> <a name="Remote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remote"></a>

```csharp
public BuildxBuilderRemoteOutputReference Remote { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference">BuildxBuilderRemoteOutputReference</a>

---

##### `AppendInput`<sup>Optional</sup> <a name="AppendInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.appendInput"></a>

```csharp
public object AppendInput { get; }
```

- *Type:* object

---

##### `BootstrapInput`<sup>Optional</sup> <a name="BootstrapInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrapInput"></a>

```csharp
public object BootstrapInput { get; }
```

- *Type:* object

---

##### `BuildkitConfigInput`<sup>Optional</sup> <a name="BuildkitConfigInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfigInput"></a>

```csharp
public string BuildkitConfigInput { get; }
```

- *Type:* string

---

##### `BuildkitFlagsInput`<sup>Optional</sup> <a name="BuildkitFlagsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlagsInput"></a>

```csharp
public string BuildkitFlagsInput { get; }
```

- *Type:* string

---

##### `DockerContainerInput`<sup>Optional</sup> <a name="DockerContainerInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainerInput"></a>

```csharp
public BuildxBuilderDockerContainer DockerContainerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

---

##### `DriverInput`<sup>Optional</sup> <a name="DriverInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverInput"></a>

```csharp
public string DriverInput { get; }
```

- *Type:* string

---

##### `DriverOptionsInput`<sup>Optional</sup> <a name="DriverOptionsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverOptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KubernetesInput`<sup>Optional</sup> <a name="KubernetesInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetesInput"></a>

```csharp
public BuildxBuilderKubernetes KubernetesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodeAttributeInput`<sup>Optional</sup> <a name="NodeAttributeInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttributeInput"></a>

```csharp
public string NodeAttributeInput { get; }
```

- *Type:* string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platformInput"></a>

```csharp
public string[] PlatformInput { get; }
```

- *Type:* string[]

---

##### `RemoteInput`<sup>Optional</sup> <a name="RemoteInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remoteInput"></a>

```csharp
public BuildxBuilderRemote RemoteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

---

##### `UseInput`<sup>Optional</sup> <a name="UseInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.useInput"></a>

```csharp
public object UseInput { get; }
```

- *Type:* object

---

##### `Append`<sup>Required</sup> <a name="Append" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.append"></a>

```csharp
public object Append { get; }
```

- *Type:* object

---

##### `Bootstrap`<sup>Required</sup> <a name="Bootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrap"></a>

```csharp
public object Bootstrap { get; }
```

- *Type:* object

---

##### `BuildkitConfig`<sup>Required</sup> <a name="BuildkitConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfig"></a>

```csharp
public string BuildkitConfig { get; }
```

- *Type:* string

---

##### `BuildkitFlags`<sup>Required</sup> <a name="BuildkitFlags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlags"></a>

```csharp
public string BuildkitFlags { get; }
```

- *Type:* string

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driver"></a>

```csharp
public string Driver { get; }
```

- *Type:* string

---

##### `DriverOptions`<sup>Required</sup> <a name="DriverOptions" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverOptions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeAttribute`<sup>Required</sup> <a name="NodeAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttribute"></a>

```csharp
public string NodeAttribute { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platform"></a>

```csharp
public string[] Platform { get; }
```

- *Type:* string[]

---

##### `Use`<sup>Required</sup> <a name="Use" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.use"></a>

```csharp
public object Use { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BuildxBuilderConfig <a name="BuildxBuilderConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new BuildxBuilderConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Append = null,
    object Bootstrap = null,
    string BuildkitConfig = null,
    string BuildkitFlags = null,
    BuildxBuilderDockerContainer DockerContainer = null,
    string Driver = null,
    System.Collections.Generic.IDictionary<string, string> DriverOptions = null,
    string Endpoint = null,
    string Id = null,
    BuildxBuilderKubernetes Kubernetes = null,
    string Name = null,
    string NodeAttribute = null,
    string[] Platform = null,
    BuildxBuilderRemote Remote = null,
    object Use = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.append">Append</a></code> | <code>object</code> | Append a node to builder instead of changing it. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.bootstrap">Bootstrap</a></code> | <code>object</code> | Automatically boot the builder after creation. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitConfig">BuildkitConfig</a></code> | <code>string</code> | BuildKit daemon config file. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitFlags">BuildkitFlags</a></code> | <code>string</code> | BuildKit flags to set for the builder. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dockerContainer">DockerContainer</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | docker_container block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driver">Driver</a></code> | <code>string</code> | The driver to use for the Buildx builder (e.g., docker-container, kubernetes). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driverOptions">DriverOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Additional options for the Buildx driver in the form of `key=value,...`. These options are driver-specific. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.endpoint">Endpoint</a></code> | <code>string</code> | The endpoint or context to use for the Buildx builder, where context is the name of a context from docker context ls and endpoint is the address for Docker socket (eg. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#id BuildxBuilder#id}. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.name">Name</a></code> | <code>string</code> | The name of the Buildx builder. IF not specified, a random name will be generated. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.nodeAttribute">NodeAttribute</a></code> | <code>string</code> | Create/modify node with given name. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.platform">Platform</a></code> | <code>string[]</code> | Fixed platforms for current node. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.remote">Remote</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | remote block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.use">Use</a></code> | <code>object</code> | Set the current builder instance as the default for the current context. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Append`<sup>Optional</sup> <a name="Append" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.append"></a>

```csharp
public object Append { get; set; }
```

- *Type:* object

Append a node to builder instead of changing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#append BuildxBuilder#append}

---

##### `Bootstrap`<sup>Optional</sup> <a name="Bootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.bootstrap"></a>

```csharp
public object Bootstrap { get; set; }
```

- *Type:* object

Automatically boot the builder after creation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#bootstrap BuildxBuilder#bootstrap}

---

##### `BuildkitConfig`<sup>Optional</sup> <a name="BuildkitConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitConfig"></a>

```csharp
public string BuildkitConfig { get; set; }
```

- *Type:* string

BuildKit daemon config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#buildkit_config BuildxBuilder#buildkit_config}

---

##### `BuildkitFlags`<sup>Optional</sup> <a name="BuildkitFlags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitFlags"></a>

```csharp
public string BuildkitFlags { get; set; }
```

- *Type:* string

BuildKit flags to set for the builder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#buildkit_flags BuildxBuilder#buildkit_flags}

---

##### `DockerContainer`<sup>Optional</sup> <a name="DockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dockerContainer"></a>

```csharp
public BuildxBuilderDockerContainer DockerContainer { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

docker_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#docker_container BuildxBuilder#docker_container}

---

##### `Driver`<sup>Optional</sup> <a name="Driver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driver"></a>

```csharp
public string Driver { get; set; }
```

- *Type:* string

The driver to use for the Buildx builder (e.g., docker-container, kubernetes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#driver BuildxBuilder#driver}

---

##### `DriverOptions`<sup>Optional</sup> <a name="DriverOptions" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driverOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverOptions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Additional options for the Buildx driver in the form of `key=value,...`. These options are driver-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#driver_options BuildxBuilder#driver_options}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

The endpoint or context to use for the Buildx builder, where context is the name of a context from docker context ls and endpoint is the address for Docker socket (eg.

DOCKER_HOST value). By default, the current Docker configuration is used for determining the context/endpoint value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#endpoint BuildxBuilder#endpoint}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#id BuildxBuilder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Kubernetes`<sup>Optional</sup> <a name="Kubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.kubernetes"></a>

```csharp
public BuildxBuilderKubernetes Kubernetes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#kubernetes BuildxBuilder#kubernetes}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Buildx builder. IF not specified, a random name will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#name BuildxBuilder#name}

---

##### `NodeAttribute`<sup>Optional</sup> <a name="NodeAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.nodeAttribute"></a>

```csharp
public string NodeAttribute { get; set; }
```

- *Type:* string

Create/modify node with given name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#node BuildxBuilder#node}

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.platform"></a>

```csharp
public string[] Platform { get; set; }
```

- *Type:* string[]

Fixed platforms for current node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#platform BuildxBuilder#platform}

---

##### `Remote`<sup>Optional</sup> <a name="Remote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.remote"></a>

```csharp
public BuildxBuilderRemote Remote { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

remote block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#remote BuildxBuilder#remote}

---

##### `Use`<sup>Optional</sup> <a name="Use" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.use"></a>

```csharp
public object Use { get; set; }
```

- *Type:* object

Set the current builder instance as the default for the current context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#use BuildxBuilder#use}

---

### BuildxBuilderDockerContainer <a name="BuildxBuilderDockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new BuildxBuilderDockerContainer {
    string CgroupParent = null,
    string CpuPeriod = null,
    string CpuQuota = null,
    string CpusetCpus = null,
    string CpusetMems = null,
    string CpuShares = null,
    object DefaultLoad = null,
    System.Collections.Generic.IDictionary<string, string> Env = null,
    string Image = null,
    string Memory = null,
    string MemorySwap = null,
    string Network = null,
    string RestartPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cgroupParent">CgroupParent</a></code> | <code>string</code> | Sets the cgroup parent of the container if Docker is using the "cgroupfs" driver. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuPeriod">CpuPeriod</a></code> | <code>string</code> | Sets the CPU CFS scheduler period for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuQuota">CpuQuota</a></code> | <code>string</code> | Imposes a CPU CFS quota on the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetCpus">CpusetCpus</a></code> | <code>string</code> | Limits the set of CPU cores the container can use. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetMems">CpusetMems</a></code> | <code>string</code> | Limits the set of CPU memory nodes the container can use. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuShares">CpuShares</a></code> | <code>string</code> | Configures CPU shares (relative weight) of the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.defaultLoad">DefaultLoad</a></code> | <code>object</code> | Automatically load images to the Docker Engine image store. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.env">Env</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Sets environment variables in the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.image">Image</a></code> | <code>string</code> | Sets the BuildKit image to use for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memory">Memory</a></code> | <code>string</code> | Sets the amount of memory the container can use. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memorySwap">MemorySwap</a></code> | <code>string</code> | Sets the memory swap limit for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.network">Network</a></code> | <code>string</code> | Sets the network mode for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.restartPolicy">RestartPolicy</a></code> | <code>string</code> | Sets the container's restart policy. |

---

##### `CgroupParent`<sup>Optional</sup> <a name="CgroupParent" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cgroupParent"></a>

```csharp
public string CgroupParent { get; set; }
```

- *Type:* string

Sets the cgroup parent of the container if Docker is using the "cgroupfs" driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cgroup_parent BuildxBuilder#cgroup_parent}

---

##### `CpuPeriod`<sup>Optional</sup> <a name="CpuPeriod" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuPeriod"></a>

```csharp
public string CpuPeriod { get; set; }
```

- *Type:* string

Sets the CPU CFS scheduler period for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cpu_period BuildxBuilder#cpu_period}

---

##### `CpuQuota`<sup>Optional</sup> <a name="CpuQuota" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuQuota"></a>

```csharp
public string CpuQuota { get; set; }
```

- *Type:* string

Imposes a CPU CFS quota on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cpu_quota BuildxBuilder#cpu_quota}

---

##### `CpusetCpus`<sup>Optional</sup> <a name="CpusetCpus" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetCpus"></a>

```csharp
public string CpusetCpus { get; set; }
```

- *Type:* string

Limits the set of CPU cores the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cpuset_cpus BuildxBuilder#cpuset_cpus}

---

##### `CpusetMems`<sup>Optional</sup> <a name="CpusetMems" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetMems"></a>

```csharp
public string CpusetMems { get; set; }
```

- *Type:* string

Limits the set of CPU memory nodes the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cpuset_mems BuildxBuilder#cpuset_mems}

---

##### `CpuShares`<sup>Optional</sup> <a name="CpuShares" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuShares"></a>

```csharp
public string CpuShares { get; set; }
```

- *Type:* string

Configures CPU shares (relative weight) of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cpu_shares BuildxBuilder#cpu_shares}

---

##### `DefaultLoad`<sup>Optional</sup> <a name="DefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.defaultLoad"></a>

```csharp
public object DefaultLoad { get; set; }
```

- *Type:* object

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.env"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Env { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Sets environment variables in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#env BuildxBuilder#env}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Sets the BuildKit image to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#image BuildxBuilder#image}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memory"></a>

```csharp
public string Memory { get; set; }
```

- *Type:* string

Sets the amount of memory the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

##### `MemorySwap`<sup>Optional</sup> <a name="MemorySwap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memorySwap"></a>

```csharp
public string MemorySwap { get; set; }
```

- *Type:* string

Sets the memory swap limit for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#memory_swap BuildxBuilder#memory_swap}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Sets the network mode for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#network BuildxBuilder#network}

---

##### `RestartPolicy`<sup>Optional</sup> <a name="RestartPolicy" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.restartPolicy"></a>

```csharp
public string RestartPolicy { get; set; }
```

- *Type:* string

Sets the container's restart policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#restart_policy BuildxBuilder#restart_policy}

---

### BuildxBuilderKubernetes <a name="BuildxBuilderKubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new BuildxBuilderKubernetes {
    string Annotations = null,
    object DefaultLoad = null,
    string Image = null,
    string Labels = null,
    BuildxBuilderKubernetesLimits Limits = null,
    string Loadbalance = null,
    string Namespace = null,
    string Nodeselector = null,
    BuildxBuilderKubernetesQemu Qemu = null,
    double Replicas = null,
    BuildxBuilderKubernetesRequests Requests = null,
    object Rootless = null,
    string Schedulername = null,
    string Serviceaccount = null,
    string Timeout = null,
    string Tolerations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.annotations">Annotations</a></code> | <code>string</code> | Sets additional annotations on the deployments and pods. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.defaultLoad">DefaultLoad</a></code> | <code>object</code> | Automatically load images to the Docker Engine image store. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.image">Image</a></code> | <code>string</code> | Sets the image to use for running BuildKit. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.labels">Labels</a></code> | <code>string</code> | Sets additional labels on the deployments and pods. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.loadbalance">Loadbalance</a></code> | <code>string</code> | Load-balancing strategy (sticky or random). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.namespace">Namespace</a></code> | <code>string</code> | Sets the Kubernetes namespace. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.nodeselector">Nodeselector</a></code> | <code>string</code> | Sets the pod's nodeSelector label(s). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.qemu">Qemu</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a></code> | qemu block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.replicas">Replicas</a></code> | <code>double</code> | Sets the number of Pod replicas to create. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.requests">Requests</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a></code> | requests block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.rootless">Rootless</a></code> | <code>object</code> | Run the container as a non-root user. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.schedulername">Schedulername</a></code> | <code>string</code> | Sets the scheduler responsible for scheduling the pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.serviceaccount">Serviceaccount</a></code> | <code>string</code> | Sets the pod's serviceAccountName. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.timeout">Timeout</a></code> | <code>string</code> | Set the timeout limit for pod provisioning. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.tolerations">Tolerations</a></code> | <code>string</code> | Configures the pod's taint toleration. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.annotations"></a>

```csharp
public string Annotations { get; set; }
```

- *Type:* string

Sets additional annotations on the deployments and pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#annotations BuildxBuilder#annotations}

---

##### `DefaultLoad`<sup>Optional</sup> <a name="DefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.defaultLoad"></a>

```csharp
public object DefaultLoad { get; set; }
```

- *Type:* object

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Sets the image to use for running BuildKit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#image BuildxBuilder#image}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.labels"></a>

```csharp
public string Labels { get; set; }
```

- *Type:* string

Sets additional labels on the deployments and pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#labels BuildxBuilder#labels}

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.limits"></a>

```csharp
public BuildxBuilderKubernetesLimits Limits { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#limits BuildxBuilder#limits}

---

##### `Loadbalance`<sup>Optional</sup> <a name="Loadbalance" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.loadbalance"></a>

```csharp
public string Loadbalance { get; set; }
```

- *Type:* string

Load-balancing strategy (sticky or random).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#loadbalance BuildxBuilder#loadbalance}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Sets the Kubernetes namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#namespace BuildxBuilder#namespace}

---

##### `Nodeselector`<sup>Optional</sup> <a name="Nodeselector" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.nodeselector"></a>

```csharp
public string Nodeselector { get; set; }
```

- *Type:* string

Sets the pod's nodeSelector label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#nodeselector BuildxBuilder#nodeselector}

---

##### `Qemu`<sup>Optional</sup> <a name="Qemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.qemu"></a>

```csharp
public BuildxBuilderKubernetesQemu Qemu { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

qemu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#qemu BuildxBuilder#qemu}

---

##### `Replicas`<sup>Optional</sup> <a name="Replicas" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.replicas"></a>

```csharp
public double Replicas { get; set; }
```

- *Type:* double

Sets the number of Pod replicas to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#replicas BuildxBuilder#replicas}

---

##### `Requests`<sup>Optional</sup> <a name="Requests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.requests"></a>

```csharp
public BuildxBuilderKubernetesRequests Requests { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

requests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#requests BuildxBuilder#requests}

---

##### `Rootless`<sup>Optional</sup> <a name="Rootless" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.rootless"></a>

```csharp
public object Rootless { get; set; }
```

- *Type:* object

Run the container as a non-root user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#rootless BuildxBuilder#rootless}

---

##### `Schedulername`<sup>Optional</sup> <a name="Schedulername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.schedulername"></a>

```csharp
public string Schedulername { get; set; }
```

- *Type:* string

Sets the scheduler responsible for scheduling the pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#schedulername BuildxBuilder#schedulername}

---

##### `Serviceaccount`<sup>Optional</sup> <a name="Serviceaccount" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.serviceaccount"></a>

```csharp
public string Serviceaccount { get; set; }
```

- *Type:* string

Sets the pod's serviceAccountName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#serviceaccount BuildxBuilder#serviceaccount}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Set the timeout limit for pod provisioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#timeout BuildxBuilder#timeout}

---

##### `Tolerations`<sup>Optional</sup> <a name="Tolerations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.tolerations"></a>

```csharp
public string Tolerations { get; set; }
```

- *Type:* string

Configures the pod's taint toleration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#tolerations BuildxBuilder#tolerations}

---

### BuildxBuilderKubernetesLimits <a name="BuildxBuilderKubernetesLimits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new BuildxBuilderKubernetesLimits {
    string Cpu = null,
    string EphemeralStorage = null,
    string Memory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.cpu">Cpu</a></code> | <code>string</code> | CPU limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.ephemeralStorage">EphemeralStorage</a></code> | <code>string</code> | Ephemeral storage limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.memory">Memory</a></code> | <code>string</code> | Memory limit for the Kubernetes pod. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.cpu"></a>

```csharp
public string Cpu { get; set; }
```

- *Type:* string

CPU limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cpu BuildxBuilder#cpu}

---

##### `EphemeralStorage`<sup>Optional</sup> <a name="EphemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.ephemeralStorage"></a>

```csharp
public string EphemeralStorage { get; set; }
```

- *Type:* string

Ephemeral storage limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#ephemeral_storage BuildxBuilder#ephemeral_storage}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.memory"></a>

```csharp
public string Memory { get; set; }
```

- *Type:* string

Memory limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

### BuildxBuilderKubernetesQemu <a name="BuildxBuilderKubernetesQemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new BuildxBuilderKubernetesQemu {
    string Image = null,
    object Install = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.image">Image</a></code> | <code>string</code> | Sets the QEMU emulation image. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.install">Install</a></code> | <code>object</code> | Install QEMU emulation for multi-platform support. |

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Sets the QEMU emulation image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#image BuildxBuilder#image}

---

##### `Install`<sup>Optional</sup> <a name="Install" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.install"></a>

```csharp
public object Install { get; set; }
```

- *Type:* object

Install QEMU emulation for multi-platform support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#install BuildxBuilder#install}

---

### BuildxBuilderKubernetesRequests <a name="BuildxBuilderKubernetesRequests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new BuildxBuilderKubernetesRequests {
    string Cpu = null,
    string EphemeralStorage = null,
    string Memory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.cpu">Cpu</a></code> | <code>string</code> | CPU limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.ephemeralStorage">EphemeralStorage</a></code> | <code>string</code> | Ephemeral storage limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.memory">Memory</a></code> | <code>string</code> | Memory limit for the Kubernetes pod. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.cpu"></a>

```csharp
public string Cpu { get; set; }
```

- *Type:* string

CPU limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cpu BuildxBuilder#cpu}

---

##### `EphemeralStorage`<sup>Optional</sup> <a name="EphemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.ephemeralStorage"></a>

```csharp
public string EphemeralStorage { get; set; }
```

- *Type:* string

Ephemeral storage limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#ephemeral_storage BuildxBuilder#ephemeral_storage}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.memory"></a>

```csharp
public string Memory { get; set; }
```

- *Type:* string

Memory limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

### BuildxBuilderRemote <a name="BuildxBuilderRemote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new BuildxBuilderRemote {
    string Cacert = null,
    string Cert = null,
    object DefaultLoad = null,
    string Key = null,
    string Servername = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cacert">Cacert</a></code> | <code>string</code> | Absolute path to the TLS certificate authority used for validation. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cert">Cert</a></code> | <code>string</code> | Absolute path to the TLS client certificate to present to buildkitd. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.defaultLoad">DefaultLoad</a></code> | <code>object</code> | Automatically load images to the Docker Engine image store. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.key">Key</a></code> | <code>string</code> | Sets the TLS client key. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.servername">Servername</a></code> | <code>string</code> | TLS server name used in requests. |

---

##### `Cacert`<sup>Optional</sup> <a name="Cacert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cacert"></a>

```csharp
public string Cacert { get; set; }
```

- *Type:* string

Absolute path to the TLS certificate authority used for validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cacert BuildxBuilder#cacert}

---

##### `Cert`<sup>Optional</sup> <a name="Cert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cert"></a>

```csharp
public string Cert { get; set; }
```

- *Type:* string

Absolute path to the TLS client certificate to present to buildkitd.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#cert BuildxBuilder#cert}

---

##### `DefaultLoad`<sup>Optional</sup> <a name="DefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.defaultLoad"></a>

```csharp
public object DefaultLoad { get; set; }
```

- *Type:* object

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Sets the TLS client key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#key BuildxBuilder#key}

---

##### `Servername`<sup>Optional</sup> <a name="Servername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.servername"></a>

```csharp
public string Servername { get; set; }
```

- *Type:* string

TLS server name used in requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/buildx_builder#servername BuildxBuilder#servername}

---

## Classes <a name="Classes" id="Classes"></a>

### BuildxBuilderDockerContainerOutputReference <a name="BuildxBuilderDockerContainerOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new BuildxBuilderDockerContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCgroupParent` <a name="ResetCgroupParent" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCgroupParent"></a>

```csharp
private void ResetCgroupParent()
```

##### `ResetCpuPeriod` <a name="ResetCpuPeriod" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuPeriod"></a>

```csharp
private void ResetCpuPeriod()
```

##### `ResetCpuQuota` <a name="ResetCpuQuota" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuQuota"></a>

```csharp
private void ResetCpuQuota()
```

##### `ResetCpusetCpus` <a name="ResetCpusetCpus" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpusetCpus"></a>

```csharp
private void ResetCpusetCpus()
```

##### `ResetCpusetMems` <a name="ResetCpusetMems" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpusetMems"></a>

```csharp
private void ResetCpusetMems()
```

##### `ResetCpuShares` <a name="ResetCpuShares" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuShares"></a>

```csharp
private void ResetCpuShares()
```

##### `ResetDefaultLoad` <a name="ResetDefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetDefaultLoad"></a>

```csharp
private void ResetDefaultLoad()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetMemory"></a>

```csharp
private void ResetMemory()
```

##### `ResetMemorySwap` <a name="ResetMemorySwap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetMemorySwap"></a>

```csharp
private void ResetMemorySwap()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetRestartPolicy` <a name="ResetRestartPolicy" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetRestartPolicy"></a>

```csharp
private void ResetRestartPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParentInput">CgroupParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriodInput">CpuPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuotaInput">CpuQuotaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpusInput">CpusetCpusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMemsInput">CpusetMemsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuSharesInput">CpuSharesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoadInput">DefaultLoadInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.envInput">EnvInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memoryInput">MemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwapInput">MemorySwapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicyInput">RestartPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParent">CgroupParent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriod">CpuPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuota">CpuQuota</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpus">CpusetCpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMems">CpusetMems</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuShares">CpuShares</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoad">DefaultLoad</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.env">Env</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memory">Memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwap">MemorySwap</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicy">RestartPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CgroupParentInput`<sup>Optional</sup> <a name="CgroupParentInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParentInput"></a>

```csharp
public string CgroupParentInput { get; }
```

- *Type:* string

---

##### `CpuPeriodInput`<sup>Optional</sup> <a name="CpuPeriodInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriodInput"></a>

```csharp
public string CpuPeriodInput { get; }
```

- *Type:* string

---

##### `CpuQuotaInput`<sup>Optional</sup> <a name="CpuQuotaInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuotaInput"></a>

```csharp
public string CpuQuotaInput { get; }
```

- *Type:* string

---

##### `CpusetCpusInput`<sup>Optional</sup> <a name="CpusetCpusInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpusInput"></a>

```csharp
public string CpusetCpusInput { get; }
```

- *Type:* string

---

##### `CpusetMemsInput`<sup>Optional</sup> <a name="CpusetMemsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMemsInput"></a>

```csharp
public string CpusetMemsInput { get; }
```

- *Type:* string

---

##### `CpuSharesInput`<sup>Optional</sup> <a name="CpuSharesInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuSharesInput"></a>

```csharp
public string CpuSharesInput { get; }
```

- *Type:* string

---

##### `DefaultLoadInput`<sup>Optional</sup> <a name="DefaultLoadInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoadInput"></a>

```csharp
public object DefaultLoadInput { get; }
```

- *Type:* object

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.envInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memoryInput"></a>

```csharp
public string MemoryInput { get; }
```

- *Type:* string

---

##### `MemorySwapInput`<sup>Optional</sup> <a name="MemorySwapInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwapInput"></a>

```csharp
public string MemorySwapInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `RestartPolicyInput`<sup>Optional</sup> <a name="RestartPolicyInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicyInput"></a>

```csharp
public string RestartPolicyInput { get; }
```

- *Type:* string

---

##### `CgroupParent`<sup>Required</sup> <a name="CgroupParent" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParent"></a>

```csharp
public string CgroupParent { get; }
```

- *Type:* string

---

##### `CpuPeriod`<sup>Required</sup> <a name="CpuPeriod" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriod"></a>

```csharp
public string CpuPeriod { get; }
```

- *Type:* string

---

##### `CpuQuota`<sup>Required</sup> <a name="CpuQuota" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuota"></a>

```csharp
public string CpuQuota { get; }
```

- *Type:* string

---

##### `CpusetCpus`<sup>Required</sup> <a name="CpusetCpus" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpus"></a>

```csharp
public string CpusetCpus { get; }
```

- *Type:* string

---

##### `CpusetMems`<sup>Required</sup> <a name="CpusetMems" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMems"></a>

```csharp
public string CpusetMems { get; }
```

- *Type:* string

---

##### `CpuShares`<sup>Required</sup> <a name="CpuShares" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuShares"></a>

```csharp
public string CpuShares { get; }
```

- *Type:* string

---

##### `DefaultLoad`<sup>Required</sup> <a name="DefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoad"></a>

```csharp
public object DefaultLoad { get; }
```

- *Type:* object

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.env"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Env { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memory"></a>

```csharp
public string Memory { get; }
```

- *Type:* string

---

##### `MemorySwap`<sup>Required</sup> <a name="MemorySwap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwap"></a>

```csharp
public string MemorySwap { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `RestartPolicy`<sup>Required</sup> <a name="RestartPolicy" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicy"></a>

```csharp
public string RestartPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.internalValue"></a>

```csharp
public BuildxBuilderDockerContainer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

---


### BuildxBuilderKubernetesLimitsOutputReference <a name="BuildxBuilderKubernetesLimitsOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new BuildxBuilderKubernetesLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetCpu"></a>

```csharp
private void ResetCpu()
```

##### `ResetEphemeralStorage` <a name="ResetEphemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetEphemeralStorage"></a>

```csharp
private void ResetEphemeralStorage()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetMemory"></a>

```csharp
private void ResetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpuInput">CpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorageInput">EphemeralStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memoryInput">MemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpu">Cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorage">EphemeralStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memory">Memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpuInput"></a>

```csharp
public string CpuInput { get; }
```

- *Type:* string

---

##### `EphemeralStorageInput`<sup>Optional</sup> <a name="EphemeralStorageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorageInput"></a>

```csharp
public string EphemeralStorageInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memoryInput"></a>

```csharp
public string MemoryInput { get; }
```

- *Type:* string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpu"></a>

```csharp
public string Cpu { get; }
```

- *Type:* string

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorage"></a>

```csharp
public string EphemeralStorage { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memory"></a>

```csharp
public string Memory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.internalValue"></a>

```csharp
public BuildxBuilderKubernetesLimits InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

---


### BuildxBuilderKubernetesOutputReference <a name="BuildxBuilderKubernetesOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new BuildxBuilderKubernetesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLimits` <a name="PutLimits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putLimits"></a>

```csharp
private void PutLimits(BuildxBuilderKubernetesLimits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

---

##### `PutQemu` <a name="PutQemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putQemu"></a>

```csharp
private void PutQemu(BuildxBuilderKubernetesQemu Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putQemu.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

---

##### `PutRequests` <a name="PutRequests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putRequests"></a>

```csharp
private void PutRequests(BuildxBuilderKubernetesRequests Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putRequests.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDefaultLoad` <a name="ResetDefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetDefaultLoad"></a>

```csharp
private void ResetDefaultLoad()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLimits"></a>

```csharp
private void ResetLimits()
```

##### `ResetLoadbalance` <a name="ResetLoadbalance" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLoadbalance"></a>

```csharp
private void ResetLoadbalance()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNodeselector` <a name="ResetNodeselector" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetNodeselector"></a>

```csharp
private void ResetNodeselector()
```

##### `ResetQemu` <a name="ResetQemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetQemu"></a>

```csharp
private void ResetQemu()
```

##### `ResetReplicas` <a name="ResetReplicas" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetReplicas"></a>

```csharp
private void ResetReplicas()
```

##### `ResetRequests` <a name="ResetRequests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetRequests"></a>

```csharp
private void ResetRequests()
```

##### `ResetRootless` <a name="ResetRootless" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetRootless"></a>

```csharp
private void ResetRootless()
```

##### `ResetSchedulername` <a name="ResetSchedulername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetSchedulername"></a>

```csharp
private void ResetSchedulername()
```

##### `ResetServiceaccount` <a name="ResetServiceaccount" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetServiceaccount"></a>

```csharp
private void ResetServiceaccount()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetTolerations` <a name="ResetTolerations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetTolerations"></a>

```csharp
private void ResetTolerations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference">BuildxBuilderKubernetesLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemu">Qemu</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference">BuildxBuilderKubernetesQemuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requests">Requests</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference">BuildxBuilderKubernetesRequestsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoadInput">DefaultLoadInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labelsInput">LabelsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limitsInput">LimitsInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalanceInput">LoadbalanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselectorInput">NodeselectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemuInput">QemuInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicasInput">ReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requestsInput">RequestsInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootlessInput">RootlessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulernameInput">SchedulernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccountInput">ServiceaccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerationsInput">TolerationsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotations">Annotations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoad">DefaultLoad</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labels">Labels</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalance">Loadbalance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselector">Nodeselector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicas">Replicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootless">Rootless</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulername">Schedulername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccount">Serviceaccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerations">Tolerations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limits"></a>

```csharp
public BuildxBuilderKubernetesLimitsOutputReference Limits { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference">BuildxBuilderKubernetesLimitsOutputReference</a>

---

##### `Qemu`<sup>Required</sup> <a name="Qemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemu"></a>

```csharp
public BuildxBuilderKubernetesQemuOutputReference Qemu { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference">BuildxBuilderKubernetesQemuOutputReference</a>

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requests"></a>

```csharp
public BuildxBuilderKubernetesRequestsOutputReference Requests { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference">BuildxBuilderKubernetesRequestsOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotationsInput"></a>

```csharp
public string AnnotationsInput { get; }
```

- *Type:* string

---

##### `DefaultLoadInput`<sup>Optional</sup> <a name="DefaultLoadInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoadInput"></a>

```csharp
public object DefaultLoadInput { get; }
```

- *Type:* object

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labelsInput"></a>

```csharp
public string LabelsInput { get; }
```

- *Type:* string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limitsInput"></a>

```csharp
public BuildxBuilderKubernetesLimits LimitsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

---

##### `LoadbalanceInput`<sup>Optional</sup> <a name="LoadbalanceInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalanceInput"></a>

```csharp
public string LoadbalanceInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NodeselectorInput`<sup>Optional</sup> <a name="NodeselectorInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselectorInput"></a>

```csharp
public string NodeselectorInput { get; }
```

- *Type:* string

---

##### `QemuInput`<sup>Optional</sup> <a name="QemuInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemuInput"></a>

```csharp
public BuildxBuilderKubernetesQemu QemuInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicasInput"></a>

```csharp
public double ReplicasInput { get; }
```

- *Type:* double

---

##### `RequestsInput`<sup>Optional</sup> <a name="RequestsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requestsInput"></a>

```csharp
public BuildxBuilderKubernetesRequests RequestsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

---

##### `RootlessInput`<sup>Optional</sup> <a name="RootlessInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootlessInput"></a>

```csharp
public object RootlessInput { get; }
```

- *Type:* object

---

##### `SchedulernameInput`<sup>Optional</sup> <a name="SchedulernameInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulernameInput"></a>

```csharp
public string SchedulernameInput { get; }
```

- *Type:* string

---

##### `ServiceaccountInput`<sup>Optional</sup> <a name="ServiceaccountInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccountInput"></a>

```csharp
public string ServiceaccountInput { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `TolerationsInput`<sup>Optional</sup> <a name="TolerationsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerationsInput"></a>

```csharp
public string TolerationsInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotations"></a>

```csharp
public string Annotations { get; }
```

- *Type:* string

---

##### `DefaultLoad`<sup>Required</sup> <a name="DefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoad"></a>

```csharp
public object DefaultLoad { get; }
```

- *Type:* object

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labels"></a>

```csharp
public string Labels { get; }
```

- *Type:* string

---

##### `Loadbalance`<sup>Required</sup> <a name="Loadbalance" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalance"></a>

```csharp
public string Loadbalance { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Nodeselector`<sup>Required</sup> <a name="Nodeselector" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselector"></a>

```csharp
public string Nodeselector { get; }
```

- *Type:* string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicas"></a>

```csharp
public double Replicas { get; }
```

- *Type:* double

---

##### `Rootless`<sup>Required</sup> <a name="Rootless" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootless"></a>

```csharp
public object Rootless { get; }
```

- *Type:* object

---

##### `Schedulername`<sup>Required</sup> <a name="Schedulername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulername"></a>

```csharp
public string Schedulername { get; }
```

- *Type:* string

---

##### `Serviceaccount`<sup>Required</sup> <a name="Serviceaccount" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccount"></a>

```csharp
public string Serviceaccount { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `Tolerations`<sup>Required</sup> <a name="Tolerations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerations"></a>

```csharp
public string Tolerations { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.internalValue"></a>

```csharp
public BuildxBuilderKubernetes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

---


### BuildxBuilderKubernetesQemuOutputReference <a name="BuildxBuilderKubernetesQemuOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new BuildxBuilderKubernetesQemuOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetInstall` <a name="ResetInstall" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resetInstall"></a>

```csharp
private void ResetInstall()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.installInput">InstallInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.install">Install</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `InstallInput`<sup>Optional</sup> <a name="InstallInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.installInput"></a>

```csharp
public object InstallInput { get; }
```

- *Type:* object

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Install`<sup>Required</sup> <a name="Install" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.install"></a>

```csharp
public object Install { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.internalValue"></a>

```csharp
public BuildxBuilderKubernetesQemu InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

---


### BuildxBuilderKubernetesRequestsOutputReference <a name="BuildxBuilderKubernetesRequestsOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new BuildxBuilderKubernetesRequestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetCpu"></a>

```csharp
private void ResetCpu()
```

##### `ResetEphemeralStorage` <a name="ResetEphemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetEphemeralStorage"></a>

```csharp
private void ResetEphemeralStorage()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetMemory"></a>

```csharp
private void ResetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpuInput">CpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorageInput">EphemeralStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memoryInput">MemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpu">Cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorage">EphemeralStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memory">Memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpuInput"></a>

```csharp
public string CpuInput { get; }
```

- *Type:* string

---

##### `EphemeralStorageInput`<sup>Optional</sup> <a name="EphemeralStorageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorageInput"></a>

```csharp
public string EphemeralStorageInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memoryInput"></a>

```csharp
public string MemoryInput { get; }
```

- *Type:* string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpu"></a>

```csharp
public string Cpu { get; }
```

- *Type:* string

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorage"></a>

```csharp
public string EphemeralStorage { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memory"></a>

```csharp
public string Memory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.internalValue"></a>

```csharp
public BuildxBuilderKubernetesRequests InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

---


### BuildxBuilderRemoteOutputReference <a name="BuildxBuilderRemoteOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new BuildxBuilderRemoteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacert` <a name="ResetCacert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetCacert"></a>

```csharp
private void ResetCacert()
```

##### `ResetCert` <a name="ResetCert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetCert"></a>

```csharp
private void ResetCert()
```

##### `ResetDefaultLoad` <a name="ResetDefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetDefaultLoad"></a>

```csharp
private void ResetDefaultLoad()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetServername` <a name="ResetServername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetServername"></a>

```csharp
private void ResetServername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacertInput">CacertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.certInput">CertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoadInput">DefaultLoadInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servernameInput">ServernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacert">Cacert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cert">Cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoad">DefaultLoad</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servername">Servername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacertInput`<sup>Optional</sup> <a name="CacertInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacertInput"></a>

```csharp
public string CacertInput { get; }
```

- *Type:* string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.certInput"></a>

```csharp
public string CertInput { get; }
```

- *Type:* string

---

##### `DefaultLoadInput`<sup>Optional</sup> <a name="DefaultLoadInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoadInput"></a>

```csharp
public object DefaultLoadInput { get; }
```

- *Type:* object

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ServernameInput`<sup>Optional</sup> <a name="ServernameInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servernameInput"></a>

```csharp
public string ServernameInput { get; }
```

- *Type:* string

---

##### `Cacert`<sup>Required</sup> <a name="Cacert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacert"></a>

```csharp
public string Cacert { get; }
```

- *Type:* string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cert"></a>

```csharp
public string Cert { get; }
```

- *Type:* string

---

##### `DefaultLoad`<sup>Required</sup> <a name="DefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoad"></a>

```csharp
public object DefaultLoad { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Servername`<sup>Required</sup> <a name="Servername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servername"></a>

```csharp
public string Servername { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.internalValue"></a>

```csharp
public BuildxBuilderRemote InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

---



