# `container` Submodule <a name="`container` Submodule" id="@cdktf/provider-docker.container"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Container <a name="Container" id="@cdktf/provider-docker.container.Container"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container docker_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.Container.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.Container(scope: Construct, id: string, config: ContainerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerConfig">ContainerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.container.Container.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.container.Container.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-docker.container.Container.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerConfig">ContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.container.Container.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.container.Container.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.container.Container.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.container.Container.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-docker.container.Container.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-docker.container.Container.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-docker.container.Container.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-docker.container.Container.putCapabilities">putCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putDevices">putDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putHealthcheck">putHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putHost">putHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putMounts">putMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putNetworksAdvanced">putNetworksAdvanced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putUlimit">putUlimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putUpload">putUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetAttach">resetAttach</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCgroupnsMode">resetCgroupnsMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetContainerReadRefreshTimeoutMilliseconds">resetContainerReadRefreshTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCpus">resetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCpuSet">resetCpuSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCpuShares">resetCpuShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDestroyGraceSeconds">resetDestroyGraceSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDevices">resetDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDnsOpts">resetDnsOpts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDnsSearch">resetDnsSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDomainname">resetDomainname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetEntrypoint">resetEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetGpus">resetGpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetGroupAdd">resetGroupAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetHealthcheck">resetHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetInit">resetInit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetIpcMode">resetIpcMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetLogDriver">resetLogDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetLogOpts">resetLogOpts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetLogs">resetLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMaxRetryCount">resetMaxRetryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMemorySwap">resetMemorySwap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMounts">resetMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMustRun">resetMustRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetNetworkMode">resetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetNetworksAdvanced">resetNetworksAdvanced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetPidMode">resetPidMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetPrivileged">resetPrivileged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetPublishAllPorts">resetPublishAllPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetRemoveVolumes">resetRemoveVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetRestart">resetRestart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetRm">resetRm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetSecurityOpts">resetSecurityOpts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetShmSize">resetShmSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStart">resetStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStdinOpen">resetStdinOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStopSignal">resetStopSignal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStopTimeout">resetStopTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStorageOpts">resetStorageOpts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetSysctls">resetSysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetTmpfs">resetTmpfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetTty">resetTty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetUlimit">resetUlimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetUpload">resetUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetUser">resetUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetUsernsMode">resetUsernsMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetVolumes">resetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetWait">resetWait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetWaitTimeout">resetWaitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetWorkingDir">resetWorkingDir</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.Container.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.container.Container.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.container.Container.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.container.Container.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.container.Container.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.container.Container.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-docker.container.Container.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.container.Container.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.container.Container.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-docker.container.Container.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.container.Container.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.Container.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.Container.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.Container.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.Container.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.Container.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.Container.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.Container.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.Container.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.Container.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-docker.container.Container.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-docker.container.Container.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.container.Container.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.container.Container.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.Container.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-docker.container.Container.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.container.Container.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-docker.container.Container.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.container.Container.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-docker.container.Container.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-docker.container.Container.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.container.Container.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapabilities` <a name="putCapabilities" id="@cdktf/provider-docker.container.Container.putCapabilities"></a>

```typescript
public putCapabilities(value: ContainerCapabilities): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

---

##### `putDevices` <a name="putDevices" id="@cdktf/provider-docker.container.Container.putDevices"></a>

```typescript
public putDevices(value: IResolvable | ContainerDevices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putDevices.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>[]

---

##### `putHealthcheck` <a name="putHealthcheck" id="@cdktf/provider-docker.container.Container.putHealthcheck"></a>

```typescript
public putHealthcheck(value: ContainerHealthcheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putHealthcheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

---

##### `putHost` <a name="putHost" id="@cdktf/provider-docker.container.Container.putHost"></a>

```typescript
public putHost(value: IResolvable | ContainerHost[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putHost.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>[]

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-docker.container.Container.putLabels"></a>

```typescript
public putLabels(value: IResolvable | ContainerLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>[]

---

##### `putMounts` <a name="putMounts" id="@cdktf/provider-docker.container.Container.putMounts"></a>

```typescript
public putMounts(value: IResolvable | ContainerMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putMounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>[]

---

##### `putNetworksAdvanced` <a name="putNetworksAdvanced" id="@cdktf/provider-docker.container.Container.putNetworksAdvanced"></a>

```typescript
public putNetworksAdvanced(value: IResolvable | ContainerNetworksAdvanced[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putNetworksAdvanced.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>[]

---

##### `putPorts` <a name="putPorts" id="@cdktf/provider-docker.container.Container.putPorts"></a>

```typescript
public putPorts(value: IResolvable | ContainerPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putPorts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>[]

---

##### `putUlimit` <a name="putUlimit" id="@cdktf/provider-docker.container.Container.putUlimit"></a>

```typescript
public putUlimit(value: IResolvable | ContainerUlimit[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putUlimit.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>[]

---

##### `putUpload` <a name="putUpload" id="@cdktf/provider-docker.container.Container.putUpload"></a>

```typescript
public putUpload(value: IResolvable | ContainerUpload[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putUpload.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>[]

---

##### `putVolumes` <a name="putVolumes" id="@cdktf/provider-docker.container.Container.putVolumes"></a>

```typescript
public putVolumes(value: IResolvable | ContainerVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putVolumes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>[]

---

##### `resetAttach` <a name="resetAttach" id="@cdktf/provider-docker.container.Container.resetAttach"></a>

```typescript
public resetAttach(): void
```

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktf/provider-docker.container.Container.resetCapabilities"></a>

```typescript
public resetCapabilities(): void
```

##### `resetCgroupnsMode` <a name="resetCgroupnsMode" id="@cdktf/provider-docker.container.Container.resetCgroupnsMode"></a>

```typescript
public resetCgroupnsMode(): void
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-docker.container.Container.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetContainerReadRefreshTimeoutMilliseconds` <a name="resetContainerReadRefreshTimeoutMilliseconds" id="@cdktf/provider-docker.container.Container.resetContainerReadRefreshTimeoutMilliseconds"></a>

```typescript
public resetContainerReadRefreshTimeoutMilliseconds(): void
```

##### `resetCpus` <a name="resetCpus" id="@cdktf/provider-docker.container.Container.resetCpus"></a>

```typescript
public resetCpus(): void
```

##### `resetCpuSet` <a name="resetCpuSet" id="@cdktf/provider-docker.container.Container.resetCpuSet"></a>

```typescript
public resetCpuSet(): void
```

##### `resetCpuShares` <a name="resetCpuShares" id="@cdktf/provider-docker.container.Container.resetCpuShares"></a>

```typescript
public resetCpuShares(): void
```

##### `resetDestroyGraceSeconds` <a name="resetDestroyGraceSeconds" id="@cdktf/provider-docker.container.Container.resetDestroyGraceSeconds"></a>

```typescript
public resetDestroyGraceSeconds(): void
```

##### `resetDevices` <a name="resetDevices" id="@cdktf/provider-docker.container.Container.resetDevices"></a>

```typescript
public resetDevices(): void
```

##### `resetDns` <a name="resetDns" id="@cdktf/provider-docker.container.Container.resetDns"></a>

```typescript
public resetDns(): void
```

##### `resetDnsOpts` <a name="resetDnsOpts" id="@cdktf/provider-docker.container.Container.resetDnsOpts"></a>

```typescript
public resetDnsOpts(): void
```

##### `resetDnsSearch` <a name="resetDnsSearch" id="@cdktf/provider-docker.container.Container.resetDnsSearch"></a>

```typescript
public resetDnsSearch(): void
```

##### `resetDomainname` <a name="resetDomainname" id="@cdktf/provider-docker.container.Container.resetDomainname"></a>

```typescript
public resetDomainname(): void
```

##### `resetEntrypoint` <a name="resetEntrypoint" id="@cdktf/provider-docker.container.Container.resetEntrypoint"></a>

```typescript
public resetEntrypoint(): void
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-docker.container.Container.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetGpus` <a name="resetGpus" id="@cdktf/provider-docker.container.Container.resetGpus"></a>

```typescript
public resetGpus(): void
```

##### `resetGroupAdd` <a name="resetGroupAdd" id="@cdktf/provider-docker.container.Container.resetGroupAdd"></a>

```typescript
public resetGroupAdd(): void
```

##### `resetHealthcheck` <a name="resetHealthcheck" id="@cdktf/provider-docker.container.Container.resetHealthcheck"></a>

```typescript
public resetHealthcheck(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-docker.container.Container.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-docker.container.Container.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-docker.container.Container.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInit` <a name="resetInit" id="@cdktf/provider-docker.container.Container.resetInit"></a>

```typescript
public resetInit(): void
```

##### `resetIpcMode` <a name="resetIpcMode" id="@cdktf/provider-docker.container.Container.resetIpcMode"></a>

```typescript
public resetIpcMode(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-docker.container.Container.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLogDriver` <a name="resetLogDriver" id="@cdktf/provider-docker.container.Container.resetLogDriver"></a>

```typescript
public resetLogDriver(): void
```

##### `resetLogOpts` <a name="resetLogOpts" id="@cdktf/provider-docker.container.Container.resetLogOpts"></a>

```typescript
public resetLogOpts(): void
```

##### `resetLogs` <a name="resetLogs" id="@cdktf/provider-docker.container.Container.resetLogs"></a>

```typescript
public resetLogs(): void
```

##### `resetMaxRetryCount` <a name="resetMaxRetryCount" id="@cdktf/provider-docker.container.Container.resetMaxRetryCount"></a>

```typescript
public resetMaxRetryCount(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-docker.container.Container.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetMemorySwap` <a name="resetMemorySwap" id="@cdktf/provider-docker.container.Container.resetMemorySwap"></a>

```typescript
public resetMemorySwap(): void
```

##### `resetMounts` <a name="resetMounts" id="@cdktf/provider-docker.container.Container.resetMounts"></a>

```typescript
public resetMounts(): void
```

##### `resetMustRun` <a name="resetMustRun" id="@cdktf/provider-docker.container.Container.resetMustRun"></a>

```typescript
public resetMustRun(): void
```

##### `resetNetworkMode` <a name="resetNetworkMode" id="@cdktf/provider-docker.container.Container.resetNetworkMode"></a>

```typescript
public resetNetworkMode(): void
```

##### `resetNetworksAdvanced` <a name="resetNetworksAdvanced" id="@cdktf/provider-docker.container.Container.resetNetworksAdvanced"></a>

```typescript
public resetNetworksAdvanced(): void
```

##### `resetPidMode` <a name="resetPidMode" id="@cdktf/provider-docker.container.Container.resetPidMode"></a>

```typescript
public resetPidMode(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-docker.container.Container.resetPorts"></a>

```typescript
public resetPorts(): void
```

##### `resetPrivileged` <a name="resetPrivileged" id="@cdktf/provider-docker.container.Container.resetPrivileged"></a>

```typescript
public resetPrivileged(): void
```

##### `resetPublishAllPorts` <a name="resetPublishAllPorts" id="@cdktf/provider-docker.container.Container.resetPublishAllPorts"></a>

```typescript
public resetPublishAllPorts(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-docker.container.Container.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetRemoveVolumes` <a name="resetRemoveVolumes" id="@cdktf/provider-docker.container.Container.resetRemoveVolumes"></a>

```typescript
public resetRemoveVolumes(): void
```

##### `resetRestart` <a name="resetRestart" id="@cdktf/provider-docker.container.Container.resetRestart"></a>

```typescript
public resetRestart(): void
```

##### `resetRm` <a name="resetRm" id="@cdktf/provider-docker.container.Container.resetRm"></a>

```typescript
public resetRm(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-docker.container.Container.resetRuntime"></a>

```typescript
public resetRuntime(): void
```

##### `resetSecurityOpts` <a name="resetSecurityOpts" id="@cdktf/provider-docker.container.Container.resetSecurityOpts"></a>

```typescript
public resetSecurityOpts(): void
```

##### `resetShmSize` <a name="resetShmSize" id="@cdktf/provider-docker.container.Container.resetShmSize"></a>

```typescript
public resetShmSize(): void
```

##### `resetStart` <a name="resetStart" id="@cdktf/provider-docker.container.Container.resetStart"></a>

```typescript
public resetStart(): void
```

##### `resetStdinOpen` <a name="resetStdinOpen" id="@cdktf/provider-docker.container.Container.resetStdinOpen"></a>

```typescript
public resetStdinOpen(): void
```

##### `resetStopSignal` <a name="resetStopSignal" id="@cdktf/provider-docker.container.Container.resetStopSignal"></a>

```typescript
public resetStopSignal(): void
```

##### `resetStopTimeout` <a name="resetStopTimeout" id="@cdktf/provider-docker.container.Container.resetStopTimeout"></a>

```typescript
public resetStopTimeout(): void
```

##### `resetStorageOpts` <a name="resetStorageOpts" id="@cdktf/provider-docker.container.Container.resetStorageOpts"></a>

```typescript
public resetStorageOpts(): void
```

##### `resetSysctls` <a name="resetSysctls" id="@cdktf/provider-docker.container.Container.resetSysctls"></a>

```typescript
public resetSysctls(): void
```

##### `resetTmpfs` <a name="resetTmpfs" id="@cdktf/provider-docker.container.Container.resetTmpfs"></a>

```typescript
public resetTmpfs(): void
```

##### `resetTty` <a name="resetTty" id="@cdktf/provider-docker.container.Container.resetTty"></a>

```typescript
public resetTty(): void
```

##### `resetUlimit` <a name="resetUlimit" id="@cdktf/provider-docker.container.Container.resetUlimit"></a>

```typescript
public resetUlimit(): void
```

##### `resetUpload` <a name="resetUpload" id="@cdktf/provider-docker.container.Container.resetUpload"></a>

```typescript
public resetUpload(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-docker.container.Container.resetUser"></a>

```typescript
public resetUser(): void
```

##### `resetUsernsMode` <a name="resetUsernsMode" id="@cdktf/provider-docker.container.Container.resetUsernsMode"></a>

```typescript
public resetUsernsMode(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktf/provider-docker.container.Container.resetVolumes"></a>

```typescript
public resetVolumes(): void
```

##### `resetWait` <a name="resetWait" id="@cdktf/provider-docker.container.Container.resetWait"></a>

```typescript
public resetWait(): void
```

##### `resetWaitTimeout` <a name="resetWaitTimeout" id="@cdktf/provider-docker.container.Container.resetWaitTimeout"></a>

```typescript
public resetWaitTimeout(): void
```

##### `resetWorkingDir` <a name="resetWorkingDir" id="@cdktf/provider-docker.container.Container.resetWorkingDir"></a>

```typescript
public resetWorkingDir(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.container.Container.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Container resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-docker.container.Container.isConstruct"></a>

```typescript
import { container } from '@cdktf/provider-docker'

container.Container.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.container.Container.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.container.Container.isTerraformElement"></a>

```typescript
import { container } from '@cdktf/provider-docker'

container.Container.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.container.Container.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-docker.container.Container.isTerraformResource"></a>

```typescript
import { container } from '@cdktf/provider-docker'

container.Container.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.container.Container.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-docker.container.Container.generateConfigForImport"></a>

```typescript
import { container } from '@cdktf/provider-docker'

container.Container.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Container resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.container.Container.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.container.Container.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Container to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.container.Container.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Container that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.container.Container.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Container to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.bridge">bridge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference">ContainerCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.containerLogs">containerLogs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.devices">devices</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList">ContainerDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.exitCode">exitCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference">ContainerHealthcheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.host">host</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHostList">ContainerHostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList">ContainerLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.mounts">mounts</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsList">ContainerMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networkData">networkData</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList">ContainerNetworkDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networksAdvanced">networksAdvanced</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList">ContainerNetworksAdvancedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerPortsList">ContainerPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ulimit">ulimit</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList">ContainerUlimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.upload">upload</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerUploadList">ContainerUploadList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList">ContainerVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.attachInput">attachInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.capabilitiesInput">capabilitiesInput</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cgroupnsModeInput">cgroupnsModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.containerReadRefreshTimeoutMillisecondsInput">containerReadRefreshTimeoutMillisecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpuSetInput">cpuSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpuSharesInput">cpuSharesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpusInput">cpusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.destroyGraceSecondsInput">destroyGraceSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.devicesInput">devicesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsInput">dnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsOptsInput">dnsOptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsSearchInput">dnsSearchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.domainnameInput">domainnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.entrypointInput">entrypointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.envInput">envInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.gpusInput">gpusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.groupAddInput">groupAddInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.healthcheckInput">healthcheckInput</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.hostInput">hostInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.initInput">initInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ipcModeInput">ipcModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.labelsInput">labelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logDriverInput">logDriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logOptsInput">logOptsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logsInput">logsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.maxRetryCountInput">maxRetryCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.memoryInput">memoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.memorySwapInput">memorySwapInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.mountsInput">mountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.mustRunInput">mustRunInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networkModeInput">networkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networksAdvancedInput">networksAdvancedInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.pidModeInput">pidModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.portsInput">portsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.privilegedInput">privilegedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.publishAllPortsInput">publishAllPortsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.removeVolumesInput">removeVolumesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.restartInput">restartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.rmInput">rmInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.securityOptsInput">securityOptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.shmSizeInput">shmSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.startInput">startInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stdinOpenInput">stdinOpenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stopSignalInput">stopSignalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stopTimeoutInput">stopTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.storageOptsInput">storageOptsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.sysctlsInput">sysctlsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.tmpfsInput">tmpfsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ttyInput">ttyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ulimitInput">ulimitInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.uploadInput">uploadInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.usernsModeInput">usernsModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.volumesInput">volumesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.waitInput">waitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.waitTimeoutInput">waitTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.workingDirInput">workingDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.attach">attach</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cgroupnsMode">cgroupnsMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.containerReadRefreshTimeoutMilliseconds">containerReadRefreshTimeoutMilliseconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpus">cpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpuSet">cpuSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpuShares">cpuShares</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.destroyGraceSeconds">destroyGraceSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dns">dns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsOpts">dnsOpts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsSearch">dnsSearch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.domainname">domainname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.env">env</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.gpus">gpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.groupAdd">groupAdd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.init">init</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ipcMode">ipcMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logDriver">logDriver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logOpts">logOpts</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logs">logs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.maxRetryCount">maxRetryCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.memorySwap">memorySwap</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.mustRun">mustRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networkMode">networkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.pidMode">pidMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.privileged">privileged</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.publishAllPorts">publishAllPorts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.removeVolumes">removeVolumes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.restart">restart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.rm">rm</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.securityOpts">securityOpts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.shmSize">shmSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.start">start</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stdinOpen">stdinOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stopSignal">stopSignal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stopTimeout">stopTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.storageOpts">storageOpts</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.sysctls">sysctls</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.tmpfs">tmpfs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.tty">tty</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.usernsMode">usernsMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.wait">wait</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.waitTimeout">waitTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.workingDir">workingDir</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.container.Container.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.container.Container.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.Container.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.container.Container.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-docker.container.Container.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.container.Container.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.container.Container.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.container.Container.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.container.Container.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.container.Container.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.container.Container.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.container.Container.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.container.Container.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.container.Container.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bridge`<sup>Required</sup> <a name="bridge" id="@cdktf/provider-docker.container.Container.property.bridge"></a>

```typescript
public readonly bridge: string;
```

- *Type:* string

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-docker.container.Container.property.capabilities"></a>

```typescript
public readonly capabilities: ContainerCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference">ContainerCapabilitiesOutputReference</a>

---

##### `containerLogs`<sup>Required</sup> <a name="containerLogs" id="@cdktf/provider-docker.container.Container.property.containerLogs"></a>

```typescript
public readonly containerLogs: string;
```

- *Type:* string

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktf/provider-docker.container.Container.property.devices"></a>

```typescript
public readonly devices: ContainerDevicesList;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerDevicesList">ContainerDevicesList</a>

---

##### `exitCode`<sup>Required</sup> <a name="exitCode" id="@cdktf/provider-docker.container.Container.property.exitCode"></a>

```typescript
public readonly exitCode: number;
```

- *Type:* number

---

##### `healthcheck`<sup>Required</sup> <a name="healthcheck" id="@cdktf/provider-docker.container.Container.property.healthcheck"></a>

```typescript
public readonly healthcheck: ContainerHealthcheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference">ContainerHealthcheckOutputReference</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-docker.container.Container.property.host"></a>

```typescript
public readonly host: ContainerHostList;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHostList">ContainerHostList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.container.Container.property.labels"></a>

```typescript
public readonly labels: ContainerLabelsList;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerLabelsList">ContainerLabelsList</a>

---

##### `mounts`<sup>Required</sup> <a name="mounts" id="@cdktf/provider-docker.container.Container.property.mounts"></a>

```typescript
public readonly mounts: ContainerMountsList;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsList">ContainerMountsList</a>

---

##### `networkData`<sup>Required</sup> <a name="networkData" id="@cdktf/provider-docker.container.Container.property.networkData"></a>

```typescript
public readonly networkData: ContainerNetworkDataList;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerNetworkDataList">ContainerNetworkDataList</a>

---

##### `networksAdvanced`<sup>Required</sup> <a name="networksAdvanced" id="@cdktf/provider-docker.container.Container.property.networksAdvanced"></a>

```typescript
public readonly networksAdvanced: ContainerNetworksAdvancedList;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList">ContainerNetworksAdvancedList</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-docker.container.Container.property.ports"></a>

```typescript
public readonly ports: ContainerPortsList;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerPortsList">ContainerPortsList</a>

---

##### `ulimit`<sup>Required</sup> <a name="ulimit" id="@cdktf/provider-docker.container.Container.property.ulimit"></a>

```typescript
public readonly ulimit: ContainerUlimitList;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerUlimitList">ContainerUlimitList</a>

---

##### `upload`<sup>Required</sup> <a name="upload" id="@cdktf/provider-docker.container.Container.property.upload"></a>

```typescript
public readonly upload: ContainerUploadList;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerUploadList">ContainerUploadList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-docker.container.Container.property.volumes"></a>

```typescript
public readonly volumes: ContainerVolumesList;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerVolumesList">ContainerVolumesList</a>

---

##### `attachInput`<sup>Optional</sup> <a name="attachInput" id="@cdktf/provider-docker.container.Container.property.attachInput"></a>

```typescript
public readonly attachInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-docker.container.Container.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: ContainerCapabilities;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

---

##### `cgroupnsModeInput`<sup>Optional</sup> <a name="cgroupnsModeInput" id="@cdktf/provider-docker.container.Container.property.cgroupnsModeInput"></a>

```typescript
public readonly cgroupnsModeInput: string;
```

- *Type:* string

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-docker.container.Container.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `containerReadRefreshTimeoutMillisecondsInput`<sup>Optional</sup> <a name="containerReadRefreshTimeoutMillisecondsInput" id="@cdktf/provider-docker.container.Container.property.containerReadRefreshTimeoutMillisecondsInput"></a>

```typescript
public readonly containerReadRefreshTimeoutMillisecondsInput: number;
```

- *Type:* number

---

##### `cpuSetInput`<sup>Optional</sup> <a name="cpuSetInput" id="@cdktf/provider-docker.container.Container.property.cpuSetInput"></a>

```typescript
public readonly cpuSetInput: string;
```

- *Type:* string

---

##### `cpuSharesInput`<sup>Optional</sup> <a name="cpuSharesInput" id="@cdktf/provider-docker.container.Container.property.cpuSharesInput"></a>

```typescript
public readonly cpuSharesInput: number;
```

- *Type:* number

---

##### `cpusInput`<sup>Optional</sup> <a name="cpusInput" id="@cdktf/provider-docker.container.Container.property.cpusInput"></a>

```typescript
public readonly cpusInput: string;
```

- *Type:* string

---

##### `destroyGraceSecondsInput`<sup>Optional</sup> <a name="destroyGraceSecondsInput" id="@cdktf/provider-docker.container.Container.property.destroyGraceSecondsInput"></a>

```typescript
public readonly destroyGraceSecondsInput: number;
```

- *Type:* number

---

##### `devicesInput`<sup>Optional</sup> <a name="devicesInput" id="@cdktf/provider-docker.container.Container.property.devicesInput"></a>

```typescript
public readonly devicesInput: IResolvable | ContainerDevices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>[]

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktf/provider-docker.container.Container.property.dnsInput"></a>

```typescript
public readonly dnsInput: string[];
```

- *Type:* string[]

---

##### `dnsOptsInput`<sup>Optional</sup> <a name="dnsOptsInput" id="@cdktf/provider-docker.container.Container.property.dnsOptsInput"></a>

```typescript
public readonly dnsOptsInput: string[];
```

- *Type:* string[]

---

##### `dnsSearchInput`<sup>Optional</sup> <a name="dnsSearchInput" id="@cdktf/provider-docker.container.Container.property.dnsSearchInput"></a>

```typescript
public readonly dnsSearchInput: string[];
```

- *Type:* string[]

---

##### `domainnameInput`<sup>Optional</sup> <a name="domainnameInput" id="@cdktf/provider-docker.container.Container.property.domainnameInput"></a>

```typescript
public readonly domainnameInput: string;
```

- *Type:* string

---

##### `entrypointInput`<sup>Optional</sup> <a name="entrypointInput" id="@cdktf/provider-docker.container.Container.property.entrypointInput"></a>

```typescript
public readonly entrypointInput: string[];
```

- *Type:* string[]

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-docker.container.Container.property.envInput"></a>

```typescript
public readonly envInput: string[];
```

- *Type:* string[]

---

##### `gpusInput`<sup>Optional</sup> <a name="gpusInput" id="@cdktf/provider-docker.container.Container.property.gpusInput"></a>

```typescript
public readonly gpusInput: string;
```

- *Type:* string

---

##### `groupAddInput`<sup>Optional</sup> <a name="groupAddInput" id="@cdktf/provider-docker.container.Container.property.groupAddInput"></a>

```typescript
public readonly groupAddInput: string[];
```

- *Type:* string[]

---

##### `healthcheckInput`<sup>Optional</sup> <a name="healthcheckInput" id="@cdktf/provider-docker.container.Container.property.healthcheckInput"></a>

```typescript
public readonly healthcheckInput: ContainerHealthcheck;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-docker.container.Container.property.hostInput"></a>

```typescript
public readonly hostInput: IResolvable | ContainerHost[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>[]

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-docker.container.Container.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-docker.container.Container.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-docker.container.Container.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `initInput`<sup>Optional</sup> <a name="initInput" id="@cdktf/provider-docker.container.Container.property.initInput"></a>

```typescript
public readonly initInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipcModeInput`<sup>Optional</sup> <a name="ipcModeInput" id="@cdktf/provider-docker.container.Container.property.ipcModeInput"></a>

```typescript
public readonly ipcModeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-docker.container.Container.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | ContainerLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>[]

---

##### `logDriverInput`<sup>Optional</sup> <a name="logDriverInput" id="@cdktf/provider-docker.container.Container.property.logDriverInput"></a>

```typescript
public readonly logDriverInput: string;
```

- *Type:* string

---

##### `logOptsInput`<sup>Optional</sup> <a name="logOptsInput" id="@cdktf/provider-docker.container.Container.property.logOptsInput"></a>

```typescript
public readonly logOptsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `logsInput`<sup>Optional</sup> <a name="logsInput" id="@cdktf/provider-docker.container.Container.property.logsInput"></a>

```typescript
public readonly logsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxRetryCountInput`<sup>Optional</sup> <a name="maxRetryCountInput" id="@cdktf/provider-docker.container.Container.property.maxRetryCountInput"></a>

```typescript
public readonly maxRetryCountInput: number;
```

- *Type:* number

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-docker.container.Container.property.memoryInput"></a>

```typescript
public readonly memoryInput: number;
```

- *Type:* number

---

##### `memorySwapInput`<sup>Optional</sup> <a name="memorySwapInput" id="@cdktf/provider-docker.container.Container.property.memorySwapInput"></a>

```typescript
public readonly memorySwapInput: number;
```

- *Type:* number

---

##### `mountsInput`<sup>Optional</sup> <a name="mountsInput" id="@cdktf/provider-docker.container.Container.property.mountsInput"></a>

```typescript
public readonly mountsInput: IResolvable | ContainerMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>[]

---

##### `mustRunInput`<sup>Optional</sup> <a name="mustRunInput" id="@cdktf/provider-docker.container.Container.property.mustRunInput"></a>

```typescript
public readonly mustRunInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.container.Container.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkModeInput`<sup>Optional</sup> <a name="networkModeInput" id="@cdktf/provider-docker.container.Container.property.networkModeInput"></a>

```typescript
public readonly networkModeInput: string;
```

- *Type:* string

---

##### `networksAdvancedInput`<sup>Optional</sup> <a name="networksAdvancedInput" id="@cdktf/provider-docker.container.Container.property.networksAdvancedInput"></a>

```typescript
public readonly networksAdvancedInput: IResolvable | ContainerNetworksAdvanced[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>[]

---

##### `pidModeInput`<sup>Optional</sup> <a name="pidModeInput" id="@cdktf/provider-docker.container.Container.property.pidModeInput"></a>

```typescript
public readonly pidModeInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-docker.container.Container.property.portsInput"></a>

```typescript
public readonly portsInput: IResolvable | ContainerPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>[]

---

##### `privilegedInput`<sup>Optional</sup> <a name="privilegedInput" id="@cdktf/provider-docker.container.Container.property.privilegedInput"></a>

```typescript
public readonly privilegedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publishAllPortsInput`<sup>Optional</sup> <a name="publishAllPortsInput" id="@cdktf/provider-docker.container.Container.property.publishAllPortsInput"></a>

```typescript
public readonly publishAllPortsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-docker.container.Container.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `removeVolumesInput`<sup>Optional</sup> <a name="removeVolumesInput" id="@cdktf/provider-docker.container.Container.property.removeVolumesInput"></a>

```typescript
public readonly removeVolumesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restartInput`<sup>Optional</sup> <a name="restartInput" id="@cdktf/provider-docker.container.Container.property.restartInput"></a>

```typescript
public readonly restartInput: string;
```

- *Type:* string

---

##### `rmInput`<sup>Optional</sup> <a name="rmInput" id="@cdktf/provider-docker.container.Container.property.rmInput"></a>

```typescript
public readonly rmInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-docker.container.Container.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `securityOptsInput`<sup>Optional</sup> <a name="securityOptsInput" id="@cdktf/provider-docker.container.Container.property.securityOptsInput"></a>

```typescript
public readonly securityOptsInput: string[];
```

- *Type:* string[]

---

##### `shmSizeInput`<sup>Optional</sup> <a name="shmSizeInput" id="@cdktf/provider-docker.container.Container.property.shmSizeInput"></a>

```typescript
public readonly shmSizeInput: number;
```

- *Type:* number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-docker.container.Container.property.startInput"></a>

```typescript
public readonly startInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stdinOpenInput`<sup>Optional</sup> <a name="stdinOpenInput" id="@cdktf/provider-docker.container.Container.property.stdinOpenInput"></a>

```typescript
public readonly stdinOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stopSignalInput`<sup>Optional</sup> <a name="stopSignalInput" id="@cdktf/provider-docker.container.Container.property.stopSignalInput"></a>

```typescript
public readonly stopSignalInput: string;
```

- *Type:* string

---

##### `stopTimeoutInput`<sup>Optional</sup> <a name="stopTimeoutInput" id="@cdktf/provider-docker.container.Container.property.stopTimeoutInput"></a>

```typescript
public readonly stopTimeoutInput: number;
```

- *Type:* number

---

##### `storageOptsInput`<sup>Optional</sup> <a name="storageOptsInput" id="@cdktf/provider-docker.container.Container.property.storageOptsInput"></a>

```typescript
public readonly storageOptsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sysctlsInput`<sup>Optional</sup> <a name="sysctlsInput" id="@cdktf/provider-docker.container.Container.property.sysctlsInput"></a>

```typescript
public readonly sysctlsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tmpfsInput`<sup>Optional</sup> <a name="tmpfsInput" id="@cdktf/provider-docker.container.Container.property.tmpfsInput"></a>

```typescript
public readonly tmpfsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ttyInput`<sup>Optional</sup> <a name="ttyInput" id="@cdktf/provider-docker.container.Container.property.ttyInput"></a>

```typescript
public readonly ttyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ulimitInput`<sup>Optional</sup> <a name="ulimitInput" id="@cdktf/provider-docker.container.Container.property.ulimitInput"></a>

```typescript
public readonly ulimitInput: IResolvable | ContainerUlimit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>[]

---

##### `uploadInput`<sup>Optional</sup> <a name="uploadInput" id="@cdktf/provider-docker.container.Container.property.uploadInput"></a>

```typescript
public readonly uploadInput: IResolvable | ContainerUpload[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>[]

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-docker.container.Container.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `usernsModeInput`<sup>Optional</sup> <a name="usernsModeInput" id="@cdktf/provider-docker.container.Container.property.usernsModeInput"></a>

```typescript
public readonly usernsModeInput: string;
```

- *Type:* string

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktf/provider-docker.container.Container.property.volumesInput"></a>

```typescript
public readonly volumesInput: IResolvable | ContainerVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>[]

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktf/provider-docker.container.Container.property.waitInput"></a>

```typescript
public readonly waitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitTimeoutInput`<sup>Optional</sup> <a name="waitTimeoutInput" id="@cdktf/provider-docker.container.Container.property.waitTimeoutInput"></a>

```typescript
public readonly waitTimeoutInput: number;
```

- *Type:* number

---

##### `workingDirInput`<sup>Optional</sup> <a name="workingDirInput" id="@cdktf/provider-docker.container.Container.property.workingDirInput"></a>

```typescript
public readonly workingDirInput: string;
```

- *Type:* string

---

##### `attach`<sup>Required</sup> <a name="attach" id="@cdktf/provider-docker.container.Container.property.attach"></a>

```typescript
public readonly attach: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cgroupnsMode`<sup>Required</sup> <a name="cgroupnsMode" id="@cdktf/provider-docker.container.Container.property.cgroupnsMode"></a>

```typescript
public readonly cgroupnsMode: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-docker.container.Container.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `containerReadRefreshTimeoutMilliseconds`<sup>Required</sup> <a name="containerReadRefreshTimeoutMilliseconds" id="@cdktf/provider-docker.container.Container.property.containerReadRefreshTimeoutMilliseconds"></a>

```typescript
public readonly containerReadRefreshTimeoutMilliseconds: number;
```

- *Type:* number

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktf/provider-docker.container.Container.property.cpus"></a>

```typescript
public readonly cpus: string;
```

- *Type:* string

---

##### `cpuSet`<sup>Required</sup> <a name="cpuSet" id="@cdktf/provider-docker.container.Container.property.cpuSet"></a>

```typescript
public readonly cpuSet: string;
```

- *Type:* string

---

##### `cpuShares`<sup>Required</sup> <a name="cpuShares" id="@cdktf/provider-docker.container.Container.property.cpuShares"></a>

```typescript
public readonly cpuShares: number;
```

- *Type:* number

---

##### `destroyGraceSeconds`<sup>Required</sup> <a name="destroyGraceSeconds" id="@cdktf/provider-docker.container.Container.property.destroyGraceSeconds"></a>

```typescript
public readonly destroyGraceSeconds: number;
```

- *Type:* number

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-docker.container.Container.property.dns"></a>

```typescript
public readonly dns: string[];
```

- *Type:* string[]

---

##### `dnsOpts`<sup>Required</sup> <a name="dnsOpts" id="@cdktf/provider-docker.container.Container.property.dnsOpts"></a>

```typescript
public readonly dnsOpts: string[];
```

- *Type:* string[]

---

##### `dnsSearch`<sup>Required</sup> <a name="dnsSearch" id="@cdktf/provider-docker.container.Container.property.dnsSearch"></a>

```typescript
public readonly dnsSearch: string[];
```

- *Type:* string[]

---

##### `domainname`<sup>Required</sup> <a name="domainname" id="@cdktf/provider-docker.container.Container.property.domainname"></a>

```typescript
public readonly domainname: string;
```

- *Type:* string

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-docker.container.Container.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-docker.container.Container.property.env"></a>

```typescript
public readonly env: string[];
```

- *Type:* string[]

---

##### `gpus`<sup>Required</sup> <a name="gpus" id="@cdktf/provider-docker.container.Container.property.gpus"></a>

```typescript
public readonly gpus: string;
```

- *Type:* string

---

##### `groupAdd`<sup>Required</sup> <a name="groupAdd" id="@cdktf/provider-docker.container.Container.property.groupAdd"></a>

```typescript
public readonly groupAdd: string[];
```

- *Type:* string[]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-docker.container.Container.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.container.Container.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.container.Container.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `init`<sup>Required</sup> <a name="init" id="@cdktf/provider-docker.container.Container.property.init"></a>

```typescript
public readonly init: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipcMode`<sup>Required</sup> <a name="ipcMode" id="@cdktf/provider-docker.container.Container.property.ipcMode"></a>

```typescript
public readonly ipcMode: string;
```

- *Type:* string

---

##### `logDriver`<sup>Required</sup> <a name="logDriver" id="@cdktf/provider-docker.container.Container.property.logDriver"></a>

```typescript
public readonly logDriver: string;
```

- *Type:* string

---

##### `logOpts`<sup>Required</sup> <a name="logOpts" id="@cdktf/provider-docker.container.Container.property.logOpts"></a>

```typescript
public readonly logOpts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/provider-docker.container.Container.property.logs"></a>

```typescript
public readonly logs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxRetryCount`<sup>Required</sup> <a name="maxRetryCount" id="@cdktf/provider-docker.container.Container.property.maxRetryCount"></a>

```typescript
public readonly maxRetryCount: number;
```

- *Type:* number

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-docker.container.Container.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `memorySwap`<sup>Required</sup> <a name="memorySwap" id="@cdktf/provider-docker.container.Container.property.memorySwap"></a>

```typescript
public readonly memorySwap: number;
```

- *Type:* number

---

##### `mustRun`<sup>Required</sup> <a name="mustRun" id="@cdktf/provider-docker.container.Container.property.mustRun"></a>

```typescript
public readonly mustRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.Container.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktf/provider-docker.container.Container.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

---

##### `pidMode`<sup>Required</sup> <a name="pidMode" id="@cdktf/provider-docker.container.Container.property.pidMode"></a>

```typescript
public readonly pidMode: string;
```

- *Type:* string

---

##### `privileged`<sup>Required</sup> <a name="privileged" id="@cdktf/provider-docker.container.Container.property.privileged"></a>

```typescript
public readonly privileged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publishAllPorts`<sup>Required</sup> <a name="publishAllPorts" id="@cdktf/provider-docker.container.Container.property.publishAllPorts"></a>

```typescript
public readonly publishAllPorts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-docker.container.Container.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `removeVolumes`<sup>Required</sup> <a name="removeVolumes" id="@cdktf/provider-docker.container.Container.property.removeVolumes"></a>

```typescript
public readonly removeVolumes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restart`<sup>Required</sup> <a name="restart" id="@cdktf/provider-docker.container.Container.property.restart"></a>

```typescript
public readonly restart: string;
```

- *Type:* string

---

##### `rm`<sup>Required</sup> <a name="rm" id="@cdktf/provider-docker.container.Container.property.rm"></a>

```typescript
public readonly rm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-docker.container.Container.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `securityOpts`<sup>Required</sup> <a name="securityOpts" id="@cdktf/provider-docker.container.Container.property.securityOpts"></a>

```typescript
public readonly securityOpts: string[];
```

- *Type:* string[]

---

##### `shmSize`<sup>Required</sup> <a name="shmSize" id="@cdktf/provider-docker.container.Container.property.shmSize"></a>

```typescript
public readonly shmSize: number;
```

- *Type:* number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-docker.container.Container.property.start"></a>

```typescript
public readonly start: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stdinOpen`<sup>Required</sup> <a name="stdinOpen" id="@cdktf/provider-docker.container.Container.property.stdinOpen"></a>

```typescript
public readonly stdinOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stopSignal`<sup>Required</sup> <a name="stopSignal" id="@cdktf/provider-docker.container.Container.property.stopSignal"></a>

```typescript
public readonly stopSignal: string;
```

- *Type:* string

---

##### `stopTimeout`<sup>Required</sup> <a name="stopTimeout" id="@cdktf/provider-docker.container.Container.property.stopTimeout"></a>

```typescript
public readonly stopTimeout: number;
```

- *Type:* number

---

##### `storageOpts`<sup>Required</sup> <a name="storageOpts" id="@cdktf/provider-docker.container.Container.property.storageOpts"></a>

```typescript
public readonly storageOpts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sysctls`<sup>Required</sup> <a name="sysctls" id="@cdktf/provider-docker.container.Container.property.sysctls"></a>

```typescript
public readonly sysctls: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tmpfs`<sup>Required</sup> <a name="tmpfs" id="@cdktf/provider-docker.container.Container.property.tmpfs"></a>

```typescript
public readonly tmpfs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tty`<sup>Required</sup> <a name="tty" id="@cdktf/provider-docker.container.Container.property.tty"></a>

```typescript
public readonly tty: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-docker.container.Container.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `usernsMode`<sup>Required</sup> <a name="usernsMode" id="@cdktf/provider-docker.container.Container.property.usernsMode"></a>

```typescript
public readonly usernsMode: string;
```

- *Type:* string

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-docker.container.Container.property.wait"></a>

```typescript
public readonly wait: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitTimeout`<sup>Required</sup> <a name="waitTimeout" id="@cdktf/provider-docker.container.Container.property.waitTimeout"></a>

```typescript
public readonly waitTimeout: number;
```

- *Type:* number

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktf/provider-docker.container.Container.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.container.Container.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerCapabilities <a name="ContainerCapabilities" id="@cdktf/provider-docker.container.ContainerCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerCapabilities.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerCapabilities: container.ContainerCapabilities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities.property.add">add</a></code> | <code>string[]</code> | List of linux capabilities to add. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities.property.drop">drop</a></code> | <code>string[]</code> | List of linux capabilities to drop. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-docker.container.ContainerCapabilities.property.add"></a>

```typescript
public readonly add: string[];
```

- *Type:* string[]

List of linux capabilities to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#add Container#add}

---

##### `drop`<sup>Optional</sup> <a name="drop" id="@cdktf/provider-docker.container.ContainerCapabilities.property.drop"></a>

```typescript
public readonly drop: string[];
```

- *Type:* string[]

List of linux capabilities to drop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#drop Container#drop}

---

### ContainerConfig <a name="ContainerConfig" id="@cdktf/provider-docker.container.ContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerConfig.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerConfig: container.ContainerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.image">image</a></code> | <code>string</code> | The ID of the image to back this container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.name">name</a></code> | <code>string</code> | The name of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.attach">attach</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a></code> | capabilities block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.cgroupnsMode">cgroupnsMode</a></code> | <code>string</code> | Cgroup namespace mode to use for the container. Possible values are: `private`, `host`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.command">command</a></code> | <code>string[]</code> | The command to use to start the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.containerReadRefreshTimeoutMilliseconds">containerReadRefreshTimeoutMilliseconds</a></code> | <code>number</code> | The total number of milliseconds to wait for the container to reach status 'running'. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.cpus">cpus</a></code> | <code>string</code> | Specify how much of the available CPU resources a container can use. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.cpuSet">cpuSet</a></code> | <code>string</code> | A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.cpuShares">cpuShares</a></code> | <code>number</code> | CPU shares (relative weight) for the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.destroyGraceSeconds">destroyGraceSeconds</a></code> | <code>number</code> | If defined will attempt to stop the container before destroying. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.devices">devices</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>[]</code> | devices block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.dns">dns</a></code> | <code>string[]</code> | DNS servers to use. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.dnsOpts">dnsOpts</a></code> | <code>string[]</code> | DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.dnsSearch">dnsSearch</a></code> | <code>string[]</code> | DNS search domains that are used when bare unqualified hostnames are used inside of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.domainname">domainname</a></code> | <code>string</code> | Domain name of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.entrypoint">entrypoint</a></code> | <code>string[]</code> | The command to use as the Entrypoint for the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.env">env</a></code> | <code>string[]</code> | Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.gpus">gpus</a></code> | <code>string</code> | GPU devices to add to the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.groupAdd">groupAdd</a></code> | <code>string[]</code> | Additional groups for the container user. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.host">host</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>[]</code> | host block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.hostname">hostname</a></code> | <code>string</code> | Hostname of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#id Container#id}. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.init">init</a></code> | <code>boolean \| cdktf.IResolvable</code> | Configured whether an init process should be injected for this container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.ipcMode">ipcMode</a></code> | <code>string</code> | IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name\|id>` or `host`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.labels">labels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>[]</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.logDriver">logDriver</a></code> | <code>string</code> | The logging driver to use for the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.logOpts">logOpts</a></code> | <code>{[ key: string ]: string}</code> | Key/value pairs to use as options for the logging driver. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.logs">logs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Save the container logs (`attach` must be enabled). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.maxRetryCount">maxRetryCount</a></code> | <code>number</code> | The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.memory">memory</a></code> | <code>number</code> | The memory limit for the container in MBs. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.memorySwap">memorySwap</a></code> | <code>number</code> | The total memory limit (memory + swap) for the container in MBs. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.mounts">mounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>[]</code> | mounts block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.mustRun">mustRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, then the Docker container will be kept running. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.networkMode">networkMode</a></code> | <code>string</code> | Network mode of the container. See https://docs.docker.com/engine/network/ for more information. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.networksAdvanced">networksAdvanced</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>[]</code> | networks_advanced block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.pidMode">pidMode</a></code> | <code>string</code> | he PID (Process) Namespace mode for the container. Either `container:<name\|id>` or `host`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.ports">ports</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>[]</code> | ports block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.privileged">privileged</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, the container runs in privileged mode. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.publishAllPorts">publishAllPorts</a></code> | <code>boolean \| cdktf.IResolvable</code> | Publish all ports of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, the container will be started as readonly. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.removeVolumes">removeVolumes</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.restart">restart</a></code> | <code>string</code> | The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.rm">rm</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, then the container will be automatically removed when it exits. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.runtime">runtime</a></code> | <code>string</code> | Runtime to use for the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.securityOpts">securityOpts</a></code> | <code>string[]</code> | List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.shmSize">shmSize</a></code> | <code>number</code> | Size of `/dev/shm` in MBs. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.start">start</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, then the Docker container will be started after creation. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.stdinOpen">stdinOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.stopSignal">stopSignal</a></code> | <code>string</code> | Signal to stop a container (default `SIGTERM`). |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.stopTimeout">stopTimeout</a></code> | <code>number</code> | Timeout (in seconds) to stop a container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.storageOpts">storageOpts</a></code> | <code>{[ key: string ]: string}</code> | Key/value pairs for the storage driver options, e.g. `size`: `120G`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.sysctls">sysctls</a></code> | <code>{[ key: string ]: string}</code> | A map of kernel parameters (sysctls) to set in the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.tmpfs">tmpfs</a></code> | <code>{[ key: string ]: string}</code> | A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.tty">tty</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.ulimit">ulimit</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>[]</code> | ulimit block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.upload">upload</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>[]</code> | upload block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.user">user</a></code> | <code>string</code> | User used for run the first process. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.usernsMode">usernsMode</a></code> | <code>string</code> | Sets the usernamespace mode for the container when usernamespace remapping option is enabled. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.volumes">volumes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>[]</code> | volumes block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.wait">wait</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, then the Docker container is waited for being healthy state after creation. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.waitTimeout">waitTimeout</a></code> | <code>number</code> | The timeout in seconds to wait the container to be healthy after creation. Defaults to `60`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.workingDir">workingDir</a></code> | <code>string</code> | The working directory for commands to run in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.container.ContainerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.container.ContainerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.container.ContainerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.container.ContainerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.container.ContainerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.container.ContainerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.container.ContainerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.container.ContainerConfig.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

The ID of the image to back this container.

The easiest way to get this value is to use the `image_id` attribute of the `docker_image` resource as is shown in the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#image Container#image}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.ContainerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#name Container#name}

---

##### `attach`<sup>Optional</sup> <a name="attach" id="@cdktf/provider-docker.container.ContainerConfig.property.attach"></a>

```typescript
public readonly attach: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#attach Container#attach}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-docker.container.ContainerConfig.property.capabilities"></a>

```typescript
public readonly capabilities: ContainerCapabilities;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#capabilities Container#capabilities}

---

##### `cgroupnsMode`<sup>Optional</sup> <a name="cgroupnsMode" id="@cdktf/provider-docker.container.ContainerConfig.property.cgroupnsMode"></a>

```typescript
public readonly cgroupnsMode: string;
```

- *Type:* string

Cgroup namespace mode to use for the container. Possible values are: `private`, `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#cgroupns_mode Container#cgroupns_mode}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-docker.container.ContainerConfig.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

The command to use to start the container.

For example, to run `/usr/bin/myprogram -f baz.conf` set the command to be `["/usr/bin/myprogram","-f","baz.conf"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#command Container#command}

---

##### `containerReadRefreshTimeoutMilliseconds`<sup>Optional</sup> <a name="containerReadRefreshTimeoutMilliseconds" id="@cdktf/provider-docker.container.ContainerConfig.property.containerReadRefreshTimeoutMilliseconds"></a>

```typescript
public readonly containerReadRefreshTimeoutMilliseconds: number;
```

- *Type:* number

The total number of milliseconds to wait for the container to reach status 'running'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#container_read_refresh_timeout_milliseconds Container#container_read_refresh_timeout_milliseconds}

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-docker.container.ContainerConfig.property.cpus"></a>

```typescript
public readonly cpus: string;
```

- *Type:* string

Specify how much of the available CPU resources a container can use.

e.g a value of 1.5 means the container is guaranteed at most one and a half of the CPUs

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#cpus Container#cpus}

---

##### `cpuSet`<sup>Optional</sup> <a name="cpuSet" id="@cdktf/provider-docker.container.ContainerConfig.property.cpuSet"></a>

```typescript
public readonly cpuSet: string;
```

- *Type:* string

A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#cpu_set Container#cpu_set}

---

##### `cpuShares`<sup>Optional</sup> <a name="cpuShares" id="@cdktf/provider-docker.container.ContainerConfig.property.cpuShares"></a>

```typescript
public readonly cpuShares: number;
```

- *Type:* number

CPU shares (relative weight) for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#cpu_shares Container#cpu_shares}

---

##### `destroyGraceSeconds`<sup>Optional</sup> <a name="destroyGraceSeconds" id="@cdktf/provider-docker.container.ContainerConfig.property.destroyGraceSeconds"></a>

```typescript
public readonly destroyGraceSeconds: number;
```

- *Type:* number

If defined will attempt to stop the container before destroying.

Container will be destroyed after `n` seconds or on successful stop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#destroy_grace_seconds Container#destroy_grace_seconds}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-docker.container.ContainerConfig.property.devices"></a>

```typescript
public readonly devices: IResolvable | ContainerDevices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>[]

devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#devices Container#devices}

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-docker.container.ContainerConfig.property.dns"></a>

```typescript
public readonly dns: string[];
```

- *Type:* string[]

DNS servers to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#dns Container#dns}

---

##### `dnsOpts`<sup>Optional</sup> <a name="dnsOpts" id="@cdktf/provider-docker.container.ContainerConfig.property.dnsOpts"></a>

```typescript
public readonly dnsOpts: string[];
```

- *Type:* string[]

DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#dns_opts Container#dns_opts}

---

##### `dnsSearch`<sup>Optional</sup> <a name="dnsSearch" id="@cdktf/provider-docker.container.ContainerConfig.property.dnsSearch"></a>

```typescript
public readonly dnsSearch: string[];
```

- *Type:* string[]

DNS search domains that are used when bare unqualified hostnames are used inside of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#dns_search Container#dns_search}

---

##### `domainname`<sup>Optional</sup> <a name="domainname" id="@cdktf/provider-docker.container.ContainerConfig.property.domainname"></a>

```typescript
public readonly domainname: string;
```

- *Type:* string

Domain name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#domainname Container#domainname}

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@cdktf/provider-docker.container.ContainerConfig.property.entrypoint"></a>

```typescript
public readonly entrypoint: string[];
```

- *Type:* string[]

The command to use as the Entrypoint for the container.

The Entrypoint allows you to configure a container to run as an executable. For example, to run `/usr/bin/myprogram` when starting a container, set the entrypoint to be `"/usr/bin/myprogram"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#entrypoint Container#entrypoint}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.container.ContainerConfig.property.env"></a>

```typescript
public readonly env: string[];
```

- *Type:* string[]

Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#env Container#env}

---

##### `gpus`<sup>Optional</sup> <a name="gpus" id="@cdktf/provider-docker.container.ContainerConfig.property.gpus"></a>

```typescript
public readonly gpus: string;
```

- *Type:* string

GPU devices to add to the container.

Currently, only the value `all` is supported. Passing any other value will result in unexpected behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#gpus Container#gpus}

---

##### `groupAdd`<sup>Optional</sup> <a name="groupAdd" id="@cdktf/provider-docker.container.ContainerConfig.property.groupAdd"></a>

```typescript
public readonly groupAdd: string[];
```

- *Type:* string[]

Additional groups for the container user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#group_add Container#group_add}

---

##### `healthcheck`<sup>Optional</sup> <a name="healthcheck" id="@cdktf/provider-docker.container.ContainerConfig.property.healthcheck"></a>

```typescript
public readonly healthcheck: ContainerHealthcheck;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#healthcheck Container#healthcheck}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-docker.container.ContainerConfig.property.host"></a>

```typescript
public readonly host: IResolvable | ContainerHost[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>[]

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#host Container#host}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-docker.container.ContainerConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#hostname Container#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.container.ContainerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#id Container#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `init`<sup>Optional</sup> <a name="init" id="@cdktf/provider-docker.container.ContainerConfig.property.init"></a>

```typescript
public readonly init: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Configured whether an init process should be injected for this container.

If unset this will default to the `dockerd` defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#init Container#init}

---

##### `ipcMode`<sup>Optional</sup> <a name="ipcMode" id="@cdktf/provider-docker.container.ContainerConfig.property.ipcMode"></a>

```typescript
public readonly ipcMode: string;
```

- *Type:* string

IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name|id>` or `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#ipc_mode Container#ipc_mode}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.container.ContainerConfig.property.labels"></a>

```typescript
public readonly labels: IResolvable | ContainerLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>[]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#labels Container#labels}

---

##### `logDriver`<sup>Optional</sup> <a name="logDriver" id="@cdktf/provider-docker.container.ContainerConfig.property.logDriver"></a>

```typescript
public readonly logDriver: string;
```

- *Type:* string

The logging driver to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#log_driver Container#log_driver}

---

##### `logOpts`<sup>Optional</sup> <a name="logOpts" id="@cdktf/provider-docker.container.ContainerConfig.property.logOpts"></a>

```typescript
public readonly logOpts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Key/value pairs to use as options for the logging driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#log_opts Container#log_opts}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-docker.container.ContainerConfig.property.logs"></a>

```typescript
public readonly logs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Save the container logs (`attach` must be enabled). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#logs Container#logs}

---

##### `maxRetryCount`<sup>Optional</sup> <a name="maxRetryCount" id="@cdktf/provider-docker.container.ContainerConfig.property.maxRetryCount"></a>

```typescript
public readonly maxRetryCount: number;
```

- *Type:* number

The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#max_retry_count Container#max_retry_count}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.container.ContainerConfig.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

The memory limit for the container in MBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#memory Container#memory}

---

##### `memorySwap`<sup>Optional</sup> <a name="memorySwap" id="@cdktf/provider-docker.container.ContainerConfig.property.memorySwap"></a>

```typescript
public readonly memorySwap: number;
```

- *Type:* number

The total memory limit (memory + swap) for the container in MBs.

This setting may compute to `-1` after `terraform apply` if the target host doesn't support memory swap, when that is the case docker will use a soft limitation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#memory_swap Container#memory_swap}

---

##### `mounts`<sup>Optional</sup> <a name="mounts" id="@cdktf/provider-docker.container.ContainerConfig.property.mounts"></a>

```typescript
public readonly mounts: IResolvable | ContainerMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>[]

mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#mounts Container#mounts}

---

##### `mustRun`<sup>Optional</sup> <a name="mustRun" id="@cdktf/provider-docker.container.ContainerConfig.property.mustRun"></a>

```typescript
public readonly mustRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, then the Docker container will be kept running.

If `false`, then as long as the container exists, Terraform assumes it is successful. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#must_run Container#must_run}

---

##### `networkMode`<sup>Optional</sup> <a name="networkMode" id="@cdktf/provider-docker.container.ContainerConfig.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

Network mode of the container. See https://docs.docker.com/engine/network/ for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#network_mode Container#network_mode}

---

##### `networksAdvanced`<sup>Optional</sup> <a name="networksAdvanced" id="@cdktf/provider-docker.container.ContainerConfig.property.networksAdvanced"></a>

```typescript
public readonly networksAdvanced: IResolvable | ContainerNetworksAdvanced[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>[]

networks_advanced block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#networks_advanced Container#networks_advanced}

---

##### `pidMode`<sup>Optional</sup> <a name="pidMode" id="@cdktf/provider-docker.container.ContainerConfig.property.pidMode"></a>

```typescript
public readonly pidMode: string;
```

- *Type:* string

he PID (Process) Namespace mode for the container. Either `container:<name|id>` or `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#pid_mode Container#pid_mode}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-docker.container.ContainerConfig.property.ports"></a>

```typescript
public readonly ports: IResolvable | ContainerPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#ports Container#ports}

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="@cdktf/provider-docker.container.ContainerConfig.property.privileged"></a>

```typescript
public readonly privileged: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, the container runs in privileged mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#privileged Container#privileged}

---

##### `publishAllPorts`<sup>Optional</sup> <a name="publishAllPorts" id="@cdktf/provider-docker.container.ContainerConfig.property.publishAllPorts"></a>

```typescript
public readonly publishAllPorts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Publish all ports of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#publish_all_ports Container#publish_all_ports}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-docker.container.ContainerConfig.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, the container will be started as readonly. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#read_only Container#read_only}

---

##### `removeVolumes`<sup>Optional</sup> <a name="removeVolumes" id="@cdktf/provider-docker.container.ContainerConfig.property.removeVolumes"></a>

```typescript
public readonly removeVolumes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#remove_volumes Container#remove_volumes}

---

##### `restart`<sup>Optional</sup> <a name="restart" id="@cdktf/provider-docker.container.ContainerConfig.property.restart"></a>

```typescript
public readonly restart: string;
```

- *Type:* string

The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#restart Container#restart}

---

##### `rm`<sup>Optional</sup> <a name="rm" id="@cdktf/provider-docker.container.ContainerConfig.property.rm"></a>

```typescript
public readonly rm: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, then the container will be automatically removed when it exits. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#rm Container#rm}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-docker.container.ContainerConfig.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Runtime to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#runtime Container#runtime}

---

##### `securityOpts`<sup>Optional</sup> <a name="securityOpts" id="@cdktf/provider-docker.container.ContainerConfig.property.securityOpts"></a>

```typescript
public readonly securityOpts: string[];
```

- *Type:* string[]

List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#security_opts Container#security_opts}

---

##### `shmSize`<sup>Optional</sup> <a name="shmSize" id="@cdktf/provider-docker.container.ContainerConfig.property.shmSize"></a>

```typescript
public readonly shmSize: number;
```

- *Type:* number

Size of `/dev/shm` in MBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#shm_size Container#shm_size}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-docker.container.ContainerConfig.property.start"></a>

```typescript
public readonly start: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, then the Docker container will be started after creation.

If `false`, then the container is only created. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#start Container#start}

---

##### `stdinOpen`<sup>Optional</sup> <a name="stdinOpen" id="@cdktf/provider-docker.container.ContainerConfig.property.stdinOpen"></a>

```typescript
public readonly stdinOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#stdin_open Container#stdin_open}

---

##### `stopSignal`<sup>Optional</sup> <a name="stopSignal" id="@cdktf/provider-docker.container.ContainerConfig.property.stopSignal"></a>

```typescript
public readonly stopSignal: string;
```

- *Type:* string

Signal to stop a container (default `SIGTERM`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#stop_signal Container#stop_signal}

---

##### `stopTimeout`<sup>Optional</sup> <a name="stopTimeout" id="@cdktf/provider-docker.container.ContainerConfig.property.stopTimeout"></a>

```typescript
public readonly stopTimeout: number;
```

- *Type:* number

Timeout (in seconds) to stop a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#stop_timeout Container#stop_timeout}

---

##### `storageOpts`<sup>Optional</sup> <a name="storageOpts" id="@cdktf/provider-docker.container.ContainerConfig.property.storageOpts"></a>

```typescript
public readonly storageOpts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Key/value pairs for the storage driver options, e.g. `size`: `120G`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#storage_opts Container#storage_opts}

---

##### `sysctls`<sup>Optional</sup> <a name="sysctls" id="@cdktf/provider-docker.container.ContainerConfig.property.sysctls"></a>

```typescript
public readonly sysctls: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of kernel parameters (sysctls) to set in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#sysctls Container#sysctls}

---

##### `tmpfs`<sup>Optional</sup> <a name="tmpfs" id="@cdktf/provider-docker.container.ContainerConfig.property.tmpfs"></a>

```typescript
public readonly tmpfs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#tmpfs Container#tmpfs}

---

##### `tty`<sup>Optional</sup> <a name="tty" id="@cdktf/provider-docker.container.ContainerConfig.property.tty"></a>

```typescript
public readonly tty: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#tty Container#tty}

---

##### `ulimit`<sup>Optional</sup> <a name="ulimit" id="@cdktf/provider-docker.container.ContainerConfig.property.ulimit"></a>

```typescript
public readonly ulimit: IResolvable | ContainerUlimit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>[]

ulimit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#ulimit Container#ulimit}

---

##### `upload`<sup>Optional</sup> <a name="upload" id="@cdktf/provider-docker.container.ContainerConfig.property.upload"></a>

```typescript
public readonly upload: IResolvable | ContainerUpload[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>[]

upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#upload Container#upload}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-docker.container.ContainerConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

User used for run the first process.

Format is `user` or `user:group` which user and group can be passed literraly or by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#user Container#user}

---

##### `usernsMode`<sup>Optional</sup> <a name="usernsMode" id="@cdktf/provider-docker.container.ContainerConfig.property.usernsMode"></a>

```typescript
public readonly usernsMode: string;
```

- *Type:* string

Sets the usernamespace mode for the container when usernamespace remapping option is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#userns_mode Container#userns_mode}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-docker.container.ContainerConfig.property.volumes"></a>

```typescript
public readonly volumes: IResolvable | ContainerVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>[]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#volumes Container#volumes}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-docker.container.ContainerConfig.property.wait"></a>

```typescript
public readonly wait: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, then the Docker container is waited for being healthy state after creation.

This requires your container to have a healthcheck, otherwise this provider will error. If `false`, then the container health state is not checked. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#wait Container#wait}

---

##### `waitTimeout`<sup>Optional</sup> <a name="waitTimeout" id="@cdktf/provider-docker.container.ContainerConfig.property.waitTimeout"></a>

```typescript
public readonly waitTimeout: number;
```

- *Type:* number

The timeout in seconds to wait the container to be healthy after creation. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#wait_timeout Container#wait_timeout}

---

##### `workingDir`<sup>Optional</sup> <a name="workingDir" id="@cdktf/provider-docker.container.ContainerConfig.property.workingDir"></a>

```typescript
public readonly workingDir: string;
```

- *Type:* string

The working directory for commands to run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#working_dir Container#working_dir}

---

### ContainerDevices <a name="ContainerDevices" id="@cdktf/provider-docker.container.ContainerDevices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerDevices.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerDevices: container.ContainerDevices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevices.property.hostPath">hostPath</a></code> | <code>string</code> | The path on the host where the device is located. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevices.property.containerPath">containerPath</a></code> | <code>string</code> | The path in the container where the device will be bound. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevices.property.permissions">permissions</a></code> | <code>string</code> | The cgroup permissions given to the container to access the device. Defaults to `rwm`. |

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-docker.container.ContainerDevices.property.hostPath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* string

The path on the host where the device is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#host_path Container#host_path}

---

##### `containerPath`<sup>Optional</sup> <a name="containerPath" id="@cdktf/provider-docker.container.ContainerDevices.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

The path in the container where the device will be bound.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#container_path Container#container_path}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-docker.container.ContainerDevices.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

The cgroup permissions given to the container to access the device. Defaults to `rwm`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#permissions Container#permissions}

---

### ContainerHealthcheck <a name="ContainerHealthcheck" id="@cdktf/provider-docker.container.ContainerHealthcheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerHealthcheck.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerHealthcheck: container.ContainerHealthcheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.test">test</a></code> | <code>string[]</code> | Command to run to check health. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.interval">interval</a></code> | <code>string</code> | Time between running the check (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.retries">retries</a></code> | <code>number</code> | Consecutive failures needed to report unhealthy. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.startPeriod">startPeriod</a></code> | <code>string</code> | Start period for the container to initialize before counting retries towards unstable (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.timeout">timeout</a></code> | <code>string</code> | Maximum time to allow one check to run (ms\|s\|m\|h). Defaults to `0s`. |

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.test"></a>

```typescript
public readonly test: string[];
```

- *Type:* string[]

Command to run to check health.

For example, to run `curl -f localhost/health` set the command to be `["CMD", "curl", "-f", "localhost/health"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#test Container#test}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Time between running the check (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#interval Container#interval}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

Consecutive failures needed to report unhealthy. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#retries Container#retries}

---

##### `startPeriod`<sup>Optional</sup> <a name="startPeriod" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.startPeriod"></a>

```typescript
public readonly startPeriod: string;
```

- *Type:* string

Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#start_period Container#start_period}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#timeout Container#timeout}

---

### ContainerHost <a name="ContainerHost" id="@cdktf/provider-docker.container.ContainerHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerHost.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerHost: container.ContainerHost = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHost.property.host">host</a></code> | <code>string</code> | Hostname to add. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHost.property.ip">ip</a></code> | <code>string</code> | IP address this hostname should resolve to. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-docker.container.ContainerHost.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Hostname to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#host Container#host}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-docker.container.ContainerHost.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

IP address this hostname should resolve to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#ip Container#ip}

---

### ContainerLabels <a name="ContainerLabels" id="@cdktf/provider-docker.container.ContainerLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerLabels.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerLabels: container.ContainerLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabels.property.label">label</a></code> | <code>string</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabels.property.value">value</a></code> | <code>string</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.container.ContainerLabels.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#label Container#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#value Container#value}

---

### ContainerMounts <a name="ContainerMounts" id="@cdktf/provider-docker.container.ContainerMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMounts.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerMounts: container.ContainerMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.target">target</a></code> | <code>string</code> | Container path. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.type">type</a></code> | <code>string</code> | The mount type. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.bindOptions">bindOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a></code> | bind_options block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the mount should be read-only. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.source">source</a></code> | <code>string</code> | Mount source (e.g. a volume name, a host path). |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.tmpfsOptions">tmpfsOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a></code> | tmpfs_options block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.volumeOptions">volumeOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a></code> | volume_options block. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-docker.container.ContainerMounts.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Container path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#target Container#target}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-docker.container.ContainerMounts.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The mount type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#type Container#type}

---

##### `bindOptions`<sup>Optional</sup> <a name="bindOptions" id="@cdktf/provider-docker.container.ContainerMounts.property.bindOptions"></a>

```typescript
public readonly bindOptions: ContainerMountsBindOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a>

bind_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#bind_options Container#bind_options}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-docker.container.ContainerMounts.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the mount should be read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#read_only Container#read_only}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-docker.container.ContainerMounts.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Mount source (e.g. a volume name, a host path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#source Container#source}

---

##### `tmpfsOptions`<sup>Optional</sup> <a name="tmpfsOptions" id="@cdktf/provider-docker.container.ContainerMounts.property.tmpfsOptions"></a>

```typescript
public readonly tmpfsOptions: ContainerMountsTmpfsOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a>

tmpfs_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#tmpfs_options Container#tmpfs_options}

---

##### `volumeOptions`<sup>Optional</sup> <a name="volumeOptions" id="@cdktf/provider-docker.container.ContainerMounts.property.volumeOptions"></a>

```typescript
public readonly volumeOptions: ContainerMountsVolumeOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a>

volume_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#volume_options Container#volume_options}

---

### ContainerMountsBindOptions <a name="ContainerMountsBindOptions" id="@cdktf/provider-docker.container.ContainerMountsBindOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMountsBindOptions.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerMountsBindOptions: container.ContainerMountsBindOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions.property.propagation">propagation</a></code> | <code>string</code> | A propagation mode with the value. |

---

##### `propagation`<sup>Optional</sup> <a name="propagation" id="@cdktf/provider-docker.container.ContainerMountsBindOptions.property.propagation"></a>

```typescript
public readonly propagation: string;
```

- *Type:* string

A propagation mode with the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#propagation Container#propagation}

---

### ContainerMountsTmpfsOptions <a name="ContainerMountsTmpfsOptions" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerMountsTmpfsOptions: container.ContainerMountsTmpfsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.property.mode">mode</a></code> | <code>number</code> | The permission mode for the tmpfs mount in an integer. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.property.sizeBytes">sizeBytes</a></code> | <code>number</code> | The size for the tmpfs mount in bytes. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

The permission mode for the tmpfs mount in an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#mode Container#mode}

---

##### `sizeBytes`<sup>Optional</sup> <a name="sizeBytes" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.property.sizeBytes"></a>

```typescript
public readonly sizeBytes: number;
```

- *Type:* number

The size for the tmpfs mount in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#size_bytes Container#size_bytes}

---

### ContainerMountsVolumeOptions <a name="ContainerMountsVolumeOptions" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerMountsVolumeOptions: container.ContainerMountsVolumeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.driverName">driverName</a></code> | <code>string</code> | Name of the driver to use to create the volume. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.driverOptions">driverOptions</a></code> | <code>{[ key: string ]: string}</code> | key/value map of driver specific options. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.labels">labels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>[]</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.noCopy">noCopy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Populate volume with data from the target. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.subpath">subpath</a></code> | <code>string</code> | Path within the volume to mount. Requires docker server version 1.45 or higher. |

---

##### `driverName`<sup>Optional</sup> <a name="driverName" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.driverName"></a>

```typescript
public readonly driverName: string;
```

- *Type:* string

Name of the driver to use to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#driver_name Container#driver_name}

---

##### `driverOptions`<sup>Optional</sup> <a name="driverOptions" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.driverOptions"></a>

```typescript
public readonly driverOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

key/value map of driver specific options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#driver_options Container#driver_options}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.labels"></a>

```typescript
public readonly labels: IResolvable | ContainerMountsVolumeOptionsLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>[]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#labels Container#labels}

---

##### `noCopy`<sup>Optional</sup> <a name="noCopy" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.noCopy"></a>

```typescript
public readonly noCopy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Populate volume with data from the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#no_copy Container#no_copy}

---

##### `subpath`<sup>Optional</sup> <a name="subpath" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.subpath"></a>

```typescript
public readonly subpath: string;
```

- *Type:* string

Path within the volume to mount. Requires docker server version 1.45 or higher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#subpath Container#subpath}

---

### ContainerMountsVolumeOptionsLabels <a name="ContainerMountsVolumeOptionsLabels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerMountsVolumeOptionsLabels: container.ContainerMountsVolumeOptionsLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.property.label">label</a></code> | <code>string</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.property.value">value</a></code> | <code>string</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#label Container#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#value Container#value}

---

### ContainerNetworkData <a name="ContainerNetworkData" id="@cdktf/provider-docker.container.ContainerNetworkData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerNetworkData.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerNetworkData: container.ContainerNetworkData = { ... }
```


### ContainerNetworksAdvanced <a name="ContainerNetworksAdvanced" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerNetworksAdvanced: container.ContainerNetworksAdvanced = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.name">name</a></code> | <code>string</code> | The name or id of the network to use. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.aliases">aliases</a></code> | <code>string[]</code> | The network aliases of the container in the specific network. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | The IPV4 address of the container in the specific network. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | The IPV6 address of the container in the specific network. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name or id of the network to use.

You can use `name` or `id` attribute from a `docker_network` resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#name Container#name}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.aliases"></a>

```typescript
public readonly aliases: string[];
```

- *Type:* string[]

The network aliases of the container in the specific network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#aliases Container#aliases}

---

##### `ipv4Address`<sup>Optional</sup> <a name="ipv4Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

The IPV4 address of the container in the specific network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#ipv4_address Container#ipv4_address}

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

The IPV6 address of the container in the specific network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#ipv6_address Container#ipv6_address}

---

### ContainerPorts <a name="ContainerPorts" id="@cdktf/provider-docker.container.ContainerPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerPorts.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerPorts: container.ContainerPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPorts.property.internal">internal</a></code> | <code>number</code> | Port within the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPorts.property.external">external</a></code> | <code>number</code> | Port exposed out of the container. If not given a free random port `>= 32768` will be used. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPorts.property.ip">ip</a></code> | <code>string</code> | IP address/mask that can access this port. Defaults to `0.0.0.0`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPorts.property.protocol">protocol</a></code> | <code>string</code> | Protocol that can be used over this port. Defaults to `tcp`. |

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-docker.container.ContainerPorts.property.internal"></a>

```typescript
public readonly internal: number;
```

- *Type:* number

Port within the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#internal Container#internal}

---

##### `external`<sup>Optional</sup> <a name="external" id="@cdktf/provider-docker.container.ContainerPorts.property.external"></a>

```typescript
public readonly external: number;
```

- *Type:* number

Port exposed out of the container. If not given a free random port `>= 32768` will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#external Container#external}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-docker.container.ContainerPorts.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

IP address/mask that can access this port. Defaults to `0.0.0.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#ip Container#ip}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-docker.container.ContainerPorts.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Protocol that can be used over this port. Defaults to `tcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#protocol Container#protocol}

---

### ContainerUlimit <a name="ContainerUlimit" id="@cdktf/provider-docker.container.ContainerUlimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerUlimit.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerUlimit: container.ContainerUlimit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimit.property.hard">hard</a></code> | <code>number</code> | The hard limit. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimit.property.name">name</a></code> | <code>string</code> | The name of the ulimit. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimit.property.soft">soft</a></code> | <code>number</code> | The soft limit. |

---

##### `hard`<sup>Required</sup> <a name="hard" id="@cdktf/provider-docker.container.ContainerUlimit.property.hard"></a>

```typescript
public readonly hard: number;
```

- *Type:* number

The hard limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#hard Container#hard}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.ContainerUlimit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the ulimit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#name Container#name}

---

##### `soft`<sup>Required</sup> <a name="soft" id="@cdktf/provider-docker.container.ContainerUlimit.property.soft"></a>

```typescript
public readonly soft: number;
```

- *Type:* number

The soft limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#soft Container#soft}

---

### ContainerUpload <a name="ContainerUpload" id="@cdktf/provider-docker.container.ContainerUpload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerUpload.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerUpload: container.ContainerUpload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.file">file</a></code> | <code>string</code> | Path to the file in the container where is upload goes to. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.content">content</a></code> | <code>string</code> | Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.contentBase64">contentBase64</a></code> | <code>string</code> | Base64-encoded data that will be decoded and uploaded as raw bytes for the object content. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.executable">executable</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, the file will be uploaded with user executable permission. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.permissions">permissions</a></code> | <code>string</code> | The permission mode for the file in the container. Has precedence over `executable`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.source">source</a></code> | <code>string</code> | A filename that references a file which will be uploaded as the object content. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.sourceHash">sourceHash</a></code> | <code>string</code> | If using `source`, this will force an update if the file content has updated but the filename has not. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-docker.container.ContainerUpload.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

Path to the file in the container where is upload goes to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#file Container#file}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-docker.container.ContainerUpload.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text.

Conflicts with `content_base64` & `source`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#content Container#content}

---

##### `contentBase64`<sup>Optional</sup> <a name="contentBase64" id="@cdktf/provider-docker.container.ContainerUpload.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* string

Base64-encoded data that will be decoded and uploaded as raw bytes for the object content.

This allows safely uploading non-UTF8 binary data, but is recommended only for larger binary content such as the result of the `base64encode` interpolation function. See [here](https://github.com/terraform-providers/terraform-provider-docker/issues/48#issuecomment-374174588) for the reason. Conflicts with `content` & `source`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#content_base64 Container#content_base64}

---

##### `executable`<sup>Optional</sup> <a name="executable" id="@cdktf/provider-docker.container.ContainerUpload.property.executable"></a>

```typescript
public readonly executable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, the file will be uploaded with user executable permission. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#executable Container#executable}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-docker.container.ContainerUpload.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

The permission mode for the file in the container. Has precedence over `executable`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#permissions Container#permissions}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-docker.container.ContainerUpload.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

A filename that references a file which will be uploaded as the object content.

This allows for large file uploads that do not get stored in state. Conflicts with `content` & `content_base64`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#source Container#source}

---

##### `sourceHash`<sup>Optional</sup> <a name="sourceHash" id="@cdktf/provider-docker.container.ContainerUpload.property.sourceHash"></a>

```typescript
public readonly sourceHash: string;
```

- *Type:* string

If using `source`, this will force an update if the file content has updated but the filename has not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#source_hash Container#source_hash}

---

### ContainerVolumes <a name="ContainerVolumes" id="@cdktf/provider-docker.container.ContainerVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerVolumes.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

const containerVolumes: container.ContainerVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.containerPath">containerPath</a></code> | <code>string</code> | The path in the container where the volume will be mounted. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.fromContainer">fromContainer</a></code> | <code>string</code> | The container where the volume is coming from. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.hostPath">hostPath</a></code> | <code>string</code> | The path on the host where the volume is coming from. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, this volume will be readonly. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.volumeName">volumeName</a></code> | <code>string</code> | The name of the docker volume which should be mounted. |

---

##### `containerPath`<sup>Optional</sup> <a name="containerPath" id="@cdktf/provider-docker.container.ContainerVolumes.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

The path in the container where the volume will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#container_path Container#container_path}

---

##### `fromContainer`<sup>Optional</sup> <a name="fromContainer" id="@cdktf/provider-docker.container.ContainerVolumes.property.fromContainer"></a>

```typescript
public readonly fromContainer: string;
```

- *Type:* string

The container where the volume is coming from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#from_container Container#from_container}

---

##### `hostPath`<sup>Optional</sup> <a name="hostPath" id="@cdktf/provider-docker.container.ContainerVolumes.property.hostPath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* string

The path on the host where the volume is coming from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#host_path Container#host_path}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-docker.container.ContainerVolumes.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, this volume will be readonly. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#read_only Container#read_only}

---

##### `volumeName`<sup>Optional</sup> <a name="volumeName" id="@cdktf/provider-docker.container.ContainerVolumes.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

The name of the docker volume which should be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.4.0/docs/resources/container#volume_name Container#volume_name}

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerCapabilitiesOutputReference <a name="ContainerCapabilitiesOutputReference" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resetDrop">resetDrop</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resetAdd"></a>

```typescript
public resetAdd(): void
```

##### `resetDrop` <a name="resetDrop" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resetDrop"></a>

```typescript
public resetDrop(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.addInput">addInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.dropInput">dropInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.add">add</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.drop">drop</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.addInput"></a>

```typescript
public readonly addInput: string[];
```

- *Type:* string[]

---

##### `dropInput`<sup>Optional</sup> <a name="dropInput" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.dropInput"></a>

```typescript
public readonly dropInput: string[];
```

- *Type:* string[]

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.add"></a>

```typescript
public readonly add: string[];
```

- *Type:* string[]

---

##### `drop`<sup>Required</sup> <a name="drop" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.drop"></a>

```typescript
public readonly drop: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerCapabilities;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

---


### ContainerDevicesList <a name="ContainerDevicesList" id="@cdktf/provider-docker.container.ContainerDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerDevicesList.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerDevicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.container.ContainerDevicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.container.ContainerDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerDevicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerDevicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerDevicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerDevicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerDevicesList.get"></a>

```typescript
public get(index: number): ContainerDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerDevicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerDevicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerDevicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerDevicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerDevices[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>[]

---


### ContainerDevicesOutputReference <a name="ContainerDevicesOutputReference" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerDevicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.resetContainerPath">resetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerPath` <a name="resetContainerPath" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.resetContainerPath"></a>

```typescript
public resetContainerPath(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.resetPermissions"></a>

```typescript
public resetPermissions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.containerPathInput">containerPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.hostPathInput">hostPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.containerPath">containerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.hostPath">hostPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPathInput`<sup>Optional</sup> <a name="containerPathInput" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.containerPathInput"></a>

```typescript
public readonly containerPathInput: string;
```

- *Type:* string

---

##### `hostPathInput`<sup>Optional</sup> <a name="hostPathInput" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.hostPathInput"></a>

```typescript
public readonly hostPathInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* string

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.hostPath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerDevices;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>

---


### ContainerHealthcheckOutputReference <a name="ContainerHealthcheckOutputReference" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerHealthcheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetStartPeriod">resetStartPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetRetries` <a name="resetRetries" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetRetries"></a>

```typescript
public resetRetries(): void
```

##### `resetStartPeriod` <a name="resetStartPeriod" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetStartPeriod"></a>

```typescript
public resetStartPeriod(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startPeriodInput">startPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.testInput">testInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startPeriod">startPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.test">test</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `startPeriodInput`<sup>Optional</sup> <a name="startPeriodInput" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startPeriodInput"></a>

```typescript
public readonly startPeriodInput: string;
```

- *Type:* string

---

##### `testInput`<sup>Optional</sup> <a name="testInput" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.testInput"></a>

```typescript
public readonly testInput: string[];
```

- *Type:* string[]

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `startPeriod`<sup>Required</sup> <a name="startPeriod" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startPeriod"></a>

```typescript
public readonly startPeriod: string;
```

- *Type:* string

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.test"></a>

```typescript
public readonly test: string[];
```

- *Type:* string[]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerHealthcheck;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

---


### ContainerHostList <a name="ContainerHostList" id="@cdktf/provider-docker.container.ContainerHostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerHostList.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerHostList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.container.ContainerHostList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.container.ContainerHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerHostList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerHostList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerHostList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerHostList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerHostList.get"></a>

```typescript
public get(index: number): ContainerHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerHostList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerHostList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerHostList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerHostList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerHost[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>[]

---


### ContainerHostOutputReference <a name="ContainerHostOutputReference" id="@cdktf/provider-docker.container.ContainerHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerHostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerHostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerHostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerHostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.ipInput">ipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.ipInput"></a>

```typescript
public readonly ipInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerHost;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>

---


### ContainerLabelsList <a name="ContainerLabelsList" id="@cdktf/provider-docker.container.ContainerLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerLabelsList.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.container.ContainerLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.container.ContainerLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerLabelsList.get"></a>

```typescript
public get(index: number): ContainerLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>[]

---


### ContainerLabelsOutputReference <a name="ContainerLabelsOutputReference" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerLabels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>

---


### ContainerMountsBindOptionsOutputReference <a name="ContainerMountsBindOptionsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerMountsBindOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resetPropagation">resetPropagation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPropagation` <a name="resetPropagation" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resetPropagation"></a>

```typescript
public resetPropagation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.propagationInput">propagationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.propagation">propagation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propagationInput`<sup>Optional</sup> <a name="propagationInput" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.propagationInput"></a>

```typescript
public readonly propagationInput: string;
```

- *Type:* string

---

##### `propagation`<sup>Required</sup> <a name="propagation" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.propagation"></a>

```typescript
public readonly propagation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerMountsBindOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a>

---


### ContainerMountsList <a name="ContainerMountsList" id="@cdktf/provider-docker.container.ContainerMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsList.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.container.ContainerMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.container.ContainerMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerMountsList.get"></a>

```typescript
public get(index: number): ContainerMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>[]

---


### ContainerMountsOutputReference <a name="ContainerMountsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.putBindOptions">putBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.putTmpfsOptions">putTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.putVolumeOptions">putVolumeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetBindOptions">resetBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetTmpfsOptions">resetTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetVolumeOptions">resetVolumeOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBindOptions` <a name="putBindOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putBindOptions"></a>

```typescript
public putBindOptions(value: ContainerMountsBindOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putBindOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a>

---

##### `putTmpfsOptions` <a name="putTmpfsOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putTmpfsOptions"></a>

```typescript
public putTmpfsOptions(value: ContainerMountsTmpfsOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putTmpfsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a>

---

##### `putVolumeOptions` <a name="putVolumeOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putVolumeOptions"></a>

```typescript
public putVolumeOptions(value: ContainerMountsVolumeOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putVolumeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a>

---

##### `resetBindOptions` <a name="resetBindOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetBindOptions"></a>

```typescript
public resetBindOptions(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTmpfsOptions` <a name="resetTmpfsOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetTmpfsOptions"></a>

```typescript
public resetTmpfsOptions(): void
```

##### `resetVolumeOptions` <a name="resetVolumeOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetVolumeOptions"></a>

```typescript
public resetVolumeOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.bindOptions">bindOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference">ContainerMountsBindOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.tmpfsOptions">tmpfsOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference">ContainerMountsTmpfsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.volumeOptions">volumeOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference">ContainerMountsVolumeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.bindOptionsInput">bindOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.tmpfsOptionsInput">tmpfsOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.volumeOptionsInput">volumeOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bindOptions`<sup>Required</sup> <a name="bindOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.bindOptions"></a>

```typescript
public readonly bindOptions: ContainerMountsBindOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference">ContainerMountsBindOptionsOutputReference</a>

---

##### `tmpfsOptions`<sup>Required</sup> <a name="tmpfsOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.tmpfsOptions"></a>

```typescript
public readonly tmpfsOptions: ContainerMountsTmpfsOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference">ContainerMountsTmpfsOptionsOutputReference</a>

---

##### `volumeOptions`<sup>Required</sup> <a name="volumeOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.volumeOptions"></a>

```typescript
public readonly volumeOptions: ContainerMountsVolumeOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference">ContainerMountsVolumeOptionsOutputReference</a>

---

##### `bindOptionsInput`<sup>Optional</sup> <a name="bindOptionsInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.bindOptionsInput"></a>

```typescript
public readonly bindOptionsInput: ContainerMountsBindOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `tmpfsOptionsInput`<sup>Optional</sup> <a name="tmpfsOptionsInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.tmpfsOptionsInput"></a>

```typescript
public readonly tmpfsOptionsInput: ContainerMountsTmpfsOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `volumeOptionsInput`<sup>Optional</sup> <a name="volumeOptionsInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.volumeOptionsInput"></a>

```typescript
public readonly volumeOptionsInput: ContainerMountsVolumeOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a>

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerMounts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>

---


### ContainerMountsTmpfsOptionsOutputReference <a name="ContainerMountsTmpfsOptionsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerMountsTmpfsOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resetSizeBytes">resetSizeBytes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetSizeBytes` <a name="resetSizeBytes" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resetSizeBytes"></a>

```typescript
public resetSizeBytes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.modeInput">modeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.sizeBytesInput">sizeBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.mode">mode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.sizeBytes">sizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: number;
```

- *Type:* number

---

##### `sizeBytesInput`<sup>Optional</sup> <a name="sizeBytesInput" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.sizeBytesInput"></a>

```typescript
public readonly sizeBytesInput: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

---

##### `sizeBytes`<sup>Required</sup> <a name="sizeBytes" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.sizeBytes"></a>

```typescript
public readonly sizeBytes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerMountsTmpfsOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a>

---


### ContainerMountsVolumeOptionsLabelsList <a name="ContainerMountsVolumeOptionsLabelsList" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerMountsVolumeOptionsLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.get"></a>

```typescript
public get(index: number): ContainerMountsVolumeOptionsLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerMountsVolumeOptionsLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>[]

---


### ContainerMountsVolumeOptionsLabelsOutputReference <a name="ContainerMountsVolumeOptionsLabelsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerMountsVolumeOptionsLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerMountsVolumeOptionsLabels;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>

---


### ContainerMountsVolumeOptionsOutputReference <a name="ContainerMountsVolumeOptionsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerMountsVolumeOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetDriverName">resetDriverName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetDriverOptions">resetDriverOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetNoCopy">resetNoCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetSubpath">resetSubpath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabels` <a name="putLabels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.putLabels"></a>

```typescript
public putLabels(value: IResolvable | ContainerMountsVolumeOptionsLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.putLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>[]

---

##### `resetDriverName` <a name="resetDriverName" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetDriverName"></a>

```typescript
public resetDriverName(): void
```

##### `resetDriverOptions` <a name="resetDriverOptions" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetDriverOptions"></a>

```typescript
public resetDriverOptions(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNoCopy` <a name="resetNoCopy" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetNoCopy"></a>

```typescript
public resetNoCopy(): void
```

##### `resetSubpath` <a name="resetSubpath" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetSubpath"></a>

```typescript
public resetSubpath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList">ContainerMountsVolumeOptionsLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverNameInput">driverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverOptionsInput">driverOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.labelsInput">labelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.noCopyInput">noCopyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.subpathInput">subpathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverName">driverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverOptions">driverOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.noCopy">noCopy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.subpath">subpath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.labels"></a>

```typescript
public readonly labels: ContainerMountsVolumeOptionsLabelsList;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList">ContainerMountsVolumeOptionsLabelsList</a>

---

##### `driverNameInput`<sup>Optional</sup> <a name="driverNameInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverNameInput"></a>

```typescript
public readonly driverNameInput: string;
```

- *Type:* string

---

##### `driverOptionsInput`<sup>Optional</sup> <a name="driverOptionsInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverOptionsInput"></a>

```typescript
public readonly driverOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | ContainerMountsVolumeOptionsLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>[]

---

##### `noCopyInput`<sup>Optional</sup> <a name="noCopyInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.noCopyInput"></a>

```typescript
public readonly noCopyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subpathInput`<sup>Optional</sup> <a name="subpathInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.subpathInput"></a>

```typescript
public readonly subpathInput: string;
```

- *Type:* string

---

##### `driverName`<sup>Required</sup> <a name="driverName" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverName"></a>

```typescript
public readonly driverName: string;
```

- *Type:* string

---

##### `driverOptions`<sup>Required</sup> <a name="driverOptions" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverOptions"></a>

```typescript
public readonly driverOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `noCopy`<sup>Required</sup> <a name="noCopy" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.noCopy"></a>

```typescript
public readonly noCopy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subpath`<sup>Required</sup> <a name="subpath" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.subpath"></a>

```typescript
public readonly subpath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerMountsVolumeOptions;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a>

---


### ContainerNetworkDataList <a name="ContainerNetworkDataList" id="@cdktf/provider-docker.container.ContainerNetworkDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerNetworkDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.container.ContainerNetworkDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.container.ContainerNetworkDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerNetworkDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerNetworkDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerNetworkDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerNetworkDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerNetworkDataList.get"></a>

```typescript
public get(index: number): ContainerNetworkDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerNetworkDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerNetworkDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerNetworkDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ContainerNetworkDataOutputReference <a name="ContainerNetworkDataOutputReference" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerNetworkDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.globalIpv6Address">globalIpv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.globalIpv6PrefixLength">globalIpv6PrefixLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipPrefixLength">ipPrefixLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipv6Gateway">ipv6Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.macAddress">macAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.networkName">networkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerNetworkData">ContainerNetworkData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `globalIpv6Address`<sup>Required</sup> <a name="globalIpv6Address" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.globalIpv6Address"></a>

```typescript
public readonly globalIpv6Address: string;
```

- *Type:* string

---

##### `globalIpv6PrefixLength`<sup>Required</sup> <a name="globalIpv6PrefixLength" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.globalIpv6PrefixLength"></a>

```typescript
public readonly globalIpv6PrefixLength: number;
```

- *Type:* number

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipPrefixLength`<sup>Required</sup> <a name="ipPrefixLength" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipPrefixLength"></a>

```typescript
public readonly ipPrefixLength: number;
```

- *Type:* number

---

##### `ipv6Gateway`<sup>Required</sup> <a name="ipv6Gateway" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipv6Gateway"></a>

```typescript
public readonly ipv6Gateway: string;
```

- *Type:* string

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerNetworkData;
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerNetworkData">ContainerNetworkData</a>

---


### ContainerNetworksAdvancedList <a name="ContainerNetworksAdvancedList" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerNetworksAdvancedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.get"></a>

```typescript
public get(index: number): ContainerNetworksAdvancedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerNetworksAdvanced[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>[]

---


### ContainerNetworksAdvancedOutputReference <a name="ContainerNetworksAdvancedOutputReference" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerNetworksAdvancedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetAliases">resetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetIpv4Address">resetIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAliases` <a name="resetAliases" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetAliases"></a>

```typescript
public resetAliases(): void
```

##### `resetIpv4Address` <a name="resetIpv4Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetIpv4Address"></a>

```typescript
public resetIpv4Address(): void
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetIpv6Address"></a>

```typescript
public resetIpv6Address(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.aliasesInput">aliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv4AddressInput">ipv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.aliases">aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.aliasesInput"></a>

```typescript
public readonly aliasesInput: string[];
```

- *Type:* string[]

---

##### `ipv4AddressInput`<sup>Optional</sup> <a name="ipv4AddressInput" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv4AddressInput"></a>

```typescript
public readonly ipv4AddressInput: string;
```

- *Type:* string

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv6AddressInput"></a>

```typescript
public readonly ipv6AddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.aliases"></a>

```typescript
public readonly aliases: string[];
```

- *Type:* string[]

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerNetworksAdvanced;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>

---


### ContainerPortsList <a name="ContainerPortsList" id="@cdktf/provider-docker.container.ContainerPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerPortsList.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.container.ContainerPortsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.container.ContainerPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerPortsList.get"></a>

```typescript
public get(index: number): ContainerPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>[]

---


### ContainerPortsOutputReference <a name="ContainerPortsOutputReference" id="@cdktf/provider-docker.container.ContainerPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.resetExternal">resetExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExternal` <a name="resetExternal" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resetExternal"></a>

```typescript
public resetExternal(): void
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resetIp"></a>

```typescript
public resetIp(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.externalInput">externalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internalInput">internalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.ipInput">ipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.external">external</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internal">internal</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalInput`<sup>Optional</sup> <a name="externalInput" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.externalInput"></a>

```typescript
public readonly externalInput: number;
```

- *Type:* number

---

##### `internalInput`<sup>Optional</sup> <a name="internalInput" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internalInput"></a>

```typescript
public readonly internalInput: number;
```

- *Type:* number

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.ipInput"></a>

```typescript
public readonly ipInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.external"></a>

```typescript
public readonly external: number;
```

- *Type:* number

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internal"></a>

```typescript
public readonly internal: number;
```

- *Type:* number

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerPorts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>

---


### ContainerUlimitList <a name="ContainerUlimitList" id="@cdktf/provider-docker.container.ContainerUlimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerUlimitList.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerUlimitList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.container.ContainerUlimitList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.container.ContainerUlimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerUlimitList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerUlimitList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerUlimitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerUlimitList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerUlimitList.get"></a>

```typescript
public get(index: number): ContainerUlimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerUlimitList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerUlimitList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerUlimitList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerUlimitList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerUlimit[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>[]

---


### ContainerUlimitOutputReference <a name="ContainerUlimitOutputReference" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerUlimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.hardInput">hardInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.softInput">softInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.hard">hard</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.soft">soft</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hardInput`<sup>Optional</sup> <a name="hardInput" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.hardInput"></a>

```typescript
public readonly hardInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `softInput`<sup>Optional</sup> <a name="softInput" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.softInput"></a>

```typescript
public readonly softInput: number;
```

- *Type:* number

---

##### `hard`<sup>Required</sup> <a name="hard" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.hard"></a>

```typescript
public readonly hard: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `soft`<sup>Required</sup> <a name="soft" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.soft"></a>

```typescript
public readonly soft: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerUlimit;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>

---


### ContainerUploadList <a name="ContainerUploadList" id="@cdktf/provider-docker.container.ContainerUploadList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerUploadList.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerUploadList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.container.ContainerUploadList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.container.ContainerUploadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerUploadList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerUploadList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerUploadList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerUploadList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerUploadList.get"></a>

```typescript
public get(index: number): ContainerUploadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerUploadList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerUploadList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerUploadList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerUploadList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerUpload[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>[]

---


### ContainerUploadOutputReference <a name="ContainerUploadOutputReference" id="@cdktf/provider-docker.container.ContainerUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerUploadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetContentBase64">resetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetExecutable">resetExecutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetSourceHash">resetSourceHash</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentBase64` <a name="resetContentBase64" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetContentBase64"></a>

```typescript
public resetContentBase64(): void
```

##### `resetExecutable` <a name="resetExecutable" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetExecutable"></a>

```typescript
public resetExecutable(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSourceHash` <a name="resetSourceHash" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetSourceHash"></a>

```typescript
public resetSourceHash(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentBase64Input">contentBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.executableInput">executableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceHashInput">sourceHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentBase64">contentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.executable">executable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceHash">sourceHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentBase64Input`<sup>Optional</sup> <a name="contentBase64Input" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentBase64Input"></a>

```typescript
public readonly contentBase64Input: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `executableInput`<sup>Optional</sup> <a name="executableInput" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.executableInput"></a>

```typescript
public readonly executableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* string

---

##### `sourceHashInput`<sup>Optional</sup> <a name="sourceHashInput" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceHashInput"></a>

```typescript
public readonly sourceHashInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* string

---

##### `executable`<sup>Required</sup> <a name="executable" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.executable"></a>

```typescript
public readonly executable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `sourceHash`<sup>Required</sup> <a name="sourceHash" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceHash"></a>

```typescript
public readonly sourceHash: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerUpload;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>

---


### ContainerVolumesList <a name="ContainerVolumesList" id="@cdktf/provider-docker.container.ContainerVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerVolumesList.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-docker.container.ContainerVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.container.ContainerVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerVolumesList.get"></a>

```typescript
public get(index: number): ContainerVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>[]

---


### ContainerVolumesOutputReference <a name="ContainerVolumesOutputReference" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer"></a>

```typescript
import { container } from '@cdktf/provider-docker'

new container.ContainerVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetContainerPath">resetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetFromContainer">resetFromContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetHostPath">resetHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetVolumeName">resetVolumeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerPath` <a name="resetContainerPath" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetContainerPath"></a>

```typescript
public resetContainerPath(): void
```

##### `resetFromContainer` <a name="resetFromContainer" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetFromContainer"></a>

```typescript
public resetFromContainer(): void
```

##### `resetHostPath` <a name="resetHostPath" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetHostPath"></a>

```typescript
public resetHostPath(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetVolumeName` <a name="resetVolumeName" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetVolumeName"></a>

```typescript
public resetVolumeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.containerPathInput">containerPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fromContainerInput">fromContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.hostPathInput">hostPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.containerPath">containerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fromContainer">fromContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.hostPath">hostPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPathInput`<sup>Optional</sup> <a name="containerPathInput" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.containerPathInput"></a>

```typescript
public readonly containerPathInput: string;
```

- *Type:* string

---

##### `fromContainerInput`<sup>Optional</sup> <a name="fromContainerInput" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fromContainerInput"></a>

```typescript
public readonly fromContainerInput: string;
```

- *Type:* string

---

##### `hostPathInput`<sup>Optional</sup> <a name="hostPathInput" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.hostPathInput"></a>

```typescript
public readonly hostPathInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

---

##### `fromContainer`<sup>Required</sup> <a name="fromContainer" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fromContainer"></a>

```typescript
public readonly fromContainer: string;
```

- *Type:* string

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.hostPath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerVolumes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>

---



