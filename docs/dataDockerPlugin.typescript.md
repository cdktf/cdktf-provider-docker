# `dataDockerPlugin` Submodule <a name="`dataDockerPlugin` Submodule" id="@cdktf/provider-docker.dataDockerPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDockerPlugin <a name="DataDockerPlugin" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/data-sources/plugin docker_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.Initializer"></a>

```typescript
import { dataDockerPlugin } from '@cdktf/provider-docker'

new dataDockerPlugin.DataDockerPlugin(scope: Construct, id: string, config?: DataDockerPluginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig">DataDockerPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig">DataDockerPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDockerPlugin resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.isConstruct"></a>

```typescript
import { dataDockerPlugin } from '@cdktf/provider-docker'

dataDockerPlugin.DataDockerPlugin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.isTerraformElement"></a>

```typescript
import { dataDockerPlugin } from '@cdktf/provider-docker'

dataDockerPlugin.DataDockerPlugin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.isTerraformDataSource"></a>

```typescript
import { dataDockerPlugin } from '@cdktf/provider-docker'

dataDockerPlugin.DataDockerPlugin.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.generateConfigForImport"></a>

```typescript
import { dataDockerPlugin } from '@cdktf/provider-docker'

dataDockerPlugin.DataDockerPlugin.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDockerPlugin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDockerPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDockerPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/data-sources/plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDockerPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.env">env</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.grantAllPermissions">grantAllPermissions</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.pluginReference">pluginReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.env"></a>

```typescript
public readonly env: string[];
```

- *Type:* string[]

---

##### `grantAllPermissions`<sup>Required</sup> <a name="grantAllPermissions" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.grantAllPermissions"></a>

```typescript
public readonly grantAllPermissions: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pluginReference`<sup>Required</sup> <a name="pluginReference" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.pluginReference"></a>

```typescript
public readonly pluginReference: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPlugin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDockerPluginConfig <a name="DataDockerPluginConfig" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.Initializer"></a>

```typescript
import { dataDockerPlugin } from '@cdktf/provider-docker'

const dataDockerPluginConfig: dataDockerPlugin.DataDockerPluginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.alias">alias</a></code> | <code>string</code> | The alias of the Docker plugin. If the tag is omitted, `:latest` is complemented to the attribute value. |
| <code><a href="#@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.id">id</a></code> | <code>string</code> | The ID of the plugin, which has precedence over the `alias` of both are given. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The alias of the Docker plugin. If the tag is omitted, `:latest` is complemented to the attribute value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/data-sources/plugin#alias DataDockerPlugin#alias}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.dataDockerPlugin.DataDockerPluginConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the plugin, which has precedence over the `alias` of both are given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.5.0/docs/data-sources/plugin#id DataDockerPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



