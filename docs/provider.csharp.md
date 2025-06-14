# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-docker.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DockerProvider <a name="DockerProvider" id="@cdktf/provider-docker.provider.DockerProvider"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs docker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.provider.DockerProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new DockerProvider(Construct Scope, string Id, DockerProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig">DockerProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.provider.DockerProviderConfig">DockerProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetCaMaterial">ResetCaMaterial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetCertMaterial">ResetCertMaterial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetCertPath">ResetCertPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetContext">ResetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetDisableDockerDaemonCheck">ResetDisableDockerDaemonCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetKeyMaterial">ResetKeyMaterial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetRegistryAuth">ResetRegistryAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetSshOpts">ResetSshOpts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.provider.DockerProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-docker.provider.DockerProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-docker.provider.DockerProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.provider.DockerProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-docker.provider.DockerProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-docker.provider.DockerProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-docker.provider.DockerProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-docker.provider.DockerProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-docker.provider.DockerProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-docker.provider.DockerProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-docker.provider.DockerProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetCaMaterial` <a name="ResetCaMaterial" id="@cdktf/provider-docker.provider.DockerProvider.resetCaMaterial"></a>

```csharp
private void ResetCaMaterial()
```

##### `ResetCertMaterial` <a name="ResetCertMaterial" id="@cdktf/provider-docker.provider.DockerProvider.resetCertMaterial"></a>

```csharp
private void ResetCertMaterial()
```

##### `ResetCertPath` <a name="ResetCertPath" id="@cdktf/provider-docker.provider.DockerProvider.resetCertPath"></a>

```csharp
private void ResetCertPath()
```

##### `ResetContext` <a name="ResetContext" id="@cdktf/provider-docker.provider.DockerProvider.resetContext"></a>

```csharp
private void ResetContext()
```

##### `ResetDisableDockerDaemonCheck` <a name="ResetDisableDockerDaemonCheck" id="@cdktf/provider-docker.provider.DockerProvider.resetDisableDockerDaemonCheck"></a>

```csharp
private void ResetDisableDockerDaemonCheck()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-docker.provider.DockerProvider.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetKeyMaterial` <a name="ResetKeyMaterial" id="@cdktf/provider-docker.provider.DockerProvider.resetKeyMaterial"></a>

```csharp
private void ResetKeyMaterial()
```

##### `ResetRegistryAuth` <a name="ResetRegistryAuth" id="@cdktf/provider-docker.provider.DockerProvider.resetRegistryAuth"></a>

```csharp
private void ResetRegistryAuth()
```

##### `ResetSshOpts` <a name="ResetSshOpts" id="@cdktf/provider-docker.provider.DockerProvider.resetSshOpts"></a>

```csharp
private void ResetSshOpts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DockerProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-docker.provider.DockerProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

DockerProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.provider.DockerProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-docker.provider.DockerProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

DockerProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.provider.DockerProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-docker.provider.DockerProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

DockerProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-docker.provider.DockerProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

DockerProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DockerProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DockerProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DockerProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DockerProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.caMaterialInput">CaMaterialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.certMaterialInput">CertMaterialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.certPathInput">CertPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.contextInput">ContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.disableDockerDaemonCheckInput">DisableDockerDaemonCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.keyMaterialInput">KeyMaterialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.registryAuthInput">RegistryAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.sshOptsInput">SshOptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.caMaterial">CaMaterial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.certMaterial">CertMaterial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.certPath">CertPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.context">Context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.disableDockerDaemonCheck">DisableDockerDaemonCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.keyMaterial">KeyMaterial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.registryAuth">RegistryAuth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.sshOpts">SshOpts</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-docker.provider.DockerProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-docker.provider.DockerProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.provider.DockerProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-docker.provider.DockerProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-docker.provider.DockerProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-docker.provider.DockerProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-docker.provider.DockerProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-docker.provider.DockerProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-docker.provider.DockerProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-docker.provider.DockerProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `CaMaterialInput`<sup>Optional</sup> <a name="CaMaterialInput" id="@cdktf/provider-docker.provider.DockerProvider.property.caMaterialInput"></a>

```csharp
public string CaMaterialInput { get; }
```

- *Type:* string

---

##### `CertMaterialInput`<sup>Optional</sup> <a name="CertMaterialInput" id="@cdktf/provider-docker.provider.DockerProvider.property.certMaterialInput"></a>

```csharp
public string CertMaterialInput { get; }
```

- *Type:* string

---

##### `CertPathInput`<sup>Optional</sup> <a name="CertPathInput" id="@cdktf/provider-docker.provider.DockerProvider.property.certPathInput"></a>

```csharp
public string CertPathInput { get; }
```

- *Type:* string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-docker.provider.DockerProvider.property.contextInput"></a>

```csharp
public string ContextInput { get; }
```

- *Type:* string

---

##### `DisableDockerDaemonCheckInput`<sup>Optional</sup> <a name="DisableDockerDaemonCheckInput" id="@cdktf/provider-docker.provider.DockerProvider.property.disableDockerDaemonCheckInput"></a>

```csharp
public object DisableDockerDaemonCheckInput { get; }
```

- *Type:* object

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-docker.provider.DockerProvider.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `KeyMaterialInput`<sup>Optional</sup> <a name="KeyMaterialInput" id="@cdktf/provider-docker.provider.DockerProvider.property.keyMaterialInput"></a>

```csharp
public string KeyMaterialInput { get; }
```

- *Type:* string

---

##### `RegistryAuthInput`<sup>Optional</sup> <a name="RegistryAuthInput" id="@cdktf/provider-docker.provider.DockerProvider.property.registryAuthInput"></a>

```csharp
public object RegistryAuthInput { get; }
```

- *Type:* object

---

##### `SshOptsInput`<sup>Optional</sup> <a name="SshOptsInput" id="@cdktf/provider-docker.provider.DockerProvider.property.sshOptsInput"></a>

```csharp
public string[] SshOptsInput { get; }
```

- *Type:* string[]

---

##### `CaMaterial`<sup>Optional</sup> <a name="CaMaterial" id="@cdktf/provider-docker.provider.DockerProvider.property.caMaterial"></a>

```csharp
public string CaMaterial { get; }
```

- *Type:* string

---

##### `CertMaterial`<sup>Optional</sup> <a name="CertMaterial" id="@cdktf/provider-docker.provider.DockerProvider.property.certMaterial"></a>

```csharp
public string CertMaterial { get; }
```

- *Type:* string

---

##### `CertPath`<sup>Optional</sup> <a name="CertPath" id="@cdktf/provider-docker.provider.DockerProvider.property.certPath"></a>

```csharp
public string CertPath { get; }
```

- *Type:* string

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-docker.provider.DockerProvider.property.context"></a>

```csharp
public string Context { get; }
```

- *Type:* string

---

##### `DisableDockerDaemonCheck`<sup>Optional</sup> <a name="DisableDockerDaemonCheck" id="@cdktf/provider-docker.provider.DockerProvider.property.disableDockerDaemonCheck"></a>

```csharp
public object DisableDockerDaemonCheck { get; }
```

- *Type:* object

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-docker.provider.DockerProvider.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `KeyMaterial`<sup>Optional</sup> <a name="KeyMaterial" id="@cdktf/provider-docker.provider.DockerProvider.property.keyMaterial"></a>

```csharp
public string KeyMaterial { get; }
```

- *Type:* string

---

##### `RegistryAuth`<sup>Optional</sup> <a name="RegistryAuth" id="@cdktf/provider-docker.provider.DockerProvider.property.registryAuth"></a>

```csharp
public object RegistryAuth { get; }
```

- *Type:* object

---

##### `SshOpts`<sup>Optional</sup> <a name="SshOpts" id="@cdktf/provider-docker.provider.DockerProvider.property.sshOpts"></a>

```csharp
public string[] SshOpts { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-docker.provider.DockerProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DockerProviderConfig <a name="DockerProviderConfig" id="@cdktf/provider-docker.provider.DockerProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.provider.DockerProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new DockerProviderConfig {
    string Alias = null,
    string CaMaterial = null,
    string CertMaterial = null,
    string CertPath = null,
    string Context = null,
    object DisableDockerDaemonCheck = null,
    string Host = null,
    string KeyMaterial = null,
    object RegistryAuth = null,
    string[] SshOpts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.caMaterial">CaMaterial</a></code> | <code>string</code> | PEM-encoded content of Docker host CA certificate. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.certMaterial">CertMaterial</a></code> | <code>string</code> | PEM-encoded content of Docker client certificate. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.certPath">CertPath</a></code> | <code>string</code> | Path to directory with Docker TLS config. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.context">Context</a></code> | <code>string</code> | The name of the Docker context to use. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.disableDockerDaemonCheck">DisableDockerDaemonCheck</a></code> | <code>object</code> | If set to `true`, the provider will not check if the Docker daemon is running. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.host">Host</a></code> | <code>string</code> | The Docker daemon address. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.keyMaterial">KeyMaterial</a></code> | <code>string</code> | PEM-encoded content of Docker client private key. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.registryAuth">RegistryAuth</a></code> | <code>object</code> | registry_auth block. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.sshOpts">SshOpts</a></code> | <code>string[]</code> | Additional SSH option flags to be appended when using `ssh://` protocol. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#alias DockerProvider#alias}

---

##### `CaMaterial`<sup>Optional</sup> <a name="CaMaterial" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.caMaterial"></a>

```csharp
public string CaMaterial { get; set; }
```

- *Type:* string

PEM-encoded content of Docker host CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#ca_material DockerProvider#ca_material}

---

##### `CertMaterial`<sup>Optional</sup> <a name="CertMaterial" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.certMaterial"></a>

```csharp
public string CertMaterial { get; set; }
```

- *Type:* string

PEM-encoded content of Docker client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#cert_material DockerProvider#cert_material}

---

##### `CertPath`<sup>Optional</sup> <a name="CertPath" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.certPath"></a>

```csharp
public string CertPath { get; set; }
```

- *Type:* string

Path to directory with Docker TLS config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#cert_path DockerProvider#cert_path}

---

##### `Context`<sup>Optional</sup> <a name="Context" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.context"></a>

```csharp
public string Context { get; set; }
```

- *Type:* string

The name of the Docker context to use.

Can also be set via `DOCKER_CONTEXT` environment variable. Overrides the `host` if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#context DockerProvider#context}

---

##### `DisableDockerDaemonCheck`<sup>Optional</sup> <a name="DisableDockerDaemonCheck" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.disableDockerDaemonCheck"></a>

```csharp
public object DisableDockerDaemonCheck { get; set; }
```

- *Type:* object

If set to `true`, the provider will not check if the Docker daemon is running.

This is useful for resources/data_sourcess that do not require a running Docker daemon, such as the data source `docker_registry_image`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#disable_docker_daemon_check DockerProvider#disable_docker_daemon_check}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The Docker daemon address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#host DockerProvider#host}

---

##### `KeyMaterial`<sup>Optional</sup> <a name="KeyMaterial" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.keyMaterial"></a>

```csharp
public string KeyMaterial { get; set; }
```

- *Type:* string

PEM-encoded content of Docker client private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#key_material DockerProvider#key_material}

---

##### `RegistryAuth`<sup>Optional</sup> <a name="RegistryAuth" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.registryAuth"></a>

```csharp
public object RegistryAuth { get; set; }
```

- *Type:* object

registry_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#registry_auth DockerProvider#registry_auth}

---

##### `SshOpts`<sup>Optional</sup> <a name="SshOpts" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.sshOpts"></a>

```csharp
public string[] SshOpts { get; set; }
```

- *Type:* string[]

Additional SSH option flags to be appended when using `ssh://` protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#ssh_opts DockerProvider#ssh_opts}

---

### DockerProviderRegistryAuth <a name="DockerProviderRegistryAuth" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Docker;

new DockerProviderRegistryAuth {
    string Address,
    object AuthDisabled = null,
    string ConfigFile = null,
    string ConfigFileContent = null,
    string Password = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.address">Address</a></code> | <code>string</code> | Address of the registry. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.authDisabled">AuthDisabled</a></code> | <code>object</code> | Setting this to `true` will tell the provider that this registry does not need authentication. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.configFile">ConfigFile</a></code> | <code>string</code> | Path to docker json file for registry auth. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.configFileContent">ConfigFileContent</a></code> | <code>string</code> | Plain content of the docker json file for registry auth. `config_file_content` has precedence over username/password. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.password">Password</a></code> | <code>string</code> | Password for the registry. Defaults to `DOCKER_REGISTRY_PASS` env variable if set. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.username">Username</a></code> | <code>string</code> | Username for the registry. Defaults to `DOCKER_REGISTRY_USER` env variable if set. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Address of the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#address DockerProvider#address}

---

##### `AuthDisabled`<sup>Optional</sup> <a name="AuthDisabled" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.authDisabled"></a>

```csharp
public object AuthDisabled { get; set; }
```

- *Type:* object

Setting this to `true` will tell the provider that this registry does not need authentication.

Due to the docker internals, the provider will use dummy credentials (see https://github.com/kreuzwerker/terraform-provider-docker/issues/470 for more information). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#auth_disabled DockerProvider#auth_disabled}

---

##### `ConfigFile`<sup>Optional</sup> <a name="ConfigFile" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.configFile"></a>

```csharp
public string ConfigFile { get; set; }
```

- *Type:* string

Path to docker json file for registry auth.

Defaults to `~/.docker/config.json`. If `DOCKER_CONFIG` is set, the value of `DOCKER_CONFIG` is used as the path. `config_file` has predencen over all other options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#config_file DockerProvider#config_file}

---

##### `ConfigFileContent`<sup>Optional</sup> <a name="ConfigFileContent" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.configFileContent"></a>

```csharp
public string ConfigFileContent { get; set; }
```

- *Type:* string

Plain content of the docker json file for registry auth. `config_file_content` has precedence over username/password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#config_file_content DockerProvider#config_file_content}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for the registry. Defaults to `DOCKER_REGISTRY_PASS` env variable if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#password DockerProvider#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for the registry. Defaults to `DOCKER_REGISTRY_USER` env variable if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs#username DockerProvider#username}

---



