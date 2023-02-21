# `dataDockerRegistryImage` Submodule <a name="`dataDockerRegistryImage` Submodule" id="@cdktf/provider-docker.dataDockerRegistryImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDockerRegistryImage <a name="DataDockerRegistryImage" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/d/registry_image docker_registry_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new DataDockerRegistryImage(Construct Scope, string Id, DataDockerRegistryImageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig">DataDockerRegistryImageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig">DataDockerRegistryImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.resetInsecureSkipVerify">ResetInsecureSkipVerify</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInsecureSkipVerify` <a name="ResetInsecureSkipVerify" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.resetInsecureSkipVerify"></a>

```csharp
private void ResetInsecureSkipVerify()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

DataDockerRegistryImage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

DataDockerRegistryImage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

DataDockerRegistryImage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.sha256Digest">Sha256Digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.insecureSkipVerifyInput">InsecureSkipVerifyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.insecureSkipVerify">InsecureSkipVerify</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Sha256Digest`<sup>Required</sup> <a name="Sha256Digest" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.sha256Digest"></a>

```csharp
public string Sha256Digest { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InsecureSkipVerifyInput`<sup>Optional</sup> <a name="InsecureSkipVerifyInput" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.insecureSkipVerifyInput"></a>

```csharp
public object InsecureSkipVerifyInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InsecureSkipVerify`<sup>Required</sup> <a name="InsecureSkipVerify" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.insecureSkipVerify"></a>

```csharp
public object InsecureSkipVerify { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDockerRegistryImageConfig <a name="DataDockerRegistryImageConfig" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new DataDockerRegistryImageConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    object InsecureSkipVerify = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.name">Name</a></code> | <code>string</code> | The name of the Docker image, including any tags. e.g. `alpine:latest`. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/d/registry_image#id DataDockerRegistryImage#id}. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.insecureSkipVerify">InsecureSkipVerify</a></code> | <code>object</code> | If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Docker image, including any tags. e.g. `alpine:latest`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/d/registry_image#name DataDockerRegistryImage#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/d/registry_image#id DataDockerRegistryImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsecureSkipVerify`<sup>Optional</sup> <a name="InsecureSkipVerify" id="@cdktf/provider-docker.dataDockerRegistryImage.DataDockerRegistryImageConfig.property.insecureSkipVerify"></a>

```csharp
public object InsecureSkipVerify { get; set; }
```

- *Type:* object

If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/d/registry_image#insecure_skip_verify DataDockerRegistryImage#insecure_skip_verify}

---



