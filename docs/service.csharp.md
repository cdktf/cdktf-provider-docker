# `service` Submodule <a name="`service` Submodule" id="@cdktf/provider-docker.service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Service <a name="Service" id="@cdktf/provider-docker.service.Service"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service docker_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.Service.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new Service(Construct Scope, string Id, ServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConfig">ServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-docker.service.Service.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.service.Service.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-docker.service.Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConfig">ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.service.Service.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.service.Service.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.service.Service.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.service.Service.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-docker.service.Service.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-docker.service.Service.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-docker.service.Service.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-docker.service.Service.putAuth">PutAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putConvergeConfig">PutConvergeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putEndpointSpec">PutEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putMode">PutMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putRollbackConfig">PutRollbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putTaskSpec">PutTaskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putUpdateConfig">PutUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetAuth">ResetAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetConvergeConfig">ResetConvergeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetEndpointSpec">ResetEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetRollbackConfig">ResetRollbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetUpdateConfig">ResetUpdateConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.Service.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-docker.service.Service.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-docker.service.Service.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.Service.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-docker.service.Service.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-docker.service.Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-docker.service.Service.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-docker.service.Service.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-docker.service.Service.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-docker.service.Service.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-docker.service.Service.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-docker.service.Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.Service.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.Service.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.Service.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.Service.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.Service.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.Service.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.Service.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.Service.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.Service.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-docker.service.Service.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-docker.service.Service.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.service.Service.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.service.Service.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.Service.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-docker.service.Service.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.service.Service.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-docker.service.Service.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-docker.service.Service.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-docker.service.Service.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-docker.service.Service.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.service.Service.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuth` <a name="PutAuth" id="@cdktf/provider-docker.service.Service.putAuth"></a>

```csharp
private void PutAuth(ServiceAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.Service.putAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

---

##### `PutConvergeConfig` <a name="PutConvergeConfig" id="@cdktf/provider-docker.service.Service.putConvergeConfig"></a>

```csharp
private void PutConvergeConfig(ServiceConvergeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.Service.putConvergeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

---

##### `PutEndpointSpec` <a name="PutEndpointSpec" id="@cdktf/provider-docker.service.Service.putEndpointSpec"></a>

```csharp
private void PutEndpointSpec(ServiceEndpointSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.Service.putEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

---

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-docker.service.Service.putLabels"></a>

```csharp
private void PutLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.Service.putLabels.parameter.value"></a>

- *Type:* object

---

##### `PutMode` <a name="PutMode" id="@cdktf/provider-docker.service.Service.putMode"></a>

```csharp
private void PutMode(ServiceMode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.Service.putMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

---

##### `PutRollbackConfig` <a name="PutRollbackConfig" id="@cdktf/provider-docker.service.Service.putRollbackConfig"></a>

```csharp
private void PutRollbackConfig(ServiceRollbackConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.Service.putRollbackConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

---

##### `PutTaskSpec` <a name="PutTaskSpec" id="@cdktf/provider-docker.service.Service.putTaskSpec"></a>

```csharp
private void PutTaskSpec(ServiceTaskSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.Service.putTaskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

---

##### `PutUpdateConfig` <a name="PutUpdateConfig" id="@cdktf/provider-docker.service.Service.putUpdateConfig"></a>

```csharp
private void PutUpdateConfig(ServiceUpdateConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.Service.putUpdateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

---

##### `ResetAuth` <a name="ResetAuth" id="@cdktf/provider-docker.service.Service.resetAuth"></a>

```csharp
private void ResetAuth()
```

##### `ResetConvergeConfig` <a name="ResetConvergeConfig" id="@cdktf/provider-docker.service.Service.resetConvergeConfig"></a>

```csharp
private void ResetConvergeConfig()
```

##### `ResetEndpointSpec` <a name="ResetEndpointSpec" id="@cdktf/provider-docker.service.Service.resetEndpointSpec"></a>

```csharp
private void ResetEndpointSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-docker.service.Service.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-docker.service.Service.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-docker.service.Service.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetRollbackConfig` <a name="ResetRollbackConfig" id="@cdktf/provider-docker.service.Service.resetRollbackConfig"></a>

```csharp
private void ResetRollbackConfig()
```

##### `ResetUpdateConfig` <a name="ResetUpdateConfig" id="@cdktf/provider-docker.service.Service.resetUpdateConfig"></a>

```csharp
private void ResetUpdateConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.service.Service.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-docker.service.Service.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

Service.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.service.Service.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-docker.service.Service.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

Service.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.service.Service.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-docker.service.Service.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

Service.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.service.Service.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-docker.service.Service.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

Service.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-docker.service.Service.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-docker.service.Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Service to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-docker.service.Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.service.Service.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.service.Service.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference">ServiceAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.convergeConfig">ConvergeConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference">ServiceConvergeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.endpointSpec">EndpointSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference">ServiceEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList">ServiceLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.mode">Mode</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference">ServiceModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.rollbackConfig">RollbackConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference">ServiceRollbackConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.taskSpec">TaskSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference">ServiceTaskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.updateConfig">UpdateConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference">ServiceUpdateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.authInput">AuthInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.convergeConfigInput">ConvergeConfigInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.endpointSpecInput">EndpointSpecInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.labelsInput">LabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.modeInput">ModeInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.rollbackConfigInput">RollbackConfigInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.taskSpecInput">TaskSpecInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.updateConfigInput">UpdateConfigInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-docker.service.Service.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-docker.service.Service.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.Service.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-docker.service.Service.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-docker.service.Service.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-docker.service.Service.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-docker.service.Service.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.service.Service.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.service.Service.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.service.Service.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.service.Service.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.service.Service.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.service.Service.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.service.Service.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktf/provider-docker.service.Service.property.auth"></a>

```csharp
public ServiceAuthOutputReference Auth { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference">ServiceAuthOutputReference</a>

---

##### `ConvergeConfig`<sup>Required</sup> <a name="ConvergeConfig" id="@cdktf/provider-docker.service.Service.property.convergeConfig"></a>

```csharp
public ServiceConvergeConfigOutputReference ConvergeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference">ServiceConvergeConfigOutputReference</a>

---

##### `EndpointSpec`<sup>Required</sup> <a name="EndpointSpec" id="@cdktf/provider-docker.service.Service.property.endpointSpec"></a>

```csharp
public ServiceEndpointSpecOutputReference EndpointSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference">ServiceEndpointSpecOutputReference</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-docker.service.Service.property.labels"></a>

```csharp
public ServiceLabelsList Labels { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceLabelsList">ServiceLabelsList</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-docker.service.Service.property.mode"></a>

```csharp
public ServiceModeOutputReference Mode { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeOutputReference">ServiceModeOutputReference</a>

---

##### `RollbackConfig`<sup>Required</sup> <a name="RollbackConfig" id="@cdktf/provider-docker.service.Service.property.rollbackConfig"></a>

```csharp
public ServiceRollbackConfigOutputReference RollbackConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference">ServiceRollbackConfigOutputReference</a>

---

##### `TaskSpec`<sup>Required</sup> <a name="TaskSpec" id="@cdktf/provider-docker.service.Service.property.taskSpec"></a>

```csharp
public ServiceTaskSpecOutputReference TaskSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference">ServiceTaskSpecOutputReference</a>

---

##### `UpdateConfig`<sup>Required</sup> <a name="UpdateConfig" id="@cdktf/provider-docker.service.Service.property.updateConfig"></a>

```csharp
public ServiceUpdateConfigOutputReference UpdateConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference">ServiceUpdateConfigOutputReference</a>

---

##### `AuthInput`<sup>Optional</sup> <a name="AuthInput" id="@cdktf/provider-docker.service.Service.property.authInput"></a>

```csharp
public ServiceAuth AuthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

---

##### `ConvergeConfigInput`<sup>Optional</sup> <a name="ConvergeConfigInput" id="@cdktf/provider-docker.service.Service.property.convergeConfigInput"></a>

```csharp
public ServiceConvergeConfig ConvergeConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

---

##### `EndpointSpecInput`<sup>Optional</sup> <a name="EndpointSpecInput" id="@cdktf/provider-docker.service.Service.property.endpointSpecInput"></a>

```csharp
public ServiceEndpointSpec EndpointSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-docker.service.Service.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-docker.service.Service.property.labelsInput"></a>

```csharp
public object LabelsInput { get; }
```

- *Type:* object

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-docker.service.Service.property.modeInput"></a>

```csharp
public ServiceMode ModeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.service.Service.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RollbackConfigInput`<sup>Optional</sup> <a name="RollbackConfigInput" id="@cdktf/provider-docker.service.Service.property.rollbackConfigInput"></a>

```csharp
public ServiceRollbackConfig RollbackConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

---

##### `TaskSpecInput`<sup>Optional</sup> <a name="TaskSpecInput" id="@cdktf/provider-docker.service.Service.property.taskSpecInput"></a>

```csharp
public ServiceTaskSpec TaskSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

---

##### `UpdateConfigInput`<sup>Optional</sup> <a name="UpdateConfigInput" id="@cdktf/provider-docker.service.Service.property.updateConfigInput"></a>

```csharp
public ServiceUpdateConfig UpdateConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.service.Service.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.service.Service.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-docker.service.Service.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAuth <a name="ServiceAuth" id="@cdktf/provider-docker.service.ServiceAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceAuth {
    string ServerAddress,
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuth.property.serverAddress">ServerAddress</a></code> | <code>string</code> | The address of the server for the authentication. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuth.property.password">Password</a></code> | <code>string</code> | The password. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuth.property.username">Username</a></code> | <code>string</code> | The username. |

---

##### `ServerAddress`<sup>Required</sup> <a name="ServerAddress" id="@cdktf/provider-docker.service.ServiceAuth.property.serverAddress"></a>

```csharp
public string ServerAddress { get; set; }
```

- *Type:* string

The address of the server for the authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#server_address Service#server_address}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-docker.service.ServiceAuth.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#password Service#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-docker.service.ServiceAuth.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#username Service#username}

---

### ServiceConfig <a name="ServiceConfig" id="@cdktf/provider-docker.service.ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    ServiceTaskSpec TaskSpec,
    ServiceAuth Auth = null,
    ServiceConvergeConfig ConvergeConfig = null,
    ServiceEndpointSpec EndpointSpec = null,
    string Id = null,
    object Labels = null,
    ServiceMode Mode = null,
    ServiceRollbackConfig RollbackConfig = null,
    ServiceUpdateConfig UpdateConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.name">Name</a></code> | <code>string</code> | Name of the service. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.taskSpec">TaskSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a></code> | task_spec block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.convergeConfig">ConvergeConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a></code> | converge_config block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.endpointSpec">EndpointSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a></code> | endpoint_spec block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.labels">Labels</a></code> | <code>object</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.mode">Mode</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a></code> | mode block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.rollbackConfig">RollbackConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a></code> | rollback_config block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.updateConfig">UpdateConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a></code> | update_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.service.ServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.service.ServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.service.ServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.service.ServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.service.ServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.service.ServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.service.ServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.service.ServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#name Service#name}

---

##### `TaskSpec`<sup>Required</sup> <a name="TaskSpec" id="@cdktf/provider-docker.service.ServiceConfig.property.taskSpec"></a>

```csharp
public ServiceTaskSpec TaskSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

task_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#task_spec Service#task_spec}

---

##### `Auth`<sup>Optional</sup> <a name="Auth" id="@cdktf/provider-docker.service.ServiceConfig.property.auth"></a>

```csharp
public ServiceAuth Auth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#auth Service#auth}

---

##### `ConvergeConfig`<sup>Optional</sup> <a name="ConvergeConfig" id="@cdktf/provider-docker.service.ServiceConfig.property.convergeConfig"></a>

```csharp
public ServiceConvergeConfig ConvergeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

converge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#converge_config Service#converge_config}

---

##### `EndpointSpec`<sup>Optional</sup> <a name="EndpointSpec" id="@cdktf/provider-docker.service.ServiceConfig.property.endpointSpec"></a>

```csharp
public ServiceEndpointSpec EndpointSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

endpoint_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#endpoint_spec Service#endpoint_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-docker.service.ServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-docker.service.ServiceConfig.property.labels"></a>

```csharp
public object Labels { get; set; }
```

- *Type:* object

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#labels Service#labels}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-docker.service.ServiceConfig.property.mode"></a>

```csharp
public ServiceMode Mode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#mode Service#mode}

---

##### `RollbackConfig`<sup>Optional</sup> <a name="RollbackConfig" id="@cdktf/provider-docker.service.ServiceConfig.property.rollbackConfig"></a>

```csharp
public ServiceRollbackConfig RollbackConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

rollback_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#rollback_config Service#rollback_config}

---

##### `UpdateConfig`<sup>Optional</sup> <a name="UpdateConfig" id="@cdktf/provider-docker.service.ServiceConfig.property.updateConfig"></a>

```csharp
public ServiceUpdateConfig UpdateConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

update_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#update_config Service#update_config}

---

### ServiceConvergeConfig <a name="ServiceConvergeConfig" id="@cdktf/provider-docker.service.ServiceConvergeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceConvergeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceConvergeConfig {
    string Delay = null,
    string Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig.property.delay">Delay</a></code> | <code>string</code> | The interval to check if the desired state is reached `(ms\|s)`. Defaults to `7s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig.property.timeout">Timeout</a></code> | <code>string</code> | The timeout of the service to reach the desired state `(s\|m)`. Defaults to `3m`. |

---

##### `Delay`<sup>Optional</sup> <a name="Delay" id="@cdktf/provider-docker.service.ServiceConvergeConfig.property.delay"></a>

```csharp
public string Delay { get; set; }
```

- *Type:* string

The interval to check if the desired state is reached `(ms|s)`. Defaults to `7s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#delay Service#delay}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-docker.service.ServiceConvergeConfig.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

The timeout of the service to reach the desired state `(s|m)`. Defaults to `3m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#timeout Service#timeout}

---

### ServiceEndpointSpec <a name="ServiceEndpointSpec" id="@cdktf/provider-docker.service.ServiceEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceEndpointSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceEndpointSpec {
    string Mode = null,
    object Ports = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec.property.mode">Mode</a></code> | <code>string</code> | The mode of resolution to use for internal load balancing between tasks. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec.property.ports">Ports</a></code> | <code>object</code> | ports block. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-docker.service.ServiceEndpointSpec.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The mode of resolution to use for internal load balancing between tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#mode Service#mode}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-docker.service.ServiceEndpointSpec.property.ports"></a>

```csharp
public object Ports { get; set; }
```

- *Type:* object

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#ports Service#ports}

---

### ServiceEndpointSpecPorts <a name="ServiceEndpointSpecPorts" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceEndpointSpecPorts {
    double TargetPort,
    string Name = null,
    string Protocol = null,
    double PublishedPort = null,
    string PublishMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.targetPort">TargetPort</a></code> | <code>double</code> | The port inside the container. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.name">Name</a></code> | <code>string</code> | A random name for the port. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.protocol">Protocol</a></code> | <code>string</code> | Rrepresents the protocol of a port: `tcp`, `udp` or `sctp`. Defaults to `tcp`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.publishedPort">PublishedPort</a></code> | <code>double</code> | The port on the swarm hosts. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.publishMode">PublishMode</a></code> | <code>string</code> | Represents the mode in which the port is to be published: 'ingress' or 'host'. Defaults to `ingress`. |

---

##### `TargetPort`<sup>Required</sup> <a name="TargetPort" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.targetPort"></a>

```csharp
public double TargetPort { get; set; }
```

- *Type:* double

The port inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#target_port Service#target_port}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A random name for the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#name Service#name}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Rrepresents the protocol of a port: `tcp`, `udp` or `sctp`. Defaults to `tcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#protocol Service#protocol}

---

##### `PublishedPort`<sup>Optional</sup> <a name="PublishedPort" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.publishedPort"></a>

```csharp
public double PublishedPort { get; set; }
```

- *Type:* double

The port on the swarm hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#published_port Service#published_port}

---

##### `PublishMode`<sup>Optional</sup> <a name="PublishMode" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.publishMode"></a>

```csharp
public string PublishMode { get; set; }
```

- *Type:* string

Represents the mode in which the port is to be published: 'ingress' or 'host'. Defaults to `ingress`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#publish_mode Service#publish_mode}

---

### ServiceLabels <a name="ServiceLabels" id="@cdktf/provider-docker.service.ServiceLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceLabels {
    string Label,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabels.property.label">Label</a></code> | <code>string</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabels.property.value">Value</a></code> | <code>string</code> | Value of the label. |

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-docker.service.ServiceLabels.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#label Service#label}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceLabels.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#value Service#value}

---

### ServiceMode <a name="ServiceMode" id="@cdktf/provider-docker.service.ServiceMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceMode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceMode {
    object Global = null,
    ServiceModeReplicated Replicated = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceMode.property.global">Global</a></code> | <code>object</code> | The global service mode. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceMode.property.replicated">Replicated</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a></code> | replicated block. |

---

##### `Global`<sup>Optional</sup> <a name="Global" id="@cdktf/provider-docker.service.ServiceMode.property.global"></a>

```csharp
public object Global { get; set; }
```

- *Type:* object

The global service mode. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#global Service#global}

---

##### `Replicated`<sup>Optional</sup> <a name="Replicated" id="@cdktf/provider-docker.service.ServiceMode.property.replicated"></a>

```csharp
public ServiceModeReplicated Replicated { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a>

replicated block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#replicated Service#replicated}

---

### ServiceModeReplicated <a name="ServiceModeReplicated" id="@cdktf/provider-docker.service.ServiceModeReplicated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceModeReplicated.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceModeReplicated {
    double Replicas = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicated.property.replicas">Replicas</a></code> | <code>double</code> | The amount of replicas of the service. Defaults to `1`. |

---

##### `Replicas`<sup>Optional</sup> <a name="Replicas" id="@cdktf/provider-docker.service.ServiceModeReplicated.property.replicas"></a>

```csharp
public double Replicas { get; set; }
```

- *Type:* double

The amount of replicas of the service. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#replicas Service#replicas}

---

### ServiceRollbackConfig <a name="ServiceRollbackConfig" id="@cdktf/provider-docker.service.ServiceRollbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceRollbackConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceRollbackConfig {
    string Delay = null,
    string FailureAction = null,
    string MaxFailureRatio = null,
    string Monitor = null,
    string Order = null,
    double Parallelism = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.delay">Delay</a></code> | <code>string</code> | Delay between task rollbacks (ns\|us\|ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.failureAction">FailureAction</a></code> | <code>string</code> | Action on rollback failure: pause \| continue. Defaults to `pause`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.maxFailureRatio">MaxFailureRatio</a></code> | <code>string</code> | Failure rate to tolerate during a rollback. Defaults to `0.0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.monitor">Monitor</a></code> | <code>string</code> | Duration after each task rollback to monitor for failure (ns\|us\|ms\|s\|m\|h). Defaults to `5s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.order">Order</a></code> | <code>string</code> | Rollback order: either 'stop-first' or 'start-first'. Defaults to `stop-first`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.parallelism">Parallelism</a></code> | <code>double</code> | Maximum number of tasks to be rollbacked in one iteration. Defaults to `1`. |

---

##### `Delay`<sup>Optional</sup> <a name="Delay" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.delay"></a>

```csharp
public string Delay { get; set; }
```

- *Type:* string

Delay between task rollbacks (ns|us|ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#delay Service#delay}

---

##### `FailureAction`<sup>Optional</sup> <a name="FailureAction" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.failureAction"></a>

```csharp
public string FailureAction { get; set; }
```

- *Type:* string

Action on rollback failure: pause | continue. Defaults to `pause`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#failure_action Service#failure_action}

---

##### `MaxFailureRatio`<sup>Optional</sup> <a name="MaxFailureRatio" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.maxFailureRatio"></a>

```csharp
public string MaxFailureRatio { get; set; }
```

- *Type:* string

Failure rate to tolerate during a rollback. Defaults to `0.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#max_failure_ratio Service#max_failure_ratio}

---

##### `Monitor`<sup>Optional</sup> <a name="Monitor" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.monitor"></a>

```csharp
public string Monitor { get; set; }
```

- *Type:* string

Duration after each task rollback to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#monitor Service#monitor}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Rollback order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#order Service#order}

---

##### `Parallelism`<sup>Optional</sup> <a name="Parallelism" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.parallelism"></a>

```csharp
public double Parallelism { get; set; }
```

- *Type:* double

Maximum number of tasks to be rollbacked in one iteration. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#parallelism Service#parallelism}

---

### ServiceTaskSpec <a name="ServiceTaskSpec" id="@cdktf/provider-docker.service.ServiceTaskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpec {
    ServiceTaskSpecContainerSpec ContainerSpec,
    double ForceUpdate = null,
    ServiceTaskSpecLogDriver LogDriver = null,
    object NetworksAdvanced = null,
    ServiceTaskSpecPlacement Placement = null,
    ServiceTaskSpecResources Resources = null,
    ServiceTaskSpecRestartPolicy RestartPolicy = null,
    string Runtime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.containerSpec">ContainerSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.forceUpdate">ForceUpdate</a></code> | <code>double</code> | A counter that triggers an update even if no relevant parameters have been changed. See the [spec](https://github.com/docker/swarmkit/blob/master/api/specs.proto#L126). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.logDriver">LogDriver</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a></code> | log_driver block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.networksAdvanced">NetworksAdvanced</a></code> | <code>object</code> | networks_advanced block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.restartPolicy">RestartPolicy</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a></code> | restart_policy block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.runtime">Runtime</a></code> | <code>string</code> | Runtime is the type of runtime specified for the task executor. See the [types](https://github.com/moby/moby/blob/master/api/types/swarm/runtime.go). |

---

##### `ContainerSpec`<sup>Required</sup> <a name="ContainerSpec" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.containerSpec"></a>

```csharp
public ServiceTaskSpecContainerSpec ContainerSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#container_spec Service#container_spec}

---

##### `ForceUpdate`<sup>Optional</sup> <a name="ForceUpdate" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.forceUpdate"></a>

```csharp
public double ForceUpdate { get; set; }
```

- *Type:* double

A counter that triggers an update even if no relevant parameters have been changed. See the [spec](https://github.com/docker/swarmkit/blob/master/api/specs.proto#L126).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#force_update Service#force_update}

---

##### `LogDriver`<sup>Optional</sup> <a name="LogDriver" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.logDriver"></a>

```csharp
public ServiceTaskSpecLogDriver LogDriver { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a>

log_driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#log_driver Service#log_driver}

---

##### `NetworksAdvanced`<sup>Optional</sup> <a name="NetworksAdvanced" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.networksAdvanced"></a>

```csharp
public object NetworksAdvanced { get; set; }
```

- *Type:* object

networks_advanced block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#networks_advanced Service#networks_advanced}

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.placement"></a>

```csharp
public ServiceTaskSpecPlacement Placement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#placement Service#placement}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.resources"></a>

```csharp
public ServiceTaskSpecResources Resources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#resources Service#resources}

---

##### `RestartPolicy`<sup>Optional</sup> <a name="RestartPolicy" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.restartPolicy"></a>

```csharp
public ServiceTaskSpecRestartPolicy RestartPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a>

restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#restart_policy Service#restart_policy}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

Runtime is the type of runtime specified for the task executor. See the [types](https://github.com/moby/moby/blob/master/api/types/swarm/runtime.go).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#runtime Service#runtime}

---

### ServiceTaskSpecContainerSpec <a name="ServiceTaskSpecContainerSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpec {
    string Image,
    string[] Args = null,
    string[] CapAdd = null,
    string[] CapDrop = null,
    string[] Command = null,
    object Configs = null,
    string Dir = null,
    ServiceTaskSpecContainerSpecDnsConfig DnsConfig = null,
    System.Collections.Generic.IDictionary<string, string> Env = null,
    string[] Groups = null,
    ServiceTaskSpecContainerSpecHealthcheck Healthcheck = null,
    string Hostname = null,
    object Hosts = null,
    string Isolation = null,
    object Labels = null,
    object Mounts = null,
    ServiceTaskSpecContainerSpecPrivileges Privileges = null,
    object ReadOnly = null,
    object Secrets = null,
    string StopGracePeriod = null,
    string StopSignal = null,
    System.Collections.Generic.IDictionary<string, string> Sysctl = null,
    string User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.image">Image</a></code> | <code>string</code> | The image name to use for the containers of the service, like `nginx:1.17.6`. Also use the data-source or resource of `docker_image` with the `repo_digest` or `docker_registry_image` with the `name` attribute for this, as shown in the examples. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.args">Args</a></code> | <code>string[]</code> | Arguments to the command. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.capAdd">CapAdd</a></code> | <code>string[]</code> | List of Linux capabilities to add to the container. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.capDrop">CapDrop</a></code> | <code>string[]</code> | List of Linux capabilities to drop from the container. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.command">Command</a></code> | <code>string[]</code> | The command/entrypoint to be run in the image. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.configs">Configs</a></code> | <code>object</code> | configs block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.dir">Dir</a></code> | <code>string</code> | The working directory for commands to run in. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.dnsConfig">DnsConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.env">Env</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A list of environment variables in the form VAR="value". |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.groups">Groups</a></code> | <code>string[]</code> | A list of additional groups that the container process will run as. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.healthcheck">Healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.hostname">Hostname</a></code> | <code>string</code> | The hostname to use for the container, as a valid RFC 1123 hostname. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.hosts">Hosts</a></code> | <code>object</code> | hosts block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.isolation">Isolation</a></code> | <code>string</code> | Isolation technology of the containers running the service. (Windows only). Defaults to `default`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.labels">Labels</a></code> | <code>object</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.mounts">Mounts</a></code> | <code>object</code> | mounts block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.privileges">Privileges</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a></code> | privileges block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.readOnly">ReadOnly</a></code> | <code>object</code> | Mount the container's root filesystem as read only. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.secrets">Secrets</a></code> | <code>object</code> | secrets block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.stopGracePeriod">StopGracePeriod</a></code> | <code>string</code> | Amount of time to wait for the container to terminate before forcefully removing it (ms\|s\|m\|h). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.stopSignal">StopSignal</a></code> | <code>string</code> | Signal to stop the container. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.sysctl">Sysctl</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Sysctls config (Linux only). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.user">User</a></code> | <code>string</code> | The user inside the container. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

The image name to use for the containers of the service, like `nginx:1.17.6`. Also use the data-source or resource of `docker_image` with the `repo_digest` or `docker_registry_image` with the `name` attribute for this, as shown in the examples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#image Service#image}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

Arguments to the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#args Service#args}

---

##### `CapAdd`<sup>Optional</sup> <a name="CapAdd" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.capAdd"></a>

```csharp
public string[] CapAdd { get; set; }
```

- *Type:* string[]

List of Linux capabilities to add to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#cap_add Service#cap_add}

---

##### `CapDrop`<sup>Optional</sup> <a name="CapDrop" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.capDrop"></a>

```csharp
public string[] CapDrop { get; set; }
```

- *Type:* string[]

List of Linux capabilities to drop from the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#cap_drop Service#cap_drop}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

The command/entrypoint to be run in the image.

According to the [docker cli](https://github.com/docker/cli/blob/v20.10.7/cli/command/service/opts.go#L705) the override of the entrypoint is also passed to the `command` property and there is no `entrypoint` attribute in the `ContainerSpec` of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#command Service#command}

---

##### `Configs`<sup>Optional</sup> <a name="Configs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.configs"></a>

```csharp
public object Configs { get; set; }
```

- *Type:* object

configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#configs Service#configs}

---

##### `Dir`<sup>Optional</sup> <a name="Dir" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.dir"></a>

```csharp
public string Dir { get; set; }
```

- *Type:* string

The working directory for commands to run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#dir Service#dir}

---

##### `DnsConfig`<sup>Optional</sup> <a name="DnsConfig" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.dnsConfig"></a>

```csharp
public ServiceTaskSpecContainerSpecDnsConfig DnsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#dns_config Service#dns_config}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.env"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Env { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A list of environment variables in the form VAR="value".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#env Service#env}

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

A list of additional groups that the container process will run as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#groups Service#groups}

---

##### `Healthcheck`<sup>Optional</sup> <a name="Healthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.healthcheck"></a>

```csharp
public ServiceTaskSpecContainerSpecHealthcheck Healthcheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#healthcheck Service#healthcheck}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

The hostname to use for the container, as a valid RFC 1123 hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#hostname Service#hostname}

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.hosts"></a>

```csharp
public object Hosts { get; set; }
```

- *Type:* object

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#hosts Service#hosts}

---

##### `Isolation`<sup>Optional</sup> <a name="Isolation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.isolation"></a>

```csharp
public string Isolation { get; set; }
```

- *Type:* string

Isolation technology of the containers running the service. (Windows only). Defaults to `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#isolation Service#isolation}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.labels"></a>

```csharp
public object Labels { get; set; }
```

- *Type:* object

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#labels Service#labels}

---

##### `Mounts`<sup>Optional</sup> <a name="Mounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.mounts"></a>

```csharp
public object Mounts { get; set; }
```

- *Type:* object

mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#mounts Service#mounts}

---

##### `Privileges`<sup>Optional</sup> <a name="Privileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.privileges"></a>

```csharp
public ServiceTaskSpecContainerSpecPrivileges Privileges { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a>

privileges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#privileges Service#privileges}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Mount the container's root filesystem as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#read_only Service#read_only}

---

##### `Secrets`<sup>Optional</sup> <a name="Secrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.secrets"></a>

```csharp
public object Secrets { get; set; }
```

- *Type:* object

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#secrets Service#secrets}

---

##### `StopGracePeriod`<sup>Optional</sup> <a name="StopGracePeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.stopGracePeriod"></a>

```csharp
public string StopGracePeriod { get; set; }
```

- *Type:* string

Amount of time to wait for the container to terminate before forcefully removing it (ms|s|m|h).

If not specified or '0s' the destroy will not check if all tasks/containers of the service terminate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#stop_grace_period Service#stop_grace_period}

---

##### `StopSignal`<sup>Optional</sup> <a name="StopSignal" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.stopSignal"></a>

```csharp
public string StopSignal { get; set; }
```

- *Type:* string

Signal to stop the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#stop_signal Service#stop_signal}

---

##### `Sysctl`<sup>Optional</sup> <a name="Sysctl" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.sysctl"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Sysctl { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Sysctls config (Linux only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#sysctl Service#sysctl}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

The user inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#user Service#user}

---

### ServiceTaskSpecContainerSpecConfigs <a name="ServiceTaskSpecContainerSpecConfigs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecConfigs {
    string ConfigId,
    string FileName,
    string ConfigName = null,
    string FileGid = null,
    double FileMode = null,
    string FileUid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.configId">ConfigId</a></code> | <code>string</code> | ID of the specific config that we're referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileName">FileName</a></code> | <code>string</code> | Represents the final filename in the filesystem. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.configName">ConfigName</a></code> | <code>string</code> | Name of the config that this references, but this is just provided for lookup/display purposes. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileGid">FileGid</a></code> | <code>string</code> | Represents the file GID. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileMode">FileMode</a></code> | <code>double</code> | Represents represents the FileMode of the file. Defaults to `0o444`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileUid">FileUid</a></code> | <code>string</code> | Represents the file UID. Defaults to `0`. |

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.configId"></a>

```csharp
public string ConfigId { get; set; }
```

- *Type:* string

ID of the specific config that we're referencing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#config_id Service#config_id}

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileName"></a>

```csharp
public string FileName { get; set; }
```

- *Type:* string

Represents the final filename in the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#file_name Service#file_name}

---

##### `ConfigName`<sup>Optional</sup> <a name="ConfigName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.configName"></a>

```csharp
public string ConfigName { get; set; }
```

- *Type:* string

Name of the config that this references, but this is just provided for lookup/display purposes.

The config in the reference will be identified by its ID

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#config_name Service#config_name}

---

##### `FileGid`<sup>Optional</sup> <a name="FileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileGid"></a>

```csharp
public string FileGid { get; set; }
```

- *Type:* string

Represents the file GID. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#file_gid Service#file_gid}

---

##### `FileMode`<sup>Optional</sup> <a name="FileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileMode"></a>

```csharp
public double FileMode { get; set; }
```

- *Type:* double

Represents represents the FileMode of the file. Defaults to `0o444`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#file_mode Service#file_mode}

---

##### `FileUid`<sup>Optional</sup> <a name="FileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileUid"></a>

```csharp
public string FileUid { get; set; }
```

- *Type:* string

Represents the file UID. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#file_uid Service#file_uid}

---

### ServiceTaskSpecContainerSpecDnsConfig <a name="ServiceTaskSpecContainerSpecDnsConfig" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecDnsConfig {
    string[] Nameservers,
    string[] Options = null,
    string[] Search = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.nameservers">Nameservers</a></code> | <code>string[]</code> | The IP addresses of the name servers. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.options">Options</a></code> | <code>string[]</code> | A list of internal resolver variables to be modified (e.g., `debug`, `ndots:3`, etc.). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.search">Search</a></code> | <code>string[]</code> | A search list for host-name lookup. |

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.nameservers"></a>

```csharp
public string[] Nameservers { get; set; }
```

- *Type:* string[]

The IP addresses of the name servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#nameservers Service#nameservers}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.options"></a>

```csharp
public string[] Options { get; set; }
```

- *Type:* string[]

A list of internal resolver variables to be modified (e.g., `debug`, `ndots:3`, etc.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#options Service#options}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.search"></a>

```csharp
public string[] Search { get; set; }
```

- *Type:* string[]

A search list for host-name lookup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#search Service#search}

---

### ServiceTaskSpecContainerSpecHealthcheck <a name="ServiceTaskSpecContainerSpecHealthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecHealthcheck {
    string[] Test,
    string Interval = null,
    double Retries = null,
    string StartPeriod = null,
    string Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.test">Test</a></code> | <code>string[]</code> | The test to perform as list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.interval">Interval</a></code> | <code>string</code> | Time between running the check (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.retries">Retries</a></code> | <code>double</code> | Consecutive failures needed to report unhealthy. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.startPeriod">StartPeriod</a></code> | <code>string</code> | Start period for the container to initialize before counting retries towards unstable (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.timeout">Timeout</a></code> | <code>string</code> | Maximum time to allow one check to run (ms\|s\|m\|h). Defaults to `0s`. |

---

##### `Test`<sup>Required</sup> <a name="Test" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.test"></a>

```csharp
public string[] Test { get; set; }
```

- *Type:* string[]

The test to perform as list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#test Service#test}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.interval"></a>

```csharp
public string Interval { get; set; }
```

- *Type:* string

Time between running the check (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#interval Service#interval}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.retries"></a>

```csharp
public double Retries { get; set; }
```

- *Type:* double

Consecutive failures needed to report unhealthy. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#retries Service#retries}

---

##### `StartPeriod`<sup>Optional</sup> <a name="StartPeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.startPeriod"></a>

```csharp
public string StartPeriod { get; set; }
```

- *Type:* string

Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#start_period Service#start_period}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#timeout Service#timeout}

---

### ServiceTaskSpecContainerSpecHosts <a name="ServiceTaskSpecContainerSpecHosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecHosts {
    string Host,
    string Ip
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.property.host">Host</a></code> | <code>string</code> | The name of the host. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.property.ip">Ip</a></code> | <code>string</code> | The ip of the host. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The name of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#host Service#host}

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

The ip of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#ip Service#ip}

---

### ServiceTaskSpecContainerSpecLabels <a name="ServiceTaskSpecContainerSpecLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecLabels {
    string Label,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.property.label">Label</a></code> | <code>string</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.property.value">Value</a></code> | <code>string</code> | Value of the label. |

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#label Service#label}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#value Service#value}

---

### ServiceTaskSpecContainerSpecMounts <a name="ServiceTaskSpecContainerSpecMounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecMounts {
    string Target,
    string Type,
    ServiceTaskSpecContainerSpecMountsBindOptions BindOptions = null,
    object ReadOnly = null,
    string Source = null,
    ServiceTaskSpecContainerSpecMountsTmpfsOptions TmpfsOptions = null,
    ServiceTaskSpecContainerSpecMountsVolumeOptions VolumeOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.target">Target</a></code> | <code>string</code> | Container path. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.type">Type</a></code> | <code>string</code> | The mount type. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.bindOptions">BindOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a></code> | bind_options block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.readOnly">ReadOnly</a></code> | <code>object</code> | Whether the mount should be read-only. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.source">Source</a></code> | <code>string</code> | Mount source (e.g. a volume name, a host path). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.tmpfsOptions">TmpfsOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a></code> | tmpfs_options block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.volumeOptions">VolumeOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a></code> | volume_options block. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Container path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#target Service#target}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The mount type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#type Service#type}

---

##### `BindOptions`<sup>Optional</sup> <a name="BindOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.bindOptions"></a>

```csharp
public ServiceTaskSpecContainerSpecMountsBindOptions BindOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a>

bind_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#bind_options Service#bind_options}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Whether the mount should be read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#read_only Service#read_only}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Mount source (e.g. a volume name, a host path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#source Service#source}

---

##### `TmpfsOptions`<sup>Optional</sup> <a name="TmpfsOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.tmpfsOptions"></a>

```csharp
public ServiceTaskSpecContainerSpecMountsTmpfsOptions TmpfsOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a>

tmpfs_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#tmpfs_options Service#tmpfs_options}

---

##### `VolumeOptions`<sup>Optional</sup> <a name="VolumeOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.volumeOptions"></a>

```csharp
public ServiceTaskSpecContainerSpecMountsVolumeOptions VolumeOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a>

volume_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#volume_options Service#volume_options}

---

### ServiceTaskSpecContainerSpecMountsBindOptions <a name="ServiceTaskSpecContainerSpecMountsBindOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecMountsBindOptions {
    string Propagation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions.property.propagation">Propagation</a></code> | <code>string</code> | Bind propagation refers to whether or not mounts created within a given bind-mount or named volume can be propagated to replicas of that mount. |

---

##### `Propagation`<sup>Optional</sup> <a name="Propagation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions.property.propagation"></a>

```csharp
public string Propagation { get; set; }
```

- *Type:* string

Bind propagation refers to whether or not mounts created within a given bind-mount or named volume can be propagated to replicas of that mount.

See the [docs](https://docs.docker.com/storage/bind-mounts/#configure-bind-propagation) for details. Defaults to `rprivate`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#propagation Service#propagation}

---

### ServiceTaskSpecContainerSpecMountsTmpfsOptions <a name="ServiceTaskSpecContainerSpecMountsTmpfsOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecMountsTmpfsOptions {
    double Mode = null,
    double SizeBytes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.property.mode">Mode</a></code> | <code>double</code> | The permission mode for the tmpfs mount in an integer. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.property.sizeBytes">SizeBytes</a></code> | <code>double</code> | The size for the tmpfs mount in bytes. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.property.mode"></a>

```csharp
public double Mode { get; set; }
```

- *Type:* double

The permission mode for the tmpfs mount in an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#mode Service#mode}

---

##### `SizeBytes`<sup>Optional</sup> <a name="SizeBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.property.sizeBytes"></a>

```csharp
public double SizeBytes { get; set; }
```

- *Type:* double

The size for the tmpfs mount in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#size_bytes Service#size_bytes}

---

### ServiceTaskSpecContainerSpecMountsVolumeOptions <a name="ServiceTaskSpecContainerSpecMountsVolumeOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecMountsVolumeOptions {
    string DriverName = null,
    System.Collections.Generic.IDictionary<string, string> DriverOptions = null,
    object Labels = null,
    object NoCopy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.driverName">DriverName</a></code> | <code>string</code> | Name of the driver to use to create the volume. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.driverOptions">DriverOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | key/value map of driver specific options. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.labels">Labels</a></code> | <code>object</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.noCopy">NoCopy</a></code> | <code>object</code> | Populate volume with data from the target. |

---

##### `DriverName`<sup>Optional</sup> <a name="DriverName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.driverName"></a>

```csharp
public string DriverName { get; set; }
```

- *Type:* string

Name of the driver to use to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#driver_name Service#driver_name}

---

##### `DriverOptions`<sup>Optional</sup> <a name="DriverOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.driverOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverOptions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

key/value map of driver specific options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#driver_options Service#driver_options}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.labels"></a>

```csharp
public object Labels { get; set; }
```

- *Type:* object

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#labels Service#labels}

---

##### `NoCopy`<sup>Optional</sup> <a name="NoCopy" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.noCopy"></a>

```csharp
public object NoCopy { get; set; }
```

- *Type:* object

Populate volume with data from the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#no_copy Service#no_copy}

---

### ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels <a name="ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels {
    string Label,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.property.label">Label</a></code> | <code>string</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.property.value">Value</a></code> | <code>string</code> | Value of the label. |

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#label Service#label}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#value Service#value}

---

### ServiceTaskSpecContainerSpecPrivileges <a name="ServiceTaskSpecContainerSpecPrivileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecPrivileges {
    ServiceTaskSpecContainerSpecPrivilegesCredentialSpec CredentialSpec = null,
    ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext SeLinuxContext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.property.credentialSpec">CredentialSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a></code> | credential_spec block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.property.seLinuxContext">SeLinuxContext</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a></code> | se_linux_context block. |

---

##### `CredentialSpec`<sup>Optional</sup> <a name="CredentialSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.property.credentialSpec"></a>

```csharp
public ServiceTaskSpecContainerSpecPrivilegesCredentialSpec CredentialSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a>

credential_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#credential_spec Service#credential_spec}

---

##### `SeLinuxContext`<sup>Optional</sup> <a name="SeLinuxContext" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.property.seLinuxContext"></a>

```csharp
public ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext SeLinuxContext { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a>

se_linux_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#se_linux_context Service#se_linux_context}

---

### ServiceTaskSpecContainerSpecPrivilegesCredentialSpec <a name="ServiceTaskSpecContainerSpecPrivilegesCredentialSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecPrivilegesCredentialSpec {
    string File = null,
    string Registry = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.property.file">File</a></code> | <code>string</code> | Load credential spec from this file. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.property.registry">Registry</a></code> | <code>string</code> | Load credential spec from this value in the Windows registry. |

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.property.file"></a>

```csharp
public string File { get; set; }
```

- *Type:* string

Load credential spec from this file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#file Service#file}

---

##### `Registry`<sup>Optional</sup> <a name="Registry" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.property.registry"></a>

```csharp
public string Registry { get; set; }
```

- *Type:* string

Load credential spec from this value in the Windows registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#registry Service#registry}

---

### ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext <a name="ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext {
    object Disable = null,
    string Level = null,
    string Role = null,
    string Type = null,
    string User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.disable">Disable</a></code> | <code>object</code> | Disable SELinux. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.level">Level</a></code> | <code>string</code> | SELinux level label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.role">Role</a></code> | <code>string</code> | SELinux role label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.type">Type</a></code> | <code>string</code> | SELinux type label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.user">User</a></code> | <code>string</code> | SELinux user label. |

---

##### `Disable`<sup>Optional</sup> <a name="Disable" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.disable"></a>

```csharp
public object Disable { get; set; }
```

- *Type:* object

Disable SELinux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#disable Service#disable}

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

SELinux level label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#level Service#level}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

SELinux role label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#role Service#role}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

SELinux type label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#type Service#type}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

SELinux user label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#user Service#user}

---

### ServiceTaskSpecContainerSpecSecrets <a name="ServiceTaskSpecContainerSpecSecrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecSecrets {
    string FileName,
    string SecretId,
    string FileGid = null,
    double FileMode = null,
    string FileUid = null,
    string SecretName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileName">FileName</a></code> | <code>string</code> | Represents the final filename in the filesystem. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.secretId">SecretId</a></code> | <code>string</code> | ID of the specific secret that we're referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileGid">FileGid</a></code> | <code>string</code> | Represents the file GID. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileMode">FileMode</a></code> | <code>double</code> | Represents represents the FileMode of the file. Defaults to `0o444`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileUid">FileUid</a></code> | <code>string</code> | Represents the file UID. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.secretName">SecretName</a></code> | <code>string</code> | Name of the secret that this references, but this is just provided for lookup/display purposes. |

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileName"></a>

```csharp
public string FileName { get; set; }
```

- *Type:* string

Represents the final filename in the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#file_name Service#file_name}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

ID of the specific secret that we're referencing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#secret_id Service#secret_id}

---

##### `FileGid`<sup>Optional</sup> <a name="FileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileGid"></a>

```csharp
public string FileGid { get; set; }
```

- *Type:* string

Represents the file GID. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#file_gid Service#file_gid}

---

##### `FileMode`<sup>Optional</sup> <a name="FileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileMode"></a>

```csharp
public double FileMode { get; set; }
```

- *Type:* double

Represents represents the FileMode of the file. Defaults to `0o444`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#file_mode Service#file_mode}

---

##### `FileUid`<sup>Optional</sup> <a name="FileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileUid"></a>

```csharp
public string FileUid { get; set; }
```

- *Type:* string

Represents the file UID. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#file_uid Service#file_uid}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Name of the secret that this references, but this is just provided for lookup/display purposes.

The config in the reference will be identified by its ID

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#secret_name Service#secret_name}

---

### ServiceTaskSpecLogDriver <a name="ServiceTaskSpecLogDriver" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecLogDriver {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Options = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.property.name">Name</a></code> | <code>string</code> | The logging driver to use. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The options for the logging driver. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The logging driver to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#name Service#name}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The options for the logging driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#options Service#options}

---

### ServiceTaskSpecNetworksAdvanced <a name="ServiceTaskSpecNetworksAdvanced" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecNetworksAdvanced {
    string Name,
    string[] Aliases = null,
    string[] DriverOpts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.name">Name</a></code> | <code>string</code> | The name/id of the network. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.aliases">Aliases</a></code> | <code>string[]</code> | The network aliases of the container in the specific network. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.driverOpts">DriverOpts</a></code> | <code>string[]</code> | An array of driver options for the network, e.g. `opts1=value`. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name/id of the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#name Service#name}

---

##### `Aliases`<sup>Optional</sup> <a name="Aliases" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.aliases"></a>

```csharp
public string[] Aliases { get; set; }
```

- *Type:* string[]

The network aliases of the container in the specific network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#aliases Service#aliases}

---

##### `DriverOpts`<sup>Optional</sup> <a name="DriverOpts" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.driverOpts"></a>

```csharp
public string[] DriverOpts { get; set; }
```

- *Type:* string[]

An array of driver options for the network, e.g. `opts1=value`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#driver_opts Service#driver_opts}

---

### ServiceTaskSpecPlacement <a name="ServiceTaskSpecPlacement" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecPlacement {
    string[] Constraints = null,
    double MaxReplicas = null,
    object Platforms = null,
    string[] Prefs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.constraints">Constraints</a></code> | <code>string[]</code> | An array of constraints. e.g.: `node.role==manager`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.maxReplicas">MaxReplicas</a></code> | <code>double</code> | Maximum number of replicas for per node (default value is `0`, which is unlimited). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.platforms">Platforms</a></code> | <code>object</code> | platforms block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.prefs">Prefs</a></code> | <code>string[]</code> | Preferences provide a way to make the scheduler aware of factors such as topology. |

---

##### `Constraints`<sup>Optional</sup> <a name="Constraints" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.constraints"></a>

```csharp
public string[] Constraints { get; set; }
```

- *Type:* string[]

An array of constraints. e.g.: `node.role==manager`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#constraints Service#constraints}

---

##### `MaxReplicas`<sup>Optional</sup> <a name="MaxReplicas" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.maxReplicas"></a>

```csharp
public double MaxReplicas { get; set; }
```

- *Type:* double

Maximum number of replicas for per node (default value is `0`, which is unlimited).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#max_replicas Service#max_replicas}

---

##### `Platforms`<sup>Optional</sup> <a name="Platforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.platforms"></a>

```csharp
public object Platforms { get; set; }
```

- *Type:* object

platforms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#platforms Service#platforms}

---

##### `Prefs`<sup>Optional</sup> <a name="Prefs" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.prefs"></a>

```csharp
public string[] Prefs { get; set; }
```

- *Type:* string[]

Preferences provide a way to make the scheduler aware of factors such as topology.

They are provided in order from highest to lowest precedence, e.g.: `spread=node.role.manager`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#prefs Service#prefs}

---

### ServiceTaskSpecPlacementPlatforms <a name="ServiceTaskSpecPlacementPlatforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecPlacementPlatforms {
    string Architecture,
    string Os
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.property.architecture">Architecture</a></code> | <code>string</code> | The architecture, e.g. `amd64`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.property.os">Os</a></code> | <code>string</code> | The operation system, e.g. `linux`. |

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.property.architecture"></a>

```csharp
public string Architecture { get; set; }
```

- *Type:* string

The architecture, e.g. `amd64`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#architecture Service#architecture}

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.property.os"></a>

```csharp
public string Os { get; set; }
```

- *Type:* string

The operation system, e.g. `linux`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#os Service#os}

---

### ServiceTaskSpecResources <a name="ServiceTaskSpecResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecResources {
    ServiceTaskSpecResourcesLimits Limits = null,
    ServiceTaskSpecResourcesReservation Reservation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources.property.reservation">Reservation</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a></code> | reservation block. |

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-docker.service.ServiceTaskSpecResources.property.limits"></a>

```csharp
public ServiceTaskSpecResourcesLimits Limits { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#limits Service#limits}

---

##### `Reservation`<sup>Optional</sup> <a name="Reservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResources.property.reservation"></a>

```csharp
public ServiceTaskSpecResourcesReservation Reservation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a>

reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#reservation Service#reservation}

---

### ServiceTaskSpecResourcesLimits <a name="ServiceTaskSpecResourcesLimits" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecResourcesLimits {
    double MemoryBytes = null,
    double NanoCpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.property.memoryBytes">MemoryBytes</a></code> | <code>double</code> | The amounf of memory in bytes the container allocates. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.property.nanoCpus">NanoCpus</a></code> | <code>double</code> | CPU shares in units of `1/1e9` (or `10^-9`) of the CPU. Should be at least `1000000`. |

---

##### `MemoryBytes`<sup>Optional</sup> <a name="MemoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.property.memoryBytes"></a>

```csharp
public double MemoryBytes { get; set; }
```

- *Type:* double

The amounf of memory in bytes the container allocates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#memory_bytes Service#memory_bytes}

---

##### `NanoCpus`<sup>Optional</sup> <a name="NanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.property.nanoCpus"></a>

```csharp
public double NanoCpus { get; set; }
```

- *Type:* double

CPU shares in units of `1/1e9` (or `10^-9`) of the CPU. Should be at least `1000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#nano_cpus Service#nano_cpus}

---

### ServiceTaskSpecResourcesReservation <a name="ServiceTaskSpecResourcesReservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecResourcesReservation {
    ServiceTaskSpecResourcesReservationGenericResources GenericResources = null,
    double MemoryBytes = null,
    double NanoCpus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.genericResources">GenericResources</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a></code> | generic_resources block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.memoryBytes">MemoryBytes</a></code> | <code>double</code> | The amounf of memory in bytes the container allocates. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.nanoCpus">NanoCpus</a></code> | <code>double</code> | CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least `1000000`. |

---

##### `GenericResources`<sup>Optional</sup> <a name="GenericResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.genericResources"></a>

```csharp
public ServiceTaskSpecResourcesReservationGenericResources GenericResources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a>

generic_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#generic_resources Service#generic_resources}

---

##### `MemoryBytes`<sup>Optional</sup> <a name="MemoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.memoryBytes"></a>

```csharp
public double MemoryBytes { get; set; }
```

- *Type:* double

The amounf of memory in bytes the container allocates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#memory_bytes Service#memory_bytes}

---

##### `NanoCpus`<sup>Optional</sup> <a name="NanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.nanoCpus"></a>

```csharp
public double NanoCpus { get; set; }
```

- *Type:* double

CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least `1000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#nano_cpus Service#nano_cpus}

---

### ServiceTaskSpecResourcesReservationGenericResources <a name="ServiceTaskSpecResourcesReservationGenericResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecResourcesReservationGenericResources {
    string[] DiscreteResourcesSpec = null,
    string[] NamedResourcesSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.property.discreteResourcesSpec">DiscreteResourcesSpec</a></code> | <code>string[]</code> | The Integer resources. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.property.namedResourcesSpec">NamedResourcesSpec</a></code> | <code>string[]</code> | The String resources. |

---

##### `DiscreteResourcesSpec`<sup>Optional</sup> <a name="DiscreteResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.property.discreteResourcesSpec"></a>

```csharp
public string[] DiscreteResourcesSpec { get; set; }
```

- *Type:* string[]

The Integer resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#discrete_resources_spec Service#discrete_resources_spec}

---

##### `NamedResourcesSpec`<sup>Optional</sup> <a name="NamedResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.property.namedResourcesSpec"></a>

```csharp
public string[] NamedResourcesSpec { get; set; }
```

- *Type:* string[]

The String resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#named_resources_spec Service#named_resources_spec}

---

### ServiceTaskSpecRestartPolicy <a name="ServiceTaskSpecRestartPolicy" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecRestartPolicy {
    string Condition = null,
    string Delay = null,
    double MaxAttempts = null,
    string Window = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.condition">Condition</a></code> | <code>string</code> | Condition for restart. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.delay">Delay</a></code> | <code>string</code> | Delay between restart attempts (ms\|s\|m\|h). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | Maximum attempts to restart a given container before giving up (default value is `0`, which is ignored). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.window">Window</a></code> | <code>string</code> | The time window used to evaluate the restart policy (default value is `0`, which is unbounded) (ms\|s\|m\|h). |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Condition for restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#condition Service#condition}

---

##### `Delay`<sup>Optional</sup> <a name="Delay" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.delay"></a>

```csharp
public string Delay { get; set; }
```

- *Type:* string

Delay between restart attempts (ms|s|m|h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#delay Service#delay}

---

##### `MaxAttempts`<sup>Optional</sup> <a name="MaxAttempts" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; set; }
```

- *Type:* double

Maximum attempts to restart a given container before giving up (default value is `0`, which is ignored).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#max_attempts Service#max_attempts}

---

##### `Window`<sup>Optional</sup> <a name="Window" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.window"></a>

```csharp
public string Window { get; set; }
```

- *Type:* string

The time window used to evaluate the restart policy (default value is `0`, which is unbounded) (ms|s|m|h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#window Service#window}

---

### ServiceUpdateConfig <a name="ServiceUpdateConfig" id="@cdktf/provider-docker.service.ServiceUpdateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceUpdateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceUpdateConfig {
    string Delay = null,
    string FailureAction = null,
    string MaxFailureRatio = null,
    string Monitor = null,
    string Order = null,
    double Parallelism = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.delay">Delay</a></code> | <code>string</code> | Delay between task updates `(ns\|us\|ms\|s\|m\|h)`. Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.failureAction">FailureAction</a></code> | <code>string</code> | Action on update failure: `pause`, `continue` or `rollback`. Defaults to `pause`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.maxFailureRatio">MaxFailureRatio</a></code> | <code>string</code> | Failure rate to tolerate during an update. Defaults to `0.0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.monitor">Monitor</a></code> | <code>string</code> | Duration after each task update to monitor for failure (ns\|us\|ms\|s\|m\|h). Defaults to `5s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.order">Order</a></code> | <code>string</code> | Update order: either 'stop-first' or 'start-first'. Defaults to `stop-first`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.parallelism">Parallelism</a></code> | <code>double</code> | Maximum number of tasks to be updated in one iteration. Defaults to `1`. |

---

##### `Delay`<sup>Optional</sup> <a name="Delay" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.delay"></a>

```csharp
public string Delay { get; set; }
```

- *Type:* string

Delay between task updates `(ns|us|ms|s|m|h)`. Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#delay Service#delay}

---

##### `FailureAction`<sup>Optional</sup> <a name="FailureAction" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.failureAction"></a>

```csharp
public string FailureAction { get; set; }
```

- *Type:* string

Action on update failure: `pause`, `continue` or `rollback`. Defaults to `pause`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#failure_action Service#failure_action}

---

##### `MaxFailureRatio`<sup>Optional</sup> <a name="MaxFailureRatio" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.maxFailureRatio"></a>

```csharp
public string MaxFailureRatio { get; set; }
```

- *Type:* string

Failure rate to tolerate during an update. Defaults to `0.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#max_failure_ratio Service#max_failure_ratio}

---

##### `Monitor`<sup>Optional</sup> <a name="Monitor" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.monitor"></a>

```csharp
public string Monitor { get; set; }
```

- *Type:* string

Duration after each task update to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#monitor Service#monitor}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Update order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#order Service#order}

---

##### `Parallelism`<sup>Optional</sup> <a name="Parallelism" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.parallelism"></a>

```csharp
public double Parallelism { get; set; }
```

- *Type:* double

Maximum number of tasks to be updated in one iteration. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/service#parallelism Service#parallelism}

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceAuthOutputReference <a name="ServiceAuthOutputReference" id="@cdktf/provider-docker.service.ServiceAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.serverAddressInput">ServerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.serverAddress">ServerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ServerAddressInput`<sup>Optional</sup> <a name="ServerAddressInput" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.serverAddressInput"></a>

```csharp
public string ServerAddressInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `ServerAddress`<sup>Required</sup> <a name="ServerAddress" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.serverAddress"></a>

```csharp
public string ServerAddress { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.internalValue"></a>

```csharp
public ServiceAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

---


### ServiceConvergeConfigOutputReference <a name="ServiceConvergeConfigOutputReference" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceConvergeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resetDelay">ResetDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelay` <a name="ResetDelay" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resetDelay"></a>

```csharp
private void ResetDelay()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.delayInput">DelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.delay">Delay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DelayInput`<sup>Optional</sup> <a name="DelayInput" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.delayInput"></a>

```csharp
public string DelayInput { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.delay"></a>

```csharp
public string Delay { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.internalValue"></a>

```csharp
public ServiceConvergeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

---


### ServiceEndpointSpecOutputReference <a name="ServiceEndpointSpecOutputReference" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceEndpointSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPorts` <a name="PutPorts" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.putPorts"></a>

```csharp
private void PutPorts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.putPorts.parameter.value"></a>

- *Type:* object

---

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList">ServiceEndpointSpecPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.portsInput">PortsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.ports"></a>

```csharp
public ServiceEndpointSpecPortsList Ports { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList">ServiceEndpointSpecPortsList</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.portsInput"></a>

```csharp
public object PortsInput { get; }
```

- *Type:* object

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.internalValue"></a>

```csharp
public ServiceEndpointSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

---


### ServiceEndpointSpecPortsList <a name="ServiceEndpointSpecPortsList" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceEndpointSpecPortsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.get"></a>

```csharp
private ServiceEndpointSpecPortsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceEndpointSpecPortsOutputReference <a name="ServiceEndpointSpecPortsOutputReference" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceEndpointSpecPortsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetPublishedPort">ResetPublishedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetPublishMode">ResetPublishMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetPublishedPort` <a name="ResetPublishedPort" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetPublishedPort"></a>

```csharp
private void ResetPublishedPort()
```

##### `ResetPublishMode` <a name="ResetPublishMode" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetPublishMode"></a>

```csharp
private void ResetPublishMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishedPortInput">PublishedPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishModeInput">PublishModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.targetPortInput">TargetPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishedPort">PublishedPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishMode">PublishMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.targetPort">TargetPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `PublishedPortInput`<sup>Optional</sup> <a name="PublishedPortInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishedPortInput"></a>

```csharp
public double PublishedPortInput { get; }
```

- *Type:* double

---

##### `PublishModeInput`<sup>Optional</sup> <a name="PublishModeInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishModeInput"></a>

```csharp
public string PublishModeInput { get; }
```

- *Type:* string

---

##### `TargetPortInput`<sup>Optional</sup> <a name="TargetPortInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.targetPortInput"></a>

```csharp
public double TargetPortInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `PublishedPort`<sup>Required</sup> <a name="PublishedPort" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishedPort"></a>

```csharp
public double PublishedPort { get; }
```

- *Type:* double

---

##### `PublishMode`<sup>Required</sup> <a name="PublishMode" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishMode"></a>

```csharp
public string PublishMode { get; }
```

- *Type:* string

---

##### `TargetPort`<sup>Required</sup> <a name="TargetPort" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.targetPort"></a>

```csharp
public double TargetPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceLabelsList <a name="ServiceLabelsList" id="@cdktf/provider-docker.service.ServiceLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-docker.service.ServiceLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.service.ServiceLabelsList.get"></a>

```csharp
private ServiceLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-docker.service.ServiceLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceLabelsOutputReference <a name="ServiceLabelsOutputReference" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceModeOutputReference <a name="ServiceModeOutputReference" id="@cdktf/provider-docker.service.ServiceModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceModeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.putReplicated">PutReplicated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.resetGlobal">ResetGlobal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.resetReplicated">ResetReplicated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceModeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceModeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceModeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceModeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReplicated` <a name="PutReplicated" id="@cdktf/provider-docker.service.ServiceModeOutputReference.putReplicated"></a>

```csharp
private void PutReplicated(ServiceModeReplicated Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceModeOutputReference.putReplicated.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a>

---

##### `ResetGlobal` <a name="ResetGlobal" id="@cdktf/provider-docker.service.ServiceModeOutputReference.resetGlobal"></a>

```csharp
private void ResetGlobal()
```

##### `ResetReplicated` <a name="ResetReplicated" id="@cdktf/provider-docker.service.ServiceModeOutputReference.resetReplicated"></a>

```csharp
private void ResetReplicated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.replicated">Replicated</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference">ServiceModeReplicatedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.globalInput">GlobalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.replicatedInput">ReplicatedInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.global">Global</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Replicated`<sup>Required</sup> <a name="Replicated" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.replicated"></a>

```csharp
public ServiceModeReplicatedOutputReference Replicated { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference">ServiceModeReplicatedOutputReference</a>

---

##### `GlobalInput`<sup>Optional</sup> <a name="GlobalInput" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.globalInput"></a>

```csharp
public object GlobalInput { get; }
```

- *Type:* object

---

##### `ReplicatedInput`<sup>Optional</sup> <a name="ReplicatedInput" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.replicatedInput"></a>

```csharp
public ServiceModeReplicated ReplicatedInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a>

---

##### `Global`<sup>Required</sup> <a name="Global" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.global"></a>

```csharp
public object Global { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.internalValue"></a>

```csharp
public ServiceMode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

---


### ServiceModeReplicatedOutputReference <a name="ServiceModeReplicatedOutputReference" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceModeReplicatedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resetReplicas">ResetReplicas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplicas` <a name="ResetReplicas" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resetReplicas"></a>

```csharp
private void ResetReplicas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.replicasInput">ReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.replicas">Replicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.replicasInput"></a>

```csharp
public double ReplicasInput { get; }
```

- *Type:* double

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.replicas"></a>

```csharp
public double Replicas { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.internalValue"></a>

```csharp
public ServiceModeReplicated InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a>

---


### ServiceRollbackConfigOutputReference <a name="ServiceRollbackConfigOutputReference" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceRollbackConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetDelay">ResetDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetFailureAction">ResetFailureAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetMaxFailureRatio">ResetMaxFailureRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetMonitor">ResetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetParallelism">ResetParallelism</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelay` <a name="ResetDelay" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetDelay"></a>

```csharp
private void ResetDelay()
```

##### `ResetFailureAction` <a name="ResetFailureAction" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetFailureAction"></a>

```csharp
private void ResetFailureAction()
```

##### `ResetMaxFailureRatio` <a name="ResetMaxFailureRatio" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetMaxFailureRatio"></a>

```csharp
private void ResetMaxFailureRatio()
```

##### `ResetMonitor` <a name="ResetMonitor" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetMonitor"></a>

```csharp
private void ResetMonitor()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetParallelism` <a name="ResetParallelism" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetParallelism"></a>

```csharp
private void ResetParallelism()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.delayInput">DelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.failureActionInput">FailureActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.maxFailureRatioInput">MaxFailureRatioInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.monitorInput">MonitorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.parallelismInput">ParallelismInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.delay">Delay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.failureAction">FailureAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.maxFailureRatio">MaxFailureRatio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.monitor">Monitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.parallelism">Parallelism</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DelayInput`<sup>Optional</sup> <a name="DelayInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.delayInput"></a>

```csharp
public string DelayInput { get; }
```

- *Type:* string

---

##### `FailureActionInput`<sup>Optional</sup> <a name="FailureActionInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.failureActionInput"></a>

```csharp
public string FailureActionInput { get; }
```

- *Type:* string

---

##### `MaxFailureRatioInput`<sup>Optional</sup> <a name="MaxFailureRatioInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.maxFailureRatioInput"></a>

```csharp
public string MaxFailureRatioInput { get; }
```

- *Type:* string

---

##### `MonitorInput`<sup>Optional</sup> <a name="MonitorInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.monitorInput"></a>

```csharp
public string MonitorInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `ParallelismInput`<sup>Optional</sup> <a name="ParallelismInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.parallelismInput"></a>

```csharp
public double ParallelismInput { get; }
```

- *Type:* double

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.delay"></a>

```csharp
public string Delay { get; }
```

- *Type:* string

---

##### `FailureAction`<sup>Required</sup> <a name="FailureAction" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.failureAction"></a>

```csharp
public string FailureAction { get; }
```

- *Type:* string

---

##### `MaxFailureRatio`<sup>Required</sup> <a name="MaxFailureRatio" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.maxFailureRatio"></a>

```csharp
public string MaxFailureRatio { get; }
```

- *Type:* string

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.monitor"></a>

```csharp
public string Monitor { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Parallelism`<sup>Required</sup> <a name="Parallelism" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.parallelism"></a>

```csharp
public double Parallelism { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.internalValue"></a>

```csharp
public ServiceRollbackConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

---


### ServiceTaskSpecContainerSpecConfigsList <a name="ServiceTaskSpecContainerSpecConfigsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.get"></a>

```csharp
private ServiceTaskSpecContainerSpecConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceTaskSpecContainerSpecConfigsOutputReference <a name="ServiceTaskSpecContainerSpecConfigsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetConfigName">ResetConfigName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileGid">ResetFileGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileMode">ResetFileMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileUid">ResetFileUid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigName` <a name="ResetConfigName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetConfigName"></a>

```csharp
private void ResetConfigName()
```

##### `ResetFileGid` <a name="ResetFileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileGid"></a>

```csharp
private void ResetFileGid()
```

##### `ResetFileMode` <a name="ResetFileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileMode"></a>

```csharp
private void ResetFileMode()
```

##### `ResetFileUid` <a name="ResetFileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileUid"></a>

```csharp
private void ResetFileUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configIdInput">ConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configNameInput">ConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileGidInput">FileGidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileModeInput">FileModeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileUidInput">FileUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configId">ConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configName">ConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileGid">FileGid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileMode">FileMode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileUid">FileUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configIdInput"></a>

```csharp
public string ConfigIdInput { get; }
```

- *Type:* string

---

##### `ConfigNameInput`<sup>Optional</sup> <a name="ConfigNameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configNameInput"></a>

```csharp
public string ConfigNameInput { get; }
```

- *Type:* string

---

##### `FileGidInput`<sup>Optional</sup> <a name="FileGidInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileGidInput"></a>

```csharp
public string FileGidInput { get; }
```

- *Type:* string

---

##### `FileModeInput`<sup>Optional</sup> <a name="FileModeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileModeInput"></a>

```csharp
public double FileModeInput { get; }
```

- *Type:* double

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileNameInput"></a>

```csharp
public string FileNameInput { get; }
```

- *Type:* string

---

##### `FileUidInput`<sup>Optional</sup> <a name="FileUidInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileUidInput"></a>

```csharp
public string FileUidInput { get; }
```

- *Type:* string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configId"></a>

```csharp
public string ConfigId { get; }
```

- *Type:* string

---

##### `ConfigName`<sup>Required</sup> <a name="ConfigName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configName"></a>

```csharp
public string ConfigName { get; }
```

- *Type:* string

---

##### `FileGid`<sup>Required</sup> <a name="FileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileGid"></a>

```csharp
public string FileGid { get; }
```

- *Type:* string

---

##### `FileMode`<sup>Required</sup> <a name="FileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileMode"></a>

```csharp
public double FileMode { get; }
```

- *Type:* double

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `FileUid`<sup>Required</sup> <a name="FileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileUid"></a>

```csharp
public string FileUid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceTaskSpecContainerSpecDnsConfigOutputReference <a name="ServiceTaskSpecContainerSpecDnsConfigOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecDnsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resetSearch"></a>

```csharp
private void ResetSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.nameserversInput">NameserversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.optionsInput">OptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.searchInput">SearchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.nameservers">Nameservers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.options">Options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.search">Search</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameserversInput`<sup>Optional</sup> <a name="NameserversInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.nameserversInput"></a>

```csharp
public string[] NameserversInput { get; }
```

- *Type:* string[]

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.optionsInput"></a>

```csharp
public string[] OptionsInput { get; }
```

- *Type:* string[]

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.searchInput"></a>

```csharp
public string[] SearchInput { get; }
```

- *Type:* string[]

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.nameservers"></a>

```csharp
public string[] Nameservers { get; }
```

- *Type:* string[]

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.options"></a>

```csharp
public string[] Options { get; }
```

- *Type:* string[]

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.search"></a>

```csharp
public string[] Search { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpecContainerSpecDnsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a>

---


### ServiceTaskSpecContainerSpecHealthcheckOutputReference <a name="ServiceTaskSpecContainerSpecHealthcheckOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecHealthcheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetStartPeriod">ResetStartPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetRetries"></a>

```csharp
private void ResetRetries()
```

##### `ResetStartPeriod` <a name="ResetStartPeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetStartPeriod"></a>

```csharp
private void ResetStartPeriod()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.intervalInput">IntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.retriesInput">RetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.startPeriodInput">StartPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.testInput">TestInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.interval">Interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.startPeriod">StartPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.test">Test</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.intervalInput"></a>

```csharp
public string IntervalInput { get; }
```

- *Type:* string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.retriesInput"></a>

```csharp
public double RetriesInput { get; }
```

- *Type:* double

---

##### `StartPeriodInput`<sup>Optional</sup> <a name="StartPeriodInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.startPeriodInput"></a>

```csharp
public string StartPeriodInput { get; }
```

- *Type:* string

---

##### `TestInput`<sup>Optional</sup> <a name="TestInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.testInput"></a>

```csharp
public string[] TestInput { get; }
```

- *Type:* string[]

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.interval"></a>

```csharp
public string Interval { get; }
```

- *Type:* string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `StartPeriod`<sup>Required</sup> <a name="StartPeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.startPeriod"></a>

```csharp
public string StartPeriod { get; }
```

- *Type:* string

---

##### `Test`<sup>Required</sup> <a name="Test" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.test"></a>

```csharp
public string[] Test { get; }
```

- *Type:* string[]

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpecContainerSpecHealthcheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a>

---


### ServiceTaskSpecContainerSpecHostsList <a name="ServiceTaskSpecContainerSpecHostsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecHostsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.get"></a>

```csharp
private ServiceTaskSpecContainerSpecHostsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceTaskSpecContainerSpecHostsOutputReference <a name="ServiceTaskSpecContainerSpecHostsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecHostsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceTaskSpecContainerSpecLabelsList <a name="ServiceTaskSpecContainerSpecLabelsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.get"></a>

```csharp
private ServiceTaskSpecContainerSpecLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceTaskSpecContainerSpecLabelsOutputReference <a name="ServiceTaskSpecContainerSpecLabelsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference <a name="ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resetPropagation">ResetPropagation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPropagation` <a name="ResetPropagation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resetPropagation"></a>

```csharp
private void ResetPropagation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.propagationInput">PropagationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.propagation">Propagation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PropagationInput`<sup>Optional</sup> <a name="PropagationInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.propagationInput"></a>

```csharp
public string PropagationInput { get; }
```

- *Type:* string

---

##### `Propagation`<sup>Required</sup> <a name="Propagation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.propagation"></a>

```csharp
public string Propagation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpecContainerSpecMountsBindOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a>

---


### ServiceTaskSpecContainerSpecMountsList <a name="ServiceTaskSpecContainerSpecMountsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecMountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.get"></a>

```csharp
private ServiceTaskSpecContainerSpecMountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceTaskSpecContainerSpecMountsOutputReference <a name="ServiceTaskSpecContainerSpecMountsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecMountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putBindOptions">PutBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putTmpfsOptions">PutTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putVolumeOptions">PutVolumeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetBindOptions">ResetBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetTmpfsOptions">ResetTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetVolumeOptions">ResetVolumeOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBindOptions` <a name="PutBindOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putBindOptions"></a>

```csharp
private void PutBindOptions(ServiceTaskSpecContainerSpecMountsBindOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putBindOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a>

---

##### `PutTmpfsOptions` <a name="PutTmpfsOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putTmpfsOptions"></a>

```csharp
private void PutTmpfsOptions(ServiceTaskSpecContainerSpecMountsTmpfsOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putTmpfsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a>

---

##### `PutVolumeOptions` <a name="PutVolumeOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putVolumeOptions"></a>

```csharp
private void PutVolumeOptions(ServiceTaskSpecContainerSpecMountsVolumeOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putVolumeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a>

---

##### `ResetBindOptions` <a name="ResetBindOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetBindOptions"></a>

```csharp
private void ResetBindOptions()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetTmpfsOptions` <a name="ResetTmpfsOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetTmpfsOptions"></a>

```csharp
private void ResetTmpfsOptions()
```

##### `ResetVolumeOptions` <a name="ResetVolumeOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetVolumeOptions"></a>

```csharp
private void ResetVolumeOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.bindOptions">BindOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference">ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.tmpfsOptions">TmpfsOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference">ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.volumeOptions">VolumeOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference">ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.bindOptionsInput">BindOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.tmpfsOptionsInput">TmpfsOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.volumeOptionsInput">VolumeOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BindOptions`<sup>Required</sup> <a name="BindOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.bindOptions"></a>

```csharp
public ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference BindOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference">ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference</a>

---

##### `TmpfsOptions`<sup>Required</sup> <a name="TmpfsOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.tmpfsOptions"></a>

```csharp
public ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference TmpfsOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference">ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference</a>

---

##### `VolumeOptions`<sup>Required</sup> <a name="VolumeOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.volumeOptions"></a>

```csharp
public ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference VolumeOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference">ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference</a>

---

##### `BindOptionsInput`<sup>Optional</sup> <a name="BindOptionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.bindOptionsInput"></a>

```csharp
public ServiceTaskSpecContainerSpecMountsBindOptions BindOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a>

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TmpfsOptionsInput`<sup>Optional</sup> <a name="TmpfsOptionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.tmpfsOptionsInput"></a>

```csharp
public ServiceTaskSpecContainerSpecMountsTmpfsOptions TmpfsOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VolumeOptionsInput`<sup>Optional</sup> <a name="VolumeOptionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.volumeOptionsInput"></a>

```csharp
public ServiceTaskSpecContainerSpecMountsVolumeOptions VolumeOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a>

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference <a name="ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resetSizeBytes">ResetSizeBytes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetSizeBytes` <a name="ResetSizeBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resetSizeBytes"></a>

```csharp
private void ResetSizeBytes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.modeInput">ModeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.sizeBytesInput">SizeBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.mode">Mode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.sizeBytes">SizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.modeInput"></a>

```csharp
public double ModeInput { get; }
```

- *Type:* double

---

##### `SizeBytesInput`<sup>Optional</sup> <a name="SizeBytesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.sizeBytesInput"></a>

```csharp
public double SizeBytesInput { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.mode"></a>

```csharp
public double Mode { get; }
```

- *Type:* double

---

##### `SizeBytes`<sup>Required</sup> <a name="SizeBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.sizeBytes"></a>

```csharp
public double SizeBytes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpecContainerSpecMountsTmpfsOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a>

---


### ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList <a name="ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.get"></a>

```csharp
private ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference <a name="ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference <a name="ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetDriverName">ResetDriverName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetDriverOptions">ResetDriverOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetNoCopy">ResetNoCopy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.putLabels"></a>

```csharp
private void PutLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.putLabels.parameter.value"></a>

- *Type:* object

---

##### `ResetDriverName` <a name="ResetDriverName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetDriverName"></a>

```csharp
private void ResetDriverName()
```

##### `ResetDriverOptions` <a name="ResetDriverOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetDriverOptions"></a>

```csharp
private void ResetDriverOptions()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNoCopy` <a name="ResetNoCopy" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetNoCopy"></a>

```csharp
private void ResetNoCopy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverNameInput">DriverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverOptionsInput">DriverOptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.noCopyInput">NoCopyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverName">DriverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverOptions">DriverOptions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.noCopy">NoCopy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.labels"></a>

```csharp
public ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList Labels { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList</a>

---

##### `DriverNameInput`<sup>Optional</sup> <a name="DriverNameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverNameInput"></a>

```csharp
public string DriverNameInput { get; }
```

- *Type:* string

---

##### `DriverOptionsInput`<sup>Optional</sup> <a name="DriverOptionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverOptionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverOptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.labelsInput"></a>

```csharp
public object LabelsInput { get; }
```

- *Type:* object

---

##### `NoCopyInput`<sup>Optional</sup> <a name="NoCopyInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.noCopyInput"></a>

```csharp
public object NoCopyInput { get; }
```

- *Type:* object

---

##### `DriverName`<sup>Required</sup> <a name="DriverName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverName"></a>

```csharp
public string DriverName { get; }
```

- *Type:* string

---

##### `DriverOptions`<sup>Required</sup> <a name="DriverOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverOptions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DriverOptions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NoCopy`<sup>Required</sup> <a name="NoCopy" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.noCopy"></a>

```csharp
public object NoCopy { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpecContainerSpecMountsVolumeOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a>

---


### ServiceTaskSpecContainerSpecOutputReference <a name="ServiceTaskSpecContainerSpecOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putConfigs">PutConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putDnsConfig">PutDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHealthcheck">PutHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHosts">PutHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putMounts">PutMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putPrivileges">PutPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putSecrets">PutSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetCapAdd">ResetCapAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetCapDrop">ResetCapDrop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetConfigs">ResetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetDir">ResetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetDnsConfig">ResetDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHealthcheck">ResetHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetIsolation">ResetIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetMounts">ResetMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetPrivileges">ResetPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetSecrets">ResetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetStopGracePeriod">ResetStopGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetStopSignal">ResetStopSignal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetSysctl">ResetSysctl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigs` <a name="PutConfigs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putConfigs"></a>

```csharp
private void PutConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putConfigs.parameter.value"></a>

- *Type:* object

---

##### `PutDnsConfig` <a name="PutDnsConfig" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putDnsConfig"></a>

```csharp
private void PutDnsConfig(ServiceTaskSpecContainerSpecDnsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putDnsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a>

---

##### `PutHealthcheck` <a name="PutHealthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHealthcheck"></a>

```csharp
private void PutHealthcheck(ServiceTaskSpecContainerSpecHealthcheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHealthcheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a>

---

##### `PutHosts` <a name="PutHosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHosts"></a>

```csharp
private void PutHosts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHosts.parameter.value"></a>

- *Type:* object

---

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putLabels"></a>

```csharp
private void PutLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putLabels.parameter.value"></a>

- *Type:* object

---

##### `PutMounts` <a name="PutMounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putMounts"></a>

```csharp
private void PutMounts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putMounts.parameter.value"></a>

- *Type:* object

---

##### `PutPrivileges` <a name="PutPrivileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putPrivileges"></a>

```csharp
private void PutPrivileges(ServiceTaskSpecContainerSpecPrivileges Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putPrivileges.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a>

---

##### `PutSecrets` <a name="PutSecrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putSecrets"></a>

```csharp
private void PutSecrets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putSecrets.parameter.value"></a>

- *Type:* object

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetCapAdd` <a name="ResetCapAdd" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetCapAdd"></a>

```csharp
private void ResetCapAdd()
```

##### `ResetCapDrop` <a name="ResetCapDrop" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetCapDrop"></a>

```csharp
private void ResetCapDrop()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetConfigs` <a name="ResetConfigs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetConfigs"></a>

```csharp
private void ResetConfigs()
```

##### `ResetDir` <a name="ResetDir" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetDir"></a>

```csharp
private void ResetDir()
```

##### `ResetDnsConfig` <a name="ResetDnsConfig" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetDnsConfig"></a>

```csharp
private void ResetDnsConfig()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetHealthcheck` <a name="ResetHealthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHealthcheck"></a>

```csharp
private void ResetHealthcheck()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetHosts` <a name="ResetHosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHosts"></a>

```csharp
private void ResetHosts()
```

##### `ResetIsolation` <a name="ResetIsolation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetIsolation"></a>

```csharp
private void ResetIsolation()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMounts` <a name="ResetMounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetMounts"></a>

```csharp
private void ResetMounts()
```

##### `ResetPrivileges` <a name="ResetPrivileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetPrivileges"></a>

```csharp
private void ResetPrivileges()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetSecrets` <a name="ResetSecrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetSecrets"></a>

```csharp
private void ResetSecrets()
```

##### `ResetStopGracePeriod` <a name="ResetStopGracePeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetStopGracePeriod"></a>

```csharp
private void ResetStopGracePeriod()
```

##### `ResetStopSignal` <a name="ResetStopSignal" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetStopSignal"></a>

```csharp
private void ResetStopSignal()
```

##### `ResetSysctl` <a name="ResetSysctl" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetSysctl"></a>

```csharp
private void ResetSysctl()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetUser"></a>

```csharp
private void ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.configs">Configs</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList">ServiceTaskSpecContainerSpecConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dnsConfig">DnsConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference">ServiceTaskSpecContainerSpecDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.healthcheck">Healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference">ServiceTaskSpecContainerSpecHealthcheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hosts">Hosts</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList">ServiceTaskSpecContainerSpecHostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList">ServiceTaskSpecContainerSpecLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.mounts">Mounts</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList">ServiceTaskSpecContainerSpecMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.privileges">Privileges</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference">ServiceTaskSpecContainerSpecPrivilegesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.secrets">Secrets</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList">ServiceTaskSpecContainerSpecSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.capAddInput">CapAddInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.capDropInput">CapDropInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.configsInput">ConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dirInput">DirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dnsConfigInput">DnsConfigInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.envInput">EnvInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.healthcheckInput">HealthcheckInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostsInput">HostsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.isolationInput">IsolationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.labelsInput">LabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.mountsInput">MountsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.privilegesInput">PrivilegesInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.secretsInput">SecretsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopGracePeriodInput">StopGracePeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopSignalInput">StopSignalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.sysctlInput">SysctlInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.capAdd">CapAdd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.capDrop">CapDrop</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dir">Dir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.env">Env</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.isolation">Isolation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopGracePeriod">StopGracePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopSignal">StopSignal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.sysctl">Sysctl</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Configs`<sup>Required</sup> <a name="Configs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.configs"></a>

```csharp
public ServiceTaskSpecContainerSpecConfigsList Configs { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList">ServiceTaskSpecContainerSpecConfigsList</a>

---

##### `DnsConfig`<sup>Required</sup> <a name="DnsConfig" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dnsConfig"></a>

```csharp
public ServiceTaskSpecContainerSpecDnsConfigOutputReference DnsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference">ServiceTaskSpecContainerSpecDnsConfigOutputReference</a>

---

##### `Healthcheck`<sup>Required</sup> <a name="Healthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.healthcheck"></a>

```csharp
public ServiceTaskSpecContainerSpecHealthcheckOutputReference Healthcheck { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference">ServiceTaskSpecContainerSpecHealthcheckOutputReference</a>

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hosts"></a>

```csharp
public ServiceTaskSpecContainerSpecHostsList Hosts { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList">ServiceTaskSpecContainerSpecHostsList</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.labels"></a>

```csharp
public ServiceTaskSpecContainerSpecLabelsList Labels { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList">ServiceTaskSpecContainerSpecLabelsList</a>

---

##### `Mounts`<sup>Required</sup> <a name="Mounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.mounts"></a>

```csharp
public ServiceTaskSpecContainerSpecMountsList Mounts { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList">ServiceTaskSpecContainerSpecMountsList</a>

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.privileges"></a>

```csharp
public ServiceTaskSpecContainerSpecPrivilegesOutputReference Privileges { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference">ServiceTaskSpecContainerSpecPrivilegesOutputReference</a>

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.secrets"></a>

```csharp
public ServiceTaskSpecContainerSpecSecretsList Secrets { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList">ServiceTaskSpecContainerSpecSecretsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `CapAddInput`<sup>Optional</sup> <a name="CapAddInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.capAddInput"></a>

```csharp
public string[] CapAddInput { get; }
```

- *Type:* string[]

---

##### `CapDropInput`<sup>Optional</sup> <a name="CapDropInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.capDropInput"></a>

```csharp
public string[] CapDropInput { get; }
```

- *Type:* string[]

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `ConfigsInput`<sup>Optional</sup> <a name="ConfigsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.configsInput"></a>

```csharp
public object ConfigsInput { get; }
```

- *Type:* object

---

##### `DirInput`<sup>Optional</sup> <a name="DirInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dirInput"></a>

```csharp
public string DirInput { get; }
```

- *Type:* string

---

##### `DnsConfigInput`<sup>Optional</sup> <a name="DnsConfigInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dnsConfigInput"></a>

```csharp
public ServiceTaskSpecContainerSpecDnsConfig DnsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a>

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.envInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `HealthcheckInput`<sup>Optional</sup> <a name="HealthcheckInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.healthcheckInput"></a>

```csharp
public ServiceTaskSpecContainerSpecHealthcheck HealthcheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a>

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostsInput"></a>

```csharp
public object HostsInput { get; }
```

- *Type:* object

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `IsolationInput`<sup>Optional</sup> <a name="IsolationInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.isolationInput"></a>

```csharp
public string IsolationInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.labelsInput"></a>

```csharp
public object LabelsInput { get; }
```

- *Type:* object

---

##### `MountsInput`<sup>Optional</sup> <a name="MountsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.mountsInput"></a>

```csharp
public object MountsInput { get; }
```

- *Type:* object

---

##### `PrivilegesInput`<sup>Optional</sup> <a name="PrivilegesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.privilegesInput"></a>

```csharp
public ServiceTaskSpecContainerSpecPrivileges PrivilegesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a>

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.secretsInput"></a>

```csharp
public object SecretsInput { get; }
```

- *Type:* object

---

##### `StopGracePeriodInput`<sup>Optional</sup> <a name="StopGracePeriodInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopGracePeriodInput"></a>

```csharp
public string StopGracePeriodInput { get; }
```

- *Type:* string

---

##### `StopSignalInput`<sup>Optional</sup> <a name="StopSignalInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopSignalInput"></a>

```csharp
public string StopSignalInput { get; }
```

- *Type:* string

---

##### `SysctlInput`<sup>Optional</sup> <a name="SysctlInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.sysctlInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SysctlInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `CapAdd`<sup>Required</sup> <a name="CapAdd" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.capAdd"></a>

```csharp
public string[] CapAdd { get; }
```

- *Type:* string[]

---

##### `CapDrop`<sup>Required</sup> <a name="CapDrop" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.capDrop"></a>

```csharp
public string[] CapDrop { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dir"></a>

```csharp
public string Dir { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.env"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Env { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Isolation`<sup>Required</sup> <a name="Isolation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.isolation"></a>

```csharp
public string Isolation { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `StopGracePeriod`<sup>Required</sup> <a name="StopGracePeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopGracePeriod"></a>

```csharp
public string StopGracePeriod { get; }
```

- *Type:* string

---

##### `StopSignal`<sup>Required</sup> <a name="StopSignal" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopSignal"></a>

```csharp
public string StopSignal { get; }
```

- *Type:* string

---

##### `Sysctl`<sup>Required</sup> <a name="Sysctl" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.sysctl"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Sysctl { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpecContainerSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a>

---


### ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference <a name="ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resetRegistry">ResetRegistry</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resetFile"></a>

```csharp
private void ResetFile()
```

##### `ResetRegistry` <a name="ResetRegistry" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resetRegistry"></a>

```csharp
private void ResetRegistry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.fileInput">FileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.registryInput">RegistryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.file">File</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.registry">Registry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.fileInput"></a>

```csharp
public string FileInput { get; }
```

- *Type:* string

---

##### `RegistryInput`<sup>Optional</sup> <a name="RegistryInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.registryInput"></a>

```csharp
public string RegistryInput { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.file"></a>

```csharp
public string File { get; }
```

- *Type:* string

---

##### `Registry`<sup>Required</sup> <a name="Registry" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.registry"></a>

```csharp
public string Registry { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpecContainerSpecPrivilegesCredentialSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a>

---


### ServiceTaskSpecContainerSpecPrivilegesOutputReference <a name="ServiceTaskSpecContainerSpecPrivilegesOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecPrivilegesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putCredentialSpec">PutCredentialSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putSeLinuxContext">PutSeLinuxContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resetCredentialSpec">ResetCredentialSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resetSeLinuxContext">ResetSeLinuxContext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCredentialSpec` <a name="PutCredentialSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putCredentialSpec"></a>

```csharp
private void PutCredentialSpec(ServiceTaskSpecContainerSpecPrivilegesCredentialSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putCredentialSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a>

---

##### `PutSeLinuxContext` <a name="PutSeLinuxContext" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putSeLinuxContext"></a>

```csharp
private void PutSeLinuxContext(ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putSeLinuxContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a>

---

##### `ResetCredentialSpec` <a name="ResetCredentialSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resetCredentialSpec"></a>

```csharp
private void ResetCredentialSpec()
```

##### `ResetSeLinuxContext` <a name="ResetSeLinuxContext" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resetSeLinuxContext"></a>

```csharp
private void ResetSeLinuxContext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.credentialSpec">CredentialSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference">ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.seLinuxContext">SeLinuxContext</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.credentialSpecInput">CredentialSpecInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.seLinuxContextInput">SeLinuxContextInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialSpec`<sup>Required</sup> <a name="CredentialSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.credentialSpec"></a>

```csharp
public ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference CredentialSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference">ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference</a>

---

##### `SeLinuxContext`<sup>Required</sup> <a name="SeLinuxContext" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.seLinuxContext"></a>

```csharp
public ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference SeLinuxContext { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference</a>

---

##### `CredentialSpecInput`<sup>Optional</sup> <a name="CredentialSpecInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.credentialSpecInput"></a>

```csharp
public ServiceTaskSpecContainerSpecPrivilegesCredentialSpec CredentialSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a>

---

##### `SeLinuxContextInput`<sup>Optional</sup> <a name="SeLinuxContextInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.seLinuxContextInput"></a>

```csharp
public ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext SeLinuxContextInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpecContainerSpecPrivileges InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a>

---


### ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference <a name="ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetDisable">ResetDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisable` <a name="ResetDisable" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetDisable"></a>

```csharp
private void ResetDisable()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetLevel"></a>

```csharp
private void ResetLevel()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetUser"></a>

```csharp
private void ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.disableInput">DisableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.disable">Disable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableInput`<sup>Optional</sup> <a name="DisableInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.disableInput"></a>

```csharp
public object DisableInput { get; }
```

- *Type:* object

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Disable`<sup>Required</sup> <a name="Disable" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.disable"></a>

```csharp
public object Disable { get; }
```

- *Type:* object

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a>

---


### ServiceTaskSpecContainerSpecSecretsList <a name="ServiceTaskSpecContainerSpecSecretsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecSecretsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.get"></a>

```csharp
private ServiceTaskSpecContainerSpecSecretsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceTaskSpecContainerSpecSecretsOutputReference <a name="ServiceTaskSpecContainerSpecSecretsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecContainerSpecSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileGid">ResetFileGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileMode">ResetFileMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileUid">ResetFileUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileGid` <a name="ResetFileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileGid"></a>

```csharp
private void ResetFileGid()
```

##### `ResetFileMode` <a name="ResetFileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileMode"></a>

```csharp
private void ResetFileMode()
```

##### `ResetFileUid` <a name="ResetFileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileUid"></a>

```csharp
private void ResetFileUid()
```

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetSecretName"></a>

```csharp
private void ResetSecretName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileGidInput">FileGidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileModeInput">FileModeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileUidInput">FileUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileGid">FileGid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileMode">FileMode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileUid">FileUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileGidInput`<sup>Optional</sup> <a name="FileGidInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileGidInput"></a>

```csharp
public string FileGidInput { get; }
```

- *Type:* string

---

##### `FileModeInput`<sup>Optional</sup> <a name="FileModeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileModeInput"></a>

```csharp
public double FileModeInput { get; }
```

- *Type:* double

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileNameInput"></a>

```csharp
public string FileNameInput { get; }
```

- *Type:* string

---

##### `FileUidInput`<sup>Optional</sup> <a name="FileUidInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileUidInput"></a>

```csharp
public string FileUidInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `FileGid`<sup>Required</sup> <a name="FileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileGid"></a>

```csharp
public string FileGid { get; }
```

- *Type:* string

---

##### `FileMode`<sup>Required</sup> <a name="FileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileMode"></a>

```csharp
public double FileMode { get; }
```

- *Type:* double

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `FileUid`<sup>Required</sup> <a name="FileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileUid"></a>

```csharp
public string FileUid { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceTaskSpecLogDriverOutputReference <a name="ServiceTaskSpecLogDriverOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecLogDriverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpecLogDriver InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a>

---


### ServiceTaskSpecNetworksAdvancedList <a name="ServiceTaskSpecNetworksAdvancedList" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecNetworksAdvancedList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.get"></a>

```csharp
private ServiceTaskSpecNetworksAdvancedOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceTaskSpecNetworksAdvancedOutputReference <a name="ServiceTaskSpecNetworksAdvancedOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecNetworksAdvancedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resetAliases">ResetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resetDriverOpts">ResetDriverOpts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAliases` <a name="ResetAliases" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resetAliases"></a>

```csharp
private void ResetAliases()
```

##### `ResetDriverOpts` <a name="ResetDriverOpts" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resetDriverOpts"></a>

```csharp
private void ResetDriverOpts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.aliasesInput">AliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.driverOptsInput">DriverOptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.aliases">Aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.driverOpts">DriverOpts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasesInput`<sup>Optional</sup> <a name="AliasesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.aliasesInput"></a>

```csharp
public string[] AliasesInput { get; }
```

- *Type:* string[]

---

##### `DriverOptsInput`<sup>Optional</sup> <a name="DriverOptsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.driverOptsInput"></a>

```csharp
public string[] DriverOptsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.aliases"></a>

```csharp
public string[] Aliases { get; }
```

- *Type:* string[]

---

##### `DriverOpts`<sup>Required</sup> <a name="DriverOpts" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.driverOpts"></a>

```csharp
public string[] DriverOpts { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceTaskSpecOutputReference <a name="ServiceTaskSpecOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec">PutContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putLogDriver">PutLogDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putNetworksAdvanced">PutNetworksAdvanced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putPlacement">PutPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putRestartPolicy">PutRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetForceUpdate">ResetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetLogDriver">ResetLogDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetNetworksAdvanced">ResetNetworksAdvanced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetPlacement">ResetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetRestartPolicy">ResetRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetRuntime">ResetRuntime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerSpec` <a name="PutContainerSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec"></a>

```csharp
private void PutContainerSpec(ServiceTaskSpecContainerSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a>

---

##### `PutLogDriver` <a name="PutLogDriver" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putLogDriver"></a>

```csharp
private void PutLogDriver(ServiceTaskSpecLogDriver Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putLogDriver.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a>

---

##### `PutNetworksAdvanced` <a name="PutNetworksAdvanced" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putNetworksAdvanced"></a>

```csharp
private void PutNetworksAdvanced(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putNetworksAdvanced.parameter.value"></a>

- *Type:* object

---

##### `PutPlacement` <a name="PutPlacement" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putPlacement"></a>

```csharp
private void PutPlacement(ServiceTaskSpecPlacement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a>

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putResources"></a>

```csharp
private void PutResources(ServiceTaskSpecResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a>

---

##### `PutRestartPolicy` <a name="PutRestartPolicy" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putRestartPolicy"></a>

```csharp
private void PutRestartPolicy(ServiceTaskSpecRestartPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putRestartPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a>

---

##### `ResetForceUpdate` <a name="ResetForceUpdate" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetForceUpdate"></a>

```csharp
private void ResetForceUpdate()
```

##### `ResetLogDriver` <a name="ResetLogDriver" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetLogDriver"></a>

```csharp
private void ResetLogDriver()
```

##### `ResetNetworksAdvanced` <a name="ResetNetworksAdvanced" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetNetworksAdvanced"></a>

```csharp
private void ResetNetworksAdvanced()
```

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetPlacement"></a>

```csharp
private void ResetPlacement()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```

##### `ResetRestartPolicy` <a name="ResetRestartPolicy" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetRestartPolicy"></a>

```csharp
private void ResetRestartPolicy()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetRuntime"></a>

```csharp
private void ResetRuntime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.containerSpec">ContainerSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference">ServiceTaskSpecContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.logDriver">LogDriver</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference">ServiceTaskSpecLogDriverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.networksAdvanced">NetworksAdvanced</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList">ServiceTaskSpecNetworksAdvancedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference">ServiceTaskSpecPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference">ServiceTaskSpecResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.restartPolicy">RestartPolicy</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference">ServiceTaskSpecRestartPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.containerSpecInput">ContainerSpecInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.forceUpdateInput">ForceUpdateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.logDriverInput">LogDriverInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.networksAdvancedInput">NetworksAdvancedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.placementInput">PlacementInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.restartPolicyInput">RestartPolicyInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.forceUpdate">ForceUpdate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerSpec`<sup>Required</sup> <a name="ContainerSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.containerSpec"></a>

```csharp
public ServiceTaskSpecContainerSpecOutputReference ContainerSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference">ServiceTaskSpecContainerSpecOutputReference</a>

---

##### `LogDriver`<sup>Required</sup> <a name="LogDriver" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.logDriver"></a>

```csharp
public ServiceTaskSpecLogDriverOutputReference LogDriver { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference">ServiceTaskSpecLogDriverOutputReference</a>

---

##### `NetworksAdvanced`<sup>Required</sup> <a name="NetworksAdvanced" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.networksAdvanced"></a>

```csharp
public ServiceTaskSpecNetworksAdvancedList NetworksAdvanced { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList">ServiceTaskSpecNetworksAdvancedList</a>

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.placement"></a>

```csharp
public ServiceTaskSpecPlacementOutputReference Placement { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference">ServiceTaskSpecPlacementOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.resources"></a>

```csharp
public ServiceTaskSpecResourcesOutputReference Resources { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference">ServiceTaskSpecResourcesOutputReference</a>

---

##### `RestartPolicy`<sup>Required</sup> <a name="RestartPolicy" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.restartPolicy"></a>

```csharp
public ServiceTaskSpecRestartPolicyOutputReference RestartPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference">ServiceTaskSpecRestartPolicyOutputReference</a>

---

##### `ContainerSpecInput`<sup>Optional</sup> <a name="ContainerSpecInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.containerSpecInput"></a>

```csharp
public ServiceTaskSpecContainerSpec ContainerSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a>

---

##### `ForceUpdateInput`<sup>Optional</sup> <a name="ForceUpdateInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.forceUpdateInput"></a>

```csharp
public double ForceUpdateInput { get; }
```

- *Type:* double

---

##### `LogDriverInput`<sup>Optional</sup> <a name="LogDriverInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.logDriverInput"></a>

```csharp
public ServiceTaskSpecLogDriver LogDriverInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a>

---

##### `NetworksAdvancedInput`<sup>Optional</sup> <a name="NetworksAdvancedInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.networksAdvancedInput"></a>

```csharp
public object NetworksAdvancedInput { get; }
```

- *Type:* object

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.placementInput"></a>

```csharp
public ServiceTaskSpecPlacement PlacementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a>

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.resourcesInput"></a>

```csharp
public ServiceTaskSpecResources ResourcesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a>

---

##### `RestartPolicyInput`<sup>Optional</sup> <a name="RestartPolicyInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.restartPolicyInput"></a>

```csharp
public ServiceTaskSpecRestartPolicy RestartPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a>

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `ForceUpdate`<sup>Required</sup> <a name="ForceUpdate" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.forceUpdate"></a>

```csharp
public double ForceUpdate { get; }
```

- *Type:* double

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

---


### ServiceTaskSpecPlacementOutputReference <a name="ServiceTaskSpecPlacementOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecPlacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.putPlatforms">PutPlatforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetConstraints">ResetConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetMaxReplicas">ResetMaxReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetPlatforms">ResetPlatforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetPrefs">ResetPrefs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPlatforms` <a name="PutPlatforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.putPlatforms"></a>

```csharp
private void PutPlatforms(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.putPlatforms.parameter.value"></a>

- *Type:* object

---

##### `ResetConstraints` <a name="ResetConstraints" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetConstraints"></a>

```csharp
private void ResetConstraints()
```

##### `ResetMaxReplicas` <a name="ResetMaxReplicas" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetMaxReplicas"></a>

```csharp
private void ResetMaxReplicas()
```

##### `ResetPlatforms` <a name="ResetPlatforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetPlatforms"></a>

```csharp
private void ResetPlatforms()
```

##### `ResetPrefs` <a name="ResetPrefs" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetPrefs"></a>

```csharp
private void ResetPrefs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.platforms">Platforms</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList">ServiceTaskSpecPlacementPlatformsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.constraintsInput">ConstraintsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.maxReplicasInput">MaxReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.platformsInput">PlatformsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.prefsInput">PrefsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.constraints">Constraints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.maxReplicas">MaxReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.prefs">Prefs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Platforms`<sup>Required</sup> <a name="Platforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.platforms"></a>

```csharp
public ServiceTaskSpecPlacementPlatformsList Platforms { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList">ServiceTaskSpecPlacementPlatformsList</a>

---

##### `ConstraintsInput`<sup>Optional</sup> <a name="ConstraintsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.constraintsInput"></a>

```csharp
public string[] ConstraintsInput { get; }
```

- *Type:* string[]

---

##### `MaxReplicasInput`<sup>Optional</sup> <a name="MaxReplicasInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.maxReplicasInput"></a>

```csharp
public double MaxReplicasInput { get; }
```

- *Type:* double

---

##### `PlatformsInput`<sup>Optional</sup> <a name="PlatformsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.platformsInput"></a>

```csharp
public object PlatformsInput { get; }
```

- *Type:* object

---

##### `PrefsInput`<sup>Optional</sup> <a name="PrefsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.prefsInput"></a>

```csharp
public string[] PrefsInput { get; }
```

- *Type:* string[]

---

##### `Constraints`<sup>Required</sup> <a name="Constraints" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.constraints"></a>

```csharp
public string[] Constraints { get; }
```

- *Type:* string[]

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.maxReplicas"></a>

```csharp
public double MaxReplicas { get; }
```

- *Type:* double

---

##### `Prefs`<sup>Required</sup> <a name="Prefs" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.prefs"></a>

```csharp
public string[] Prefs { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpecPlacement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a>

---


### ServiceTaskSpecPlacementPlatformsList <a name="ServiceTaskSpecPlacementPlatformsList" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecPlacementPlatformsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.get"></a>

```csharp
private ServiceTaskSpecPlacementPlatformsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceTaskSpecPlacementPlatformsOutputReference <a name="ServiceTaskSpecPlacementPlatformsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecPlacementPlatformsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.architectureInput">ArchitectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.osInput">OsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.os">Os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchitectureInput`<sup>Optional</sup> <a name="ArchitectureInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.architectureInput"></a>

```csharp
public string ArchitectureInput { get; }
```

- *Type:* string

---

##### `OsInput`<sup>Optional</sup> <a name="OsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.osInput"></a>

```csharp
public string OsInput { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.os"></a>

```csharp
public string Os { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceTaskSpecResourcesLimitsOutputReference <a name="ServiceTaskSpecResourcesLimitsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecResourcesLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resetMemoryBytes">ResetMemoryBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resetNanoCpus">ResetNanoCpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryBytes` <a name="ResetMemoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resetMemoryBytes"></a>

```csharp
private void ResetMemoryBytes()
```

##### `ResetNanoCpus` <a name="ResetNanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resetNanoCpus"></a>

```csharp
private void ResetNanoCpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.memoryBytesInput">MemoryBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.nanoCpusInput">NanoCpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.memoryBytes">MemoryBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.nanoCpus">NanoCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemoryBytesInput`<sup>Optional</sup> <a name="MemoryBytesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.memoryBytesInput"></a>

```csharp
public double MemoryBytesInput { get; }
```

- *Type:* double

---

##### `NanoCpusInput`<sup>Optional</sup> <a name="NanoCpusInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.nanoCpusInput"></a>

```csharp
public double NanoCpusInput { get; }
```

- *Type:* double

---

##### `MemoryBytes`<sup>Required</sup> <a name="MemoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.memoryBytes"></a>

```csharp
public double MemoryBytes { get; }
```

- *Type:* double

---

##### `NanoCpus`<sup>Required</sup> <a name="NanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.nanoCpus"></a>

```csharp
public double NanoCpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpecResourcesLimits InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a>

---


### ServiceTaskSpecResourcesOutputReference <a name="ServiceTaskSpecResourcesOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putReservation">PutReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resetReservation">ResetReservation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLimits` <a name="PutLimits" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putLimits"></a>

```csharp
private void PutLimits(ServiceTaskSpecResourcesLimits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a>

---

##### `PutReservation` <a name="PutReservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putReservation"></a>

```csharp
private void PutReservation(ServiceTaskSpecResourcesReservation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a>

---

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resetLimits"></a>

```csharp
private void ResetLimits()
```

##### `ResetReservation` <a name="ResetReservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resetReservation"></a>

```csharp
private void ResetReservation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference">ServiceTaskSpecResourcesLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.reservation">Reservation</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference">ServiceTaskSpecResourcesReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.limitsInput">LimitsInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.reservationInput">ReservationInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.limits"></a>

```csharp
public ServiceTaskSpecResourcesLimitsOutputReference Limits { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference">ServiceTaskSpecResourcesLimitsOutputReference</a>

---

##### `Reservation`<sup>Required</sup> <a name="Reservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.reservation"></a>

```csharp
public ServiceTaskSpecResourcesReservationOutputReference Reservation { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference">ServiceTaskSpecResourcesReservationOutputReference</a>

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.limitsInput"></a>

```csharp
public ServiceTaskSpecResourcesLimits LimitsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a>

---

##### `ReservationInput`<sup>Optional</sup> <a name="ReservationInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.reservationInput"></a>

```csharp
public ServiceTaskSpecResourcesReservation ReservationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpecResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a>

---


### ServiceTaskSpecResourcesReservationGenericResourcesOutputReference <a name="ServiceTaskSpecResourcesReservationGenericResourcesOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecResourcesReservationGenericResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resetDiscreteResourcesSpec">ResetDiscreteResourcesSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resetNamedResourcesSpec">ResetNamedResourcesSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiscreteResourcesSpec` <a name="ResetDiscreteResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resetDiscreteResourcesSpec"></a>

```csharp
private void ResetDiscreteResourcesSpec()
```

##### `ResetNamedResourcesSpec` <a name="ResetNamedResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resetNamedResourcesSpec"></a>

```csharp
private void ResetNamedResourcesSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.discreteResourcesSpecInput">DiscreteResourcesSpecInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.namedResourcesSpecInput">NamedResourcesSpecInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.discreteResourcesSpec">DiscreteResourcesSpec</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.namedResourcesSpec">NamedResourcesSpec</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiscreteResourcesSpecInput`<sup>Optional</sup> <a name="DiscreteResourcesSpecInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.discreteResourcesSpecInput"></a>

```csharp
public string[] DiscreteResourcesSpecInput { get; }
```

- *Type:* string[]

---

##### `NamedResourcesSpecInput`<sup>Optional</sup> <a name="NamedResourcesSpecInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.namedResourcesSpecInput"></a>

```csharp
public string[] NamedResourcesSpecInput { get; }
```

- *Type:* string[]

---

##### `DiscreteResourcesSpec`<sup>Required</sup> <a name="DiscreteResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.discreteResourcesSpec"></a>

```csharp
public string[] DiscreteResourcesSpec { get; }
```

- *Type:* string[]

---

##### `NamedResourcesSpec`<sup>Required</sup> <a name="NamedResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.namedResourcesSpec"></a>

```csharp
public string[] NamedResourcesSpec { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpecResourcesReservationGenericResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a>

---


### ServiceTaskSpecResourcesReservationOutputReference <a name="ServiceTaskSpecResourcesReservationOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecResourcesReservationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.putGenericResources">PutGenericResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetGenericResources">ResetGenericResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetMemoryBytes">ResetMemoryBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetNanoCpus">ResetNanoCpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGenericResources` <a name="PutGenericResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.putGenericResources"></a>

```csharp
private void PutGenericResources(ServiceTaskSpecResourcesReservationGenericResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.putGenericResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a>

---

##### `ResetGenericResources` <a name="ResetGenericResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetGenericResources"></a>

```csharp
private void ResetGenericResources()
```

##### `ResetMemoryBytes` <a name="ResetMemoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetMemoryBytes"></a>

```csharp
private void ResetMemoryBytes()
```

##### `ResetNanoCpus` <a name="ResetNanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetNanoCpus"></a>

```csharp
private void ResetNanoCpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.genericResources">GenericResources</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference">ServiceTaskSpecResourcesReservationGenericResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.genericResourcesInput">GenericResourcesInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.memoryBytesInput">MemoryBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.nanoCpusInput">NanoCpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.memoryBytes">MemoryBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.nanoCpus">NanoCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GenericResources`<sup>Required</sup> <a name="GenericResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.genericResources"></a>

```csharp
public ServiceTaskSpecResourcesReservationGenericResourcesOutputReference GenericResources { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference">ServiceTaskSpecResourcesReservationGenericResourcesOutputReference</a>

---

##### `GenericResourcesInput`<sup>Optional</sup> <a name="GenericResourcesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.genericResourcesInput"></a>

```csharp
public ServiceTaskSpecResourcesReservationGenericResources GenericResourcesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a>

---

##### `MemoryBytesInput`<sup>Optional</sup> <a name="MemoryBytesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.memoryBytesInput"></a>

```csharp
public double MemoryBytesInput { get; }
```

- *Type:* double

---

##### `NanoCpusInput`<sup>Optional</sup> <a name="NanoCpusInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.nanoCpusInput"></a>

```csharp
public double NanoCpusInput { get; }
```

- *Type:* double

---

##### `MemoryBytes`<sup>Required</sup> <a name="MemoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.memoryBytes"></a>

```csharp
public double MemoryBytes { get; }
```

- *Type:* double

---

##### `NanoCpus`<sup>Required</sup> <a name="NanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.nanoCpus"></a>

```csharp
public double NanoCpus { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpecResourcesReservation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a>

---


### ServiceTaskSpecRestartPolicyOutputReference <a name="ServiceTaskSpecRestartPolicyOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceTaskSpecRestartPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetDelay">ResetDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetMaxAttempts">ResetMaxAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetWindow">ResetWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDelay` <a name="ResetDelay" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetDelay"></a>

```csharp
private void ResetDelay()
```

##### `ResetMaxAttempts` <a name="ResetMaxAttempts" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetMaxAttempts"></a>

```csharp
private void ResetMaxAttempts()
```

##### `ResetWindow` <a name="ResetWindow" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetWindow"></a>

```csharp
private void ResetWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.delayInput">DelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.maxAttemptsInput">MaxAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.windowInput">WindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.delay">Delay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.window">Window</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `DelayInput`<sup>Optional</sup> <a name="DelayInput" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.delayInput"></a>

```csharp
public string DelayInput { get; }
```

- *Type:* string

---

##### `MaxAttemptsInput`<sup>Optional</sup> <a name="MaxAttemptsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.maxAttemptsInput"></a>

```csharp
public double MaxAttemptsInput { get; }
```

- *Type:* double

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.windowInput"></a>

```csharp
public string WindowInput { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.delay"></a>

```csharp
public string Delay { get; }
```

- *Type:* string

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; }
```

- *Type:* double

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.window"></a>

```csharp
public string Window { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.internalValue"></a>

```csharp
public ServiceTaskSpecRestartPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a>

---


### ServiceUpdateConfigOutputReference <a name="ServiceUpdateConfigOutputReference" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ServiceUpdateConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetDelay">ResetDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetFailureAction">ResetFailureAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetMaxFailureRatio">ResetMaxFailureRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetMonitor">ResetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetParallelism">ResetParallelism</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelay` <a name="ResetDelay" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetDelay"></a>

```csharp
private void ResetDelay()
```

##### `ResetFailureAction` <a name="ResetFailureAction" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetFailureAction"></a>

```csharp
private void ResetFailureAction()
```

##### `ResetMaxFailureRatio` <a name="ResetMaxFailureRatio" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetMaxFailureRatio"></a>

```csharp
private void ResetMaxFailureRatio()
```

##### `ResetMonitor` <a name="ResetMonitor" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetMonitor"></a>

```csharp
private void ResetMonitor()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetParallelism` <a name="ResetParallelism" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetParallelism"></a>

```csharp
private void ResetParallelism()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.delayInput">DelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.failureActionInput">FailureActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.maxFailureRatioInput">MaxFailureRatioInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.monitorInput">MonitorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.parallelismInput">ParallelismInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.delay">Delay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.failureAction">FailureAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.maxFailureRatio">MaxFailureRatio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.monitor">Monitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.parallelism">Parallelism</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DelayInput`<sup>Optional</sup> <a name="DelayInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.delayInput"></a>

```csharp
public string DelayInput { get; }
```

- *Type:* string

---

##### `FailureActionInput`<sup>Optional</sup> <a name="FailureActionInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.failureActionInput"></a>

```csharp
public string FailureActionInput { get; }
```

- *Type:* string

---

##### `MaxFailureRatioInput`<sup>Optional</sup> <a name="MaxFailureRatioInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.maxFailureRatioInput"></a>

```csharp
public string MaxFailureRatioInput { get; }
```

- *Type:* string

---

##### `MonitorInput`<sup>Optional</sup> <a name="MonitorInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.monitorInput"></a>

```csharp
public string MonitorInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `ParallelismInput`<sup>Optional</sup> <a name="ParallelismInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.parallelismInput"></a>

```csharp
public double ParallelismInput { get; }
```

- *Type:* double

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.delay"></a>

```csharp
public string Delay { get; }
```

- *Type:* string

---

##### `FailureAction`<sup>Required</sup> <a name="FailureAction" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.failureAction"></a>

```csharp
public string FailureAction { get; }
```

- *Type:* string

---

##### `MaxFailureRatio`<sup>Required</sup> <a name="MaxFailureRatio" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.maxFailureRatio"></a>

```csharp
public string MaxFailureRatio { get; }
```

- *Type:* string

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.monitor"></a>

```csharp
public string Monitor { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `Parallelism`<sup>Required</sup> <a name="Parallelism" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.parallelism"></a>

```csharp
public double Parallelism { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.internalValue"></a>

```csharp
public ServiceUpdateConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

---



