# `dataDockerRegistryImageManifests` Submodule <a name="`dataDockerRegistryImageManifests` Submodule" id="@cdktf/provider-docker.dataDockerRegistryImageManifests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDockerRegistryImageManifests <a name="DataDockerRegistryImageManifests" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests docker_registry_image_manifests}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.data_docker_registry_image_manifests.DataDockerRegistryImageManifests;

DataDockerRegistryImageManifests.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .authConfig(DataDockerRegistryImageManifestsAuthConfig)
//  .id(java.lang.String)
//  .insecureSkipVerify(java.lang.Boolean)
//  .insecureSkipVerify(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Docker image, including any tags. e.g. `alpine:latest`. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#id DataDockerRegistryImageManifests#id}. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.insecureSkipVerify">insecureSkipVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Docker image, including any tags. e.g. `alpine:latest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#name DataDockerRegistryImageManifests#name}

---

##### `authConfig`<sup>Optional</sup> <a name="authConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.authConfig"></a>

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#auth_config DataDockerRegistryImageManifests#auth_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#id DataDockerRegistryImageManifests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.insecureSkipVerify"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#insecure_skip_verify DataDockerRegistryImageManifests#insecure_skip_verify}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAuthConfig` <a name="putAuthConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.putAuthConfig"></a>

```java
public void putAuthConfig(DataDockerRegistryImageManifestsAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

---

##### `resetAuthConfig` <a name="resetAuthConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetAuthConfig"></a>

```java
public void resetAuthConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetId"></a>

```java
public void resetId()
```

##### `resetInsecureSkipVerify` <a name="resetInsecureSkipVerify" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetInsecureSkipVerify"></a>

```java
public void resetInsecureSkipVerify()
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

```java
import com.hashicorp.cdktf.providers.docker.data_docker_registry_image_manifests.DataDockerRegistryImageManifests;

DataDockerRegistryImageManifests.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.docker.data_docker_registry_image_manifests.DataDockerRegistryImageManifests;

DataDockerRegistryImageManifests.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.docker.data_docker_registry_image_manifests.DataDockerRegistryImageManifests;

DataDockerRegistryImageManifests.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.docker.data_docker_registry_image_manifests.DataDockerRegistryImageManifests;

DataDockerRegistryImageManifests.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDockerRegistryImageManifests.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDockerRegistryImageManifests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDockerRegistryImageManifests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDockerRegistryImageManifests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDockerRegistryImageManifests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference">DataDockerRegistryImageManifestsAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.manifests">manifests</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList">DataDockerRegistryImageManifestsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.authConfigInput">authConfigInput</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.insecureSkipVerifyInput">insecureSkipVerifyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `authConfig`<sup>Required</sup> <a name="authConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.authConfig"></a>

```java
public DataDockerRegistryImageManifestsAuthConfigOutputReference getAuthConfig();
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference">DataDockerRegistryImageManifestsAuthConfigOutputReference</a>

---

##### `manifests`<sup>Required</sup> <a name="manifests" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.manifests"></a>

```java
public DataDockerRegistryImageManifestsManifestsList getManifests();
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList">DataDockerRegistryImageManifestsManifestsList</a>

---

##### `authConfigInput`<sup>Optional</sup> <a name="authConfigInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.authConfigInput"></a>

```java
public DataDockerRegistryImageManifestsAuthConfig getAuthConfigInput();
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `insecureSkipVerifyInput`<sup>Optional</sup> <a name="insecureSkipVerifyInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.insecureSkipVerifyInput"></a>

```java
public java.lang.Object getInsecureSkipVerifyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `insecureSkipVerify`<sup>Required</sup> <a name="insecureSkipVerify" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.insecureSkipVerify"></a>

```java
public java.lang.Object getInsecureSkipVerify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDockerRegistryImageManifestsAuthConfig <a name="DataDockerRegistryImageManifestsAuthConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.data_docker_registry_image_manifests.DataDockerRegistryImageManifestsAuthConfig;

DataDockerRegistryImageManifestsAuthConfig.builder()
    .address(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.address">address</a></code> | <code>java.lang.String</code> | The address of the Docker registry. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password for the Docker registry. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.username">username</a></code> | <code>java.lang.String</code> | The username for the Docker registry. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The address of the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#address DataDockerRegistryImageManifests#address}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password for the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#password DataDockerRegistryImageManifests#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username for the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#username DataDockerRegistryImageManifests#username}

---

### DataDockerRegistryImageManifestsConfig <a name="DataDockerRegistryImageManifestsConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.data_docker_registry_image_manifests.DataDockerRegistryImageManifestsConfig;

DataDockerRegistryImageManifestsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .authConfig(DataDockerRegistryImageManifestsAuthConfig)
//  .id(java.lang.String)
//  .insecureSkipVerify(java.lang.Boolean)
//  .insecureSkipVerify(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Docker image, including any tags. e.g. `alpine:latest`. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#id DataDockerRegistryImageManifests#id}. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Docker image, including any tags. e.g. `alpine:latest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#name DataDockerRegistryImageManifests#name}

---

##### `authConfig`<sup>Optional</sup> <a name="authConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.authConfig"></a>

```java
public DataDockerRegistryImageManifestsAuthConfig getAuthConfig();
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#auth_config DataDockerRegistryImageManifests#auth_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#id DataDockerRegistryImageManifests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.insecureSkipVerify"></a>

```java
public java.lang.Object getInsecureSkipVerify();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.1/docs/data-sources/registry_image_manifests#insecure_skip_verify DataDockerRegistryImageManifests#insecure_skip_verify}

---

### DataDockerRegistryImageManifestsManifests <a name="DataDockerRegistryImageManifestsManifests" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.data_docker_registry_image_manifests.DataDockerRegistryImageManifestsManifests;

DataDockerRegistryImageManifestsManifests.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDockerRegistryImageManifestsAuthConfigOutputReference <a name="DataDockerRegistryImageManifestsAuthConfigOutputReference" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.data_docker_registry_image_manifests.DataDockerRegistryImageManifestsAuthConfigOutputReference;

new DataDockerRegistryImageManifestsAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.internalValue"></a>

```java
public DataDockerRegistryImageManifestsAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

---


### DataDockerRegistryImageManifestsManifestsList <a name="DataDockerRegistryImageManifestsManifestsList" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.data_docker_registry_image_manifests.DataDockerRegistryImageManifestsManifestsList;

new DataDockerRegistryImageManifestsManifestsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.get"></a>

```java
public DataDockerRegistryImageManifestsManifestsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDockerRegistryImageManifestsManifestsOutputReference <a name="DataDockerRegistryImageManifestsManifestsOutputReference" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.data_docker_registry_image_manifests.DataDockerRegistryImageManifestsManifestsOutputReference;

new DataDockerRegistryImageManifestsManifestsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.architecture">architecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.mediaType">mediaType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.os">os</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.sha256Digest">sha256Digest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests">DataDockerRegistryImageManifestsManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

---

##### `mediaType`<sup>Required</sup> <a name="mediaType" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.mediaType"></a>

```java
public java.lang.String getMediaType();
```

- *Type:* java.lang.String

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.os"></a>

```java
public java.lang.String getOs();
```

- *Type:* java.lang.String

---

##### `sha256Digest`<sup>Required</sup> <a name="sha256Digest" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.sha256Digest"></a>

```java
public java.lang.String getSha256Digest();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.internalValue"></a>

```java
public DataDockerRegistryImageManifestsManifests getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests">DataDockerRegistryImageManifestsManifests</a>

---



