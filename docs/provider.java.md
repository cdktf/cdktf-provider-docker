# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-docker.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DockerProvider <a name="DockerProvider" id="@cdktf/provider-docker.provider.DockerProvider"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs docker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.provider.DockerProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.provider.DockerProvider;

DockerProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .caMaterial(java.lang.String)
//  .certMaterial(java.lang.String)
//  .certPath(java.lang.String)
//  .context(java.lang.String)
//  .disableDockerDaemonCheck(java.lang.Boolean)
//  .disableDockerDaemonCheck(IResolvable)
//  .host(java.lang.String)
//  .keyMaterial(java.lang.String)
//  .registryAuth(IResolvable)
//  .registryAuth(java.util.List<DockerProviderRegistryAuth>)
//  .sshOpts(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.caMaterial">caMaterial</a></code> | <code>java.lang.String</code> | PEM-encoded content of Docker host CA certificate. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.certMaterial">certMaterial</a></code> | <code>java.lang.String</code> | PEM-encoded content of Docker client certificate. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.certPath">certPath</a></code> | <code>java.lang.String</code> | Path to directory with Docker TLS config. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.context">context</a></code> | <code>java.lang.String</code> | The name of the Docker context to use. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.disableDockerDaemonCheck">disableDockerDaemonCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to `true`, the provider will not check if the Docker daemon is running. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | The Docker daemon address. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.keyMaterial">keyMaterial</a></code> | <code>java.lang.String</code> | PEM-encoded content of Docker client private key. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.registryAuth">registryAuth</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>></code> | registry_auth block. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.sshOpts">sshOpts</a></code> | <code>java.util.List<java.lang.String></code> | Additional SSH option flags to be appended when using `ssh://` protocol. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#alias DockerProvider#alias}

---

##### `caMaterial`<sup>Optional</sup> <a name="caMaterial" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.caMaterial"></a>

- *Type:* java.lang.String

PEM-encoded content of Docker host CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#ca_material DockerProvider#ca_material}

---

##### `certMaterial`<sup>Optional</sup> <a name="certMaterial" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.certMaterial"></a>

- *Type:* java.lang.String

PEM-encoded content of Docker client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#cert_material DockerProvider#cert_material}

---

##### `certPath`<sup>Optional</sup> <a name="certPath" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.certPath"></a>

- *Type:* java.lang.String

Path to directory with Docker TLS config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#cert_path DockerProvider#cert_path}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.context"></a>

- *Type:* java.lang.String

The name of the Docker context to use.

Can also be set via `DOCKER_CONTEXT` environment variable. Overrides the `host` if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#context DockerProvider#context}

---

##### `disableDockerDaemonCheck`<sup>Optional</sup> <a name="disableDockerDaemonCheck" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.disableDockerDaemonCheck"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to `true`, the provider will not check if the Docker daemon is running.

This is useful for resources/data_sourcess that do not require a running Docker daemon, such as the data source `docker_registry_image`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#disable_docker_daemon_check DockerProvider#disable_docker_daemon_check}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.host"></a>

- *Type:* java.lang.String

The Docker daemon address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#host DockerProvider#host}

---

##### `keyMaterial`<sup>Optional</sup> <a name="keyMaterial" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.keyMaterial"></a>

- *Type:* java.lang.String

PEM-encoded content of Docker client private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#key_material DockerProvider#key_material}

---

##### `registryAuth`<sup>Optional</sup> <a name="registryAuth" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.registryAuth"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>>

registry_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#registry_auth DockerProvider#registry_auth}

---

##### `sshOpts`<sup>Optional</sup> <a name="sshOpts" id="@cdktf/provider-docker.provider.DockerProvider.Initializer.parameter.sshOpts"></a>

- *Type:* java.util.List<java.lang.String>

Additional SSH option flags to be appended when using `ssh://` protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#ssh_opts DockerProvider#ssh_opts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetCaMaterial">resetCaMaterial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetCertMaterial">resetCertMaterial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetCertPath">resetCertPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetDisableDockerDaemonCheck">resetDisableDockerDaemonCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetKeyMaterial">resetKeyMaterial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetRegistryAuth">resetRegistryAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.resetSshOpts">resetSshOpts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.provider.DockerProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.provider.DockerProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.provider.DockerProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.provider.DockerProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.provider.DockerProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.provider.DockerProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.provider.DockerProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-docker.provider.DockerProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.provider.DockerProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.provider.DockerProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-docker.provider.DockerProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetCaMaterial` <a name="resetCaMaterial" id="@cdktf/provider-docker.provider.DockerProvider.resetCaMaterial"></a>

```java
public void resetCaMaterial()
```

##### `resetCertMaterial` <a name="resetCertMaterial" id="@cdktf/provider-docker.provider.DockerProvider.resetCertMaterial"></a>

```java
public void resetCertMaterial()
```

##### `resetCertPath` <a name="resetCertPath" id="@cdktf/provider-docker.provider.DockerProvider.resetCertPath"></a>

```java
public void resetCertPath()
```

##### `resetContext` <a name="resetContext" id="@cdktf/provider-docker.provider.DockerProvider.resetContext"></a>

```java
public void resetContext()
```

##### `resetDisableDockerDaemonCheck` <a name="resetDisableDockerDaemonCheck" id="@cdktf/provider-docker.provider.DockerProvider.resetDisableDockerDaemonCheck"></a>

```java
public void resetDisableDockerDaemonCheck()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-docker.provider.DockerProvider.resetHost"></a>

```java
public void resetHost()
```

##### `resetKeyMaterial` <a name="resetKeyMaterial" id="@cdktf/provider-docker.provider.DockerProvider.resetKeyMaterial"></a>

```java
public void resetKeyMaterial()
```

##### `resetRegistryAuth` <a name="resetRegistryAuth" id="@cdktf/provider-docker.provider.DockerProvider.resetRegistryAuth"></a>

```java
public void resetRegistryAuth()
```

##### `resetSshOpts` <a name="resetSshOpts" id="@cdktf/provider-docker.provider.DockerProvider.resetSshOpts"></a>

```java
public void resetSshOpts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DockerProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-docker.provider.DockerProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.docker.provider.DockerProvider;

DockerProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.provider.DockerProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.provider.DockerProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.docker.provider.DockerProvider;

DockerProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.provider.DockerProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-docker.provider.DockerProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.docker.provider.DockerProvider;

DockerProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.provider.DockerProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.docker.provider.DockerProvider;

DockerProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DockerProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DockerProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DockerProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DockerProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.provider.DockerProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DockerProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.caMaterialInput">caMaterialInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.certMaterialInput">certMaterialInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.certPathInput">certPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.contextInput">contextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.disableDockerDaemonCheckInput">disableDockerDaemonCheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.keyMaterialInput">keyMaterialInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.registryAuthInput">registryAuthInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.sshOptsInput">sshOptsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.caMaterial">caMaterial</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.certMaterial">certMaterial</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.certPath">certPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.context">context</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.disableDockerDaemonCheck">disableDockerDaemonCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.keyMaterial">keyMaterial</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.registryAuth">registryAuth</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.sshOpts">sshOpts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.provider.DockerProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.provider.DockerProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.provider.DockerProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.provider.DockerProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-docker.provider.DockerProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.provider.DockerProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.provider.DockerProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-docker.provider.DockerProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-docker.provider.DockerProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-docker.provider.DockerProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `caMaterialInput`<sup>Optional</sup> <a name="caMaterialInput" id="@cdktf/provider-docker.provider.DockerProvider.property.caMaterialInput"></a>

```java
public java.lang.String getCaMaterialInput();
```

- *Type:* java.lang.String

---

##### `certMaterialInput`<sup>Optional</sup> <a name="certMaterialInput" id="@cdktf/provider-docker.provider.DockerProvider.property.certMaterialInput"></a>

```java
public java.lang.String getCertMaterialInput();
```

- *Type:* java.lang.String

---

##### `certPathInput`<sup>Optional</sup> <a name="certPathInput" id="@cdktf/provider-docker.provider.DockerProvider.property.certPathInput"></a>

```java
public java.lang.String getCertPathInput();
```

- *Type:* java.lang.String

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-docker.provider.DockerProvider.property.contextInput"></a>

```java
public java.lang.String getContextInput();
```

- *Type:* java.lang.String

---

##### `disableDockerDaemonCheckInput`<sup>Optional</sup> <a name="disableDockerDaemonCheckInput" id="@cdktf/provider-docker.provider.DockerProvider.property.disableDockerDaemonCheckInput"></a>

```java
public java.lang.Object getDisableDockerDaemonCheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-docker.provider.DockerProvider.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `keyMaterialInput`<sup>Optional</sup> <a name="keyMaterialInput" id="@cdktf/provider-docker.provider.DockerProvider.property.keyMaterialInput"></a>

```java
public java.lang.String getKeyMaterialInput();
```

- *Type:* java.lang.String

---

##### `registryAuthInput`<sup>Optional</sup> <a name="registryAuthInput" id="@cdktf/provider-docker.provider.DockerProvider.property.registryAuthInput"></a>

```java
public java.lang.Object getRegistryAuthInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>>

---

##### `sshOptsInput`<sup>Optional</sup> <a name="sshOptsInput" id="@cdktf/provider-docker.provider.DockerProvider.property.sshOptsInput"></a>

```java
public java.util.List<java.lang.String> getSshOptsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `caMaterial`<sup>Optional</sup> <a name="caMaterial" id="@cdktf/provider-docker.provider.DockerProvider.property.caMaterial"></a>

```java
public java.lang.String getCaMaterial();
```

- *Type:* java.lang.String

---

##### `certMaterial`<sup>Optional</sup> <a name="certMaterial" id="@cdktf/provider-docker.provider.DockerProvider.property.certMaterial"></a>

```java
public java.lang.String getCertMaterial();
```

- *Type:* java.lang.String

---

##### `certPath`<sup>Optional</sup> <a name="certPath" id="@cdktf/provider-docker.provider.DockerProvider.property.certPath"></a>

```java
public java.lang.String getCertPath();
```

- *Type:* java.lang.String

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-docker.provider.DockerProvider.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

---

##### `disableDockerDaemonCheck`<sup>Optional</sup> <a name="disableDockerDaemonCheck" id="@cdktf/provider-docker.provider.DockerProvider.property.disableDockerDaemonCheck"></a>

```java
public java.lang.Object getDisableDockerDaemonCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-docker.provider.DockerProvider.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `keyMaterial`<sup>Optional</sup> <a name="keyMaterial" id="@cdktf/provider-docker.provider.DockerProvider.property.keyMaterial"></a>

```java
public java.lang.String getKeyMaterial();
```

- *Type:* java.lang.String

---

##### `registryAuth`<sup>Optional</sup> <a name="registryAuth" id="@cdktf/provider-docker.provider.DockerProvider.property.registryAuth"></a>

```java
public java.lang.Object getRegistryAuth();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>>

---

##### `sshOpts`<sup>Optional</sup> <a name="sshOpts" id="@cdktf/provider-docker.provider.DockerProvider.property.sshOpts"></a>

```java
public java.util.List<java.lang.String> getSshOpts();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.provider.DockerProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DockerProviderConfig <a name="DockerProviderConfig" id="@cdktf/provider-docker.provider.DockerProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.provider.DockerProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.provider.DockerProviderConfig;

DockerProviderConfig.builder()
//  .alias(java.lang.String)
//  .caMaterial(java.lang.String)
//  .certMaterial(java.lang.String)
//  .certPath(java.lang.String)
//  .context(java.lang.String)
//  .disableDockerDaemonCheck(java.lang.Boolean)
//  .disableDockerDaemonCheck(IResolvable)
//  .host(java.lang.String)
//  .keyMaterial(java.lang.String)
//  .registryAuth(IResolvable)
//  .registryAuth(java.util.List<DockerProviderRegistryAuth>)
//  .sshOpts(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.caMaterial">caMaterial</a></code> | <code>java.lang.String</code> | PEM-encoded content of Docker host CA certificate. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.certMaterial">certMaterial</a></code> | <code>java.lang.String</code> | PEM-encoded content of Docker client certificate. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.certPath">certPath</a></code> | <code>java.lang.String</code> | Path to directory with Docker TLS config. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.context">context</a></code> | <code>java.lang.String</code> | The name of the Docker context to use. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.disableDockerDaemonCheck">disableDockerDaemonCheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to `true`, the provider will not check if the Docker daemon is running. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.host">host</a></code> | <code>java.lang.String</code> | The Docker daemon address. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.keyMaterial">keyMaterial</a></code> | <code>java.lang.String</code> | PEM-encoded content of Docker client private key. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.registryAuth">registryAuth</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>></code> | registry_auth block. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderConfig.property.sshOpts">sshOpts</a></code> | <code>java.util.List<java.lang.String></code> | Additional SSH option flags to be appended when using `ssh://` protocol. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#alias DockerProvider#alias}

---

##### `caMaterial`<sup>Optional</sup> <a name="caMaterial" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.caMaterial"></a>

```java
public java.lang.String getCaMaterial();
```

- *Type:* java.lang.String

PEM-encoded content of Docker host CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#ca_material DockerProvider#ca_material}

---

##### `certMaterial`<sup>Optional</sup> <a name="certMaterial" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.certMaterial"></a>

```java
public java.lang.String getCertMaterial();
```

- *Type:* java.lang.String

PEM-encoded content of Docker client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#cert_material DockerProvider#cert_material}

---

##### `certPath`<sup>Optional</sup> <a name="certPath" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.certPath"></a>

```java
public java.lang.String getCertPath();
```

- *Type:* java.lang.String

Path to directory with Docker TLS config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#cert_path DockerProvider#cert_path}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

The name of the Docker context to use.

Can also be set via `DOCKER_CONTEXT` environment variable. Overrides the `host` if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#context DockerProvider#context}

---

##### `disableDockerDaemonCheck`<sup>Optional</sup> <a name="disableDockerDaemonCheck" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.disableDockerDaemonCheck"></a>

```java
public java.lang.Object getDisableDockerDaemonCheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to `true`, the provider will not check if the Docker daemon is running.

This is useful for resources/data_sourcess that do not require a running Docker daemon, such as the data source `docker_registry_image`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#disable_docker_daemon_check DockerProvider#disable_docker_daemon_check}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The Docker daemon address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#host DockerProvider#host}

---

##### `keyMaterial`<sup>Optional</sup> <a name="keyMaterial" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.keyMaterial"></a>

```java
public java.lang.String getKeyMaterial();
```

- *Type:* java.lang.String

PEM-encoded content of Docker client private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#key_material DockerProvider#key_material}

---

##### `registryAuth`<sup>Optional</sup> <a name="registryAuth" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.registryAuth"></a>

```java
public java.lang.Object getRegistryAuth();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth">DockerProviderRegistryAuth</a>>

registry_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#registry_auth DockerProvider#registry_auth}

---

##### `sshOpts`<sup>Optional</sup> <a name="sshOpts" id="@cdktf/provider-docker.provider.DockerProviderConfig.property.sshOpts"></a>

```java
public java.util.List<java.lang.String> getSshOpts();
```

- *Type:* java.util.List<java.lang.String>

Additional SSH option flags to be appended when using `ssh://` protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#ssh_opts DockerProvider#ssh_opts}

---

### DockerProviderRegistryAuth <a name="DockerProviderRegistryAuth" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.provider.DockerProviderRegistryAuth;

DockerProviderRegistryAuth.builder()
    .address(java.lang.String)
//  .authDisabled(java.lang.Boolean)
//  .authDisabled(IResolvable)
//  .configFile(java.lang.String)
//  .configFileContent(java.lang.String)
//  .password(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.address">address</a></code> | <code>java.lang.String</code> | Address of the registry. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.authDisabled">authDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Setting this to `true` will tell the provider that this registry does not need authentication. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.configFile">configFile</a></code> | <code>java.lang.String</code> | Path to docker json file for registry auth. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.configFileContent">configFileContent</a></code> | <code>java.lang.String</code> | Plain content of the docker json file for registry auth. `config_file_content` has precedence over username/password. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.password">password</a></code> | <code>java.lang.String</code> | Password for the registry. Defaults to `DOCKER_REGISTRY_PASS` env variable if set. |
| <code><a href="#@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.username">username</a></code> | <code>java.lang.String</code> | Username for the registry. Defaults to `DOCKER_REGISTRY_USER` env variable if set. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Address of the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#address DockerProvider#address}

---

##### `authDisabled`<sup>Optional</sup> <a name="authDisabled" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.authDisabled"></a>

```java
public java.lang.Object getAuthDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Setting this to `true` will tell the provider that this registry does not need authentication.

Due to the docker internals, the provider will use dummy credentials (see https://github.com/kreuzwerker/terraform-provider-docker/issues/470 for more information). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#auth_disabled DockerProvider#auth_disabled}

---

##### `configFile`<sup>Optional</sup> <a name="configFile" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.configFile"></a>

```java
public java.lang.String getConfigFile();
```

- *Type:* java.lang.String

Path to docker json file for registry auth.

Defaults to `~/.docker/config.json`. If `DOCKER_CONFIG` is set, the value of `DOCKER_CONFIG` is used as the path. `config_file` has predencen over all other options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#config_file DockerProvider#config_file}

---

##### `configFileContent`<sup>Optional</sup> <a name="configFileContent" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.configFileContent"></a>

```java
public java.lang.String getConfigFileContent();
```

- *Type:* java.lang.String

Plain content of the docker json file for registry auth. `config_file_content` has precedence over username/password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#config_file_content DockerProvider#config_file_content}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for the registry. Defaults to `DOCKER_REGISTRY_PASS` env variable if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#password DockerProvider#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-docker.provider.DockerProviderRegistryAuth.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for the registry. Defaults to `DOCKER_REGISTRY_USER` env variable if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.3.0/docs#username DockerProvider#username}

---



