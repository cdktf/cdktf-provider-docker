# `plugin` Submodule <a name="`plugin` Submodule" id="@cdktf/provider-docker.plugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Plugin <a name="Plugin" id="@cdktf/provider-docker.plugin.Plugin"></a>

Represents a {@link https://www.terraform.io/docs/providers/docker/r/plugin docker_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.plugin.Plugin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.plugin.Plugin;

Plugin.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .alias(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .enableTimeout(java.lang.Number)
//  .env(java.util.List<java.lang.String>)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .forceDisable(java.lang.Boolean)
//  .forceDisable(IResolvable)
//  .grantAllPermissions(java.lang.Boolean)
//  .grantAllPermissions(IResolvable)
//  .grantPermissions(IResolvable)
//  .grantPermissions(java.util.List<PluginGrantPermissions>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docker Plugin name. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Docker Plugin alias. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true` the plugin is enabled. Defaults to `true`. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.enableTimeout">enableTimeout</a></code> | <code>java.lang.Number</code> | HTTP client timeout to enable the plugin. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.env">env</a></code> | <code>java.util.List<java.lang.String></code> | The environment variables in the form of `KEY=VALUE`, e.g. `DEBUG=0`. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, then the plugin is destroyed forcibly. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.forceDisable">forceDisable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, then the plugin is disabled forcibly. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.grantAllPermissions">grantAllPermissions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, grant all permissions necessary to run the plugin. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.grantPermissions">grantPermissions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>></code> | grant_permissions block. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#id Plugin#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docker Plugin name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#name Plugin#name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Docker Plugin alias.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#alias Plugin#alias}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true` the plugin is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#enabled Plugin#enabled}

---

##### `enableTimeout`<sup>Optional</sup> <a name="enableTimeout" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.enableTimeout"></a>

- *Type:* java.lang.Number

HTTP client timeout to enable the plugin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#enable_timeout Plugin#enable_timeout}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.env"></a>

- *Type:* java.util.List<java.lang.String>

The environment variables in the form of `KEY=VALUE`, e.g. `DEBUG=0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#env Plugin#env}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, then the plugin is destroyed forcibly.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#force_destroy Plugin#force_destroy}

---

##### `forceDisable`<sup>Optional</sup> <a name="forceDisable" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.forceDisable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, then the plugin is disabled forcibly.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#force_disable Plugin#force_disable}

---

##### `grantAllPermissions`<sup>Optional</sup> <a name="grantAllPermissions" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.grantAllPermissions"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, grant all permissions necessary to run the plugin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#grant_all_permissions Plugin#grant_all_permissions}

---

##### `grantPermissions`<sup>Optional</sup> <a name="grantPermissions" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.grantPermissions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>>

grant_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#grant_permissions Plugin#grant_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.plugin.Plugin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#id Plugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.putGrantPermissions">putGrantPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetEnableTimeout">resetEnableTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetForceDisable">resetForceDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetGrantAllPermissions">resetGrantAllPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetGrantPermissions">resetGrantPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.plugin.Plugin.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.plugin.Plugin.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.plugin.Plugin.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.plugin.Plugin.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.plugin.Plugin.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.plugin.Plugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.plugin.Plugin.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.plugin.Plugin.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.plugin.Plugin.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.plugin.Plugin.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.plugin.Plugin.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.plugin.Plugin.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.plugin.Plugin.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.plugin.Plugin.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.plugin.Plugin.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.plugin.Plugin.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.Plugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putGrantPermissions` <a name="putGrantPermissions" id="@cdktf/provider-docker.plugin.Plugin.putGrantPermissions"></a>

```java
public void putGrantPermissions(IResolvable OR java.util.List<PluginGrantPermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.plugin.Plugin.putGrantPermissions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>>

---

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-docker.plugin.Plugin.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-docker.plugin.Plugin.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEnableTimeout` <a name="resetEnableTimeout" id="@cdktf/provider-docker.plugin.Plugin.resetEnableTimeout"></a>

```java
public void resetEnableTimeout()
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-docker.plugin.Plugin.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-docker.plugin.Plugin.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetForceDisable` <a name="resetForceDisable" id="@cdktf/provider-docker.plugin.Plugin.resetForceDisable"></a>

```java
public void resetForceDisable()
```

##### `resetGrantAllPermissions` <a name="resetGrantAllPermissions" id="@cdktf/provider-docker.plugin.Plugin.resetGrantAllPermissions"></a>

```java
public void resetGrantAllPermissions()
```

##### `resetGrantPermissions` <a name="resetGrantPermissions" id="@cdktf/provider-docker.plugin.Plugin.resetGrantPermissions"></a>

```java
public void resetGrantPermissions()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-docker.plugin.Plugin.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-docker.plugin.Plugin.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.docker.plugin.Plugin;

Plugin.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.plugin.Plugin.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.plugin.Plugin.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.docker.plugin.Plugin;

Plugin.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.plugin.Plugin.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-docker.plugin.Plugin.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.docker.plugin.Plugin;

Plugin.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.plugin.Plugin.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.grantPermissions">grantPermissions</a></code> | <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList">PluginGrantPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.pluginReference">pluginReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.enableTimeoutInput">enableTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.envInput">envInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.forceDisableInput">forceDisableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.grantAllPermissionsInput">grantAllPermissionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.grantPermissionsInput">grantPermissionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.enableTimeout">enableTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.env">env</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.forceDisable">forceDisable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.grantAllPermissions">grantAllPermissions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.plugin.Plugin.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.plugin.Plugin.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.plugin.Plugin.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.plugin.Plugin.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-docker.plugin.Plugin.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.plugin.Plugin.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.plugin.Plugin.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.plugin.Plugin.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.plugin.Plugin.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.plugin.Plugin.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.plugin.Plugin.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.plugin.Plugin.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.plugin.Plugin.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.plugin.Plugin.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `grantPermissions`<sup>Required</sup> <a name="grantPermissions" id="@cdktf/provider-docker.plugin.Plugin.property.grantPermissions"></a>

```java
public PluginGrantPermissionsList getGrantPermissions();
```

- *Type:* <a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList">PluginGrantPermissionsList</a>

---

##### `pluginReference`<sup>Required</sup> <a name="pluginReference" id="@cdktf/provider-docker.plugin.Plugin.property.pluginReference"></a>

```java
public java.lang.String getPluginReference();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-docker.plugin.Plugin.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-docker.plugin.Plugin.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableTimeoutInput`<sup>Optional</sup> <a name="enableTimeoutInput" id="@cdktf/provider-docker.plugin.Plugin.property.enableTimeoutInput"></a>

```java
public java.lang.Number getEnableTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-docker.plugin.Plugin.property.envInput"></a>

```java
public java.util.List<java.lang.String> getEnvInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-docker.plugin.Plugin.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceDisableInput`<sup>Optional</sup> <a name="forceDisableInput" id="@cdktf/provider-docker.plugin.Plugin.property.forceDisableInput"></a>

```java
public java.lang.Object getForceDisableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `grantAllPermissionsInput`<sup>Optional</sup> <a name="grantAllPermissionsInput" id="@cdktf/provider-docker.plugin.Plugin.property.grantAllPermissionsInput"></a>

```java
public java.lang.Object getGrantAllPermissionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `grantPermissionsInput`<sup>Optional</sup> <a name="grantPermissionsInput" id="@cdktf/provider-docker.plugin.Plugin.property.grantPermissionsInput"></a>

```java
public java.lang.Object getGrantPermissionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-docker.plugin.Plugin.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.plugin.Plugin.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-docker.plugin.Plugin.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-docker.plugin.Plugin.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableTimeout`<sup>Required</sup> <a name="enableTimeout" id="@cdktf/provider-docker.plugin.Plugin.property.enableTimeout"></a>

```java
public java.lang.Number getEnableTimeout();
```

- *Type:* java.lang.Number

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-docker.plugin.Plugin.property.env"></a>

```java
public java.util.List<java.lang.String> getEnv();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-docker.plugin.Plugin.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forceDisable`<sup>Required</sup> <a name="forceDisable" id="@cdktf/provider-docker.plugin.Plugin.property.forceDisable"></a>

```java
public java.lang.Object getForceDisable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `grantAllPermissions`<sup>Required</sup> <a name="grantAllPermissions" id="@cdktf/provider-docker.plugin.Plugin.property.grantAllPermissions"></a>

```java
public java.lang.Object getGrantAllPermissions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.plugin.Plugin.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.plugin.Plugin.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.Plugin.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.plugin.Plugin.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PluginConfig <a name="PluginConfig" id="@cdktf/provider-docker.plugin.PluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.plugin.PluginConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.plugin.PluginConfig;

PluginConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .alias(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .enableTimeout(java.lang.Number)
//  .env(java.util.List<java.lang.String>)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .forceDisable(java.lang.Boolean)
//  .forceDisable(IResolvable)
//  .grantAllPermissions(java.lang.Boolean)
//  .grantAllPermissions(IResolvable)
//  .grantPermissions(IResolvable)
//  .grantPermissions(java.util.List<PluginGrantPermissions>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docker Plugin name. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Docker Plugin alias. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true` the plugin is enabled. Defaults to `true`. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.enableTimeout">enableTimeout</a></code> | <code>java.lang.Number</code> | HTTP client timeout to enable the plugin. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.env">env</a></code> | <code>java.util.List<java.lang.String></code> | The environment variables in the form of `KEY=VALUE`, e.g. `DEBUG=0`. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, then the plugin is destroyed forcibly. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.forceDisable">forceDisable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, then the plugin is disabled forcibly. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.grantAllPermissions">grantAllPermissions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, grant all permissions necessary to run the plugin. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.grantPermissions">grantPermissions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>></code> | grant_permissions block. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#id Plugin#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.plugin.PluginConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.plugin.PluginConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.plugin.PluginConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.plugin.PluginConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.plugin.PluginConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.plugin.PluginConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.plugin.PluginConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.plugin.PluginConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docker Plugin name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#name Plugin#name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-docker.plugin.PluginConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Docker Plugin alias.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#alias Plugin#alias}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-docker.plugin.PluginConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true` the plugin is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#enabled Plugin#enabled}

---

##### `enableTimeout`<sup>Optional</sup> <a name="enableTimeout" id="@cdktf/provider-docker.plugin.PluginConfig.property.enableTimeout"></a>

```java
public java.lang.Number getEnableTimeout();
```

- *Type:* java.lang.Number

HTTP client timeout to enable the plugin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#enable_timeout Plugin#enable_timeout}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.plugin.PluginConfig.property.env"></a>

```java
public java.util.List<java.lang.String> getEnv();
```

- *Type:* java.util.List<java.lang.String>

The environment variables in the form of `KEY=VALUE`, e.g. `DEBUG=0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#env Plugin#env}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-docker.plugin.PluginConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, then the plugin is destroyed forcibly.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#force_destroy Plugin#force_destroy}

---

##### `forceDisable`<sup>Optional</sup> <a name="forceDisable" id="@cdktf/provider-docker.plugin.PluginConfig.property.forceDisable"></a>

```java
public java.lang.Object getForceDisable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, then the plugin is disabled forcibly.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#force_disable Plugin#force_disable}

---

##### `grantAllPermissions`<sup>Optional</sup> <a name="grantAllPermissions" id="@cdktf/provider-docker.plugin.PluginConfig.property.grantAllPermissions"></a>

```java
public java.lang.Object getGrantAllPermissions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, grant all permissions necessary to run the plugin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#grant_all_permissions Plugin#grant_all_permissions}

---

##### `grantPermissions`<sup>Optional</sup> <a name="grantPermissions" id="@cdktf/provider-docker.plugin.PluginConfig.property.grantPermissions"></a>

```java
public java.lang.Object getGrantPermissions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>>

grant_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#grant_permissions Plugin#grant_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.plugin.PluginConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#id Plugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### PluginGrantPermissions <a name="PluginGrantPermissions" id="@cdktf/provider-docker.plugin.PluginGrantPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.plugin.PluginGrantPermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.plugin.PluginGrantPermissions;

PluginGrantPermissions.builder()
    .name(java.lang.String)
    .value(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions.property.name">name</a></code> | <code>java.lang.String</code> | The name of the permission. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | The value of the permission. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.plugin.PluginGrantPermissions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the permission.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#name Plugin#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.plugin.PluginGrantPermissions.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

The value of the permission.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/plugin#value Plugin#value}

---

## Classes <a name="Classes" id="Classes"></a>

### PluginGrantPermissionsList <a name="PluginGrantPermissionsList" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.plugin.PluginGrantPermissionsList;

new PluginGrantPermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.get"></a>

```java
public PluginGrantPermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a>>

---


### PluginGrantPermissionsOutputReference <a name="PluginGrantPermissionsOutputReference" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.plugin.PluginGrantPermissionsOutputReference;

new PluginGrantPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.valueInput"></a>

```java
public java.util.List<java.lang.String> getValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.plugin.PluginGrantPermissionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.plugin.PluginGrantPermissions">PluginGrantPermissions</a> OR com.hashicorp.cdktf.IResolvable

---



