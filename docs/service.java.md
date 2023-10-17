# `docker_service`

Refer to the Terraform Registory for docs: [`docker_service`](https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service).

# `service` Submodule <a name="`service` Submodule" id="@cdktf/provider-docker.service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Service <a name="Service" id="@cdktf/provider-docker.service.Service"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service docker_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.Service.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.Service;

Service.Builder.create(Construct scope, java.lang.String id)
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
    .taskSpec(ServiceTaskSpec)
//  .auth(ServiceAuth)
//  .convergeConfig(ServiceConvergeConfig)
//  .endpointSpec(ServiceEndpointSpec)
//  .id(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<ServiceLabels>)
//  .mode(ServiceMode)
//  .rollbackConfig(ServiceRollbackConfig)
//  .updateConfig(ServiceUpdateConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the service. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.taskSpec">taskSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a></code> | task_spec block. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.auth">auth</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.convergeConfig">convergeConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a></code> | converge_config block. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.endpointSpec">endpointSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a></code> | endpoint_spec block. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.mode">mode</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a></code> | mode block. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.rollbackConfig">rollbackConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a></code> | rollback_config block. |
| <code><a href="#@cdktf/provider-docker.service.Service.Initializer.parameter.updateConfig">updateConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a></code> | update_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.service.Service.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.service.Service.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.service.Service.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.service.Service.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.service.Service.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.service.Service.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.service.Service.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.service.Service.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.service.Service.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.Service.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#name Service#name}

---

##### `taskSpec`<sup>Required</sup> <a name="taskSpec" id="@cdktf/provider-docker.service.Service.Initializer.parameter.taskSpec"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

task_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#task_spec Service#task_spec}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktf/provider-docker.service.Service.Initializer.parameter.auth"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#auth Service#auth}

---

##### `convergeConfig`<sup>Optional</sup> <a name="convergeConfig" id="@cdktf/provider-docker.service.Service.Initializer.parameter.convergeConfig"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

converge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#converge_config Service#converge_config}

---

##### `endpointSpec`<sup>Optional</sup> <a name="endpointSpec" id="@cdktf/provider-docker.service.Service.Initializer.parameter.endpointSpec"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

endpoint_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#endpoint_spec Service#endpoint_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.service.Service.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.service.Service.Initializer.parameter.labels"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#labels Service#labels}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.service.Service.Initializer.parameter.mode"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#mode Service#mode}

---

##### `rollbackConfig`<sup>Optional</sup> <a name="rollbackConfig" id="@cdktf/provider-docker.service.Service.Initializer.parameter.rollbackConfig"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

rollback_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#rollback_config Service#rollback_config}

---

##### `updateConfig`<sup>Optional</sup> <a name="updateConfig" id="@cdktf/provider-docker.service.Service.Initializer.parameter.updateConfig"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

update_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#update_config Service#update_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.service.Service.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.service.Service.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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
| <code><a href="#@cdktf/provider-docker.service.Service.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.service.Service.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.service.Service.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.service.Service.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.service.Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.service.Service.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.service.Service.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.service.Service.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-docker.service.Service.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.service.Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.Service.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.Service.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.Service.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.Service.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.Service.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.Service.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.Service.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.Service.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.Service.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-docker.service.Service.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.service.Service.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.service.Service.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.Service.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-docker.service.Service.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-docker.service.Service.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-docker.service.Service.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAuth` <a name="putAuth" id="@cdktf/provider-docker.service.Service.putAuth"></a>

```java
public void putAuth(ServiceAuth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

---

##### `putConvergeConfig` <a name="putConvergeConfig" id="@cdktf/provider-docker.service.Service.putConvergeConfig"></a>

```java
public void putConvergeConfig(ServiceConvergeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putConvergeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

---

##### `putEndpointSpec` <a name="putEndpointSpec" id="@cdktf/provider-docker.service.Service.putEndpointSpec"></a>

```java
public void putEndpointSpec(ServiceEndpointSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-docker.service.Service.putLabels"></a>

```java
public void putLabels(IResolvable OR java.util.List<ServiceLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>>

---

##### `putMode` <a name="putMode" id="@cdktf/provider-docker.service.Service.putMode"></a>

```java
public void putMode(ServiceMode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

---

##### `putRollbackConfig` <a name="putRollbackConfig" id="@cdktf/provider-docker.service.Service.putRollbackConfig"></a>

```java
public void putRollbackConfig(ServiceRollbackConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putRollbackConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

---

##### `putTaskSpec` <a name="putTaskSpec" id="@cdktf/provider-docker.service.Service.putTaskSpec"></a>

```java
public void putTaskSpec(ServiceTaskSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putTaskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

---

##### `putUpdateConfig` <a name="putUpdateConfig" id="@cdktf/provider-docker.service.Service.putUpdateConfig"></a>

```java
public void putUpdateConfig(ServiceUpdateConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.Service.putUpdateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

---

##### `resetAuth` <a name="resetAuth" id="@cdktf/provider-docker.service.Service.resetAuth"></a>

```java
public void resetAuth()
```

##### `resetConvergeConfig` <a name="resetConvergeConfig" id="@cdktf/provider-docker.service.Service.resetConvergeConfig"></a>

```java
public void resetConvergeConfig()
```

##### `resetEndpointSpec` <a name="resetEndpointSpec" id="@cdktf/provider-docker.service.Service.resetEndpointSpec"></a>

```java
public void resetEndpointSpec()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-docker.service.Service.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-docker.service.Service.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-docker.service.Service.resetMode"></a>

```java
public void resetMode()
```

##### `resetRollbackConfig` <a name="resetRollbackConfig" id="@cdktf/provider-docker.service.Service.resetRollbackConfig"></a>

```java
public void resetRollbackConfig()
```

##### `resetUpdateConfig` <a name="resetUpdateConfig" id="@cdktf/provider-docker.service.Service.resetUpdateConfig"></a>

```java
public void resetUpdateConfig()
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

```java
import com.hashicorp.cdktf.providers.docker.service.Service;

Service.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.service.Service.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.Service;

Service.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.service.Service.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-docker.service.Service.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.Service;

Service.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.service.Service.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-docker.service.Service.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.Service;

Service.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Service.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.service.Service.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.service.Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Service to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.service.Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.service.Service.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.service.Service.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-docker.service.Service.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.labelsInput">labelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.modeInput">modeInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.rollbackConfigInput">rollbackConfigInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.taskSpecInput">taskSpecInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.updateConfigInput">updateConfigInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.Service.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.service.Service.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.service.Service.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.Service.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.service.Service.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-docker.service.Service.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.service.Service.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.service.Service.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.service.Service.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.service.Service.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.service.Service.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.service.Service.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.service.Service.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.service.Service.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.service.Service.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-docker.service.Service.property.auth"></a>

```java
public ServiceAuthOutputReference getAuth();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference">ServiceAuthOutputReference</a>

---

##### `convergeConfig`<sup>Required</sup> <a name="convergeConfig" id="@cdktf/provider-docker.service.Service.property.convergeConfig"></a>

```java
public ServiceConvergeConfigOutputReference getConvergeConfig();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference">ServiceConvergeConfigOutputReference</a>

---

##### `endpointSpec`<sup>Required</sup> <a name="endpointSpec" id="@cdktf/provider-docker.service.Service.property.endpointSpec"></a>

```java
public ServiceEndpointSpecOutputReference getEndpointSpec();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference">ServiceEndpointSpecOutputReference</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.service.Service.property.labels"></a>

```java
public ServiceLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceLabelsList">ServiceLabelsList</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-docker.service.Service.property.mode"></a>

```java
public ServiceModeOutputReference getMode();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeOutputReference">ServiceModeOutputReference</a>

---

##### `rollbackConfig`<sup>Required</sup> <a name="rollbackConfig" id="@cdktf/provider-docker.service.Service.property.rollbackConfig"></a>

```java
public ServiceRollbackConfigOutputReference getRollbackConfig();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference">ServiceRollbackConfigOutputReference</a>

---

##### `taskSpec`<sup>Required</sup> <a name="taskSpec" id="@cdktf/provider-docker.service.Service.property.taskSpec"></a>

```java
public ServiceTaskSpecOutputReference getTaskSpec();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference">ServiceTaskSpecOutputReference</a>

---

##### `updateConfig`<sup>Required</sup> <a name="updateConfig" id="@cdktf/provider-docker.service.Service.property.updateConfig"></a>

```java
public ServiceUpdateConfigOutputReference getUpdateConfig();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference">ServiceUpdateConfigOutputReference</a>

---

##### `authInput`<sup>Optional</sup> <a name="authInput" id="@cdktf/provider-docker.service.Service.property.authInput"></a>

```java
public ServiceAuth getAuthInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

---

##### `convergeConfigInput`<sup>Optional</sup> <a name="convergeConfigInput" id="@cdktf/provider-docker.service.Service.property.convergeConfigInput"></a>

```java
public ServiceConvergeConfig getConvergeConfigInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

---

##### `endpointSpecInput`<sup>Optional</sup> <a name="endpointSpecInput" id="@cdktf/provider-docker.service.Service.property.endpointSpecInput"></a>

```java
public ServiceEndpointSpec getEndpointSpecInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-docker.service.Service.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-docker.service.Service.property.labelsInput"></a>

```java
public java.lang.Object getLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-docker.service.Service.property.modeInput"></a>

```java
public ServiceMode getModeInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.service.Service.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rollbackConfigInput`<sup>Optional</sup> <a name="rollbackConfigInput" id="@cdktf/provider-docker.service.Service.property.rollbackConfigInput"></a>

```java
public ServiceRollbackConfig getRollbackConfigInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

---

##### `taskSpecInput`<sup>Optional</sup> <a name="taskSpecInput" id="@cdktf/provider-docker.service.Service.property.taskSpecInput"></a>

```java
public ServiceTaskSpec getTaskSpecInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

---

##### `updateConfigInput`<sup>Optional</sup> <a name="updateConfigInput" id="@cdktf/provider-docker.service.Service.property.updateConfigInput"></a>

```java
public ServiceUpdateConfig getUpdateConfigInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.service.Service.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.Service.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.Service.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.service.Service.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceAuth <a name="ServiceAuth" id="@cdktf/provider-docker.service.ServiceAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceAuth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceAuth;

ServiceAuth.builder()
    .serverAddress(java.lang.String)
//  .password(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuth.property.serverAddress">serverAddress</a></code> | <code>java.lang.String</code> | The address of the server for the authentication. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuth.property.password">password</a></code> | <code>java.lang.String</code> | The password. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuth.property.username">username</a></code> | <code>java.lang.String</code> | The username. |

---

##### `serverAddress`<sup>Required</sup> <a name="serverAddress" id="@cdktf/provider-docker.service.ServiceAuth.property.serverAddress"></a>

```java
public java.lang.String getServerAddress();
```

- *Type:* java.lang.String

The address of the server for the authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#server_address Service#server_address}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-docker.service.ServiceAuth.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#password Service#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-docker.service.ServiceAuth.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#username Service#username}

---

### ServiceConfig <a name="ServiceConfig" id="@cdktf/provider-docker.service.ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceConfig;

ServiceConfig.builder()
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
    .taskSpec(ServiceTaskSpec)
//  .auth(ServiceAuth)
//  .convergeConfig(ServiceConvergeConfig)
//  .endpointSpec(ServiceEndpointSpec)
//  .id(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<ServiceLabels>)
//  .mode(ServiceMode)
//  .rollbackConfig(ServiceRollbackConfig)
//  .updateConfig(ServiceUpdateConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the service. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.taskSpec">taskSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a></code> | task_spec block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.convergeConfig">convergeConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a></code> | converge_config block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.endpointSpec">endpointSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a></code> | endpoint_spec block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.mode">mode</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a></code> | mode block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.rollbackConfig">rollbackConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a></code> | rollback_config block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConfig.property.updateConfig">updateConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a></code> | update_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.service.ServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.service.ServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.service.ServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.service.ServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.service.ServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.service.ServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.service.ServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#name Service#name}

---

##### `taskSpec`<sup>Required</sup> <a name="taskSpec" id="@cdktf/provider-docker.service.ServiceConfig.property.taskSpec"></a>

```java
public ServiceTaskSpec getTaskSpec();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

task_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#task_spec Service#task_spec}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktf/provider-docker.service.ServiceConfig.property.auth"></a>

```java
public ServiceAuth getAuth();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#auth Service#auth}

---

##### `convergeConfig`<sup>Optional</sup> <a name="convergeConfig" id="@cdktf/provider-docker.service.ServiceConfig.property.convergeConfig"></a>

```java
public ServiceConvergeConfig getConvergeConfig();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

converge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#converge_config Service#converge_config}

---

##### `endpointSpec`<sup>Optional</sup> <a name="endpointSpec" id="@cdktf/provider-docker.service.ServiceConfig.property.endpointSpec"></a>

```java
public ServiceEndpointSpec getEndpointSpec();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

endpoint_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#endpoint_spec Service#endpoint_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.service.ServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceConfig.property.labels"></a>

```java
public java.lang.Object getLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#labels Service#labels}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.service.ServiceConfig.property.mode"></a>

```java
public ServiceMode getMode();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#mode Service#mode}

---

##### `rollbackConfig`<sup>Optional</sup> <a name="rollbackConfig" id="@cdktf/provider-docker.service.ServiceConfig.property.rollbackConfig"></a>

```java
public ServiceRollbackConfig getRollbackConfig();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

rollback_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#rollback_config Service#rollback_config}

---

##### `updateConfig`<sup>Optional</sup> <a name="updateConfig" id="@cdktf/provider-docker.service.ServiceConfig.property.updateConfig"></a>

```java
public ServiceUpdateConfig getUpdateConfig();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

update_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#update_config Service#update_config}

---

### ServiceConvergeConfig <a name="ServiceConvergeConfig" id="@cdktf/provider-docker.service.ServiceConvergeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceConvergeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceConvergeConfig;

ServiceConvergeConfig.builder()
//  .delay(java.lang.String)
//  .timeout(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig.property.delay">delay</a></code> | <code>java.lang.String</code> | The interval to check if the desired state is reached `(ms\|s)`. Defaults to `7s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig.property.timeout">timeout</a></code> | <code>java.lang.String</code> | The timeout of the service to reach the desired state `(s\|m)`. Defaults to `3m`. |

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceConvergeConfig.property.delay"></a>

```java
public java.lang.String getDelay();
```

- *Type:* java.lang.String

The interval to check if the desired state is reached `(ms|s)`. Defaults to `7s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#delay Service#delay}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-docker.service.ServiceConvergeConfig.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

The timeout of the service to reach the desired state `(s|m)`. Defaults to `3m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#timeout Service#timeout}

---

### ServiceEndpointSpec <a name="ServiceEndpointSpec" id="@cdktf/provider-docker.service.ServiceEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceEndpointSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceEndpointSpec;

ServiceEndpointSpec.builder()
//  .mode(java.lang.String)
//  .ports(IResolvable)
//  .ports(java.util.List<ServiceEndpointSpecPorts>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec.property.mode">mode</a></code> | <code>java.lang.String</code> | The mode of resolution to use for internal load balancing between tasks. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec.property.ports">ports</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>></code> | ports block. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.service.ServiceEndpointSpec.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The mode of resolution to use for internal load balancing between tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#mode Service#mode}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-docker.service.ServiceEndpointSpec.property.ports"></a>

```java
public java.lang.Object getPorts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>>

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#ports Service#ports}

---

### ServiceEndpointSpecPorts <a name="ServiceEndpointSpecPorts" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceEndpointSpecPorts;

ServiceEndpointSpecPorts.builder()
    .targetPort(java.lang.Number)
//  .name(java.lang.String)
//  .protocol(java.lang.String)
//  .publishedPort(java.lang.Number)
//  .publishMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.targetPort">targetPort</a></code> | <code>java.lang.Number</code> | The port inside the container. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.name">name</a></code> | <code>java.lang.String</code> | A random name for the port. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Rrepresents the protocol of a port: `tcp`, `udp` or `sctp`. Defaults to `tcp`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.publishedPort">publishedPort</a></code> | <code>java.lang.Number</code> | The port on the swarm hosts. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.publishMode">publishMode</a></code> | <code>java.lang.String</code> | Represents the mode in which the port is to be published: 'ingress' or 'host'. Defaults to `ingress`. |

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.targetPort"></a>

```java
public java.lang.Number getTargetPort();
```

- *Type:* java.lang.Number

The port inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#target_port Service#target_port}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A random name for the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#name Service#name}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Rrepresents the protocol of a port: `tcp`, `udp` or `sctp`. Defaults to `tcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#protocol Service#protocol}

---

##### `publishedPort`<sup>Optional</sup> <a name="publishedPort" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.publishedPort"></a>

```java
public java.lang.Number getPublishedPort();
```

- *Type:* java.lang.Number

The port on the swarm hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#published_port Service#published_port}

---

##### `publishMode`<sup>Optional</sup> <a name="publishMode" id="@cdktf/provider-docker.service.ServiceEndpointSpecPorts.property.publishMode"></a>

```java
public java.lang.String getPublishMode();
```

- *Type:* java.lang.String

Represents the mode in which the port is to be published: 'ingress' or 'host'. Defaults to `ingress`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#publish_mode Service#publish_mode}

---

### ServiceLabels <a name="ServiceLabels" id="@cdktf/provider-docker.service.ServiceLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceLabels;

ServiceLabels.builder()
    .label(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabels.property.label">label</a></code> | <code>java.lang.String</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabels.property.value">value</a></code> | <code>java.lang.String</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceLabels.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#label Service#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#value Service#value}

---

### ServiceMode <a name="ServiceMode" id="@cdktf/provider-docker.service.ServiceMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceMode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceMode;

ServiceMode.builder()
//  .global(java.lang.Boolean)
//  .global(IResolvable)
//  .replicated(ServiceModeReplicated)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceMode.property.global">global</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The global service mode. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceMode.property.replicated">replicated</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a></code> | replicated block. |

---

##### `global`<sup>Optional</sup> <a name="global" id="@cdktf/provider-docker.service.ServiceMode.property.global"></a>

```java
public java.lang.Object getGlobal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The global service mode. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#global Service#global}

---

##### `replicated`<sup>Optional</sup> <a name="replicated" id="@cdktf/provider-docker.service.ServiceMode.property.replicated"></a>

```java
public ServiceModeReplicated getReplicated();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a>

replicated block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#replicated Service#replicated}

---

### ServiceModeReplicated <a name="ServiceModeReplicated" id="@cdktf/provider-docker.service.ServiceModeReplicated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceModeReplicated.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceModeReplicated;

ServiceModeReplicated.builder()
//  .replicas(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicated.property.replicas">replicas</a></code> | <code>java.lang.Number</code> | The amount of replicas of the service. Defaults to `1`. |

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-docker.service.ServiceModeReplicated.property.replicas"></a>

```java
public java.lang.Number getReplicas();
```

- *Type:* java.lang.Number

The amount of replicas of the service. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#replicas Service#replicas}

---

### ServiceRollbackConfig <a name="ServiceRollbackConfig" id="@cdktf/provider-docker.service.ServiceRollbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceRollbackConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceRollbackConfig;

ServiceRollbackConfig.builder()
//  .delay(java.lang.String)
//  .failureAction(java.lang.String)
//  .maxFailureRatio(java.lang.String)
//  .monitor(java.lang.String)
//  .order(java.lang.String)
//  .parallelism(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.delay">delay</a></code> | <code>java.lang.String</code> | Delay between task rollbacks (ns\|us\|ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.failureAction">failureAction</a></code> | <code>java.lang.String</code> | Action on rollback failure: pause \| continue. Defaults to `pause`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.maxFailureRatio">maxFailureRatio</a></code> | <code>java.lang.String</code> | Failure rate to tolerate during a rollback. Defaults to `0.0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.monitor">monitor</a></code> | <code>java.lang.String</code> | Duration after each task rollback to monitor for failure (ns\|us\|ms\|s\|m\|h). Defaults to `5s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.order">order</a></code> | <code>java.lang.String</code> | Rollback order: either 'stop-first' or 'start-first'. Defaults to `stop-first`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig.property.parallelism">parallelism</a></code> | <code>java.lang.Number</code> | Maximum number of tasks to be rollbacked in one iteration. Defaults to `1`. |

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.delay"></a>

```java
public java.lang.String getDelay();
```

- *Type:* java.lang.String

Delay between task rollbacks (ns|us|ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#delay Service#delay}

---

##### `failureAction`<sup>Optional</sup> <a name="failureAction" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.failureAction"></a>

```java
public java.lang.String getFailureAction();
```

- *Type:* java.lang.String

Action on rollback failure: pause | continue. Defaults to `pause`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#failure_action Service#failure_action}

---

##### `maxFailureRatio`<sup>Optional</sup> <a name="maxFailureRatio" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.maxFailureRatio"></a>

```java
public java.lang.String getMaxFailureRatio();
```

- *Type:* java.lang.String

Failure rate to tolerate during a rollback. Defaults to `0.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#max_failure_ratio Service#max_failure_ratio}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.monitor"></a>

```java
public java.lang.String getMonitor();
```

- *Type:* java.lang.String

Duration after each task rollback to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#monitor Service#monitor}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Rollback order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#order Service#order}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-docker.service.ServiceRollbackConfig.property.parallelism"></a>

```java
public java.lang.Number getParallelism();
```

- *Type:* java.lang.Number

Maximum number of tasks to be rollbacked in one iteration. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#parallelism Service#parallelism}

---

### ServiceTaskSpec <a name="ServiceTaskSpec" id="@cdktf/provider-docker.service.ServiceTaskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpec;

ServiceTaskSpec.builder()
    .containerSpec(ServiceTaskSpecContainerSpec)
//  .forceUpdate(java.lang.Number)
//  .logDriver(ServiceTaskSpecLogDriver)
//  .networksAdvanced(IResolvable)
//  .networksAdvanced(java.util.List<ServiceTaskSpecNetworksAdvanced>)
//  .placement(ServiceTaskSpecPlacement)
//  .resources(ServiceTaskSpecResources)
//  .restartPolicy(ServiceTaskSpecRestartPolicy)
//  .runtime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.containerSpec">containerSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.forceUpdate">forceUpdate</a></code> | <code>java.lang.Number</code> | A counter that triggers an update even if no relevant parameters have been changed. See the [spec](https://github.com/docker/swarmkit/blob/master/api/specs.proto#L126). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.logDriver">logDriver</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a></code> | log_driver block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.networksAdvanced">networksAdvanced</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>></code> | networks_advanced block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.restartPolicy">restartPolicy</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a></code> | restart_policy block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec.property.runtime">runtime</a></code> | <code>java.lang.String</code> | Runtime is the type of runtime specified for the task executor. See the [types](https://github.com/moby/moby/blob/master/api/types/swarm/runtime.go). |

---

##### `containerSpec`<sup>Required</sup> <a name="containerSpec" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.containerSpec"></a>

```java
public ServiceTaskSpecContainerSpec getContainerSpec();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#container_spec Service#container_spec}

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.forceUpdate"></a>

```java
public java.lang.Number getForceUpdate();
```

- *Type:* java.lang.Number

A counter that triggers an update even if no relevant parameters have been changed. See the [spec](https://github.com/docker/swarmkit/blob/master/api/specs.proto#L126).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#force_update Service#force_update}

---

##### `logDriver`<sup>Optional</sup> <a name="logDriver" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.logDriver"></a>

```java
public ServiceTaskSpecLogDriver getLogDriver();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a>

log_driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#log_driver Service#log_driver}

---

##### `networksAdvanced`<sup>Optional</sup> <a name="networksAdvanced" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.networksAdvanced"></a>

```java
public java.lang.Object getNetworksAdvanced();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>>

networks_advanced block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#networks_advanced Service#networks_advanced}

---

##### `placement`<sup>Optional</sup> <a name="placement" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.placement"></a>

```java
public ServiceTaskSpecPlacement getPlacement();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#placement Service#placement}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.resources"></a>

```java
public ServiceTaskSpecResources getResources();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#resources Service#resources}

---

##### `restartPolicy`<sup>Optional</sup> <a name="restartPolicy" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.restartPolicy"></a>

```java
public ServiceTaskSpecRestartPolicy getRestartPolicy();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a>

restart_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#restart_policy Service#restart_policy}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-docker.service.ServiceTaskSpec.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

Runtime is the type of runtime specified for the task executor. See the [types](https://github.com/moby/moby/blob/master/api/types/swarm/runtime.go).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#runtime Service#runtime}

---

### ServiceTaskSpecContainerSpec <a name="ServiceTaskSpecContainerSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpec;

ServiceTaskSpecContainerSpec.builder()
    .image(java.lang.String)
//  .args(java.util.List<java.lang.String>)
//  .command(java.util.List<java.lang.String>)
//  .configs(IResolvable)
//  .configs(java.util.List<ServiceTaskSpecContainerSpecConfigs>)
//  .dir(java.lang.String)
//  .dnsConfig(ServiceTaskSpecContainerSpecDnsConfig)
//  .env(java.util.Map<java.lang.String, java.lang.String>)
//  .groups(java.util.List<java.lang.String>)
//  .healthcheck(ServiceTaskSpecContainerSpecHealthcheck)
//  .hostname(java.lang.String)
//  .hosts(IResolvable)
//  .hosts(java.util.List<ServiceTaskSpecContainerSpecHosts>)
//  .isolation(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<ServiceTaskSpecContainerSpecLabels>)
//  .mounts(IResolvable)
//  .mounts(java.util.List<ServiceTaskSpecContainerSpecMounts>)
//  .privileges(ServiceTaskSpecContainerSpecPrivileges)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .secrets(IResolvable)
//  .secrets(java.util.List<ServiceTaskSpecContainerSpecSecrets>)
//  .stopGracePeriod(java.lang.String)
//  .stopSignal(java.lang.String)
//  .sysctl(java.util.Map<java.lang.String, java.lang.String>)
//  .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.image">image</a></code> | <code>java.lang.String</code> | The image name to use for the containers of the service, like `nginx:1.17.6`. Also use the data-source or resource of `docker_image` with the `repo_digest` or `docker_registry_image` with the `name` attribute for this, as shown in the examples. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Arguments to the command. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | The command/entrypoint to be run in the image. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.configs">configs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>></code> | configs block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.dir">dir</a></code> | <code>java.lang.String</code> | The working directory for commands to run in. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.dnsConfig">dnsConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.env">env</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A list of environment variables in the form VAR="value". |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | A list of additional groups that the container process will run as. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.hostname">hostname</a></code> | <code>java.lang.String</code> | The hostname to use for the container, as a valid RFC 1123 hostname. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.hosts">hosts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>></code> | hosts block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.isolation">isolation</a></code> | <code>java.lang.String</code> | Isolation technology of the containers running the service. (Windows only). Defaults to `default`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.mounts">mounts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>></code> | mounts block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.privileges">privileges</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a></code> | privileges block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Mount the container's root filesystem as read only. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.secrets">secrets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>></code> | secrets block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.stopGracePeriod">stopGracePeriod</a></code> | <code>java.lang.String</code> | Amount of time to wait for the container to terminate before forcefully removing it (ms\|s\|m\|h). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.stopSignal">stopSignal</a></code> | <code>java.lang.String</code> | Signal to stop the container. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.sysctl">sysctl</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Sysctls config (Linux only). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.user">user</a></code> | <code>java.lang.String</code> | The user inside the container. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

The image name to use for the containers of the service, like `nginx:1.17.6`. Also use the data-source or resource of `docker_image` with the `repo_digest` or `docker_registry_image` with the `name` attribute for this, as shown in the examples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#image Service#image}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Arguments to the command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#args Service#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

The command/entrypoint to be run in the image.

According to the [docker cli](https://github.com/docker/cli/blob/v20.10.7/cli/command/service/opts.go#L705) the override of the entrypoint is also passed to the `command` property and there is no `entrypoint` attribute in the `ContainerSpec` of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#command Service#command}

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.configs"></a>

```java
public java.lang.Object getConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>>

configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#configs Service#configs}

---

##### `dir`<sup>Optional</sup> <a name="dir" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

The working directory for commands to run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#dir Service#dir}

---

##### `dnsConfig`<sup>Optional</sup> <a name="dnsConfig" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.dnsConfig"></a>

```java
public ServiceTaskSpecContainerSpecDnsConfig getDnsConfig();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#dns_config Service#dns_config}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.env"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnv();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A list of environment variables in the form VAR="value".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#env Service#env}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

A list of additional groups that the container process will run as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#groups Service#groups}

---

##### `healthcheck`<sup>Optional</sup> <a name="healthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.healthcheck"></a>

```java
public ServiceTaskSpecContainerSpecHealthcheck getHealthcheck();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#healthcheck Service#healthcheck}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

The hostname to use for the container, as a valid RFC 1123 hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#hostname Service#hostname}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.hosts"></a>

```java
public java.lang.Object getHosts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>>

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#hosts Service#hosts}

---

##### `isolation`<sup>Optional</sup> <a name="isolation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.isolation"></a>

```java
public java.lang.String getIsolation();
```

- *Type:* java.lang.String

Isolation technology of the containers running the service. (Windows only). Defaults to `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#isolation Service#isolation}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.labels"></a>

```java
public java.lang.Object getLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#labels Service#labels}

---

##### `mounts`<sup>Optional</sup> <a name="mounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.mounts"></a>

```java
public java.lang.Object getMounts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>>

mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#mounts Service#mounts}

---

##### `privileges`<sup>Optional</sup> <a name="privileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.privileges"></a>

```java
public ServiceTaskSpecContainerSpecPrivileges getPrivileges();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a>

privileges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#privileges Service#privileges}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Mount the container's root filesystem as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#read_only Service#read_only}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.secrets"></a>

```java
public java.lang.Object getSecrets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>>

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#secrets Service#secrets}

---

##### `stopGracePeriod`<sup>Optional</sup> <a name="stopGracePeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.stopGracePeriod"></a>

```java
public java.lang.String getStopGracePeriod();
```

- *Type:* java.lang.String

Amount of time to wait for the container to terminate before forcefully removing it (ms|s|m|h).

If not specified or '0s' the destroy will not check if all tasks/containers of the service terminate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#stop_grace_period Service#stop_grace_period}

---

##### `stopSignal`<sup>Optional</sup> <a name="stopSignal" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.stopSignal"></a>

```java
public java.lang.String getStopSignal();
```

- *Type:* java.lang.String

Signal to stop the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#stop_signal Service#stop_signal}

---

##### `sysctl`<sup>Optional</sup> <a name="sysctl" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.sysctl"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSysctl();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Sysctls config (Linux only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#sysctl Service#sysctl}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

The user inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#user Service#user}

---

### ServiceTaskSpecContainerSpecConfigs <a name="ServiceTaskSpecContainerSpecConfigs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecConfigs;

ServiceTaskSpecContainerSpecConfigs.builder()
    .configId(java.lang.String)
    .fileName(java.lang.String)
//  .configName(java.lang.String)
//  .fileGid(java.lang.String)
//  .fileMode(java.lang.Number)
//  .fileUid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.configId">configId</a></code> | <code>java.lang.String</code> | ID of the specific config that we're referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileName">fileName</a></code> | <code>java.lang.String</code> | Represents the final filename in the filesystem. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.configName">configName</a></code> | <code>java.lang.String</code> | Name of the config that this references, but this is just provided for lookup/display purposes. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileGid">fileGid</a></code> | <code>java.lang.String</code> | Represents the file GID. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileMode">fileMode</a></code> | <code>java.lang.Number</code> | Represents represents the FileMode of the file. Defaults to `0o444`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileUid">fileUid</a></code> | <code>java.lang.String</code> | Represents the file UID. Defaults to `0`. |

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

ID of the specific config that we're referencing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#config_id Service#config_id}

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

Represents the final filename in the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#file_name Service#file_name}

---

##### `configName`<sup>Optional</sup> <a name="configName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.configName"></a>

```java
public java.lang.String getConfigName();
```

- *Type:* java.lang.String

Name of the config that this references, but this is just provided for lookup/display purposes.

The config in the reference will be identified by its ID

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#config_name Service#config_name}

---

##### `fileGid`<sup>Optional</sup> <a name="fileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileGid"></a>

```java
public java.lang.String getFileGid();
```

- *Type:* java.lang.String

Represents the file GID. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#file_gid Service#file_gid}

---

##### `fileMode`<sup>Optional</sup> <a name="fileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileMode"></a>

```java
public java.lang.Number getFileMode();
```

- *Type:* java.lang.Number

Represents represents the FileMode of the file. Defaults to `0o444`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#file_mode Service#file_mode}

---

##### `fileUid`<sup>Optional</sup> <a name="fileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs.property.fileUid"></a>

```java
public java.lang.String getFileUid();
```

- *Type:* java.lang.String

Represents the file UID. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#file_uid Service#file_uid}

---

### ServiceTaskSpecContainerSpecDnsConfig <a name="ServiceTaskSpecContainerSpecDnsConfig" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecDnsConfig;

ServiceTaskSpecContainerSpecDnsConfig.builder()
    .nameservers(java.util.List<java.lang.String>)
//  .options(java.util.List<java.lang.String>)
//  .search(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.nameservers">nameservers</a></code> | <code>java.util.List<java.lang.String></code> | The IP addresses of the name servers. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | A list of internal resolver variables to be modified (e.g., `debug`, `ndots:3`, etc.). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.search">search</a></code> | <code>java.util.List<java.lang.String></code> | A search list for host-name lookup. |

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.nameservers"></a>

```java
public java.util.List<java.lang.String> getNameservers();
```

- *Type:* java.util.List<java.lang.String>

The IP addresses of the name servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#nameservers Service#nameservers}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

A list of internal resolver variables to be modified (e.g., `debug`, `ndots:3`, etc.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#options Service#options}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig.property.search"></a>

```java
public java.util.List<java.lang.String> getSearch();
```

- *Type:* java.util.List<java.lang.String>

A search list for host-name lookup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#search Service#search}

---

### ServiceTaskSpecContainerSpecHealthcheck <a name="ServiceTaskSpecContainerSpecHealthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecHealthcheck;

ServiceTaskSpecContainerSpecHealthcheck.builder()
    .test(java.util.List<java.lang.String>)
//  .interval(java.lang.String)
//  .retries(java.lang.Number)
//  .startPeriod(java.lang.String)
//  .timeout(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.test">test</a></code> | <code>java.util.List<java.lang.String></code> | The test to perform as list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.interval">interval</a></code> | <code>java.lang.String</code> | Time between running the check (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.retries">retries</a></code> | <code>java.lang.Number</code> | Consecutive failures needed to report unhealthy. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.startPeriod">startPeriod</a></code> | <code>java.lang.String</code> | Start period for the container to initialize before counting retries towards unstable (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Maximum time to allow one check to run (ms\|s\|m\|h). Defaults to `0s`. |

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.test"></a>

```java
public java.util.List<java.lang.String> getTest();
```

- *Type:* java.util.List<java.lang.String>

The test to perform as list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#test Service#test}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

Time between running the check (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#interval Service#interval}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

Consecutive failures needed to report unhealthy. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#retries Service#retries}

---

##### `startPeriod`<sup>Optional</sup> <a name="startPeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.startPeriod"></a>

```java
public java.lang.String getStartPeriod();
```

- *Type:* java.lang.String

Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#start_period Service#start_period}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#timeout Service#timeout}

---

### ServiceTaskSpecContainerSpecHosts <a name="ServiceTaskSpecContainerSpecHosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecHosts;

ServiceTaskSpecContainerSpecHosts.builder()
    .host(java.lang.String)
    .ip(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.property.host">host</a></code> | <code>java.lang.String</code> | The name of the host. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.property.ip">ip</a></code> | <code>java.lang.String</code> | The ip of the host. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The name of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#host Service#host}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

The ip of the host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#ip Service#ip}

---

### ServiceTaskSpecContainerSpecLabels <a name="ServiceTaskSpecContainerSpecLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecLabels;

ServiceTaskSpecContainerSpecLabels.builder()
    .label(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.property.label">label</a></code> | <code>java.lang.String</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.property.value">value</a></code> | <code>java.lang.String</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#label Service#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#value Service#value}

---

### ServiceTaskSpecContainerSpecMounts <a name="ServiceTaskSpecContainerSpecMounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecMounts;

ServiceTaskSpecContainerSpecMounts.builder()
    .target(java.lang.String)
    .type(java.lang.String)
//  .bindOptions(ServiceTaskSpecContainerSpecMountsBindOptions)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .source(java.lang.String)
//  .tmpfsOptions(ServiceTaskSpecContainerSpecMountsTmpfsOptions)
//  .volumeOptions(ServiceTaskSpecContainerSpecMountsVolumeOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.target">target</a></code> | <code>java.lang.String</code> | Container path. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.type">type</a></code> | <code>java.lang.String</code> | The mount type. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.bindOptions">bindOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a></code> | bind_options block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the mount should be read-only. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.source">source</a></code> | <code>java.lang.String</code> | Mount source (e.g. a volume name, a host path). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.tmpfsOptions">tmpfsOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a></code> | tmpfs_options block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.volumeOptions">volumeOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a></code> | volume_options block. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Container path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#target Service#target}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The mount type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#type Service#type}

---

##### `bindOptions`<sup>Optional</sup> <a name="bindOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.bindOptions"></a>

```java
public ServiceTaskSpecContainerSpecMountsBindOptions getBindOptions();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a>

bind_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#bind_options Service#bind_options}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the mount should be read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#read_only Service#read_only}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Mount source (e.g. a volume name, a host path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#source Service#source}

---

##### `tmpfsOptions`<sup>Optional</sup> <a name="tmpfsOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.tmpfsOptions"></a>

```java
public ServiceTaskSpecContainerSpecMountsTmpfsOptions getTmpfsOptions();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a>

tmpfs_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#tmpfs_options Service#tmpfs_options}

---

##### `volumeOptions`<sup>Optional</sup> <a name="volumeOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts.property.volumeOptions"></a>

```java
public ServiceTaskSpecContainerSpecMountsVolumeOptions getVolumeOptions();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a>

volume_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#volume_options Service#volume_options}

---

### ServiceTaskSpecContainerSpecMountsBindOptions <a name="ServiceTaskSpecContainerSpecMountsBindOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecMountsBindOptions;

ServiceTaskSpecContainerSpecMountsBindOptions.builder()
//  .propagation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions.property.propagation">propagation</a></code> | <code>java.lang.String</code> | Bind propagation refers to whether or not mounts created within a given bind-mount or named volume can be propagated to replicas of that mount. |

---

##### `propagation`<sup>Optional</sup> <a name="propagation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions.property.propagation"></a>

```java
public java.lang.String getPropagation();
```

- *Type:* java.lang.String

Bind propagation refers to whether or not mounts created within a given bind-mount or named volume can be propagated to replicas of that mount.

See the [docs](https://docs.docker.com/storage/bind-mounts/#configure-bind-propagation) for details. Defaults to `rprivate`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#propagation Service#propagation}

---

### ServiceTaskSpecContainerSpecMountsTmpfsOptions <a name="ServiceTaskSpecContainerSpecMountsTmpfsOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions;

ServiceTaskSpecContainerSpecMountsTmpfsOptions.builder()
//  .mode(java.lang.Number)
//  .sizeBytes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.property.mode">mode</a></code> | <code>java.lang.Number</code> | The permission mode for the tmpfs mount in an integer. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.property.sizeBytes">sizeBytes</a></code> | <code>java.lang.Number</code> | The size for the tmpfs mount in bytes. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.property.mode"></a>

```java
public java.lang.Number getMode();
```

- *Type:* java.lang.Number

The permission mode for the tmpfs mount in an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#mode Service#mode}

---

##### `sizeBytes`<sup>Optional</sup> <a name="sizeBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions.property.sizeBytes"></a>

```java
public java.lang.Number getSizeBytes();
```

- *Type:* java.lang.Number

The size for the tmpfs mount in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#size_bytes Service#size_bytes}

---

### ServiceTaskSpecContainerSpecMountsVolumeOptions <a name="ServiceTaskSpecContainerSpecMountsVolumeOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions;

ServiceTaskSpecContainerSpecMountsVolumeOptions.builder()
//  .driverName(java.lang.String)
//  .driverOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .labels(IResolvable)
//  .labels(java.util.List<ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels>)
//  .noCopy(java.lang.Boolean)
//  .noCopy(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.driverName">driverName</a></code> | <code>java.lang.String</code> | Name of the driver to use to create the volume. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.driverOptions">driverOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | key/value map of driver specific options. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.noCopy">noCopy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Populate volume with data from the target. |

---

##### `driverName`<sup>Optional</sup> <a name="driverName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.driverName"></a>

```java
public java.lang.String getDriverName();
```

- *Type:* java.lang.String

Name of the driver to use to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#driver_name Service#driver_name}

---

##### `driverOptions`<sup>Optional</sup> <a name="driverOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.driverOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

key/value map of driver specific options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#driver_options Service#driver_options}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.labels"></a>

```java
public java.lang.Object getLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#labels Service#labels}

---

##### `noCopy`<sup>Optional</sup> <a name="noCopy" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions.property.noCopy"></a>

```java
public java.lang.Object getNoCopy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Populate volume with data from the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#no_copy Service#no_copy}

---

### ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels <a name="ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels;

ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.builder()
    .label(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.property.label">label</a></code> | <code>java.lang.String</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.property.value">value</a></code> | <code>java.lang.String</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#label Service#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#value Service#value}

---

### ServiceTaskSpecContainerSpecPrivileges <a name="ServiceTaskSpecContainerSpecPrivileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecPrivileges;

ServiceTaskSpecContainerSpecPrivileges.builder()
//  .credentialSpec(ServiceTaskSpecContainerSpecPrivilegesCredentialSpec)
//  .seLinuxContext(ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.property.credentialSpec">credentialSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a></code> | credential_spec block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.property.seLinuxContext">seLinuxContext</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a></code> | se_linux_context block. |

---

##### `credentialSpec`<sup>Optional</sup> <a name="credentialSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.property.credentialSpec"></a>

```java
public ServiceTaskSpecContainerSpecPrivilegesCredentialSpec getCredentialSpec();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a>

credential_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#credential_spec Service#credential_spec}

---

##### `seLinuxContext`<sup>Optional</sup> <a name="seLinuxContext" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges.property.seLinuxContext"></a>

```java
public ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext getSeLinuxContext();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a>

se_linux_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#se_linux_context Service#se_linux_context}

---

### ServiceTaskSpecContainerSpecPrivilegesCredentialSpec <a name="ServiceTaskSpecContainerSpecPrivilegesCredentialSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec;

ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.builder()
//  .file(java.lang.String)
//  .registry(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.property.file">file</a></code> | <code>java.lang.String</code> | Load credential spec from this file. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.property.registry">registry</a></code> | <code>java.lang.String</code> | Load credential spec from this value in the Windows registry. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

Load credential spec from this file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#file Service#file}

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec.property.registry"></a>

```java
public java.lang.String getRegistry();
```

- *Type:* java.lang.String

Load credential spec from this value in the Windows registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#registry Service#registry}

---

### ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext <a name="ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext;

ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.builder()
//  .disable(java.lang.Boolean)
//  .disable(IResolvable)
//  .level(java.lang.String)
//  .role(java.lang.String)
//  .type(java.lang.String)
//  .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.disable">disable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable SELinux. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.level">level</a></code> | <code>java.lang.String</code> | SELinux level label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.role">role</a></code> | <code>java.lang.String</code> | SELinux role label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.type">type</a></code> | <code>java.lang.String</code> | SELinux type label. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.user">user</a></code> | <code>java.lang.String</code> | SELinux user label. |

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.disable"></a>

```java
public java.lang.Object getDisable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable SELinux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#disable Service#disable}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

SELinux level label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#level Service#level}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

SELinux role label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#role Service#role}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

SELinux type label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#type Service#type}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

SELinux user label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#user Service#user}

---

### ServiceTaskSpecContainerSpecSecrets <a name="ServiceTaskSpecContainerSpecSecrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecSecrets;

ServiceTaskSpecContainerSpecSecrets.builder()
    .fileName(java.lang.String)
    .secretId(java.lang.String)
//  .fileGid(java.lang.String)
//  .fileMode(java.lang.Number)
//  .fileUid(java.lang.String)
//  .secretName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileName">fileName</a></code> | <code>java.lang.String</code> | Represents the final filename in the filesystem. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.secretId">secretId</a></code> | <code>java.lang.String</code> | ID of the specific secret that we're referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileGid">fileGid</a></code> | <code>java.lang.String</code> | Represents the file GID. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileMode">fileMode</a></code> | <code>java.lang.Number</code> | Represents represents the FileMode of the file. Defaults to `0o444`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileUid">fileUid</a></code> | <code>java.lang.String</code> | Represents the file UID. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Name of the secret that this references, but this is just provided for lookup/display purposes. |

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

Represents the final filename in the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#file_name Service#file_name}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

ID of the specific secret that we're referencing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#secret_id Service#secret_id}

---

##### `fileGid`<sup>Optional</sup> <a name="fileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileGid"></a>

```java
public java.lang.String getFileGid();
```

- *Type:* java.lang.String

Represents the file GID. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#file_gid Service#file_gid}

---

##### `fileMode`<sup>Optional</sup> <a name="fileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileMode"></a>

```java
public java.lang.Number getFileMode();
```

- *Type:* java.lang.Number

Represents represents the FileMode of the file. Defaults to `0o444`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#file_mode Service#file_mode}

---

##### `fileUid`<sup>Optional</sup> <a name="fileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.fileUid"></a>

```java
public java.lang.String getFileUid();
```

- *Type:* java.lang.String

Represents the file UID. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#file_uid Service#file_uid}

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Name of the secret that this references, but this is just provided for lookup/display purposes.

The config in the reference will be identified by its ID

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#secret_name Service#secret_name}

---

### ServiceTaskSpecLogDriver <a name="ServiceTaskSpecLogDriver" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecLogDriver;

ServiceTaskSpecLogDriver.builder()
    .name(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.property.name">name</a></code> | <code>java.lang.String</code> | The logging driver to use. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The options for the logging driver. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The logging driver to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#name Service#name}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriver.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The options for the logging driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#options Service#options}

---

### ServiceTaskSpecNetworksAdvanced <a name="ServiceTaskSpecNetworksAdvanced" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecNetworksAdvanced;

ServiceTaskSpecNetworksAdvanced.builder()
    .name(java.lang.String)
//  .aliases(java.util.List<java.lang.String>)
//  .driverOpts(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.name">name</a></code> | <code>java.lang.String</code> | The name/id of the network. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.aliases">aliases</a></code> | <code>java.util.List<java.lang.String></code> | The network aliases of the container in the specific network. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.driverOpts">driverOpts</a></code> | <code>java.util.List<java.lang.String></code> | An array of driver options for the network, e.g. `opts1=value`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name/id of the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#name Service#name}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.aliases"></a>

```java
public java.util.List<java.lang.String> getAliases();
```

- *Type:* java.util.List<java.lang.String>

The network aliases of the container in the specific network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#aliases Service#aliases}

---

##### `driverOpts`<sup>Optional</sup> <a name="driverOpts" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced.property.driverOpts"></a>

```java
public java.util.List<java.lang.String> getDriverOpts();
```

- *Type:* java.util.List<java.lang.String>

An array of driver options for the network, e.g. `opts1=value`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#driver_opts Service#driver_opts}

---

### ServiceTaskSpecPlacement <a name="ServiceTaskSpecPlacement" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecPlacement;

ServiceTaskSpecPlacement.builder()
//  .constraints(java.util.List<java.lang.String>)
//  .maxReplicas(java.lang.Number)
//  .platforms(IResolvable)
//  .platforms(java.util.List<ServiceTaskSpecPlacementPlatforms>)
//  .prefs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.constraints">constraints</a></code> | <code>java.util.List<java.lang.String></code> | An array of constraints. e.g.: `node.role==manager`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | Maximum number of replicas for per node (default value is `0`, which is unlimited). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.platforms">platforms</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>></code> | platforms block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.prefs">prefs</a></code> | <code>java.util.List<java.lang.String></code> | Preferences provide a way to make the scheduler aware of factors such as topology. |

---

##### `constraints`<sup>Optional</sup> <a name="constraints" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.constraints"></a>

```java
public java.util.List<java.lang.String> getConstraints();
```

- *Type:* java.util.List<java.lang.String>

An array of constraints. e.g.: `node.role==manager`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#constraints Service#constraints}

---

##### `maxReplicas`<sup>Optional</sup> <a name="maxReplicas" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

Maximum number of replicas for per node (default value is `0`, which is unlimited).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#max_replicas Service#max_replicas}

---

##### `platforms`<sup>Optional</sup> <a name="platforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.platforms"></a>

```java
public java.lang.Object getPlatforms();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>>

platforms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#platforms Service#platforms}

---

##### `prefs`<sup>Optional</sup> <a name="prefs" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacement.property.prefs"></a>

```java
public java.util.List<java.lang.String> getPrefs();
```

- *Type:* java.util.List<java.lang.String>

Preferences provide a way to make the scheduler aware of factors such as topology.

They are provided in order from highest to lowest precedence, e.g.: `spread=node.role.manager`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#prefs Service#prefs}

---

### ServiceTaskSpecPlacementPlatforms <a name="ServiceTaskSpecPlacementPlatforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecPlacementPlatforms;

ServiceTaskSpecPlacementPlatforms.builder()
    .architecture(java.lang.String)
    .os(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.property.architecture">architecture</a></code> | <code>java.lang.String</code> | The architecture, e.g. `amd64`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.property.os">os</a></code> | <code>java.lang.String</code> | The operation system, e.g. `linux`. |

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

The architecture, e.g. `amd64`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#architecture Service#architecture}

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms.property.os"></a>

```java
public java.lang.String getOs();
```

- *Type:* java.lang.String

The operation system, e.g. `linux`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#os Service#os}

---

### ServiceTaskSpecResources <a name="ServiceTaskSpecResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecResources;

ServiceTaskSpecResources.builder()
//  .limits(ServiceTaskSpecResourcesLimits)
//  .reservation(ServiceTaskSpecResourcesReservation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources.property.reservation">reservation</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a></code> | reservation block. |

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-docker.service.ServiceTaskSpecResources.property.limits"></a>

```java
public ServiceTaskSpecResourcesLimits getLimits();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#limits Service#limits}

---

##### `reservation`<sup>Optional</sup> <a name="reservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResources.property.reservation"></a>

```java
public ServiceTaskSpecResourcesReservation getReservation();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a>

reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#reservation Service#reservation}

---

### ServiceTaskSpecResourcesLimits <a name="ServiceTaskSpecResourcesLimits" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecResourcesLimits;

ServiceTaskSpecResourcesLimits.builder()
//  .memoryBytes(java.lang.Number)
//  .nanoCpus(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.property.memoryBytes">memoryBytes</a></code> | <code>java.lang.Number</code> | The amounf of memory in bytes the container allocates. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.property.nanoCpus">nanoCpus</a></code> | <code>java.lang.Number</code> | CPU shares in units of `1/1e9` (or `10^-9`) of the CPU. Should be at least `1000000`. |

---

##### `memoryBytes`<sup>Optional</sup> <a name="memoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.property.memoryBytes"></a>

```java
public java.lang.Number getMemoryBytes();
```

- *Type:* java.lang.Number

The amounf of memory in bytes the container allocates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#memory_bytes Service#memory_bytes}

---

##### `nanoCpus`<sup>Optional</sup> <a name="nanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits.property.nanoCpus"></a>

```java
public java.lang.Number getNanoCpus();
```

- *Type:* java.lang.Number

CPU shares in units of `1/1e9` (or `10^-9`) of the CPU. Should be at least `1000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#nano_cpus Service#nano_cpus}

---

### ServiceTaskSpecResourcesReservation <a name="ServiceTaskSpecResourcesReservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecResourcesReservation;

ServiceTaskSpecResourcesReservation.builder()
//  .genericResources(ServiceTaskSpecResourcesReservationGenericResources)
//  .memoryBytes(java.lang.Number)
//  .nanoCpus(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.genericResources">genericResources</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a></code> | generic_resources block. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.memoryBytes">memoryBytes</a></code> | <code>java.lang.Number</code> | The amounf of memory in bytes the container allocates. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.nanoCpus">nanoCpus</a></code> | <code>java.lang.Number</code> | CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least `1000000`. |

---

##### `genericResources`<sup>Optional</sup> <a name="genericResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.genericResources"></a>

```java
public ServiceTaskSpecResourcesReservationGenericResources getGenericResources();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a>

generic_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#generic_resources Service#generic_resources}

---

##### `memoryBytes`<sup>Optional</sup> <a name="memoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.memoryBytes"></a>

```java
public java.lang.Number getMemoryBytes();
```

- *Type:* java.lang.Number

The amounf of memory in bytes the container allocates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#memory_bytes Service#memory_bytes}

---

##### `nanoCpus`<sup>Optional</sup> <a name="nanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation.property.nanoCpus"></a>

```java
public java.lang.Number getNanoCpus();
```

- *Type:* java.lang.Number

CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least `1000000`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#nano_cpus Service#nano_cpus}

---

### ServiceTaskSpecResourcesReservationGenericResources <a name="ServiceTaskSpecResourcesReservationGenericResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecResourcesReservationGenericResources;

ServiceTaskSpecResourcesReservationGenericResources.builder()
//  .discreteResourcesSpec(java.util.List<java.lang.String>)
//  .namedResourcesSpec(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.property.discreteResourcesSpec">discreteResourcesSpec</a></code> | <code>java.util.List<java.lang.String></code> | The Integer resources. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.property.namedResourcesSpec">namedResourcesSpec</a></code> | <code>java.util.List<java.lang.String></code> | The String resources. |

---

##### `discreteResourcesSpec`<sup>Optional</sup> <a name="discreteResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.property.discreteResourcesSpec"></a>

```java
public java.util.List<java.lang.String> getDiscreteResourcesSpec();
```

- *Type:* java.util.List<java.lang.String>

The Integer resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#discrete_resources_spec Service#discrete_resources_spec}

---

##### `namedResourcesSpec`<sup>Optional</sup> <a name="namedResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources.property.namedResourcesSpec"></a>

```java
public java.util.List<java.lang.String> getNamedResourcesSpec();
```

- *Type:* java.util.List<java.lang.String>

The String resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#named_resources_spec Service#named_resources_spec}

---

### ServiceTaskSpecRestartPolicy <a name="ServiceTaskSpecRestartPolicy" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecRestartPolicy;

ServiceTaskSpecRestartPolicy.builder()
//  .condition(java.lang.String)
//  .delay(java.lang.String)
//  .maxAttempts(java.lang.Number)
//  .window(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.condition">condition</a></code> | <code>java.lang.String</code> | Condition for restart. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.delay">delay</a></code> | <code>java.lang.String</code> | Delay between restart attempts (ms\|s\|m\|h). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.maxAttempts">maxAttempts</a></code> | <code>java.lang.Number</code> | Maximum attempts to restart a given container before giving up (default value is `0`, which is ignored). |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.window">window</a></code> | <code>java.lang.String</code> | The time window used to evaluate the restart policy (default value is `0`, which is unbounded) (ms\|s\|m\|h). |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

Condition for restart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#condition Service#condition}

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.delay"></a>

```java
public java.lang.String getDelay();
```

- *Type:* java.lang.String

Delay between restart attempts (ms|s|m|h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#delay Service#delay}

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.maxAttempts"></a>

```java
public java.lang.Number getMaxAttempts();
```

- *Type:* java.lang.Number

Maximum attempts to restart a given container before giving up (default value is `0`, which is ignored).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#max_attempts Service#max_attempts}

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy.property.window"></a>

```java
public java.lang.String getWindow();
```

- *Type:* java.lang.String

The time window used to evaluate the restart policy (default value is `0`, which is unbounded) (ms|s|m|h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#window Service#window}

---

### ServiceUpdateConfig <a name="ServiceUpdateConfig" id="@cdktf/provider-docker.service.ServiceUpdateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.service.ServiceUpdateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceUpdateConfig;

ServiceUpdateConfig.builder()
//  .delay(java.lang.String)
//  .failureAction(java.lang.String)
//  .maxFailureRatio(java.lang.String)
//  .monitor(java.lang.String)
//  .order(java.lang.String)
//  .parallelism(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.delay">delay</a></code> | <code>java.lang.String</code> | Delay between task updates `(ns\|us\|ms\|s\|m\|h)`. Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.failureAction">failureAction</a></code> | <code>java.lang.String</code> | Action on update failure: `pause`, `continue` or `rollback`. Defaults to `pause`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.maxFailureRatio">maxFailureRatio</a></code> | <code>java.lang.String</code> | Failure rate to tolerate during an update. Defaults to `0.0`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.monitor">monitor</a></code> | <code>java.lang.String</code> | Duration after each task update to monitor for failure (ns\|us\|ms\|s\|m\|h). Defaults to `5s`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.order">order</a></code> | <code>java.lang.String</code> | Update order: either 'stop-first' or 'start-first'. Defaults to `stop-first`. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig.property.parallelism">parallelism</a></code> | <code>java.lang.Number</code> | Maximum number of tasks to be updated in one iteration. Defaults to `1`. |

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.delay"></a>

```java
public java.lang.String getDelay();
```

- *Type:* java.lang.String

Delay between task updates `(ns|us|ms|s|m|h)`. Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#delay Service#delay}

---

##### `failureAction`<sup>Optional</sup> <a name="failureAction" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.failureAction"></a>

```java
public java.lang.String getFailureAction();
```

- *Type:* java.lang.String

Action on update failure: `pause`, `continue` or `rollback`. Defaults to `pause`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#failure_action Service#failure_action}

---

##### `maxFailureRatio`<sup>Optional</sup> <a name="maxFailureRatio" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.maxFailureRatio"></a>

```java
public java.lang.String getMaxFailureRatio();
```

- *Type:* java.lang.String

Failure rate to tolerate during an update. Defaults to `0.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#max_failure_ratio Service#max_failure_ratio}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.monitor"></a>

```java
public java.lang.String getMonitor();
```

- *Type:* java.lang.String

Duration after each task update to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#monitor Service#monitor}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Update order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#order Service#order}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktf/provider-docker.service.ServiceUpdateConfig.property.parallelism"></a>

```java
public java.lang.Number getParallelism();
```

- *Type:* java.lang.Number

Maximum number of tasks to be updated in one iteration. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/service#parallelism Service#parallelism}

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceAuthOutputReference <a name="ServiceAuthOutputReference" id="@cdktf/provider-docker.service.ServiceAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceAuthOutputReference;

new ServiceAuthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.serverAddressInput">serverAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.serverAddress">serverAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `serverAddressInput`<sup>Optional</sup> <a name="serverAddressInput" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.serverAddressInput"></a>

```java
public java.lang.String getServerAddressInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `serverAddress`<sup>Required</sup> <a name="serverAddress" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.serverAddress"></a>

```java
public java.lang.String getServerAddress();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceAuthOutputReference.property.internalValue"></a>

```java
public ServiceAuth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceAuth">ServiceAuth</a>

---


### ServiceConvergeConfigOutputReference <a name="ServiceConvergeConfigOutputReference" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceConvergeConfigOutputReference;

new ServiceConvergeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelay` <a name="resetDelay" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resetDelay"></a>

```java
public void resetDelay()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.delayInput">delayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.delay">delay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.delayInput"></a>

```java
public java.lang.String getDelayInput();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.delay"></a>

```java
public java.lang.String getDelay();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceConvergeConfigOutputReference.property.internalValue"></a>

```java
public ServiceConvergeConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceConvergeConfig">ServiceConvergeConfig</a>

---


### ServiceEndpointSpecOutputReference <a name="ServiceEndpointSpecOutputReference" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceEndpointSpecOutputReference;

new ServiceEndpointSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPorts` <a name="putPorts" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.putPorts"></a>

```java
public void putPorts(IResolvable OR java.util.List<ServiceEndpointSpecPorts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.putPorts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>>

---

##### `resetMode` <a name="resetMode" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.resetPorts"></a>

```java
public void resetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList">ServiceEndpointSpecPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.portsInput">portsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.ports"></a>

```java
public ServiceEndpointSpecPortsList getPorts();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList">ServiceEndpointSpecPortsList</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.portsInput"></a>

```java
public java.lang.Object getPortsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceEndpointSpecOutputReference.property.internalValue"></a>

```java
public ServiceEndpointSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceEndpointSpec">ServiceEndpointSpec</a>

---


### ServiceEndpointSpecPortsList <a name="ServiceEndpointSpecPortsList" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceEndpointSpecPortsList;

new ServiceEndpointSpecPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.get"></a>

```java
public ServiceEndpointSpecPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>>

---


### ServiceEndpointSpecPortsOutputReference <a name="ServiceEndpointSpecPortsOutputReference" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceEndpointSpecPortsOutputReference;

new ServiceEndpointSpecPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetPublishedPort` <a name="resetPublishedPort" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetPublishedPort"></a>

```java
public void resetPublishedPort()
```

##### `resetPublishMode` <a name="resetPublishMode" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.resetPublishMode"></a>

```java
public void resetPublishMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishedPortInput">publishedPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishModeInput">publishModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.targetPortInput">targetPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishedPort">publishedPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishMode">publishMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.targetPort">targetPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `publishedPortInput`<sup>Optional</sup> <a name="publishedPortInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishedPortInput"></a>

```java
public java.lang.Number getPublishedPortInput();
```

- *Type:* java.lang.Number

---

##### `publishModeInput`<sup>Optional</sup> <a name="publishModeInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishModeInput"></a>

```java
public java.lang.String getPublishModeInput();
```

- *Type:* java.lang.String

---

##### `targetPortInput`<sup>Optional</sup> <a name="targetPortInput" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.targetPortInput"></a>

```java
public java.lang.Number getTargetPortInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `publishedPort`<sup>Required</sup> <a name="publishedPort" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishedPort"></a>

```java
public java.lang.Number getPublishedPort();
```

- *Type:* java.lang.Number

---

##### `publishMode`<sup>Required</sup> <a name="publishMode" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.publishMode"></a>

```java
public java.lang.String getPublishMode();
```

- *Type:* java.lang.String

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.targetPort"></a>

```java
public java.lang.Number getTargetPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceEndpointSpecPortsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceEndpointSpecPorts">ServiceEndpointSpecPorts</a>

---


### ServiceLabelsList <a name="ServiceLabelsList" id="@cdktf/provider-docker.service.ServiceLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceLabelsList;

new ServiceLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceLabelsList.get"></a>

```java
public ServiceLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>>

---


### ServiceLabelsOutputReference <a name="ServiceLabelsOutputReference" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceLabelsOutputReference;

new ServiceLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceLabels">ServiceLabels</a>

---


### ServiceModeOutputReference <a name="ServiceModeOutputReference" id="@cdktf/provider-docker.service.ServiceModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceModeOutputReference;

new ServiceModeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceModeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceModeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceModeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceModeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReplicated` <a name="putReplicated" id="@cdktf/provider-docker.service.ServiceModeOutputReference.putReplicated"></a>

```java
public void putReplicated(ServiceModeReplicated value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceModeOutputReference.putReplicated.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a>

---

##### `resetGlobal` <a name="resetGlobal" id="@cdktf/provider-docker.service.ServiceModeOutputReference.resetGlobal"></a>

```java
public void resetGlobal()
```

##### `resetReplicated` <a name="resetReplicated" id="@cdktf/provider-docker.service.ServiceModeOutputReference.resetReplicated"></a>

```java
public void resetReplicated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.replicated">replicated</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference">ServiceModeReplicatedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.globalInput">globalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.replicatedInput">replicatedInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.global">global</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `replicated`<sup>Required</sup> <a name="replicated" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.replicated"></a>

```java
public ServiceModeReplicatedOutputReference getReplicated();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference">ServiceModeReplicatedOutputReference</a>

---

##### `globalInput`<sup>Optional</sup> <a name="globalInput" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.globalInput"></a>

```java
public java.lang.Object getGlobalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replicatedInput`<sup>Optional</sup> <a name="replicatedInput" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.replicatedInput"></a>

```java
public ServiceModeReplicated getReplicatedInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a>

---

##### `global`<sup>Required</sup> <a name="global" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.global"></a>

```java
public java.lang.Object getGlobal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceModeOutputReference.property.internalValue"></a>

```java
public ServiceMode getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceMode">ServiceMode</a>

---


### ServiceModeReplicatedOutputReference <a name="ServiceModeReplicatedOutputReference" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceModeReplicatedOutputReference;

new ServiceModeReplicatedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReplicas` <a name="resetReplicas" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.resetReplicas"></a>

```java
public void resetReplicas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.replicasInput">replicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.replicas">replicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.replicasInput"></a>

```java
public java.lang.Number getReplicasInput();
```

- *Type:* java.lang.Number

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.replicas"></a>

```java
public java.lang.Number getReplicas();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceModeReplicatedOutputReference.property.internalValue"></a>

```java
public ServiceModeReplicated getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceModeReplicated">ServiceModeReplicated</a>

---


### ServiceRollbackConfigOutputReference <a name="ServiceRollbackConfigOutputReference" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceRollbackConfigOutputReference;

new ServiceRollbackConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelay` <a name="resetDelay" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetDelay"></a>

```java
public void resetDelay()
```

##### `resetFailureAction` <a name="resetFailureAction" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetFailureAction"></a>

```java
public void resetFailureAction()
```

##### `resetMaxFailureRatio` <a name="resetMaxFailureRatio" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetMaxFailureRatio"></a>

```java
public void resetMaxFailureRatio()
```

##### `resetMonitor` <a name="resetMonitor" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetMonitor"></a>

```java
public void resetMonitor()
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetParallelism` <a name="resetParallelism" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.resetParallelism"></a>

```java
public void resetParallelism()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.delayInput">delayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.failureActionInput">failureActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.maxFailureRatioInput">maxFailureRatioInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.monitorInput">monitorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.parallelismInput">parallelismInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.delay">delay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.failureAction">failureAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.maxFailureRatio">maxFailureRatio</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.monitor">monitor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.parallelism">parallelism</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.delayInput"></a>

```java
public java.lang.String getDelayInput();
```

- *Type:* java.lang.String

---

##### `failureActionInput`<sup>Optional</sup> <a name="failureActionInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.failureActionInput"></a>

```java
public java.lang.String getFailureActionInput();
```

- *Type:* java.lang.String

---

##### `maxFailureRatioInput`<sup>Optional</sup> <a name="maxFailureRatioInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.maxFailureRatioInput"></a>

```java
public java.lang.String getMaxFailureRatioInput();
```

- *Type:* java.lang.String

---

##### `monitorInput`<sup>Optional</sup> <a name="monitorInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.monitorInput"></a>

```java
public java.lang.String getMonitorInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `parallelismInput`<sup>Optional</sup> <a name="parallelismInput" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.parallelismInput"></a>

```java
public java.lang.Number getParallelismInput();
```

- *Type:* java.lang.Number

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.delay"></a>

```java
public java.lang.String getDelay();
```

- *Type:* java.lang.String

---

##### `failureAction`<sup>Required</sup> <a name="failureAction" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.failureAction"></a>

```java
public java.lang.String getFailureAction();
```

- *Type:* java.lang.String

---

##### `maxFailureRatio`<sup>Required</sup> <a name="maxFailureRatio" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.maxFailureRatio"></a>

```java
public java.lang.String getMaxFailureRatio();
```

- *Type:* java.lang.String

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.monitor"></a>

```java
public java.lang.String getMonitor();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.parallelism"></a>

```java
public java.lang.Number getParallelism();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceRollbackConfigOutputReference.property.internalValue"></a>

```java
public ServiceRollbackConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceRollbackConfig">ServiceRollbackConfig</a>

---


### ServiceTaskSpecContainerSpecConfigsList <a name="ServiceTaskSpecContainerSpecConfigsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecConfigsList;

new ServiceTaskSpecContainerSpecConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.get"></a>

```java
public ServiceTaskSpecContainerSpecConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>>

---


### ServiceTaskSpecContainerSpecConfigsOutputReference <a name="ServiceTaskSpecContainerSpecConfigsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference;

new ServiceTaskSpecContainerSpecConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigName` <a name="resetConfigName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetConfigName"></a>

```java
public void resetConfigName()
```

##### `resetFileGid` <a name="resetFileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileGid"></a>

```java
public void resetFileGid()
```

##### `resetFileMode` <a name="resetFileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileMode"></a>

```java
public void resetFileMode()
```

##### `resetFileUid` <a name="resetFileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.resetFileUid"></a>

```java
public void resetFileUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configIdInput">configIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configNameInput">configNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileGidInput">fileGidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileModeInput">fileModeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileUidInput">fileUidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configId">configId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configName">configName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileGid">fileGid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileMode">fileMode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileName">fileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileUid">fileUid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configIdInput`<sup>Optional</sup> <a name="configIdInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configIdInput"></a>

```java
public java.lang.String getConfigIdInput();
```

- *Type:* java.lang.String

---

##### `configNameInput`<sup>Optional</sup> <a name="configNameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configNameInput"></a>

```java
public java.lang.String getConfigNameInput();
```

- *Type:* java.lang.String

---

##### `fileGidInput`<sup>Optional</sup> <a name="fileGidInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileGidInput"></a>

```java
public java.lang.String getFileGidInput();
```

- *Type:* java.lang.String

---

##### `fileModeInput`<sup>Optional</sup> <a name="fileModeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileModeInput"></a>

```java
public java.lang.Number getFileModeInput();
```

- *Type:* java.lang.Number

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileNameInput"></a>

```java
public java.lang.String getFileNameInput();
```

- *Type:* java.lang.String

---

##### `fileUidInput`<sup>Optional</sup> <a name="fileUidInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileUidInput"></a>

```java
public java.lang.String getFileUidInput();
```

- *Type:* java.lang.String

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

---

##### `configName`<sup>Required</sup> <a name="configName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.configName"></a>

```java
public java.lang.String getConfigName();
```

- *Type:* java.lang.String

---

##### `fileGid`<sup>Required</sup> <a name="fileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileGid"></a>

```java
public java.lang.String getFileGid();
```

- *Type:* java.lang.String

---

##### `fileMode`<sup>Required</sup> <a name="fileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileMode"></a>

```java
public java.lang.Number getFileMode();
```

- *Type:* java.lang.Number

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

---

##### `fileUid`<sup>Required</sup> <a name="fileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.fileUid"></a>

```java
public java.lang.String getFileUid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>

---


### ServiceTaskSpecContainerSpecDnsConfigOutputReference <a name="ServiceTaskSpecContainerSpecDnsConfigOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference;

new ServiceTaskSpecContainerSpecDnsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.resetSearch"></a>

```java
public void resetSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.nameserversInput">nameserversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.optionsInput">optionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.searchInput">searchInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.nameservers">nameservers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.search">search</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameserversInput`<sup>Optional</sup> <a name="nameserversInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.nameserversInput"></a>

```java
public java.util.List<java.lang.String> getNameserversInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.optionsInput"></a>

```java
public java.util.List<java.lang.String> getOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.searchInput"></a>

```java
public java.util.List<java.lang.String> getSearchInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.nameservers"></a>

```java
public java.util.List<java.lang.String> getNameservers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.search"></a>

```java
public java.util.List<java.lang.String> getSearch();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpecContainerSpecDnsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a>

---


### ServiceTaskSpecContainerSpecHealthcheckOutputReference <a name="ServiceTaskSpecContainerSpecHealthcheckOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference;

new ServiceTaskSpecContainerSpecHealthcheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetRetries` <a name="resetRetries" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetRetries"></a>

```java
public void resetRetries()
```

##### `resetStartPeriod` <a name="resetStartPeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetStartPeriod"></a>

```java
public void resetStartPeriod()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.startPeriodInput">startPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.testInput">testInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.interval">interval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.startPeriod">startPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.test">test</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.intervalInput"></a>

```java
public java.lang.String getIntervalInput();
```

- *Type:* java.lang.String

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `startPeriodInput`<sup>Optional</sup> <a name="startPeriodInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.startPeriodInput"></a>

```java
public java.lang.String getStartPeriodInput();
```

- *Type:* java.lang.String

---

##### `testInput`<sup>Optional</sup> <a name="testInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.testInput"></a>

```java
public java.util.List<java.lang.String> getTestInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `startPeriod`<sup>Required</sup> <a name="startPeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.startPeriod"></a>

```java
public java.lang.String getStartPeriod();
```

- *Type:* java.lang.String

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.test"></a>

```java
public java.util.List<java.lang.String> getTest();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpecContainerSpecHealthcheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a>

---


### ServiceTaskSpecContainerSpecHostsList <a name="ServiceTaskSpecContainerSpecHostsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecHostsList;

new ServiceTaskSpecContainerSpecHostsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.get"></a>

```java
public ServiceTaskSpecContainerSpecHostsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>>

---


### ServiceTaskSpecContainerSpecHostsOutputReference <a name="ServiceTaskSpecContainerSpecHostsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecHostsOutputReference;

new ServiceTaskSpecContainerSpecHostsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>

---


### ServiceTaskSpecContainerSpecLabelsList <a name="ServiceTaskSpecContainerSpecLabelsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecLabelsList;

new ServiceTaskSpecContainerSpecLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.get"></a>

```java
public ServiceTaskSpecContainerSpecLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>>

---


### ServiceTaskSpecContainerSpecLabelsOutputReference <a name="ServiceTaskSpecContainerSpecLabelsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference;

new ServiceTaskSpecContainerSpecLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>

---


### ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference <a name="ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference;

new ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPropagation` <a name="resetPropagation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.resetPropagation"></a>

```java
public void resetPropagation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.propagationInput">propagationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.propagation">propagation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `propagationInput`<sup>Optional</sup> <a name="propagationInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.propagationInput"></a>

```java
public java.lang.String getPropagationInput();
```

- *Type:* java.lang.String

---

##### `propagation`<sup>Required</sup> <a name="propagation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.propagation"></a>

```java
public java.lang.String getPropagation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpecContainerSpecMountsBindOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a>

---


### ServiceTaskSpecContainerSpecMountsList <a name="ServiceTaskSpecContainerSpecMountsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecMountsList;

new ServiceTaskSpecContainerSpecMountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.get"></a>

```java
public ServiceTaskSpecContainerSpecMountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>>

---


### ServiceTaskSpecContainerSpecMountsOutputReference <a name="ServiceTaskSpecContainerSpecMountsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecMountsOutputReference;

new ServiceTaskSpecContainerSpecMountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBindOptions` <a name="putBindOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putBindOptions"></a>

```java
public void putBindOptions(ServiceTaskSpecContainerSpecMountsBindOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putBindOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a>

---

##### `putTmpfsOptions` <a name="putTmpfsOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putTmpfsOptions"></a>

```java
public void putTmpfsOptions(ServiceTaskSpecContainerSpecMountsTmpfsOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putTmpfsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a>

---

##### `putVolumeOptions` <a name="putVolumeOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putVolumeOptions"></a>

```java
public void putVolumeOptions(ServiceTaskSpecContainerSpecMountsVolumeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.putVolumeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a>

---

##### `resetBindOptions` <a name="resetBindOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetBindOptions"></a>

```java
public void resetBindOptions()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetTmpfsOptions` <a name="resetTmpfsOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetTmpfsOptions"></a>

```java
public void resetTmpfsOptions()
```

##### `resetVolumeOptions` <a name="resetVolumeOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.resetVolumeOptions"></a>

```java
public void resetVolumeOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.bindOptions">bindOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference">ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.tmpfsOptions">tmpfsOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference">ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.volumeOptions">volumeOptions</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference">ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.bindOptionsInput">bindOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.tmpfsOptionsInput">tmpfsOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.volumeOptionsInput">volumeOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bindOptions`<sup>Required</sup> <a name="bindOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.bindOptions"></a>

```java
public ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference getBindOptions();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference">ServiceTaskSpecContainerSpecMountsBindOptionsOutputReference</a>

---

##### `tmpfsOptions`<sup>Required</sup> <a name="tmpfsOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.tmpfsOptions"></a>

```java
public ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference getTmpfsOptions();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference">ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference</a>

---

##### `volumeOptions`<sup>Required</sup> <a name="volumeOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.volumeOptions"></a>

```java
public ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference getVolumeOptions();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference">ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference</a>

---

##### `bindOptionsInput`<sup>Optional</sup> <a name="bindOptionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.bindOptionsInput"></a>

```java
public ServiceTaskSpecContainerSpecMountsBindOptions getBindOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsBindOptions">ServiceTaskSpecContainerSpecMountsBindOptions</a>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `tmpfsOptionsInput`<sup>Optional</sup> <a name="tmpfsOptionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.tmpfsOptionsInput"></a>

```java
public ServiceTaskSpecContainerSpecMountsTmpfsOptions getTmpfsOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `volumeOptionsInput`<sup>Optional</sup> <a name="volumeOptionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.volumeOptionsInput"></a>

```java
public ServiceTaskSpecContainerSpecMountsVolumeOptions getVolumeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a>

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>

---


### ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference <a name="ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference;

new ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetSizeBytes` <a name="resetSizeBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.resetSizeBytes"></a>

```java
public void resetSizeBytes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.sizeBytesInput">sizeBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.mode">mode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.sizeBytes">sizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.modeInput"></a>

```java
public java.lang.Number getModeInput();
```

- *Type:* java.lang.Number

---

##### `sizeBytesInput`<sup>Optional</sup> <a name="sizeBytesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.sizeBytesInput"></a>

```java
public java.lang.Number getSizeBytesInput();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.mode"></a>

```java
public java.lang.Number getMode();
```

- *Type:* java.lang.Number

---

##### `sizeBytes`<sup>Required</sup> <a name="sizeBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.sizeBytes"></a>

```java
public java.lang.Number getSizeBytes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptionsOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpecContainerSpecMountsTmpfsOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsTmpfsOptions">ServiceTaskSpecContainerSpecMountsTmpfsOptions</a>

---


### ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList <a name="ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList;

new ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.get"></a>

```java
public ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>>

---


### ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference <a name="ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference;

new ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>

---


### ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference <a name="ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference;

new ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabels` <a name="putLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.putLabels"></a>

```java
public void putLabels(IResolvable OR java.util.List<ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.putLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>>

---

##### `resetDriverName` <a name="resetDriverName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetDriverName"></a>

```java
public void resetDriverName()
```

##### `resetDriverOptions` <a name="resetDriverOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetDriverOptions"></a>

```java
public void resetDriverOptions()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNoCopy` <a name="resetNoCopy" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.resetNoCopy"></a>

```java
public void resetNoCopy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverNameInput">driverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverOptionsInput">driverOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.labelsInput">labelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.noCopyInput">noCopyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverName">driverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverOptions">driverOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.noCopy">noCopy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.labels"></a>

```java
public ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabelsList</a>

---

##### `driverNameInput`<sup>Optional</sup> <a name="driverNameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverNameInput"></a>

```java
public java.lang.String getDriverNameInput();
```

- *Type:* java.lang.String

---

##### `driverOptionsInput`<sup>Optional</sup> <a name="driverOptionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.labelsInput"></a>

```java
public java.lang.Object getLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels">ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels</a>>

---

##### `noCopyInput`<sup>Optional</sup> <a name="noCopyInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.noCopyInput"></a>

```java
public java.lang.Object getNoCopyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `driverName`<sup>Required</sup> <a name="driverName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverName"></a>

```java
public java.lang.String getDriverName();
```

- *Type:* java.lang.String

---

##### `driverOptions`<sup>Required</sup> <a name="driverOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.driverOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `noCopy`<sup>Required</sup> <a name="noCopy" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.noCopy"></a>

```java
public java.lang.Object getNoCopy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptionsOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpecContainerSpecMountsVolumeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsVolumeOptions">ServiceTaskSpecContainerSpecMountsVolumeOptions</a>

---


### ServiceTaskSpecContainerSpecOutputReference <a name="ServiceTaskSpecContainerSpecOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecOutputReference;

new ServiceTaskSpecContainerSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigs` <a name="putConfigs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putConfigs"></a>

```java
public void putConfigs(IResolvable OR java.util.List<ServiceTaskSpecContainerSpecConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>>

---

##### `putDnsConfig` <a name="putDnsConfig" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putDnsConfig"></a>

```java
public void putDnsConfig(ServiceTaskSpecContainerSpecDnsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putDnsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a>

---

##### `putHealthcheck` <a name="putHealthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHealthcheck"></a>

```java
public void putHealthcheck(ServiceTaskSpecContainerSpecHealthcheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHealthcheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a>

---

##### `putHosts` <a name="putHosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHosts"></a>

```java
public void putHosts(IResolvable OR java.util.List<ServiceTaskSpecContainerSpecHosts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putHosts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>>

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putLabels"></a>

```java
public void putLabels(IResolvable OR java.util.List<ServiceTaskSpecContainerSpecLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>>

---

##### `putMounts` <a name="putMounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putMounts"></a>

```java
public void putMounts(IResolvable OR java.util.List<ServiceTaskSpecContainerSpecMounts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putMounts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>>

---

##### `putPrivileges` <a name="putPrivileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putPrivileges"></a>

```java
public void putPrivileges(ServiceTaskSpecContainerSpecPrivileges value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putPrivileges.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a>

---

##### `putSecrets` <a name="putSecrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putSecrets"></a>

```java
public void putSecrets(IResolvable OR java.util.List<ServiceTaskSpecContainerSpecSecrets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.putSecrets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>>

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetConfigs` <a name="resetConfigs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetConfigs"></a>

```java
public void resetConfigs()
```

##### `resetDir` <a name="resetDir" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetDir"></a>

```java
public void resetDir()
```

##### `resetDnsConfig` <a name="resetDnsConfig" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetDnsConfig"></a>

```java
public void resetDnsConfig()
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetGroups"></a>

```java
public void resetGroups()
```

##### `resetHealthcheck` <a name="resetHealthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHealthcheck"></a>

```java
public void resetHealthcheck()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetHosts` <a name="resetHosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetHosts"></a>

```java
public void resetHosts()
```

##### `resetIsolation` <a name="resetIsolation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetIsolation"></a>

```java
public void resetIsolation()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMounts` <a name="resetMounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetMounts"></a>

```java
public void resetMounts()
```

##### `resetPrivileges` <a name="resetPrivileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetPrivileges"></a>

```java
public void resetPrivileges()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetSecrets"></a>

```java
public void resetSecrets()
```

##### `resetStopGracePeriod` <a name="resetStopGracePeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetStopGracePeriod"></a>

```java
public void resetStopGracePeriod()
```

##### `resetStopSignal` <a name="resetStopSignal" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetStopSignal"></a>

```java
public void resetStopSignal()
```

##### `resetSysctl` <a name="resetSysctl" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetSysctl"></a>

```java
public void resetSysctl()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.resetUser"></a>

```java
public void resetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.configs">configs</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList">ServiceTaskSpecContainerSpecConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dnsConfig">dnsConfig</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference">ServiceTaskSpecContainerSpecDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference">ServiceTaskSpecContainerSpecHealthcheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hosts">hosts</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList">ServiceTaskSpecContainerSpecHostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList">ServiceTaskSpecContainerSpecLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.mounts">mounts</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList">ServiceTaskSpecContainerSpecMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.privileges">privileges</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference">ServiceTaskSpecContainerSpecPrivilegesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList">ServiceTaskSpecContainerSpecSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.configsInput">configsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dirInput">dirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dnsConfigInput">dnsConfigInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.envInput">envInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.groupsInput">groupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.healthcheckInput">healthcheckInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostsInput">hostsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.isolationInput">isolationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.labelsInput">labelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.mountsInput">mountsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.privilegesInput">privilegesInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.secretsInput">secretsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopGracePeriodInput">stopGracePeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopSignalInput">stopSignalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.sysctlInput">sysctlInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dir">dir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.env">env</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.isolation">isolation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopGracePeriod">stopGracePeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopSignal">stopSignal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.sysctl">sysctl</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configs`<sup>Required</sup> <a name="configs" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.configs"></a>

```java
public ServiceTaskSpecContainerSpecConfigsList getConfigs();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigsList">ServiceTaskSpecContainerSpecConfigsList</a>

---

##### `dnsConfig`<sup>Required</sup> <a name="dnsConfig" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dnsConfig"></a>

```java
public ServiceTaskSpecContainerSpecDnsConfigOutputReference getDnsConfig();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfigOutputReference">ServiceTaskSpecContainerSpecDnsConfigOutputReference</a>

---

##### `healthcheck`<sup>Required</sup> <a name="healthcheck" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.healthcheck"></a>

```java
public ServiceTaskSpecContainerSpecHealthcheckOutputReference getHealthcheck();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheckOutputReference">ServiceTaskSpecContainerSpecHealthcheckOutputReference</a>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hosts"></a>

```java
public ServiceTaskSpecContainerSpecHostsList getHosts();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHostsList">ServiceTaskSpecContainerSpecHostsList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.labels"></a>

```java
public ServiceTaskSpecContainerSpecLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabelsList">ServiceTaskSpecContainerSpecLabelsList</a>

---

##### `mounts`<sup>Required</sup> <a name="mounts" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.mounts"></a>

```java
public ServiceTaskSpecContainerSpecMountsList getMounts();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMountsList">ServiceTaskSpecContainerSpecMountsList</a>

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.privileges"></a>

```java
public ServiceTaskSpecContainerSpecPrivilegesOutputReference getPrivileges();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference">ServiceTaskSpecContainerSpecPrivilegesOutputReference</a>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.secrets"></a>

```java
public ServiceTaskSpecContainerSpecSecretsList getSecrets();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList">ServiceTaskSpecContainerSpecSecretsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configsInput`<sup>Optional</sup> <a name="configsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.configsInput"></a>

```java
public java.lang.Object getConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecConfigs">ServiceTaskSpecContainerSpecConfigs</a>>

---

##### `dirInput`<sup>Optional</sup> <a name="dirInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dirInput"></a>

```java
public java.lang.String getDirInput();
```

- *Type:* java.lang.String

---

##### `dnsConfigInput`<sup>Optional</sup> <a name="dnsConfigInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dnsConfigInput"></a>

```java
public ServiceTaskSpecContainerSpecDnsConfig getDnsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecDnsConfig">ServiceTaskSpecContainerSpecDnsConfig</a>

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.envInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.groupsInput"></a>

```java
public java.util.List<java.lang.String> getGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `healthcheckInput`<sup>Optional</sup> <a name="healthcheckInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.healthcheckInput"></a>

```java
public ServiceTaskSpecContainerSpecHealthcheck getHealthcheckInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHealthcheck">ServiceTaskSpecContainerSpecHealthcheck</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostsInput"></a>

```java
public java.lang.Object getHostsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecHosts">ServiceTaskSpecContainerSpecHosts</a>>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `isolationInput`<sup>Optional</sup> <a name="isolationInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.isolationInput"></a>

```java
public java.lang.String getIsolationInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.labelsInput"></a>

```java
public java.lang.Object getLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecLabels">ServiceTaskSpecContainerSpecLabels</a>>

---

##### `mountsInput`<sup>Optional</sup> <a name="mountsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.mountsInput"></a>

```java
public java.lang.Object getMountsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecMounts">ServiceTaskSpecContainerSpecMounts</a>>

---

##### `privilegesInput`<sup>Optional</sup> <a name="privilegesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.privilegesInput"></a>

```java
public ServiceTaskSpecContainerSpecPrivileges getPrivilegesInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.secretsInput"></a>

```java
public java.lang.Object getSecretsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>>

---

##### `stopGracePeriodInput`<sup>Optional</sup> <a name="stopGracePeriodInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopGracePeriodInput"></a>

```java
public java.lang.String getStopGracePeriodInput();
```

- *Type:* java.lang.String

---

##### `stopSignalInput`<sup>Optional</sup> <a name="stopSignalInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopSignalInput"></a>

```java
public java.lang.String getStopSignalInput();
```

- *Type:* java.lang.String

---

##### `sysctlInput`<sup>Optional</sup> <a name="sysctlInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.sysctlInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSysctlInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.env"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnv();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `isolation`<sup>Required</sup> <a name="isolation" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.isolation"></a>

```java
public java.lang.String getIsolation();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stopGracePeriod`<sup>Required</sup> <a name="stopGracePeriod" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopGracePeriod"></a>

```java
public java.lang.String getStopGracePeriod();
```

- *Type:* java.lang.String

---

##### `stopSignal`<sup>Required</sup> <a name="stopSignal" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.stopSignal"></a>

```java
public java.lang.String getStopSignal();
```

- *Type:* java.lang.String

---

##### `sysctl`<sup>Required</sup> <a name="sysctl" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.sysctl"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSysctl();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpecContainerSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a>

---


### ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference <a name="ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference;

new ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFile` <a name="resetFile" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resetFile"></a>

```java
public void resetFile()
```

##### `resetRegistry` <a name="resetRegistry" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.resetRegistry"></a>

```java
public void resetRegistry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.fileInput">fileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.registryInput">registryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.registry">registry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.fileInput"></a>

```java
public java.lang.String getFileInput();
```

- *Type:* java.lang.String

---

##### `registryInput`<sup>Optional</sup> <a name="registryInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.registryInput"></a>

```java
public java.lang.String getRegistryInput();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.registry"></a>

```java
public java.lang.String getRegistry();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpecContainerSpecPrivilegesCredentialSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a>

---


### ServiceTaskSpecContainerSpecPrivilegesOutputReference <a name="ServiceTaskSpecContainerSpecPrivilegesOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference;

new ServiceTaskSpecContainerSpecPrivilegesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredentialSpec` <a name="putCredentialSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putCredentialSpec"></a>

```java
public void putCredentialSpec(ServiceTaskSpecContainerSpecPrivilegesCredentialSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putCredentialSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a>

---

##### `putSeLinuxContext` <a name="putSeLinuxContext" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putSeLinuxContext"></a>

```java
public void putSeLinuxContext(ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.putSeLinuxContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a>

---

##### `resetCredentialSpec` <a name="resetCredentialSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resetCredentialSpec"></a>

```java
public void resetCredentialSpec()
```

##### `resetSeLinuxContext` <a name="resetSeLinuxContext" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.resetSeLinuxContext"></a>

```java
public void resetSeLinuxContext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.credentialSpec">credentialSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference">ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.seLinuxContext">seLinuxContext</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.credentialSpecInput">credentialSpecInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.seLinuxContextInput">seLinuxContextInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialSpec`<sup>Required</sup> <a name="credentialSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.credentialSpec"></a>

```java
public ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference getCredentialSpec();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference">ServiceTaskSpecContainerSpecPrivilegesCredentialSpecOutputReference</a>

---

##### `seLinuxContext`<sup>Required</sup> <a name="seLinuxContext" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.seLinuxContext"></a>

```java
public ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference getSeLinuxContext();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference</a>

---

##### `credentialSpecInput`<sup>Optional</sup> <a name="credentialSpecInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.credentialSpecInput"></a>

```java
public ServiceTaskSpecContainerSpecPrivilegesCredentialSpec getCredentialSpecInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesCredentialSpec">ServiceTaskSpecContainerSpecPrivilegesCredentialSpec</a>

---

##### `seLinuxContextInput`<sup>Optional</sup> <a name="seLinuxContextInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.seLinuxContextInput"></a>

```java
public ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext getSeLinuxContextInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpecContainerSpecPrivileges getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivileges">ServiceTaskSpecContainerSpecPrivileges</a>

---


### ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference <a name="ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference;

new ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisable` <a name="resetDisable" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetDisable"></a>

```java
public void resetDisable()
```

##### `resetLevel` <a name="resetLevel" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetLevel"></a>

```java
public void resetLevel()
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetRole"></a>

```java
public void resetRole()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.resetUser"></a>

```java
public void resetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.disableInput">disableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.levelInput">levelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.disable">disable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableInput`<sup>Optional</sup> <a name="disableInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.disableInput"></a>

```java
public java.lang.Object getDisableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.levelInput"></a>

```java
public java.lang.String getLevelInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `disable`<sup>Required</sup> <a name="disable" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.disable"></a>

```java
public java.lang.Object getDisable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext">ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext</a>

---


### ServiceTaskSpecContainerSpecSecretsList <a name="ServiceTaskSpecContainerSpecSecretsList" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecSecretsList;

new ServiceTaskSpecContainerSpecSecretsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.get"></a>

```java
public ServiceTaskSpecContainerSpecSecretsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>>

---


### ServiceTaskSpecContainerSpecSecretsOutputReference <a name="ServiceTaskSpecContainerSpecSecretsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference;

new ServiceTaskSpecContainerSpecSecretsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileGid` <a name="resetFileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileGid"></a>

```java
public void resetFileGid()
```

##### `resetFileMode` <a name="resetFileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileMode"></a>

```java
public void resetFileMode()
```

##### `resetFileUid` <a name="resetFileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetFileUid"></a>

```java
public void resetFileUid()
```

##### `resetSecretName` <a name="resetSecretName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.resetSecretName"></a>

```java
public void resetSecretName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileGidInput">fileGidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileModeInput">fileModeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileUidInput">fileUidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileGid">fileGid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileMode">fileMode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileName">fileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileUid">fileUid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileGidInput`<sup>Optional</sup> <a name="fileGidInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileGidInput"></a>

```java
public java.lang.String getFileGidInput();
```

- *Type:* java.lang.String

---

##### `fileModeInput`<sup>Optional</sup> <a name="fileModeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileModeInput"></a>

```java
public java.lang.Number getFileModeInput();
```

- *Type:* java.lang.Number

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileNameInput"></a>

```java
public java.lang.String getFileNameInput();
```

- *Type:* java.lang.String

---

##### `fileUidInput`<sup>Optional</sup> <a name="fileUidInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileUidInput"></a>

```java
public java.lang.String getFileUidInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `fileGid`<sup>Required</sup> <a name="fileGid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileGid"></a>

```java
public java.lang.String getFileGid();
```

- *Type:* java.lang.String

---

##### `fileMode`<sup>Required</sup> <a name="fileMode" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileMode"></a>

```java
public java.lang.Number getFileMode();
```

- *Type:* java.lang.Number

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

---

##### `fileUid`<sup>Required</sup> <a name="fileUid" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.fileUid"></a>

```java
public java.lang.String getFileUid();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecretsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecSecrets">ServiceTaskSpecContainerSpecSecrets</a>

---


### ServiceTaskSpecLogDriverOutputReference <a name="ServiceTaskSpecLogDriverOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecLogDriverOutputReference;

new ServiceTaskSpecLogDriverOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.resetOptions"></a>

```java
public void resetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.optionsInput">optionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.optionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpecLogDriver getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a>

---


### ServiceTaskSpecNetworksAdvancedList <a name="ServiceTaskSpecNetworksAdvancedList" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecNetworksAdvancedList;

new ServiceTaskSpecNetworksAdvancedList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.get"></a>

```java
public ServiceTaskSpecNetworksAdvancedOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>>

---


### ServiceTaskSpecNetworksAdvancedOutputReference <a name="ServiceTaskSpecNetworksAdvancedOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecNetworksAdvancedOutputReference;

new ServiceTaskSpecNetworksAdvancedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAliases` <a name="resetAliases" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resetAliases"></a>

```java
public void resetAliases()
```

##### `resetDriverOpts` <a name="resetDriverOpts" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.resetDriverOpts"></a>

```java
public void resetDriverOpts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.aliasesInput">aliasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.driverOptsInput">driverOptsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.aliases">aliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.driverOpts">driverOpts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.aliasesInput"></a>

```java
public java.util.List<java.lang.String> getAliasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `driverOptsInput`<sup>Optional</sup> <a name="driverOptsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.driverOptsInput"></a>

```java
public java.util.List<java.lang.String> getDriverOptsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.aliases"></a>

```java
public java.util.List<java.lang.String> getAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `driverOpts`<sup>Required</sup> <a name="driverOpts" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.driverOpts"></a>

```java
public java.util.List<java.lang.String> getDriverOpts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>

---


### ServiceTaskSpecOutputReference <a name="ServiceTaskSpecOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecOutputReference;

new ServiceTaskSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerSpec` <a name="putContainerSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec"></a>

```java
public void putContainerSpec(ServiceTaskSpecContainerSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putContainerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a>

---

##### `putLogDriver` <a name="putLogDriver" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putLogDriver"></a>

```java
public void putLogDriver(ServiceTaskSpecLogDriver value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putLogDriver.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a>

---

##### `putNetworksAdvanced` <a name="putNetworksAdvanced" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putNetworksAdvanced"></a>

```java
public void putNetworksAdvanced(IResolvable OR java.util.List<ServiceTaskSpecNetworksAdvanced> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putNetworksAdvanced.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>>

---

##### `putPlacement` <a name="putPlacement" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putPlacement"></a>

```java
public void putPlacement(ServiceTaskSpecPlacement value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a>

---

##### `putResources` <a name="putResources" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putResources"></a>

```java
public void putResources(ServiceTaskSpecResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a>

---

##### `putRestartPolicy` <a name="putRestartPolicy" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putRestartPolicy"></a>

```java
public void putRestartPolicy(ServiceTaskSpecRestartPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.putRestartPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a>

---

##### `resetForceUpdate` <a name="resetForceUpdate" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetForceUpdate"></a>

```java
public void resetForceUpdate()
```

##### `resetLogDriver` <a name="resetLogDriver" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetLogDriver"></a>

```java
public void resetLogDriver()
```

##### `resetNetworksAdvanced` <a name="resetNetworksAdvanced" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetNetworksAdvanced"></a>

```java
public void resetNetworksAdvanced()
```

##### `resetPlacement` <a name="resetPlacement" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetPlacement"></a>

```java
public void resetPlacement()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetRestartPolicy` <a name="resetRestartPolicy" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetRestartPolicy"></a>

```java
public void resetRestartPolicy()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.resetRuntime"></a>

```java
public void resetRuntime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.containerSpec">containerSpec</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference">ServiceTaskSpecContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.logDriver">logDriver</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference">ServiceTaskSpecLogDriverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.networksAdvanced">networksAdvanced</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList">ServiceTaskSpecNetworksAdvancedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference">ServiceTaskSpecPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference">ServiceTaskSpecResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.restartPolicy">restartPolicy</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference">ServiceTaskSpecRestartPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.containerSpecInput">containerSpecInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.forceUpdateInput">forceUpdateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.logDriverInput">logDriverInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.networksAdvancedInput">networksAdvancedInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.placementInput">placementInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.restartPolicyInput">restartPolicyInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.forceUpdate">forceUpdate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerSpec`<sup>Required</sup> <a name="containerSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.containerSpec"></a>

```java
public ServiceTaskSpecContainerSpecOutputReference getContainerSpec();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpecOutputReference">ServiceTaskSpecContainerSpecOutputReference</a>

---

##### `logDriver`<sup>Required</sup> <a name="logDriver" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.logDriver"></a>

```java
public ServiceTaskSpecLogDriverOutputReference getLogDriver();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriverOutputReference">ServiceTaskSpecLogDriverOutputReference</a>

---

##### `networksAdvanced`<sup>Required</sup> <a name="networksAdvanced" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.networksAdvanced"></a>

```java
public ServiceTaskSpecNetworksAdvancedList getNetworksAdvanced();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvancedList">ServiceTaskSpecNetworksAdvancedList</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.placement"></a>

```java
public ServiceTaskSpecPlacementOutputReference getPlacement();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference">ServiceTaskSpecPlacementOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.resources"></a>

```java
public ServiceTaskSpecResourcesOutputReference getResources();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference">ServiceTaskSpecResourcesOutputReference</a>

---

##### `restartPolicy`<sup>Required</sup> <a name="restartPolicy" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.restartPolicy"></a>

```java
public ServiceTaskSpecRestartPolicyOutputReference getRestartPolicy();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference">ServiceTaskSpecRestartPolicyOutputReference</a>

---

##### `containerSpecInput`<sup>Optional</sup> <a name="containerSpecInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.containerSpecInput"></a>

```java
public ServiceTaskSpecContainerSpec getContainerSpecInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecContainerSpec">ServiceTaskSpecContainerSpec</a>

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="forceUpdateInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.forceUpdateInput"></a>

```java
public java.lang.Number getForceUpdateInput();
```

- *Type:* java.lang.Number

---

##### `logDriverInput`<sup>Optional</sup> <a name="logDriverInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.logDriverInput"></a>

```java
public ServiceTaskSpecLogDriver getLogDriverInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecLogDriver">ServiceTaskSpecLogDriver</a>

---

##### `networksAdvancedInput`<sup>Optional</sup> <a name="networksAdvancedInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.networksAdvancedInput"></a>

```java
public java.lang.Object getNetworksAdvancedInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecNetworksAdvanced">ServiceTaskSpecNetworksAdvanced</a>>

---

##### `placementInput`<sup>Optional</sup> <a name="placementInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.placementInput"></a>

```java
public ServiceTaskSpecPlacement getPlacementInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.resourcesInput"></a>

```java
public ServiceTaskSpecResources getResourcesInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a>

---

##### `restartPolicyInput`<sup>Optional</sup> <a name="restartPolicyInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.restartPolicyInput"></a>

```java
public ServiceTaskSpecRestartPolicy getRestartPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `forceUpdate`<sup>Required</sup> <a name="forceUpdate" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.forceUpdate"></a>

```java
public java.lang.Number getForceUpdate();
```

- *Type:* java.lang.Number

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpec">ServiceTaskSpec</a>

---


### ServiceTaskSpecPlacementOutputReference <a name="ServiceTaskSpecPlacementOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecPlacementOutputReference;

new ServiceTaskSpecPlacementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPlatforms` <a name="putPlatforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.putPlatforms"></a>

```java
public void putPlatforms(IResolvable OR java.util.List<ServiceTaskSpecPlacementPlatforms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.putPlatforms.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>>

---

##### `resetConstraints` <a name="resetConstraints" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetConstraints"></a>

```java
public void resetConstraints()
```

##### `resetMaxReplicas` <a name="resetMaxReplicas" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetMaxReplicas"></a>

```java
public void resetMaxReplicas()
```

##### `resetPlatforms` <a name="resetPlatforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetPlatforms"></a>

```java
public void resetPlatforms()
```

##### `resetPrefs` <a name="resetPrefs" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.resetPrefs"></a>

```java
public void resetPrefs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.platforms">platforms</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList">ServiceTaskSpecPlacementPlatformsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.constraintsInput">constraintsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.maxReplicasInput">maxReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.platformsInput">platformsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.prefsInput">prefsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.constraints">constraints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.prefs">prefs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.platforms"></a>

```java
public ServiceTaskSpecPlacementPlatformsList getPlatforms();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList">ServiceTaskSpecPlacementPlatformsList</a>

---

##### `constraintsInput`<sup>Optional</sup> <a name="constraintsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.constraintsInput"></a>

```java
public java.util.List<java.lang.String> getConstraintsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxReplicasInput`<sup>Optional</sup> <a name="maxReplicasInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.maxReplicasInput"></a>

```java
public java.lang.Number getMaxReplicasInput();
```

- *Type:* java.lang.Number

---

##### `platformsInput`<sup>Optional</sup> <a name="platformsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.platformsInput"></a>

```java
public java.lang.Object getPlatformsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>>

---

##### `prefsInput`<sup>Optional</sup> <a name="prefsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.prefsInput"></a>

```java
public java.util.List<java.lang.String> getPrefsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `constraints`<sup>Required</sup> <a name="constraints" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.constraints"></a>

```java
public java.util.List<java.lang.String> getConstraints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

---

##### `prefs`<sup>Required</sup> <a name="prefs" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.prefs"></a>

```java
public java.util.List<java.lang.String> getPrefs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpecPlacement getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacement">ServiceTaskSpecPlacement</a>

---


### ServiceTaskSpecPlacementPlatformsList <a name="ServiceTaskSpecPlacementPlatformsList" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecPlacementPlatformsList;

new ServiceTaskSpecPlacementPlatformsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.get"></a>

```java
public ServiceTaskSpecPlacementPlatformsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>>

---


### ServiceTaskSpecPlacementPlatformsOutputReference <a name="ServiceTaskSpecPlacementPlatformsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecPlacementPlatformsOutputReference;

new ServiceTaskSpecPlacementPlatformsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.architectureInput">architectureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.osInput">osInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.architecture">architecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.os">os</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `architectureInput`<sup>Optional</sup> <a name="architectureInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.architectureInput"></a>

```java
public java.lang.String getArchitectureInput();
```

- *Type:* java.lang.String

---

##### `osInput`<sup>Optional</sup> <a name="osInput" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.osInput"></a>

```java
public java.lang.String getOsInput();
```

- *Type:* java.lang.String

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.os"></a>

```java
public java.lang.String getOs();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatformsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-docker.service.ServiceTaskSpecPlacementPlatforms">ServiceTaskSpecPlacementPlatforms</a>

---


### ServiceTaskSpecResourcesLimitsOutputReference <a name="ServiceTaskSpecResourcesLimitsOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecResourcesLimitsOutputReference;

new ServiceTaskSpecResourcesLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryBytes` <a name="resetMemoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resetMemoryBytes"></a>

```java
public void resetMemoryBytes()
```

##### `resetNanoCpus` <a name="resetNanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.resetNanoCpus"></a>

```java
public void resetNanoCpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.memoryBytesInput">memoryBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.nanoCpusInput">nanoCpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.memoryBytes">memoryBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.nanoCpus">nanoCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryBytesInput`<sup>Optional</sup> <a name="memoryBytesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.memoryBytesInput"></a>

```java
public java.lang.Number getMemoryBytesInput();
```

- *Type:* java.lang.Number

---

##### `nanoCpusInput`<sup>Optional</sup> <a name="nanoCpusInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.nanoCpusInput"></a>

```java
public java.lang.Number getNanoCpusInput();
```

- *Type:* java.lang.Number

---

##### `memoryBytes`<sup>Required</sup> <a name="memoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.memoryBytes"></a>

```java
public java.lang.Number getMemoryBytes();
```

- *Type:* java.lang.Number

---

##### `nanoCpus`<sup>Required</sup> <a name="nanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.nanoCpus"></a>

```java
public java.lang.Number getNanoCpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpecResourcesLimits getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a>

---


### ServiceTaskSpecResourcesOutputReference <a name="ServiceTaskSpecResourcesOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecResourcesOutputReference;

new ServiceTaskSpecResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLimits` <a name="putLimits" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putLimits"></a>

```java
public void putLimits(ServiceTaskSpecResourcesLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a>

---

##### `putReservation` <a name="putReservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putReservation"></a>

```java
public void putReservation(ServiceTaskSpecResourcesReservation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.putReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a>

---

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resetLimits"></a>

```java
public void resetLimits()
```

##### `resetReservation` <a name="resetReservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.resetReservation"></a>

```java
public void resetReservation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference">ServiceTaskSpecResourcesLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.reservation">reservation</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference">ServiceTaskSpecResourcesReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.limitsInput">limitsInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.reservationInput">reservationInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.limits"></a>

```java
public ServiceTaskSpecResourcesLimitsOutputReference getLimits();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimitsOutputReference">ServiceTaskSpecResourcesLimitsOutputReference</a>

---

##### `reservation`<sup>Required</sup> <a name="reservation" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.reservation"></a>

```java
public ServiceTaskSpecResourcesReservationOutputReference getReservation();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference">ServiceTaskSpecResourcesReservationOutputReference</a>

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.limitsInput"></a>

```java
public ServiceTaskSpecResourcesLimits getLimitsInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesLimits">ServiceTaskSpecResourcesLimits</a>

---

##### `reservationInput`<sup>Optional</sup> <a name="reservationInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.reservationInput"></a>

```java
public ServiceTaskSpecResourcesReservation getReservationInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpecResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResources">ServiceTaskSpecResources</a>

---


### ServiceTaskSpecResourcesReservationGenericResourcesOutputReference <a name="ServiceTaskSpecResourcesReservationGenericResourcesOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference;

new ServiceTaskSpecResourcesReservationGenericResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiscreteResourcesSpec` <a name="resetDiscreteResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resetDiscreteResourcesSpec"></a>

```java
public void resetDiscreteResourcesSpec()
```

##### `resetNamedResourcesSpec` <a name="resetNamedResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.resetNamedResourcesSpec"></a>

```java
public void resetNamedResourcesSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.discreteResourcesSpecInput">discreteResourcesSpecInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.namedResourcesSpecInput">namedResourcesSpecInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.discreteResourcesSpec">discreteResourcesSpec</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.namedResourcesSpec">namedResourcesSpec</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `discreteResourcesSpecInput`<sup>Optional</sup> <a name="discreteResourcesSpecInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.discreteResourcesSpecInput"></a>

```java
public java.util.List<java.lang.String> getDiscreteResourcesSpecInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namedResourcesSpecInput`<sup>Optional</sup> <a name="namedResourcesSpecInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.namedResourcesSpecInput"></a>

```java
public java.util.List<java.lang.String> getNamedResourcesSpecInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `discreteResourcesSpec`<sup>Required</sup> <a name="discreteResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.discreteResourcesSpec"></a>

```java
public java.util.List<java.lang.String> getDiscreteResourcesSpec();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namedResourcesSpec`<sup>Required</sup> <a name="namedResourcesSpec" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.namedResourcesSpec"></a>

```java
public java.util.List<java.lang.String> getNamedResourcesSpec();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpecResourcesReservationGenericResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a>

---


### ServiceTaskSpecResourcesReservationOutputReference <a name="ServiceTaskSpecResourcesReservationOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecResourcesReservationOutputReference;

new ServiceTaskSpecResourcesReservationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGenericResources` <a name="putGenericResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.putGenericResources"></a>

```java
public void putGenericResources(ServiceTaskSpecResourcesReservationGenericResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.putGenericResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a>

---

##### `resetGenericResources` <a name="resetGenericResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetGenericResources"></a>

```java
public void resetGenericResources()
```

##### `resetMemoryBytes` <a name="resetMemoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetMemoryBytes"></a>

```java
public void resetMemoryBytes()
```

##### `resetNanoCpus` <a name="resetNanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.resetNanoCpus"></a>

```java
public void resetNanoCpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.genericResources">genericResources</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference">ServiceTaskSpecResourcesReservationGenericResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.genericResourcesInput">genericResourcesInput</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.memoryBytesInput">memoryBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.nanoCpusInput">nanoCpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.memoryBytes">memoryBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.nanoCpus">nanoCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `genericResources`<sup>Required</sup> <a name="genericResources" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.genericResources"></a>

```java
public ServiceTaskSpecResourcesReservationGenericResourcesOutputReference getGenericResources();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResourcesOutputReference">ServiceTaskSpecResourcesReservationGenericResourcesOutputReference</a>

---

##### `genericResourcesInput`<sup>Optional</sup> <a name="genericResourcesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.genericResourcesInput"></a>

```java
public ServiceTaskSpecResourcesReservationGenericResources getGenericResourcesInput();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationGenericResources">ServiceTaskSpecResourcesReservationGenericResources</a>

---

##### `memoryBytesInput`<sup>Optional</sup> <a name="memoryBytesInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.memoryBytesInput"></a>

```java
public java.lang.Number getMemoryBytesInput();
```

- *Type:* java.lang.Number

---

##### `nanoCpusInput`<sup>Optional</sup> <a name="nanoCpusInput" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.nanoCpusInput"></a>

```java
public java.lang.Number getNanoCpusInput();
```

- *Type:* java.lang.Number

---

##### `memoryBytes`<sup>Required</sup> <a name="memoryBytes" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.memoryBytes"></a>

```java
public java.lang.Number getMemoryBytes();
```

- *Type:* java.lang.Number

---

##### `nanoCpus`<sup>Required</sup> <a name="nanoCpus" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.nanoCpus"></a>

```java
public java.lang.Number getNanoCpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservationOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpecResourcesReservation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecResourcesReservation">ServiceTaskSpecResourcesReservation</a>

---


### ServiceTaskSpecRestartPolicyOutputReference <a name="ServiceTaskSpecRestartPolicyOutputReference" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceTaskSpecRestartPolicyOutputReference;

new ServiceTaskSpecRestartPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDelay` <a name="resetDelay" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetDelay"></a>

```java
public void resetDelay()
```

##### `resetMaxAttempts` <a name="resetMaxAttempts" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetMaxAttempts"></a>

```java
public void resetMaxAttempts()
```

##### `resetWindow` <a name="resetWindow" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.resetWindow"></a>

```java
public void resetWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.delayInput">delayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.windowInput">windowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.delay">delay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.window">window</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.delayInput"></a>

```java
public java.lang.String getDelayInput();
```

- *Type:* java.lang.String

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.maxAttemptsInput"></a>

```java
public java.lang.Number getMaxAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.windowInput"></a>

```java
public java.lang.String getWindowInput();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.delay"></a>

```java
public java.lang.String getDelay();
```

- *Type:* java.lang.String

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.maxAttempts"></a>

```java
public java.lang.Number getMaxAttempts();
```

- *Type:* java.lang.Number

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.window"></a>

```java
public java.lang.String getWindow();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicyOutputReference.property.internalValue"></a>

```java
public ServiceTaskSpecRestartPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceTaskSpecRestartPolicy">ServiceTaskSpecRestartPolicy</a>

---


### ServiceUpdateConfigOutputReference <a name="ServiceUpdateConfigOutputReference" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.service.ServiceUpdateConfigOutputReference;

new ServiceUpdateConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelay` <a name="resetDelay" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetDelay"></a>

```java
public void resetDelay()
```

##### `resetFailureAction` <a name="resetFailureAction" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetFailureAction"></a>

```java
public void resetFailureAction()
```

##### `resetMaxFailureRatio` <a name="resetMaxFailureRatio" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetMaxFailureRatio"></a>

```java
public void resetMaxFailureRatio()
```

##### `resetMonitor` <a name="resetMonitor" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetMonitor"></a>

```java
public void resetMonitor()
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetParallelism` <a name="resetParallelism" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.resetParallelism"></a>

```java
public void resetParallelism()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.delayInput">delayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.failureActionInput">failureActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.maxFailureRatioInput">maxFailureRatioInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.monitorInput">monitorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.parallelismInput">parallelismInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.delay">delay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.failureAction">failureAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.maxFailureRatio">maxFailureRatio</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.monitor">monitor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.parallelism">parallelism</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.delayInput"></a>

```java
public java.lang.String getDelayInput();
```

- *Type:* java.lang.String

---

##### `failureActionInput`<sup>Optional</sup> <a name="failureActionInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.failureActionInput"></a>

```java
public java.lang.String getFailureActionInput();
```

- *Type:* java.lang.String

---

##### `maxFailureRatioInput`<sup>Optional</sup> <a name="maxFailureRatioInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.maxFailureRatioInput"></a>

```java
public java.lang.String getMaxFailureRatioInput();
```

- *Type:* java.lang.String

---

##### `monitorInput`<sup>Optional</sup> <a name="monitorInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.monitorInput"></a>

```java
public java.lang.String getMonitorInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `parallelismInput`<sup>Optional</sup> <a name="parallelismInput" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.parallelismInput"></a>

```java
public java.lang.Number getParallelismInput();
```

- *Type:* java.lang.Number

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.delay"></a>

```java
public java.lang.String getDelay();
```

- *Type:* java.lang.String

---

##### `failureAction`<sup>Required</sup> <a name="failureAction" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.failureAction"></a>

```java
public java.lang.String getFailureAction();
```

- *Type:* java.lang.String

---

##### `maxFailureRatio`<sup>Required</sup> <a name="maxFailureRatio" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.maxFailureRatio"></a>

```java
public java.lang.String getMaxFailureRatio();
```

- *Type:* java.lang.String

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.monitor"></a>

```java
public java.lang.String getMonitor();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.parallelism"></a>

```java
public java.lang.Number getParallelism();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.service.ServiceUpdateConfigOutputReference.property.internalValue"></a>

```java
public ServiceUpdateConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.service.ServiceUpdateConfig">ServiceUpdateConfig</a>

---



