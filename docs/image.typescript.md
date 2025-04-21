# `image` Submodule <a name="`image` Submodule" id="@cdktf/provider-docker.image"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Image <a name="Image" id="@cdktf/provider-docker.image.Image"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image docker_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.Image.Initializer"></a>

```typescript
import { image } from '@cdktf/provider-docker'

new image.Image(scope: Construct, id: string, config: ImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.image.Image.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageConfig">ImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.image.Image.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.Image.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-docker.image.Image.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.image.ImageConfig">ImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.image.Image.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.image.Image.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.image.Image.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.image.Image.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-docker.image.Image.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-docker.image.Image.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-docker.image.Image.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-docker.image.Image.putBuildAttribute">putBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetBuildAttribute">resetBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetForceRemove">resetForceRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetKeepLocally">resetKeepLocally</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetPullTriggers">resetPullTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.image.Image.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.image.Image.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.image.Image.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.image.Image.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.image.Image.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.image.Image.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.image.Image.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-docker.image.Image.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.image.Image.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.image.Image.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-docker.image.Image.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.image.Image.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.image.Image.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.image.Image.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.image.Image.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.image.Image.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.image.Image.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.image.Image.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.image.Image.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.image.Image.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.image.Image.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-docker.image.Image.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-docker.image.Image.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.Image.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.image.Image.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.image.Image.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.Image.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-docker.image.Image.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.Image.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-docker.image.Image.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.image.Image.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-docker.image.Image.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-docker.image.Image.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.Image.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBuildAttribute` <a name="putBuildAttribute" id="@cdktf/provider-docker.image.Image.putBuildAttribute"></a>

```typescript
public putBuildAttribute(value: ImageBuild): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.image.Image.putBuildAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-docker.image.Image.putTimeouts"></a>

```typescript
public putTimeouts(value: ImageTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.image.Image.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a>

---

##### `resetBuildAttribute` <a name="resetBuildAttribute" id="@cdktf/provider-docker.image.Image.resetBuildAttribute"></a>

```typescript
public resetBuildAttribute(): void
```

##### `resetForceRemove` <a name="resetForceRemove" id="@cdktf/provider-docker.image.Image.resetForceRemove"></a>

```typescript
public resetForceRemove(): void
```

##### `resetKeepLocally` <a name="resetKeepLocally" id="@cdktf/provider-docker.image.Image.resetKeepLocally"></a>

```typescript
public resetKeepLocally(): void
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktf/provider-docker.image.Image.resetPlatform"></a>

```typescript
public resetPlatform(): void
```

##### `resetPullTriggers` <a name="resetPullTriggers" id="@cdktf/provider-docker.image.Image.resetPullTriggers"></a>

```typescript
public resetPullTriggers(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-docker.image.Image.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-docker.image.Image.resetTriggers"></a>

```typescript
public resetTriggers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.image.Image.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-docker.image.Image.isConstruct"></a>

```typescript
import { image } from '@cdktf/provider-docker'

image.Image.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.image.Image.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.image.Image.isTerraformElement"></a>

```typescript
import { image } from '@cdktf/provider-docker'

image.Image.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.image.Image.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-docker.image.Image.isTerraformResource"></a>

```typescript
import { image } from '@cdktf/provider-docker'

image.Image.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.image.Image.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-docker.image.Image.generateConfigForImport"></a>

```typescript
import { image } from '@cdktf/provider-docker'

image.Image.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.image.Image.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.image.Image.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Image to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.image.Image.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Image that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.image.Image.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Image to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.image.Image.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.buildAttribute">buildAttribute</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference">ImageBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.repoDigest">repoDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference">ImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.buildAttributeInput">buildAttributeInput</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.forceRemoveInput">forceRemoveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.keepLocallyInput">keepLocallyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.pullTriggersInput">pullTriggersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.triggersInput">triggersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.forceRemove">forceRemove</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.keepLocally">keepLocally</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.pullTriggers">pullTriggers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.Image.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.image.Image.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.image.Image.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.Image.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.image.Image.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-docker.image.Image.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.image.Image.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.image.Image.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.image.Image.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.image.Image.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.image.Image.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.image.Image.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.image.Image.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.image.Image.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.image.Image.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktf/provider-docker.image.Image.property.buildAttribute"></a>

```typescript
public readonly buildAttribute: ImageBuildOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuildOutputReference">ImageBuildOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.Image.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-docker.image.Image.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `repoDigest`<sup>Required</sup> <a name="repoDigest" id="@cdktf/provider-docker.image.Image.property.repoDigest"></a>

```typescript
public readonly repoDigest: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-docker.image.Image.property.timeouts"></a>

```typescript
public readonly timeouts: ImageTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference">ImageTimeoutsOutputReference</a>

---

##### `buildAttributeInput`<sup>Optional</sup> <a name="buildAttributeInput" id="@cdktf/provider-docker.image.Image.property.buildAttributeInput"></a>

```typescript
public readonly buildAttributeInput: ImageBuild;
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a>

---

##### `forceRemoveInput`<sup>Optional</sup> <a name="forceRemoveInput" id="@cdktf/provider-docker.image.Image.property.forceRemoveInput"></a>

```typescript
public readonly forceRemoveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keepLocallyInput`<sup>Optional</sup> <a name="keepLocallyInput" id="@cdktf/provider-docker.image.Image.property.keepLocallyInput"></a>

```typescript
public readonly keepLocallyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.image.Image.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-docker.image.Image.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `pullTriggersInput`<sup>Optional</sup> <a name="pullTriggersInput" id="@cdktf/provider-docker.image.Image.property.pullTriggersInput"></a>

```typescript
public readonly pullTriggersInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-docker.image.Image.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ImageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a>

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-docker.image.Image.property.triggersInput"></a>

```typescript
public readonly triggersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `forceRemove`<sup>Required</sup> <a name="forceRemove" id="@cdktf/provider-docker.image.Image.property.forceRemove"></a>

```typescript
public readonly forceRemove: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keepLocally`<sup>Required</sup> <a name="keepLocally" id="@cdktf/provider-docker.image.Image.property.keepLocally"></a>

```typescript
public readonly keepLocally: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.image.Image.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-docker.image.Image.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `pullTriggers`<sup>Required</sup> <a name="pullTriggers" id="@cdktf/provider-docker.image.Image.property.pullTriggers"></a>

```typescript
public readonly pullTriggers: string[];
```

- *Type:* string[]

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-docker.image.Image.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.Image.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.image.Image.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImageBuild <a name="ImageBuild" id="@cdktf/provider-docker.image.ImageBuild"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageBuild.Initializer"></a>

```typescript
import { image } from '@cdktf/provider-docker'

const imageBuild: image.ImageBuild = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.context">context</a></code> | <code>string</code> | Value to specify the build context. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.authConfig">authConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>[]</code> | auth_config block. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.buildArgs">buildArgs</a></code> | <code>{[ key: string ]: string}</code> | Pairs for build-time variables in the form of `ENDPOINT : "https://example.com"`. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.buildId">buildId</a></code> | <code>string</code> | BuildID is an optional identifier that can be passed together with the build request. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cacheFrom">cacheFrom</a></code> | <code>string[]</code> | Images to consider as cache sources. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cgroupParent">cgroupParent</a></code> | <code>string</code> | Optional parent cgroup for the container. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuPeriod">cpuPeriod</a></code> | <code>number</code> | The length of a CPU period in microseconds. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuQuota">cpuQuota</a></code> | <code>number</code> | Microseconds of CPU time that the container can get in a CPU period. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuSetCpus">cpuSetCpus</a></code> | <code>string</code> | CPUs in which to allow execution (e.g., `0-3`, `0`, `1`). |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuSetMems">cpuSetMems</a></code> | <code>string</code> | MEMs in which to allow execution (`0-3`, `0`, `1`). |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.cpuShares">cpuShares</a></code> | <code>number</code> | CPU shares (relative weight). |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.dockerfile">dockerfile</a></code> | <code>string</code> | Name of the Dockerfile. Defaults to `Dockerfile`. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.extraHosts">extraHosts</a></code> | <code>string[]</code> | A list of hostnames/IP mappings to add to the container’s /etc/hosts file. Specified in the form ["hostname:IP"]. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.forceRemove">forceRemove</a></code> | <code>boolean \| cdktf.IResolvable</code> | Always remove intermediate containers. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.isolation">isolation</a></code> | <code>string</code> | Isolation represents the isolation technology of a container. The supported values are. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.label">label</a></code> | <code>{[ key: string ]: string}</code> | Set metadata for an image. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined key/value metadata. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.memory">memory</a></code> | <code>number</code> | Set memory limit for build. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.memorySwap">memorySwap</a></code> | <code>number</code> | Total memory (memory + swap), -1 to enable unlimited swap. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.networkMode">networkMode</a></code> | <code>string</code> | Set the networking mode for the RUN instructions during build. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.noCache">noCache</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not use the cache when building the image. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.platform">platform</a></code> | <code>string</code> | Set platform if server is multi-platform capable. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.pullParent">pullParent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Attempt to pull the image even if an older image exists locally. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.remoteContext">remoteContext</a></code> | <code>string</code> | A Git repository URI or HTTP/HTTPS context URI. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.remove">remove</a></code> | <code>boolean \| cdktf.IResolvable</code> | Remove intermediate containers after a successful build. Defaults to `true`. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.secrets">secrets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>[]</code> | secrets block. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.securityOpt">securityOpt</a></code> | <code>string[]</code> | The security options. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.sessionId">sessionId</a></code> | <code>string</code> | Set an ID for the build session. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.shmSize">shmSize</a></code> | <code>number</code> | Size of /dev/shm in bytes. The size must be greater than 0. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.squash">squash</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true the new layers are squashed into a new image with a single new layer. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.suppressOutput">suppressOutput</a></code> | <code>boolean \| cdktf.IResolvable</code> | Suppress the build output and print image ID on success. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.tag">tag</a></code> | <code>string[]</code> | Name and optionally a tag in the 'name:tag' format. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.target">target</a></code> | <code>string</code> | Set the target build stage to build. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.ulimit">ulimit</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>[]</code> | ulimit block. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuild.property.version">version</a></code> | <code>string</code> | Version of the underlying builder to use. |

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-docker.image.ImageBuild.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

Value to specify the build context.

Currently, only a `PATH` context is supported. You can use the helper function '${path.cwd}/context-dir'. This always refers to the local working directory, even when building images on remote hosts. Please see https://docs.docker.com/build/building/context/ for more information about build contexts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#context Image#context}

---

##### `authConfig`<sup>Optional</sup> <a name="authConfig" id="@cdktf/provider-docker.image.ImageBuild.property.authConfig"></a>

```typescript
public readonly authConfig: IResolvable | ImageBuildAuthConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>[]

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#auth_config Image#auth_config}

---

##### `buildArgs`<sup>Optional</sup> <a name="buildArgs" id="@cdktf/provider-docker.image.ImageBuild.property.buildArgs"></a>

```typescript
public readonly buildArgs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Pairs for build-time variables in the form of `ENDPOINT : "https://example.com"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#build_args Image#build_args}

---

##### `buildId`<sup>Optional</sup> <a name="buildId" id="@cdktf/provider-docker.image.ImageBuild.property.buildId"></a>

```typescript
public readonly buildId: string;
```

- *Type:* string

BuildID is an optional identifier that can be passed together with the build request.

The same identifier can be used to gracefully cancel the build with the cancel request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#build_id Image#build_id}

---

##### `cacheFrom`<sup>Optional</sup> <a name="cacheFrom" id="@cdktf/provider-docker.image.ImageBuild.property.cacheFrom"></a>

```typescript
public readonly cacheFrom: string[];
```

- *Type:* string[]

Images to consider as cache sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cache_from Image#cache_from}

---

##### `cgroupParent`<sup>Optional</sup> <a name="cgroupParent" id="@cdktf/provider-docker.image.ImageBuild.property.cgroupParent"></a>

```typescript
public readonly cgroupParent: string;
```

- *Type:* string

Optional parent cgroup for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cgroup_parent Image#cgroup_parent}

---

##### `cpuPeriod`<sup>Optional</sup> <a name="cpuPeriod" id="@cdktf/provider-docker.image.ImageBuild.property.cpuPeriod"></a>

```typescript
public readonly cpuPeriod: number;
```

- *Type:* number

The length of a CPU period in microseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cpu_period Image#cpu_period}

---

##### `cpuQuota`<sup>Optional</sup> <a name="cpuQuota" id="@cdktf/provider-docker.image.ImageBuild.property.cpuQuota"></a>

```typescript
public readonly cpuQuota: number;
```

- *Type:* number

Microseconds of CPU time that the container can get in a CPU period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cpu_quota Image#cpu_quota}

---

##### `cpuSetCpus`<sup>Optional</sup> <a name="cpuSetCpus" id="@cdktf/provider-docker.image.ImageBuild.property.cpuSetCpus"></a>

```typescript
public readonly cpuSetCpus: string;
```

- *Type:* string

CPUs in which to allow execution (e.g., `0-3`, `0`, `1`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cpu_set_cpus Image#cpu_set_cpus}

---

##### `cpuSetMems`<sup>Optional</sup> <a name="cpuSetMems" id="@cdktf/provider-docker.image.ImageBuild.property.cpuSetMems"></a>

```typescript
public readonly cpuSetMems: string;
```

- *Type:* string

MEMs in which to allow execution (`0-3`, `0`, `1`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cpu_set_mems Image#cpu_set_mems}

---

##### `cpuShares`<sup>Optional</sup> <a name="cpuShares" id="@cdktf/provider-docker.image.ImageBuild.property.cpuShares"></a>

```typescript
public readonly cpuShares: number;
```

- *Type:* number

CPU shares (relative weight).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#cpu_shares Image#cpu_shares}

---

##### `dockerfile`<sup>Optional</sup> <a name="dockerfile" id="@cdktf/provider-docker.image.ImageBuild.property.dockerfile"></a>

```typescript
public readonly dockerfile: string;
```

- *Type:* string

Name of the Dockerfile. Defaults to `Dockerfile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#dockerfile Image#dockerfile}

---

##### `extraHosts`<sup>Optional</sup> <a name="extraHosts" id="@cdktf/provider-docker.image.ImageBuild.property.extraHosts"></a>

```typescript
public readonly extraHosts: string[];
```

- *Type:* string[]

A list of hostnames/IP mappings to add to the container’s /etc/hosts file. Specified in the form ["hostname:IP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#extra_hosts Image#extra_hosts}

---

##### `forceRemove`<sup>Optional</sup> <a name="forceRemove" id="@cdktf/provider-docker.image.ImageBuild.property.forceRemove"></a>

```typescript
public readonly forceRemove: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Always remove intermediate containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#force_remove Image#force_remove}

---

##### `isolation`<sup>Optional</sup> <a name="isolation" id="@cdktf/provider-docker.image.ImageBuild.property.isolation"></a>

```typescript
public readonly isolation: string;
```

- *Type:* string

Isolation represents the isolation technology of a container. The supported values are.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#isolation Image#isolation}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-docker.image.ImageBuild.property.label"></a>

```typescript
public readonly label: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set metadata for an image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#label Image#label}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.image.ImageBuild.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined key/value metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#labels Image#labels}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.image.ImageBuild.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

Set memory limit for build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#memory Image#memory}

---

##### `memorySwap`<sup>Optional</sup> <a name="memorySwap" id="@cdktf/provider-docker.image.ImageBuild.property.memorySwap"></a>

```typescript
public readonly memorySwap: number;
```

- *Type:* number

Total memory (memory + swap), -1 to enable unlimited swap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#memory_swap Image#memory_swap}

---

##### `networkMode`<sup>Optional</sup> <a name="networkMode" id="@cdktf/provider-docker.image.ImageBuild.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

Set the networking mode for the RUN instructions during build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#network_mode Image#network_mode}

---

##### `noCache`<sup>Optional</sup> <a name="noCache" id="@cdktf/provider-docker.image.ImageBuild.property.noCache"></a>

```typescript
public readonly noCache: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not use the cache when building the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#no_cache Image#no_cache}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-docker.image.ImageBuild.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Set platform if server is multi-platform capable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#platform Image#platform}

---

##### `pullParent`<sup>Optional</sup> <a name="pullParent" id="@cdktf/provider-docker.image.ImageBuild.property.pullParent"></a>

```typescript
public readonly pullParent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Attempt to pull the image even if an older image exists locally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#pull_parent Image#pull_parent}

---

##### `remoteContext`<sup>Optional</sup> <a name="remoteContext" id="@cdktf/provider-docker.image.ImageBuild.property.remoteContext"></a>

```typescript
public readonly remoteContext: string;
```

- *Type:* string

A Git repository URI or HTTP/HTTPS context URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#remote_context Image#remote_context}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-docker.image.ImageBuild.property.remove"></a>

```typescript
public readonly remove: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Remove intermediate containers after a successful build. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#remove Image#remove}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-docker.image.ImageBuild.property.secrets"></a>

```typescript
public readonly secrets: IResolvable | ImageBuildSecrets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>[]

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#secrets Image#secrets}

---

##### `securityOpt`<sup>Optional</sup> <a name="securityOpt" id="@cdktf/provider-docker.image.ImageBuild.property.securityOpt"></a>

```typescript
public readonly securityOpt: string[];
```

- *Type:* string[]

The security options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#security_opt Image#security_opt}

---

##### `sessionId`<sup>Optional</sup> <a name="sessionId" id="@cdktf/provider-docker.image.ImageBuild.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

Set an ID for the build session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#session_id Image#session_id}

---

##### `shmSize`<sup>Optional</sup> <a name="shmSize" id="@cdktf/provider-docker.image.ImageBuild.property.shmSize"></a>

```typescript
public readonly shmSize: number;
```

- *Type:* number

Size of /dev/shm in bytes. The size must be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#shm_size Image#shm_size}

---

##### `squash`<sup>Optional</sup> <a name="squash" id="@cdktf/provider-docker.image.ImageBuild.property.squash"></a>

```typescript
public readonly squash: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true the new layers are squashed into a new image with a single new layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#squash Image#squash}

---

##### `suppressOutput`<sup>Optional</sup> <a name="suppressOutput" id="@cdktf/provider-docker.image.ImageBuild.property.suppressOutput"></a>

```typescript
public readonly suppressOutput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Suppress the build output and print image ID on success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#suppress_output Image#suppress_output}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-docker.image.ImageBuild.property.tag"></a>

```typescript
public readonly tag: string[];
```

- *Type:* string[]

Name and optionally a tag in the 'name:tag' format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#tag Image#tag}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-docker.image.ImageBuild.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Set the target build stage to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#target Image#target}

---

##### `ulimit`<sup>Optional</sup> <a name="ulimit" id="@cdktf/provider-docker.image.ImageBuild.property.ulimit"></a>

```typescript
public readonly ulimit: IResolvable | ImageBuildUlimit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>[]

ulimit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#ulimit Image#ulimit}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-docker.image.ImageBuild.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the underlying builder to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#version Image#version}

---

### ImageBuildAuthConfig <a name="ImageBuildAuthConfig" id="@cdktf/provider-docker.image.ImageBuildAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.Initializer"></a>

```typescript
import { image } from '@cdktf/provider-docker'

const imageBuildAuthConfig: image.ImageBuildAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.hostName">hostName</a></code> | <code>string</code> | hostname of the registry. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.auth">auth</a></code> | <code>string</code> | the auth token. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.email">email</a></code> | <code>string</code> | the user emal. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.identityToken">identityToken</a></code> | <code>string</code> | the identity token. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.password">password</a></code> | <code>string</code> | the registry password. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.registryToken">registryToken</a></code> | <code>string</code> | the registry token. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.serverAddress">serverAddress</a></code> | <code>string</code> | the server address. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig.property.userName">userName</a></code> | <code>string</code> | the registry user name. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

hostname of the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#host_name Image#host_name}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.auth"></a>

```typescript
public readonly auth: string;
```

- *Type:* string

the auth token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#auth Image#auth}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

the user emal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#email Image#email}

---

##### `identityToken`<sup>Optional</sup> <a name="identityToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.identityToken"></a>

```typescript
public readonly identityToken: string;
```

- *Type:* string

the identity token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#identity_token Image#identity_token}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

the registry password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#password Image#password}

---

##### `registryToken`<sup>Optional</sup> <a name="registryToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.registryToken"></a>

```typescript
public readonly registryToken: string;
```

- *Type:* string

the registry token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#registry_token Image#registry_token}

---

##### `serverAddress`<sup>Optional</sup> <a name="serverAddress" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.serverAddress"></a>

```typescript
public readonly serverAddress: string;
```

- *Type:* string

the server address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#server_address Image#server_address}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-docker.image.ImageBuildAuthConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

the registry user name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#user_name Image#user_name}

---

### ImageBuildSecrets <a name="ImageBuildSecrets" id="@cdktf/provider-docker.image.ImageBuildSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageBuildSecrets.Initializer"></a>

```typescript
import { image } from '@cdktf/provider-docker'

const imageBuildSecrets: image.ImageBuildSecrets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecrets.property.id">id</a></code> | <code>string</code> | ID of the secret. By default, secrets are mounted to /run/secrets/<id>. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecrets.property.env">env</a></code> | <code>string</code> | Environment variable source of the secret. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecrets.property.src">src</a></code> | <code>string</code> | File source of the secret. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.ImageBuildSecrets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID of the secret. By default, secrets are mounted to /run/secrets/<id>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#id Image#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.image.ImageBuildSecrets.property.env"></a>

```typescript
public readonly env: string;
```

- *Type:* string

Environment variable source of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#env Image#env}

---

##### `src`<sup>Optional</sup> <a name="src" id="@cdktf/provider-docker.image.ImageBuildSecrets.property.src"></a>

```typescript
public readonly src: string;
```

- *Type:* string

File source of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#src Image#src}

---

### ImageBuildUlimit <a name="ImageBuildUlimit" id="@cdktf/provider-docker.image.ImageBuildUlimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageBuildUlimit.Initializer"></a>

```typescript
import { image } from '@cdktf/provider-docker'

const imageBuildUlimit: image.ImageBuildUlimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimit.property.hard">hard</a></code> | <code>number</code> | soft limit. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimit.property.name">name</a></code> | <code>string</code> | type of ulimit, e.g. `nofile`. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimit.property.soft">soft</a></code> | <code>number</code> | hard limit. |

---

##### `hard`<sup>Required</sup> <a name="hard" id="@cdktf/provider-docker.image.ImageBuildUlimit.property.hard"></a>

```typescript
public readonly hard: number;
```

- *Type:* number

soft limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#hard Image#hard}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.image.ImageBuildUlimit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

type of ulimit, e.g. `nofile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#name Image#name}

---

##### `soft`<sup>Required</sup> <a name="soft" id="@cdktf/provider-docker.image.ImageBuildUlimit.property.soft"></a>

```typescript
public readonly soft: number;
```

- *Type:* number

hard limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#soft Image#soft}

---

### ImageConfig <a name="ImageConfig" id="@cdktf/provider-docker.image.ImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageConfig.Initializer"></a>

```typescript
import { image } from '@cdktf/provider-docker'

const imageConfig: image.ImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.name">name</a></code> | <code>string</code> | The name of the Docker image, including any tags or SHA256 repo digests. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.buildAttribute">buildAttribute</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a></code> | build block. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.forceRemove">forceRemove</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, then the image is removed forcibly when the resource is destroyed. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.keepLocally">keepLocally</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, then the Docker image won't be deleted on destroy operation. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.platform">platform</a></code> | <code>string</code> | The platform to use when pulling the image. Defaults to the platform of the current machine. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.pullTriggers">pullTriggers</a></code> | <code>string[]</code> | List of values which cause an image pull when changed. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-docker.image.ImageConfig.property.triggers">triggers</a></code> | <code>{[ key: string ]: string}</code> | A map of arbitrary strings that, when changed, will force the `docker_image` resource to be replaced. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.image.ImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.image.ImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.image.ImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.image.ImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.image.ImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.image.ImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.image.ImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.image.ImageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Docker image, including any tags or SHA256 repo digests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#name Image#name}

---

##### `buildAttribute`<sup>Optional</sup> <a name="buildAttribute" id="@cdktf/provider-docker.image.ImageConfig.property.buildAttribute"></a>

```typescript
public readonly buildAttribute: ImageBuild;
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a>

build block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#build Image#build}

---

##### `forceRemove`<sup>Optional</sup> <a name="forceRemove" id="@cdktf/provider-docker.image.ImageConfig.property.forceRemove"></a>

```typescript
public readonly forceRemove: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, then the image is removed forcibly when the resource is destroyed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#force_remove Image#force_remove}

---

##### `keepLocally`<sup>Optional</sup> <a name="keepLocally" id="@cdktf/provider-docker.image.ImageConfig.property.keepLocally"></a>

```typescript
public readonly keepLocally: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, then the Docker image won't be deleted on destroy operation.

If this is false, it will delete the image from the docker local storage on destroy operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#keep_locally Image#keep_locally}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-docker.image.ImageConfig.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

The platform to use when pulling the image. Defaults to the platform of the current machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#platform Image#platform}

---

##### `pullTriggers`<sup>Optional</sup> <a name="pullTriggers" id="@cdktf/provider-docker.image.ImageConfig.property.pullTriggers"></a>

```typescript
public readonly pullTriggers: string[];
```

- *Type:* string[]

List of values which cause an image pull when changed.

This is used to store the image digest from the registry when using the [docker_registry_image](../data-sources/registry_image.md).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#pull_triggers Image#pull_triggers}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-docker.image.ImageConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ImageTimeouts;
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#timeouts Image#timeouts}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-docker.image.ImageConfig.property.triggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of arbitrary strings that, when changed, will force the `docker_image` resource to be replaced.

This can be used to rebuild an image when contents of source code folders change

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#triggers Image#triggers}

---

### ImageTimeouts <a name="ImageTimeouts" id="@cdktf/provider-docker.image.ImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.image.ImageTimeouts.Initializer"></a>

```typescript
import { image } from '@cdktf/provider-docker'

const imageTimeouts: image.ImageTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#create Image#create}. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#delete Image#delete}. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#update Image#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-docker.image.ImageTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#create Image#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-docker.image.ImageTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#delete Image#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-docker.image.ImageTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs/resources/image#update Image#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImageBuildAuthConfigList <a name="ImageBuildAuthConfigList" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer"></a>

```typescript
import { image } from '@cdktf/provider-docker'

new image.ImageBuildAuthConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.get"></a>

```typescript
public get(index: number): ImageBuildAuthConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.image.ImageBuildAuthConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImageBuildAuthConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>[]

---


### ImageBuildAuthConfigOutputReference <a name="ImageBuildAuthConfigOutputReference" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer"></a>

```typescript
import { image } from '@cdktf/provider-docker'

new image.ImageBuildAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetAuth">resetAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetIdentityToken">resetIdentityToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetRegistryToken">resetRegistryToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetServerAddress">resetServerAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuth` <a name="resetAuth" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetAuth"></a>

```typescript
public resetAuth(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetIdentityToken` <a name="resetIdentityToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetIdentityToken"></a>

```typescript
public resetIdentityToken(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRegistryToken` <a name="resetRegistryToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetRegistryToken"></a>

```typescript
public resetRegistryToken(): void
```

##### `resetServerAddress` <a name="resetServerAddress" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetServerAddress"></a>

```typescript
public resetServerAddress(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.authInput">authInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.identityTokenInput">identityTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.registryTokenInput">registryTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.serverAddressInput">serverAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.auth">auth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.identityToken">identityToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.registryToken">registryToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.serverAddress">serverAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authInput`<sup>Optional</sup> <a name="authInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.authInput"></a>

```typescript
public readonly authInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `identityTokenInput`<sup>Optional</sup> <a name="identityTokenInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.identityTokenInput"></a>

```typescript
public readonly identityTokenInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `registryTokenInput`<sup>Optional</sup> <a name="registryTokenInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.registryTokenInput"></a>

```typescript
public readonly registryTokenInput: string;
```

- *Type:* string

---

##### `serverAddressInput`<sup>Optional</sup> <a name="serverAddressInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.serverAddressInput"></a>

```typescript
public readonly serverAddressInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.auth"></a>

```typescript
public readonly auth: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `identityToken`<sup>Required</sup> <a name="identityToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.identityToken"></a>

```typescript
public readonly identityToken: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `registryToken`<sup>Required</sup> <a name="registryToken" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.registryToken"></a>

```typescript
public readonly registryToken: string;
```

- *Type:* string

---

##### `serverAddress`<sup>Required</sup> <a name="serverAddress" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.serverAddress"></a>

```typescript
public readonly serverAddress: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.image.ImageBuildAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImageBuildAuthConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>

---


### ImageBuildOutputReference <a name="ImageBuildOutputReference" id="@cdktf/provider-docker.image.ImageBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer"></a>

```typescript
import { image } from '@cdktf/provider-docker'

new image.ImageBuildOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.putAuthConfig">putAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.putSecrets">putSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.putUlimit">putUlimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetAuthConfig">resetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildArgs">resetBuildArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildId">resetBuildId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCacheFrom">resetCacheFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCgroupParent">resetCgroupParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuPeriod">resetCpuPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuQuota">resetCpuQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuSetCpus">resetCpuSetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuSetMems">resetCpuSetMems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuShares">resetCpuShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetDockerfile">resetDockerfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetExtraHosts">resetExtraHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetForceRemove">resetForceRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetIsolation">resetIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetMemorySwap">resetMemorySwap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetNetworkMode">resetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetNoCache">resetNoCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetPullParent">resetPullParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetRemoteContext">resetRemoteContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetRemove">resetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetSecrets">resetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetSecurityOpt">resetSecurityOpt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetSessionId">resetSessionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetShmSize">resetShmSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetSquash">resetSquash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetSuppressOutput">resetSuppressOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetUlimit">resetUlimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.image.ImageBuildOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.image.ImageBuildOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.image.ImageBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.image.ImageBuildOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthConfig` <a name="putAuthConfig" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putAuthConfig"></a>

```typescript
public putAuthConfig(value: IResolvable | ImageBuildAuthConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putAuthConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>[]

---

##### `putSecrets` <a name="putSecrets" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putSecrets"></a>

```typescript
public putSecrets(value: IResolvable | ImageBuildSecrets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putSecrets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>[]

---

##### `putUlimit` <a name="putUlimit" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putUlimit"></a>

```typescript
public putUlimit(value: IResolvable | ImageBuildUlimit[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.image.ImageBuildOutputReference.putUlimit.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>[]

---

##### `resetAuthConfig` <a name="resetAuthConfig" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetAuthConfig"></a>

```typescript
public resetAuthConfig(): void
```

##### `resetBuildArgs` <a name="resetBuildArgs" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildArgs"></a>

```typescript
public resetBuildArgs(): void
```

##### `resetBuildId` <a name="resetBuildId" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetBuildId"></a>

```typescript
public resetBuildId(): void
```

##### `resetCacheFrom` <a name="resetCacheFrom" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCacheFrom"></a>

```typescript
public resetCacheFrom(): void
```

##### `resetCgroupParent` <a name="resetCgroupParent" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCgroupParent"></a>

```typescript
public resetCgroupParent(): void
```

##### `resetCpuPeriod` <a name="resetCpuPeriod" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuPeriod"></a>

```typescript
public resetCpuPeriod(): void
```

##### `resetCpuQuota` <a name="resetCpuQuota" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuQuota"></a>

```typescript
public resetCpuQuota(): void
```

##### `resetCpuSetCpus` <a name="resetCpuSetCpus" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuSetCpus"></a>

```typescript
public resetCpuSetCpus(): void
```

##### `resetCpuSetMems` <a name="resetCpuSetMems" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuSetMems"></a>

```typescript
public resetCpuSetMems(): void
```

##### `resetCpuShares` <a name="resetCpuShares" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetCpuShares"></a>

```typescript
public resetCpuShares(): void
```

##### `resetDockerfile` <a name="resetDockerfile" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetDockerfile"></a>

```typescript
public resetDockerfile(): void
```

##### `resetExtraHosts` <a name="resetExtraHosts" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetExtraHosts"></a>

```typescript
public resetExtraHosts(): void
```

##### `resetForceRemove` <a name="resetForceRemove" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetForceRemove"></a>

```typescript
public resetForceRemove(): void
```

##### `resetIsolation` <a name="resetIsolation" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetIsolation"></a>

```typescript
public resetIsolation(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetMemorySwap` <a name="resetMemorySwap" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetMemorySwap"></a>

```typescript
public resetMemorySwap(): void
```

##### `resetNetworkMode` <a name="resetNetworkMode" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetNetworkMode"></a>

```typescript
public resetNetworkMode(): void
```

##### `resetNoCache` <a name="resetNoCache" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetNoCache"></a>

```typescript
public resetNoCache(): void
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetPlatform"></a>

```typescript
public resetPlatform(): void
```

##### `resetPullParent` <a name="resetPullParent" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetPullParent"></a>

```typescript
public resetPullParent(): void
```

##### `resetRemoteContext` <a name="resetRemoteContext" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetRemoteContext"></a>

```typescript
public resetRemoteContext(): void
```

##### `resetRemove` <a name="resetRemove" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetRemove"></a>

```typescript
public resetRemove(): void
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSecrets"></a>

```typescript
public resetSecrets(): void
```

##### `resetSecurityOpt` <a name="resetSecurityOpt" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSecurityOpt"></a>

```typescript
public resetSecurityOpt(): void
```

##### `resetSessionId` <a name="resetSessionId" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSessionId"></a>

```typescript
public resetSessionId(): void
```

##### `resetShmSize` <a name="resetShmSize" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetShmSize"></a>

```typescript
public resetShmSize(): void
```

##### `resetSquash` <a name="resetSquash" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSquash"></a>

```typescript
public resetSquash(): void
```

##### `resetSuppressOutput` <a name="resetSuppressOutput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetSuppressOutput"></a>

```typescript
public resetSuppressOutput(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetUlimit` <a name="resetUlimit" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetUlimit"></a>

```typescript
public resetUlimit(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-docker.image.ImageBuildOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList">ImageBuildAuthConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList">ImageBuildSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.ulimit">ulimit</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList">ImageBuildUlimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.authConfigInput">authConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgsInput">buildArgsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildIdInput">buildIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cacheFromInput">cacheFromInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cgroupParentInput">cgroupParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.contextInput">contextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuPeriodInput">cpuPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuQuotaInput">cpuQuotaInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetCpusInput">cpuSetCpusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetMemsInput">cpuSetMemsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSharesInput">cpuSharesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.dockerfileInput">dockerfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.extraHostsInput">extraHostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.forceRemoveInput">forceRemoveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.isolationInput">isolationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.labelInput">labelInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.memoryInput">memoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.memorySwapInput">memorySwapInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.networkModeInput">networkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.noCacheInput">noCacheInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.pullParentInput">pullParentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.remoteContextInput">remoteContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.removeInput">removeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.secretsInput">secretsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.securityOptInput">securityOptInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.sessionIdInput">sessionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.shmSizeInput">shmSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.squashInput">squashInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.suppressOutputInput">suppressOutputInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.tagInput">tagInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.ulimitInput">ulimitInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgs">buildArgs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildId">buildId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cacheFrom">cacheFrom</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cgroupParent">cgroupParent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuPeriod">cpuPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuQuota">cpuQuota</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetCpus">cpuSetCpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetMems">cpuSetMems</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuShares">cpuShares</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.dockerfile">dockerfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.extraHosts">extraHosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.forceRemove">forceRemove</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.isolation">isolation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.label">label</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.memorySwap">memorySwap</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.networkMode">networkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.noCache">noCache</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.pullParent">pullParent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.remoteContext">remoteContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.remove">remove</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.securityOpt">securityOpt</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.sessionId">sessionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.shmSize">shmSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.squash">squash</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.suppressOutput">suppressOutput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.tag">tag</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authConfig`<sup>Required</sup> <a name="authConfig" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.authConfig"></a>

```typescript
public readonly authConfig: ImageBuildAuthConfigList;
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuildAuthConfigList">ImageBuildAuthConfigList</a>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.secrets"></a>

```typescript
public readonly secrets: ImageBuildSecretsList;
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuildSecretsList">ImageBuildSecretsList</a>

---

##### `ulimit`<sup>Required</sup> <a name="ulimit" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.ulimit"></a>

```typescript
public readonly ulimit: ImageBuildUlimitList;
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuildUlimitList">ImageBuildUlimitList</a>

---

##### `authConfigInput`<sup>Optional</sup> <a name="authConfigInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.authConfigInput"></a>

```typescript
public readonly authConfigInput: IResolvable | ImageBuildAuthConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageBuildAuthConfig">ImageBuildAuthConfig</a>[]

---

##### `buildArgsInput`<sup>Optional</sup> <a name="buildArgsInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgsInput"></a>

```typescript
public readonly buildArgsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `buildIdInput`<sup>Optional</sup> <a name="buildIdInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildIdInput"></a>

```typescript
public readonly buildIdInput: string;
```

- *Type:* string

---

##### `cacheFromInput`<sup>Optional</sup> <a name="cacheFromInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cacheFromInput"></a>

```typescript
public readonly cacheFromInput: string[];
```

- *Type:* string[]

---

##### `cgroupParentInput`<sup>Optional</sup> <a name="cgroupParentInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cgroupParentInput"></a>

```typescript
public readonly cgroupParentInput: string;
```

- *Type:* string

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.contextInput"></a>

```typescript
public readonly contextInput: string;
```

- *Type:* string

---

##### `cpuPeriodInput`<sup>Optional</sup> <a name="cpuPeriodInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuPeriodInput"></a>

```typescript
public readonly cpuPeriodInput: number;
```

- *Type:* number

---

##### `cpuQuotaInput`<sup>Optional</sup> <a name="cpuQuotaInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuQuotaInput"></a>

```typescript
public readonly cpuQuotaInput: number;
```

- *Type:* number

---

##### `cpuSetCpusInput`<sup>Optional</sup> <a name="cpuSetCpusInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetCpusInput"></a>

```typescript
public readonly cpuSetCpusInput: string;
```

- *Type:* string

---

##### `cpuSetMemsInput`<sup>Optional</sup> <a name="cpuSetMemsInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetMemsInput"></a>

```typescript
public readonly cpuSetMemsInput: string;
```

- *Type:* string

---

##### `cpuSharesInput`<sup>Optional</sup> <a name="cpuSharesInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSharesInput"></a>

```typescript
public readonly cpuSharesInput: number;
```

- *Type:* number

---

##### `dockerfileInput`<sup>Optional</sup> <a name="dockerfileInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.dockerfileInput"></a>

```typescript
public readonly dockerfileInput: string;
```

- *Type:* string

---

##### `extraHostsInput`<sup>Optional</sup> <a name="extraHostsInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.extraHostsInput"></a>

```typescript
public readonly extraHostsInput: string[];
```

- *Type:* string[]

---

##### `forceRemoveInput`<sup>Optional</sup> <a name="forceRemoveInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.forceRemoveInput"></a>

```typescript
public readonly forceRemoveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isolationInput`<sup>Optional</sup> <a name="isolationInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.isolationInput"></a>

```typescript
public readonly isolationInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: number;
```

- *Type:* number

---

##### `memorySwapInput`<sup>Optional</sup> <a name="memorySwapInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.memorySwapInput"></a>

```typescript
public readonly memorySwapInput: number;
```

- *Type:* number

---

##### `networkModeInput`<sup>Optional</sup> <a name="networkModeInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.networkModeInput"></a>

```typescript
public readonly networkModeInput: string;
```

- *Type:* string

---

##### `noCacheInput`<sup>Optional</sup> <a name="noCacheInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.noCacheInput"></a>

```typescript
public readonly noCacheInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `pullParentInput`<sup>Optional</sup> <a name="pullParentInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.pullParentInput"></a>

```typescript
public readonly pullParentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remoteContextInput`<sup>Optional</sup> <a name="remoteContextInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.remoteContextInput"></a>

```typescript
public readonly remoteContextInput: string;
```

- *Type:* string

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.removeInput"></a>

```typescript
public readonly removeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.secretsInput"></a>

```typescript
public readonly secretsInput: IResolvable | ImageBuildSecrets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>[]

---

##### `securityOptInput`<sup>Optional</sup> <a name="securityOptInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.securityOptInput"></a>

```typescript
public readonly securityOptInput: string[];
```

- *Type:* string[]

---

##### `sessionIdInput`<sup>Optional</sup> <a name="sessionIdInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.sessionIdInput"></a>

```typescript
public readonly sessionIdInput: string;
```

- *Type:* string

---

##### `shmSizeInput`<sup>Optional</sup> <a name="shmSizeInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.shmSizeInput"></a>

```typescript
public readonly shmSizeInput: number;
```

- *Type:* number

---

##### `squashInput`<sup>Optional</sup> <a name="squashInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.squashInput"></a>

```typescript
public readonly squashInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `suppressOutputInput`<sup>Optional</sup> <a name="suppressOutputInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.suppressOutputInput"></a>

```typescript
public readonly suppressOutputInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string[];
```

- *Type:* string[]

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `ulimitInput`<sup>Optional</sup> <a name="ulimitInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.ulimitInput"></a>

```typescript
public readonly ulimitInput: IResolvable | ImageBuildUlimit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>[]

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `buildArgs`<sup>Required</sup> <a name="buildArgs" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildArgs"></a>

```typescript
public readonly buildArgs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `buildId`<sup>Required</sup> <a name="buildId" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.buildId"></a>

```typescript
public readonly buildId: string;
```

- *Type:* string

---

##### `cacheFrom`<sup>Required</sup> <a name="cacheFrom" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cacheFrom"></a>

```typescript
public readonly cacheFrom: string[];
```

- *Type:* string[]

---

##### `cgroupParent`<sup>Required</sup> <a name="cgroupParent" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cgroupParent"></a>

```typescript
public readonly cgroupParent: string;
```

- *Type:* string

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `cpuPeriod`<sup>Required</sup> <a name="cpuPeriod" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuPeriod"></a>

```typescript
public readonly cpuPeriod: number;
```

- *Type:* number

---

##### `cpuQuota`<sup>Required</sup> <a name="cpuQuota" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuQuota"></a>

```typescript
public readonly cpuQuota: number;
```

- *Type:* number

---

##### `cpuSetCpus`<sup>Required</sup> <a name="cpuSetCpus" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetCpus"></a>

```typescript
public readonly cpuSetCpus: string;
```

- *Type:* string

---

##### `cpuSetMems`<sup>Required</sup> <a name="cpuSetMems" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuSetMems"></a>

```typescript
public readonly cpuSetMems: string;
```

- *Type:* string

---

##### `cpuShares`<sup>Required</sup> <a name="cpuShares" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.cpuShares"></a>

```typescript
public readonly cpuShares: number;
```

- *Type:* number

---

##### `dockerfile`<sup>Required</sup> <a name="dockerfile" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.dockerfile"></a>

```typescript
public readonly dockerfile: string;
```

- *Type:* string

---

##### `extraHosts`<sup>Required</sup> <a name="extraHosts" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.extraHosts"></a>

```typescript
public readonly extraHosts: string[];
```

- *Type:* string[]

---

##### `forceRemove`<sup>Required</sup> <a name="forceRemove" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.forceRemove"></a>

```typescript
public readonly forceRemove: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isolation`<sup>Required</sup> <a name="isolation" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.isolation"></a>

```typescript
public readonly isolation: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.label"></a>

```typescript
public readonly label: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `memorySwap`<sup>Required</sup> <a name="memorySwap" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.memorySwap"></a>

```typescript
public readonly memorySwap: number;
```

- *Type:* number

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

---

##### `noCache`<sup>Required</sup> <a name="noCache" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.noCache"></a>

```typescript
public readonly noCache: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `pullParent`<sup>Required</sup> <a name="pullParent" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.pullParent"></a>

```typescript
public readonly pullParent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `remoteContext`<sup>Required</sup> <a name="remoteContext" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.remoteContext"></a>

```typescript
public readonly remoteContext: string;
```

- *Type:* string

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.remove"></a>

```typescript
public readonly remove: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityOpt`<sup>Required</sup> <a name="securityOpt" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.securityOpt"></a>

```typescript
public readonly securityOpt: string[];
```

- *Type:* string[]

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

---

##### `shmSize`<sup>Required</sup> <a name="shmSize" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.shmSize"></a>

```typescript
public readonly shmSize: number;
```

- *Type:* number

---

##### `squash`<sup>Required</sup> <a name="squash" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.squash"></a>

```typescript
public readonly squash: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `suppressOutput`<sup>Required</sup> <a name="suppressOutput" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.suppressOutput"></a>

```typescript
public readonly suppressOutput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.tag"></a>

```typescript
public readonly tag: string[];
```

- *Type:* string[]

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.image.ImageBuildOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ImageBuild;
```

- *Type:* <a href="#@cdktf/provider-docker.image.ImageBuild">ImageBuild</a>

---


### ImageBuildSecretsList <a name="ImageBuildSecretsList" id="@cdktf/provider-docker.image.ImageBuildSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer"></a>

```typescript
import { image } from '@cdktf/provider-docker'

new image.ImageBuildSecretsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.image.ImageBuildSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.image.ImageBuildSecretsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.image.ImageBuildSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.image.ImageBuildSecretsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.image.ImageBuildSecretsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.image.ImageBuildSecretsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.image.ImageBuildSecretsList.get"></a>

```typescript
public get(index: number): ImageBuildSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.image.ImageBuildSecretsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.image.ImageBuildSecretsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.ImageBuildSecretsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.image.ImageBuildSecretsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImageBuildSecrets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>[]

---


### ImageBuildSecretsOutputReference <a name="ImageBuildSecretsOutputReference" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer"></a>

```typescript
import { image } from '@cdktf/provider-docker'

new image.ImageBuildSecretsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resetSrc">resetSrc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetSrc` <a name="resetSrc" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.resetSrc"></a>

```typescript
public resetSrc(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.envInput">envInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.srcInput">srcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.env">env</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.src">src</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.envInput"></a>

```typescript
public readonly envInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `srcInput`<sup>Optional</sup> <a name="srcInput" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.srcInput"></a>

```typescript
public readonly srcInput: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.env"></a>

```typescript
public readonly env: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `src`<sup>Required</sup> <a name="src" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.src"></a>

```typescript
public readonly src: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.image.ImageBuildSecretsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImageBuildSecrets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageBuildSecrets">ImageBuildSecrets</a>

---


### ImageBuildUlimitList <a name="ImageBuildUlimitList" id="@cdktf/provider-docker.image.ImageBuildUlimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer"></a>

```typescript
import { image } from '@cdktf/provider-docker'

new image.ImageBuildUlimitList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.image.ImageBuildUlimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.image.ImageBuildUlimitList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.image.ImageBuildUlimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.image.ImageBuildUlimitList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.image.ImageBuildUlimitList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildUlimitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.image.ImageBuildUlimitList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.image.ImageBuildUlimitList.get"></a>

```typescript
public get(index: number): ImageBuildUlimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.image.ImageBuildUlimitList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.image.ImageBuildUlimitList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.ImageBuildUlimitList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.image.ImageBuildUlimitList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImageBuildUlimit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>[]

---


### ImageBuildUlimitOutputReference <a name="ImageBuildUlimitOutputReference" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer"></a>

```typescript
import { image } from '@cdktf/provider-docker'

new image.ImageBuildUlimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.hardInput">hardInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.softInput">softInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.hard">hard</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.soft">soft</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hardInput`<sup>Optional</sup> <a name="hardInput" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.hardInput"></a>

```typescript
public readonly hardInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `softInput`<sup>Optional</sup> <a name="softInput" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.softInput"></a>

```typescript
public readonly softInput: number;
```

- *Type:* number

---

##### `hard`<sup>Required</sup> <a name="hard" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.hard"></a>

```typescript
public readonly hard: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `soft`<sup>Required</sup> <a name="soft" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.soft"></a>

```typescript
public readonly soft: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.image.ImageBuildUlimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImageBuildUlimit;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageBuildUlimit">ImageBuildUlimit</a>

---


### ImageTimeoutsOutputReference <a name="ImageTimeoutsOutputReference" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.Initializer"></a>

```typescript
import { image } from '@cdktf/provider-docker'

new image.ImageTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.image.ImageTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImageTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.image.ImageTimeouts">ImageTimeouts</a>

---



