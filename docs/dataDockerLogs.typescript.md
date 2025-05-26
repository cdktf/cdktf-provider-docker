# `dataDockerLogs` Submodule <a name="`dataDockerLogs` Submodule" id="@cdktf/provider-docker.dataDockerLogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDockerLogs <a name="DataDockerLogs" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs docker_logs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer"></a>

```typescript
import { dataDockerLogs } from '@cdktf/provider-docker'

new dataDockerLogs.DataDockerLogs(scope: Construct, id: string, config: DataDockerLogsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig">DataDockerLogsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig">DataDockerLogsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDetails">resetDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDiscardHeaders">resetDiscardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetFollow">resetFollow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetLogsListStringEnabled">resetLogsListStringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStderr">resetShowStderr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStdout">resetShowStdout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetSince">resetSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTail">resetTail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTimestamps">resetTimestamps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetUntil">resetUntil</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDetails` <a name="resetDetails" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDetails"></a>

```typescript
public resetDetails(): void
```

##### `resetDiscardHeaders` <a name="resetDiscardHeaders" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDiscardHeaders"></a>

```typescript
public resetDiscardHeaders(): void
```

##### `resetFollow` <a name="resetFollow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetFollow"></a>

```typescript
public resetFollow(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogsListStringEnabled` <a name="resetLogsListStringEnabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetLogsListStringEnabled"></a>

```typescript
public resetLogsListStringEnabled(): void
```

##### `resetShowStderr` <a name="resetShowStderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStderr"></a>

```typescript
public resetShowStderr(): void
```

##### `resetShowStdout` <a name="resetShowStdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStdout"></a>

```typescript
public resetShowStdout(): void
```

##### `resetSince` <a name="resetSince" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetSince"></a>

```typescript
public resetSince(): void
```

##### `resetTail` <a name="resetTail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTail"></a>

```typescript
public resetTail(): void
```

##### `resetTimestamps` <a name="resetTimestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTimestamps"></a>

```typescript
public resetTimestamps(): void
```

##### `resetUntil` <a name="resetUntil" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetUntil"></a>

```typescript
public resetUntil(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDockerLogs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isConstruct"></a>

```typescript
import { dataDockerLogs } from '@cdktf/provider-docker'

dataDockerLogs.DataDockerLogs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformElement"></a>

```typescript
import { dataDockerLogs } from '@cdktf/provider-docker'

dataDockerLogs.DataDockerLogs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformDataSource"></a>

```typescript
import { dataDockerLogs } from '@cdktf/provider-docker'

dataDockerLogs.DataDockerLogs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport"></a>

```typescript
import { dataDockerLogs } from '@cdktf/provider-docker'

dataDockerLogs.DataDockerLogs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDockerLogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDockerLogs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDockerLogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDockerLogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListString">logsListString</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.detailsInput">detailsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeadersInput">discardHeadersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.followInput">followInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabledInput">logsListStringEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderrInput">showStderrInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdoutInput">showStdoutInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.sinceInput">sinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tailInput">tailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestampsInput">timestampsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.untilInput">untilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.details">details</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeaders">discardHeaders</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.follow">follow</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabled">logsListStringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderr">showStderr</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdout">showStdout</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.since">since</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tail">tail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestamps">timestamps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.until">until</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `logsListString`<sup>Required</sup> <a name="logsListString" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListString"></a>

```typescript
public readonly logsListString: string[];
```

- *Type:* string[]

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.detailsInput"></a>

```typescript
public readonly detailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `discardHeadersInput`<sup>Optional</sup> <a name="discardHeadersInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeadersInput"></a>

```typescript
public readonly discardHeadersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `followInput`<sup>Optional</sup> <a name="followInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.followInput"></a>

```typescript
public readonly followInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logsListStringEnabledInput`<sup>Optional</sup> <a name="logsListStringEnabledInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabledInput"></a>

```typescript
public readonly logsListStringEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `showStderrInput`<sup>Optional</sup> <a name="showStderrInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderrInput"></a>

```typescript
public readonly showStderrInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `showStdoutInput`<sup>Optional</sup> <a name="showStdoutInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdoutInput"></a>

```typescript
public readonly showStdoutInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sinceInput`<sup>Optional</sup> <a name="sinceInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.sinceInput"></a>

```typescript
public readonly sinceInput: string;
```

- *Type:* string

---

##### `tailInput`<sup>Optional</sup> <a name="tailInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tailInput"></a>

```typescript
public readonly tailInput: string;
```

- *Type:* string

---

##### `timestampsInput`<sup>Optional</sup> <a name="timestampsInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestampsInput"></a>

```typescript
public readonly timestampsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `untilInput`<sup>Optional</sup> <a name="untilInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.untilInput"></a>

```typescript
public readonly untilInput: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.details"></a>

```typescript
public readonly details: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `discardHeaders`<sup>Required</sup> <a name="discardHeaders" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeaders"></a>

```typescript
public readonly discardHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `follow`<sup>Required</sup> <a name="follow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.follow"></a>

```typescript
public readonly follow: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logsListStringEnabled`<sup>Required</sup> <a name="logsListStringEnabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabled"></a>

```typescript
public readonly logsListStringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `showStderr`<sup>Required</sup> <a name="showStderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderr"></a>

```typescript
public readonly showStderr: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `showStdout`<sup>Required</sup> <a name="showStdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdout"></a>

```typescript
public readonly showStdout: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.since"></a>

```typescript
public readonly since: string;
```

- *Type:* string

---

##### `tail`<sup>Required</sup> <a name="tail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tail"></a>

```typescript
public readonly tail: string;
```

- *Type:* string

---

##### `timestamps`<sup>Required</sup> <a name="timestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestamps"></a>

```typescript
public readonly timestamps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `until`<sup>Required</sup> <a name="until" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.until"></a>

```typescript
public readonly until: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDockerLogsConfig <a name="DataDockerLogsConfig" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.Initializer"></a>

```typescript
import { dataDockerLogs } from '@cdktf/provider-docker'

const dataDockerLogsConfig: dataDockerLogs.DataDockerLogsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.name">name</a></code> | <code>string</code> | The name of the Docker Container. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.details">details</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#details DataDockerLogs#details}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.discardHeaders">discardHeaders</a></code> | <code>boolean \| cdktf.IResolvable</code> | Discard headers that docker appends to each log entry. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.follow">follow</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#follow DataDockerLogs#follow}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#id DataDockerLogs#id}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.logsListStringEnabled">logsListStringEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true populate computed value `logs_list_string`. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStderr">showStderr</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#show_stderr DataDockerLogs#show_stderr}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStdout">showStdout</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#show_stdout DataDockerLogs#show_stdout}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.since">since</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#since DataDockerLogs#since}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.tail">tail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#tail DataDockerLogs#tail}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.timestamps">timestamps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#timestamps DataDockerLogs#timestamps}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.until">until</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#until DataDockerLogs#until}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Docker Container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#name DataDockerLogs#name}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.details"></a>

```typescript
public readonly details: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#details DataDockerLogs#details}.

---

##### `discardHeaders`<sup>Optional</sup> <a name="discardHeaders" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.discardHeaders"></a>

```typescript
public readonly discardHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Discard headers that docker appends to each log entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#discard_headers DataDockerLogs#discard_headers}

---

##### `follow`<sup>Optional</sup> <a name="follow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.follow"></a>

```typescript
public readonly follow: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#follow DataDockerLogs#follow}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#id DataDockerLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logsListStringEnabled`<sup>Optional</sup> <a name="logsListStringEnabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.logsListStringEnabled"></a>

```typescript
public readonly logsListStringEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true populate computed value `logs_list_string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#logs_list_string_enabled DataDockerLogs#logs_list_string_enabled}

---

##### `showStderr`<sup>Optional</sup> <a name="showStderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStderr"></a>

```typescript
public readonly showStderr: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#show_stderr DataDockerLogs#show_stderr}.

---

##### `showStdout`<sup>Optional</sup> <a name="showStdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStdout"></a>

```typescript
public readonly showStdout: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#show_stdout DataDockerLogs#show_stdout}.

---

##### `since`<sup>Optional</sup> <a name="since" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.since"></a>

```typescript
public readonly since: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#since DataDockerLogs#since}.

---

##### `tail`<sup>Optional</sup> <a name="tail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.tail"></a>

```typescript
public readonly tail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#tail DataDockerLogs#tail}.

---

##### `timestamps`<sup>Optional</sup> <a name="timestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.timestamps"></a>

```typescript
public readonly timestamps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#timestamps DataDockerLogs#timestamps}.

---

##### `until`<sup>Optional</sup> <a name="until" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.until"></a>

```typescript
public readonly until: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/logs#until DataDockerLogs#until}.

---



