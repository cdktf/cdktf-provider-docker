# `docker_network`

Refer to the Terraform Registory for docs: [`docker_network`](https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network).

# `network` Submodule <a name="`network` Submodule" id="@cdktf/provider-docker.network"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Network <a name="Network" id="@cdktf/provider-docker.network.Network"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network docker_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.network.Network.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v8/network"

network.NewNetwork(scope Construct, id *string, config NetworkConfig) Network
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.network.Network.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.network.NetworkConfig">NetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.network.Network.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.network.Network.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-docker.network.Network.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.network.NetworkConfig">NetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.Network.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.network.Network.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.network.Network.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.network.Network.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.network.Network.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.putIpamConfig">PutIpamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetAttachable">ResetAttachable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetCheckDuplicate">ResetCheckDuplicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetDriver">ResetDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetIngress">ResetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetInternal">ResetInternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetIpamConfig">ResetIpamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetIpamDriver">ResetIpamDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetIpamOptions">ResetIpamOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetIpv6">ResetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.resetOptions">ResetOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.network.Network.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-docker.network.Network.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.network.Network.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.network.Network.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-docker.network.Network.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.network.Network.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-docker.network.Network.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-docker.network.Network.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-docker.network.Network.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.network.Network.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.network.Network.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.network.Network.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.network.Network.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.network.Network.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.network.Network.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.network.Network.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.network.Network.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.network.Network.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.network.Network.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.Network.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutIpamConfig` <a name="PutIpamConfig" id="@cdktf/provider-docker.network.Network.putIpamConfig"></a>

```go
func PutIpamConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.network.Network.putIpamConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-docker.network.Network.putLabels"></a>

```go
func PutLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.network.Network.putLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttachable` <a name="ResetAttachable" id="@cdktf/provider-docker.network.Network.resetAttachable"></a>

```go
func ResetAttachable()
```

##### `ResetCheckDuplicate` <a name="ResetCheckDuplicate" id="@cdktf/provider-docker.network.Network.resetCheckDuplicate"></a>

```go
func ResetCheckDuplicate()
```

##### `ResetDriver` <a name="ResetDriver" id="@cdktf/provider-docker.network.Network.resetDriver"></a>

```go
func ResetDriver()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-docker.network.Network.resetId"></a>

```go
func ResetId()
```

##### `ResetIngress` <a name="ResetIngress" id="@cdktf/provider-docker.network.Network.resetIngress"></a>

```go
func ResetIngress()
```

##### `ResetInternal` <a name="ResetInternal" id="@cdktf/provider-docker.network.Network.resetInternal"></a>

```go
func ResetInternal()
```

##### `ResetIpamConfig` <a name="ResetIpamConfig" id="@cdktf/provider-docker.network.Network.resetIpamConfig"></a>

```go
func ResetIpamConfig()
```

##### `ResetIpamDriver` <a name="ResetIpamDriver" id="@cdktf/provider-docker.network.Network.resetIpamDriver"></a>

```go
func ResetIpamDriver()
```

##### `ResetIpamOptions` <a name="ResetIpamOptions" id="@cdktf/provider-docker.network.Network.resetIpamOptions"></a>

```go
func ResetIpamOptions()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-docker.network.Network.resetIpv6"></a>

```go
func ResetIpv6()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-docker.network.Network.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-docker.network.Network.resetOptions"></a>

```go
func ResetOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.Network.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.network.Network.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-docker.network.Network.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v8/network"

network.Network_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-docker.network.Network.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v8/network"

network.Network_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.network.Network.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-docker.network.Network.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v8/network"

network.Network_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.network.Network.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.Network.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.network.Network.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamConfig">IpamConfig</a></code> | <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList">NetworkIpamConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList">NetworkLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.attachableInput">AttachableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.checkDuplicateInput">CheckDuplicateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.driverInput">DriverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ingressInput">IngressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.internalInput">InternalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamConfigInput">IpamConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamDriverInput">IpamDriverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamOptionsInput">IpamOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipv6Input">Ipv6Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.labelsInput">LabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.optionsInput">OptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.attachable">Attachable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.checkDuplicate">CheckDuplicate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.driver">Driver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ingress">Ingress</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.internal">Internal</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamDriver">IpamDriver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipamOptions">IpamOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.ipv6">Ipv6</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.Network.property.options">Options</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-docker.network.Network.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-docker.network.Network.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.network.Network.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-docker.network.Network.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-docker.network.Network.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-docker.network.Network.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-docker.network.Network.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.network.Network.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.network.Network.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.network.Network.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.network.Network.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.network.Network.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.network.Network.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.network.Network.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpamConfig`<sup>Required</sup> <a name="IpamConfig" id="@cdktf/provider-docker.network.Network.property.ipamConfig"></a>

```go
func IpamConfig() NetworkIpamConfigList
```

- *Type:* <a href="#@cdktf/provider-docker.network.NetworkIpamConfigList">NetworkIpamConfigList</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-docker.network.Network.property.labels"></a>

```go
func Labels() NetworkLabelsList
```

- *Type:* <a href="#@cdktf/provider-docker.network.NetworkLabelsList">NetworkLabelsList</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-docker.network.Network.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `AttachableInput`<sup>Optional</sup> <a name="AttachableInput" id="@cdktf/provider-docker.network.Network.property.attachableInput"></a>

```go
func AttachableInput() interface{}
```

- *Type:* interface{}

---

##### `CheckDuplicateInput`<sup>Optional</sup> <a name="CheckDuplicateInput" id="@cdktf/provider-docker.network.Network.property.checkDuplicateInput"></a>

```go
func CheckDuplicateInput() interface{}
```

- *Type:* interface{}

---

##### `DriverInput`<sup>Optional</sup> <a name="DriverInput" id="@cdktf/provider-docker.network.Network.property.driverInput"></a>

```go
func DriverInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-docker.network.Network.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngressInput`<sup>Optional</sup> <a name="IngressInput" id="@cdktf/provider-docker.network.Network.property.ingressInput"></a>

```go
func IngressInput() interface{}
```

- *Type:* interface{}

---

##### `InternalInput`<sup>Optional</sup> <a name="InternalInput" id="@cdktf/provider-docker.network.Network.property.internalInput"></a>

```go
func InternalInput() interface{}
```

- *Type:* interface{}

---

##### `IpamConfigInput`<sup>Optional</sup> <a name="IpamConfigInput" id="@cdktf/provider-docker.network.Network.property.ipamConfigInput"></a>

```go
func IpamConfigInput() interface{}
```

- *Type:* interface{}

---

##### `IpamDriverInput`<sup>Optional</sup> <a name="IpamDriverInput" id="@cdktf/provider-docker.network.Network.property.ipamDriverInput"></a>

```go
func IpamDriverInput() *string
```

- *Type:* *string

---

##### `IpamOptionsInput`<sup>Optional</sup> <a name="IpamOptionsInput" id="@cdktf/provider-docker.network.Network.property.ipamOptionsInput"></a>

```go
func IpamOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-docker.network.Network.property.ipv6Input"></a>

```go
func Ipv6Input() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-docker.network.Network.property.labelsInput"></a>

```go
func LabelsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.network.Network.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-docker.network.Network.property.optionsInput"></a>

```go
func OptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Attachable`<sup>Required</sup> <a name="Attachable" id="@cdktf/provider-docker.network.Network.property.attachable"></a>

```go
func Attachable() interface{}
```

- *Type:* interface{}

---

##### `CheckDuplicate`<sup>Required</sup> <a name="CheckDuplicate" id="@cdktf/provider-docker.network.Network.property.checkDuplicate"></a>

```go
func CheckDuplicate() interface{}
```

- *Type:* interface{}

---

##### `Driver`<sup>Required</sup> <a name="Driver" id="@cdktf/provider-docker.network.Network.property.driver"></a>

```go
func Driver() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.network.Network.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-docker.network.Network.property.ingress"></a>

```go
func Ingress() interface{}
```

- *Type:* interface{}

---

##### `Internal`<sup>Required</sup> <a name="Internal" id="@cdktf/provider-docker.network.Network.property.internal"></a>

```go
func Internal() interface{}
```

- *Type:* interface{}

---

##### `IpamDriver`<sup>Required</sup> <a name="IpamDriver" id="@cdktf/provider-docker.network.Network.property.ipamDriver"></a>

```go
func IpamDriver() *string
```

- *Type:* *string

---

##### `IpamOptions`<sup>Required</sup> <a name="IpamOptions" id="@cdktf/provider-docker.network.Network.property.ipamOptions"></a>

```go
func IpamOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-docker.network.Network.property.ipv6"></a>

```go
func Ipv6() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.network.Network.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-docker.network.Network.property.options"></a>

```go
func Options() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.Network.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-docker.network.Network.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConfig <a name="NetworkConfig" id="@cdktf/provider-docker.network.NetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.network.NetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v8/network"

&network.NetworkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Attachable: interface{},
	CheckDuplicate: interface{},
	Driver: *string,
	Id: *string,
	Ingress: interface{},
	Internal: interface{},
	IpamConfig: interface{},
	IpamDriver: *string,
	IpamOptions: *map[string]*string,
	Ipv6: interface{},
	Labels: interface{},
	Options: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Docker network. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.attachable">Attachable</a></code> | <code>interface{}</code> | Enable manual container attachment to the network. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.checkDuplicate">CheckDuplicate</a></code> | <code>interface{}</code> | Requests daemon to check for networks with same name. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.driver">Driver</a></code> | <code>*string</code> | The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#id Network#id}. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.ingress">Ingress</a></code> | <code>interface{}</code> | Create swarm routing-mesh network. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.internal">Internal</a></code> | <code>interface{}</code> | Whether the network is internal. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.ipamConfig">IpamConfig</a></code> | <code>interface{}</code> | ipam_config block. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.ipamDriver">IpamDriver</a></code> | <code>*string</code> | Driver used by the custom IP scheme of the network. Defaults to `default`. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.ipamOptions">IpamOptions</a></code> | <code>*map[string]*string</code> | Provide explicit options to the IPAM driver. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.ipv6">Ipv6</a></code> | <code>interface{}</code> | Enable IPv6 networking. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.labels">Labels</a></code> | <code>interface{}</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.network.NetworkConfig.property.options">Options</a></code> | <code>*map[string]*string</code> | Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.network.NetworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.network.NetworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.network.NetworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.network.NetworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.network.NetworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.network.NetworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.network.NetworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.network.NetworkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Docker network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#name Network#name}

---

##### `Attachable`<sup>Optional</sup> <a name="Attachable" id="@cdktf/provider-docker.network.NetworkConfig.property.attachable"></a>

```go
Attachable interface{}
```

- *Type:* interface{}

Enable manual container attachment to the network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#attachable Network#attachable}

---

##### `CheckDuplicate`<sup>Optional</sup> <a name="CheckDuplicate" id="@cdktf/provider-docker.network.NetworkConfig.property.checkDuplicate"></a>

```go
CheckDuplicate interface{}
```

- *Type:* interface{}

Requests daemon to check for networks with same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#check_duplicate Network#check_duplicate}

---

##### `Driver`<sup>Optional</sup> <a name="Driver" id="@cdktf/provider-docker.network.NetworkConfig.property.driver"></a>

```go
Driver *string
```

- *Type:* *string

The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#driver Network#driver}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-docker.network.NetworkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#id Network#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ingress`<sup>Optional</sup> <a name="Ingress" id="@cdktf/provider-docker.network.NetworkConfig.property.ingress"></a>

```go
Ingress interface{}
```

- *Type:* interface{}

Create swarm routing-mesh network. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#ingress Network#ingress}

---

##### `Internal`<sup>Optional</sup> <a name="Internal" id="@cdktf/provider-docker.network.NetworkConfig.property.internal"></a>

```go
Internal interface{}
```

- *Type:* interface{}

Whether the network is internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#internal Network#internal}

---

##### `IpamConfig`<sup>Optional</sup> <a name="IpamConfig" id="@cdktf/provider-docker.network.NetworkConfig.property.ipamConfig"></a>

```go
IpamConfig interface{}
```

- *Type:* interface{}

ipam_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#ipam_config Network#ipam_config}

---

##### `IpamDriver`<sup>Optional</sup> <a name="IpamDriver" id="@cdktf/provider-docker.network.NetworkConfig.property.ipamDriver"></a>

```go
IpamDriver *string
```

- *Type:* *string

Driver used by the custom IP scheme of the network. Defaults to `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#ipam_driver Network#ipam_driver}

---

##### `IpamOptions`<sup>Optional</sup> <a name="IpamOptions" id="@cdktf/provider-docker.network.NetworkConfig.property.ipamOptions"></a>

```go
IpamOptions *map[string]*string
```

- *Type:* *map[string]*string

Provide explicit options to the IPAM driver.

Valid options vary with `ipam_driver` and refer to that driver's documentation for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#ipam_options Network#ipam_options}

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-docker.network.NetworkConfig.property.ipv6"></a>

```go
Ipv6 interface{}
```

- *Type:* interface{}

Enable IPv6 networking. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#ipv6 Network#ipv6}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-docker.network.NetworkConfig.property.labels"></a>

```go
Labels interface{}
```

- *Type:* interface{}

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#labels Network#labels}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-docker.network.NetworkConfig.property.options"></a>

```go
Options *map[string]*string
```

- *Type:* *map[string]*string

Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#options Network#options}

---

### NetworkIpamConfig <a name="NetworkIpamConfig" id="@cdktf/provider-docker.network.NetworkIpamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.network.NetworkIpamConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v8/network"

&network.NetworkIpamConfig {
	AuxAddress: *map[string]*string,
	Gateway: *string,
	IpRange: *string,
	Subnet: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfig.property.auxAddress">AuxAddress</a></code> | <code>*map[string]*string</code> | Auxiliary IPv4 or IPv6 addresses used by Network driver. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfig.property.gateway">Gateway</a></code> | <code>*string</code> | The IP address of the gateway. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfig.property.ipRange">IpRange</a></code> | <code>*string</code> | The ip range in CIDR form. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfig.property.subnet">Subnet</a></code> | <code>*string</code> | The subnet in CIDR form. |

---

##### `AuxAddress`<sup>Optional</sup> <a name="AuxAddress" id="@cdktf/provider-docker.network.NetworkIpamConfig.property.auxAddress"></a>

```go
AuxAddress *map[string]*string
```

- *Type:* *map[string]*string

Auxiliary IPv4 or IPv6 addresses used by Network driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#aux_address Network#aux_address}

---

##### `Gateway`<sup>Optional</sup> <a name="Gateway" id="@cdktf/provider-docker.network.NetworkIpamConfig.property.gateway"></a>

```go
Gateway *string
```

- *Type:* *string

The IP address of the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#gateway Network#gateway}

---

##### `IpRange`<sup>Optional</sup> <a name="IpRange" id="@cdktf/provider-docker.network.NetworkIpamConfig.property.ipRange"></a>

```go
IpRange *string
```

- *Type:* *string

The ip range in CIDR form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#ip_range Network#ip_range}

---

##### `Subnet`<sup>Optional</sup> <a name="Subnet" id="@cdktf/provider-docker.network.NetworkIpamConfig.property.subnet"></a>

```go
Subnet *string
```

- *Type:* *string

The subnet in CIDR form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#subnet Network#subnet}

---

### NetworkLabels <a name="NetworkLabels" id="@cdktf/provider-docker.network.NetworkLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.network.NetworkLabels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v8/network"

&network.NetworkLabels {
	Label: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabels.property.label">Label</a></code> | <code>*string</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabels.property.value">Value</a></code> | <code>*string</code> | Value of the label. |

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-docker.network.NetworkLabels.property.label"></a>

```go
Label *string
```

- *Type:* *string

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#label Network#label}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.network.NetworkLabels.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/network#value Network#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkIpamConfigList <a name="NetworkIpamConfigList" id="@cdktf/provider-docker.network.NetworkIpamConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v8/network"

network.NewNetworkIpamConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkIpamConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.network.NetworkIpamConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.network.NetworkIpamConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.network.NetworkIpamConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.network.NetworkIpamConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.network.NetworkIpamConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.network.NetworkIpamConfigList.get"></a>

```go
func Get(index *f64) NetworkIpamConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.network.NetworkIpamConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.network.NetworkIpamConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.network.NetworkIpamConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.network.NetworkIpamConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkIpamConfigOutputReference <a name="NetworkIpamConfigOutputReference" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v8/network"

network.NewNetworkIpamConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkIpamConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetAuxAddress">ResetAuxAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetGateway">ResetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetIpRange">ResetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetSubnet">ResetSubnet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuxAddress` <a name="ResetAuxAddress" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetAuxAddress"></a>

```go
func ResetAuxAddress()
```

##### `ResetGateway` <a name="ResetGateway" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetGateway"></a>

```go
func ResetGateway()
```

##### `ResetIpRange` <a name="ResetIpRange" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetIpRange"></a>

```go
func ResetIpRange()
```

##### `ResetSubnet` <a name="ResetSubnet" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.resetSubnet"></a>

```go
func ResetSubnet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.auxAddressInput">AuxAddressInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.gatewayInput">GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.ipRangeInput">IpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.subnetInput">SubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.auxAddress">AuxAddress</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.ipRange">IpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.subnet">Subnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuxAddressInput`<sup>Optional</sup> <a name="AuxAddressInput" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.auxAddressInput"></a>

```go
func AuxAddressInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.gatewayInput"></a>

```go
func GatewayInput() *string
```

- *Type:* *string

---

##### `IpRangeInput`<sup>Optional</sup> <a name="IpRangeInput" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.ipRangeInput"></a>

```go
func IpRangeInput() *string
```

- *Type:* *string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.subnetInput"></a>

```go
func SubnetInput() *string
```

- *Type:* *string

---

##### `AuxAddress`<sup>Required</sup> <a name="AuxAddress" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.auxAddress"></a>

```go
func AuxAddress() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.ipRange"></a>

```go
func IpRange() *string
```

- *Type:* *string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.subnet"></a>

```go
func Subnet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.network.NetworkIpamConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkLabelsList <a name="NetworkLabelsList" id="@cdktf/provider-docker.network.NetworkLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.network.NetworkLabelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v8/network"

network.NewNetworkLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.network.NetworkLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.network.NetworkLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.network.NetworkLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.network.NetworkLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.network.NetworkLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.network.NetworkLabelsList.get"></a>

```go
func Get(index *f64) NetworkLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.network.NetworkLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.network.NetworkLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.network.NetworkLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.network.NetworkLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkLabelsOutputReference <a name="NetworkLabelsOutputReference" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v8/network"

network.NewNetworkLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.network.NetworkLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



