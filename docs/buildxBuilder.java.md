# `buildxBuilder` Submodule <a name="`buildxBuilder` Submodule" id="@cdktf/provider-docker.buildxBuilder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BuildxBuilder <a name="BuildxBuilder" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder docker_buildx_builder}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilder;

BuildxBuilder.Builder.create(Construct scope, java.lang.String id)
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
//  .append(java.lang.Boolean)
//  .append(IResolvable)
//  .bootstrap(java.lang.Boolean)
//  .bootstrap(IResolvable)
//  .buildkitConfig(java.lang.String)
//  .buildkitFlags(java.lang.String)
//  .dockerContainer(BuildxBuilderDockerContainer)
//  .driver(java.lang.String)
//  .driverOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .kubernetes(BuildxBuilderKubernetes)
//  .name(java.lang.String)
//  .nodeAttribute(java.lang.String)
//  .platform(java.util.List<java.lang.String>)
//  .remote(BuildxBuilderRemote)
//  .use(java.lang.Boolean)
//  .use(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.append">append</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Append a node to builder instead of changing it. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.bootstrap">bootstrap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatically boot the builder after creation. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.buildkitConfig">buildkitConfig</a></code> | <code>java.lang.String</code> | BuildKit daemon config file. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.buildkitFlags">buildkitFlags</a></code> | <code>java.lang.String</code> | BuildKit flags to set for the builder. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.dockerContainer">dockerContainer</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | docker_container block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.driver">driver</a></code> | <code>java.lang.String</code> | The driver to use for the Buildx builder (e.g., docker-container, kubernetes). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.driverOptions">driverOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Additional options for the Buildx driver in the form of `key=value,...`. These options are driver-specific. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#id BuildxBuilder#id}. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Buildx builder. IF not specified, a random name will be generated. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.nodeAttribute">nodeAttribute</a></code> | <code>java.lang.String</code> | Create/modify node with given name. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.platform">platform</a></code> | <code>java.util.List<java.lang.String></code> | Fixed platforms for current node. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.remote">remote</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | remote block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.use">use</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set the current builder instance as the default for the current context. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `append`<sup>Optional</sup> <a name="append" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.append"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Append a node to builder instead of changing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#append BuildxBuilder#append}

---

##### `bootstrap`<sup>Optional</sup> <a name="bootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.bootstrap"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatically boot the builder after creation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#bootstrap BuildxBuilder#bootstrap}

---

##### `buildkitConfig`<sup>Optional</sup> <a name="buildkitConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.buildkitConfig"></a>

- *Type:* java.lang.String

BuildKit daemon config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#buildkit_config BuildxBuilder#buildkit_config}

---

##### `buildkitFlags`<sup>Optional</sup> <a name="buildkitFlags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.buildkitFlags"></a>

- *Type:* java.lang.String

BuildKit flags to set for the builder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#buildkit_flags BuildxBuilder#buildkit_flags}

---

##### `dockerContainer`<sup>Optional</sup> <a name="dockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.dockerContainer"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

docker_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#docker_container BuildxBuilder#docker_container}

---

##### `driver`<sup>Optional</sup> <a name="driver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.driver"></a>

- *Type:* java.lang.String

The driver to use for the Buildx builder (e.g., docker-container, kubernetes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#driver BuildxBuilder#driver}

---

##### `driverOptions`<sup>Optional</sup> <a name="driverOptions" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.driverOptions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Additional options for the Buildx driver in the form of `key=value,...`. These options are driver-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#driver_options BuildxBuilder#driver_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#id BuildxBuilder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.kubernetes"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#kubernetes BuildxBuilder#kubernetes}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Buildx builder. IF not specified, a random name will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#name BuildxBuilder#name}

---

##### `nodeAttribute`<sup>Optional</sup> <a name="nodeAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.nodeAttribute"></a>

- *Type:* java.lang.String

Create/modify node with given name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#node BuildxBuilder#node}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.platform"></a>

- *Type:* java.util.List<java.lang.String>

Fixed platforms for current node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#platform BuildxBuilder#platform}

---

##### `remote`<sup>Optional</sup> <a name="remote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.remote"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

remote block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#remote BuildxBuilder#remote}

---

##### `use`<sup>Optional</sup> <a name="use" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.Initializer.parameter.use"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set the current builder instance as the default for the current context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#use BuildxBuilder#use}

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
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetKubernetes">resetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetNodeAttribute">resetNodeAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetRemote">resetRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetUse">resetUse</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDockerContainer` <a name="putDockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer"></a>

```java
public void putDockerContainer(BuildxBuilderDockerContainer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putDockerContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

---

##### `putKubernetes` <a name="putKubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes"></a>

```java
public void putKubernetes(BuildxBuilderKubernetes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

---

##### `putRemote` <a name="putRemote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote"></a>

```java
public void putRemote(BuildxBuilderRemote value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.putRemote.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

---

##### `resetAppend` <a name="resetAppend" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetAppend"></a>

```java
public void resetAppend()
```

##### `resetBootstrap` <a name="resetBootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBootstrap"></a>

```java
public void resetBootstrap()
```

##### `resetBuildkitConfig` <a name="resetBuildkitConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBuildkitConfig"></a>

```java
public void resetBuildkitConfig()
```

##### `resetBuildkitFlags` <a name="resetBuildkitFlags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetBuildkitFlags"></a>

```java
public void resetBuildkitFlags()
```

##### `resetDockerContainer` <a name="resetDockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDockerContainer"></a>

```java
public void resetDockerContainer()
```

##### `resetDriver` <a name="resetDriver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDriver"></a>

```java
public void resetDriver()
```

##### `resetDriverOptions` <a name="resetDriverOptions" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetDriverOptions"></a>

```java
public void resetDriverOptions()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetId"></a>

```java
public void resetId()
```

##### `resetKubernetes` <a name="resetKubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetKubernetes"></a>

```java
public void resetKubernetes()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetName"></a>

```java
public void resetName()
```

##### `resetNodeAttribute` <a name="resetNodeAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetNodeAttribute"></a>

```java
public void resetNodeAttribute()
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetPlatform"></a>

```java
public void resetPlatform()
```

##### `resetRemote` <a name="resetRemote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetRemote"></a>

```java
public void resetRemote()
```

##### `resetUse` <a name="resetUse" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.resetUse"></a>

```java
public void resetUse()
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

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilder;

BuildxBuilder.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilder;

BuildxBuilder.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilder;

BuildxBuilder.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilder;

BuildxBuilder.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BuildxBuilder.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BuildxBuilder resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BuildxBuilder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BuildxBuilder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BuildxBuilder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainer">dockerContainer</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference">BuildxBuilderDockerContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference">BuildxBuilderKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remote">remote</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference">BuildxBuilderRemoteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.appendInput">appendInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrapInput">bootstrapInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfigInput">buildkitConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlagsInput">buildkitFlagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainerInput">dockerContainerInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverInput">driverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptionsInput">driverOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetesInput">kubernetesInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttributeInput">nodeAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platformInput">platformInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remoteInput">remoteInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.useInput">useInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.append">append</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrap">bootstrap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfig">buildkitConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlags">buildkitFlags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driver">driver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptions">driverOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttribute">nodeAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platform">platform</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.use">use</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dockerContainer`<sup>Required</sup> <a name="dockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainer"></a>

```java
public BuildxBuilderDockerContainerOutputReference getDockerContainer();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference">BuildxBuilderDockerContainerOutputReference</a>

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetes"></a>

```java
public BuildxBuilderKubernetesOutputReference getKubernetes();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference">BuildxBuilderKubernetesOutputReference</a>

---

##### `remote`<sup>Required</sup> <a name="remote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remote"></a>

```java
public BuildxBuilderRemoteOutputReference getRemote();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference">BuildxBuilderRemoteOutputReference</a>

---

##### `appendInput`<sup>Optional</sup> <a name="appendInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.appendInput"></a>

```java
public java.lang.Object getAppendInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bootstrapInput`<sup>Optional</sup> <a name="bootstrapInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrapInput"></a>

```java
public java.lang.Object getBootstrapInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `buildkitConfigInput`<sup>Optional</sup> <a name="buildkitConfigInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfigInput"></a>

```java
public java.lang.String getBuildkitConfigInput();
```

- *Type:* java.lang.String

---

##### `buildkitFlagsInput`<sup>Optional</sup> <a name="buildkitFlagsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlagsInput"></a>

```java
public java.lang.String getBuildkitFlagsInput();
```

- *Type:* java.lang.String

---

##### `dockerContainerInput`<sup>Optional</sup> <a name="dockerContainerInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.dockerContainerInput"></a>

```java
public BuildxBuilderDockerContainer getDockerContainerInput();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

---

##### `driverInput`<sup>Optional</sup> <a name="driverInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverInput"></a>

```java
public java.lang.String getDriverInput();
```

- *Type:* java.lang.String

---

##### `driverOptionsInput`<sup>Optional</sup> <a name="driverOptionsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kubernetesInput`<sup>Optional</sup> <a name="kubernetesInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.kubernetesInput"></a>

```java
public BuildxBuilderKubernetes getKubernetesInput();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeAttributeInput`<sup>Optional</sup> <a name="nodeAttributeInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttributeInput"></a>

```java
public java.lang.String getNodeAttributeInput();
```

- *Type:* java.lang.String

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platformInput"></a>

```java
public java.util.List<java.lang.String> getPlatformInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `remoteInput`<sup>Optional</sup> <a name="remoteInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.remoteInput"></a>

```java
public BuildxBuilderRemote getRemoteInput();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

---

##### `useInput`<sup>Optional</sup> <a name="useInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.useInput"></a>

```java
public java.lang.Object getUseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `append`<sup>Required</sup> <a name="append" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.append"></a>

```java
public java.lang.Object getAppend();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bootstrap`<sup>Required</sup> <a name="bootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.bootstrap"></a>

```java
public java.lang.Object getBootstrap();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `buildkitConfig`<sup>Required</sup> <a name="buildkitConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitConfig"></a>

```java
public java.lang.String getBuildkitConfig();
```

- *Type:* java.lang.String

---

##### `buildkitFlags`<sup>Required</sup> <a name="buildkitFlags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.buildkitFlags"></a>

```java
public java.lang.String getBuildkitFlags();
```

- *Type:* java.lang.String

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driver"></a>

```java
public java.lang.String getDriver();
```

- *Type:* java.lang.String

---

##### `driverOptions`<sup>Required</sup> <a name="driverOptions" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.driverOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeAttribute`<sup>Required</sup> <a name="nodeAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.nodeAttribute"></a>

```java
public java.lang.String getNodeAttribute();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.platform"></a>

```java
public java.util.List<java.lang.String> getPlatform();
```

- *Type:* java.util.List<java.lang.String>

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.use"></a>

```java
public java.lang.Object getUse();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilder.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BuildxBuilderConfig <a name="BuildxBuilderConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilderConfig;

BuildxBuilderConfig.builder()
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
//  .append(java.lang.Boolean)
//  .append(IResolvable)
//  .bootstrap(java.lang.Boolean)
//  .bootstrap(IResolvable)
//  .buildkitConfig(java.lang.String)
//  .buildkitFlags(java.lang.String)
//  .dockerContainer(BuildxBuilderDockerContainer)
//  .driver(java.lang.String)
//  .driverOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .kubernetes(BuildxBuilderKubernetes)
//  .name(java.lang.String)
//  .nodeAttribute(java.lang.String)
//  .platform(java.util.List<java.lang.String>)
//  .remote(BuildxBuilderRemote)
//  .use(java.lang.Boolean)
//  .use(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.append">append</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Append a node to builder instead of changing it. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.bootstrap">bootstrap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatically boot the builder after creation. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitConfig">buildkitConfig</a></code> | <code>java.lang.String</code> | BuildKit daemon config file. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitFlags">buildkitFlags</a></code> | <code>java.lang.String</code> | BuildKit flags to set for the builder. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dockerContainer">dockerContainer</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | docker_container block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driver">driver</a></code> | <code>java.lang.String</code> | The driver to use for the Buildx builder (e.g., docker-container, kubernetes). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driverOptions">driverOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Additional options for the Buildx driver in the form of `key=value,...`. These options are driver-specific. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#id BuildxBuilder#id}. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Buildx builder. IF not specified, a random name will be generated. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.nodeAttribute">nodeAttribute</a></code> | <code>java.lang.String</code> | Create/modify node with given name. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.platform">platform</a></code> | <code>java.util.List<java.lang.String></code> | Fixed platforms for current node. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.remote">remote</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | remote block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.use">use</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set the current builder instance as the default for the current context. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `append`<sup>Optional</sup> <a name="append" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.append"></a>

```java
public java.lang.Object getAppend();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Append a node to builder instead of changing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#append BuildxBuilder#append}

---

##### `bootstrap`<sup>Optional</sup> <a name="bootstrap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.bootstrap"></a>

```java
public java.lang.Object getBootstrap();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatically boot the builder after creation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#bootstrap BuildxBuilder#bootstrap}

---

##### `buildkitConfig`<sup>Optional</sup> <a name="buildkitConfig" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitConfig"></a>

```java
public java.lang.String getBuildkitConfig();
```

- *Type:* java.lang.String

BuildKit daemon config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#buildkit_config BuildxBuilder#buildkit_config}

---

##### `buildkitFlags`<sup>Optional</sup> <a name="buildkitFlags" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.buildkitFlags"></a>

```java
public java.lang.String getBuildkitFlags();
```

- *Type:* java.lang.String

BuildKit flags to set for the builder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#buildkit_flags BuildxBuilder#buildkit_flags}

---

##### `dockerContainer`<sup>Optional</sup> <a name="dockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.dockerContainer"></a>

```java
public BuildxBuilderDockerContainer getDockerContainer();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

docker_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#docker_container BuildxBuilder#docker_container}

---

##### `driver`<sup>Optional</sup> <a name="driver" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driver"></a>

```java
public java.lang.String getDriver();
```

- *Type:* java.lang.String

The driver to use for the Buildx builder (e.g., docker-container, kubernetes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#driver BuildxBuilder#driver}

---

##### `driverOptions`<sup>Optional</sup> <a name="driverOptions" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.driverOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Additional options for the Buildx driver in the form of `key=value,...`. These options are driver-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#driver_options BuildxBuilder#driver_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#id BuildxBuilder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.kubernetes"></a>

```java
public BuildxBuilderKubernetes getKubernetes();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#kubernetes BuildxBuilder#kubernetes}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Buildx builder. IF not specified, a random name will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#name BuildxBuilder#name}

---

##### `nodeAttribute`<sup>Optional</sup> <a name="nodeAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.nodeAttribute"></a>

```java
public java.lang.String getNodeAttribute();
```

- *Type:* java.lang.String

Create/modify node with given name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#node BuildxBuilder#node}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.platform"></a>

```java
public java.util.List<java.lang.String> getPlatform();
```

- *Type:* java.util.List<java.lang.String>

Fixed platforms for current node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#platform BuildxBuilder#platform}

---

##### `remote`<sup>Optional</sup> <a name="remote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.remote"></a>

```java
public BuildxBuilderRemote getRemote();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

remote block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#remote BuildxBuilder#remote}

---

##### `use`<sup>Optional</sup> <a name="use" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderConfig.property.use"></a>

```java
public java.lang.Object getUse();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set the current builder instance as the default for the current context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#use BuildxBuilder#use}

---

### BuildxBuilderDockerContainer <a name="BuildxBuilderDockerContainer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilderDockerContainer;

BuildxBuilderDockerContainer.builder()
//  .cgroupParent(java.lang.String)
//  .cpuPeriod(java.lang.String)
//  .cpuQuota(java.lang.String)
//  .cpusetCpus(java.lang.String)
//  .cpusetMems(java.lang.String)
//  .cpuShares(java.lang.String)
//  .defaultLoad(java.lang.Boolean)
//  .defaultLoad(IResolvable)
//  .env(java.util.Map<java.lang.String, java.lang.String>)
//  .image(java.lang.String)
//  .memory(java.lang.String)
//  .memorySwap(java.lang.String)
//  .network(java.lang.String)
//  .restartPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cgroupParent">cgroupParent</a></code> | <code>java.lang.String</code> | Sets the cgroup parent of the container if Docker is using the "cgroupfs" driver. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuPeriod">cpuPeriod</a></code> | <code>java.lang.String</code> | Sets the CPU CFS scheduler period for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuQuota">cpuQuota</a></code> | <code>java.lang.String</code> | Imposes a CPU CFS quota on the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetCpus">cpusetCpus</a></code> | <code>java.lang.String</code> | Limits the set of CPU cores the container can use. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetMems">cpusetMems</a></code> | <code>java.lang.String</code> | Limits the set of CPU memory nodes the container can use. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuShares">cpuShares</a></code> | <code>java.lang.String</code> | Configures CPU shares (relative weight) of the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.defaultLoad">defaultLoad</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatically load images to the Docker Engine image store. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.env">env</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Sets environment variables in the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.image">image</a></code> | <code>java.lang.String</code> | Sets the BuildKit image to use for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memory">memory</a></code> | <code>java.lang.String</code> | Sets the amount of memory the container can use. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memorySwap">memorySwap</a></code> | <code>java.lang.String</code> | Sets the memory swap limit for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.network">network</a></code> | <code>java.lang.String</code> | Sets the network mode for the container. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.restartPolicy">restartPolicy</a></code> | <code>java.lang.String</code> | Sets the container's restart policy. |

---

##### `cgroupParent`<sup>Optional</sup> <a name="cgroupParent" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cgroupParent"></a>

```java
public java.lang.String getCgroupParent();
```

- *Type:* java.lang.String

Sets the cgroup parent of the container if Docker is using the "cgroupfs" driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cgroup_parent BuildxBuilder#cgroup_parent}

---

##### `cpuPeriod`<sup>Optional</sup> <a name="cpuPeriod" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuPeriod"></a>

```java
public java.lang.String getCpuPeriod();
```

- *Type:* java.lang.String

Sets the CPU CFS scheduler period for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cpu_period BuildxBuilder#cpu_period}

---

##### `cpuQuota`<sup>Optional</sup> <a name="cpuQuota" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuQuota"></a>

```java
public java.lang.String getCpuQuota();
```

- *Type:* java.lang.String

Imposes a CPU CFS quota on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cpu_quota BuildxBuilder#cpu_quota}

---

##### `cpusetCpus`<sup>Optional</sup> <a name="cpusetCpus" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetCpus"></a>

```java
public java.lang.String getCpusetCpus();
```

- *Type:* java.lang.String

Limits the set of CPU cores the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cpuset_cpus BuildxBuilder#cpuset_cpus}

---

##### `cpusetMems`<sup>Optional</sup> <a name="cpusetMems" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpusetMems"></a>

```java
public java.lang.String getCpusetMems();
```

- *Type:* java.lang.String

Limits the set of CPU memory nodes the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cpuset_mems BuildxBuilder#cpuset_mems}

---

##### `cpuShares`<sup>Optional</sup> <a name="cpuShares" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.cpuShares"></a>

```java
public java.lang.String getCpuShares();
```

- *Type:* java.lang.String

Configures CPU shares (relative weight) of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cpu_shares BuildxBuilder#cpu_shares}

---

##### `defaultLoad`<sup>Optional</sup> <a name="defaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.defaultLoad"></a>

```java
public java.lang.Object getDefaultLoad();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.env"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnv();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Sets environment variables in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#env BuildxBuilder#env}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Sets the BuildKit image to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#image BuildxBuilder#image}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

Sets the amount of memory the container can use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

##### `memorySwap`<sup>Optional</sup> <a name="memorySwap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.memorySwap"></a>

```java
public java.lang.String getMemorySwap();
```

- *Type:* java.lang.String

Sets the memory swap limit for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#memory_swap BuildxBuilder#memory_swap}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Sets the network mode for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#network BuildxBuilder#network}

---

##### `restartPolicy`<sup>Optional</sup> <a name="restartPolicy" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer.property.restartPolicy"></a>

```java
public java.lang.String getRestartPolicy();
```

- *Type:* java.lang.String

Sets the container's restart policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#restart_policy BuildxBuilder#restart_policy}

---

### BuildxBuilderKubernetes <a name="BuildxBuilderKubernetes" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilderKubernetes;

BuildxBuilderKubernetes.builder()
//  .annotations(java.lang.String)
//  .defaultLoad(java.lang.Boolean)
//  .defaultLoad(IResolvable)
//  .image(java.lang.String)
//  .labels(java.lang.String)
//  .limits(BuildxBuilderKubernetesLimits)
//  .loadbalance(java.lang.String)
//  .namespace(java.lang.String)
//  .nodeselector(java.lang.String)
//  .qemu(BuildxBuilderKubernetesQemu)
//  .replicas(java.lang.Number)
//  .requests(BuildxBuilderKubernetesRequests)
//  .rootless(java.lang.Boolean)
//  .rootless(IResolvable)
//  .schedulername(java.lang.String)
//  .serviceaccount(java.lang.String)
//  .timeout(java.lang.String)
//  .tolerations(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.annotations">annotations</a></code> | <code>java.lang.String</code> | Sets additional annotations on the deployments and pods. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.defaultLoad">defaultLoad</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatically load images to the Docker Engine image store. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.image">image</a></code> | <code>java.lang.String</code> | Sets the image to use for running BuildKit. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.labels">labels</a></code> | <code>java.lang.String</code> | Sets additional labels on the deployments and pods. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.loadbalance">loadbalance</a></code> | <code>java.lang.String</code> | Load-balancing strategy (sticky or random). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Sets the Kubernetes namespace. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.nodeselector">nodeselector</a></code> | <code>java.lang.String</code> | Sets the pod's nodeSelector label(s). |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.qemu">qemu</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a></code> | qemu block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.replicas">replicas</a></code> | <code>java.lang.Number</code> | Sets the number of Pod replicas to create. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.requests">requests</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a></code> | requests block. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.rootless">rootless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Run the container as a non-root user. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.schedulername">schedulername</a></code> | <code>java.lang.String</code> | Sets the scheduler responsible for scheduling the pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.serviceaccount">serviceaccount</a></code> | <code>java.lang.String</code> | Sets the pod's serviceAccountName. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Set the timeout limit for pod provisioning. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.tolerations">tolerations</a></code> | <code>java.lang.String</code> | Configures the pod's taint toleration. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.annotations"></a>

```java
public java.lang.String getAnnotations();
```

- *Type:* java.lang.String

Sets additional annotations on the deployments and pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#annotations BuildxBuilder#annotations}

---

##### `defaultLoad`<sup>Optional</sup> <a name="defaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.defaultLoad"></a>

```java
public java.lang.Object getDefaultLoad();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Sets the image to use for running BuildKit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#image BuildxBuilder#image}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.labels"></a>

```java
public java.lang.String getLabels();
```

- *Type:* java.lang.String

Sets additional labels on the deployments and pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#labels BuildxBuilder#labels}

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.limits"></a>

```java
public BuildxBuilderKubernetesLimits getLimits();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#limits BuildxBuilder#limits}

---

##### `loadbalance`<sup>Optional</sup> <a name="loadbalance" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.loadbalance"></a>

```java
public java.lang.String getLoadbalance();
```

- *Type:* java.lang.String

Load-balancing strategy (sticky or random).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#loadbalance BuildxBuilder#loadbalance}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Sets the Kubernetes namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#namespace BuildxBuilder#namespace}

---

##### `nodeselector`<sup>Optional</sup> <a name="nodeselector" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.nodeselector"></a>

```java
public java.lang.String getNodeselector();
```

- *Type:* java.lang.String

Sets the pod's nodeSelector label(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#nodeselector BuildxBuilder#nodeselector}

---

##### `qemu`<sup>Optional</sup> <a name="qemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.qemu"></a>

```java
public BuildxBuilderKubernetesQemu getQemu();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

qemu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#qemu BuildxBuilder#qemu}

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.replicas"></a>

```java
public java.lang.Number getReplicas();
```

- *Type:* java.lang.Number

Sets the number of Pod replicas to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#replicas BuildxBuilder#replicas}

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.requests"></a>

```java
public BuildxBuilderKubernetesRequests getRequests();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

requests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#requests BuildxBuilder#requests}

---

##### `rootless`<sup>Optional</sup> <a name="rootless" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.rootless"></a>

```java
public java.lang.Object getRootless();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Run the container as a non-root user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#rootless BuildxBuilder#rootless}

---

##### `schedulername`<sup>Optional</sup> <a name="schedulername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.schedulername"></a>

```java
public java.lang.String getSchedulername();
```

- *Type:* java.lang.String

Sets the scheduler responsible for scheduling the pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#schedulername BuildxBuilder#schedulername}

---

##### `serviceaccount`<sup>Optional</sup> <a name="serviceaccount" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.serviceaccount"></a>

```java
public java.lang.String getServiceaccount();
```

- *Type:* java.lang.String

Sets the pod's serviceAccountName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#serviceaccount BuildxBuilder#serviceaccount}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Set the timeout limit for pod provisioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#timeout BuildxBuilder#timeout}

---

##### `tolerations`<sup>Optional</sup> <a name="tolerations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes.property.tolerations"></a>

```java
public java.lang.String getTolerations();
```

- *Type:* java.lang.String

Configures the pod's taint toleration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#tolerations BuildxBuilder#tolerations}

---

### BuildxBuilderKubernetesLimits <a name="BuildxBuilderKubernetesLimits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilderKubernetesLimits;

BuildxBuilderKubernetesLimits.builder()
//  .cpu(java.lang.String)
//  .ephemeralStorage(java.lang.String)
//  .memory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.cpu">cpu</a></code> | <code>java.lang.String</code> | CPU limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.ephemeralStorage">ephemeralStorage</a></code> | <code>java.lang.String</code> | Ephemeral storage limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.memory">memory</a></code> | <code>java.lang.String</code> | Memory limit for the Kubernetes pod. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

CPU limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cpu BuildxBuilder#cpu}

---

##### `ephemeralStorage`<sup>Optional</sup> <a name="ephemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.ephemeralStorage"></a>

```java
public java.lang.String getEphemeralStorage();
```

- *Type:* java.lang.String

Ephemeral storage limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#ephemeral_storage BuildxBuilder#ephemeral_storage}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

Memory limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

### BuildxBuilderKubernetesQemu <a name="BuildxBuilderKubernetesQemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilderKubernetesQemu;

BuildxBuilderKubernetesQemu.builder()
//  .image(java.lang.String)
//  .install(java.lang.Boolean)
//  .install(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.image">image</a></code> | <code>java.lang.String</code> | Sets the QEMU emulation image. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.install">install</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Install QEMU emulation for multi-platform support. |

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Sets the QEMU emulation image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#image BuildxBuilder#image}

---

##### `install`<sup>Optional</sup> <a name="install" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu.property.install"></a>

```java
public java.lang.Object getInstall();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Install QEMU emulation for multi-platform support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#install BuildxBuilder#install}

---

### BuildxBuilderKubernetesRequests <a name="BuildxBuilderKubernetesRequests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilderKubernetesRequests;

BuildxBuilderKubernetesRequests.builder()
//  .cpu(java.lang.String)
//  .ephemeralStorage(java.lang.String)
//  .memory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.cpu">cpu</a></code> | <code>java.lang.String</code> | CPU limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.ephemeralStorage">ephemeralStorage</a></code> | <code>java.lang.String</code> | Ephemeral storage limit for the Kubernetes pod. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.memory">memory</a></code> | <code>java.lang.String</code> | Memory limit for the Kubernetes pod. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

CPU limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cpu BuildxBuilder#cpu}

---

##### `ephemeralStorage`<sup>Optional</sup> <a name="ephemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.ephemeralStorage"></a>

```java
public java.lang.String getEphemeralStorage();
```

- *Type:* java.lang.String

Ephemeral storage limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#ephemeral_storage BuildxBuilder#ephemeral_storage}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

Memory limit for the Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#memory BuildxBuilder#memory}

---

### BuildxBuilderRemote <a name="BuildxBuilderRemote" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilderRemote;

BuildxBuilderRemote.builder()
//  .cacert(java.lang.String)
//  .cert(java.lang.String)
//  .defaultLoad(java.lang.Boolean)
//  .defaultLoad(IResolvable)
//  .key(java.lang.String)
//  .servername(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cacert">cacert</a></code> | <code>java.lang.String</code> | Absolute path to the TLS certificate authority used for validation. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cert">cert</a></code> | <code>java.lang.String</code> | Absolute path to the TLS client certificate to present to buildkitd. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.defaultLoad">defaultLoad</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatically load images to the Docker Engine image store. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.key">key</a></code> | <code>java.lang.String</code> | Sets the TLS client key. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.servername">servername</a></code> | <code>java.lang.String</code> | TLS server name used in requests. |

---

##### `cacert`<sup>Optional</sup> <a name="cacert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cacert"></a>

```java
public java.lang.String getCacert();
```

- *Type:* java.lang.String

Absolute path to the TLS certificate authority used for validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cacert BuildxBuilder#cacert}

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

Absolute path to the TLS client certificate to present to buildkitd.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#cert BuildxBuilder#cert}

---

##### `defaultLoad`<sup>Optional</sup> <a name="defaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.defaultLoad"></a>

```java
public java.lang.Object getDefaultLoad();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatically load images to the Docker Engine image store. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#default_load BuildxBuilder#default_load}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Sets the TLS client key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#key BuildxBuilder#key}

---

##### `servername`<sup>Optional</sup> <a name="servername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote.property.servername"></a>

```java
public java.lang.String getServername();
```

- *Type:* java.lang.String

TLS server name used in requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/resources/buildx_builder#servername BuildxBuilder#servername}

---

## Classes <a name="Classes" id="Classes"></a>

### BuildxBuilderDockerContainerOutputReference <a name="BuildxBuilderDockerContainerOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilderDockerContainerOutputReference;

new BuildxBuilderDockerContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCgroupParent` <a name="resetCgroupParent" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCgroupParent"></a>

```java
public void resetCgroupParent()
```

##### `resetCpuPeriod` <a name="resetCpuPeriod" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuPeriod"></a>

```java
public void resetCpuPeriod()
```

##### `resetCpuQuota` <a name="resetCpuQuota" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuQuota"></a>

```java
public void resetCpuQuota()
```

##### `resetCpusetCpus` <a name="resetCpusetCpus" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpusetCpus"></a>

```java
public void resetCpusetCpus()
```

##### `resetCpusetMems` <a name="resetCpusetMems" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpusetMems"></a>

```java
public void resetCpusetMems()
```

##### `resetCpuShares` <a name="resetCpuShares" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetCpuShares"></a>

```java
public void resetCpuShares()
```

##### `resetDefaultLoad` <a name="resetDefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetDefaultLoad"></a>

```java
public void resetDefaultLoad()
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetImage"></a>

```java
public void resetImage()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetMemory"></a>

```java
public void resetMemory()
```

##### `resetMemorySwap` <a name="resetMemorySwap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetMemorySwap"></a>

```java
public void resetMemorySwap()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetRestartPolicy` <a name="resetRestartPolicy" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.resetRestartPolicy"></a>

```java
public void resetRestartPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParentInput">cgroupParentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriodInput">cpuPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuotaInput">cpuQuotaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpusInput">cpusetCpusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMemsInput">cpusetMemsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuSharesInput">cpuSharesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoadInput">defaultLoadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.envInput">envInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwapInput">memorySwapInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicyInput">restartPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParent">cgroupParent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriod">cpuPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuota">cpuQuota</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpus">cpusetCpus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMems">cpusetMems</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuShares">cpuShares</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoad">defaultLoad</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.env">env</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwap">memorySwap</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicy">restartPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cgroupParentInput`<sup>Optional</sup> <a name="cgroupParentInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParentInput"></a>

```java
public java.lang.String getCgroupParentInput();
```

- *Type:* java.lang.String

---

##### `cpuPeriodInput`<sup>Optional</sup> <a name="cpuPeriodInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriodInput"></a>

```java
public java.lang.String getCpuPeriodInput();
```

- *Type:* java.lang.String

---

##### `cpuQuotaInput`<sup>Optional</sup> <a name="cpuQuotaInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuotaInput"></a>

```java
public java.lang.String getCpuQuotaInput();
```

- *Type:* java.lang.String

---

##### `cpusetCpusInput`<sup>Optional</sup> <a name="cpusetCpusInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpusInput"></a>

```java
public java.lang.String getCpusetCpusInput();
```

- *Type:* java.lang.String

---

##### `cpusetMemsInput`<sup>Optional</sup> <a name="cpusetMemsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMemsInput"></a>

```java
public java.lang.String getCpusetMemsInput();
```

- *Type:* java.lang.String

---

##### `cpuSharesInput`<sup>Optional</sup> <a name="cpuSharesInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuSharesInput"></a>

```java
public java.lang.String getCpuSharesInput();
```

- *Type:* java.lang.String

---

##### `defaultLoadInput`<sup>Optional</sup> <a name="defaultLoadInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoadInput"></a>

```java
public java.lang.Object getDefaultLoadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.envInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memoryInput"></a>

```java
public java.lang.String getMemoryInput();
```

- *Type:* java.lang.String

---

##### `memorySwapInput`<sup>Optional</sup> <a name="memorySwapInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwapInput"></a>

```java
public java.lang.String getMemorySwapInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `restartPolicyInput`<sup>Optional</sup> <a name="restartPolicyInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicyInput"></a>

```java
public java.lang.String getRestartPolicyInput();
```

- *Type:* java.lang.String

---

##### `cgroupParent`<sup>Required</sup> <a name="cgroupParent" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cgroupParent"></a>

```java
public java.lang.String getCgroupParent();
```

- *Type:* java.lang.String

---

##### `cpuPeriod`<sup>Required</sup> <a name="cpuPeriod" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuPeriod"></a>

```java
public java.lang.String getCpuPeriod();
```

- *Type:* java.lang.String

---

##### `cpuQuota`<sup>Required</sup> <a name="cpuQuota" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuQuota"></a>

```java
public java.lang.String getCpuQuota();
```

- *Type:* java.lang.String

---

##### `cpusetCpus`<sup>Required</sup> <a name="cpusetCpus" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetCpus"></a>

```java
public java.lang.String getCpusetCpus();
```

- *Type:* java.lang.String

---

##### `cpusetMems`<sup>Required</sup> <a name="cpusetMems" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpusetMems"></a>

```java
public java.lang.String getCpusetMems();
```

- *Type:* java.lang.String

---

##### `cpuShares`<sup>Required</sup> <a name="cpuShares" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.cpuShares"></a>

```java
public java.lang.String getCpuShares();
```

- *Type:* java.lang.String

---

##### `defaultLoad`<sup>Required</sup> <a name="defaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.defaultLoad"></a>

```java
public java.lang.Object getDefaultLoad();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.env"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnv();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `memorySwap`<sup>Required</sup> <a name="memorySwap" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.memorySwap"></a>

```java
public java.lang.String getMemorySwap();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `restartPolicy`<sup>Required</sup> <a name="restartPolicy" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.restartPolicy"></a>

```java
public java.lang.String getRestartPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainerOutputReference.property.internalValue"></a>

```java
public BuildxBuilderDockerContainer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderDockerContainer">BuildxBuilderDockerContainer</a>

---


### BuildxBuilderKubernetesLimitsOutputReference <a name="BuildxBuilderKubernetesLimitsOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilderKubernetesLimitsOutputReference;

new BuildxBuilderKubernetesLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetEphemeralStorage` <a name="resetEphemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetEphemeralStorage"></a>

```java
public void resetEphemeralStorage()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.resetMemory"></a>

```java
public void resetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorageInput">ephemeralStorageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpu">cpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorage">ephemeralStorage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpuInput"></a>

```java
public java.lang.String getCpuInput();
```

- *Type:* java.lang.String

---

##### `ephemeralStorageInput`<sup>Optional</sup> <a name="ephemeralStorageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorageInput"></a>

```java
public java.lang.String getEphemeralStorageInput();
```

- *Type:* java.lang.String

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memoryInput"></a>

```java
public java.lang.String getMemoryInput();
```

- *Type:* java.lang.String

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.ephemeralStorage"></a>

```java
public java.lang.String getEphemeralStorage();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference.property.internalValue"></a>

```java
public BuildxBuilderKubernetesLimits getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

---


### BuildxBuilderKubernetesOutputReference <a name="BuildxBuilderKubernetesOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilderKubernetesOutputReference;

new BuildxBuilderKubernetesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLimits` <a name="putLimits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putLimits"></a>

```java
public void putLimits(BuildxBuilderKubernetesLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

---

##### `putQemu` <a name="putQemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putQemu"></a>

```java
public void putQemu(BuildxBuilderKubernetesQemu value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putQemu.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

---

##### `putRequests` <a name="putRequests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putRequests"></a>

```java
public void putRequests(BuildxBuilderKubernetesRequests value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.putRequests.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDefaultLoad` <a name="resetDefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetDefaultLoad"></a>

```java
public void resetDefaultLoad()
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetImage"></a>

```java
public void resetImage()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLimits"></a>

```java
public void resetLimits()
```

##### `resetLoadbalance` <a name="resetLoadbalance" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetLoadbalance"></a>

```java
public void resetLoadbalance()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNodeselector` <a name="resetNodeselector" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetNodeselector"></a>

```java
public void resetNodeselector()
```

##### `resetQemu` <a name="resetQemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetQemu"></a>

```java
public void resetQemu()
```

##### `resetReplicas` <a name="resetReplicas" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetReplicas"></a>

```java
public void resetReplicas()
```

##### `resetRequests` <a name="resetRequests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetRequests"></a>

```java
public void resetRequests()
```

##### `resetRootless` <a name="resetRootless" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetRootless"></a>

```java
public void resetRootless()
```

##### `resetSchedulername` <a name="resetSchedulername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetSchedulername"></a>

```java
public void resetSchedulername()
```

##### `resetServiceaccount` <a name="resetServiceaccount" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetServiceaccount"></a>

```java
public void resetServiceaccount()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetTolerations` <a name="resetTolerations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.resetTolerations"></a>

```java
public void resetTolerations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference">BuildxBuilderKubernetesLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemu">qemu</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference">BuildxBuilderKubernetesQemuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requests">requests</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference">BuildxBuilderKubernetesRequestsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoadInput">defaultLoadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limitsInput">limitsInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalanceInput">loadbalanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselectorInput">nodeselectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemuInput">qemuInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicasInput">replicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requestsInput">requestsInput</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootlessInput">rootlessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulernameInput">schedulernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccountInput">serviceaccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerationsInput">tolerationsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotations">annotations</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoad">defaultLoad</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labels">labels</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalance">loadbalance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselector">nodeselector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicas">replicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootless">rootless</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulername">schedulername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccount">serviceaccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerations">tolerations</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limits"></a>

```java
public BuildxBuilderKubernetesLimitsOutputReference getLimits();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimitsOutputReference">BuildxBuilderKubernetesLimitsOutputReference</a>

---

##### `qemu`<sup>Required</sup> <a name="qemu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemu"></a>

```java
public BuildxBuilderKubernetesQemuOutputReference getQemu();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference">BuildxBuilderKubernetesQemuOutputReference</a>

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requests"></a>

```java
public BuildxBuilderKubernetesRequestsOutputReference getRequests();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference">BuildxBuilderKubernetesRequestsOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotationsInput"></a>

```java
public java.lang.String getAnnotationsInput();
```

- *Type:* java.lang.String

---

##### `defaultLoadInput`<sup>Optional</sup> <a name="defaultLoadInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoadInput"></a>

```java
public java.lang.Object getDefaultLoadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labelsInput"></a>

```java
public java.lang.String getLabelsInput();
```

- *Type:* java.lang.String

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.limitsInput"></a>

```java
public BuildxBuilderKubernetesLimits getLimitsInput();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesLimits">BuildxBuilderKubernetesLimits</a>

---

##### `loadbalanceInput`<sup>Optional</sup> <a name="loadbalanceInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalanceInput"></a>

```java
public java.lang.String getLoadbalanceInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `nodeselectorInput`<sup>Optional</sup> <a name="nodeselectorInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselectorInput"></a>

```java
public java.lang.String getNodeselectorInput();
```

- *Type:* java.lang.String

---

##### `qemuInput`<sup>Optional</sup> <a name="qemuInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.qemuInput"></a>

```java
public BuildxBuilderKubernetesQemu getQemuInput();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicasInput"></a>

```java
public java.lang.Number getReplicasInput();
```

- *Type:* java.lang.Number

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.requestsInput"></a>

```java
public BuildxBuilderKubernetesRequests getRequestsInput();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

---

##### `rootlessInput`<sup>Optional</sup> <a name="rootlessInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootlessInput"></a>

```java
public java.lang.Object getRootlessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schedulernameInput`<sup>Optional</sup> <a name="schedulernameInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulernameInput"></a>

```java
public java.lang.String getSchedulernameInput();
```

- *Type:* java.lang.String

---

##### `serviceaccountInput`<sup>Optional</sup> <a name="serviceaccountInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccountInput"></a>

```java
public java.lang.String getServiceaccountInput();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `tolerationsInput`<sup>Optional</sup> <a name="tolerationsInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerationsInput"></a>

```java
public java.lang.String getTolerationsInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.annotations"></a>

```java
public java.lang.String getAnnotations();
```

- *Type:* java.lang.String

---

##### `defaultLoad`<sup>Required</sup> <a name="defaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.defaultLoad"></a>

```java
public java.lang.Object getDefaultLoad();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.labels"></a>

```java
public java.lang.String getLabels();
```

- *Type:* java.lang.String

---

##### `loadbalance`<sup>Required</sup> <a name="loadbalance" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.loadbalance"></a>

```java
public java.lang.String getLoadbalance();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `nodeselector`<sup>Required</sup> <a name="nodeselector" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.nodeselector"></a>

```java
public java.lang.String getNodeselector();
```

- *Type:* java.lang.String

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.replicas"></a>

```java
public java.lang.Number getReplicas();
```

- *Type:* java.lang.Number

---

##### `rootless`<sup>Required</sup> <a name="rootless" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.rootless"></a>

```java
public java.lang.Object getRootless();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `schedulername`<sup>Required</sup> <a name="schedulername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.schedulername"></a>

```java
public java.lang.String getSchedulername();
```

- *Type:* java.lang.String

---

##### `serviceaccount`<sup>Required</sup> <a name="serviceaccount" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.serviceaccount"></a>

```java
public java.lang.String getServiceaccount();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `tolerations`<sup>Required</sup> <a name="tolerations" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.tolerations"></a>

```java
public java.lang.String getTolerations();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesOutputReference.property.internalValue"></a>

```java
public BuildxBuilderKubernetes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetes">BuildxBuilderKubernetes</a>

---


### BuildxBuilderKubernetesQemuOutputReference <a name="BuildxBuilderKubernetesQemuOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilderKubernetesQemuOutputReference;

new BuildxBuilderKubernetesQemuOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImage` <a name="resetImage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resetImage"></a>

```java
public void resetImage()
```

##### `resetInstall` <a name="resetInstall" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.resetInstall"></a>

```java
public void resetInstall()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.installInput">installInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.install">install</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `installInput`<sup>Optional</sup> <a name="installInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.installInput"></a>

```java
public java.lang.Object getInstallInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `install`<sup>Required</sup> <a name="install" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.install"></a>

```java
public java.lang.Object getInstall();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemuOutputReference.property.internalValue"></a>

```java
public BuildxBuilderKubernetesQemu getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesQemu">BuildxBuilderKubernetesQemu</a>

---


### BuildxBuilderKubernetesRequestsOutputReference <a name="BuildxBuilderKubernetesRequestsOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilderKubernetesRequestsOutputReference;

new BuildxBuilderKubernetesRequestsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetEphemeralStorage` <a name="resetEphemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetEphemeralStorage"></a>

```java
public void resetEphemeralStorage()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.resetMemory"></a>

```java
public void resetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorageInput">ephemeralStorageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpu">cpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorage">ephemeralStorage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpuInput"></a>

```java
public java.lang.String getCpuInput();
```

- *Type:* java.lang.String

---

##### `ephemeralStorageInput`<sup>Optional</sup> <a name="ephemeralStorageInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorageInput"></a>

```java
public java.lang.String getEphemeralStorageInput();
```

- *Type:* java.lang.String

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memoryInput"></a>

```java
public java.lang.String getMemoryInput();
```

- *Type:* java.lang.String

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.ephemeralStorage"></a>

```java
public java.lang.String getEphemeralStorage();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequestsOutputReference.property.internalValue"></a>

```java
public BuildxBuilderKubernetesRequests getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderKubernetesRequests">BuildxBuilderKubernetesRequests</a>

---


### BuildxBuilderRemoteOutputReference <a name="BuildxBuilderRemoteOutputReference" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.buildx_builder.BuildxBuilderRemoteOutputReference;

new BuildxBuilderRemoteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCacert` <a name="resetCacert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetCacert"></a>

```java
public void resetCacert()
```

##### `resetCert` <a name="resetCert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetCert"></a>

```java
public void resetCert()
```

##### `resetDefaultLoad` <a name="resetDefaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetDefaultLoad"></a>

```java
public void resetDefaultLoad()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetServername` <a name="resetServername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.resetServername"></a>

```java
public void resetServername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacertInput">cacertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.certInput">certInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoadInput">defaultLoadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servernameInput">servernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacert">cacert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cert">cert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoad">defaultLoad</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servername">servername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacertInput`<sup>Optional</sup> <a name="cacertInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacertInput"></a>

```java
public java.lang.String getCacertInput();
```

- *Type:* java.lang.String

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.certInput"></a>

```java
public java.lang.String getCertInput();
```

- *Type:* java.lang.String

---

##### `defaultLoadInput`<sup>Optional</sup> <a name="defaultLoadInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoadInput"></a>

```java
public java.lang.Object getDefaultLoadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `servernameInput`<sup>Optional</sup> <a name="servernameInput" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servernameInput"></a>

```java
public java.lang.String getServernameInput();
```

- *Type:* java.lang.String

---

##### `cacert`<sup>Required</sup> <a name="cacert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cacert"></a>

```java
public java.lang.String getCacert();
```

- *Type:* java.lang.String

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

---

##### `defaultLoad`<sup>Required</sup> <a name="defaultLoad" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.defaultLoad"></a>

```java
public java.lang.Object getDefaultLoad();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `servername`<sup>Required</sup> <a name="servername" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.servername"></a>

```java
public java.lang.String getServername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemoteOutputReference.property.internalValue"></a>

```java
public BuildxBuilderRemote getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.buildxBuilder.BuildxBuilderRemote">BuildxBuilderRemote</a>

---



