# `service` Submodule <a name="`service` Submodule" id="@cdktf/provider-docker.service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Service <a name="Service" id="@cdktf/provider-docker.service.Service"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service docker_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.Service.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.Service(scope: Construct, id: string, config: ServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConfig">ServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.service.Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.service.Service.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-docker.service.Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConfig">ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.service.Service.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.service.Service.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.service.Service.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.service.Service.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-docker.service.Service.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-docker.service.Service.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-docker.service.Service.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-docker.service.Service.putAuth">putAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putConvergeConfig">putConvergeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putEndpointSpec">putEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putMode">putMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putRollbackConfig">putRollbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putTaskSpec">putTaskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.putUpdateConfig">putUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetAuth">resetAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetConvergeConfig">resetConvergeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetEndpointSpec">resetEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetRollbackConfig">resetRollbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.resetUpdateConfig">resetUpdateConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.Service.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.service.Service.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.service.Service.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.service.Service.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.service.Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.service.Service.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-docker.service.Service.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.service.Service.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.service.Service.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-docker.service.Service.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.service.Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.Service.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.Service.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.Service.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.Service.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.Service.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.Service.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.Service.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.Service.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.Service.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-docker.service.Service.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-docker.service.Service.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.service.Service.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.service.Service.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.Service.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-docker.service.Service.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.service.Service.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-docker.service.Service.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.service.Service.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-docker.service.Service.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-docker.service.Service.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.service.Service.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuth` <a name="putAuth" id="@cdktf/provider-docker.service.Service.putAuth"></a>

```typescript
public putAuth(value: ServiceAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

---

##### `putConvergeConfig` <a name="putConvergeConfig" id="@cdktf/provider-docker.service.Service.putConvergeConfig"></a>

```typescript
public putConvergeConfig(value: ServiceConvergeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putConvergeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

---

##### `putEndpointSpec` <a name="putEndpointSpec" id="@cdktf/provider-docker.service.Service.putEndpointSpec"></a>

```typescript
public putEndpointSpec(value: ServiceEndpointSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-docker.service.Service.putLabels"></a>

```typescript
public putLabels(value: IResolvable | ServiceLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>[]

---

##### `putMode` <a name="putMode" id="@cdktf/provider-docker.service.Service.putMode"></a>

```typescript
public putMode(value: ServiceMode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

---

##### `putRollbackConfig` <a name="putRollbackConfig" id="@cdktf/provider-docker.service.Service.putRollbackConfig"></a>

```typescript
public putRollbackConfig(value: ServiceRollbackConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putRollbackConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

---

##### `putTaskSpec` <a name="putTaskSpec" id="@cdktf/provider-docker.service.Service.putTaskSpec"></a>

```typescript
public putTaskSpec(value: ServiceTaskSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putTaskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

---

##### `putUpdateConfig` <a name="putUpdateConfig" id="@cdktf/provider-docker.service.Service.putUpdateConfig"></a>

```typescript
public putUpdateConfig(value: ServiceUpdateConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putUpdateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

---

##### `resetAuth` <a name="resetAuth" id="@cdktf/provider-docker.service.Service.resetAuth"></a>

```typescript
public resetAuth(): void
```

##### `resetConvergeConfig` <a name="resetConvergeConfig" id="@cdktf/provider-docker.service.Service.resetConvergeConfig"></a>

```typescript
public resetConvergeConfig(): void
```

##### `resetEndpointSpec` <a name="resetEndpointSpec" id="@cdktf/provider-docker.service.Service.resetEndpointSpec"></a>

```typescript
public resetEndpointSpec(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-docker.service.Service.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-docker.service.Service.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-docker.service.Service.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetRollbackConfig` <a name="resetRollbackConfig" id="@cdktf/provider-docker.service.Service.resetRollbackConfig"></a>

```typescript
public resetRollbackConfig(): void
```

##### `resetUpdateConfig` <a name="resetUpdateConfig" id="@cdktf/provider-docker.service.Service.resetUpdateConfig"></a>

```typescript
public resetUpdateConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.service.Service.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-docker.service.Service.isConstruct"></a>

```typescript
import { service } from '@cdktf/provider-docker'

service.Service.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.service.Service.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.service.Service.isTerraformElement"></a>

```typescript
import { service } from '@cdktf/provider-docker'

service.Service.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.service.Service.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-docker.service.Service.isTerraformResource"></a>

```typescript
import { service } from '@cdktf/provider-docker'

service.Service.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.service.Service.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-docker.service.Service.generateConfigForImport"></a>

```typescript
import { service } from '@cdktf/provider-docker'

service.Service.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.service.Service.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.service.Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Service to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.service.Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.service.Service.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.service.Service.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference">ServiceAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.convergeConfig">convergeConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference">ServiceConvergeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.endpointSpec">endpointSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference">ServiceEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList">ServiceLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.mode">mode</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference">ServiceModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.rollbackConfig">rollbackConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference">ServiceRollbackConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.taskSpec">taskSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference">ServiceTaskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.updateConfig">updateConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference">ServiceUpdateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.authInput">authInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.convergeConfigInput">convergeConfigInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.endpointSpecInput">endpointSpecInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.labelsInput">labelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.modeInput">modeInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.rollbackConfigInput">rollbackConfigInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.taskSpecInput">taskSpecInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.updateConfigInput">updateConfigInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.service.Service.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.service.Service.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.Service.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.service.Service.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-docker.service.Service.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.service.Service.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.service.Service.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.service.Service.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.service.Service.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.service.Service.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.service.Service.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.service.Service.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.service.Service.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.service.Service.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-docker.service.Service.property.auth"></a>

```typescript
public readonly auth: ServiceAuthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference">ServiceAuthOutputReference</a>

---

##### `convergeConfig`<sup>Required</sup> <a name="convergeConfig" id="@cdktf/provider-docker.service.Service.property.convergeConfig"></a>

```typescript
public readonly convergeConfig: ServiceConvergeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference">ServiceConvergeConfigOutputReference</a>

---

##### `endpointSpec`<sup>Required</sup> <a name="endpointSpec" id="@cdktf/provider-docker.service.Service.property.endpointSpec"></a>

```typescript
public readonly endpointSpec: ServiceEndpointSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference">ServiceEndpointSpecOutputReference</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.service.Service.property.labels"></a>

```typescript
public readonly labels: ServiceLabelsList;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceLabelsList">ServiceLabelsList</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-docker.service.Service.property.mode"></a>

```typescript
public readonly mode: ServiceModeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeOutputReference">ServiceModeOutputReference</a>

---

##### `rollbackConfig`<sup>Required</sup> <a name="rollbackConfig" id="@cdktf/provider-docker.service.Service.property.rollbackConfig"></a>

```typescript
public readonly rollbackConfig: ServiceRollbackConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference">ServiceRollbackConfigOutputReference</a>

---

##### `taskSpec`<sup>Required</sup> <a name="taskSpec" id="@cdktf/provider-docker.service.Service.property.taskSpec"></a>

```typescript
public readonly taskSpec: ServiceTaskSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference">ServiceTaskSpecOutputReference</a>

---

##### `updateConfig`<sup>Required</sup> <a name="updateConfig" id="@cdktf/provider-docker.service.Service.property.updateConfig"></a>

```typescript
public readonly updateConfig: ServiceUpdateConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference">ServiceUpdateConfigOutputReference</a>

---

##### `authInput`<sup>Optional</sup> <a name="authInput" id="@cdktf/provider-docker.service.Service.property.authInput"></a>

```typescript
public readonly authInput: ServiceAuth;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

---

##### `convergeConfigInput`<sup>Optional</sup> <a name="convergeConfigInput" id="@cdktf/provider-docker.service.Service.property.convergeConfigInput"></a>

```typescript
public readonly convergeConfigInput: ServiceConvergeConfig;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

---

##### `endpointSpecInput`<sup>Optional</sup> <a name="endpointSpecInput" id="@cdktf/provider-docker.service.Service.property.endpointSpecInput"></a>

```typescript
public readonly endpointSpecInput: ServiceEndpointSpec;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-docker.service.Service.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-docker.service.Service.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | ServiceLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>[]

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-docker.service.Service.property.modeInput"></a>

```typescript
public readonly modeInput: ServiceMode;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.service.Service.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rollbackConfigInput`<sup>Optional</sup> <a name="rollbackConfigInput" id="@cdktf/provider-docker.service.Service.property.rollbackConfigInput"></a>

```typescript
public readonly rollbackConfigInput: ServiceRollbackConfig;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

---

##### `taskSpecInput`<sup>Optional</sup> <a name="taskSpecInput" id="@cdktf/provider-docker.service.Service.property.taskSpecInput"></a>

```typescript
public readonly taskSpecInput: ServiceTaskSpec;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

---

##### `updateConfigInput`<sup>Optional</sup> <a name="updateConfigInput" id="@cdktf/provider-docker.service.Service.property.updateConfigInput"></a>

```typescript
public readonly updateConfigInput: ServiceUpdateConfig;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.service.Service.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.Service.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.service.Service.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAuth <a name="ServiceAuth" id="@cdktf/provider-docker.service.ServiceAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceAuth.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceAuth: service.ServiceAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuth.property.serverAddress">serverAddress</a></code> | <code>string</code> | The address of the server for the authentication. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuth.property.password">password</a></code> | <code>string</code> | The password. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuth.property.username">username</a></code> | <code>string</code> | The username. |

---

##### `serverAddress`<sup>Required</sup> <a name="serverAddress" id="@cdktf/provider-docker.service.ServiceAuth.property.serverAddress"></a>

```typescript
public readonly serverAddress: string;
```

- *Type:* string

The address of the server for the authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#server_address Service#server_address}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-docker.service.ServiceAuth.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#password Service#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-docker.service.ServiceAuth.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#username Service#username}

---

### ServiceConfig <a name="ServiceConfig" id="@cdktf/provider-docker.service.ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceConfig.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceConfig: service.ServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.name">name</a></code> | <code>string</code> | Name of the service. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.taskSpec">taskSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a></code> | task_spec block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.convergeConfig">convergeConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a></code> | converge_config block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.endpointSpec">endpointSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a></code> | endpoint_spec block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.labels">labels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>[]</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.mode">mode</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a></code> | mode block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.rollbackConfig">rollbackConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a></code> | rollback_config block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.updateConfig">updateConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a></code> | update_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.service.ServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.service.ServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.service.ServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.service.ServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.service.ServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.service.ServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.service.ServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#name Service#name}

---

##### `taskSpec`<sup>Required</sup> <a name="taskSpec" id="@cdktf/provider-docker.service.ServiceConfig.property.taskSpec"></a>

```typescript
public readonly taskSpec: ServiceTaskSpec;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

task_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#task_spec Service#task_spec}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktf/provider-docker.service.ServiceConfig.property.auth"></a>

```typescript
public readonly auth: ServiceAuth;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#auth Service#auth}

---

##### `convergeConfig`<sup>Optional</sup> <a name="convergeConfig" id="@cdktf/provider-docker.service.ServiceConfig.property.convergeConfig"></a>

```typescript
public readonly convergeConfig: ServiceConvergeConfig;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

converge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#converge_config Service#converge_config}

---

##### `endpointSpec`<sup>Optional</sup> <a name="endpointSpec" id="@cdktf/provider-docker.service.ServiceConfig.property.endpointSpec"></a>

```typescript
public readonly endpointSpec: ServiceEndpointSpec;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

endpoint_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#endpoint_spec Service#endpoint_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.service.ServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceConfig.property.labels"></a>

```typescript
public readonly labels: IResolvable | ServiceLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>[]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#labels Service#labels}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.service.ServiceConfig.property.mode"></a>

```typescript
public readonly mode: ServiceMode;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#mode Service#mode}

---

##### `rollbackConfig`<sup>Optional</sup> <a name="rollbackConfig" id="@cdktf/provider-docker.service.ServiceConfig.property.rollbackConfig"></a>

```typescript
public readonly rollbackConfig: ServiceRollbackConfig;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

rollback_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#rollback_config Service#rollback_config}

---

##### `updateConfig`<sup>Optional</sup> <a name="updateConfig" id="@cdktf/provider-docker.service.ServiceConfig.property.updateConfig"></a>

```typescript
public readonly updateConfig: ServiceUpdateConfig;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

update_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#update_config Service#update_config}

---

### ServiceConvergeConfig <a name="ServiceConvergeConfig" id="@cdktf/provider-docker.service.ServiceConvergeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceConvergeConfig.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceConvergeConfig: service.ServiceConvergeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig.property.delay">delay</a></code> | <code>string</code> | The interval to check if the desired state is reached `(ms\|s)`. Defaults to `7s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig.property.timeout">timeout</a></code> | <code>string</code> | The timeout of the service to reach the desired state `(s\|m)`. Defaults to `3m`. |

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceConvergeConfig.property.delay"></a>

```typescript
public readonly delay: string;
```

- *Type:* string

The interval to check if the desired state is reached `(ms|s)`. Defaults to `7s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#delay Service#delay}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-docker.service.ServiceConvergeConfig.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

The timeout of the service to reach the desired state `(s|m)`. Defaults to `3m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#timeout Service#timeout}

---

### ServiceEndpointSpec <a name="ServiceEndpointSpec" id="@cdktf/provider-docker.service.ServiceEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceEndpointSpec.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceEndpointSpec: service.ServiceEndpointSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec.property.mode">mode</a></code> | <code>string</code> | The mode of resolution to use for internal load balancing between tasks. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec.property.ports">ports</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>[]</code> | ports block. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.service.ServiceEndpointSpec.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The mode of resolution to use for internal load balancing between tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#mode Service#mode}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-docker.service.ServiceEndpointSpec.property.ports"></a>

```typescript
public readonly ports: IResolvable | ServiceEndpointSpecPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#ports Service#ports}

---

### ServiceEndpointSpecPorts <a name="ServiceEndpointSpecPorts" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceEndpointSpecPorts: service.ServiceEndpointSpecPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.targetPort">targetPort</a></code> | <code>number</code> | The port inside the container. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.name">name</a></code> | <code>string</code> | A random name for the port. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.protocol">protocol</a></code> | <code>string</code> | Rrepresents the protocol of a port: `tcp`, `udp` or `sctp`. Defaults to `tcp`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.publishedPort">publishedPort</a></code> | <code>number</code> | The port on the swarm hosts. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.publishMode">publishMode</a></code> | <code>string</code> | Represents the mode in which the port is to be published: 'ingress' or 'host'. Defaults to `ingress`. |

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.targetPort"></a>

```typescript
public readonly targetPort: number;
```

- *Type:* number

The port inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#target_port Service#target_port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A random name for the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#name Service#name}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Rrepresents the protocol of a port: `tcp`, `udp` or `sctp`. Defaults to `tcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#protocol Service#protocol}

---

##### `publishedPort`<sup>Optional</sup> <a name="publishedPort" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.publishedPort"></a>

```typescript
public readonly publishedPort: number;
```

- *Type:* number

The port on the swarm hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#published_port Service#published_port}

---

##### `publishMode`<sup>Optional</sup> <a name="publishMode" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.publishMode"></a>

```typescript
public readonly publishMode: string;
```

- *Type:* string

Represents the mode in which the port is to be published: 'ingress' or 'host'. Defaults to `ingress`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#publish_mode Service#publish_mode}

---

### ServiceLabels <a name="ServiceLabels" id="@cdktf/provider-docker.service.ServiceLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceLabels.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceLabels: service.ServiceLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabels.property.label">label</a></code> | <code>string</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabels.property.value">value</a></code> | <code>string</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceLabels.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#label Service#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#value Service#value}

---

### ServiceMode <a name="ServiceMode" id="@cdktf/provider-docker.service.ServiceMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceMode.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceMode: service.ServiceMode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceMode.property.global">global</a></code> | <code>boolean \| cdktf.IResolvable</code> | The global service mode. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceMode.property.replicated">replicated</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a></code> | replicated block. |

---

##### `global`<sup>Optional</sup> <a name="global" id="@cdktf/provider-docker.service.ServiceMode.property.global"></a>

```typescript
public readonly global: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The global service mode. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#global Service#global}

---

##### `replicated`<sup>Optional</sup> <a name="replicated" id="@cdktf/provider-docker.service.ServiceMode.property.replicated"></a>

```typescript
public readonly replicated: ServiceModeReplicated;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a>

replicated block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#replicated Service#replicated}

---

### ServiceModeReplicated <a name="ServiceModeReplicated" id="@cdktf/provider-docker.service.ServiceModeReplicated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceModeReplicated.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceModeReplicated: service.ServiceModeReplicated = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicated.property.replicas">replicas</a></code> | <code>number</code> | The amount of replicas of the service. Defaults to `1`. |

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-docker.service.ServiceModeReplicated.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

The amount of replicas of the service. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#replicas Service#replicas}

---

### ServiceRollbackConfig <a name="ServiceRollbackConfig" id="@cdktf/provider-docker.service.ServiceRollbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceRollbackConfig.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceRollbackConfig: service.ServiceRollbackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.delay">delay</a></code> | <code>string</code> | Delay between task rollbacks (ns\|us\|ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.failureAction">failureAction</a></code> | <code>string</code> | Action on rollback failure: pause \| continue. Defaults to `pause`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.maxFailureRatio">maxFailureRatio</a></code> | <code>string</code> | Failure rate to tolerate during a rollback. Defaults to `0.0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.monitor">monitor</a></code> | <code>string</code> | Duration after each task rollback to monitor for failure (ns\|us\|ms\|s\|m\|h). Defaults to `5s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.order">order</a></code> | <code>string</code> | Rollback order: either 'stop-first' or 'start-first'. Defaults to `stop-first`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.parallelism">parallelism</a></code> | <code>number</code> | Maximum number of tasks to be rollbacked in one iteration. Defaults to `1`. |

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.delay"></a>

```typescript
public readonly delay: string;
```

- *Type:* string

Delay between task rollbacks (ns|us|ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#delay Service#delay}

---

##### `failureAction`<sup>Optional</sup> <a name="failureAction" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.failureAction"></a>

```typescript
public readonly failureAction: string;
```

- *Type:* string

Action on rollback failure: pause | continue. Defaults to `pause`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#failure_action Service#failure_action}

---

##### `maxFailureRatio`<sup>Optional</sup> <a name="maxFailureRatio" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.maxFailureRatio"></a>

```typescript
public readonly maxFailureRatio: string;
```

- *Type:* string

Failure rate to tolerate during a rollback. Defaults to `0.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#max_failure_ratio Service#max_failure_ratio}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.monitor"></a>

```typescript
public readonly monitor: string;
```

- *Type:* string

Duration after each task rollback to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#monitor Service#monitor}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Rollback order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#order Service#order}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

Maximum number of tasks to be rollbacked in one iteration. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#parallelism Service#parallelism}

---

### ServiceTaskSpec <a name="ServiceTaskSpec" id="@cdktf/provider-docker.service.ServiceTaskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpec.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpec: service.ServiceTaskSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.containerSpec">containerSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.forceUpdate">forceUpdate</a></code> | <code>number</code> | A counter that triggers an update even if no relevant parameters have been changed. See the [spec](https://github.com/docker/swarmkit/blob/master/api/specs.proto#L126). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.logDriver">logDriver</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a></code> | log_driver block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.networksAdvanced">networksAdvanced</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>[]</code> | networks_advanced block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.restartPolicy">restartPolicy</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a></code> | restart_policy block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.runtime">runtime</a></code> | <code>string</code> | Runtime is the type of runtime specified for the task executor. See the [types](https://github.com/moby/moby/blob/master/api/types/swarm/runtime.go). |

---

##### `containerSpec`<sup>Required</sup> <a name="containerSpec" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.containerSpec"></a>

```typescript
public readonly containerSpec: ServiceTaskSpecContainerSpec;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#container_spec Service#container_spec}

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: number;
```

- *Type:* number

A counter that triggers an update even if no relevant parameters have been changed. See the [spec](https://github.com/docker/swarmkit/blob/master/api/specs.proto#L126).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#force_update Service#force_update}

---

##### `logDriver`<sup>Optional</sup> <a name="logDriver" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.logDriver"></a>

```typescript
public readonly logDriver: ServiceTaskSpecLogDriver;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a>

log_driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#log_driver Service#log_driver}

---

##### `networksAdvanced`<sup>Optional</sup> <a name="networksAdvanced" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.networksAdvanced"></a>

```typescript
public readonly networksAdvanced: IResolvable | ServiceTaskSpecNetworksAdvanced[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>[]

networks_advanced block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#networks_advanced Service#networks_advanced}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.placement"></a>

```typescript
public readonly placement: ServiceTaskSpecPlacement;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#placement Service#placement}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.resources"></a>

```typescript
public readonly resources: ServiceTaskSpecResources;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#resources Service#resources}

---

##### `restartPolicy`<sup>Optional</sup> <a name="restartPolicy" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: ServiceTaskSpecRestartPolicy;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a>

restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#restart_policy Service#restart_policy}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Runtime is the type of runtime specified for the task executor. See the [types](https://github.com/moby/moby/blob/master/api/types/swarm/runtime.go).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#runtime Service#runtime}

---

### ServiceTaskSpecContainerSpec <a name="ServiceTaskSpecContainerSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecContainerSpec: service.ServiceTaskSpecContainerSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.image">image</a></code> | <code>string</code> | The image name to use for the containers of the service, like `nginx:1.17.6`. Also use the data-source or resource of `docker_image` with the `repo_digest` or `docker_registry_image` with the `name` attribute for this, as shown in the examples. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.args">args</a></code> | <code>string[]</code> | Arguments to the command. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.capAdd">capAdd</a></code> | <code>string[]</code> | List of Linux capabilities to add to the container. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.capDrop">capDrop</a></code> | <code>string[]</code> | List of Linux capabilities to drop from the container. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.command">command</a></code> | <code>string[]</code> | The command/entrypoint to be run in the image. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.configs">configs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>[]</code> | configs block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.dir">dir</a></code> | <code>string</code> | The working directory for commands to run in. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.dnsConfig">dnsConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | A list of environment variables in the form VAR="value". |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.groups">groups</a></code> | <code>string[]</code> | A list of additional groups that the container process will run as. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.hostname">hostname</a></code> | <code>string</code> | The hostname to use for the container, as a valid RFC 1123 hostname. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.hosts">hosts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>[]</code> | hosts block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.isolation">isolation</a></code> | <code>string</code> | Isolation technology of the containers running the service. (Windows only). Defaults to `default`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.labels">labels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>[]</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.mounts">mounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>[]</code> | mounts block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.privileges">privileges</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a></code> | privileges block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Mount the container's root filesystem as read only. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.secrets">secrets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>[]</code> | secrets block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.stopGracePeriod">stopGracePeriod</a></code> | <code>string</code> | Amount of time to wait for the container to terminate before forcefully removing it (ms\|s\|m\|h). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.stopSignal">stopSignal</a></code> | <code>string</code> | Signal to stop the container. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.sysctl">sysctl</a></code> | <code>{[ key: string ]: string}</code> | Sysctls config (Linux only). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.user">user</a></code> | <code>string</code> | The user inside the container. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

The image name to use for the containers of the service, like `nginx:1.17.6`. Also use the data-source or resource of `docker_image` with the `repo_digest` or `docker_registry_image` with the `name` attribute for this, as shown in the examples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#image Service#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Arguments to the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#args Service#args}

---

##### `capAdd`<sup>Optional</sup> <a name="capAdd" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.capAdd"></a>

```typescript
public readonly capAdd: string[];
```

- *Type:* string[]

List of Linux capabilities to add to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#cap_add Service#cap_add}

---

##### `capDrop`<sup>Optional</sup> <a name="capDrop" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.capDrop"></a>

```typescript
public readonly capDrop: string[];
```

- *Type:* string[]

List of Linux capabilities to drop from the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#cap_drop Service#cap_drop}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

The command/entrypoint to be run in the image.

According to the [docker cli](https://github.com/docker/cli/blob/v20.10.7/cli/command/service/opts.go#L705) the override of the entrypoint is also passed to the `command` property and there is no `entrypoint` attribute in the `ContainerSpec` of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#command Service#command}

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.configs"></a>

```typescript
public readonly configs: IResolvable | ServiceTaskSpecContainerSpecConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>[]

configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#configs Service#configs}

---

##### `dir`<sup>Optional</sup> <a name="dir" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.dir"></a>

```typescript
public readonly dir: string;
```

- *Type:* string

The working directory for commands to run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#dir Service#dir}

---

##### `dnsConfig`<sup>Optional</sup> <a name="dnsConfig" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.dnsConfig"></a>

```typescript
public readonly dnsConfig: ServiceTaskSpecContainerSpecDnsConfig;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#dns_config Service#dns_config}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of environment variables in the form VAR="value".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#env Service#env}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

A list of additional groups that the container process will run as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#groups Service#groups}

---

##### `healthcheck`<sup>Optional</sup> <a name="healthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.healthcheck"></a>

```typescript
public readonly healthcheck: ServiceTaskSpecContainerSpecHealthcheck;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#healthcheck Service#healthcheck}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

The hostname to use for the container, as a valid RFC 1123 hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#hostname Service#hostname}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.hosts"></a>

```typescript
public readonly hosts: IResolvable | ServiceTaskSpecContainerSpecHosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>[]

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#hosts Service#hosts}

---

##### `isolation`<sup>Optional</sup> <a name="isolation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.isolation"></a>

```typescript
public readonly isolation: string;
```

- *Type:* string

Isolation technology of the containers running the service. (Windows only). Defaults to `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#isolation Service#isolation}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.labels"></a>

```typescript
public readonly labels: IResolvable | ServiceTaskSpecContainerSpecLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>[]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#labels Service#labels}

---

##### `mounts`<sup>Optional</sup> <a name="mounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.mounts"></a>

```typescript
public readonly mounts: IResolvable | ServiceTaskSpecContainerSpecMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>[]

mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#mounts Service#mounts}

---

##### `privileges`<sup>Optional</sup> <a name="privileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.privileges"></a>

```typescript
public readonly privileges: ServiceTaskSpecContainerSpecPrivileges;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a>

privileges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#privileges Service#privileges}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Mount the container's root filesystem as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#read_only Service#read_only}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.secrets"></a>

```typescript
public readonly secrets: IResolvable | ServiceTaskSpecContainerSpecSecrets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>[]

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#secrets Service#secrets}

---

##### `stopGracePeriod`<sup>Optional</sup> <a name="stopGracePeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.stopGracePeriod"></a>

```typescript
public readonly stopGracePeriod: string;
```

- *Type:* string

Amount of time to wait for the container to terminate before forcefully removing it (ms|s|m|h).

If not specified or '0s' the destroy will not check if all tasks/containers of the service terminate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#stop_grace_period Service#stop_grace_period}

---

##### `stopSignal`<sup>Optional</sup> <a name="stopSignal" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.stopSignal"></a>

```typescript
public readonly stopSignal: string;
```

- *Type:* string

Signal to stop the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#stop_signal Service#stop_signal}

---

##### `sysctl`<sup>Optional</sup> <a name="sysctl" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.sysctl"></a>

```typescript
public readonly sysctl: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sysctls config (Linux only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#sysctl Service#sysctl}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

The user inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#user Service#user}

---

### ServiceTaskSpecContainerSpecConfigs <a name="ServiceTaskSpecContainerSpecConfigs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecContainerSpecConfigs: service.ServiceTaskSpecContainerSpecConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.configId">configId</a></code> | <code>string</code> | ID of the specific config that we're referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileName">fileName</a></code> | <code>string</code> | Represents the final filename in the filesystem. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.configName">configName</a></code> | <code>string</code> | Name of the config that this references, but this is just provided for lookup/display purposes. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileGid">fileGid</a></code> | <code>string</code> | Represents the file GID. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileMode">fileMode</a></code> | <code>number</code> | Represents represents the FileMode of the file. Defaults to `0o444`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileUid">fileUid</a></code> | <code>string</code> | Represents the file UID. Defaults to `0`. |

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

ID of the specific config that we're referencing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#config_id Service#config_id}

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

Represents the final filename in the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#file_name Service#file_name}

---

##### `configName`<sup>Optional</sup> <a name="configName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.configName"></a>

```typescript
public readonly configName: string;
```

- *Type:* string

Name of the config that this references, but this is just provided for lookup/display purposes.

The config in the reference will be identified by its ID

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#config_name Service#config_name}

---

##### `fileGid`<sup>Optional</sup> <a name="fileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileGid"></a>

```typescript
public readonly fileGid: string;
```

- *Type:* string

Represents the file GID. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#file_gid Service#file_gid}

---

##### `fileMode`<sup>Optional</sup> <a name="fileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileMode"></a>

```typescript
public readonly fileMode: number;
```

- *Type:* number

Represents represents the FileMode of the file. Defaults to `0o444`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#file_mode Service#file_mode}

---

##### `fileUid`<sup>Optional</sup> <a name="fileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileUid"></a>

```typescript
public readonly fileUid: string;
```

- *Type:* string

Represents the file UID. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#file_uid Service#file_uid}

---

### ServiceTaskSpecContainerSpecDnsConfig <a name="ServiceTaskSpecContainerSpecDnsConfig" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecContainerSpecDnsConfig: service.ServiceTaskSpecContainerSpecDnsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.nameservers">nameservers</a></code> | <code>string[]</code> | The IP addresses of the name servers. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.options">options</a></code> | <code>string[]</code> | A list of internal resolver variables to be modified (e.g., `debug`, `ndots:3`, etc.). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.search">search</a></code> | <code>string[]</code> | A search list for host-name lookup. |

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.nameservers"></a>

```typescript
public readonly nameservers: string[];
```

- *Type:* string[]

The IP addresses of the name servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#nameservers Service#nameservers}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

A list of internal resolver variables to be modified (e.g., `debug`, `ndots:3`, etc.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#options Service#options}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.search"></a>

```typescript
public readonly search: string[];
```

- *Type:* string[]

A search list for host-name lookup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#search Service#search}

---

### ServiceTaskSpecContainerSpecHealthcheck <a name="ServiceTaskSpecContainerSpecHealthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecContainerSpecHealthcheck: service.ServiceTaskSpecContainerSpecHealthcheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.test">test</a></code> | <code>string[]</code> | The test to perform as list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.interval">interval</a></code> | <code>string</code> | Time between running the check (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.retries">retries</a></code> | <code>number</code> | Consecutive failures needed to report unhealthy. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.startPeriod">startPeriod</a></code> | <code>string</code> | Start period for the container to initialize before counting retries towards unstable (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.timeout">timeout</a></code> | <code>string</code> | Maximum time to allow one check to run (ms\|s\|m\|h). Defaults to `0s`. |

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.test"></a>

```typescript
public readonly test: string[];
```

- *Type:* string[]

The test to perform as list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#test Service#test}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Time between running the check (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#interval Service#interval}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

Consecutive failures needed to report unhealthy. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#retries Service#retries}

---

##### `startPeriod`<sup>Optional</sup> <a name="startPeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.startPeriod"></a>

```typescript
public readonly startPeriod: string;
```

- *Type:* string

Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#start_period Service#start_period}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#timeout Service#timeout}

---

### ServiceTaskSpecContainerSpecHosts <a name="ServiceTaskSpecContainerSpecHosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecContainerSpecHosts: service.ServiceTaskSpecContainerSpecHosts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.property.host">host</a></code> | <code>string</code> | The name of the host. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.property.ip">ip</a></code> | <code>string</code> | The ip of the host. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The name of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#host Service#host}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

The ip of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#ip Service#ip}

---

### ServiceTaskSpecContainerSpecLabels <a name="ServiceTaskSpecContainerSpecLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecContainerSpecLabels: service.ServiceTaskSpecContainerSpecLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.property.label">label</a></code> | <code>string</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.property.value">value</a></code> | <code>string</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#label Service#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#value Service#value}

---

### ServiceTaskSpecContainerSpecMounts <a name="ServiceTaskSpecContainerSpecMounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecContainerSpecMounts: service.ServiceTaskSpecContainerSpecMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.target">target</a></code> | <code>string</code> | Container path. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.type">type</a></code> | <code>string</code> | The mount type. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.bindOptions">bindOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a></code> | bind_options block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the mount should be read-only. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.source">source</a></code> | <code>string</code> | Mount source (e.g. a volume name, a host path). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.tmpfsOptions">tmpfsOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a></code> | tmpfs_options block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.volumeOptions">volumeOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a></code> | volume_options block. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Container path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#target Service#target}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The mount type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#type Service#type}

---

##### `bindOptions`<sup>Optional</sup> <a name="bindOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.bindOptions"></a>

```typescript
public readonly bindOptions: ServiceTaskSpecContainerSpecMountsBindOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a>

bind_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#bind_options Service#bind_options}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the mount should be read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#read_only Service#read_only}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Mount source (e.g. a volume name, a host path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#source Service#source}

---

##### `tmpfsOptions`<sup>Optional</sup> <a name="tmpfsOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.tmpfsOptions"></a>

```typescript
public readonly tmpfsOptions: ServiceTaskSpecContainerSpecMountsTmpfsOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a>

tmpfs_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#tmpfs_options Service#tmpfs_options}

---

##### `volumeOptions`<sup>Optional</sup> <a name="volumeOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.volumeOptions"></a>

```typescript
public readonly volumeOptions: ServiceTaskSpecContainerSpecMountsVolumeOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a>

volume_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#volume_options Service#volume_options}

---

### ServiceTaskSpecContainerSpecMountsBindOptions <a name="ServiceTaskSpecContainerSpecMountsBindOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecContainerSpecMountsBindOptions: service.ServiceTaskSpecContainerSpecMountsBindOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions.property.propagation">propagation</a></code> | <code>string</code> | Bind propagation refers to whether or not mounts created within a given bind-mount or named volume can be propagated to replicas of that mount. |

---

##### `propagation`<sup>Optional</sup> <a name="propagation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions.property.propagation"></a>

```typescript
public readonly propagation: string;
```

- *Type:* string

Bind propagation refers to whether or not mounts created within a given bind-mount or named volume can be propagated to replicas of that mount.

See the [docs](https://docs.docker.com/storage/bind-mounts/#configure-bind-propagation) for details. Defaults to `rprivate`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#propagation Service#propagation}

---

### ServiceTaskSpecContainerSpecMountsTmpfsOptions <a name="ServiceTaskSpecContainerSpecMountsTmpfsOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecContainerSpecMountsTmpfsOptions: service.ServiceTaskSpecContainerSpecMountsTmpfsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.property.mode">mode</a></code> | <code>number</code> | The permission mode for the tmpfs mount in an integer. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.property.sizeBytes">sizeBytes</a></code> | <code>number</code> | The size for the tmpfs mount in bytes. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

The permission mode for the tmpfs mount in an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#mode Service#mode}

---

##### `sizeBytes`<sup>Optional</sup> <a name="sizeBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.property.sizeBytes"></a>

```typescript
public readonly sizeBytes: number;
```

- *Type:* number

The size for the tmpfs mount in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#size_bytes Service#size_bytes}

---

### ServiceTaskSpecContainerSpecMountsVolumeOptions <a name="ServiceTaskSpecContainerSpecMountsVolumeOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecContainerSpecMountsVolumeOptions: service.ServiceTaskSpecContainerSpecMountsVolumeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.driverName">driverName</a></code> | <code>string</code> | Name of the driver to use to create the volume. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.driverOptions">driverOptions</a></code> | <code>{[ key: string ]: string}</code> | key/value map of driver specific options. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.labels">labels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>[]</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.noCopy">noCopy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Populate volume with data from the target. |

---

##### `driverName`<sup>Optional</sup> <a name="driverName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.driverName"></a>

```typescript
public readonly driverName: string;
```

- *Type:* string

Name of the driver to use to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#driver_name Service#driver_name}

---

##### `driverOptions`<sup>Optional</sup> <a name="driverOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.driverOptions"></a>

```typescript
public readonly driverOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

key/value map of driver specific options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#driver_options Service#driver_options}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.labels"></a>

```typescript
public readonly labels: IResolvable | ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>[]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#labels Service#labels}

---

##### `noCopy`<sup>Optional</sup> <a name="noCopy" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.noCopy"></a>

```typescript
public readonly noCopy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Populate volume with data from the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#no_copy Service#no_copy}

---

### ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels <a name="ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecContainerSpecMountsVolumeOptionsLabels: service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.property.label">label</a></code> | <code>string</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.property.value">value</a></code> | <code>string</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#label Service#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#value Service#value}

---

### ServiceTaskSpecContainerSpecPrivileges <a name="ServiceTaskSpecContainerSpecPrivileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecContainerSpecPrivileges: service.ServiceTaskSpecContainerSpecPrivileges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.property.credentialSpec">credentialSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a></code> | credential_spec block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.property.seLinuxContext">seLinuxContext</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a></code> | se_linux_context block. |

---

##### `credentialSpec`<sup>Optional</sup> <a name="credentialSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.property.credentialSpec"></a>

```typescript
public readonly credentialSpec: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a>

credential_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#credential_spec Service#credential_spec}

---

##### `seLinuxContext`<sup>Optional</sup> <a name="seLinuxContext" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.property.seLinuxContext"></a>

```typescript
public readonly seLinuxContext: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a>

se_linux_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#se_linux_context Service#se_linux_context}

---

### ServiceTaskSpecContainerSpecPrivilegesCredentialSpec <a name="ServiceTaskSpecContainerSpecPrivilegesCredentialSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecContainerSpecPrivilegesCredentialSpec: service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.property.file">file</a></code> | <code>string</code> | Load credential spec from this file. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.property.registry">registry</a></code> | <code>string</code> | Load credential spec from this value in the Windows registry. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

Load credential spec from this file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#file Service#file}

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.property.registry"></a>

```typescript
public readonly registry: string;
```

- *Type:* string

Load credential spec from this value in the Windows registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#registry Service#registry}

---

### ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext <a name="ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecContainerSpecPrivilegesSeLinuxContext: service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.disable">disable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable SELinux. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.level">level</a></code> | <code>string</code> | SELinux level label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.role">role</a></code> | <code>string</code> | SELinux role label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.type">type</a></code> | <code>string</code> | SELinux type label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.user">user</a></code> | <code>string</code> | SELinux user label. |

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.disable"></a>

```typescript
public readonly disable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable SELinux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#disable Service#disable}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

SELinux level label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#level Service#level}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

SELinux role label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#role Service#role}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

SELinux type label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#type Service#type}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

SELinux user label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#user Service#user}

---

### ServiceTaskSpecContainerSpecSecrets <a name="ServiceTaskSpecContainerSpecSecrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecContainerSpecSecrets: service.ServiceTaskSpecContainerSpecSecrets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileName">fileName</a></code> | <code>string</code> | Represents the final filename in the filesystem. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.secretId">secretId</a></code> | <code>string</code> | ID of the specific secret that we're referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileGid">fileGid</a></code> | <code>string</code> | Represents the file GID. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileMode">fileMode</a></code> | <code>number</code> | Represents represents the FileMode of the file. Defaults to `0o444`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileUid">fileUid</a></code> | <code>string</code> | Represents the file UID. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.secretName">secretName</a></code> | <code>string</code> | Name of the secret that this references, but this is just provided for lookup/display purposes. |

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

Represents the final filename in the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#file_name Service#file_name}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

ID of the specific secret that we're referencing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#secret_id Service#secret_id}

---

##### `fileGid`<sup>Optional</sup> <a name="fileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileGid"></a>

```typescript
public readonly fileGid: string;
```

- *Type:* string

Represents the file GID. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#file_gid Service#file_gid}

---

##### `fileMode`<sup>Optional</sup> <a name="fileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileMode"></a>

```typescript
public readonly fileMode: number;
```

- *Type:* number

Represents represents the FileMode of the file. Defaults to `0o444`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#file_mode Service#file_mode}

---

##### `fileUid`<sup>Optional</sup> <a name="fileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileUid"></a>

```typescript
public readonly fileUid: string;
```

- *Type:* string

Represents the file UID. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#file_uid Service#file_uid}

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Name of the secret that this references, but this is just provided for lookup/display purposes.

The config in the reference will be identified by its ID

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#secret_name Service#secret_name}

---

### ServiceTaskSpecLogDriver <a name="ServiceTaskSpecLogDriver" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecLogDriver: service.ServiceTaskSpecLogDriver = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.property.name">name</a></code> | <code>string</code> | The logging driver to use. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | The options for the logging driver. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The logging driver to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#name Service#name}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The options for the logging driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#options Service#options}

---

### ServiceTaskSpecNetworksAdvanced <a name="ServiceTaskSpecNetworksAdvanced" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecNetworksAdvanced: service.ServiceTaskSpecNetworksAdvanced = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.name">name</a></code> | <code>string</code> | The name/id of the network. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.aliases">aliases</a></code> | <code>string[]</code> | The network aliases of the container in the specific network. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.driverOpts">driverOpts</a></code> | <code>string[]</code> | An array of driver options for the network, e.g. `opts1=value`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name/id of the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#name Service#name}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.aliases"></a>

```typescript
public readonly aliases: string[];
```

- *Type:* string[]

The network aliases of the container in the specific network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#aliases Service#aliases}

---

##### `driverOpts`<sup>Optional</sup> <a name="driverOpts" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.driverOpts"></a>

```typescript
public readonly driverOpts: string[];
```

- *Type:* string[]

An array of driver options for the network, e.g. `opts1=value`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#driver_opts Service#driver_opts}

---

### ServiceTaskSpecPlacement <a name="ServiceTaskSpecPlacement" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecPlacement: service.ServiceTaskSpecPlacement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.constraints">constraints</a></code> | <code>string[]</code> | An array of constraints. e.g.: `node.role==manager`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.maxReplicas">maxReplicas</a></code> | <code>number</code> | Maximum number of replicas for per node (default value is `0`, which is unlimited). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.platforms">platforms</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>[]</code> | platforms block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.prefs">prefs</a></code> | <code>string[]</code> | Preferences provide a way to make the scheduler aware of factors such as topology. |

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.constraints"></a>

```typescript
public readonly constraints: string[];
```

- *Type:* string[]

An array of constraints. e.g.: `node.role==manager`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#constraints Service#constraints}

---

##### `maxReplicas`<sup>Optional</sup> <a name="maxReplicas" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.maxReplicas"></a>

```typescript
public readonly maxReplicas: number;
```

- *Type:* number

Maximum number of replicas for per node (default value is `0`, which is unlimited).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#max_replicas Service#max_replicas}

---

##### `platforms`<sup>Optional</sup> <a name="platforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.platforms"></a>

```typescript
public readonly platforms: IResolvable | ServiceTaskSpecPlacementPlatforms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>[]

platforms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#platforms Service#platforms}

---

##### `prefs`<sup>Optional</sup> <a name="prefs" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.prefs"></a>

```typescript
public readonly prefs: string[];
```

- *Type:* string[]

Preferences provide a way to make the scheduler aware of factors such as topology.

They are provided in order from highest to lowest precedence, e.g.: `spread=node.role.manager`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#prefs Service#prefs}

---

### ServiceTaskSpecPlacementPlatforms <a name="ServiceTaskSpecPlacementPlatforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecPlacementPlatforms: service.ServiceTaskSpecPlacementPlatforms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.property.architecture">architecture</a></code> | <code>string</code> | The architecture, e.g. `amd64`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.property.os">os</a></code> | <code>string</code> | The operation system, e.g. `linux`. |

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

The architecture, e.g. `amd64`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#architecture Service#architecture}

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

The operation system, e.g. `linux`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#os Service#os}

---

### ServiceTaskSpecResources <a name="ServiceTaskSpecResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecResources.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecResources: service.ServiceTaskSpecResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources.property.reservation">reservation</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a></code> | reservation block. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-docker.service.ServiceTaskSpecResources.property.limits"></a>

```typescript
public readonly limits: ServiceTaskSpecResourcesLimits;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#limits Service#limits}

---

##### `reservation`<sup>Optional</sup> <a name="reservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResources.property.reservation"></a>

```typescript
public readonly reservation: ServiceTaskSpecResourcesReservation;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a>

reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#reservation Service#reservation}

---

### ServiceTaskSpecResourcesLimits <a name="ServiceTaskSpecResourcesLimits" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecResourcesLimits: service.ServiceTaskSpecResourcesLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.property.memoryBytes">memoryBytes</a></code> | <code>number</code> | The amounf of memory in bytes the container allocates. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.property.nanoCpus">nanoCpus</a></code> | <code>number</code> | CPU shares in units of `1/1e9` (or `10^-9`) of the CPU. Should be at least `1000000`. |

---

##### `memoryBytes`<sup>Optional</sup> <a name="memoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.property.memoryBytes"></a>

```typescript
public readonly memoryBytes: number;
```

- *Type:* number

The amounf of memory in bytes the container allocates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#memory_bytes Service#memory_bytes}

---

##### `nanoCpus`<sup>Optional</sup> <a name="nanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.property.nanoCpus"></a>

```typescript
public readonly nanoCpus: number;
```

- *Type:* number

CPU shares in units of `1/1e9` (or `10^-9`) of the CPU. Should be at least `1000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#nano_cpus Service#nano_cpus}

---

### ServiceTaskSpecResourcesReservation <a name="ServiceTaskSpecResourcesReservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecResourcesReservation: service.ServiceTaskSpecResourcesReservation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.genericResources">genericResources</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a></code> | generic_resources block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.memoryBytes">memoryBytes</a></code> | <code>number</code> | The amounf of memory in bytes the container allocates. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.nanoCpus">nanoCpus</a></code> | <code>number</code> | CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least `1000000`. |

---

##### `genericResources`<sup>Optional</sup> <a name="genericResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.genericResources"></a>

```typescript
public readonly genericResources: ServiceTaskSpecResourcesReservationGenericResources;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a>

generic_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#generic_resources Service#generic_resources}

---

##### `memoryBytes`<sup>Optional</sup> <a name="memoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.memoryBytes"></a>

```typescript
public readonly memoryBytes: number;
```

- *Type:* number

The amounf of memory in bytes the container allocates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#memory_bytes Service#memory_bytes}

---

##### `nanoCpus`<sup>Optional</sup> <a name="nanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.nanoCpus"></a>

```typescript
public readonly nanoCpus: number;
```

- *Type:* number

CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least `1000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#nano_cpus Service#nano_cpus}

---

### ServiceTaskSpecResourcesReservationGenericResources <a name="ServiceTaskSpecResourcesReservationGenericResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecResourcesReservationGenericResources: service.ServiceTaskSpecResourcesReservationGenericResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.property.discreteResourcesSpec">discreteResourcesSpec</a></code> | <code>string[]</code> | The Integer resources. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.property.namedResourcesSpec">namedResourcesSpec</a></code> | <code>string[]</code> | The String resources. |

---

##### `discreteResourcesSpec`<sup>Optional</sup> <a name="discreteResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.property.discreteResourcesSpec"></a>

```typescript
public readonly discreteResourcesSpec: string[];
```

- *Type:* string[]

The Integer resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#discrete_resources_spec Service#discrete_resources_spec}

---

##### `namedResourcesSpec`<sup>Optional</sup> <a name="namedResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.property.namedResourcesSpec"></a>

```typescript
public readonly namedResourcesSpec: string[];
```

- *Type:* string[]

The String resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#named_resources_spec Service#named_resources_spec}

---

### ServiceTaskSpecRestartPolicy <a name="ServiceTaskSpecRestartPolicy" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceTaskSpecRestartPolicy: service.ServiceTaskSpecRestartPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.condition">condition</a></code> | <code>string</code> | Condition for restart. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.delay">delay</a></code> | <code>string</code> | Delay between restart attempts (ms\|s\|m\|h). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | Maximum attempts to restart a given container before giving up (default value is `0`, which is ignored). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.window">window</a></code> | <code>string</code> | The time window used to evaluate the restart policy (default value is `0`, which is unbounded) (ms\|s\|m\|h). |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Condition for restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#condition Service#condition}

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.delay"></a>

```typescript
public readonly delay: string;
```

- *Type:* string

Delay between restart attempts (ms|s|m|h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#delay Service#delay}

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

Maximum attempts to restart a given container before giving up (default value is `0`, which is ignored).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#max_attempts Service#max_attempts}

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.window"></a>

```typescript
public readonly window: string;
```

- *Type:* string

The time window used to evaluate the restart policy (default value is `0`, which is unbounded) (ms|s|m|h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#window Service#window}

---

### ServiceUpdateConfig <a name="ServiceUpdateConfig" id="@cdktf/provider-docker.service.ServiceUpdateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceUpdateConfig.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

const serviceUpdateConfig: service.ServiceUpdateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.delay">delay</a></code> | <code>string</code> | Delay between task updates `(ns\|us\|ms\|s\|m\|h)`. Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.failureAction">failureAction</a></code> | <code>string</code> | Action on update failure: `pause`, `continue` or `rollback`. Defaults to `pause`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.maxFailureRatio">maxFailureRatio</a></code> | <code>string</code> | Failure rate to tolerate during an update. Defaults to `0.0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.monitor">monitor</a></code> | <code>string</code> | Duration after each task update to monitor for failure (ns\|us\|ms\|s\|m\|h). Defaults to `5s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.order">order</a></code> | <code>string</code> | Update order: either 'stop-first' or 'start-first'. Defaults to `stop-first`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.parallelism">parallelism</a></code> | <code>number</code> | Maximum number of tasks to be updated in one iteration. Defaults to `1`. |

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.delay"></a>

```typescript
public readonly delay: string;
```

- *Type:* string

Delay between task updates `(ns|us|ms|s|m|h)`. Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#delay Service#delay}

---

##### `failureAction`<sup>Optional</sup> <a name="failureAction" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.failureAction"></a>

```typescript
public readonly failureAction: string;
```

- *Type:* string

Action on update failure: `pause`, `continue` or `rollback`. Defaults to `pause`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#failure_action Service#failure_action}

---

##### `maxFailureRatio`<sup>Optional</sup> <a name="maxFailureRatio" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.maxFailureRatio"></a>

```typescript
public readonly maxFailureRatio: string;
```

- *Type:* string

Failure rate to tolerate during an update. Defaults to `0.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#max_failure_ratio Service#max_failure_ratio}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.monitor"></a>

```typescript
public readonly monitor: string;
```

- *Type:* string

Duration after each task update to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#monitor Service#monitor}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Update order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#order Service#order}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

Maximum number of tasks to be updated in one iteration. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/resources/service#parallelism Service#parallelism}

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceAuthOutputReference <a name="ServiceAuthOutputReference" id="@cdktf/provider-docker.service.ServiceAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.serverAddressInput">serverAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.serverAddress">serverAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `serverAddressInput`<sup>Optional</sup> <a name="serverAddressInput" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.serverAddressInput"></a>

```typescript
public readonly serverAddressInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `serverAddress`<sup>Required</sup> <a name="serverAddress" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.serverAddress"></a>

```typescript
public readonly serverAddress: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceAuth;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

---


### ServiceConvergeConfigOutputReference <a name="ServiceConvergeConfigOutputReference" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceConvergeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resetDelay">resetDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelay` <a name="resetDelay" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resetDelay"></a>

```typescript
public resetDelay(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.delayInput">delayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.delay">delay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.delayInput"></a>

```typescript
public readonly delayInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.delay"></a>

```typescript
public readonly delay: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceConvergeConfig;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

---


### ServiceEndpointSpecOutputReference <a name="ServiceEndpointSpecOutputReference" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceEndpointSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPorts` <a name="putPorts" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.putPorts"></a>

```typescript
public putPorts(value: IResolvable | ServiceEndpointSpecPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.putPorts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>[]

---

##### `resetMode` <a name="resetMode" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList">ServiceEndpointSpecPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.portsInput">portsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.ports"></a>

```typescript
public readonly ports: ServiceEndpointSpecPortsList;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList">ServiceEndpointSpecPortsList</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: IResolvable | ServiceEndpointSpecPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>[]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceEndpointSpec;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

---


### ServiceEndpointSpecPortsList <a name="ServiceEndpointSpecPortsList" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceEndpointSpecPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.get"></a>

```typescript
public get(index: number): ServiceEndpointSpecPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceEndpointSpecPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>[]

---


### ServiceEndpointSpecPortsOutputReference <a name="ServiceEndpointSpecPortsOutputReference" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceEndpointSpecPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetPublishedPort">resetPublishedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetPublishMode">resetPublishMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetPublishedPort` <a name="resetPublishedPort" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetPublishedPort"></a>

```typescript
public resetPublishedPort(): void
```

##### `resetPublishMode` <a name="resetPublishMode" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetPublishMode"></a>

```typescript
public resetPublishMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishedPortInput">publishedPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishModeInput">publishModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.targetPortInput">targetPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishedPort">publishedPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishMode">publishMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.targetPort">targetPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `publishedPortInput`<sup>Optional</sup> <a name="publishedPortInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishedPortInput"></a>

```typescript
public readonly publishedPortInput: number;
```

- *Type:* number

---

##### `publishModeInput`<sup>Optional</sup> <a name="publishModeInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishModeInput"></a>

```typescript
public readonly publishModeInput: string;
```

- *Type:* string

---

##### `targetPortInput`<sup>Optional</sup> <a name="targetPortInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.targetPortInput"></a>

```typescript
public readonly targetPortInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `publishedPort`<sup>Required</sup> <a name="publishedPort" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishedPort"></a>

```typescript
public readonly publishedPort: number;
```

- *Type:* number

---

##### `publishMode`<sup>Required</sup> <a name="publishMode" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishMode"></a>

```typescript
public readonly publishMode: string;
```

- *Type:* string

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.targetPort"></a>

```typescript
public readonly targetPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceEndpointSpecPorts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>

---


### ServiceLabelsList <a name="ServiceLabelsList" id="@cdktf/provider-docker.service.ServiceLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceLabelsList.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.service.ServiceLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceLabelsList.get"></a>

```typescript
public get(index: number): ServiceLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>[]

---


### ServiceLabelsOutputReference <a name="ServiceLabelsOutputReference" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceLabels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>

---


### ServiceModeOutputReference <a name="ServiceModeOutputReference" id="@cdktf/provider-docker.service.ServiceModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceModeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.putReplicated">putReplicated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.resetGlobal">resetGlobal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.resetReplicated">resetReplicated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceModeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceModeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceModeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReplicated` <a name="putReplicated" id="@cdktf/provider-docker.service.ServiceModeOutputReference.putReplicated"></a>

```typescript
public putReplicated(value: ServiceModeReplicated): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceModeOutputReference.putReplicated.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a>

---

##### `resetGlobal` <a name="resetGlobal" id="@cdktf/provider-docker.service.ServiceModeOutputReference.resetGlobal"></a>

```typescript
public resetGlobal(): void
```

##### `resetReplicated` <a name="resetReplicated" id="@cdktf/provider-docker.service.ServiceModeOutputReference.resetReplicated"></a>

```typescript
public resetReplicated(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.replicated">replicated</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference">ServiceModeReplicatedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.globalInput">globalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.replicatedInput">replicatedInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.global">global</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replicated`<sup>Required</sup> <a name="replicated" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.replicated"></a>

```typescript
public readonly replicated: ServiceModeReplicatedOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference">ServiceModeReplicatedOutputReference</a>

---

##### `globalInput`<sup>Optional</sup> <a name="globalInput" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.globalInput"></a>

```typescript
public readonly globalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replicatedInput`<sup>Optional</sup> <a name="replicatedInput" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.replicatedInput"></a>

```typescript
public readonly replicatedInput: ServiceModeReplicated;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a>

---

##### `global`<sup>Required</sup> <a name="global" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.global"></a>

```typescript
public readonly global: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceMode;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

---


### ServiceModeReplicatedOutputReference <a name="ServiceModeReplicatedOutputReference" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceModeReplicatedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resetReplicas">resetReplicas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReplicas` <a name="resetReplicas" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resetReplicas"></a>

```typescript
public resetReplicas(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.replicasInput">replicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.replicasInput"></a>

```typescript
public readonly replicasInput: number;
```

- *Type:* number

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceModeReplicated;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a>

---


### ServiceRollbackConfigOutputReference <a name="ServiceRollbackConfigOutputReference" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceRollbackConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetDelay">resetDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetFailureAction">resetFailureAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetMaxFailureRatio">resetMaxFailureRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetMonitor">resetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetParallelism">resetParallelism</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelay` <a name="resetDelay" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetDelay"></a>

```typescript
public resetDelay(): void
```

##### `resetFailureAction` <a name="resetFailureAction" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetFailureAction"></a>

```typescript
public resetFailureAction(): void
```

##### `resetMaxFailureRatio` <a name="resetMaxFailureRatio" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetMaxFailureRatio"></a>

```typescript
public resetMaxFailureRatio(): void
```

##### `resetMonitor` <a name="resetMonitor" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetMonitor"></a>

```typescript
public resetMonitor(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetParallelism` <a name="resetParallelism" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetParallelism"></a>

```typescript
public resetParallelism(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.delayInput">delayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.failureActionInput">failureActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.maxFailureRatioInput">maxFailureRatioInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.monitorInput">monitorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.parallelismInput">parallelismInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.delay">delay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.failureAction">failureAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.maxFailureRatio">maxFailureRatio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.monitor">monitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.parallelism">parallelism</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.delayInput"></a>

```typescript
public readonly delayInput: string;
```

- *Type:* string

---

##### `failureActionInput`<sup>Optional</sup> <a name="failureActionInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.failureActionInput"></a>

```typescript
public readonly failureActionInput: string;
```

- *Type:* string

---

##### `maxFailureRatioInput`<sup>Optional</sup> <a name="maxFailureRatioInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.maxFailureRatioInput"></a>

```typescript
public readonly maxFailureRatioInput: string;
```

- *Type:* string

---

##### `monitorInput`<sup>Optional</sup> <a name="monitorInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.monitorInput"></a>

```typescript
public readonly monitorInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `parallelismInput`<sup>Optional</sup> <a name="parallelismInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.parallelismInput"></a>

```typescript
public readonly parallelismInput: number;
```

- *Type:* number

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.delay"></a>

```typescript
public readonly delay: string;
```

- *Type:* string

---

##### `failureAction`<sup>Required</sup> <a name="failureAction" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.failureAction"></a>

```typescript
public readonly failureAction: string;
```

- *Type:* string

---

##### `maxFailureRatio`<sup>Required</sup> <a name="maxFailureRatio" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.maxFailureRatio"></a>

```typescript
public readonly maxFailureRatio: string;
```

- *Type:* string

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.monitor"></a>

```typescript
public readonly monitor: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceRollbackConfig;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

---


### ServiceTaskSpecContainerSpecConfigsList <a name="ServiceTaskSpecContainerSpecConfigsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.get"></a>

```typescript
public get(index: number): ServiceTaskSpecContainerSpecConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceTaskSpecContainerSpecConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>[]

---


### ServiceTaskSpecContainerSpecConfigsOutputReference <a name="ServiceTaskSpecContainerSpecConfigsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetConfigName">resetConfigName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileGid">resetFileGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileMode">resetFileMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileUid">resetFileUid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigName` <a name="resetConfigName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetConfigName"></a>

```typescript
public resetConfigName(): void
```

##### `resetFileGid` <a name="resetFileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileGid"></a>

```typescript
public resetFileGid(): void
```

##### `resetFileMode` <a name="resetFileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileMode"></a>

```typescript
public resetFileMode(): void
```

##### `resetFileUid` <a name="resetFileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileUid"></a>

```typescript
public resetFileUid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configIdInput">configIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configNameInput">configNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileGidInput">fileGidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileModeInput">fileModeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileUidInput">fileUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configName">configName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileGid">fileGid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileMode">fileMode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileUid">fileUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configIdInput`<sup>Optional</sup> <a name="configIdInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configIdInput"></a>

```typescript
public readonly configIdInput: string;
```

- *Type:* string

---

##### `configNameInput`<sup>Optional</sup> <a name="configNameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configNameInput"></a>

```typescript
public readonly configNameInput: string;
```

- *Type:* string

---

##### `fileGidInput`<sup>Optional</sup> <a name="fileGidInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileGidInput"></a>

```typescript
public readonly fileGidInput: string;
```

- *Type:* string

---

##### `fileModeInput`<sup>Optional</sup> <a name="fileModeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileModeInput"></a>

```typescript
public readonly fileModeInput: number;
```

- *Type:* number

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileNameInput"></a>

```typescript
public readonly fileNameInput: string;
```

- *Type:* string

---

##### `fileUidInput`<sup>Optional</sup> <a name="fileUidInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileUidInput"></a>

```typescript
public readonly fileUidInput: string;
```

- *Type:* string

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `configName`<sup>Required</sup> <a name="configName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configName"></a>

```typescript
public readonly configName: string;
```

- *Type:* string

---

##### `fileGid`<sup>Required</sup> <a name="fileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileGid"></a>

```typescript
public readonly fileGid: string;
```

- *Type:* string

---

##### `fileMode`<sup>Required</sup> <a name="fileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileMode"></a>

```typescript
public readonly fileMode: number;
```

- *Type:* number

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `fileUid`<sup>Required</sup> <a name="fileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileUid"></a>

```typescript
public readonly fileUid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceTaskSpecContainerSpecConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>

---


### ServiceTaskSpecContainerSpecDnsConfigOutputReference <a name="ServiceTaskSpecContainerSpecDnsConfigOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecDnsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resetSearch"></a>

```typescript
public resetSearch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.nameserversInput">nameserversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.optionsInput">optionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.searchInput">searchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.nameservers">nameservers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.options">options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.search">search</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameserversInput`<sup>Optional</sup> <a name="nameserversInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.nameserversInput"></a>

```typescript
public readonly nameserversInput: string[];
```

- *Type:* string[]

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: string[];
```

- *Type:* string[]

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.searchInput"></a>

```typescript
public readonly searchInput: string[];
```

- *Type:* string[]

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.nameservers"></a>

```typescript
public readonly nameservers: string[];
```

- *Type:* string[]

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.search"></a>

```typescript
public readonly search: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpecContainerSpecDnsConfig;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a>

---


### ServiceTaskSpecContainerSpecHealthcheckOutputReference <a name="ServiceTaskSpecContainerSpecHealthcheckOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecHealthcheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetStartPeriod">resetStartPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetRetries` <a name="resetRetries" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetRetries"></a>

```typescript
public resetRetries(): void
```

##### `resetStartPeriod` <a name="resetStartPeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetStartPeriod"></a>

```typescript
public resetStartPeriod(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.startPeriodInput">startPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.testInput">testInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.startPeriod">startPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.test">test</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `startPeriodInput`<sup>Optional</sup> <a name="startPeriodInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.startPeriodInput"></a>

```typescript
public readonly startPeriodInput: string;
```

- *Type:* string

---

##### `testInput`<sup>Optional</sup> <a name="testInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.testInput"></a>

```typescript
public readonly testInput: string[];
```

- *Type:* string[]

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `startPeriod`<sup>Required</sup> <a name="startPeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.startPeriod"></a>

```typescript
public readonly startPeriod: string;
```

- *Type:* string

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.test"></a>

```typescript
public readonly test: string[];
```

- *Type:* string[]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpecContainerSpecHealthcheck;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a>

---


### ServiceTaskSpecContainerSpecHostsList <a name="ServiceTaskSpecContainerSpecHostsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecHostsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.get"></a>

```typescript
public get(index: number): ServiceTaskSpecContainerSpecHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceTaskSpecContainerSpecHosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>[]

---


### ServiceTaskSpecContainerSpecHostsOutputReference <a name="ServiceTaskSpecContainerSpecHostsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecHostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.ipInput">ipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.ipInput"></a>

```typescript
public readonly ipInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceTaskSpecContainerSpecHosts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>

---


### ServiceTaskSpecContainerSpecLabelsList <a name="ServiceTaskSpecContainerSpecLabelsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.get"></a>

```typescript
public get(index: number): ServiceTaskSpecContainerSpecLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceTaskSpecContainerSpecLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>[]

---


### ServiceTaskSpecContainerSpecLabelsOutputReference <a name="ServiceTaskSpecContainerSpecLabelsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceTaskSpecContainerSpecLabels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>

---


### ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference <a name="ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resetPropagation">resetPropagation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPropagation` <a name="resetPropagation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resetPropagation"></a>

```typescript
public resetPropagation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.propagationInput">propagationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.propagation">propagation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propagationInput`<sup>Optional</sup> <a name="propagationInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.propagationInput"></a>

```typescript
public readonly propagationInput: string;
```

- *Type:* string

---

##### `propagation`<sup>Required</sup> <a name="propagation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.propagation"></a>

```typescript
public readonly propagation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpecContainerSpecMountsBindOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a>

---


### ServiceTaskSpecContainerSpecMountsList <a name="ServiceTaskSpecContainerSpecMountsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.get"></a>

```typescript
public get(index: number): ServiceTaskSpecContainerSpecMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceTaskSpecContainerSpecMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>[]

---


### ServiceTaskSpecContainerSpecMountsOutputReference <a name="ServiceTaskSpecContainerSpecMountsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putBindOptions">putBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putTmpfsOptions">putTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putVolumeOptions">putVolumeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetBindOptions">resetBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetTmpfsOptions">resetTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetVolumeOptions">resetVolumeOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBindOptions` <a name="putBindOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putBindOptions"></a>

```typescript
public putBindOptions(value: ServiceTaskSpecContainerSpecMountsBindOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putBindOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a>

---

##### `putTmpfsOptions` <a name="putTmpfsOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putTmpfsOptions"></a>

```typescript
public putTmpfsOptions(value: ServiceTaskSpecContainerSpecMountsTmpfsOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putTmpfsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a>

---

##### `putVolumeOptions` <a name="putVolumeOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putVolumeOptions"></a>

```typescript
public putVolumeOptions(value: ServiceTaskSpecContainerSpecMountsVolumeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putVolumeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a>

---

##### `resetBindOptions` <a name="resetBindOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetBindOptions"></a>

```typescript
public resetBindOptions(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTmpfsOptions` <a name="resetTmpfsOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetTmpfsOptions"></a>

```typescript
public resetTmpfsOptions(): void
```

##### `resetVolumeOptions` <a name="resetVolumeOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetVolumeOptions"></a>

```typescript
public resetVolumeOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.bindOptions">bindOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference">ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.tmpfsOptions">tmpfsOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference">ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.volumeOptions">volumeOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference">ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.bindOptionsInput">bindOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.tmpfsOptionsInput">tmpfsOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.volumeOptionsInput">volumeOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bindOptions`<sup>Required</sup> <a name="bindOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.bindOptions"></a>

```typescript
public readonly bindOptions: ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference">ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference</a>

---

##### `tmpfsOptions`<sup>Required</sup> <a name="tmpfsOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.tmpfsOptions"></a>

```typescript
public readonly tmpfsOptions: ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference">ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference</a>

---

##### `volumeOptions`<sup>Required</sup> <a name="volumeOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.volumeOptions"></a>

```typescript
public readonly volumeOptions: ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference">ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference</a>

---

##### `bindOptionsInput`<sup>Optional</sup> <a name="bindOptionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.bindOptionsInput"></a>

```typescript
public readonly bindOptionsInput: ServiceTaskSpecContainerSpecMountsBindOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `tmpfsOptionsInput`<sup>Optional</sup> <a name="tmpfsOptionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.tmpfsOptionsInput"></a>

```typescript
public readonly tmpfsOptionsInput: ServiceTaskSpecContainerSpecMountsTmpfsOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `volumeOptionsInput`<sup>Optional</sup> <a name="volumeOptionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.volumeOptionsInput"></a>

```typescript
public readonly volumeOptionsInput: ServiceTaskSpecContainerSpecMountsVolumeOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a>

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceTaskSpecContainerSpecMounts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>

---


### ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference <a name="ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resetSizeBytes">resetSizeBytes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetSizeBytes` <a name="resetSizeBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resetSizeBytes"></a>

```typescript
public resetSizeBytes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.modeInput">modeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.sizeBytesInput">sizeBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.mode">mode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.sizeBytes">sizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: number;
```

- *Type:* number

---

##### `sizeBytesInput`<sup>Optional</sup> <a name="sizeBytesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.sizeBytesInput"></a>

```typescript
public readonly sizeBytesInput: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

---

##### `sizeBytes`<sup>Required</sup> <a name="sizeBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.sizeBytes"></a>

```typescript
public readonly sizeBytes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpecContainerSpecMountsTmpfsOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a>

---


### ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList <a name="ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.get"></a>

```typescript
public get(index: number): ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>[]

---


### ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference <a name="ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>

---


### ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference <a name="ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetDriverName">resetDriverName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetDriverOptions">resetDriverOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetNoCopy">resetNoCopy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabels` <a name="putLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.putLabels"></a>

```typescript
public putLabels(value: IResolvable | ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.putLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>[]

---

##### `resetDriverName` <a name="resetDriverName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetDriverName"></a>

```typescript
public resetDriverName(): void
```

##### `resetDriverOptions` <a name="resetDriverOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetDriverOptions"></a>

```typescript
public resetDriverOptions(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNoCopy` <a name="resetNoCopy" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetNoCopy"></a>

```typescript
public resetNoCopy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverNameInput">driverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverOptionsInput">driverOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.labelsInput">labelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.noCopyInput">noCopyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverName">driverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverOptions">driverOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.noCopy">noCopy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.labels"></a>

```typescript
public readonly labels: ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList</a>

---

##### `driverNameInput`<sup>Optional</sup> <a name="driverNameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverNameInput"></a>

```typescript
public readonly driverNameInput: string;
```

- *Type:* string

---

##### `driverOptionsInput`<sup>Optional</sup> <a name="driverOptionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverOptionsInput"></a>

```typescript
public readonly driverOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>[]

---

##### `noCopyInput`<sup>Optional</sup> <a name="noCopyInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.noCopyInput"></a>

```typescript
public readonly noCopyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `driverName`<sup>Required</sup> <a name="driverName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverName"></a>

```typescript
public readonly driverName: string;
```

- *Type:* string

---

##### `driverOptions`<sup>Required</sup> <a name="driverOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverOptions"></a>

```typescript
public readonly driverOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `noCopy`<sup>Required</sup> <a name="noCopy" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.noCopy"></a>

```typescript
public readonly noCopy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpecContainerSpecMountsVolumeOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a>

---


### ServiceTaskSpecContainerSpecOutputReference <a name="ServiceTaskSpecContainerSpecOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putConfigs">putConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putDnsConfig">putDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHealthcheck">putHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHosts">putHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putMounts">putMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putPrivileges">putPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putSecrets">putSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetCapAdd">resetCapAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetCapDrop">resetCapDrop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetConfigs">resetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetDir">resetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetDnsConfig">resetDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHealthcheck">resetHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetIsolation">resetIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetMounts">resetMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetPrivileges">resetPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetSecrets">resetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetStopGracePeriod">resetStopGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetStopSignal">resetStopSignal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetSysctl">resetSysctl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigs` <a name="putConfigs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putConfigs"></a>

```typescript
public putConfigs(value: IResolvable | ServiceTaskSpecContainerSpecConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>[]

---

##### `putDnsConfig` <a name="putDnsConfig" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putDnsConfig"></a>

```typescript
public putDnsConfig(value: ServiceTaskSpecContainerSpecDnsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putDnsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a>

---

##### `putHealthcheck` <a name="putHealthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHealthcheck"></a>

```typescript
public putHealthcheck(value: ServiceTaskSpecContainerSpecHealthcheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHealthcheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a>

---

##### `putHosts` <a name="putHosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHosts"></a>

```typescript
public putHosts(value: IResolvable | ServiceTaskSpecContainerSpecHosts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHosts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>[]

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putLabels"></a>

```typescript
public putLabels(value: IResolvable | ServiceTaskSpecContainerSpecLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>[]

---

##### `putMounts` <a name="putMounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putMounts"></a>

```typescript
public putMounts(value: IResolvable | ServiceTaskSpecContainerSpecMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putMounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>[]

---

##### `putPrivileges` <a name="putPrivileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putPrivileges"></a>

```typescript
public putPrivileges(value: ServiceTaskSpecContainerSpecPrivileges): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putPrivileges.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a>

---

##### `putSecrets` <a name="putSecrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putSecrets"></a>

```typescript
public putSecrets(value: IResolvable | ServiceTaskSpecContainerSpecSecrets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putSecrets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetCapAdd` <a name="resetCapAdd" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetCapAdd"></a>

```typescript
public resetCapAdd(): void
```

##### `resetCapDrop` <a name="resetCapDrop" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetCapDrop"></a>

```typescript
public resetCapDrop(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetConfigs` <a name="resetConfigs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetConfigs"></a>

```typescript
public resetConfigs(): void
```

##### `resetDir` <a name="resetDir" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetDir"></a>

```typescript
public resetDir(): void
```

##### `resetDnsConfig` <a name="resetDnsConfig" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetDnsConfig"></a>

```typescript
public resetDnsConfig(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetHealthcheck` <a name="resetHealthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHealthcheck"></a>

```typescript
public resetHealthcheck(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetHosts` <a name="resetHosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHosts"></a>

```typescript
public resetHosts(): void
```

##### `resetIsolation` <a name="resetIsolation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetIsolation"></a>

```typescript
public resetIsolation(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMounts` <a name="resetMounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetMounts"></a>

```typescript
public resetMounts(): void
```

##### `resetPrivileges` <a name="resetPrivileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetPrivileges"></a>

```typescript
public resetPrivileges(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetSecrets"></a>

```typescript
public resetSecrets(): void
```

##### `resetStopGracePeriod` <a name="resetStopGracePeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetStopGracePeriod"></a>

```typescript
public resetStopGracePeriod(): void
```

##### `resetStopSignal` <a name="resetStopSignal" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetStopSignal"></a>

```typescript
public resetStopSignal(): void
```

##### `resetSysctl` <a name="resetSysctl" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetSysctl"></a>

```typescript
public resetSysctl(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.configs">configs</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList">ServiceTaskSpecContainerSpecConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dnsConfig">dnsConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference">ServiceTaskSpecContainerSpecDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference">ServiceTaskSpecContainerSpecHealthcheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hosts">hosts</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList">ServiceTaskSpecContainerSpecHostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList">ServiceTaskSpecContainerSpecLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.mounts">mounts</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList">ServiceTaskSpecContainerSpecMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.privileges">privileges</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference">ServiceTaskSpecContainerSpecPrivilegesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList">ServiceTaskSpecContainerSpecSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.capAddInput">capAddInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.capDropInput">capDropInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.configsInput">configsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dirInput">dirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dnsConfigInput">dnsConfigInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.envInput">envInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.healthcheckInput">healthcheckInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostsInput">hostsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.isolationInput">isolationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.labelsInput">labelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.mountsInput">mountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.privilegesInput">privilegesInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.secretsInput">secretsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopGracePeriodInput">stopGracePeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopSignalInput">stopSignalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.sysctlInput">sysctlInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.capAdd">capAdd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.capDrop">capDrop</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dir">dir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.isolation">isolation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopGracePeriod">stopGracePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopSignal">stopSignal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.sysctl">sysctl</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configs`<sup>Required</sup> <a name="configs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.configs"></a>

```typescript
public readonly configs: ServiceTaskSpecContainerSpecConfigsList;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList">ServiceTaskSpecContainerSpecConfigsList</a>

---

##### `dnsConfig`<sup>Required</sup> <a name="dnsConfig" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dnsConfig"></a>

```typescript
public readonly dnsConfig: ServiceTaskSpecContainerSpecDnsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference">ServiceTaskSpecContainerSpecDnsConfigOutputReference</a>

---

##### `healthcheck`<sup>Required</sup> <a name="healthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.healthcheck"></a>

```typescript
public readonly healthcheck: ServiceTaskSpecContainerSpecHealthcheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference">ServiceTaskSpecContainerSpecHealthcheckOutputReference</a>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hosts"></a>

```typescript
public readonly hosts: ServiceTaskSpecContainerSpecHostsList;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList">ServiceTaskSpecContainerSpecHostsList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.labels"></a>

```typescript
public readonly labels: ServiceTaskSpecContainerSpecLabelsList;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList">ServiceTaskSpecContainerSpecLabelsList</a>

---

##### `mounts`<sup>Required</sup> <a name="mounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.mounts"></a>

```typescript
public readonly mounts: ServiceTaskSpecContainerSpecMountsList;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList">ServiceTaskSpecContainerSpecMountsList</a>

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.privileges"></a>

```typescript
public readonly privileges: ServiceTaskSpecContainerSpecPrivilegesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference">ServiceTaskSpecContainerSpecPrivilegesOutputReference</a>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.secrets"></a>

```typescript
public readonly secrets: ServiceTaskSpecContainerSpecSecretsList;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList">ServiceTaskSpecContainerSpecSecretsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `capAddInput`<sup>Optional</sup> <a name="capAddInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.capAddInput"></a>

```typescript
public readonly capAddInput: string[];
```

- *Type:* string[]

---

##### `capDropInput`<sup>Optional</sup> <a name="capDropInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.capDropInput"></a>

```typescript
public readonly capDropInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `configsInput`<sup>Optional</sup> <a name="configsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.configsInput"></a>

```typescript
public readonly configsInput: IResolvable | ServiceTaskSpecContainerSpecConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>[]

---

##### `dirInput`<sup>Optional</sup> <a name="dirInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dirInput"></a>

```typescript
public readonly dirInput: string;
```

- *Type:* string

---

##### `dnsConfigInput`<sup>Optional</sup> <a name="dnsConfigInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dnsConfigInput"></a>

```typescript
public readonly dnsConfigInput: ServiceTaskSpecContainerSpecDnsConfig;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a>

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.envInput"></a>

```typescript
public readonly envInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `healthcheckInput`<sup>Optional</sup> <a name="healthcheckInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.healthcheckInput"></a>

```typescript
public readonly healthcheckInput: ServiceTaskSpecContainerSpecHealthcheck;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostsInput"></a>

```typescript
public readonly hostsInput: IResolvable | ServiceTaskSpecContainerSpecHosts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `isolationInput`<sup>Optional</sup> <a name="isolationInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.isolationInput"></a>

```typescript
public readonly isolationInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | ServiceTaskSpecContainerSpecLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>[]

---

##### `mountsInput`<sup>Optional</sup> <a name="mountsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.mountsInput"></a>

```typescript
public readonly mountsInput: IResolvable | ServiceTaskSpecContainerSpecMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>[]

---

##### `privilegesInput`<sup>Optional</sup> <a name="privilegesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.privilegesInput"></a>

```typescript
public readonly privilegesInput: ServiceTaskSpecContainerSpecPrivileges;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.secretsInput"></a>

```typescript
public readonly secretsInput: IResolvable | ServiceTaskSpecContainerSpecSecrets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>[]

---

##### `stopGracePeriodInput`<sup>Optional</sup> <a name="stopGracePeriodInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopGracePeriodInput"></a>

```typescript
public readonly stopGracePeriodInput: string;
```

- *Type:* string

---

##### `stopSignalInput`<sup>Optional</sup> <a name="stopSignalInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopSignalInput"></a>

```typescript
public readonly stopSignalInput: string;
```

- *Type:* string

---

##### `sysctlInput`<sup>Optional</sup> <a name="sysctlInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.sysctlInput"></a>

```typescript
public readonly sysctlInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `capAdd`<sup>Required</sup> <a name="capAdd" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.capAdd"></a>

```typescript
public readonly capAdd: string[];
```

- *Type:* string[]

---

##### `capDrop`<sup>Required</sup> <a name="capDrop" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.capDrop"></a>

```typescript
public readonly capDrop: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dir"></a>

```typescript
public readonly dir: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `isolation`<sup>Required</sup> <a name="isolation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.isolation"></a>

```typescript
public readonly isolation: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stopGracePeriod`<sup>Required</sup> <a name="stopGracePeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopGracePeriod"></a>

```typescript
public readonly stopGracePeriod: string;
```

- *Type:* string

---

##### `stopSignal`<sup>Required</sup> <a name="stopSignal" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopSignal"></a>

```typescript
public readonly stopSignal: string;
```

- *Type:* string

---

##### `sysctl`<sup>Required</sup> <a name="sysctl" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.sysctl"></a>

```typescript
public readonly sysctl: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpecContainerSpec;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a>

---


### ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference <a name="ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resetRegistry">resetRegistry</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFile` <a name="resetFile" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resetFile"></a>

```typescript
public resetFile(): void
```

##### `resetRegistry` <a name="resetRegistry" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resetRegistry"></a>

```typescript
public resetRegistry(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.registryInput">registryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.registry">registry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `registryInput`<sup>Optional</sup> <a name="registryInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.registryInput"></a>

```typescript
public readonly registryInput: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.registry"></a>

```typescript
public readonly registry: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a>

---


### ServiceTaskSpecContainerSpecPrivilegesOutputReference <a name="ServiceTaskSpecContainerSpecPrivilegesOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecPrivilegesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putCredentialSpec">putCredentialSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putSeLinuxContext">putSeLinuxContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resetCredentialSpec">resetCredentialSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resetSeLinuxContext">resetSeLinuxContext</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredentialSpec` <a name="putCredentialSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putCredentialSpec"></a>

```typescript
public putCredentialSpec(value: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putCredentialSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a>

---

##### `putSeLinuxContext` <a name="putSeLinuxContext" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putSeLinuxContext"></a>

```typescript
public putSeLinuxContext(value: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putSeLinuxContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a>

---

##### `resetCredentialSpec` <a name="resetCredentialSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resetCredentialSpec"></a>

```typescript
public resetCredentialSpec(): void
```

##### `resetSeLinuxContext` <a name="resetSeLinuxContext" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resetSeLinuxContext"></a>

```typescript
public resetSeLinuxContext(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.credentialSpec">credentialSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference">ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.seLinuxContext">seLinuxContext</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.credentialSpecInput">credentialSpecInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.seLinuxContextInput">seLinuxContextInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialSpec`<sup>Required</sup> <a name="credentialSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.credentialSpec"></a>

```typescript
public readonly credentialSpec: ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference">ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference</a>

---

##### `seLinuxContext`<sup>Required</sup> <a name="seLinuxContext" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.seLinuxContext"></a>

```typescript
public readonly seLinuxContext: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference</a>

---

##### `credentialSpecInput`<sup>Optional</sup> <a name="credentialSpecInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.credentialSpecInput"></a>

```typescript
public readonly credentialSpecInput: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a>

---

##### `seLinuxContextInput`<sup>Optional</sup> <a name="seLinuxContextInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.seLinuxContextInput"></a>

```typescript
public readonly seLinuxContextInput: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpecContainerSpecPrivileges;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a>

---


### ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference <a name="ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetDisable">resetDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisable` <a name="resetDisable" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetDisable"></a>

```typescript
public resetDisable(): void
```

##### `resetLevel` <a name="resetLevel" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetLevel"></a>

```typescript
public resetLevel(): void
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.disableInput">disableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.levelInput">levelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.disable">disable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableInput`<sup>Optional</sup> <a name="disableInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.disableInput"></a>

```typescript
public readonly disableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.levelInput"></a>

```typescript
public readonly levelInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `disable`<sup>Required</sup> <a name="disable" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.disable"></a>

```typescript
public readonly disable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a>

---


### ServiceTaskSpecContainerSpecSecretsList <a name="ServiceTaskSpecContainerSpecSecretsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecSecretsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.get"></a>

```typescript
public get(index: number): ServiceTaskSpecContainerSpecSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceTaskSpecContainerSpecSecrets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>[]

---


### ServiceTaskSpecContainerSpecSecretsOutputReference <a name="ServiceTaskSpecContainerSpecSecretsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecContainerSpecSecretsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileGid">resetFileGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileMode">resetFileMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileUid">resetFileUid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetSecretName">resetSecretName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileGid` <a name="resetFileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileGid"></a>

```typescript
public resetFileGid(): void
```

##### `resetFileMode` <a name="resetFileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileMode"></a>

```typescript
public resetFileMode(): void
```

##### `resetFileUid` <a name="resetFileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileUid"></a>

```typescript
public resetFileUid(): void
```

##### `resetSecretName` <a name="resetSecretName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetSecretName"></a>

```typescript
public resetSecretName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileGidInput">fileGidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileModeInput">fileModeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileUidInput">fileUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileGid">fileGid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileMode">fileMode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileUid">fileUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileGidInput`<sup>Optional</sup> <a name="fileGidInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileGidInput"></a>

```typescript
public readonly fileGidInput: string;
```

- *Type:* string

---

##### `fileModeInput`<sup>Optional</sup> <a name="fileModeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileModeInput"></a>

```typescript
public readonly fileModeInput: number;
```

- *Type:* number

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileNameInput"></a>

```typescript
public readonly fileNameInput: string;
```

- *Type:* string

---

##### `fileUidInput`<sup>Optional</sup> <a name="fileUidInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileUidInput"></a>

```typescript
public readonly fileUidInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `fileGid`<sup>Required</sup> <a name="fileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileGid"></a>

```typescript
public readonly fileGid: string;
```

- *Type:* string

---

##### `fileMode`<sup>Required</sup> <a name="fileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileMode"></a>

```typescript
public readonly fileMode: number;
```

- *Type:* number

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `fileUid`<sup>Required</sup> <a name="fileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileUid"></a>

```typescript
public readonly fileUid: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceTaskSpecContainerSpecSecrets;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>

---


### ServiceTaskSpecLogDriverOutputReference <a name="ServiceTaskSpecLogDriverOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecLogDriverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resetOptions">resetOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpecLogDriver;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a>

---


### ServiceTaskSpecNetworksAdvancedList <a name="ServiceTaskSpecNetworksAdvancedList" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecNetworksAdvancedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.get"></a>

```typescript
public get(index: number): ServiceTaskSpecNetworksAdvancedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceTaskSpecNetworksAdvanced[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>[]

---


### ServiceTaskSpecNetworksAdvancedOutputReference <a name="ServiceTaskSpecNetworksAdvancedOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecNetworksAdvancedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resetAliases">resetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resetDriverOpts">resetDriverOpts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAliases` <a name="resetAliases" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resetAliases"></a>

```typescript
public resetAliases(): void
```

##### `resetDriverOpts` <a name="resetDriverOpts" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resetDriverOpts"></a>

```typescript
public resetDriverOpts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.aliasesInput">aliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.driverOptsInput">driverOptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.aliases">aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.driverOpts">driverOpts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.aliasesInput"></a>

```typescript
public readonly aliasesInput: string[];
```

- *Type:* string[]

---

##### `driverOptsInput`<sup>Optional</sup> <a name="driverOptsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.driverOptsInput"></a>

```typescript
public readonly driverOptsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.aliases"></a>

```typescript
public readonly aliases: string[];
```

- *Type:* string[]

---

##### `driverOpts`<sup>Required</sup> <a name="driverOpts" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.driverOpts"></a>

```typescript
public readonly driverOpts: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceTaskSpecNetworksAdvanced;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>

---


### ServiceTaskSpecOutputReference <a name="ServiceTaskSpecOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec">putContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putLogDriver">putLogDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putNetworksAdvanced">putNetworksAdvanced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putPlacement">putPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putRestartPolicy">putRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetForceUpdate">resetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetLogDriver">resetLogDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetNetworksAdvanced">resetNetworksAdvanced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetPlacement">resetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetRestartPolicy">resetRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerSpec` <a name="putContainerSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec"></a>

```typescript
public putContainerSpec(value: ServiceTaskSpecContainerSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a>

---

##### `putLogDriver` <a name="putLogDriver" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putLogDriver"></a>

```typescript
public putLogDriver(value: ServiceTaskSpecLogDriver): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putLogDriver.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a>

---

##### `putNetworksAdvanced` <a name="putNetworksAdvanced" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putNetworksAdvanced"></a>

```typescript
public putNetworksAdvanced(value: IResolvable | ServiceTaskSpecNetworksAdvanced[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putNetworksAdvanced.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>[]

---

##### `putPlacement` <a name="putPlacement" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putPlacement"></a>

```typescript
public putPlacement(value: ServiceTaskSpecPlacement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a>

---

##### `putResources` <a name="putResources" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putResources"></a>

```typescript
public putResources(value: ServiceTaskSpecResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a>

---

##### `putRestartPolicy` <a name="putRestartPolicy" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putRestartPolicy"></a>

```typescript
public putRestartPolicy(value: ServiceTaskSpecRestartPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putRestartPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a>

---

##### `resetForceUpdate` <a name="resetForceUpdate" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetForceUpdate"></a>

```typescript
public resetForceUpdate(): void
```

##### `resetLogDriver` <a name="resetLogDriver" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetLogDriver"></a>

```typescript
public resetLogDriver(): void
```

##### `resetNetworksAdvanced` <a name="resetNetworksAdvanced" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetNetworksAdvanced"></a>

```typescript
public resetNetworksAdvanced(): void
```

##### `resetPlacement` <a name="resetPlacement" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetPlacement"></a>

```typescript
public resetPlacement(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetRestartPolicy` <a name="resetRestartPolicy" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetRestartPolicy"></a>

```typescript
public resetRestartPolicy(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetRuntime"></a>

```typescript
public resetRuntime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.containerSpec">containerSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference">ServiceTaskSpecContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.logDriver">logDriver</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference">ServiceTaskSpecLogDriverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.networksAdvanced">networksAdvanced</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList">ServiceTaskSpecNetworksAdvancedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference">ServiceTaskSpecPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference">ServiceTaskSpecResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.restartPolicy">restartPolicy</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference">ServiceTaskSpecRestartPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.containerSpecInput">containerSpecInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.forceUpdateInput">forceUpdateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.logDriverInput">logDriverInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.networksAdvancedInput">networksAdvancedInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.placementInput">placementInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.restartPolicyInput">restartPolicyInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.forceUpdate">forceUpdate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerSpec`<sup>Required</sup> <a name="containerSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.containerSpec"></a>

```typescript
public readonly containerSpec: ServiceTaskSpecContainerSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference">ServiceTaskSpecContainerSpecOutputReference</a>

---

##### `logDriver`<sup>Required</sup> <a name="logDriver" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.logDriver"></a>

```typescript
public readonly logDriver: ServiceTaskSpecLogDriverOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference">ServiceTaskSpecLogDriverOutputReference</a>

---

##### `networksAdvanced`<sup>Required</sup> <a name="networksAdvanced" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.networksAdvanced"></a>

```typescript
public readonly networksAdvanced: ServiceTaskSpecNetworksAdvancedList;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList">ServiceTaskSpecNetworksAdvancedList</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.placement"></a>

```typescript
public readonly placement: ServiceTaskSpecPlacementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference">ServiceTaskSpecPlacementOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.resources"></a>

```typescript
public readonly resources: ServiceTaskSpecResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference">ServiceTaskSpecResourcesOutputReference</a>

---

##### `restartPolicy`<sup>Required</sup> <a name="restartPolicy" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: ServiceTaskSpecRestartPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference">ServiceTaskSpecRestartPolicyOutputReference</a>

---

##### `containerSpecInput`<sup>Optional</sup> <a name="containerSpecInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.containerSpecInput"></a>

```typescript
public readonly containerSpecInput: ServiceTaskSpecContainerSpec;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a>

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="forceUpdateInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.forceUpdateInput"></a>

```typescript
public readonly forceUpdateInput: number;
```

- *Type:* number

---

##### `logDriverInput`<sup>Optional</sup> <a name="logDriverInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.logDriverInput"></a>

```typescript
public readonly logDriverInput: ServiceTaskSpecLogDriver;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a>

---

##### `networksAdvancedInput`<sup>Optional</sup> <a name="networksAdvancedInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.networksAdvancedInput"></a>

```typescript
public readonly networksAdvancedInput: IResolvable | ServiceTaskSpecNetworksAdvanced[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>[]

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.placementInput"></a>

```typescript
public readonly placementInput: ServiceTaskSpecPlacement;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: ServiceTaskSpecResources;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a>

---

##### `restartPolicyInput`<sup>Optional</sup> <a name="restartPolicyInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.restartPolicyInput"></a>

```typescript
public readonly restartPolicyInput: ServiceTaskSpecRestartPolicy;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `forceUpdate`<sup>Required</sup> <a name="forceUpdate" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: number;
```

- *Type:* number

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpec;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

---


### ServiceTaskSpecPlacementOutputReference <a name="ServiceTaskSpecPlacementOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecPlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.putPlatforms">putPlatforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetConstraints">resetConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetMaxReplicas">resetMaxReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetPlatforms">resetPlatforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetPrefs">resetPrefs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPlatforms` <a name="putPlatforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.putPlatforms"></a>

```typescript
public putPlatforms(value: IResolvable | ServiceTaskSpecPlacementPlatforms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.putPlatforms.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>[]

---

##### `resetConstraints` <a name="resetConstraints" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetConstraints"></a>

```typescript
public resetConstraints(): void
```

##### `resetMaxReplicas` <a name="resetMaxReplicas" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetMaxReplicas"></a>

```typescript
public resetMaxReplicas(): void
```

##### `resetPlatforms` <a name="resetPlatforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetPlatforms"></a>

```typescript
public resetPlatforms(): void
```

##### `resetPrefs` <a name="resetPrefs" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetPrefs"></a>

```typescript
public resetPrefs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.platforms">platforms</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList">ServiceTaskSpecPlacementPlatformsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.constraintsInput">constraintsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.maxReplicasInput">maxReplicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.platformsInput">platformsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.prefsInput">prefsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.constraints">constraints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.maxReplicas">maxReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.prefs">prefs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.platforms"></a>

```typescript
public readonly platforms: ServiceTaskSpecPlacementPlatformsList;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList">ServiceTaskSpecPlacementPlatformsList</a>

---

##### `constraintsInput`<sup>Optional</sup> <a name="constraintsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.constraintsInput"></a>

```typescript
public readonly constraintsInput: string[];
```

- *Type:* string[]

---

##### `maxReplicasInput`<sup>Optional</sup> <a name="maxReplicasInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.maxReplicasInput"></a>

```typescript
public readonly maxReplicasInput: number;
```

- *Type:* number

---

##### `platformsInput`<sup>Optional</sup> <a name="platformsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.platformsInput"></a>

```typescript
public readonly platformsInput: IResolvable | ServiceTaskSpecPlacementPlatforms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>[]

---

##### `prefsInput`<sup>Optional</sup> <a name="prefsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.prefsInput"></a>

```typescript
public readonly prefsInput: string[];
```

- *Type:* string[]

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.constraints"></a>

```typescript
public readonly constraints: string[];
```

- *Type:* string[]

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.maxReplicas"></a>

```typescript
public readonly maxReplicas: number;
```

- *Type:* number

---

##### `prefs`<sup>Required</sup> <a name="prefs" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.prefs"></a>

```typescript
public readonly prefs: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpecPlacement;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a>

---


### ServiceTaskSpecPlacementPlatformsList <a name="ServiceTaskSpecPlacementPlatformsList" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecPlacementPlatformsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.get"></a>

```typescript
public get(index: number): ServiceTaskSpecPlacementPlatformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceTaskSpecPlacementPlatforms[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>[]

---


### ServiceTaskSpecPlacementPlatformsOutputReference <a name="ServiceTaskSpecPlacementPlatformsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecPlacementPlatformsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.architectureInput">architectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.osInput">osInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.os">os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architectureInput`<sup>Optional</sup> <a name="architectureInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.architectureInput"></a>

```typescript
public readonly architectureInput: string;
```

- *Type:* string

---

##### `osInput`<sup>Optional</sup> <a name="osInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.osInput"></a>

```typescript
public readonly osInput: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceTaskSpecPlacementPlatforms;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>

---


### ServiceTaskSpecResourcesLimitsOutputReference <a name="ServiceTaskSpecResourcesLimitsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecResourcesLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resetMemoryBytes">resetMemoryBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resetNanoCpus">resetNanoCpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryBytes` <a name="resetMemoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resetMemoryBytes"></a>

```typescript
public resetMemoryBytes(): void
```

##### `resetNanoCpus` <a name="resetNanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resetNanoCpus"></a>

```typescript
public resetNanoCpus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.memoryBytesInput">memoryBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.nanoCpusInput">nanoCpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.memoryBytes">memoryBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.nanoCpus">nanoCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryBytesInput`<sup>Optional</sup> <a name="memoryBytesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.memoryBytesInput"></a>

```typescript
public readonly memoryBytesInput: number;
```

- *Type:* number

---

##### `nanoCpusInput`<sup>Optional</sup> <a name="nanoCpusInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.nanoCpusInput"></a>

```typescript
public readonly nanoCpusInput: number;
```

- *Type:* number

---

##### `memoryBytes`<sup>Required</sup> <a name="memoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.memoryBytes"></a>

```typescript
public readonly memoryBytes: number;
```

- *Type:* number

---

##### `nanoCpus`<sup>Required</sup> <a name="nanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.nanoCpus"></a>

```typescript
public readonly nanoCpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpecResourcesLimits;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a>

---


### ServiceTaskSpecResourcesOutputReference <a name="ServiceTaskSpecResourcesOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putLimits">putLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putReservation">putReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resetReservation">resetReservation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLimits` <a name="putLimits" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putLimits"></a>

```typescript
public putLimits(value: ServiceTaskSpecResourcesLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a>

---

##### `putReservation` <a name="putReservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putReservation"></a>

```typescript
public putReservation(value: ServiceTaskSpecResourcesReservation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a>

---

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resetLimits"></a>

```typescript
public resetLimits(): void
```

##### `resetReservation` <a name="resetReservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resetReservation"></a>

```typescript
public resetReservation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference">ServiceTaskSpecResourcesLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.reservation">reservation</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference">ServiceTaskSpecResourcesReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.limitsInput">limitsInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.reservationInput">reservationInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.limits"></a>

```typescript
public readonly limits: ServiceTaskSpecResourcesLimitsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference">ServiceTaskSpecResourcesLimitsOutputReference</a>

---

##### `reservation`<sup>Required</sup> <a name="reservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.reservation"></a>

```typescript
public readonly reservation: ServiceTaskSpecResourcesReservationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference">ServiceTaskSpecResourcesReservationOutputReference</a>

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.limitsInput"></a>

```typescript
public readonly limitsInput: ServiceTaskSpecResourcesLimits;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a>

---

##### `reservationInput`<sup>Optional</sup> <a name="reservationInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.reservationInput"></a>

```typescript
public readonly reservationInput: ServiceTaskSpecResourcesReservation;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpecResources;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a>

---


### ServiceTaskSpecResourcesReservationGenericResourcesOutputReference <a name="ServiceTaskSpecResourcesReservationGenericResourcesOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resetDiscreteResourcesSpec">resetDiscreteResourcesSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resetNamedResourcesSpec">resetNamedResourcesSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiscreteResourcesSpec` <a name="resetDiscreteResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resetDiscreteResourcesSpec"></a>

```typescript
public resetDiscreteResourcesSpec(): void
```

##### `resetNamedResourcesSpec` <a name="resetNamedResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resetNamedResourcesSpec"></a>

```typescript
public resetNamedResourcesSpec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.discreteResourcesSpecInput">discreteResourcesSpecInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.namedResourcesSpecInput">namedResourcesSpecInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.discreteResourcesSpec">discreteResourcesSpec</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.namedResourcesSpec">namedResourcesSpec</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `discreteResourcesSpecInput`<sup>Optional</sup> <a name="discreteResourcesSpecInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.discreteResourcesSpecInput"></a>

```typescript
public readonly discreteResourcesSpecInput: string[];
```

- *Type:* string[]

---

##### `namedResourcesSpecInput`<sup>Optional</sup> <a name="namedResourcesSpecInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.namedResourcesSpecInput"></a>

```typescript
public readonly namedResourcesSpecInput: string[];
```

- *Type:* string[]

---

##### `discreteResourcesSpec`<sup>Required</sup> <a name="discreteResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.discreteResourcesSpec"></a>

```typescript
public readonly discreteResourcesSpec: string[];
```

- *Type:* string[]

---

##### `namedResourcesSpec`<sup>Required</sup> <a name="namedResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.namedResourcesSpec"></a>

```typescript
public readonly namedResourcesSpec: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpecResourcesReservationGenericResources;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a>

---


### ServiceTaskSpecResourcesReservationOutputReference <a name="ServiceTaskSpecResourcesReservationOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecResourcesReservationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.putGenericResources">putGenericResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetGenericResources">resetGenericResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetMemoryBytes">resetMemoryBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetNanoCpus">resetNanoCpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGenericResources` <a name="putGenericResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.putGenericResources"></a>

```typescript
public putGenericResources(value: ServiceTaskSpecResourcesReservationGenericResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.putGenericResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a>

---

##### `resetGenericResources` <a name="resetGenericResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetGenericResources"></a>

```typescript
public resetGenericResources(): void
```

##### `resetMemoryBytes` <a name="resetMemoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetMemoryBytes"></a>

```typescript
public resetMemoryBytes(): void
```

##### `resetNanoCpus` <a name="resetNanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetNanoCpus"></a>

```typescript
public resetNanoCpus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.genericResources">genericResources</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference">ServiceTaskSpecResourcesReservationGenericResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.genericResourcesInput">genericResourcesInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.memoryBytesInput">memoryBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.nanoCpusInput">nanoCpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.memoryBytes">memoryBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.nanoCpus">nanoCpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `genericResources`<sup>Required</sup> <a name="genericResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.genericResources"></a>

```typescript
public readonly genericResources: ServiceTaskSpecResourcesReservationGenericResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference">ServiceTaskSpecResourcesReservationGenericResourcesOutputReference</a>

---

##### `genericResourcesInput`<sup>Optional</sup> <a name="genericResourcesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.genericResourcesInput"></a>

```typescript
public readonly genericResourcesInput: ServiceTaskSpecResourcesReservationGenericResources;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a>

---

##### `memoryBytesInput`<sup>Optional</sup> <a name="memoryBytesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.memoryBytesInput"></a>

```typescript
public readonly memoryBytesInput: number;
```

- *Type:* number

---

##### `nanoCpusInput`<sup>Optional</sup> <a name="nanoCpusInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.nanoCpusInput"></a>

```typescript
public readonly nanoCpusInput: number;
```

- *Type:* number

---

##### `memoryBytes`<sup>Required</sup> <a name="memoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.memoryBytes"></a>

```typescript
public readonly memoryBytes: number;
```

- *Type:* number

---

##### `nanoCpus`<sup>Required</sup> <a name="nanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.nanoCpus"></a>

```typescript
public readonly nanoCpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpecResourcesReservation;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a>

---


### ServiceTaskSpecRestartPolicyOutputReference <a name="ServiceTaskSpecRestartPolicyOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceTaskSpecRestartPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetDelay">resetDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetMaxAttempts">resetMaxAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetWindow">resetWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDelay` <a name="resetDelay" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetDelay"></a>

```typescript
public resetDelay(): void
```

##### `resetMaxAttempts` <a name="resetMaxAttempts" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetMaxAttempts"></a>

```typescript
public resetMaxAttempts(): void
```

##### `resetWindow` <a name="resetWindow" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetWindow"></a>

```typescript
public resetWindow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.delayInput">delayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.windowInput">windowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.delay">delay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.window">window</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.delayInput"></a>

```typescript
public readonly delayInput: string;
```

- *Type:* string

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.maxAttemptsInput"></a>

```typescript
public readonly maxAttemptsInput: number;
```

- *Type:* number

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.windowInput"></a>

```typescript
public readonly windowInput: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.delay"></a>

```typescript
public readonly delay: string;
```

- *Type:* string

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.window"></a>

```typescript
public readonly window: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceTaskSpecRestartPolicy;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a>

---


### ServiceUpdateConfigOutputReference <a name="ServiceUpdateConfigOutputReference" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer"></a>

```typescript
import { service } from '@cdktf/provider-docker'

new service.ServiceUpdateConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetDelay">resetDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetFailureAction">resetFailureAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetMaxFailureRatio">resetMaxFailureRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetMonitor">resetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetParallelism">resetParallelism</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelay` <a name="resetDelay" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetDelay"></a>

```typescript
public resetDelay(): void
```

##### `resetFailureAction` <a name="resetFailureAction" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetFailureAction"></a>

```typescript
public resetFailureAction(): void
```

##### `resetMaxFailureRatio` <a name="resetMaxFailureRatio" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetMaxFailureRatio"></a>

```typescript
public resetMaxFailureRatio(): void
```

##### `resetMonitor` <a name="resetMonitor" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetMonitor"></a>

```typescript
public resetMonitor(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetParallelism` <a name="resetParallelism" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetParallelism"></a>

```typescript
public resetParallelism(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.delayInput">delayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.failureActionInput">failureActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.maxFailureRatioInput">maxFailureRatioInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.monitorInput">monitorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.parallelismInput">parallelismInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.delay">delay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.failureAction">failureAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.maxFailureRatio">maxFailureRatio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.monitor">monitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.parallelism">parallelism</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.delayInput"></a>

```typescript
public readonly delayInput: string;
```

- *Type:* string

---

##### `failureActionInput`<sup>Optional</sup> <a name="failureActionInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.failureActionInput"></a>

```typescript
public readonly failureActionInput: string;
```

- *Type:* string

---

##### `maxFailureRatioInput`<sup>Optional</sup> <a name="maxFailureRatioInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.maxFailureRatioInput"></a>

```typescript
public readonly maxFailureRatioInput: string;
```

- *Type:* string

---

##### `monitorInput`<sup>Optional</sup> <a name="monitorInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.monitorInput"></a>

```typescript
public readonly monitorInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `parallelismInput`<sup>Optional</sup> <a name="parallelismInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.parallelismInput"></a>

```typescript
public readonly parallelismInput: number;
```

- *Type:* number

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.delay"></a>

```typescript
public readonly delay: string;
```

- *Type:* string

---

##### `failureAction`<sup>Required</sup> <a name="failureAction" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.failureAction"></a>

```typescript
public readonly failureAction: string;
```

- *Type:* string

---

##### `maxFailureRatio`<sup>Required</sup> <a name="maxFailureRatio" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.maxFailureRatio"></a>

```typescript
public readonly maxFailureRatio: string;
```

- *Type:* string

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.monitor"></a>

```typescript
public readonly monitor: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceUpdateConfig;
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

---



