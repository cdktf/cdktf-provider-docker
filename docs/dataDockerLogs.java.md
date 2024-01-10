# `dataDockerLogs` Submodule <a name="`dataDockerLogs` Submodule" id="@cdktf/provider-docker.dataDockerLogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDockerLogs <a name="DataDockerLogs" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs docker_logs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.data_docker_logs.DataDockerLogs;

DataDockerLogs.Builder.create(Construct scope, java.lang.String id)
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
//  .details(java.lang.Boolean)
//  .details(IResolvable)
//  .discardHeaders(java.lang.Boolean)
//  .discardHeaders(IResolvable)
//  .follow(java.lang.Boolean)
//  .follow(IResolvable)
//  .id(java.lang.String)
//  .logsListStringEnabled(java.lang.Boolean)
//  .logsListStringEnabled(IResolvable)
//  .showStderr(java.lang.Boolean)
//  .showStderr(IResolvable)
//  .showStdout(java.lang.Boolean)
//  .showStdout(IResolvable)
//  .since(java.lang.String)
//  .tail(java.lang.String)
//  .timestamps(java.lang.Boolean)
//  .timestamps(IResolvable)
//  .until(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Docker Container. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.details">details</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#details DataDockerLogs#details}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.discardHeaders">discardHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Discard headers that docker appends to each log entry. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.follow">follow</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#follow DataDockerLogs#follow}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#id DataDockerLogs#id}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.logsListStringEnabled">logsListStringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true populate computed value `logs_list_string`. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.showStderr">showStderr</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#show_stderr DataDockerLogs#show_stderr}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.showStdout">showStdout</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#show_stdout DataDockerLogs#show_stdout}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.since">since</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#since DataDockerLogs#since}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.tail">tail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#tail DataDockerLogs#tail}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.timestamps">timestamps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#timestamps DataDockerLogs#timestamps}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.until">until</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#until DataDockerLogs#until}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Docker Container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#name DataDockerLogs#name}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.details"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#details DataDockerLogs#details}.

---

##### `discardHeaders`<sup>Optional</sup> <a name="discardHeaders" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.discardHeaders"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Discard headers that docker appends to each log entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#discard_headers DataDockerLogs#discard_headers}

---

##### `follow`<sup>Optional</sup> <a name="follow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.follow"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#follow DataDockerLogs#follow}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#id DataDockerLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logsListStringEnabled`<sup>Optional</sup> <a name="logsListStringEnabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.logsListStringEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true populate computed value `logs_list_string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#logs_list_string_enabled DataDockerLogs#logs_list_string_enabled}

---

##### `showStderr`<sup>Optional</sup> <a name="showStderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.showStderr"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#show_stderr DataDockerLogs#show_stderr}.

---

##### `showStdout`<sup>Optional</sup> <a name="showStdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.showStdout"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#show_stdout DataDockerLogs#show_stdout}.

---

##### `since`<sup>Optional</sup> <a name="since" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.since"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#since DataDockerLogs#since}.

---

##### `tail`<sup>Optional</sup> <a name="tail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.tail"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#tail DataDockerLogs#tail}.

---

##### `timestamps`<sup>Optional</sup> <a name="timestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.timestamps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#timestamps DataDockerLogs#timestamps}.

---

##### `until`<sup>Optional</sup> <a name="until" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.until"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#until DataDockerLogs#until}.

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDetails` <a name="resetDetails" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDetails"></a>

```java
public void resetDetails()
```

##### `resetDiscardHeaders` <a name="resetDiscardHeaders" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDiscardHeaders"></a>

```java
public void resetDiscardHeaders()
```

##### `resetFollow` <a name="resetFollow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetFollow"></a>

```java
public void resetFollow()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetId"></a>

```java
public void resetId()
```

##### `resetLogsListStringEnabled` <a name="resetLogsListStringEnabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetLogsListStringEnabled"></a>

```java
public void resetLogsListStringEnabled()
```

##### `resetShowStderr` <a name="resetShowStderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStderr"></a>

```java
public void resetShowStderr()
```

##### `resetShowStdout` <a name="resetShowStdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStdout"></a>

```java
public void resetShowStdout()
```

##### `resetSince` <a name="resetSince" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetSince"></a>

```java
public void resetSince()
```

##### `resetTail` <a name="resetTail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTail"></a>

```java
public void resetTail()
```

##### `resetTimestamps` <a name="resetTimestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTimestamps"></a>

```java
public void resetTimestamps()
```

##### `resetUntil` <a name="resetUntil" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetUntil"></a>

```java
public void resetUntil()
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

```java
import com.hashicorp.cdktf.providers.docker.data_docker_logs.DataDockerLogs;

DataDockerLogs.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.docker.data_docker_logs.DataDockerLogs;

DataDockerLogs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.docker.data_docker_logs.DataDockerLogs;

DataDockerLogs.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.docker.data_docker_logs.DataDockerLogs;

DataDockerLogs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDockerLogs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDockerLogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDockerLogs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDockerLogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDockerLogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListString">logsListString</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.detailsInput">detailsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeadersInput">discardHeadersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.followInput">followInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabledInput">logsListStringEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderrInput">showStderrInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdoutInput">showStdoutInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.sinceInput">sinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tailInput">tailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestampsInput">timestampsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.untilInput">untilInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.details">details</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeaders">discardHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.follow">follow</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabled">logsListStringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderr">showStderr</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdout">showStdout</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.since">since</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tail">tail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestamps">timestamps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.until">until</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `logsListString`<sup>Required</sup> <a name="logsListString" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListString"></a>

```java
public java.util.List<java.lang.String> getLogsListString();
```

- *Type:* java.util.List<java.lang.String>

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.detailsInput"></a>

```java
public java.lang.Object getDetailsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `discardHeadersInput`<sup>Optional</sup> <a name="discardHeadersInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeadersInput"></a>

```java
public java.lang.Object getDiscardHeadersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `followInput`<sup>Optional</sup> <a name="followInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.followInput"></a>

```java
public java.lang.Object getFollowInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logsListStringEnabledInput`<sup>Optional</sup> <a name="logsListStringEnabledInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabledInput"></a>

```java
public java.lang.Object getLogsListStringEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `showStderrInput`<sup>Optional</sup> <a name="showStderrInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderrInput"></a>

```java
public java.lang.Object getShowStderrInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `showStdoutInput`<sup>Optional</sup> <a name="showStdoutInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdoutInput"></a>

```java
public java.lang.Object getShowStdoutInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sinceInput`<sup>Optional</sup> <a name="sinceInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.sinceInput"></a>

```java
public java.lang.String getSinceInput();
```

- *Type:* java.lang.String

---

##### `tailInput`<sup>Optional</sup> <a name="tailInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tailInput"></a>

```java
public java.lang.String getTailInput();
```

- *Type:* java.lang.String

---

##### `timestampsInput`<sup>Optional</sup> <a name="timestampsInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestampsInput"></a>

```java
public java.lang.Object getTimestampsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `untilInput`<sup>Optional</sup> <a name="untilInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.untilInput"></a>

```java
public java.lang.String getUntilInput();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.details"></a>

```java
public java.lang.Object getDetails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `discardHeaders`<sup>Required</sup> <a name="discardHeaders" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeaders"></a>

```java
public java.lang.Object getDiscardHeaders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `follow`<sup>Required</sup> <a name="follow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.follow"></a>

```java
public java.lang.Object getFollow();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logsListStringEnabled`<sup>Required</sup> <a name="logsListStringEnabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabled"></a>

```java
public java.lang.Object getLogsListStringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `showStderr`<sup>Required</sup> <a name="showStderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderr"></a>

```java
public java.lang.Object getShowStderr();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `showStdout`<sup>Required</sup> <a name="showStdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdout"></a>

```java
public java.lang.Object getShowStdout();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `since`<sup>Required</sup> <a name="since" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.since"></a>

```java
public java.lang.String getSince();
```

- *Type:* java.lang.String

---

##### `tail`<sup>Required</sup> <a name="tail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tail"></a>

```java
public java.lang.String getTail();
```

- *Type:* java.lang.String

---

##### `timestamps`<sup>Required</sup> <a name="timestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestamps"></a>

```java
public java.lang.Object getTimestamps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `until`<sup>Required</sup> <a name="until" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.until"></a>

```java
public java.lang.String getUntil();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDockerLogsConfig <a name="DataDockerLogsConfig" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.data_docker_logs.DataDockerLogsConfig;

DataDockerLogsConfig.builder()
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
//  .details(java.lang.Boolean)
//  .details(IResolvable)
//  .discardHeaders(java.lang.Boolean)
//  .discardHeaders(IResolvable)
//  .follow(java.lang.Boolean)
//  .follow(IResolvable)
//  .id(java.lang.String)
//  .logsListStringEnabled(java.lang.Boolean)
//  .logsListStringEnabled(IResolvable)
//  .showStderr(java.lang.Boolean)
//  .showStderr(IResolvable)
//  .showStdout(java.lang.Boolean)
//  .showStdout(IResolvable)
//  .since(java.lang.String)
//  .tail(java.lang.String)
//  .timestamps(java.lang.Boolean)
//  .timestamps(IResolvable)
//  .until(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Docker Container. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.details">details</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#details DataDockerLogs#details}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.discardHeaders">discardHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Discard headers that docker appends to each log entry. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.follow">follow</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#follow DataDockerLogs#follow}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#id DataDockerLogs#id}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.logsListStringEnabled">logsListStringEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true populate computed value `logs_list_string`. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStderr">showStderr</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#show_stderr DataDockerLogs#show_stderr}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStdout">showStdout</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#show_stdout DataDockerLogs#show_stdout}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.since">since</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#since DataDockerLogs#since}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.tail">tail</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#tail DataDockerLogs#tail}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.timestamps">timestamps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#timestamps DataDockerLogs#timestamps}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.until">until</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#until DataDockerLogs#until}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Docker Container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#name DataDockerLogs#name}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.details"></a>

```java
public java.lang.Object getDetails();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#details DataDockerLogs#details}.

---

##### `discardHeaders`<sup>Optional</sup> <a name="discardHeaders" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.discardHeaders"></a>

```java
public java.lang.Object getDiscardHeaders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Discard headers that docker appends to each log entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#discard_headers DataDockerLogs#discard_headers}

---

##### `follow`<sup>Optional</sup> <a name="follow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.follow"></a>

```java
public java.lang.Object getFollow();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#follow DataDockerLogs#follow}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#id DataDockerLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logsListStringEnabled`<sup>Optional</sup> <a name="logsListStringEnabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.logsListStringEnabled"></a>

```java
public java.lang.Object getLogsListStringEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true populate computed value `logs_list_string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#logs_list_string_enabled DataDockerLogs#logs_list_string_enabled}

---

##### `showStderr`<sup>Optional</sup> <a name="showStderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStderr"></a>

```java
public java.lang.Object getShowStderr();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#show_stderr DataDockerLogs#show_stderr}.

---

##### `showStdout`<sup>Optional</sup> <a name="showStdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStdout"></a>

```java
public java.lang.Object getShowStdout();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#show_stdout DataDockerLogs#show_stdout}.

---

##### `since`<sup>Optional</sup> <a name="since" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.since"></a>

```java
public java.lang.String getSince();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#since DataDockerLogs#since}.

---

##### `tail`<sup>Optional</sup> <a name="tail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.tail"></a>

```java
public java.lang.String getTail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#tail DataDockerLogs#tail}.

---

##### `timestamps`<sup>Optional</sup> <a name="timestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.timestamps"></a>

```java
public java.lang.Object getTimestamps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#timestamps DataDockerLogs#timestamps}.

---

##### `until`<sup>Optional</sup> <a name="until" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.until"></a>

```java
public java.lang.String getUntil();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#until DataDockerLogs#until}.

---



