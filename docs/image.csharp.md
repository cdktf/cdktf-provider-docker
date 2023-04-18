# `docker_image`

Refer to the Terraform Registory for docs: [`docker_image`](https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image).

# `image` Submodule <a name="`image` Submodule" id="@cdktf/provider-docker.image"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Image <a name="Image" id="@cdktf/provider-docker.image.Image"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image docker_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.Image.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new Image(Construct Scope, string Id, ImageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageConfig">ImageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-docker.image.Image.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.image.Image.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-docker.image.Image.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.image.ImageConfig">ImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.image.Image.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.image.Image.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.image.Image.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.image.Image.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.putBuildAttribute">PutBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetBuildAttribute">ResetBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetForceRemove">ResetForceRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetKeepLocally">ResetKeepLocally</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetPullTriggers">ResetPullTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetTriggers">ResetTriggers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.image.Image.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-docker.image.Image.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-docker.image.Image.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.image.Image.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-docker.image.Image.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-docker.image.Image.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-docker.image.Image.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-docker.image.Image.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-docker.image.Image.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.image.Image.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.Image.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.image.Image.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.Image.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.image.Image.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.Image.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.image.Image.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.Image.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.image.Image.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.Image.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.image.Image.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.Image.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.image.Image.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.Image.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.image.Image.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.Image.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.image.Image.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.Image.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.image.Image.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.Image.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutBuildAttribute` <a name="PutBuildAttribute" id="@cdktf/provider-docker.image.Image.putBuildAttribute"></a>

```csharp
private void PutBuildAttribute(ImageBuild Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a>

---

##### `ResetBuildAttribute` <a name="ResetBuildAttribute" id="@cdktf/provider-docker.image.Image.resetBuildAttribute"></a>

```csharp
private void ResetBuildAttribute()
```

##### `ResetForceRemove` <a name="ResetForceRemove" id="@cdktf/provider-docker.image.Image.resetForceRemove"></a>

```csharp
private void ResetForceRemove()
```

##### `ResetKeepLocally` <a name="ResetKeepLocally" id="@cdktf/provider-docker.image.Image.resetKeepLocally"></a>

```csharp
private void ResetKeepLocally()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktf/provider-docker.image.Image.resetPlatform"></a>

```csharp
private void ResetPlatform()
```

##### `ResetPullTriggers` <a name="ResetPullTriggers" id="@cdktf/provider-docker.image.Image.resetPullTriggers"></a>

```csharp
private void ResetPullTriggers()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktf/provider-docker.image.Image.resetTriggers"></a>

```csharp
private void ResetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.image.Image.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-docker.image.Image.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

Image.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.image.Image.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-docker.image.Image.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

Image.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.image.Image.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-docker.image.Image.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

Image.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.image.Image.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.image.Image.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.buildAttribute">BuildAttribute</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference">ImageBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.repoDigest">RepoDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.buildAttributeInput">BuildAttributeInput</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.forceRemoveInput">ForceRemoveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.keepLocallyInput">KeepLocallyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.platformInput">PlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.pullTriggersInput">PullTriggersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.triggersInput">TriggersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.forceRemove">ForceRemove</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.keepLocally">KeepLocally</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.pullTriggers">PullTriggers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-docker.image.Image.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-docker.image.Image.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.image.Image.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-docker.image.Image.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-docker.image.Image.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-docker.image.Image.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-docker.image.Image.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.image.Image.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.image.Image.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.image.Image.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.image.Image.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.image.Image.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.image.Image.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.image.Image.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktf/provider-docker.image.Image.property.buildAttribute"></a>

```csharp
public ImageBuildOutputReference BuildAttribute { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuildOutputReference">ImageBuildOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.image.Image.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-docker.image.Image.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `RepoDigest`<sup>Required</sup> <a name="RepoDigest" id="@cdktf/provider-docker.image.Image.property.repoDigest"></a>

```csharp
public string RepoDigest { get; }
```

- *Type:* string

---

##### `BuildAttributeInput`<sup>Optional</sup> <a name="BuildAttributeInput" id="@cdktf/provider-docker.image.Image.property.buildAttributeInput"></a>

```csharp
public ImageBuild BuildAttributeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a>

---

##### `ForceRemoveInput`<sup>Optional</sup> <a name="ForceRemoveInput" id="@cdktf/provider-docker.image.Image.property.forceRemoveInput"></a>

```csharp
public object ForceRemoveInput { get; }
```

- *Type:* object

---

##### `KeepLocallyInput`<sup>Optional</sup> <a name="KeepLocallyInput" id="@cdktf/provider-docker.image.Image.property.keepLocallyInput"></a>

```csharp
public object KeepLocallyInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.image.Image.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-docker.image.Image.property.platformInput"></a>

```csharp
public string PlatformInput { get; }
```

- *Type:* string

---

##### `PullTriggersInput`<sup>Optional</sup> <a name="PullTriggersInput" id="@cdktf/provider-docker.image.Image.property.pullTriggersInput"></a>

```csharp
public string[] PullTriggersInput { get; }
```

- *Type:* string[]

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-docker.image.Image.property.triggersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TriggersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ForceRemove`<sup>Required</sup> <a name="ForceRemove" id="@cdktf/provider-docker.image.Image.property.forceRemove"></a>

```csharp
public object ForceRemove { get; }
```

- *Type:* object

---

##### `KeepLocally`<sup>Required</sup> <a name="KeepLocally" id="@cdktf/provider-docker.image.Image.property.keepLocally"></a>

```csharp
public object KeepLocally { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.image.Image.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-docker.image.Image.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `PullTriggers`<sup>Required</sup> <a name="PullTriggers" id="@cdktf/provider-docker.image.Image.property.pullTriggers"></a>

```csharp
public string[] PullTriggers { get; }
```

- *Type:* string[]

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-docker.image.Image.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-docker.image.Image.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImageBuild <a name="ImageBuild" id="@cdktf/provider-docker.image.ImageBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageBuild.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ImageBuild {
    string Context,
    object AuthConfig = null,
    System.Collections.Generic.IDictionary<string, string> BuildArg = null,
    System.Collections.Generic.IDictionary<string, string> BuildArgs = null,
    string BuildId = null,
    string[] CacheFrom = null,
    string CgroupParent = null,
    double CpuPeriod = null,
    double CpuQuota = null,
    string CpuSetCpus = null,
    string CpuSetMems = null,
    double CpuShares = null,
    string Dockerfile = null,
    string[] ExtraHosts = null,
    object ForceRemove = null,
    string Isolation = null,
    System.Collections.Generic.IDictionary<string, string> Label = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    double Memory = null,
    double MemorySwap = null,
    string NetworkMode = null,
    object NoCache = null,
    string Platform = null,
    object PullParent = null,
    string RemoteContext = null,
    object Remove = null,
    string[] SecurityOpt = null,
    string SessionId = null,
    double ShmSize = null,
    object Squash = null,
    object SuppressOutput = null,
    string[] Tag = null,
    string Target = null,
    object Ulimit = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.context">Context</a></code> | <code>string</code> | Value to specify the build context. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.authConfig">AuthConfig</a></code> | <code>object</code> | auth_config block. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.buildArg">BuildArg</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set build-time variables. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.buildArgs">BuildArgs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Pairs for build-time variables in the form TODO. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.buildId">BuildId</a></code> | <code>string</code> | BuildID is an optional identifier that can be passed together with the build request. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cacheFrom">CacheFrom</a></code> | <code>string[]</code> | Images to consider as cache sources. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cgroupParent">CgroupParent</a></code> | <code>string</code> | Optional parent cgroup for the container. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuPeriod">CpuPeriod</a></code> | <code>double</code> | The length of a CPU period in microseconds. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuQuota">CpuQuota</a></code> | <code>double</code> | Microseconds of CPU time that the container can get in a CPU period. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuSetCpus">CpuSetCpus</a></code> | <code>string</code> | CPUs in which to allow execution (e.g., `0-3`, `0`, `1`). |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuSetMems">CpuSetMems</a></code> | <code>string</code> | MEMs in which to allow execution (`0-3`, `0`, `1`). |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuShares">CpuShares</a></code> | <code>double</code> | CPU shares (relative weight). |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.dockerfile">Dockerfile</a></code> | <code>string</code> | Name of the Dockerfile. Defaults to `Dockerfile`. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.extraHosts">ExtraHosts</a></code> | <code>string[]</code> | A list of hostnames/IP mappings to add to the container’s /etc/hosts file. Specified in the form ["hostname:IP"]. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.forceRemove">ForceRemove</a></code> | <code>object</code> | Always remove intermediate containers. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.isolation">Isolation</a></code> | <code>string</code> | Isolation represents the isolation technology of a container. The supported values are. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.label">Label</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set metadata for an image. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined key/value metadata. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.memory">Memory</a></code> | <code>double</code> | Set memory limit for build. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.memorySwap">MemorySwap</a></code> | <code>double</code> | Total memory (memory + swap), -1 to enable unlimited swap. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.networkMode">NetworkMode</a></code> | <code>string</code> | Set the networking mode for the RUN instructions during build. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.noCache">NoCache</a></code> | <code>object</code> | Do not use the cache when building the image. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.platform">Platform</a></code> | <code>string</code> | Set platform if server is multi-platform capable. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.pullParent">PullParent</a></code> | <code>object</code> | Attempt to pull the image even if an older image exists locally. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.remoteContext">RemoteContext</a></code> | <code>string</code> | A Git repository URI or HTTP/HTTPS context URI. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.remove">Remove</a></code> | <code>object</code> | Remove intermediate containers after a successful build. Defaults to `true`. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.securityOpt">SecurityOpt</a></code> | <code>string[]</code> | The security options. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.sessionId">SessionId</a></code> | <code>string</code> | Set an ID for the build session. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.shmSize">ShmSize</a></code> | <code>double</code> | Size of /dev/shm in bytes. The size must be greater than 0. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.squash">Squash</a></code> | <code>object</code> | If true the new layers are squashed into a new image with a single new layer. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.suppressOutput">SuppressOutput</a></code> | <code>object</code> | Suppress the build output and print image ID on success. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.tag">Tag</a></code> | <code>string[]</code> | Name and optionally a tag in the 'name:tag' format. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.target">Target</a></code> | <code>string</code> | Set the target build stage to build. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.ulimit">Ulimit</a></code> | <code>object</code> | ulimit block. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.version">Version</a></code> | <code>string</code> | Version of the underlying builder to use. |

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.image.ImageBuild.property.context"></a>

```csharp
public string Context { get; set; }
```

- *Type:* string

Value to specify the build context.

Currently, only a `PATH` context is supported. You can use the helper function '${path.cwd}/context-dir'. Please see https://docs.docker.com/build/building/context/ for more information about build contexts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#context Image#context}

---

##### `AuthConfig`<sup>Optional</sup> <a name="AuthConfig" id="@cdktf/provider-docker.image.ImageBuild.property.authConfig"></a>

```csharp
public object AuthConfig { get; set; }
```

- *Type:* object

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#auth_config Image#auth_config}

---

##### `BuildArg`<sup>Optional</sup> <a name="BuildArg" id="@cdktf/provider-docker.image.ImageBuild.property.buildArg"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BuildArg { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set build-time variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#build_arg Image#build_arg}

---

##### `BuildArgs`<sup>Optional</sup> <a name="BuildArgs" id="@cdktf/provider-docker.image.ImageBuild.property.buildArgs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BuildArgs { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Pairs for build-time variables in the form TODO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#build_args Image#build_args}

---

##### `BuildId`<sup>Optional</sup> <a name="BuildId" id="@cdktf/provider-docker.image.ImageBuild.property.buildId"></a>

```csharp
public string BuildId { get; set; }
```

- *Type:* string

BuildID is an optional identifier that can be passed together with the build request.

The same identifier can be used to gracefully cancel the build with the cancel request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#build_id Image#build_id}

---

##### `CacheFrom`<sup>Optional</sup> <a name="CacheFrom" id="@cdktf/provider-docker.image.ImageBuild.property.cacheFrom"></a>

```csharp
public string[] CacheFrom { get; set; }
```

- *Type:* string[]

Images to consider as cache sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#cache_from Image#cache_from}

---

##### `CgroupParent`<sup>Optional</sup> <a name="CgroupParent" id="@cdktf/provider-docker.image.ImageBuild.property.cgroupParent"></a>

```csharp
public string CgroupParent { get; set; }
```

- *Type:* string

Optional parent cgroup for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#cgroup_parent Image#cgroup_parent}

---

##### `CpuPeriod`<sup>Optional</sup> <a name="CpuPeriod" id="@cdktf/provider-docker.image.ImageBuild.property.cpuPeriod"></a>

```csharp
public double CpuPeriod { get; set; }
```

- *Type:* double

The length of a CPU period in microseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#cpu_period Image#cpu_period}

---

##### `CpuQuota`<sup>Optional</sup> <a name="CpuQuota" id="@cdktf/provider-docker.image.ImageBuild.property.cpuQuota"></a>

```csharp
public double CpuQuota { get; set; }
```

- *Type:* double

Microseconds of CPU time that the container can get in a CPU period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#cpu_quota Image#cpu_quota}

---

##### `CpuSetCpus`<sup>Optional</sup> <a name="CpuSetCpus" id="@cdktf/provider-docker.image.ImageBuild.property.cpuSetCpus"></a>

```csharp
public string CpuSetCpus { get; set; }
```

- *Type:* string

CPUs in which to allow execution (e.g., `0-3`, `0`, `1`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#cpu_set_cpus Image#cpu_set_cpus}

---

##### `CpuSetMems`<sup>Optional</sup> <a name="CpuSetMems" id="@cdktf/provider-docker.image.ImageBuild.property.cpuSetMems"></a>

```csharp
public string CpuSetMems { get; set; }
```

- *Type:* string

MEMs in which to allow execution (`0-3`, `0`, `1`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#cpu_set_mems Image#cpu_set_mems}

---

##### `CpuShares`<sup>Optional</sup> <a name="CpuShares" id="@cdktf/provider-docker.image.ImageBuild.property.cpuShares"></a>

```csharp
public double CpuShares { get; set; }
```

- *Type:* double

CPU shares (relative weight).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#cpu_shares Image#cpu_shares}

---

##### `Dockerfile`<sup>Optional</sup> <a name="Dockerfile" id="@cdktf/provider-docker.image.ImageBuild.property.dockerfile"></a>

```csharp
public string Dockerfile { get; set; }
```

- *Type:* string

Name of the Dockerfile. Defaults to `Dockerfile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#dockerfile Image#dockerfile}

---

##### `ExtraHosts`<sup>Optional</sup> <a name="ExtraHosts" id="@cdktf/provider-docker.image.ImageBuild.property.extraHosts"></a>

```csharp
public string[] ExtraHosts { get; set; }
```

- *Type:* string[]

A list of hostnames/IP mappings to add to the container’s /etc/hosts file. Specified in the form ["hostname:IP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#extra_hosts Image#extra_hosts}

---

##### `ForceRemove`<sup>Optional</sup> <a name="ForceRemove" id="@cdktf/provider-docker.image.ImageBuild.property.forceRemove"></a>

```csharp
public object ForceRemove { get; set; }
```

- *Type:* object

Always remove intermediate containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#force_remove Image#force_remove}

---

##### `Isolation`<sup>Optional</sup> <a name="Isolation" id="@cdktf/provider-docker.image.ImageBuild.property.isolation"></a>

```csharp
public string Isolation { get; set; }
```

- *Type:* string

Isolation represents the isolation technology of a container. The supported values are.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#isolation Image#isolation}

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-docker.image.ImageBuild.property.label"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Label { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set metadata for an image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#label Image#label}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-docker.image.ImageBuild.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined key/value metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#labels Image#labels}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-docker.image.ImageBuild.property.memory"></a>

```csharp
public double Memory { get; set; }
```

- *Type:* double

Set memory limit for build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#memory Image#memory}

---

##### `MemorySwap`<sup>Optional</sup> <a name="MemorySwap" id="@cdktf/provider-docker.image.ImageBuild.property.memorySwap"></a>

```csharp
public double MemorySwap { get; set; }
```

- *Type:* double

Total memory (memory + swap), -1 to enable unlimited swap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#memory_swap Image#memory_swap}

---

##### `NetworkMode`<sup>Optional</sup> <a name="NetworkMode" id="@cdktf/provider-docker.image.ImageBuild.property.networkMode"></a>

```csharp
public string NetworkMode { get; set; }
```

- *Type:* string

Set the networking mode for the RUN instructions during build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#network_mode Image#network_mode}

---

##### `NoCache`<sup>Optional</sup> <a name="NoCache" id="@cdktf/provider-docker.image.ImageBuild.property.noCache"></a>

```csharp
public object NoCache { get; set; }
```

- *Type:* object

Do not use the cache when building the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#no_cache Image#no_cache}

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktf/provider-docker.image.ImageBuild.property.platform"></a>

```csharp
public string Platform { get; set; }
```

- *Type:* string

Set platform if server is multi-platform capable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#platform Image#platform}

---

##### `PullParent`<sup>Optional</sup> <a name="PullParent" id="@cdktf/provider-docker.image.ImageBuild.property.pullParent"></a>

```csharp
public object PullParent { get; set; }
```

- *Type:* object

Attempt to pull the image even if an older image exists locally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#pull_parent Image#pull_parent}

---

##### `RemoteContext`<sup>Optional</sup> <a name="RemoteContext" id="@cdktf/provider-docker.image.ImageBuild.property.remoteContext"></a>

```csharp
public string RemoteContext { get; set; }
```

- *Type:* string

A Git repository URI or HTTP/HTTPS context URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#remote_context Image#remote_context}

---

##### `Remove`<sup>Optional</sup> <a name="Remove" id="@cdktf/provider-docker.image.ImageBuild.property.remove"></a>

```csharp
public object Remove { get; set; }
```

- *Type:* object

Remove intermediate containers after a successful build. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#remove Image#remove}

---

##### `SecurityOpt`<sup>Optional</sup> <a name="SecurityOpt" id="@cdktf/provider-docker.image.ImageBuild.property.securityOpt"></a>

```csharp
public string[] SecurityOpt { get; set; }
```

- *Type:* string[]

The security options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#security_opt Image#security_opt}

---

##### `SessionId`<sup>Optional</sup> <a name="SessionId" id="@cdktf/provider-docker.image.ImageBuild.property.sessionId"></a>

```csharp
public string SessionId { get; set; }
```

- *Type:* string

Set an ID for the build session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#session_id Image#session_id}

---

##### `ShmSize`<sup>Optional</sup> <a name="ShmSize" id="@cdktf/provider-docker.image.ImageBuild.property.shmSize"></a>

```csharp
public double ShmSize { get; set; }
```

- *Type:* double

Size of /dev/shm in bytes. The size must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#shm_size Image#shm_size}

---

##### `Squash`<sup>Optional</sup> <a name="Squash" id="@cdktf/provider-docker.image.ImageBuild.property.squash"></a>

```csharp
public object Squash { get; set; }
```

- *Type:* object

If true the new layers are squashed into a new image with a single new layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#squash Image#squash}

---

##### `SuppressOutput`<sup>Optional</sup> <a name="SuppressOutput" id="@cdktf/provider-docker.image.ImageBuild.property.suppressOutput"></a>

```csharp
public object SuppressOutput { get; set; }
```

- *Type:* object

Suppress the build output and print image ID on success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#suppress_output Image#suppress_output}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-docker.image.ImageBuild.property.tag"></a>

```csharp
public string[] Tag { get; set; }
```

- *Type:* string[]

Name and optionally a tag in the 'name:tag' format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#tag Image#tag}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-docker.image.ImageBuild.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Set the target build stage to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#target Image#target}

---

##### `Ulimit`<sup>Optional</sup> <a name="Ulimit" id="@cdktf/provider-docker.image.ImageBuild.property.ulimit"></a>

```csharp
public object Ulimit { get; set; }
```

- *Type:* object

ulimit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#ulimit Image#ulimit}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-docker.image.ImageBuild.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Version of the underlying builder to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#version Image#version}

---

### ImageBuildAuthConfig <a name="ImageBuildAuthConfig" id="@cdktf/provider-docker.image.ImageBuildAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ImageBuildAuthConfig {
    string HostName,
    string Auth = null,
    string Email = null,
    string IdentityToken = null,
    string Password = null,
    string RegistryToken = null,
    string ServerAddress = null,
    string UserName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.hostName">HostName</a></code> | <code>string</code> | hostname of the registry. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.auth">Auth</a></code> | <code>string</code> | the auth token. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.email">Email</a></code> | <code>string</code> | the user emal. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.identityToken">IdentityToken</a></code> | <code>string</code> | the identity token. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.password">Password</a></code> | <code>string</code> | the registry password. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.registryToken">RegistryToken</a></code> | <code>string</code> | the registry token. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.serverAddress">ServerAddress</a></code> | <code>string</code> | the server address. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.userName">UserName</a></code> | <code>string</code> | the registry user name. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

hostname of the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#host_name Image#host_name}

---

##### `Auth`<sup>Optional</sup> <a name="Auth" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.auth"></a>

```csharp
public string Auth { get; set; }
```

- *Type:* string

the auth token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#auth Image#auth}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

the user emal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#email Image#email}

---

##### `IdentityToken`<sup>Optional</sup> <a name="IdentityToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.identityToken"></a>

```csharp
public string IdentityToken { get; set; }
```

- *Type:* string

the identity token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#identity_token Image#identity_token}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

the registry password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#password Image#password}

---

##### `RegistryToken`<sup>Optional</sup> <a name="RegistryToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.registryToken"></a>

```csharp
public string RegistryToken { get; set; }
```

- *Type:* string

the registry token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#registry_token Image#registry_token}

---

##### `ServerAddress`<sup>Optional</sup> <a name="ServerAddress" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.serverAddress"></a>

```csharp
public string ServerAddress { get; set; }
```

- *Type:* string

the server address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#server_address Image#server_address}

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

the registry user name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#user_name Image#user_name}

---

### ImageBuildUlimit <a name="ImageBuildUlimit" id="@cdktf/provider-docker.image.ImageBuildUlimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageBuildUlimit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ImageBuildUlimit {
    double Hard,
    string Name,
    double Soft
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimit.property.hard">Hard</a></code> | <code>double</code> | soft limit. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimit.property.name">Name</a></code> | <code>string</code> | type of ulimit, e.g. `nofile`. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimit.property.soft">Soft</a></code> | <code>double</code> | hard limit. |

---

##### `Hard`<sup>Required</sup> <a name="Hard" id="@cdktf/provider-docker.image.ImageBuildUlimit.property.hard"></a>

```csharp
public double Hard { get; set; }
```

- *Type:* double

soft limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#hard Image#hard}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.image.ImageBuildUlimit.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

type of ulimit, e.g. `nofile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#name Image#name}

---

##### `Soft`<sup>Required</sup> <a name="Soft" id="@cdktf/provider-docker.image.ImageBuildUlimit.property.soft"></a>

```csharp
public double Soft { get; set; }
```

- *Type:* double

hard limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#soft Image#soft}

---

### ImageConfig <a name="ImageConfig" id="@cdktf/provider-docker.image.ImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ImageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    ImageBuild BuildAttribute = null,
    object ForceRemove = null,
    object KeepLocally = null,
    string Platform = null,
    string[] PullTriggers = null,
    System.Collections.Generic.IDictionary<string, string> Triggers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.name">Name</a></code> | <code>string</code> | The name of the Docker image, including any tags or SHA256 repo digests. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.buildAttribute">BuildAttribute</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a></code> | build block. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.forceRemove">ForceRemove</a></code> | <code>object</code> | If true, then the image is removed forcibly when the resource is destroyed. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.keepLocally">KeepLocally</a></code> | <code>object</code> | If true, then the Docker image won't be deleted on destroy operation. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.platform">Platform</a></code> | <code>string</code> | The platform to use when pulling the image. Defaults to the platform of the current machine. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.pullTriggers">PullTriggers</a></code> | <code>string[]</code> | List of values which cause an image pull when changed. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of arbitrary strings that, when changed, will force the `docker_image` resource to be replaced. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.image.ImageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.image.ImageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.image.ImageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.image.ImageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.image.ImageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.image.ImageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.image.ImageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.image.ImageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Docker image, including any tags or SHA256 repo digests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#name Image#name}

---

##### `BuildAttribute`<sup>Optional</sup> <a name="BuildAttribute" id="@cdktf/provider-docker.image.ImageConfig.property.buildAttribute"></a>

```csharp
public ImageBuild BuildAttribute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a>

build block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#build Image#build}

---

##### `ForceRemove`<sup>Optional</sup> <a name="ForceRemove" id="@cdktf/provider-docker.image.ImageConfig.property.forceRemove"></a>

```csharp
public object ForceRemove { get; set; }
```

- *Type:* object

If true, then the image is removed forcibly when the resource is destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#force_remove Image#force_remove}

---

##### `KeepLocally`<sup>Optional</sup> <a name="KeepLocally" id="@cdktf/provider-docker.image.ImageConfig.property.keepLocally"></a>

```csharp
public object KeepLocally { get; set; }
```

- *Type:* object

If true, then the Docker image won't be deleted on destroy operation.

If this is false, it will delete the image from the docker local storage on destroy operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#keep_locally Image#keep_locally}

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktf/provider-docker.image.ImageConfig.property.platform"></a>

```csharp
public string Platform { get; set; }
```

- *Type:* string

The platform to use when pulling the image. Defaults to the platform of the current machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#platform Image#platform}

---

##### `PullTriggers`<sup>Optional</sup> <a name="PullTriggers" id="@cdktf/provider-docker.image.ImageConfig.property.pullTriggers"></a>

```csharp
public string[] PullTriggers { get; set; }
```

- *Type:* string[]

List of values which cause an image pull when changed.

This is used to store the image digest from the registry when using the [docker_registry_image](../data-sources/registry_image.md).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#pull_triggers Image#pull_triggers}

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktf/provider-docker.image.ImageConfig.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of arbitrary strings that, when changed, will force the `docker_image` resource to be replaced.

This can be used to rebuild an image when contents of source code folders change

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/image#triggers Image#triggers}

---

## Classes <a name="Classes" id="Classes"></a>

### ImageBuildAuthConfigList <a name="ImageBuildAuthConfigList" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ImageBuildAuthConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.get"></a>

```csharp
private ImageBuildAuthConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImageBuildAuthConfigOutputReference <a name="ImageBuildAuthConfigOutputReference" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ImageBuildAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuth` <a name="ResetAuth" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetAuth"></a>

```csharp
private void ResetAuth()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetIdentityToken` <a name="ResetIdentityToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetIdentityToken"></a>

```csharp
private void ResetIdentityToken()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetRegistryToken` <a name="ResetRegistryToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetRegistryToken"></a>

```csharp
private void ResetRegistryToken()
```

##### `ResetServerAddress` <a name="ResetServerAddress" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetServerAddress"></a>

```csharp
private void ResetServerAddress()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetUserName"></a>

```csharp
private void ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.authInput">AuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.identityTokenInput">IdentityTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.registryTokenInput">RegistryTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.serverAddressInput">ServerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.auth">Auth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.identityToken">IdentityToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.registryToken">RegistryToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.serverAddress">ServerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthInput`<sup>Optional</sup> <a name="AuthInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.authInput"></a>

```csharp
public string AuthInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `IdentityTokenInput`<sup>Optional</sup> <a name="IdentityTokenInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.identityTokenInput"></a>

```csharp
public string IdentityTokenInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RegistryTokenInput`<sup>Optional</sup> <a name="RegistryTokenInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.registryTokenInput"></a>

```csharp
public string RegistryTokenInput { get; }
```

- *Type:* string

---

##### `ServerAddressInput`<sup>Optional</sup> <a name="ServerAddressInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.serverAddressInput"></a>

```csharp
public string ServerAddressInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.auth"></a>

```csharp
public string Auth { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `IdentityToken`<sup>Required</sup> <a name="IdentityToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.identityToken"></a>

```csharp
public string IdentityToken { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `RegistryToken`<sup>Required</sup> <a name="RegistryToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.registryToken"></a>

```csharp
public string RegistryToken { get; }
```

- *Type:* string

---

##### `ServerAddress`<sup>Required</sup> <a name="ServerAddress" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.serverAddress"></a>

```csharp
public string ServerAddress { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImageBuildOutputReference <a name="ImageBuildOutputReference" id="@cdktf/provider-docker.image.ImageBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ImageBuildOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.putUlimit">PutUlimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetAuthConfig">ResetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildArg">ResetBuildArg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildArgs">ResetBuildArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildId">ResetBuildId</a></code> | *No description.* |
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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.image.ImageBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.image.ImageBuildOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthConfig` <a name="PutAuthConfig" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putAuthConfig"></a>

```csharp
private void PutAuthConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putAuthConfig.parameter.value"></a>

- *Type:* object

---

##### `PutUlimit` <a name="PutUlimit" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putUlimit"></a>

```csharp
private void PutUlimit(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putUlimit.parameter.value"></a>

- *Type:* object

---

##### `ResetAuthConfig` <a name="ResetAuthConfig" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetAuthConfig"></a>

```csharp
private void ResetAuthConfig()
```

##### `ResetBuildArg` <a name="ResetBuildArg" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildArg"></a>

```csharp
private void ResetBuildArg()
```

##### `ResetBuildArgs` <a name="ResetBuildArgs" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildArgs"></a>

```csharp
private void ResetBuildArgs()
```

##### `ResetBuildId` <a name="ResetBuildId" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildId"></a>

```csharp
private void ResetBuildId()
```

##### `ResetCacheFrom` <a name="ResetCacheFrom" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCacheFrom"></a>

```csharp
private void ResetCacheFrom()
```

##### `ResetCgroupParent` <a name="ResetCgroupParent" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCgroupParent"></a>

```csharp
private void ResetCgroupParent()
```

##### `ResetCpuPeriod` <a name="ResetCpuPeriod" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuPeriod"></a>

```csharp
private void ResetCpuPeriod()
```

##### `ResetCpuQuota` <a name="ResetCpuQuota" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuQuota"></a>

```csharp
private void ResetCpuQuota()
```

##### `ResetCpuSetCpus` <a name="ResetCpuSetCpus" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuSetCpus"></a>

```csharp
private void ResetCpuSetCpus()
```

##### `ResetCpuSetMems` <a name="ResetCpuSetMems" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuSetMems"></a>

```csharp
private void ResetCpuSetMems()
```

##### `ResetCpuShares` <a name="ResetCpuShares" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuShares"></a>

```csharp
private void ResetCpuShares()
```

##### `ResetDockerfile` <a name="ResetDockerfile" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetDockerfile"></a>

```csharp
private void ResetDockerfile()
```

##### `ResetExtraHosts` <a name="ResetExtraHosts" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetExtraHosts"></a>

```csharp
private void ResetExtraHosts()
```

##### `ResetForceRemove` <a name="ResetForceRemove" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetForceRemove"></a>

```csharp
private void ResetForceRemove()
```

##### `ResetIsolation` <a name="ResetIsolation" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetIsolation"></a>

```csharp
private void ResetIsolation()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetLabel"></a>

```csharp
private void ResetLabel()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetMemory"></a>

```csharp
private void ResetMemory()
```

##### `ResetMemorySwap` <a name="ResetMemorySwap" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetMemorySwap"></a>

```csharp
private void ResetMemorySwap()
```

##### `ResetNetworkMode` <a name="ResetNetworkMode" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetNetworkMode"></a>

```csharp
private void ResetNetworkMode()
```

##### `ResetNoCache` <a name="ResetNoCache" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetNoCache"></a>

```csharp
private void ResetNoCache()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetPlatform"></a>

```csharp
private void ResetPlatform()
```

##### `ResetPullParent` <a name="ResetPullParent" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetPullParent"></a>

```csharp
private void ResetPullParent()
```

##### `ResetRemoteContext` <a name="ResetRemoteContext" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetRemoteContext"></a>

```csharp
private void ResetRemoteContext()
```

##### `ResetRemove` <a name="ResetRemove" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetRemove"></a>

```csharp
private void ResetRemove()
```

##### `ResetSecurityOpt` <a name="ResetSecurityOpt" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSecurityOpt"></a>

```csharp
private void ResetSecurityOpt()
```

##### `ResetSessionId` <a name="ResetSessionId" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSessionId"></a>

```csharp
private void ResetSessionId()
```

##### `ResetShmSize` <a name="ResetShmSize" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetShmSize"></a>

```csharp
private void ResetShmSize()
```

##### `ResetSquash` <a name="ResetSquash" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSquash"></a>

```csharp
private void ResetSquash()
```

##### `ResetSuppressOutput` <a name="ResetSuppressOutput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSuppressOutput"></a>

```csharp
private void ResetSuppressOutput()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetUlimit` <a name="ResetUlimit" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetUlimit"></a>

```csharp
private void ResetUlimit()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList">ImageBuildAuthConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.ulimit">Ulimit</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList">ImageBuildUlimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.authConfigInput">AuthConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgInput">BuildArgInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgsInput">BuildArgsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildIdInput">BuildIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cacheFromInput">CacheFromInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cgroupParentInput">CgroupParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.contextInput">ContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuPeriodInput">CpuPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuQuotaInput">CpuQuotaInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetCpusInput">CpuSetCpusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetMemsInput">CpuSetMemsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSharesInput">CpuSharesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.dockerfileInput">DockerfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.extraHostsInput">ExtraHostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.forceRemoveInput">ForceRemoveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.isolationInput">IsolationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.labelInput">LabelInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.memoryInput">MemoryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.memorySwapInput">MemorySwapInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.networkModeInput">NetworkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.noCacheInput">NoCacheInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.platformInput">PlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.pullParentInput">PullParentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.remoteContextInput">RemoteContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.removeInput">RemoveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.securityOptInput">SecurityOptInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.sessionIdInput">SessionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.shmSizeInput">ShmSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.squashInput">SquashInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.suppressOutputInput">SuppressOutputInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.tagInput">TagInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.ulimitInput">UlimitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArg">BuildArg</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgs">BuildArgs</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildId">BuildId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cacheFrom">CacheFrom</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cgroupParent">CgroupParent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.context">Context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuPeriod">CpuPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuQuota">CpuQuota</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetCpus">CpuSetCpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetMems">CpuSetMems</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuShares">CpuShares</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.dockerfile">Dockerfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.extraHosts">ExtraHosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.forceRemove">ForceRemove</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.isolation">Isolation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.label">Label</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.memory">Memory</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.memorySwap">MemorySwap</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.networkMode">NetworkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.noCache">NoCache</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.pullParent">PullParent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.remoteContext">RemoteContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.remove">Remove</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.securityOpt">SecurityOpt</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.sessionId">SessionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.shmSize">ShmSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.squash">Squash</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.suppressOutput">SuppressOutput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.tag">Tag</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthConfig`<sup>Required</sup> <a name="AuthConfig" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.authConfig"></a>

```csharp
public ImageBuildAuthConfigList AuthConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList">ImageBuildAuthConfigList</a>

---

##### `Ulimit`<sup>Required</sup> <a name="Ulimit" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.ulimit"></a>

```csharp
public ImageBuildUlimitList Ulimit { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuildUlimitList">ImageBuildUlimitList</a>

---

##### `AuthConfigInput`<sup>Optional</sup> <a name="AuthConfigInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.authConfigInput"></a>

```csharp
public object AuthConfigInput { get; }
```

- *Type:* object

---

##### `BuildArgInput`<sup>Optional</sup> <a name="BuildArgInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BuildArgInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BuildArgsInput`<sup>Optional</sup> <a name="BuildArgsInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BuildArgsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BuildIdInput`<sup>Optional</sup> <a name="BuildIdInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildIdInput"></a>

```csharp
public string BuildIdInput { get; }
```

- *Type:* string

---

##### `CacheFromInput`<sup>Optional</sup> <a name="CacheFromInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cacheFromInput"></a>

```csharp
public string[] CacheFromInput { get; }
```

- *Type:* string[]

---

##### `CgroupParentInput`<sup>Optional</sup> <a name="CgroupParentInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cgroupParentInput"></a>

```csharp
public string CgroupParentInput { get; }
```

- *Type:* string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.contextInput"></a>

```csharp
public string ContextInput { get; }
```

- *Type:* string

---

##### `CpuPeriodInput`<sup>Optional</sup> <a name="CpuPeriodInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuPeriodInput"></a>

```csharp
public double CpuPeriodInput { get; }
```

- *Type:* double

---

##### `CpuQuotaInput`<sup>Optional</sup> <a name="CpuQuotaInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuQuotaInput"></a>

```csharp
public double CpuQuotaInput { get; }
```

- *Type:* double

---

##### `CpuSetCpusInput`<sup>Optional</sup> <a name="CpuSetCpusInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetCpusInput"></a>

```csharp
public string CpuSetCpusInput { get; }
```

- *Type:* string

---

##### `CpuSetMemsInput`<sup>Optional</sup> <a name="CpuSetMemsInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetMemsInput"></a>

```csharp
public string CpuSetMemsInput { get; }
```

- *Type:* string

---

##### `CpuSharesInput`<sup>Optional</sup> <a name="CpuSharesInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSharesInput"></a>

```csharp
public double CpuSharesInput { get; }
```

- *Type:* double

---

##### `DockerfileInput`<sup>Optional</sup> <a name="DockerfileInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.dockerfileInput"></a>

```csharp
public string DockerfileInput { get; }
```

- *Type:* string

---

##### `ExtraHostsInput`<sup>Optional</sup> <a name="ExtraHostsInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.extraHostsInput"></a>

```csharp
public string[] ExtraHostsInput { get; }
```

- *Type:* string[]

---

##### `ForceRemoveInput`<sup>Optional</sup> <a name="ForceRemoveInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.forceRemoveInput"></a>

```csharp
public object ForceRemoveInput { get; }
```

- *Type:* object

---

##### `IsolationInput`<sup>Optional</sup> <a name="IsolationInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.isolationInput"></a>

```csharp
public string IsolationInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.labelInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.memoryInput"></a>

```csharp
public double MemoryInput { get; }
```

- *Type:* double

---

##### `MemorySwapInput`<sup>Optional</sup> <a name="MemorySwapInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.memorySwapInput"></a>

```csharp
public double MemorySwapInput { get; }
```

- *Type:* double

---

##### `NetworkModeInput`<sup>Optional</sup> <a name="NetworkModeInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.networkModeInput"></a>

```csharp
public string NetworkModeInput { get; }
```

- *Type:* string

---

##### `NoCacheInput`<sup>Optional</sup> <a name="NoCacheInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.noCacheInput"></a>

```csharp
public object NoCacheInput { get; }
```

- *Type:* object

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.platformInput"></a>

```csharp
public string PlatformInput { get; }
```

- *Type:* string

---

##### `PullParentInput`<sup>Optional</sup> <a name="PullParentInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.pullParentInput"></a>

```csharp
public object PullParentInput { get; }
```

- *Type:* object

---

##### `RemoteContextInput`<sup>Optional</sup> <a name="RemoteContextInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.remoteContextInput"></a>

```csharp
public string RemoteContextInput { get; }
```

- *Type:* string

---

##### `RemoveInput`<sup>Optional</sup> <a name="RemoveInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.removeInput"></a>

```csharp
public object RemoveInput { get; }
```

- *Type:* object

---

##### `SecurityOptInput`<sup>Optional</sup> <a name="SecurityOptInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.securityOptInput"></a>

```csharp
public string[] SecurityOptInput { get; }
```

- *Type:* string[]

---

##### `SessionIdInput`<sup>Optional</sup> <a name="SessionIdInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.sessionIdInput"></a>

```csharp
public string SessionIdInput { get; }
```

- *Type:* string

---

##### `ShmSizeInput`<sup>Optional</sup> <a name="ShmSizeInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.shmSizeInput"></a>

```csharp
public double ShmSizeInput { get; }
```

- *Type:* double

---

##### `SquashInput`<sup>Optional</sup> <a name="SquashInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.squashInput"></a>

```csharp
public object SquashInput { get; }
```

- *Type:* object

---

##### `SuppressOutputInput`<sup>Optional</sup> <a name="SuppressOutputInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.suppressOutputInput"></a>

```csharp
public object SuppressOutputInput { get; }
```

- *Type:* object

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.tagInput"></a>

```csharp
public string[] TagInput { get; }
```

- *Type:* string[]

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `UlimitInput`<sup>Optional</sup> <a name="UlimitInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.ulimitInput"></a>

```csharp
public object UlimitInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `BuildArg`<sup>Required</sup> <a name="BuildArg" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArg"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BuildArg { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BuildArgs`<sup>Required</sup> <a name="BuildArgs" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgs"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> BuildArgs { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BuildId`<sup>Required</sup> <a name="BuildId" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildId"></a>

```csharp
public string BuildId { get; }
```

- *Type:* string

---

##### `CacheFrom`<sup>Required</sup> <a name="CacheFrom" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cacheFrom"></a>

```csharp
public string[] CacheFrom { get; }
```

- *Type:* string[]

---

##### `CgroupParent`<sup>Required</sup> <a name="CgroupParent" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cgroupParent"></a>

```csharp
public string CgroupParent { get; }
```

- *Type:* string

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.context"></a>

```csharp
public string Context { get; }
```

- *Type:* string

---

##### `CpuPeriod`<sup>Required</sup> <a name="CpuPeriod" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuPeriod"></a>

```csharp
public double CpuPeriod { get; }
```

- *Type:* double

---

##### `CpuQuota`<sup>Required</sup> <a name="CpuQuota" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuQuota"></a>

```csharp
public double CpuQuota { get; }
```

- *Type:* double

---

##### `CpuSetCpus`<sup>Required</sup> <a name="CpuSetCpus" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetCpus"></a>

```csharp
public string CpuSetCpus { get; }
```

- *Type:* string

---

##### `CpuSetMems`<sup>Required</sup> <a name="CpuSetMems" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetMems"></a>

```csharp
public string CpuSetMems { get; }
```

- *Type:* string

---

##### `CpuShares`<sup>Required</sup> <a name="CpuShares" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuShares"></a>

```csharp
public double CpuShares { get; }
```

- *Type:* double

---

##### `Dockerfile`<sup>Required</sup> <a name="Dockerfile" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.dockerfile"></a>

```csharp
public string Dockerfile { get; }
```

- *Type:* string

---

##### `ExtraHosts`<sup>Required</sup> <a name="ExtraHosts" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.extraHosts"></a>

```csharp
public string[] ExtraHosts { get; }
```

- *Type:* string[]

---

##### `ForceRemove`<sup>Required</sup> <a name="ForceRemove" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.forceRemove"></a>

```csharp
public object ForceRemove { get; }
```

- *Type:* object

---

##### `Isolation`<sup>Required</sup> <a name="Isolation" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.isolation"></a>

```csharp
public string Isolation { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.label"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Label { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.memory"></a>

```csharp
public double Memory { get; }
```

- *Type:* double

---

##### `MemorySwap`<sup>Required</sup> <a name="MemorySwap" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.memorySwap"></a>

```csharp
public double MemorySwap { get; }
```

- *Type:* double

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.networkMode"></a>

```csharp
public string NetworkMode { get; }
```

- *Type:* string

---

##### `NoCache`<sup>Required</sup> <a name="NoCache" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.noCache"></a>

```csharp
public object NoCache { get; }
```

- *Type:* object

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `PullParent`<sup>Required</sup> <a name="PullParent" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.pullParent"></a>

```csharp
public object PullParent { get; }
```

- *Type:* object

---

##### `RemoteContext`<sup>Required</sup> <a name="RemoteContext" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.remoteContext"></a>

```csharp
public string RemoteContext { get; }
```

- *Type:* string

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.remove"></a>

```csharp
public object Remove { get; }
```

- *Type:* object

---

##### `SecurityOpt`<sup>Required</sup> <a name="SecurityOpt" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.securityOpt"></a>

```csharp
public string[] SecurityOpt { get; }
```

- *Type:* string[]

---

##### `SessionId`<sup>Required</sup> <a name="SessionId" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.sessionId"></a>

```csharp
public string SessionId { get; }
```

- *Type:* string

---

##### `ShmSize`<sup>Required</sup> <a name="ShmSize" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.shmSize"></a>

```csharp
public double ShmSize { get; }
```

- *Type:* double

---

##### `Squash`<sup>Required</sup> <a name="Squash" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.squash"></a>

```csharp
public object Squash { get; }
```

- *Type:* object

---

##### `SuppressOutput`<sup>Required</sup> <a name="SuppressOutput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.suppressOutput"></a>

```csharp
public object SuppressOutput { get; }
```

- *Type:* object

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.tag"></a>

```csharp
public string[] Tag { get; }
```

- *Type:* string[]

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.internalValue"></a>

```csharp
public ImageBuild InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a>

---


### ImageBuildUlimitList <a name="ImageBuildUlimitList" id="@cdktf/provider-docker.image.ImageBuildUlimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ImageBuildUlimitList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.image.ImageBuildUlimitList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.image.ImageBuildUlimitList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.image.ImageBuildUlimitList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.image.ImageBuildUlimitList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.image.ImageBuildUlimitList.get"></a>

```csharp
private ImageBuildUlimitOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-docker.image.ImageBuildUlimitList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.image.ImageBuildUlimitList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.image.ImageBuildUlimitList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.image.ImageBuildUlimitList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ImageBuildUlimitOutputReference <a name="ImageBuildUlimitOutputReference" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new ImageBuildUlimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.hardInput">HardInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.softInput">SoftInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.hard">Hard</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.soft">Soft</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HardInput`<sup>Optional</sup> <a name="HardInput" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.hardInput"></a>

```csharp
public double HardInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SoftInput`<sup>Optional</sup> <a name="SoftInput" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.softInput"></a>

```csharp
public double SoftInput { get; }
```

- *Type:* double

---

##### `Hard`<sup>Required</sup> <a name="Hard" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.hard"></a>

```csharp
public double Hard { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Soft`<sup>Required</sup> <a name="Soft" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.soft"></a>

```csharp
public double Soft { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



