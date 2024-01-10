# `dataDockerLogs` Submodule <a name="`dataDockerLogs` Submodule" id="@cdktf/provider-docker.dataDockerLogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDockerLogs <a name="DataDockerLogs" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs docker_logs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new DataDockerLogs(Construct Scope, string Id, DataDockerLogsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig">DataDockerLogsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig">DataDockerLogsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDetails">ResetDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDiscardHeaders">ResetDiscardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetFollow">ResetFollow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetLogsListStringEnabled">ResetLogsListStringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStderr">ResetShowStderr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStdout">ResetShowStdout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetSince">ResetSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTail">ResetTail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTimestamps">ResetTimestamps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetUntil">ResetUntil</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDetails` <a name="ResetDetails" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDetails"></a>

```csharp
private void ResetDetails()
```

##### `ResetDiscardHeaders` <a name="ResetDiscardHeaders" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDiscardHeaders"></a>

```csharp
private void ResetDiscardHeaders()
```

##### `ResetFollow` <a name="ResetFollow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetFollow"></a>

```csharp
private void ResetFollow()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogsListStringEnabled` <a name="ResetLogsListStringEnabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetLogsListStringEnabled"></a>

```csharp
private void ResetLogsListStringEnabled()
```

##### `ResetShowStderr` <a name="ResetShowStderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStderr"></a>

```csharp
private void ResetShowStderr()
```

##### `ResetShowStdout` <a name="ResetShowStdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStdout"></a>

```csharp
private void ResetShowStdout()
```

##### `ResetSince` <a name="ResetSince" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetSince"></a>

```csharp
private void ResetSince()
```

##### `ResetTail` <a name="ResetTail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTail"></a>

```csharp
private void ResetTail()
```

##### `ResetTimestamps` <a name="ResetTimestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTimestamps"></a>

```csharp
private void ResetTimestamps()
```

##### `ResetUntil` <a name="ResetUntil" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetUntil"></a>

```csharp
private void ResetUntil()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDockerLogs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

DataDockerLogs.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

DataDockerLogs.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

DataDockerLogs.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

DataDockerLogs.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDockerLogs resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDockerLogs to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDockerLogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDockerLogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListString">LogsListString</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.detailsInput">DetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeadersInput">DiscardHeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.followInput">FollowInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabledInput">LogsListStringEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderrInput">ShowStderrInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdoutInput">ShowStdoutInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.sinceInput">SinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tailInput">TailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestampsInput">TimestampsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.untilInput">UntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.details">Details</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeaders">DiscardHeaders</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.follow">Follow</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabled">LogsListStringEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderr">ShowStderr</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdout">ShowStdout</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.since">Since</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tail">Tail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestamps">Timestamps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.until">Until</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `LogsListString`<sup>Required</sup> <a name="LogsListString" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListString"></a>

```csharp
public string[] LogsListString { get; }
```

- *Type:* string[]

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.detailsInput"></a>

```csharp
public object DetailsInput { get; }
```

- *Type:* object

---

##### `DiscardHeadersInput`<sup>Optional</sup> <a name="DiscardHeadersInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeadersInput"></a>

```csharp
public object DiscardHeadersInput { get; }
```

- *Type:* object

---

##### `FollowInput`<sup>Optional</sup> <a name="FollowInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.followInput"></a>

```csharp
public object FollowInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogsListStringEnabledInput`<sup>Optional</sup> <a name="LogsListStringEnabledInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabledInput"></a>

```csharp
public object LogsListStringEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ShowStderrInput`<sup>Optional</sup> <a name="ShowStderrInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderrInput"></a>

```csharp
public object ShowStderrInput { get; }
```

- *Type:* object

---

##### `ShowStdoutInput`<sup>Optional</sup> <a name="ShowStdoutInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdoutInput"></a>

```csharp
public object ShowStdoutInput { get; }
```

- *Type:* object

---

##### `SinceInput`<sup>Optional</sup> <a name="SinceInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.sinceInput"></a>

```csharp
public string SinceInput { get; }
```

- *Type:* string

---

##### `TailInput`<sup>Optional</sup> <a name="TailInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tailInput"></a>

```csharp
public string TailInput { get; }
```

- *Type:* string

---

##### `TimestampsInput`<sup>Optional</sup> <a name="TimestampsInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestampsInput"></a>

```csharp
public object TimestampsInput { get; }
```

- *Type:* object

---

##### `UntilInput`<sup>Optional</sup> <a name="UntilInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.untilInput"></a>

```csharp
public string UntilInput { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.details"></a>

```csharp
public object Details { get; }
```

- *Type:* object

---

##### `DiscardHeaders`<sup>Required</sup> <a name="DiscardHeaders" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeaders"></a>

```csharp
public object DiscardHeaders { get; }
```

- *Type:* object

---

##### `Follow`<sup>Required</sup> <a name="Follow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.follow"></a>

```csharp
public object Follow { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogsListStringEnabled`<sup>Required</sup> <a name="LogsListStringEnabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabled"></a>

```csharp
public object LogsListStringEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ShowStderr`<sup>Required</sup> <a name="ShowStderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderr"></a>

```csharp
public object ShowStderr { get; }
```

- *Type:* object

---

##### `ShowStdout`<sup>Required</sup> <a name="ShowStdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdout"></a>

```csharp
public object ShowStdout { get; }
```

- *Type:* object

---

##### `Since`<sup>Required</sup> <a name="Since" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.since"></a>

```csharp
public string Since { get; }
```

- *Type:* string

---

##### `Tail`<sup>Required</sup> <a name="Tail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tail"></a>

```csharp
public string Tail { get; }
```

- *Type:* string

---

##### `Timestamps`<sup>Required</sup> <a name="Timestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestamps"></a>

```csharp
public object Timestamps { get; }
```

- *Type:* object

---

##### `Until`<sup>Required</sup> <a name="Until" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.until"></a>

```csharp
public string Until { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDockerLogsConfig <a name="DataDockerLogsConfig" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new DataDockerLogsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object Details = null,
    object DiscardHeaders = null,
    object Follow = null,
    string Id = null,
    object LogsListStringEnabled = null,
    object ShowStderr = null,
    object ShowStdout = null,
    string Since = null,
    string Tail = null,
    object Timestamps = null,
    string Until = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.name">Name</a></code> | <code>string</code> | The name of the Docker Container. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.details">Details</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#details DataDockerLogs#details}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.discardHeaders">DiscardHeaders</a></code> | <code>object</code> | Discard headers that docker appends to each log entry. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.follow">Follow</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#follow DataDockerLogs#follow}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#id DataDockerLogs#id}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.logsListStringEnabled">LogsListStringEnabled</a></code> | <code>object</code> | If true populate computed value `logs_list_string`. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStderr">ShowStderr</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#show_stderr DataDockerLogs#show_stderr}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStdout">ShowStdout</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#show_stdout DataDockerLogs#show_stdout}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.since">Since</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#since DataDockerLogs#since}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.tail">Tail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#tail DataDockerLogs#tail}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.timestamps">Timestamps</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#timestamps DataDockerLogs#timestamps}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.until">Until</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#until DataDockerLogs#until}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Docker Container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#name DataDockerLogs#name}

---

##### `Details`<sup>Optional</sup> <a name="Details" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.details"></a>

```csharp
public object Details { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#details DataDockerLogs#details}.

---

##### `DiscardHeaders`<sup>Optional</sup> <a name="DiscardHeaders" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.discardHeaders"></a>

```csharp
public object DiscardHeaders { get; set; }
```

- *Type:* object

Discard headers that docker appends to each log entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#discard_headers DataDockerLogs#discard_headers}

---

##### `Follow`<sup>Optional</sup> <a name="Follow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.follow"></a>

```csharp
public object Follow { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#follow DataDockerLogs#follow}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#id DataDockerLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogsListStringEnabled`<sup>Optional</sup> <a name="LogsListStringEnabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.logsListStringEnabled"></a>

```csharp
public object LogsListStringEnabled { get; set; }
```

- *Type:* object

If true populate computed value `logs_list_string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#logs_list_string_enabled DataDockerLogs#logs_list_string_enabled}

---

##### `ShowStderr`<sup>Optional</sup> <a name="ShowStderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStderr"></a>

```csharp
public object ShowStderr { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#show_stderr DataDockerLogs#show_stderr}.

---

##### `ShowStdout`<sup>Optional</sup> <a name="ShowStdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStdout"></a>

```csharp
public object ShowStdout { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#show_stdout DataDockerLogs#show_stdout}.

---

##### `Since`<sup>Optional</sup> <a name="Since" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.since"></a>

```csharp
public string Since { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#since DataDockerLogs#since}.

---

##### `Tail`<sup>Optional</sup> <a name="Tail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.tail"></a>

```csharp
public string Tail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#tail DataDockerLogs#tail}.

---

##### `Timestamps`<sup>Optional</sup> <a name="Timestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.timestamps"></a>

```csharp
public object Timestamps { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#timestamps DataDockerLogs#timestamps}.

---

##### `Until`<sup>Optional</sup> <a name="Until" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.until"></a>

```csharp
public string Until { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#until DataDockerLogs#until}.

---



