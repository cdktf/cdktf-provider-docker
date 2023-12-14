# `dataDockerLogs` Submodule <a name="`dataDockerLogs` Submodule" id="@cdktf/provider-docker.dataDockerLogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDockerLogs <a name="DataDockerLogs" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs docker_logs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/datadockerlogs"

datadockerlogs.NewDataDockerLogs(scope Construct, id *string, config DataDockerLogsConfig) DataDockerLogs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig">DataDockerLogsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig">DataDockerLogsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDetails">ResetDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDiscardHeaders">ResetDiscardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetFollow">ResetFollow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetLogsListStringEnabled">ResetLogsListStringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStderr">ResetShowStderr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStdout">ResetShowStdout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetSince">ResetSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTail">ResetTail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTimestamps">ResetTimestamps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetUntil">ResetUntil</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDetails` <a name="ResetDetails" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDetails"></a>

```go
func ResetDetails()
```

##### `ResetDiscardHeaders` <a name="ResetDiscardHeaders" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetDiscardHeaders"></a>

```go
func ResetDiscardHeaders()
```

##### `ResetFollow` <a name="ResetFollow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetFollow"></a>

```go
func ResetFollow()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetId"></a>

```go
func ResetId()
```

##### `ResetLogsListStringEnabled` <a name="ResetLogsListStringEnabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetLogsListStringEnabled"></a>

```go
func ResetLogsListStringEnabled()
```

##### `ResetShowStderr` <a name="ResetShowStderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStderr"></a>

```go
func ResetShowStderr()
```

##### `ResetShowStdout` <a name="ResetShowStdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetShowStdout"></a>

```go
func ResetShowStdout()
```

##### `ResetSince` <a name="ResetSince" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetSince"></a>

```go
func ResetSince()
```

##### `ResetTail` <a name="ResetTail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTail"></a>

```go
func ResetTail()
```

##### `ResetTimestamps` <a name="ResetTimestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetTimestamps"></a>

```go
func ResetTimestamps()
```

##### `ResetUntil` <a name="ResetUntil" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.resetUntil"></a>

```go
func ResetUntil()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDockerLogs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/datadockerlogs"

datadockerlogs.DataDockerLogs_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/datadockerlogs"

datadockerlogs.DataDockerLogs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/datadockerlogs"

datadockerlogs.DataDockerLogs_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/datadockerlogs"

datadockerlogs.DataDockerLogs_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDockerLogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDockerLogs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDockerLogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDockerLogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListString">LogsListString</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.detailsInput">DetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeadersInput">DiscardHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.followInput">FollowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabledInput">LogsListStringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderrInput">ShowStderrInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdoutInput">ShowStdoutInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.sinceInput">SinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tailInput">TailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestampsInput">TimestampsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.untilInput">UntilInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.details">Details</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeaders">DiscardHeaders</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.follow">Follow</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabled">LogsListStringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderr">ShowStderr</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdout">ShowStdout</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.since">Since</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tail">Tail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestamps">Timestamps</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.until">Until</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `LogsListString`<sup>Required</sup> <a name="LogsListString" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListString"></a>

```go
func LogsListString() *[]*string
```

- *Type:* *[]*string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.detailsInput"></a>

```go
func DetailsInput() interface{}
```

- *Type:* interface{}

---

##### `DiscardHeadersInput`<sup>Optional</sup> <a name="DiscardHeadersInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeadersInput"></a>

```go
func DiscardHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `FollowInput`<sup>Optional</sup> <a name="FollowInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.followInput"></a>

```go
func FollowInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogsListStringEnabledInput`<sup>Optional</sup> <a name="LogsListStringEnabledInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabledInput"></a>

```go
func LogsListStringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ShowStderrInput`<sup>Optional</sup> <a name="ShowStderrInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderrInput"></a>

```go
func ShowStderrInput() interface{}
```

- *Type:* interface{}

---

##### `ShowStdoutInput`<sup>Optional</sup> <a name="ShowStdoutInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdoutInput"></a>

```go
func ShowStdoutInput() interface{}
```

- *Type:* interface{}

---

##### `SinceInput`<sup>Optional</sup> <a name="SinceInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.sinceInput"></a>

```go
func SinceInput() *string
```

- *Type:* *string

---

##### `TailInput`<sup>Optional</sup> <a name="TailInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tailInput"></a>

```go
func TailInput() *string
```

- *Type:* *string

---

##### `TimestampsInput`<sup>Optional</sup> <a name="TimestampsInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestampsInput"></a>

```go
func TimestampsInput() interface{}
```

- *Type:* interface{}

---

##### `UntilInput`<sup>Optional</sup> <a name="UntilInput" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.untilInput"></a>

```go
func UntilInput() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.details"></a>

```go
func Details() interface{}
```

- *Type:* interface{}

---

##### `DiscardHeaders`<sup>Required</sup> <a name="DiscardHeaders" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.discardHeaders"></a>

```go
func DiscardHeaders() interface{}
```

- *Type:* interface{}

---

##### `Follow`<sup>Required</sup> <a name="Follow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.follow"></a>

```go
func Follow() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogsListStringEnabled`<sup>Required</sup> <a name="LogsListStringEnabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.logsListStringEnabled"></a>

```go
func LogsListStringEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ShowStderr`<sup>Required</sup> <a name="ShowStderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStderr"></a>

```go
func ShowStderr() interface{}
```

- *Type:* interface{}

---

##### `ShowStdout`<sup>Required</sup> <a name="ShowStdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.showStdout"></a>

```go
func ShowStdout() interface{}
```

- *Type:* interface{}

---

##### `Since`<sup>Required</sup> <a name="Since" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.since"></a>

```go
func Since() *string
```

- *Type:* *string

---

##### `Tail`<sup>Required</sup> <a name="Tail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tail"></a>

```go
func Tail() *string
```

- *Type:* *string

---

##### `Timestamps`<sup>Required</sup> <a name="Timestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.timestamps"></a>

```go
func Timestamps() interface{}
```

- *Type:* interface{}

---

##### `Until`<sup>Required</sup> <a name="Until" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.until"></a>

```go
func Until() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDockerLogsConfig <a name="DataDockerLogsConfig" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/datadockerlogs"

&datadockerlogs.DataDockerLogsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Details: interface{},
	DiscardHeaders: interface{},
	Follow: interface{},
	Id: *string,
	LogsListStringEnabled: interface{},
	ShowStderr: interface{},
	ShowStdout: interface{},
	Since: *string,
	Tail: *string,
	Timestamps: interface{},
	Until: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Docker Container. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.details">Details</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#details DataDockerLogs#details}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.discardHeaders">DiscardHeaders</a></code> | <code>interface{}</code> | Discard headers that docker appends to each log entry. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.follow">Follow</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#follow DataDockerLogs#follow}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#id DataDockerLogs#id}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.logsListStringEnabled">LogsListStringEnabled</a></code> | <code>interface{}</code> | If true populate computed value `logs_list_string`. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStderr">ShowStderr</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#show_stderr DataDockerLogs#show_stderr}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStdout">ShowStdout</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#show_stdout DataDockerLogs#show_stdout}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.since">Since</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#since DataDockerLogs#since}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.tail">Tail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#tail DataDockerLogs#tail}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.timestamps">Timestamps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#timestamps DataDockerLogs#timestamps}. |
| <code><a href="#@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.until">Until</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#until DataDockerLogs#until}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Docker Container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#name DataDockerLogs#name}

---

##### `Details`<sup>Optional</sup> <a name="Details" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.details"></a>

```go
Details interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#details DataDockerLogs#details}.

---

##### `DiscardHeaders`<sup>Optional</sup> <a name="DiscardHeaders" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.discardHeaders"></a>

```go
DiscardHeaders interface{}
```

- *Type:* interface{}

Discard headers that docker appends to each log entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#discard_headers DataDockerLogs#discard_headers}

---

##### `Follow`<sup>Optional</sup> <a name="Follow" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.follow"></a>

```go
Follow interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#follow DataDockerLogs#follow}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#id DataDockerLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogsListStringEnabled`<sup>Optional</sup> <a name="LogsListStringEnabled" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.logsListStringEnabled"></a>

```go
LogsListStringEnabled interface{}
```

- *Type:* interface{}

If true populate computed value `logs_list_string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#logs_list_string_enabled DataDockerLogs#logs_list_string_enabled}

---

##### `ShowStderr`<sup>Optional</sup> <a name="ShowStderr" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStderr"></a>

```go
ShowStderr interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#show_stderr DataDockerLogs#show_stderr}.

---

##### `ShowStdout`<sup>Optional</sup> <a name="ShowStdout" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.showStdout"></a>

```go
ShowStdout interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#show_stdout DataDockerLogs#show_stdout}.

---

##### `Since`<sup>Optional</sup> <a name="Since" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.since"></a>

```go
Since *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#since DataDockerLogs#since}.

---

##### `Tail`<sup>Optional</sup> <a name="Tail" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.tail"></a>

```go
Tail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#tail DataDockerLogs#tail}.

---

##### `Timestamps`<sup>Optional</sup> <a name="Timestamps" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.timestamps"></a>

```go
Timestamps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#timestamps DataDockerLogs#timestamps}.

---

##### `Until`<sup>Optional</sup> <a name="Until" id="@cdktf/provider-docker.dataDockerLogs.DataDockerLogsConfig.property.until"></a>

```go
Until *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/data-sources/logs#until DataDockerLogs#until}.

---



