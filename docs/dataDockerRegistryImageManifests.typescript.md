# `dataDockerRegistryImageManifests` Submodule <a name="`dataDockerRegistryImageManifests` Submodule" id="@cdktf/provider-docker.dataDockerRegistryImageManifests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDockerRegistryImageManifests <a name="DataDockerRegistryImageManifests" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests docker_registry_image_manifests}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer"></a>

```typescript
import { dataDockerRegistryImageManifests } from '@cdktf/provider-docker'

new dataDockerRegistryImageManifests.DataDockerRegistryImageManifests(scope: Construct, id: string, config: DataDockerRegistryImageManifestsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig">DataDockerRegistryImageManifestsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig">DataDockerRegistryImageManifestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.putAuthConfig">putAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetAuthConfig">resetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetInsecureSkipVerify">resetInsecureSkipVerify</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAuthConfig` <a name="putAuthConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.putAuthConfig"></a>

```typescript
public putAuthConfig(value: DataDockerRegistryImageManifestsAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

---

##### `resetAuthConfig` <a name="resetAuthConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetAuthConfig"></a>

```typescript
public resetAuthConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInsecureSkipVerify` <a name="resetInsecureSkipVerify" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetInsecureSkipVerify"></a>

```typescript
public resetInsecureSkipVerify(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDockerRegistryImageManifests resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isConstruct"></a>

```typescript
import { dataDockerRegistryImageManifests } from '@cdktf/provider-docker'

dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformElement"></a>

```typescript
import { dataDockerRegistryImageManifests } from '@cdktf/provider-docker'

dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformDataSource"></a>

```typescript
import { dataDockerRegistryImageManifests } from '@cdktf/provider-docker'

dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport"></a>

```typescript
import { dataDockerRegistryImageManifests } from '@cdktf/provider-docker'

dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDockerRegistryImageManifests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDockerRegistryImageManifests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDockerRegistryImageManifests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDockerRegistryImageManifests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference">DataDockerRegistryImageManifestsAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.manifests">manifests</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList">DataDockerRegistryImageManifestsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.authConfigInput">authConfigInput</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.insecureSkipVerifyInput">insecureSkipVerifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `authConfig`<sup>Required</sup> <a name="authConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.authConfig"></a>

```typescript
public readonly authConfig: DataDockerRegistryImageManifestsAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference">DataDockerRegistryImageManifestsAuthConfigOutputReference</a>

---

##### `manifests`<sup>Required</sup> <a name="manifests" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.manifests"></a>

```typescript
public readonly manifests: DataDockerRegistryImageManifestsManifestsList;
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList">DataDockerRegistryImageManifestsManifestsList</a>

---

##### `authConfigInput`<sup>Optional</sup> <a name="authConfigInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.authConfigInput"></a>

```typescript
public readonly authConfigInput: DataDockerRegistryImageManifestsAuthConfig;
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `insecureSkipVerifyInput`<sup>Optional</sup> <a name="insecureSkipVerifyInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.insecureSkipVerifyInput"></a>

```typescript
public readonly insecureSkipVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `insecureSkipVerify`<sup>Required</sup> <a name="insecureSkipVerify" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDockerRegistryImageManifestsAuthConfig <a name="DataDockerRegistryImageManifestsAuthConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.Initializer"></a>

```typescript
import { dataDockerRegistryImageManifests } from '@cdktf/provider-docker'

const dataDockerRegistryImageManifestsAuthConfig: dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.address">address</a></code> | <code>string</code> | The address of the Docker registry. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.password">password</a></code> | <code>string</code> | The password for the Docker registry. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.username">username</a></code> | <code>string</code> | The username for the Docker registry. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The address of the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#address DataDockerRegistryImageManifests#address}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password for the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#password DataDockerRegistryImageManifests#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username for the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#username DataDockerRegistryImageManifests#username}

---

### DataDockerRegistryImageManifestsConfig <a name="DataDockerRegistryImageManifestsConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.Initializer"></a>

```typescript
import { dataDockerRegistryImageManifests } from '@cdktf/provider-docker'

const dataDockerRegistryImageManifestsConfig: dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.name">name</a></code> | <code>string</code> | The name of the Docker image, including any tags. e.g. `alpine:latest`. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#id DataDockerRegistryImageManifests#id}. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Docker image, including any tags. e.g. `alpine:latest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#name DataDockerRegistryImageManifests#name}

---

##### `authConfig`<sup>Optional</sup> <a name="authConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.authConfig"></a>

```typescript
public readonly authConfig: DataDockerRegistryImageManifestsAuthConfig;
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#auth_config DataDockerRegistryImageManifests#auth_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#id DataDockerRegistryImageManifests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#insecure_skip_verify DataDockerRegistryImageManifests#insecure_skip_verify}

---

### DataDockerRegistryImageManifestsManifests <a name="DataDockerRegistryImageManifestsManifests" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests.Initializer"></a>

```typescript
import { dataDockerRegistryImageManifests } from '@cdktf/provider-docker'

const dataDockerRegistryImageManifestsManifests: dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDockerRegistryImageManifestsAuthConfigOutputReference <a name="DataDockerRegistryImageManifestsAuthConfigOutputReference" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer"></a>

```typescript
import { dataDockerRegistryImageManifests } from '@cdktf/provider-docker'

new dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDockerRegistryImageManifestsAuthConfig;
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

---


### DataDockerRegistryImageManifestsManifestsList <a name="DataDockerRegistryImageManifestsManifestsList" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer"></a>

```typescript
import { dataDockerRegistryImageManifests } from '@cdktf/provider-docker'

new dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.get"></a>

```typescript
public get(index: number): DataDockerRegistryImageManifestsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDockerRegistryImageManifestsManifestsOutputReference <a name="DataDockerRegistryImageManifestsManifestsOutputReference" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer"></a>

```typescript
import { dataDockerRegistryImageManifests } from '@cdktf/provider-docker'

new dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.mediaType">mediaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.os">os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.sha256Digest">sha256Digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests">DataDockerRegistryImageManifestsManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `mediaType`<sup>Required</sup> <a name="mediaType" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.mediaType"></a>

```typescript
public readonly mediaType: string;
```

- *Type:* string

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

---

##### `sha256Digest`<sup>Required</sup> <a name="sha256Digest" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.sha256Digest"></a>

```typescript
public readonly sha256Digest: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDockerRegistryImageManifestsManifests;
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests">DataDockerRegistryImageManifestsManifests</a>

---



