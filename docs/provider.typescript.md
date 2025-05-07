# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-docker.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DockerProvider <a name="DockerProvider" id="@cdktf/provider-docker.provider.DockerProvider"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs docker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.provider.DockerProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-docker'

new provider.DockerProvider(scope: Construct, id: string, config?: DockerProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig">DockerProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.provider.DockerProviderConfig">DockerProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetCaMaterial">resetCaMaterial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetCertMaterial">resetCertMaterial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetCertPath">resetCertPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetDisableDockerDaemonCheck">resetDisableDockerDaemonCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetKeyMaterial">resetKeyMaterial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetRegistryAuth">resetRegistryAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetSshOpts">resetSshOpts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.provider.DockerProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.provider.DockerProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.provider.DockerProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.provider.DockerProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.provider.DockerProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.provider.DockerProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.provider.DockerProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-docker.provider.DockerProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.provider.DockerProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.provider.DockerProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-docker.provider.DockerProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetCaMaterial` <a name="resetCaMaterial" id="@cdktf/provider-docker.provider.DockerProvider.resetCaMaterial"></a>

```typescript
public resetCaMaterial(): void
```

##### `resetCertMaterial` <a name="resetCertMaterial" id="@cdktf/provider-docker.provider.DockerProvider.resetCertMaterial"></a>

```typescript
public resetCertMaterial(): void
```

##### `resetCertPath` <a name="resetCertPath" id="@cdktf/provider-docker.provider.DockerProvider.resetCertPath"></a>

```typescript
public resetCertPath(): void
```

##### `resetContext` <a name="resetContext" id="@cdktf/provider-docker.provider.DockerProvider.resetContext"></a>

```typescript
public resetContext(): void
```

##### `resetDisableDockerDaemonCheck` <a name="resetDisableDockerDaemonCheck" id="@cdktf/provider-docker.provider.DockerProvider.resetDisableDockerDaemonCheck"></a>

```typescript
public resetDisableDockerDaemonCheck(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-docker.provider.DockerProvider.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetKeyMaterial` <a name="resetKeyMaterial" id="@cdktf/provider-docker.provider.DockerProvider.resetKeyMaterial"></a>

```typescript
public resetKeyMaterial(): void
```

##### `resetRegistryAuth` <a name="resetRegistryAuth" id="@cdktf/provider-docker.provider.DockerProvider.resetRegistryAuth"></a>

```typescript
public resetRegistryAuth(): void
```

##### `resetSshOpts` <a name="resetSshOpts" id="@cdktf/provider-docker.provider.DockerProvider.resetSshOpts"></a>

```typescript
public resetSshOpts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DockerProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-docker.provider.DockerProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-docker'

provider.DockerProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.provider.DockerProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.provider.DockerProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-docker'

provider.DockerProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.provider.DockerProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-docker.provider.DockerProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-docker'

provider.DockerProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.provider.DockerProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-docker'

provider.DockerProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DockerProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DockerProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DockerProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DockerProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.caMaterialInput">caMaterialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.certMaterialInput">certMaterialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.certPathInput">certPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.contextInput">contextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.disableDockerDaemonCheckInput">disableDockerDaemonCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.keyMaterialInput">keyMaterialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.registryAuthInput">registryAuthInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.sshOptsInput">sshOptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.caMaterial">caMaterial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.certMaterial">certMaterial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.certPath">certPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.disableDockerDaemonCheck">disableDockerDaemonCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.keyMaterial">keyMaterial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.registryAuth">registryAuth</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.sshOpts">sshOpts</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.provider.DockerProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.provider.DockerProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.provider.DockerProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.provider.DockerProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-docker.provider.DockerProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.provider.DockerProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.provider.DockerProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-docker.provider.DockerProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-docker.provider.DockerProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-docker.provider.DockerProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `caMaterialInput`<sup>Optional</sup> <a name="caMaterialInput" id="@cdktf/provider-docker.provider.DockerProvider.property.caMaterialInput"></a>

```typescript
public readonly caMaterialInput: string;
```

- *Type:* string

---

##### `certMaterialInput`<sup>Optional</sup> <a name="certMaterialInput" id="@cdktf/provider-docker.provider.DockerProvider.property.certMaterialInput"></a>

```typescript
public readonly certMaterialInput: string;
```

- *Type:* string

---

##### `certPathInput`<sup>Optional</sup> <a name="certPathInput" id="@cdktf/provider-docker.provider.DockerProvider.property.certPathInput"></a>

```typescript
public readonly certPathInput: string;
```

- *Type:* string

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-docker.provider.DockerProvider.property.contextInput"></a>

```typescript
public readonly contextInput: string;
```

- *Type:* string

---

##### `disableDockerDaemonCheckInput`<sup>Optional</sup> <a name="disableDockerDaemonCheckInput" id="@cdktf/provider-docker.provider.DockerProvider.property.disableDockerDaemonCheckInput"></a>

```typescript
public readonly disableDockerDaemonCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-docker.provider.DockerProvider.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `keyMaterialInput`<sup>Optional</sup> <a name="keyMaterialInput" id="@cdktf/provider-docker.provider.DockerProvider.property.keyMaterialInput"></a>

```typescript
public readonly keyMaterialInput: string;
```

- *Type:* string

---

##### `registryAuthInput`<sup>Optional</sup> <a name="registryAuthInput" id="@cdktf/provider-docker.provider.DockerProvider.property.registryAuthInput"></a>

```typescript
public readonly registryAuthInput: IResolvable | DockerProviderRegistryAuth[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>[]

---

##### `sshOptsInput`<sup>Optional</sup> <a name="sshOptsInput" id="@cdktf/provider-docker.provider.DockerProvider.property.sshOptsInput"></a>

```typescript
public readonly sshOptsInput: string[];
```

- *Type:* string[]

---

##### `caMaterial`<sup>Optional</sup> <a name="caMaterial" id="@cdktf/provider-docker.provider.DockerProvider.property.caMaterial"></a>

```typescript
public readonly caMaterial: string;
```

- *Type:* string

---

##### `certMaterial`<sup>Optional</sup> <a name="certMaterial" id="@cdktf/provider-docker.provider.DockerProvider.property.certMaterial"></a>

```typescript
public readonly certMaterial: string;
```

- *Type:* string

---

##### `certPath`<sup>Optional</sup> <a name="certPath" id="@cdktf/provider-docker.provider.DockerProvider.property.certPath"></a>

```typescript
public readonly certPath: string;
```

- *Type:* string

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-docker.provider.DockerProvider.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `disableDockerDaemonCheck`<sup>Optional</sup> <a name="disableDockerDaemonCheck" id="@cdktf/provider-docker.provider.DockerProvider.property.disableDockerDaemonCheck"></a>

```typescript
public readonly disableDockerDaemonCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-docker.provider.DockerProvider.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `keyMaterial`<sup>Optional</sup> <a name="keyMaterial" id="@cdktf/provider-docker.provider.DockerProvider.property.keyMaterial"></a>

```typescript
public readonly keyMaterial: string;
```

- *Type:* string

---

##### `registryAuth`<sup>Optional</sup> <a name="registryAuth" id="@cdktf/provider-docker.provider.DockerProvider.property.registryAuth"></a>

```typescript
public readonly registryAuth: IResolvable | DockerProviderRegistryAuth[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>[]

---

##### `sshOpts`<sup>Optional</sup> <a name="sshOpts" id="@cdktf/provider-docker.provider.DockerProvider.property.sshOpts"></a>

```typescript
public readonly sshOpts: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.provider.DockerProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DockerProviderConfig <a name="DockerProviderConfig" id="@cdktf/provider-docker.provider.DockerProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.provider.DockerProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-docker'

const dockerProviderConfig: provider.DockerProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.caMaterial">caMaterial</a></code> | <code>string</code> | PEM-encoded content of Docker host CA certificate. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.certMaterial">certMaterial</a></code> | <code>string</code> | PEM-encoded content of Docker client certificate. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.certPath">certPath</a></code> | <code>string</code> | Path to directory with Docker TLS config. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.context">context</a></code> | <code>string</code> | The name of the Docker context to use. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.disableDockerDaemonCheck">disableDockerDaemonCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to `true`, the provider will not check if the Docker daemon is running. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.host">host</a></code> | <code>string</code> | The Docker daemon address. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.keyMaterial">keyMaterial</a></code> | <code>string</code> | PEM-encoded content of Docker client private key. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.registryAuth">registryAuth</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>[]</code> | registry_auth block. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.sshOpts">sshOpts</a></code> | <code>string[]</code> | Additional SSH option flags to be appended when using `ssh://` protocol. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#alias DockerProvider#alias}

---

##### `caMaterial`<sup>Optional</sup> <a name="caMaterial" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.caMaterial"></a>

```typescript
public readonly caMaterial: string;
```

- *Type:* string

PEM-encoded content of Docker host CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#ca_material DockerProvider#ca_material}

---

##### `certMaterial`<sup>Optional</sup> <a name="certMaterial" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.certMaterial"></a>

```typescript
public readonly certMaterial: string;
```

- *Type:* string

PEM-encoded content of Docker client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#cert_material DockerProvider#cert_material}

---

##### `certPath`<sup>Optional</sup> <a name="certPath" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.certPath"></a>

```typescript
public readonly certPath: string;
```

- *Type:* string

Path to directory with Docker TLS config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#cert_path DockerProvider#cert_path}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

The name of the Docker context to use.

Can also be set via `DOCKER_CONTEXT` environment variable. Overrides the `host` if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#context DockerProvider#context}

---

##### `disableDockerDaemonCheck`<sup>Optional</sup> <a name="disableDockerDaemonCheck" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.disableDockerDaemonCheck"></a>

```typescript
public readonly disableDockerDaemonCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to `true`, the provider will not check if the Docker daemon is running.

This is useful for resources/data_sourcess that do not require a running Docker daemon, such as the data source `docker_registry_image`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#disable_docker_daemon_check DockerProvider#disable_docker_daemon_check}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The Docker daemon address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#host DockerProvider#host}

---

##### `keyMaterial`<sup>Optional</sup> <a name="keyMaterial" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.keyMaterial"></a>

```typescript
public readonly keyMaterial: string;
```

- *Type:* string

PEM-encoded content of Docker client private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#key_material DockerProvider#key_material}

---

##### `registryAuth`<sup>Optional</sup> <a name="registryAuth" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.registryAuth"></a>

```typescript
public readonly registryAuth: IResolvable | DockerProviderRegistryAuth[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>[]

registry_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#registry_auth DockerProvider#registry_auth}

---

##### `sshOpts`<sup>Optional</sup> <a name="sshOpts" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.sshOpts"></a>

```typescript
public readonly sshOpts: string[];
```

- *Type:* string[]

Additional SSH option flags to be appended when using `ssh://` protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#ssh_opts DockerProvider#ssh_opts}

---

### DockerProviderRegistryAuth <a name="DockerProviderRegistryAuth" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-docker'

const dockerProviderRegistryAuth: provider.DockerProviderRegistryAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.address">address</a></code> | <code>string</code> | Address of the registry. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.authDisabled">authDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Setting this to `true` will tell the provider that this registry does not need authentication. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.configFile">configFile</a></code> | <code>string</code> | Path to docker json file for registry auth. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.configFileContent">configFileContent</a></code> | <code>string</code> | Plain content of the docker json file for registry auth. `config_file_content` has precedence over username/password. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.password">password</a></code> | <code>string</code> | Password for the registry. Defaults to `DOCKER_REGISTRY_PASS` env variable if set. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.username">username</a></code> | <code>string</code> | Username for the registry. Defaults to `DOCKER_REGISTRY_USER` env variable if set. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Address of the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#address DockerProvider#address}

---

##### `authDisabled`<sup>Optional</sup> <a name="authDisabled" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.authDisabled"></a>

```typescript
public readonly authDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Setting this to `true` will tell the provider that this registry does not need authentication.

Due to the docker internals, the provider will use dummy credentials (see https://github.com/kreuzwerker/terraform-provider-docker/issues/470 for more information). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#auth_disabled DockerProvider#auth_disabled}

---

##### `configFile`<sup>Optional</sup> <a name="configFile" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.configFile"></a>

```typescript
public readonly configFile: string;
```

- *Type:* string

Path to docker json file for registry auth.

Defaults to `~/.docker/config.json`. If `DOCKER_CONFIG` is set, the value of `DOCKER_CONFIG` is used as the path. `config_file` has predencen over all other options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#config_file DockerProvider#config_file}

---

##### `configFileContent`<sup>Optional</sup> <a name="configFileContent" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.configFileContent"></a>

```typescript
public readonly configFileContent: string;
```

- *Type:* string

Plain content of the docker json file for registry auth. `config_file_content` has precedence over username/password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#config_file_content DockerProvider#config_file_content}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the registry. Defaults to `DOCKER_REGISTRY_PASS` env variable if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#password DockerProvider#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the registry. Defaults to `DOCKER_REGISTRY_USER` env variable if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs#username DockerProvider#username}

---



