# `registryImage` Submodule <a name="`registryImage` Submodule" id="@cdktf/provider-docker.registryImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RegistryImage <a name="RegistryImage" id="@cdktf/provider-docker.registryImage.RegistryImage"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image docker_registry_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.registry_image.RegistryImage;

RegistryImage.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .authConfig(RegistryImageAuthConfig)
//  .id(java.lang.String)
//  .insecureSkipVerify(java.lang.Boolean|IResolvable)
//  .keepRemotely(java.lang.Boolean|IResolvable)
//  .triggers(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Docker image. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#id RegistryImage#id}. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.insecureSkipVerify">insecureSkipVerify</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.keepRemotely">keepRemotely</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, then the Docker image won't be deleted on destroy operation. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of arbitrary strings that, when changed, will force the `docker_registry_image` resource to be replaced. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Docker image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#name RegistryImage#name}

---

##### `authConfig`<sup>Optional</sup> <a name="authConfig" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.authConfig"></a>

- *Type:* <a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#auth_config RegistryImage#auth_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#id RegistryImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.insecureSkipVerify"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#insecure_skip_verify RegistryImage#insecure_skip_verify}

---

##### `keepRemotely`<sup>Optional</sup> <a name="keepRemotely" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.keepRemotely"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, then the Docker image won't be deleted on destroy operation.

If this is false, it will delete the image from the docker registry on destroy operation. Defaults to `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#keep_remotely RegistryImage#keep_remotely}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-docker.registryImage.RegistryImage.Initializer.parameter.triggers"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of arbitrary strings that, when changed, will force the `docker_registry_image` resource to be replaced.

This can be used to repush a local image

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#triggers RegistryImage#triggers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.putAuthConfig">putAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.resetAuthConfig">resetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.resetInsecureSkipVerify">resetInsecureSkipVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.resetKeepRemotely">resetKeepRemotely</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.registryImage.RegistryImage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.registryImage.RegistryImage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.registryImage.RegistryImage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.registryImage.RegistryImage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.registryImage.RegistryImage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.registryImage.RegistryImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.registryImage.RegistryImage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-docker.registryImage.RegistryImage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.registryImage.RegistryImage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.registryImage.RegistryImage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-docker.registryImage.RegistryImage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.registryImage.RegistryImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-docker.registryImage.RegistryImage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-docker.registryImage.RegistryImage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.registryImage.RegistryImage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.registryImage.RegistryImage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-docker.registryImage.RegistryImage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.registryImage.RegistryImage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-docker.registryImage.RegistryImage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.registryImage.RegistryImage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-docker.registryImage.RegistryImage.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-docker.registryImage.RegistryImage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.registryImage.RegistryImage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthConfig` <a name="putAuthConfig" id="@cdktf/provider-docker.registryImage.RegistryImage.putAuthConfig"></a>

```java
public void putAuthConfig(RegistryImageAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.registryImage.RegistryImage.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a>

---

##### `resetAuthConfig` <a name="resetAuthConfig" id="@cdktf/provider-docker.registryImage.RegistryImage.resetAuthConfig"></a>

```java
public void resetAuthConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-docker.registryImage.RegistryImage.resetId"></a>

```java
public void resetId()
```

##### `resetInsecureSkipVerify` <a name="resetInsecureSkipVerify" id="@cdktf/provider-docker.registryImage.RegistryImage.resetInsecureSkipVerify"></a>

```java
public void resetInsecureSkipVerify()
```

##### `resetKeepRemotely` <a name="resetKeepRemotely" id="@cdktf/provider-docker.registryImage.RegistryImage.resetKeepRemotely"></a>

```java
public void resetKeepRemotely()
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-docker.registryImage.RegistryImage.resetTriggers"></a>

```java
public void resetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RegistryImage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-docker.registryImage.RegistryImage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.docker.registry_image.RegistryImage;

RegistryImage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.registryImage.RegistryImage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.registryImage.RegistryImage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.docker.registry_image.RegistryImage;

RegistryImage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.registryImage.RegistryImage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-docker.registryImage.RegistryImage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.docker.registry_image.RegistryImage;

RegistryImage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.registryImage.RegistryImage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-docker.registryImage.RegistryImage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.docker.registry_image.RegistryImage;

RegistryImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RegistryImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RegistryImage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.registryImage.RegistryImage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.registryImage.RegistryImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RegistryImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.registryImage.RegistryImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RegistryImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.registryImage.RegistryImage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RegistryImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference">RegistryImageAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.sha256Digest">sha256Digest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.authConfigInput">authConfigInput</a></code> | <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.insecureSkipVerifyInput">insecureSkipVerifyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.keepRemotelyInput">keepRemotelyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.triggersInput">triggersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.keepRemotely">keepRemotely</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.registryImage.RegistryImage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.registryImage.RegistryImage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.registryImage.RegistryImage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.registryImage.RegistryImage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-docker.registryImage.RegistryImage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.registryImage.RegistryImage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.registryImage.RegistryImage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.registryImage.RegistryImage.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.registryImage.RegistryImage.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.registryImage.RegistryImage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.registryImage.RegistryImage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.registryImage.RegistryImage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.registryImage.RegistryImage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.registryImage.RegistryImage.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authConfig`<sup>Required</sup> <a name="authConfig" id="@cdktf/provider-docker.registryImage.RegistryImage.property.authConfig"></a>

```java
public RegistryImageAuthConfigOutputReference getAuthConfig();
```

- *Type:* <a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference">RegistryImageAuthConfigOutputReference</a>

---

##### `sha256Digest`<sup>Required</sup> <a name="sha256Digest" id="@cdktf/provider-docker.registryImage.RegistryImage.property.sha256Digest"></a>

```java
public java.lang.String getSha256Digest();
```

- *Type:* java.lang.String

---

##### `authConfigInput`<sup>Optional</sup> <a name="authConfigInput" id="@cdktf/provider-docker.registryImage.RegistryImage.property.authConfigInput"></a>

```java
public RegistryImageAuthConfig getAuthConfigInput();
```

- *Type:* <a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-docker.registryImage.RegistryImage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `insecureSkipVerifyInput`<sup>Optional</sup> <a name="insecureSkipVerifyInput" id="@cdktf/provider-docker.registryImage.RegistryImage.property.insecureSkipVerifyInput"></a>

```java
public java.lang.Boolean|IResolvable getInsecureSkipVerifyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `keepRemotelyInput`<sup>Optional</sup> <a name="keepRemotelyInput" id="@cdktf/provider-docker.registryImage.RegistryImage.property.keepRemotelyInput"></a>

```java
public java.lang.Boolean|IResolvable getKeepRemotelyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.registryImage.RegistryImage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-docker.registryImage.RegistryImage.property.triggersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.registryImage.RegistryImage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `insecureSkipVerify`<sup>Required</sup> <a name="insecureSkipVerify" id="@cdktf/provider-docker.registryImage.RegistryImage.property.insecureSkipVerify"></a>

```java
public java.lang.Boolean|IResolvable getInsecureSkipVerify();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `keepRemotely`<sup>Required</sup> <a name="keepRemotely" id="@cdktf/provider-docker.registryImage.RegistryImage.property.keepRemotely"></a>

```java
public java.lang.Boolean|IResolvable getKeepRemotely();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.registryImage.RegistryImage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-docker.registryImage.RegistryImage.property.triggers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.registryImage.RegistryImage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RegistryImageAuthConfig <a name="RegistryImageAuthConfig" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.registry_image.RegistryImageAuthConfig;

RegistryImageAuthConfig.builder()
    .address(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig.property.address">address</a></code> | <code>java.lang.String</code> | The address of the Docker registry. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password for the Docker registry. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig.property.username">username</a></code> | <code>java.lang.String</code> | The username for the Docker registry. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The address of the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#address RegistryImage#address}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password for the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#password RegistryImage#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username for the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#username RegistryImage#username}

---

### RegistryImageConfig <a name="RegistryImageConfig" id="@cdktf/provider-docker.registryImage.RegistryImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.registry_image.RegistryImageConfig;

RegistryImageConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .authConfig(RegistryImageAuthConfig)
//  .id(java.lang.String)
//  .insecureSkipVerify(java.lang.Boolean|IResolvable)
//  .keepRemotely(java.lang.Boolean|IResolvable)
//  .triggers(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Docker image. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#id RegistryImage#id}. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.keepRemotely">keepRemotely</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, then the Docker image won't be deleted on destroy operation. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageConfig.property.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of arbitrary strings that, when changed, will force the `docker_registry_image` resource to be replaced. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Docker image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#name RegistryImage#name}

---

##### `authConfig`<sup>Optional</sup> <a name="authConfig" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.authConfig"></a>

```java
public RegistryImageAuthConfig getAuthConfig();
```

- *Type:* <a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#auth_config RegistryImage#auth_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#id RegistryImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.insecureSkipVerify"></a>

```java
public java.lang.Boolean|IResolvable getInsecureSkipVerify();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#insecure_skip_verify RegistryImage#insecure_skip_verify}

---

##### `keepRemotely`<sup>Optional</sup> <a name="keepRemotely" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.keepRemotely"></a>

```java
public java.lang.Boolean|IResolvable getKeepRemotely();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, then the Docker image won't be deleted on destroy operation.

If this is false, it will delete the image from the docker registry on destroy operation. Defaults to `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#keep_remotely RegistryImage#keep_remotely}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-docker.registryImage.RegistryImageConfig.property.triggers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of arbitrary strings that, when changed, will force the `docker_registry_image` resource to be replaced.

This can be used to repush a local image

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.2/docs/resources/registry_image#triggers RegistryImage#triggers}

---

## Classes <a name="Classes" id="Classes"></a>

### RegistryImageAuthConfigOutputReference <a name="RegistryImageAuthConfigOutputReference" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.registry_image.RegistryImageAuthConfigOutputReference;

new RegistryImageAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.registryImage.RegistryImageAuthConfigOutputReference.property.internalValue"></a>

```java
public RegistryImageAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.registryImage.RegistryImageAuthConfig">RegistryImageAuthConfig</a>

---



