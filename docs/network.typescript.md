# `network` Submodule <a name="`network` Submodule" id="@cdktf/provider-docker.network"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Network <a name="Network" id="@cdktf/provider-docker.network.Network"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/r/network docker_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.network.Network.Initializer"></a>

```typescript
import { network } from '@cdktf/provider-docker'

new network.Network(scope: Construct, id: string, config: NetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.network.NetworkConfig">NetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.network.Network.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.network.Network.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-docker.network.Network.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.network.NetworkConfig">NetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.Network.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.network.Network.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.network.Network.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.network.Network.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.network.Network.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.putIpamConfig">putIpamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetAttachable">resetAttachable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetCheckDuplicate">resetCheckDuplicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetDriver">resetDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetIngress">resetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetInternal">resetInternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetIpamConfig">resetIpamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetIpamDriver">resetIpamDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetIpamOptions">resetIpamOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetIpv6">resetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetOptions">resetOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.network.Network.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.network.Network.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.network.Network.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.network.Network.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.network.Network.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.network.Network.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.network.Network.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.network.Network.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.network.Network.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.network.Network.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.network.Network.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.network.Network.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.network.Network.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.network.Network.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.network.Network.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.network.Network.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.network.Network.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.network.Network.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.network.Network.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putIpamConfig` <a name="putIpamConfig" id="@cdktf/provider-docker.network.Network.putIpamConfig"></a>

```typescript
public putIpamConfig(value: IResolvable | NetworkIpamConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.network.Network.putIpamConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>[]

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-docker.network.Network.putLabels"></a>

```typescript
public putLabels(value: IResolvable | NetworkLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.network.Network.putLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>[]

---

##### `resetAttachable` <a name="resetAttachable" id="@cdktf/provider-docker.network.Network.resetAttachable"></a>

```typescript
public resetAttachable(): void
```

##### `resetCheckDuplicate` <a name="resetCheckDuplicate" id="@cdktf/provider-docker.network.Network.resetCheckDuplicate"></a>

```typescript
public resetCheckDuplicate(): void
```

##### `resetDriver` <a name="resetDriver" id="@cdktf/provider-docker.network.Network.resetDriver"></a>

```typescript
public resetDriver(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-docker.network.Network.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngress` <a name="resetIngress" id="@cdktf/provider-docker.network.Network.resetIngress"></a>

```typescript
public resetIngress(): void
```

##### `resetInternal` <a name="resetInternal" id="@cdktf/provider-docker.network.Network.resetInternal"></a>

```typescript
public resetInternal(): void
```

##### `resetIpamConfig` <a name="resetIpamConfig" id="@cdktf/provider-docker.network.Network.resetIpamConfig"></a>

```typescript
public resetIpamConfig(): void
```

##### `resetIpamDriver` <a name="resetIpamDriver" id="@cdktf/provider-docker.network.Network.resetIpamDriver"></a>

```typescript
public resetIpamDriver(): void
```

##### `resetIpamOptions` <a name="resetIpamOptions" id="@cdktf/provider-docker.network.Network.resetIpamOptions"></a>

```typescript
public resetIpamOptions(): void
```

##### `resetIpv6` <a name="resetIpv6" id="@cdktf/provider-docker.network.Network.resetIpv6"></a>

```typescript
public resetIpv6(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-docker.network.Network.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-docker.network.Network.resetOptions"></a>

```typescript
public resetOptions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.Network.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.network.Network.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-docker.network.Network.isConstruct"></a>

```typescript
import { network } from '@cdktf/provider-docker'

network.Network.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.network.Network.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.network.Network.isTerraformElement"></a>

```typescript
import { network } from '@cdktf/provider-docker'

network.Network.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.network.Network.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-docker.network.Network.isTerraformResource"></a>

```typescript
import { network } from '@cdktf/provider-docker'

network.Network.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.network.Network.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.Network.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.network.Network.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamConfig">ipamConfig</a></code> | <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList">NetworkIpamConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList">NetworkLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.attachableInput">attachableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.checkDuplicateInput">checkDuplicateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.driverInput">driverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ingressInput">ingressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.internalInput">internalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamConfigInput">ipamConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamDriverInput">ipamDriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamOptionsInput">ipamOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipv6Input">ipv6Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.labelsInput">labelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.attachable">attachable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.checkDuplicate">checkDuplicate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.driver">driver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ingress">ingress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.internal">internal</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamDriver">ipamDriver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamOptions">ipamOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipv6">ipv6</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.network.Network.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.network.Network.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.network.Network.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.network.Network.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-docker.network.Network.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.network.Network.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.network.Network.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.network.Network.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.network.Network.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.network.Network.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.network.Network.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.network.Network.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.network.Network.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.network.Network.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipamConfig`<sup>Required</sup> <a name="ipamConfig" id="@cdktf/provider-docker.network.Network.property.ipamConfig"></a>

```typescript
public readonly ipamConfig: NetworkIpamConfigList;
```

- *Type:* <a href="#@cdktf/provider-docker.network.NetworkIpamConfigList">NetworkIpamConfigList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.network.Network.property.labels"></a>

```typescript
public readonly labels: NetworkLabelsList;
```

- *Type:* <a href="#@cdktf/provider-docker.network.NetworkLabelsList">NetworkLabelsList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.network.Network.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `attachableInput`<sup>Optional</sup> <a name="attachableInput" id="@cdktf/provider-docker.network.Network.property.attachableInput"></a>

```typescript
public readonly attachableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `checkDuplicateInput`<sup>Optional</sup> <a name="checkDuplicateInput" id="@cdktf/provider-docker.network.Network.property.checkDuplicateInput"></a>

```typescript
public readonly checkDuplicateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `driverInput`<sup>Optional</sup> <a name="driverInput" id="@cdktf/provider-docker.network.Network.property.driverInput"></a>

```typescript
public readonly driverInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-docker.network.Network.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/provider-docker.network.Network.property.ingressInput"></a>

```typescript
public readonly ingressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalInput`<sup>Optional</sup> <a name="internalInput" id="@cdktf/provider-docker.network.Network.property.internalInput"></a>

```typescript
public readonly internalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipamConfigInput`<sup>Optional</sup> <a name="ipamConfigInput" id="@cdktf/provider-docker.network.Network.property.ipamConfigInput"></a>

```typescript
public readonly ipamConfigInput: IResolvable | NetworkIpamConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>[]

---

##### `ipamDriverInput`<sup>Optional</sup> <a name="ipamDriverInput" id="@cdktf/provider-docker.network.Network.property.ipamDriverInput"></a>

```typescript
public readonly ipamDriverInput: string;
```

- *Type:* string

---

##### `ipamOptionsInput`<sup>Optional</sup> <a name="ipamOptionsInput" id="@cdktf/provider-docker.network.Network.property.ipamOptionsInput"></a>

```typescript
public readonly ipamOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ipv6Input`<sup>Optional</sup> <a name="ipv6Input" id="@cdktf/provider-docker.network.Network.property.ipv6Input"></a>

```typescript
public readonly ipv6Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-docker.network.Network.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | NetworkLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.network.Network.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-docker.network.Network.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `attachable`<sup>Required</sup> <a name="attachable" id="@cdktf/provider-docker.network.Network.property.attachable"></a>

```typescript
public readonly attachable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `checkDuplicate`<sup>Required</sup> <a name="checkDuplicate" id="@cdktf/provider-docker.network.Network.property.checkDuplicate"></a>

```typescript
public readonly checkDuplicate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-docker.network.Network.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.network.Network.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-docker.network.Network.property.ingress"></a>

```typescript
public readonly ingress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-docker.network.Network.property.internal"></a>

```typescript
public readonly internal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipamDriver`<sup>Required</sup> <a name="ipamDriver" id="@cdktf/provider-docker.network.Network.property.ipamDriver"></a>

```typescript
public readonly ipamDriver: string;
```

- *Type:* string

---

##### `ipamOptions`<sup>Required</sup> <a name="ipamOptions" id="@cdktf/provider-docker.network.Network.property.ipamOptions"></a>

```typescript
public readonly ipamOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-docker.network.Network.property.ipv6"></a>

```typescript
public readonly ipv6: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.network.Network.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-docker.network.Network.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.Network.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.network.Network.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConfig <a name="NetworkConfig" id="@cdktf/provider-docker.network.NetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.network.NetworkConfig.Initializer"></a>

```typescript
import { network } from '@cdktf/provider-docker'

const networkConfig: network.NetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.name">name</a></code> | <code>string</code> | The name of the Docker network. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.attachable">attachable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable manual container attachment to the network. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.checkDuplicate">checkDuplicate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Requests daemon to check for networks with same name. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.driver">driver</a></code> | <code>string</code> | The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#id Network#id}. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.ingress">ingress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Create swarm routing-mesh network. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.internal">internal</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the network is internal. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.ipamConfig">ipamConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>[]</code> | ipam_config block. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.ipamDriver">ipamDriver</a></code> | <code>string</code> | Driver used by the custom IP scheme of the network. Defaults to `default`. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.ipamOptions">ipamOptions</a></code> | <code>{[ key: string ]: string}</code> | Provide explicit options to the IPAM driver. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.ipv6">ipv6</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable IPv6 networking. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.labels">labels</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>[]</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.network.NetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.network.NetworkConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.network.NetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.network.NetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.network.NetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.network.NetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.network.NetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.network.NetworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Docker network.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#name Network#name}

---

##### `attachable`<sup>Optional</sup> <a name="attachable" id="@cdktf/provider-docker.network.NetworkConfig.property.attachable"></a>

```typescript
public readonly attachable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable manual container attachment to the network.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#attachable Network#attachable}

---

##### `checkDuplicate`<sup>Optional</sup> <a name="checkDuplicate" id="@cdktf/provider-docker.network.NetworkConfig.property.checkDuplicate"></a>

```typescript
public readonly checkDuplicate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Requests daemon to check for networks with same name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#check_duplicate Network#check_duplicate}

---

##### `driver`<sup>Optional</sup> <a name="driver" id="@cdktf/provider-docker.network.NetworkConfig.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#driver Network#driver}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.network.NetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#id Network#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-docker.network.NetworkConfig.property.ingress"></a>

```typescript
public readonly ingress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Create swarm routing-mesh network. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#ingress Network#ingress}

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-docker.network.NetworkConfig.property.internal"></a>

```typescript
public readonly internal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the network is internal.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#internal Network#internal}

---

##### `ipamConfig`<sup>Optional</sup> <a name="ipamConfig" id="@cdktf/provider-docker.network.NetworkConfig.property.ipamConfig"></a>

```typescript
public readonly ipamConfig: IResolvable | NetworkIpamConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>[]

ipam_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#ipam_config Network#ipam_config}

---

##### `ipamDriver`<sup>Optional</sup> <a name="ipamDriver" id="@cdktf/provider-docker.network.NetworkConfig.property.ipamDriver"></a>

```typescript
public readonly ipamDriver: string;
```

- *Type:* string

Driver used by the custom IP scheme of the network. Defaults to `default`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#ipam_driver Network#ipam_driver}

---

##### `ipamOptions`<sup>Optional</sup> <a name="ipamOptions" id="@cdktf/provider-docker.network.NetworkConfig.property.ipamOptions"></a>

```typescript
public readonly ipamOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Provide explicit options to the IPAM driver.

Valid options vary with `ipam_driver` and refer to that driver's documentation for more details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#ipam_options Network#ipam_options}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-docker.network.NetworkConfig.property.ipv6"></a>

```typescript
public readonly ipv6: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable IPv6 networking. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#ipv6 Network#ipv6}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.network.NetworkConfig.property.labels"></a>

```typescript
public readonly labels: IResolvable | NetworkLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>[]

labels block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#labels Network#labels}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-docker.network.NetworkConfig.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#options Network#options}

---

### NetworkIpamConfig <a name="NetworkIpamConfig" id="@cdktf/provider-docker.network.NetworkIpamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.network.NetworkIpamConfig.Initializer"></a>

```typescript
import { network } from '@cdktf/provider-docker'

const networkIpamConfig: network.NetworkIpamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfig.property.auxAddress">auxAddress</a></code> | <code>{[ key: string ]: string}</code> | Auxiliary IPv4 or IPv6 addresses used by Network driver. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfig.property.gateway">gateway</a></code> | <code>string</code> | The IP address of the gateway. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfig.property.ipRange">ipRange</a></code> | <code>string</code> | The ip range in CIDR form. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfig.property.subnet">subnet</a></code> | <code>string</code> | The subnet in CIDR form. |

---

##### `auxAddress`<sup>Optional</sup> <a name="auxAddress" id="@cdktf/provider-docker.network.NetworkIpamConfig.property.auxAddress"></a>

```typescript
public readonly auxAddress: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Auxiliary IPv4 or IPv6 addresses used by Network driver.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#aux_address Network#aux_address}

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="@cdktf/provider-docker.network.NetworkIpamConfig.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

The IP address of the gateway.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#gateway Network#gateway}

---

##### `ipRange`<sup>Optional</sup> <a name="ipRange" id="@cdktf/provider-docker.network.NetworkIpamConfig.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

The ip range in CIDR form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#ip_range Network#ip_range}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-docker.network.NetworkIpamConfig.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

The subnet in CIDR form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#subnet Network#subnet}

---

### NetworkLabels <a name="NetworkLabels" id="@cdktf/provider-docker.network.NetworkLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.network.NetworkLabels.Initializer"></a>

```typescript
import { network } from '@cdktf/provider-docker'

const networkLabels: network.NetworkLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabels.property.label">label</a></code> | <code>string</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabels.property.value">value</a></code> | <code>string</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.network.NetworkLabels.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Name of the label.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#label Network#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.network.NetworkLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of the label.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/network#value Network#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkIpamConfigList <a name="NetworkIpamConfigList" id="@cdktf/provider-docker.network.NetworkIpamConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer"></a>

```typescript
import { network } from '@cdktf/provider-docker'

new network.NetworkIpamConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.network.NetworkIpamConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.network.NetworkIpamConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.network.NetworkIpamConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.network.NetworkIpamConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.network.NetworkIpamConfigList.get"></a>

```typescript
public get(index: number): NetworkIpamConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.network.NetworkIpamConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.network.NetworkIpamConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.network.NetworkIpamConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.network.NetworkIpamConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkIpamConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a>[]

---


### NetworkIpamConfigOutputReference <a name="NetworkIpamConfigOutputReference" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer"></a>

```typescript
import { network } from '@cdktf/provider-docker'

new network.NetworkIpamConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetAuxAddress">resetAuxAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetGateway">resetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetIpRange">resetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetSubnet">resetSubnet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuxAddress` <a name="resetAuxAddress" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetAuxAddress"></a>

```typescript
public resetAuxAddress(): void
```

##### `resetGateway` <a name="resetGateway" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetGateway"></a>

```typescript
public resetGateway(): void
```

##### `resetIpRange` <a name="resetIpRange" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetIpRange"></a>

```typescript
public resetIpRange(): void
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetSubnet"></a>

```typescript
public resetSubnet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.auxAddressInput">auxAddressInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.gatewayInput">gatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.ipRangeInput">ipRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.subnetInput">subnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.auxAddress">auxAddress</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.ipRange">ipRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auxAddressInput`<sup>Optional</sup> <a name="auxAddressInput" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.auxAddressInput"></a>

```typescript
public readonly auxAddressInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: string;
```

- *Type:* string

---

##### `ipRangeInput`<sup>Optional</sup> <a name="ipRangeInput" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.ipRangeInput"></a>

```typescript
public readonly ipRangeInput: string;
```

- *Type:* string

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.subnetInput"></a>

```typescript
public readonly subnetInput: string;
```

- *Type:* string

---

##### `auxAddress`<sup>Required</sup> <a name="auxAddress" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.auxAddress"></a>

```typescript
public readonly auxAddress: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkIpamConfig | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-docker.network.NetworkIpamConfig">NetworkIpamConfig</a> | cdktf.IResolvable

---


### NetworkLabelsList <a name="NetworkLabelsList" id="@cdktf/provider-docker.network.NetworkLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.network.NetworkLabelsList.Initializer"></a>

```typescript
import { network } from '@cdktf/provider-docker'

new network.NetworkLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.network.NetworkLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.network.NetworkLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.network.NetworkLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.network.NetworkLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.network.NetworkLabelsList.get"></a>

```typescript
public get(index: number): NetworkLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.network.NetworkLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.network.NetworkLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.network.NetworkLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.network.NetworkLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a>[]

---


### NetworkLabelsOutputReference <a name="NetworkLabelsOutputReference" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer"></a>

```typescript
import { network } from '@cdktf/provider-docker'

new network.NetworkLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkLabels | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-docker.network.NetworkLabels">NetworkLabels</a> | cdktf.IResolvable

---



