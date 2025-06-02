# `dataDockerRegistryImageManifests` Submodule <a name="`dataDockerRegistryImageManifests` Submodule" id="@cdktf/provider-docker.dataDockerRegistryImageManifests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDockerRegistryImageManifests <a name="DataDockerRegistryImageManifests" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests docker_registry_image_manifests}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/datadockerregistryimagemanifests"

datadockerregistryimagemanifests.NewDataDockerRegistryImageManifests(scope Construct, id *string, config DataDockerRegistryImageManifestsConfig) DataDockerRegistryImageManifests
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig">DataDockerRegistryImageManifestsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig">DataDockerRegistryImageManifestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.putAuthConfig">PutAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetAuthConfig">ResetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetInsecureSkipVerify">ResetInsecureSkipVerify</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAuthConfig` <a name="PutAuthConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.putAuthConfig"></a>

```go
func PutAuthConfig(value DataDockerRegistryImageManifestsAuthConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

---

##### `ResetAuthConfig` <a name="ResetAuthConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetAuthConfig"></a>

```go
func ResetAuthConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetId"></a>

```go
func ResetId()
```

##### `ResetInsecureSkipVerify` <a name="ResetInsecureSkipVerify" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.resetInsecureSkipVerify"></a>

```go
func ResetInsecureSkipVerify()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDockerRegistryImageManifests resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/datadockerregistryimagemanifests"

datadockerregistryimagemanifests.DataDockerRegistryImageManifests_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/datadockerregistryimagemanifests"

datadockerregistryimagemanifests.DataDockerRegistryImageManifests_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/datadockerregistryimagemanifests"

datadockerregistryimagemanifests.DataDockerRegistryImageManifests_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/datadockerregistryimagemanifests"

datadockerregistryimagemanifests.DataDockerRegistryImageManifests_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDockerRegistryImageManifests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDockerRegistryImageManifests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDockerRegistryImageManifests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDockerRegistryImageManifests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference">DataDockerRegistryImageManifestsAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.manifests">Manifests</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList">DataDockerRegistryImageManifestsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.authConfigInput">AuthConfigInput</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.insecureSkipVerifyInput">InsecureSkipVerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.insecureSkipVerify">InsecureSkipVerify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AuthConfig`<sup>Required</sup> <a name="AuthConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.authConfig"></a>

```go
func AuthConfig() DataDockerRegistryImageManifestsAuthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference">DataDockerRegistryImageManifestsAuthConfigOutputReference</a>

---

##### `Manifests`<sup>Required</sup> <a name="Manifests" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.manifests"></a>

```go
func Manifests() DataDockerRegistryImageManifestsManifestsList
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList">DataDockerRegistryImageManifestsManifestsList</a>

---

##### `AuthConfigInput`<sup>Optional</sup> <a name="AuthConfigInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.authConfigInput"></a>

```go
func AuthConfigInput() DataDockerRegistryImageManifestsAuthConfig
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InsecureSkipVerifyInput`<sup>Optional</sup> <a name="InsecureSkipVerifyInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.insecureSkipVerifyInput"></a>

```go
func InsecureSkipVerifyInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InsecureSkipVerify`<sup>Required</sup> <a name="InsecureSkipVerify" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.insecureSkipVerify"></a>

```go
func InsecureSkipVerify() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifests.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDockerRegistryImageManifestsAuthConfig <a name="DataDockerRegistryImageManifestsAuthConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/datadockerregistryimagemanifests"

&datadockerregistryimagemanifests.DataDockerRegistryImageManifestsAuthConfig {
	Address: *string,
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.address">Address</a></code> | <code>*string</code> | The address of the Docker registry. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.password">Password</a></code> | <code>*string</code> | The password for the Docker registry. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.username">Username</a></code> | <code>*string</code> | The username for the Docker registry. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.address"></a>

```go
Address *string
```

- *Type:* *string

The address of the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#address DataDockerRegistryImageManifests#address}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password for the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#password DataDockerRegistryImageManifests#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username for the Docker registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#username DataDockerRegistryImageManifests#username}

---

### DataDockerRegistryImageManifestsConfig <a name="DataDockerRegistryImageManifestsConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/datadockerregistryimagemanifests"

&datadockerregistryimagemanifests.DataDockerRegistryImageManifestsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AuthConfig: github.com/cdktf/cdktf-provider-docker-go/docker/v12.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig,
	Id: *string,
	InsecureSkipVerify: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Docker image, including any tags. e.g. `alpine:latest`. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.authConfig">AuthConfig</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#id DataDockerRegistryImageManifests#id}. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.insecureSkipVerify">InsecureSkipVerify</a></code> | <code>interface{}</code> | If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Docker image, including any tags. e.g. `alpine:latest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#name DataDockerRegistryImageManifests#name}

---

##### `AuthConfig`<sup>Optional</sup> <a name="AuthConfig" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.authConfig"></a>

```go
AuthConfig DataDockerRegistryImageManifestsAuthConfig
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#auth_config DataDockerRegistryImageManifests#auth_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#id DataDockerRegistryImageManifests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsecureSkipVerify`<sup>Optional</sup> <a name="InsecureSkipVerify" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsConfig.property.insecureSkipVerify"></a>

```go
InsecureSkipVerify interface{}
```

- *Type:* interface{}

If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.6.0/docs/data-sources/registry_image_manifests#insecure_skip_verify DataDockerRegistryImageManifests#insecure_skip_verify}

---

### DataDockerRegistryImageManifestsManifests <a name="DataDockerRegistryImageManifestsManifests" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/datadockerregistryimagemanifests"

&datadockerregistryimagemanifests.DataDockerRegistryImageManifestsManifests {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDockerRegistryImageManifestsAuthConfigOutputReference <a name="DataDockerRegistryImageManifestsAuthConfigOutputReference" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/datadockerregistryimagemanifests"

datadockerregistryimagemanifests.NewDataDockerRegistryImageManifestsAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDockerRegistryImageManifestsAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDockerRegistryImageManifestsAuthConfig
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsAuthConfig">DataDockerRegistryImageManifestsAuthConfig</a>

---


### DataDockerRegistryImageManifestsManifestsList <a name="DataDockerRegistryImageManifestsManifestsList" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/datadockerregistryimagemanifests"

datadockerregistryimagemanifests.NewDataDockerRegistryImageManifestsManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDockerRegistryImageManifestsManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.get"></a>

```go
func Get(index *f64) DataDockerRegistryImageManifestsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDockerRegistryImageManifestsManifestsOutputReference <a name="DataDockerRegistryImageManifestsManifestsOutputReference" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v12/datadockerregistryimagemanifests"

datadockerregistryimagemanifests.NewDataDockerRegistryImageManifestsManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDockerRegistryImageManifestsManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.mediaType">MediaType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.os">Os</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.sha256Digest">Sha256Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests">DataDockerRegistryImageManifestsManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `MediaType`<sup>Required</sup> <a name="MediaType" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.mediaType"></a>

```go
func MediaType() *string
```

- *Type:* *string

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.os"></a>

```go
func Os() *string
```

- *Type:* *string

---

##### `Sha256Digest`<sup>Required</sup> <a name="Sha256Digest" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.sha256Digest"></a>

```go
func Sha256Digest() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDockerRegistryImageManifestsManifests
```

- *Type:* <a href="#@cdktf/provider-docker.dataDockerRegistryImageManifests.DataDockerRegistryImageManifestsManifests">DataDockerRegistryImageManifestsManifests</a>

---



