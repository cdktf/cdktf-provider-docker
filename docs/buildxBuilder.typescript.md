# `buildxBuilder` Submodule <a name="`buildxBuilder` Submodule" id="@cdktf/provider-docker.buildxBuilder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BuildxBuilder <a name="BuildxBuilder" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder docker_buildx_builder}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

new buildxBuilder.BuildxBuilder(scope: Construct, id: string, config?: BuildxBuilderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig">BuildxBuilderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig">BuildxBuilderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer">putDockerContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes">putKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote">putRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetAppend">resetAppend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBootstrap">resetBootstrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBuildkitConfig">resetBuildkitConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBuildkitFlags">resetBuildkitFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDockerContainer">resetDockerContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDriver">resetDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDriverOptions">resetDriverOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetKubernetes">resetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetNodeAttribute">resetNodeAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetRemote">resetRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetUse">resetUse</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDockerContainer` <a name="putDockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer"></a>

```typescript
public putDockerContainer(value: BuildxBuilderDockerContainer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

---

##### `putKubernetes` <a name="putKubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes"></a>

```typescript
public putKubernetes(value: BuildxBuilderKubernetes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

---

##### `putRemote` <a name="putRemote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote"></a>

```typescript
public putRemote(value: BuildxBuilderRemote): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

---

##### `resetAppend` <a name="resetAppend" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetAppend"></a>

```typescript
public resetAppend(): void
```

##### `resetBootstrap` <a name="resetBootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBootstrap"></a>

```typescript
public resetBootstrap(): void
```

##### `resetBuildkitConfig` <a name="resetBuildkitConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBuildkitConfig"></a>

```typescript
public resetBuildkitConfig(): void
```

##### `resetBuildkitFlags` <a name="resetBuildkitFlags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBuildkitFlags"></a>

```typescript
public resetBuildkitFlags(): void
```

##### `resetDockerContainer` <a name="resetDockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDockerContainer"></a>

```typescript
public resetDockerContainer(): void
```

##### `resetDriver` <a name="resetDriver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDriver"></a>

```typescript
public resetDriver(): void
```

##### `resetDriverOptions` <a name="resetDriverOptions" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDriverOptions"></a>

```typescript
public resetDriverOptions(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKubernetes` <a name="resetKubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetKubernetes"></a>

```typescript
public resetKubernetes(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNodeAttribute` <a name="resetNodeAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetNodeAttribute"></a>

```typescript
public resetNodeAttribute(): void
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetPlatform"></a>

```typescript
public resetPlatform(): void
```

##### `resetRemote` <a name="resetRemote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetRemote"></a>

```typescript
public resetRemote(): void
```

##### `resetUse` <a name="resetUse" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetUse"></a>

```typescript
public resetUse(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BuildxBuilder resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isConstruct"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

buildxBuilder.BuildxBuilder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformElement"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

buildxBuilder.BuildxBuilder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformResource"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

buildxBuilder.BuildxBuilder.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

buildxBuilder.BuildxBuilder.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BuildxBuilder resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BuildxBuilder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BuildxBuilder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BuildxBuilder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainer">dockerContainer</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference">BuildxBuilderDockerContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference">BuildxBuilderKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remote">remote</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference">BuildxBuilderRemoteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.appendInput">appendInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrapInput">bootstrapInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfigInput">buildkitConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlagsInput">buildkitFlagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainerInput">dockerContainerInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverInput">driverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptionsInput">driverOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetesInput">kubernetesInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttributeInput">nodeAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platformInput">platformInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remoteInput">remoteInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.useInput">useInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.append">append</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrap">bootstrap</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfig">buildkitConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlags">buildkitFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driver">driver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptions">driverOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttribute">nodeAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platform">platform</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.use">use</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dockerContainer`<sup>Required</sup> <a name="dockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainer"></a>

```typescript
public readonly dockerContainer: BuildxBuilderDockerContainerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference">BuildxBuilderDockerContainerOutputReference</a>

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetes"></a>

```typescript
public readonly kubernetes: BuildxBuilderKubernetesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference">BuildxBuilderKubernetesOutputReference</a>

---

##### `remote`<sup>Required</sup> <a name="remote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remote"></a>

```typescript
public readonly remote: BuildxBuilderRemoteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference">BuildxBuilderRemoteOutputReference</a>

---

##### `appendInput`<sup>Optional</sup> <a name="appendInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.appendInput"></a>

```typescript
public readonly appendInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bootstrapInput`<sup>Optional</sup> <a name="bootstrapInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrapInput"></a>

```typescript
public readonly bootstrapInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `buildkitConfigInput`<sup>Optional</sup> <a name="buildkitConfigInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfigInput"></a>

```typescript
public readonly buildkitConfigInput: string;
```

- *Type:* string

---

##### `buildkitFlagsInput`<sup>Optional</sup> <a name="buildkitFlagsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlagsInput"></a>

```typescript
public readonly buildkitFlagsInput: string;
```

- *Type:* string

---

##### `dockerContainerInput`<sup>Optional</sup> <a name="dockerContainerInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainerInput"></a>

```typescript
public readonly dockerContainerInput: BuildxBuilderDockerContainer;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

---

##### `driverInput`<sup>Optional</sup> <a name="driverInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverInput"></a>

```typescript
public readonly driverInput: string;
```

- *Type:* string

---

##### `driverOptionsInput`<sup>Optional</sup> <a name="driverOptionsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptionsInput"></a>

```typescript
public readonly driverOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubernetesInput`<sup>Optional</sup> <a name="kubernetesInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetesInput"></a>

```typescript
public readonly kubernetesInput: BuildxBuilderKubernetes;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeAttributeInput`<sup>Optional</sup> <a name="nodeAttributeInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttributeInput"></a>

```typescript
public readonly nodeAttributeInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platformInput"></a>

```typescript
public readonly platformInput: string[];
```

- *Type:* string[]

---

##### `remoteInput`<sup>Optional</sup> <a name="remoteInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remoteInput"></a>

```typescript
public readonly remoteInput: BuildxBuilderRemote;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

---

##### `useInput`<sup>Optional</sup> <a name="useInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.useInput"></a>

```typescript
public readonly useInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `append`<sup>Required</sup> <a name="append" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.append"></a>

```typescript
public readonly append: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bootstrap`<sup>Required</sup> <a name="bootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrap"></a>

```typescript
public readonly bootstrap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `buildkitConfig`<sup>Required</sup> <a name="buildkitConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfig"></a>

```typescript
public readonly buildkitConfig: string;
```

- *Type:* string

---

##### `buildkitFlags`<sup>Required</sup> <a name="buildkitFlags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlags"></a>

```typescript
public readonly buildkitFlags: string;
```

- *Type:* string

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

---

##### `driverOptions`<sup>Required</sup> <a name="driverOptions" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptions"></a>

```typescript
public readonly driverOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeAttribute`<sup>Required</sup> <a name="nodeAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttribute"></a>

```typescript
public readonly nodeAttribute: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platform"></a>

```typescript
public readonly platform: string[];
```

- *Type:* string[]

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.use"></a>

```typescript
public readonly use: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BuildxBuilderConfig <a name="BuildxBuilderConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.Initializer"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

const buildxBuilderConfig: buildxBuilder.BuildxBuilderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.append">append</a></code> | <code>boolean \| cdktf.IResolvable</code> | Append a node to builder instead of changing it. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.bootstrap">bootstrap</a></code> | <code>boolean \| cdktf.IResolvable</code> | Automatically boot the builder after creation. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitConfig">buildkitConfig</a></code> | <code>string</code> | BuildKit daemon config file. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitFlags">buildkitFlags</a></code> | <code>string</code> | BuildKit flags to set for the builder. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dockerContainer">dockerContainer</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | docker_container block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driver">driver</a></code> | <code>string</code> | The driver to use for the Buildx builder (e.g., docker-container, kubernetes). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driverOptions">driverOptions</a></code> | <code>{[ key: string ]: string}</code> | Additional options for the Buildx driver in the form of `key=value,...`. These options are driver-specific. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.endpoint">endpoint</a></code> | <code>string</code> | The endpoint or context to use for the Buildx builder, where context is the name of a context from docker context ls and endpoint is the address for Docker socket (eg. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#id BuildxBuilder#id}. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.name">name</a></code> | <code>string</code> | The name of the Buildx builder. IF not specified, a random name will be generated. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.nodeAttribute">nodeAttribute</a></code> | <code>string</code> | Create/modify node with given name. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.platform">platform</a></code> | <code>string[]</code> | Fixed platforms for current node. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.remote">remote</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | remote block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.use">use</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set the current builder instance as the default for the current context. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `append`<sup>Optional</sup> <a name="append" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.append"></a>

```typescript
public readonly append: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Append a node to builder instead of changing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#append BuildxBuilder#append}

---

##### `bootstrap`<sup>Optional</sup> <a name="bootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.bootstrap"></a>

```typescript
public readonly bootstrap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Automatically boot the builder after creation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#bootstrap BuildxBuilder#bootstrap}

---

##### `buildkitConfig`<sup>Optional</sup> <a name="buildkitConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitConfig"></a>

```typescript
public readonly buildkitConfig: string;
```

- *Type:* string

BuildKit daemon config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#buildkit_config BuildxBuilder#buildkit_config}

---

##### `buildkitFlags`<sup>Optional</sup> <a name="buildkitFlags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitFlags"></a>

```typescript
public readonly buildkitFlags: string;
```

- *Type:* string

BuildKit flags to set for the builder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#buildkit_flags BuildxBuilder#buildkit_flags}

---

##### `dockerContainer`<sup>Optional</sup> <a name="dockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dockerContainer"></a>

```typescript
public readonly dockerContainer: BuildxBuilderDockerContainer;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

docker_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#docker_container BuildxBuilder#docker_container}

---

##### `driver`<sup>Optional</sup> <a name="driver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

The driver to use for the Buildx builder (e.g., docker-container, kubernetes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#driver BuildxBuilder#driver}

---

##### `driverOptions`<sup>Optional</sup> <a name="driverOptions" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driverOptions"></a>

```typescript
public readonly driverOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional options for the Buildx driver in the form of `key=value,...`. These options are driver-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#driver_options BuildxBuilder#driver_options}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

The endpoint or context to use for the Buildx builder, where context is the name of a context from docker context ls and endpoint is the address for Docker socket (eg.

DOCKER_HOST value). By default, the current Docker configuration is used for determining the context/endpoint value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#endpoint BuildxBuilder#endpoint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#id BuildxBuilder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.kubernetes"></a>

```typescript
public readonly kubernetes: BuildxBuilderKubernetes;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#kubernetes BuildxBuilder#kubernetes}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Buildx builder. IF not specified, a random name will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#name BuildxBuilder#name}

---

##### `nodeAttribute`<sup>Optional</sup> <a name="nodeAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.nodeAttribute"></a>

```typescript
public readonly nodeAttribute: string;
```

- *Type:* string

Create/modify node with given name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#node BuildxBuilder#node}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.platform"></a>

```typescript
public readonly platform: string[];
```

- *Type:* string[]

Fixed platforms for current node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#platform BuildxBuilder#platform}

---

##### `remote`<sup>Optional</sup> <a name="remote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.remote"></a>

```typescript
public readonly remote: BuildxBuilderRemote;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

remote block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#remote BuildxBuilder#remote}

---

##### `use`<sup>Optional</sup> <a name="use" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.use"></a>

```typescript
public readonly use: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set the current builder instance as the default for the current context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#use BuildxBuilder#use}

---

### BuildxBuilderDockerContainer <a name="BuildxBuilderDockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.Initializer"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

const buildxBuilderDockerContainer: buildxBuilder.BuildxBuilderDockerContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cgroupParent">cgroupParent</a></code> | <code>string</code> | Sets the cgroup parent of the container if Docker is using the "cgroupfs" driver. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuPeriod">cpuPeriod</a></code> | <code>string</code> | Sets the CPU CFS scheduler period for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuQuota">cpuQuota</a></code> | <code>string</code> | Imposes a CPU CFS quota on the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetCpus">cpusetCpus</a></code> | <code>string</code> | Limits the set of CPU cores the container can use. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetMems">cpusetMems</a></code> | <code>string</code> | Limits the set of CPU memory nodes the container can use. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuShares">cpuShares</a></code> | <code>string</code> | Configures CPU shares (relative weight) of the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.defaultLoad">defaultLoad</a></code> | <code>boolean \| cdktf.IResolvable</code> | Automatically load images to the Docker Engine image store. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables in the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.image">image</a></code> | <code>string</code> | Sets the BuildKit image to use for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memory">memory</a></code> | <code>string</code> | Sets the amount of memory the container can use. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memorySwap">memorySwap</a></code> | <code>string</code> | Sets the memory swap limit for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.network">network</a></code> | <code>string</code> | Sets the network mode for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.restartPolicy">restartPolicy</a></code> | <code>string</code> | Sets the container's restart policy. |

---

##### `cgroupParent`<sup>Optional</sup> <a name="cgroupParent" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cgroupParent"></a>

```typescript
public readonly cgroupParent: string;
```

- *Type:* string

Sets the cgroup parent of the container if Docker is using the "cgroupfs" driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cgroup_parent BuildxBuilder#cgroup_parent}

---

##### `cpuPeriod`<sup>Optional</sup> <a name="cpuPeriod" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuPeriod"></a>

```typescript
public readonly cpuPeriod: string;
```

- *Type:* string

Sets the CPU CFS scheduler period for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpu_period BuildxBuilder#cpu_period}

---

##### `cpuQuota`<sup>Optional</sup> <a name="cpuQuota" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuQuota"></a>

```typescript
public readonly cpuQuota: string;
```

- *Type:* string

Imposes a CPU CFS quota on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpu_quota BuildxBuilder#cpu_quota}

---

##### `cpusetCpus`<sup>Optional</sup> <a name="cpusetCpus" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetCpus"></a>

```typescript
public readonly cpusetCpus: string;
```

- *Type:* string

Limits the set of CPU cores the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpuset_cpus BuildxBuilder#cpuset_cpus}

---

##### `cpusetMems`<sup>Optional</sup> <a name="cpusetMems" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetMems"></a>

```typescript
public readonly cpusetMems: string;
```

- *Type:* string

Limits the set of CPU memory nodes the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpuset_mems BuildxBuilder#cpuset_mems}

---

##### `cpuShares`<sup>Optional</sup> <a name="cpuShares" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuShares"></a>

```typescript
public readonly cpuShares: string;
```

- *Type:* string

Configures CPU shares (relative weight) of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpu_shares BuildxBuilder#cpu_shares}

---

##### `defaultLoad`<sup>Optional</sup> <a name="defaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.defaultLoad"></a>

```typescript
public readonly defaultLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#env BuildxBuilder#env}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Sets the BuildKit image to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#image BuildxBuilder#image}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

Sets the amount of memory the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

##### `memorySwap`<sup>Optional</sup> <a name="memorySwap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memorySwap"></a>

```typescript
public readonly memorySwap: string;
```

- *Type:* string

Sets the memory swap limit for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#memory_swap BuildxBuilder#memory_swap}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Sets the network mode for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#network BuildxBuilder#network}

---

##### `restartPolicy`<sup>Optional</sup> <a name="restartPolicy" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: string;
```

- *Type:* string

Sets the container's restart policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#restart_policy BuildxBuilder#restart_policy}

---

### BuildxBuilderKubernetes <a name="BuildxBuilderKubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.Initializer"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

const buildxBuilderKubernetes: buildxBuilder.BuildxBuilderKubernetes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.annotations">annotations</a></code> | <code>string</code> | Sets additional annotations on the deployments and pods. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.defaultLoad">defaultLoad</a></code> | <code>boolean \| cdktf.IResolvable</code> | Automatically load images to the Docker Engine image store. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.image">image</a></code> | <code>string</code> | Sets the image to use for running BuildKit. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.labels">labels</a></code> | <code>string</code> | Sets additional labels on the deployments and pods. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.loadbalance">loadbalance</a></code> | <code>string</code> | Load-balancing strategy (sticky or random). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.namespace">namespace</a></code> | <code>string</code> | Sets the Kubernetes namespace. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.nodeselector">nodeselector</a></code> | <code>string</code> | Sets the pod's nodeSelector label(s). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.qemu">qemu</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a></code> | qemu block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.replicas">replicas</a></code> | <code>number</code> | Sets the number of Pod replicas to create. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.requests">requests</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a></code> | requests block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.rootless">rootless</a></code> | <code>boolean \| cdktf.IResolvable</code> | Run the container as a non-root user. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.schedulername">schedulername</a></code> | <code>string</code> | Sets the scheduler responsible for scheduling the pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.serviceaccount">serviceaccount</a></code> | <code>string</code> | Sets the pod's serviceAccountName. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.timeout">timeout</a></code> | <code>string</code> | Set the timeout limit for pod provisioning. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.tolerations">tolerations</a></code> | <code>string</code> | Configures the pod's taint toleration. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.annotations"></a>

```typescript
public readonly annotations: string;
```

- *Type:* string

Sets additional annotations on the deployments and pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#annotations BuildxBuilder#annotations}

---

##### `defaultLoad`<sup>Optional</sup> <a name="defaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.defaultLoad"></a>

```typescript
public readonly defaultLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Sets the image to use for running BuildKit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#image BuildxBuilder#image}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.labels"></a>

```typescript
public readonly labels: string;
```

- *Type:* string

Sets additional labels on the deployments and pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#labels BuildxBuilder#labels}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.limits"></a>

```typescript
public readonly limits: BuildxBuilderKubernetesLimits;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#limits BuildxBuilder#limits}

---

##### `loadbalance`<sup>Optional</sup> <a name="loadbalance" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.loadbalance"></a>

```typescript
public readonly loadbalance: string;
```

- *Type:* string

Load-balancing strategy (sticky or random).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#loadbalance BuildxBuilder#loadbalance}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Sets the Kubernetes namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#namespace BuildxBuilder#namespace}

---

##### `nodeselector`<sup>Optional</sup> <a name="nodeselector" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.nodeselector"></a>

```typescript
public readonly nodeselector: string;
```

- *Type:* string

Sets the pod's nodeSelector label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#nodeselector BuildxBuilder#nodeselector}

---

##### `qemu`<sup>Optional</sup> <a name="qemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.qemu"></a>

```typescript
public readonly qemu: BuildxBuilderKubernetesQemu;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

qemu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#qemu BuildxBuilder#qemu}

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

Sets the number of Pod replicas to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#replicas BuildxBuilder#replicas}

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.requests"></a>

```typescript
public readonly requests: BuildxBuilderKubernetesRequests;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

requests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#requests BuildxBuilder#requests}

---

##### `rootless`<sup>Optional</sup> <a name="rootless" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.rootless"></a>

```typescript
public readonly rootless: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Run the container as a non-root user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#rootless BuildxBuilder#rootless}

---

##### `schedulername`<sup>Optional</sup> <a name="schedulername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.schedulername"></a>

```typescript
public readonly schedulername: string;
```

- *Type:* string

Sets the scheduler responsible for scheduling the pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#schedulername BuildxBuilder#schedulername}

---

##### `serviceaccount`<sup>Optional</sup> <a name="serviceaccount" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.serviceaccount"></a>

```typescript
public readonly serviceaccount: string;
```

- *Type:* string

Sets the pod's serviceAccountName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#serviceaccount BuildxBuilder#serviceaccount}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Set the timeout limit for pod provisioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#timeout BuildxBuilder#timeout}

---

##### `tolerations`<sup>Optional</sup> <a name="tolerations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.tolerations"></a>

```typescript
public readonly tolerations: string;
```

- *Type:* string

Configures the pod's taint toleration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#tolerations BuildxBuilder#tolerations}

---

### BuildxBuilderKubernetesLimits <a name="BuildxBuilderKubernetesLimits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.Initializer"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

const buildxBuilderKubernetesLimits: buildxBuilder.BuildxBuilderKubernetesLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.cpu">cpu</a></code> | <code>string</code> | CPU limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.ephemeralStorage">ephemeralStorage</a></code> | <code>string</code> | Ephemeral storage limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.memory">memory</a></code> | <code>string</code> | Memory limit for the Kubernetes pod. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

CPU limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpu BuildxBuilder#cpu}

---

##### `ephemeralStorage`<sup>Optional</sup> <a name="ephemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: string;
```

- *Type:* string

Ephemeral storage limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#ephemeral_storage BuildxBuilder#ephemeral_storage}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

Memory limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

### BuildxBuilderKubernetesQemu <a name="BuildxBuilderKubernetesQemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.Initializer"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

const buildxBuilderKubernetesQemu: buildxBuilder.BuildxBuilderKubernetesQemu = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.image">image</a></code> | <code>string</code> | Sets the QEMU emulation image. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.install">install</a></code> | <code>boolean \| cdktf.IResolvable</code> | Install QEMU emulation for multi-platform support. |

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Sets the QEMU emulation image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#image BuildxBuilder#image}

---

##### `install`<sup>Optional</sup> <a name="install" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.install"></a>

```typescript
public readonly install: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Install QEMU emulation for multi-platform support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#install BuildxBuilder#install}

---

### BuildxBuilderKubernetesRequests <a name="BuildxBuilderKubernetesRequests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.Initializer"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

const buildxBuilderKubernetesRequests: buildxBuilder.BuildxBuilderKubernetesRequests = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.cpu">cpu</a></code> | <code>string</code> | CPU limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.ephemeralStorage">ephemeralStorage</a></code> | <code>string</code> | Ephemeral storage limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.memory">memory</a></code> | <code>string</code> | Memory limit for the Kubernetes pod. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

CPU limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cpu BuildxBuilder#cpu}

---

##### `ephemeralStorage`<sup>Optional</sup> <a name="ephemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: string;
```

- *Type:* string

Ephemeral storage limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#ephemeral_storage BuildxBuilder#ephemeral_storage}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

Memory limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

### BuildxBuilderRemote <a name="BuildxBuilderRemote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.Initializer"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

const buildxBuilderRemote: buildxBuilder.BuildxBuilderRemote = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cacert">cacert</a></code> | <code>string</code> | Absolute path to the TLS certificate authority used for validation. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cert">cert</a></code> | <code>string</code> | Absolute path to the TLS client certificate to present to buildkitd. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.defaultLoad">defaultLoad</a></code> | <code>boolean \| cdktf.IResolvable</code> | Automatically load images to the Docker Engine image store. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.key">key</a></code> | <code>string</code> | Sets the TLS client key. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.servername">servername</a></code> | <code>string</code> | TLS server name used in requests. |

---

##### `cacert`<sup>Optional</sup> <a name="cacert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cacert"></a>

```typescript
public readonly cacert: string;
```

- *Type:* string

Absolute path to the TLS certificate authority used for validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cacert BuildxBuilder#cacert}

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

Absolute path to the TLS client certificate to present to buildkitd.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#cert BuildxBuilder#cert}

---

##### `defaultLoad`<sup>Optional</sup> <a name="defaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.defaultLoad"></a>

```typescript
public readonly defaultLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Sets the TLS client key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#key BuildxBuilder#key}

---

##### `servername`<sup>Optional</sup> <a name="servername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.servername"></a>

```typescript
public readonly servername: string;
```

- *Type:* string

TLS server name used in requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/buildx_builder#servername BuildxBuilder#servername}

---

## Classes <a name="Classes" id="Classes"></a>

### BuildxBuilderDockerContainerOutputReference <a name="BuildxBuilderDockerContainerOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

new buildxBuilder.BuildxBuilderDockerContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCgroupParent">resetCgroupParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuPeriod">resetCpuPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuQuota">resetCpuQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpusetCpus">resetCpusetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpusetMems">resetCpusetMems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuShares">resetCpuShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetDefaultLoad">resetDefaultLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetMemorySwap">resetMemorySwap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetRestartPolicy">resetRestartPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCgroupParent` <a name="resetCgroupParent" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCgroupParent"></a>

```typescript
public resetCgroupParent(): void
```

##### `resetCpuPeriod` <a name="resetCpuPeriod" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuPeriod"></a>

```typescript
public resetCpuPeriod(): void
```

##### `resetCpuQuota` <a name="resetCpuQuota" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuQuota"></a>

```typescript
public resetCpuQuota(): void
```

##### `resetCpusetCpus` <a name="resetCpusetCpus" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpusetCpus"></a>

```typescript
public resetCpusetCpus(): void
```

##### `resetCpusetMems` <a name="resetCpusetMems" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpusetMems"></a>

```typescript
public resetCpusetMems(): void
```

##### `resetCpuShares` <a name="resetCpuShares" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuShares"></a>

```typescript
public resetCpuShares(): void
```

##### `resetDefaultLoad` <a name="resetDefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetDefaultLoad"></a>

```typescript
public resetDefaultLoad(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetMemorySwap` <a name="resetMemorySwap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetMemorySwap"></a>

```typescript
public resetMemorySwap(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetRestartPolicy` <a name="resetRestartPolicy" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetRestartPolicy"></a>

```typescript
public resetRestartPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParentInput">cgroupParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriodInput">cpuPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuotaInput">cpuQuotaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpusInput">cpusetCpusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMemsInput">cpusetMemsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuSharesInput">cpuSharesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoadInput">defaultLoadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.envInput">envInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwapInput">memorySwapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicyInput">restartPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParent">cgroupParent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriod">cpuPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuota">cpuQuota</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpus">cpusetCpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMems">cpusetMems</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuShares">cpuShares</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoad">defaultLoad</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwap">memorySwap</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicy">restartPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cgroupParentInput`<sup>Optional</sup> <a name="cgroupParentInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParentInput"></a>

```typescript
public readonly cgroupParentInput: string;
```

- *Type:* string

---

##### `cpuPeriodInput`<sup>Optional</sup> <a name="cpuPeriodInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriodInput"></a>

```typescript
public readonly cpuPeriodInput: string;
```

- *Type:* string

---

##### `cpuQuotaInput`<sup>Optional</sup> <a name="cpuQuotaInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuotaInput"></a>

```typescript
public readonly cpuQuotaInput: string;
```

- *Type:* string

---

##### `cpusetCpusInput`<sup>Optional</sup> <a name="cpusetCpusInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpusInput"></a>

```typescript
public readonly cpusetCpusInput: string;
```

- *Type:* string

---

##### `cpusetMemsInput`<sup>Optional</sup> <a name="cpusetMemsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMemsInput"></a>

```typescript
public readonly cpusetMemsInput: string;
```

- *Type:* string

---

##### `cpuSharesInput`<sup>Optional</sup> <a name="cpuSharesInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuSharesInput"></a>

```typescript
public readonly cpuSharesInput: string;
```

- *Type:* string

---

##### `defaultLoadInput`<sup>Optional</sup> <a name="defaultLoadInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoadInput"></a>

```typescript
public readonly defaultLoadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.envInput"></a>

```typescript
public readonly envInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `memorySwapInput`<sup>Optional</sup> <a name="memorySwapInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwapInput"></a>

```typescript
public readonly memorySwapInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `restartPolicyInput`<sup>Optional</sup> <a name="restartPolicyInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicyInput"></a>

```typescript
public readonly restartPolicyInput: string;
```

- *Type:* string

---

##### `cgroupParent`<sup>Required</sup> <a name="cgroupParent" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParent"></a>

```typescript
public readonly cgroupParent: string;
```

- *Type:* string

---

##### `cpuPeriod`<sup>Required</sup> <a name="cpuPeriod" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriod"></a>

```typescript
public readonly cpuPeriod: string;
```

- *Type:* string

---

##### `cpuQuota`<sup>Required</sup> <a name="cpuQuota" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuota"></a>

```typescript
public readonly cpuQuota: string;
```

- *Type:* string

---

##### `cpusetCpus`<sup>Required</sup> <a name="cpusetCpus" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpus"></a>

```typescript
public readonly cpusetCpus: string;
```

- *Type:* string

---

##### `cpusetMems`<sup>Required</sup> <a name="cpusetMems" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMems"></a>

```typescript
public readonly cpusetMems: string;
```

- *Type:* string

---

##### `cpuShares`<sup>Required</sup> <a name="cpuShares" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuShares"></a>

```typescript
public readonly cpuShares: string;
```

- *Type:* string

---

##### `defaultLoad`<sup>Required</sup> <a name="defaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoad"></a>

```typescript
public readonly defaultLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `memorySwap`<sup>Required</sup> <a name="memorySwap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwap"></a>

```typescript
public readonly memorySwap: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `restartPolicy`<sup>Required</sup> <a name="restartPolicy" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BuildxBuilderDockerContainer;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

---


### BuildxBuilderKubernetesLimitsOutputReference <a name="BuildxBuilderKubernetesLimitsOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

new buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetEphemeralStorage">resetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetMemory">resetMemory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetEphemeralStorage` <a name="resetEphemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetEphemeralStorage"></a>

```typescript
public resetEphemeralStorage(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpuInput">cpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorageInput">ephemeralStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpu">cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorage">ephemeralStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: string;
```

- *Type:* string

---

##### `ephemeralStorageInput`<sup>Optional</sup> <a name="ephemeralStorageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorageInput"></a>

```typescript
public readonly ephemeralStorageInput: string;
```

- *Type:* string

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BuildxBuilderKubernetesLimits;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

---


### BuildxBuilderKubernetesOutputReference <a name="BuildxBuilderKubernetesOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

new buildxBuilder.BuildxBuilderKubernetesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putLimits">putLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putQemu">putQemu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putRequests">putRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetDefaultLoad">resetDefaultLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLoadbalance">resetLoadbalance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetNodeselector">resetNodeselector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetQemu">resetQemu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetReplicas">resetReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetRequests">resetRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetRootless">resetRootless</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetSchedulername">resetSchedulername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetServiceaccount">resetServiceaccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetTolerations">resetTolerations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLimits` <a name="putLimits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putLimits"></a>

```typescript
public putLimits(value: BuildxBuilderKubernetesLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

---

##### `putQemu` <a name="putQemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putQemu"></a>

```typescript
public putQemu(value: BuildxBuilderKubernetesQemu): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putQemu.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

---

##### `putRequests` <a name="putRequests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putRequests"></a>

```typescript
public putRequests(value: BuildxBuilderKubernetesRequests): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putRequests.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDefaultLoad` <a name="resetDefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetDefaultLoad"></a>

```typescript
public resetDefaultLoad(): void
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLimits"></a>

```typescript
public resetLimits(): void
```

##### `resetLoadbalance` <a name="resetLoadbalance" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLoadbalance"></a>

```typescript
public resetLoadbalance(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNodeselector` <a name="resetNodeselector" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetNodeselector"></a>

```typescript
public resetNodeselector(): void
```

##### `resetQemu` <a name="resetQemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetQemu"></a>

```typescript
public resetQemu(): void
```

##### `resetReplicas` <a name="resetReplicas" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetReplicas"></a>

```typescript
public resetReplicas(): void
```

##### `resetRequests` <a name="resetRequests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetRequests"></a>

```typescript
public resetRequests(): void
```

##### `resetRootless` <a name="resetRootless" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetRootless"></a>

```typescript
public resetRootless(): void
```

##### `resetSchedulername` <a name="resetSchedulername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetSchedulername"></a>

```typescript
public resetSchedulername(): void
```

##### `resetServiceaccount` <a name="resetServiceaccount" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetServiceaccount"></a>

```typescript
public resetServiceaccount(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetTolerations` <a name="resetTolerations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetTolerations"></a>

```typescript
public resetTolerations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference">BuildxBuilderKubernetesLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemu">qemu</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference">BuildxBuilderKubernetesQemuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requests">requests</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference">BuildxBuilderKubernetesRequestsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoadInput">defaultLoadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labelsInput">labelsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limitsInput">limitsInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalanceInput">loadbalanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselectorInput">nodeselectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemuInput">qemuInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicasInput">replicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requestsInput">requestsInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootlessInput">rootlessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulernameInput">schedulernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccountInput">serviceaccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerationsInput">tolerationsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotations">annotations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoad">defaultLoad</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labels">labels</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalance">loadbalance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselector">nodeselector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootless">rootless</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulername">schedulername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccount">serviceaccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerations">tolerations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limits"></a>

```typescript
public readonly limits: BuildxBuilderKubernetesLimitsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference">BuildxBuilderKubernetesLimitsOutputReference</a>

---

##### `qemu`<sup>Required</sup> <a name="qemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemu"></a>

```typescript
public readonly qemu: BuildxBuilderKubernetesQemuOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference">BuildxBuilderKubernetesQemuOutputReference</a>

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requests"></a>

```typescript
public readonly requests: BuildxBuilderKubernetesRequestsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference">BuildxBuilderKubernetesRequestsOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string;
```

- *Type:* string

---

##### `defaultLoadInput`<sup>Optional</sup> <a name="defaultLoadInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoadInput"></a>

```typescript
public readonly defaultLoadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: string;
```

- *Type:* string

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limitsInput"></a>

```typescript
public readonly limitsInput: BuildxBuilderKubernetesLimits;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

---

##### `loadbalanceInput`<sup>Optional</sup> <a name="loadbalanceInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalanceInput"></a>

```typescript
public readonly loadbalanceInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `nodeselectorInput`<sup>Optional</sup> <a name="nodeselectorInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselectorInput"></a>

```typescript
public readonly nodeselectorInput: string;
```

- *Type:* string

---

##### `qemuInput`<sup>Optional</sup> <a name="qemuInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemuInput"></a>

```typescript
public readonly qemuInput: BuildxBuilderKubernetesQemu;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicasInput"></a>

```typescript
public readonly replicasInput: number;
```

- *Type:* number

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requestsInput"></a>

```typescript
public readonly requestsInput: BuildxBuilderKubernetesRequests;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

---

##### `rootlessInput`<sup>Optional</sup> <a name="rootlessInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootlessInput"></a>

```typescript
public readonly rootlessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schedulernameInput`<sup>Optional</sup> <a name="schedulernameInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulernameInput"></a>

```typescript
public readonly schedulernameInput: string;
```

- *Type:* string

---

##### `serviceaccountInput`<sup>Optional</sup> <a name="serviceaccountInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccountInput"></a>

```typescript
public readonly serviceaccountInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `tolerationsInput`<sup>Optional</sup> <a name="tolerationsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerationsInput"></a>

```typescript
public readonly tolerationsInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotations"></a>

```typescript
public readonly annotations: string;
```

- *Type:* string

---

##### `defaultLoad`<sup>Required</sup> <a name="defaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoad"></a>

```typescript
public readonly defaultLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labels"></a>

```typescript
public readonly labels: string;
```

- *Type:* string

---

##### `loadbalance`<sup>Required</sup> <a name="loadbalance" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalance"></a>

```typescript
public readonly loadbalance: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `nodeselector`<sup>Required</sup> <a name="nodeselector" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselector"></a>

```typescript
public readonly nodeselector: string;
```

- *Type:* string

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

##### `rootless`<sup>Required</sup> <a name="rootless" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootless"></a>

```typescript
public readonly rootless: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schedulername`<sup>Required</sup> <a name="schedulername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulername"></a>

```typescript
public readonly schedulername: string;
```

- *Type:* string

---

##### `serviceaccount`<sup>Required</sup> <a name="serviceaccount" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccount"></a>

```typescript
public readonly serviceaccount: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `tolerations`<sup>Required</sup> <a name="tolerations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerations"></a>

```typescript
public readonly tolerations: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BuildxBuilderKubernetes;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

---


### BuildxBuilderKubernetesQemuOutputReference <a name="BuildxBuilderKubernetesQemuOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

new buildxBuilder.BuildxBuilderKubernetesQemuOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resetInstall">resetInstall</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImage` <a name="resetImage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetInstall` <a name="resetInstall" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resetInstall"></a>

```typescript
public resetInstall(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.installInput">installInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.install">install</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `installInput`<sup>Optional</sup> <a name="installInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.installInput"></a>

```typescript
public readonly installInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `install`<sup>Required</sup> <a name="install" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.install"></a>

```typescript
public readonly install: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BuildxBuilderKubernetesQemu;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

---


### BuildxBuilderKubernetesRequestsOutputReference <a name="BuildxBuilderKubernetesRequestsOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

new buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetEphemeralStorage">resetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetMemory">resetMemory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetEphemeralStorage` <a name="resetEphemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetEphemeralStorage"></a>

```typescript
public resetEphemeralStorage(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpuInput">cpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorageInput">ephemeralStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memoryInput">memoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpu">cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorage">ephemeralStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: string;
```

- *Type:* string

---

##### `ephemeralStorageInput`<sup>Optional</sup> <a name="ephemeralStorageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorageInput"></a>

```typescript
public readonly ephemeralStorageInput: string;
```

- *Type:* string

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BuildxBuilderKubernetesRequests;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

---


### BuildxBuilderRemoteOutputReference <a name="BuildxBuilderRemoteOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer"></a>

```typescript
import { buildxBuilder } from '@cdktf/provider-docker'

new buildxBuilder.BuildxBuilderRemoteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetCacert">resetCacert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetCert">resetCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetDefaultLoad">resetDefaultLoad</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetServername">resetServername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacert` <a name="resetCacert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetCacert"></a>

```typescript
public resetCacert(): void
```

##### `resetCert` <a name="resetCert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetCert"></a>

```typescript
public resetCert(): void
```

##### `resetDefaultLoad` <a name="resetDefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetDefaultLoad"></a>

```typescript
public resetDefaultLoad(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetServername` <a name="resetServername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetServername"></a>

```typescript
public resetServername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacertInput">cacertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.certInput">certInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoadInput">defaultLoadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servernameInput">servernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacert">cacert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cert">cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoad">defaultLoad</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servername">servername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacertInput`<sup>Optional</sup> <a name="cacertInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacertInput"></a>

```typescript
public readonly cacertInput: string;
```

- *Type:* string

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.certInput"></a>

```typescript
public readonly certInput: string;
```

- *Type:* string

---

##### `defaultLoadInput`<sup>Optional</sup> <a name="defaultLoadInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoadInput"></a>

```typescript
public readonly defaultLoadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `servernameInput`<sup>Optional</sup> <a name="servernameInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servernameInput"></a>

```typescript
public readonly servernameInput: string;
```

- *Type:* string

---

##### `cacert`<sup>Required</sup> <a name="cacert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacert"></a>

```typescript
public readonly cacert: string;
```

- *Type:* string

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

---

##### `defaultLoad`<sup>Required</sup> <a name="defaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoad"></a>

```typescript
public readonly defaultLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `servername`<sup>Required</sup> <a name="servername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servername"></a>

```typescript
public readonly servername: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BuildxBuilderRemote;
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

---



