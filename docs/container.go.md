# `docker_container`

Refer to the Terraform Registory for docs: [`docker_container`](https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container).

# `container` Submodule <a name="`container` Submodule" id="@cdktf/provider-docker.container"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Container <a name="Container" id="@cdktf/provider-docker.container.Container"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container docker_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.Container.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainer(scope Construct, id *string, config ContainerConfig) Container
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerConfig">ContainerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.container.Container.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.container.Container.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-docker.container.Container.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerConfig">ContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.container.Container.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.container.Container.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.container.Container.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.container.Container.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putCapabilities">PutCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putDevices">PutDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putHealthcheck">PutHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putHost">PutHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putMounts">PutMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putNetworksAdvanced">PutNetworksAdvanced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putUlimit">PutUlimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putUpload">PutUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetAttach">ResetAttach</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCgroupnsMode">ResetCgroupnsMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetContainerReadRefreshTimeoutMilliseconds">ResetContainerReadRefreshTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCpuSet">ResetCpuSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCpuShares">ResetCpuShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDestroyGraceSeconds">ResetDestroyGraceSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDevices">ResetDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDns">ResetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDnsOpts">ResetDnsOpts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDnsSearch">ResetDnsSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDomainname">ResetDomainname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetEntrypoint">ResetEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetGpus">ResetGpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetGroupAdd">ResetGroupAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetHealthcheck">ResetHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetInit">ResetInit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetIpcMode">ResetIpcMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetLogDriver">ResetLogDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetLogOpts">ResetLogOpts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetLogs">ResetLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMaxRetryCount">ResetMaxRetryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMemorySwap">ResetMemorySwap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMounts">ResetMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMustRun">ResetMustRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetNetworkMode">ResetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetNetworksAdvanced">ResetNetworksAdvanced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetPidMode">ResetPidMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetPrivileged">ResetPrivileged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetPublishAllPorts">ResetPublishAllPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetRemoveVolumes">ResetRemoveVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetRestart">ResetRestart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetRm">ResetRm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetSecurityOpts">ResetSecurityOpts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetShmSize">ResetShmSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStart">ResetStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStdinOpen">ResetStdinOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStopSignal">ResetStopSignal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStopTimeout">ResetStopTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStorageOpts">ResetStorageOpts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetSysctls">ResetSysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetTmpfs">ResetTmpfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetTty">ResetTty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetUlimit">ResetUlimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetUpload">ResetUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetUser">ResetUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetUsernsMode">ResetUsernsMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetVolumes">ResetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetWait">ResetWait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetWaitTimeout">ResetWaitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetWorkingDir">ResetWorkingDir</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.Container.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-docker.container.Container.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.container.Container.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-docker.container.Container.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.container.Container.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-docker.container.Container.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-docker.container.Container.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-docker.container.Container.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.Container.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.Container.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.Container.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.Container.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.Container.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.Container.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.Container.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.Container.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.Container.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.Container.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCapabilities` <a name="PutCapabilities" id="@cdktf/provider-docker.container.Container.putCapabilities"></a>

```go
func PutCapabilities(value ContainerCapabilities)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

---

##### `PutDevices` <a name="PutDevices" id="@cdktf/provider-docker.container.Container.putDevices"></a>

```go
func PutDevices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putDevices.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHealthcheck` <a name="PutHealthcheck" id="@cdktf/provider-docker.container.Container.putHealthcheck"></a>

```go
func PutHealthcheck(value ContainerHealthcheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putHealthcheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

---

##### `PutHost` <a name="PutHost" id="@cdktf/provider-docker.container.Container.putHost"></a>

```go
func PutHost(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putHost.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-docker.container.Container.putLabels"></a>

```go
func PutLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMounts` <a name="PutMounts" id="@cdktf/provider-docker.container.Container.putMounts"></a>

```go
func PutMounts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putMounts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworksAdvanced` <a name="PutNetworksAdvanced" id="@cdktf/provider-docker.container.Container.putNetworksAdvanced"></a>

```go
func PutNetworksAdvanced(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putNetworksAdvanced.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPorts` <a name="PutPorts" id="@cdktf/provider-docker.container.Container.putPorts"></a>

```go
func PutPorts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putPorts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUlimit` <a name="PutUlimit" id="@cdktf/provider-docker.container.Container.putUlimit"></a>

```go
func PutUlimit(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putUlimit.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUpload` <a name="PutUpload" id="@cdktf/provider-docker.container.Container.putUpload"></a>

```go
func PutUpload(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putUpload.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-docker.container.Container.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttach` <a name="ResetAttach" id="@cdktf/provider-docker.container.Container.resetAttach"></a>

```go
func ResetAttach()
```

##### `ResetCapabilities` <a name="ResetCapabilities" id="@cdktf/provider-docker.container.Container.resetCapabilities"></a>

```go
func ResetCapabilities()
```

##### `ResetCgroupnsMode` <a name="ResetCgroupnsMode" id="@cdktf/provider-docker.container.Container.resetCgroupnsMode"></a>

```go
func ResetCgroupnsMode()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-docker.container.Container.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetContainerReadRefreshTimeoutMilliseconds` <a name="ResetContainerReadRefreshTimeoutMilliseconds" id="@cdktf/provider-docker.container.Container.resetContainerReadRefreshTimeoutMilliseconds"></a>

```go
func ResetContainerReadRefreshTimeoutMilliseconds()
```

##### `ResetCpuSet` <a name="ResetCpuSet" id="@cdktf/provider-docker.container.Container.resetCpuSet"></a>

```go
func ResetCpuSet()
```

##### `ResetCpuShares` <a name="ResetCpuShares" id="@cdktf/provider-docker.container.Container.resetCpuShares"></a>

```go
func ResetCpuShares()
```

##### `ResetDestroyGraceSeconds` <a name="ResetDestroyGraceSeconds" id="@cdktf/provider-docker.container.Container.resetDestroyGraceSeconds"></a>

```go
func ResetDestroyGraceSeconds()
```

##### `ResetDevices` <a name="ResetDevices" id="@cdktf/provider-docker.container.Container.resetDevices"></a>

```go
func ResetDevices()
```

##### `ResetDns` <a name="ResetDns" id="@cdktf/provider-docker.container.Container.resetDns"></a>

```go
func ResetDns()
```

##### `ResetDnsOpts` <a name="ResetDnsOpts" id="@cdktf/provider-docker.container.Container.resetDnsOpts"></a>

```go
func ResetDnsOpts()
```

##### `ResetDnsSearch` <a name="ResetDnsSearch" id="@cdktf/provider-docker.container.Container.resetDnsSearch"></a>

```go
func ResetDnsSearch()
```

##### `ResetDomainname` <a name="ResetDomainname" id="@cdktf/provider-docker.container.Container.resetDomainname"></a>

```go
func ResetDomainname()
```

##### `ResetEntrypoint` <a name="ResetEntrypoint" id="@cdktf/provider-docker.container.Container.resetEntrypoint"></a>

```go
func ResetEntrypoint()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-docker.container.Container.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetGpus` <a name="ResetGpus" id="@cdktf/provider-docker.container.Container.resetGpus"></a>

```go
func ResetGpus()
```

##### `ResetGroupAdd` <a name="ResetGroupAdd" id="@cdktf/provider-docker.container.Container.resetGroupAdd"></a>

```go
func ResetGroupAdd()
```

##### `ResetHealthcheck` <a name="ResetHealthcheck" id="@cdktf/provider-docker.container.Container.resetHealthcheck"></a>

```go
func ResetHealthcheck()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-docker.container.Container.resetHost"></a>

```go
func ResetHost()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-docker.container.Container.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-docker.container.Container.resetId"></a>

```go
func ResetId()
```

##### `ResetInit` <a name="ResetInit" id="@cdktf/provider-docker.container.Container.resetInit"></a>

```go
func ResetInit()
```

##### `ResetIpcMode` <a name="ResetIpcMode" id="@cdktf/provider-docker.container.Container.resetIpcMode"></a>

```go
func ResetIpcMode()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-docker.container.Container.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLogDriver` <a name="ResetLogDriver" id="@cdktf/provider-docker.container.Container.resetLogDriver"></a>

```go
func ResetLogDriver()
```

##### `ResetLogOpts` <a name="ResetLogOpts" id="@cdktf/provider-docker.container.Container.resetLogOpts"></a>

```go
func ResetLogOpts()
```

##### `ResetLogs` <a name="ResetLogs" id="@cdktf/provider-docker.container.Container.resetLogs"></a>

```go
func ResetLogs()
```

##### `ResetMaxRetryCount` <a name="ResetMaxRetryCount" id="@cdktf/provider-docker.container.Container.resetMaxRetryCount"></a>

```go
func ResetMaxRetryCount()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-docker.container.Container.resetMemory"></a>

```go
func ResetMemory()
```

##### `ResetMemorySwap` <a name="ResetMemorySwap" id="@cdktf/provider-docker.container.Container.resetMemorySwap"></a>

```go
func ResetMemorySwap()
```

##### `ResetMounts` <a name="ResetMounts" id="@cdktf/provider-docker.container.Container.resetMounts"></a>

```go
func ResetMounts()
```

##### `ResetMustRun` <a name="ResetMustRun" id="@cdktf/provider-docker.container.Container.resetMustRun"></a>

```go
func ResetMustRun()
```

##### `ResetNetworkMode` <a name="ResetNetworkMode" id="@cdktf/provider-docker.container.Container.resetNetworkMode"></a>

```go
func ResetNetworkMode()
```

##### `ResetNetworksAdvanced` <a name="ResetNetworksAdvanced" id="@cdktf/provider-docker.container.Container.resetNetworksAdvanced"></a>

```go
func ResetNetworksAdvanced()
```

##### `ResetPidMode` <a name="ResetPidMode" id="@cdktf/provider-docker.container.Container.resetPidMode"></a>

```go
func ResetPidMode()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-docker.container.Container.resetPorts"></a>

```go
func ResetPorts()
```

##### `ResetPrivileged` <a name="ResetPrivileged" id="@cdktf/provider-docker.container.Container.resetPrivileged"></a>

```go
func ResetPrivileged()
```

##### `ResetPublishAllPorts` <a name="ResetPublishAllPorts" id="@cdktf/provider-docker.container.Container.resetPublishAllPorts"></a>

```go
func ResetPublishAllPorts()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-docker.container.Container.resetReadOnly"></a>

```go
func ResetReadOnly()
```

##### `ResetRemoveVolumes` <a name="ResetRemoveVolumes" id="@cdktf/provider-docker.container.Container.resetRemoveVolumes"></a>

```go
func ResetRemoveVolumes()
```

##### `ResetRestart` <a name="ResetRestart" id="@cdktf/provider-docker.container.Container.resetRestart"></a>

```go
func ResetRestart()
```

##### `ResetRm` <a name="ResetRm" id="@cdktf/provider-docker.container.Container.resetRm"></a>

```go
func ResetRm()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktf/provider-docker.container.Container.resetRuntime"></a>

```go
func ResetRuntime()
```

##### `ResetSecurityOpts` <a name="ResetSecurityOpts" id="@cdktf/provider-docker.container.Container.resetSecurityOpts"></a>

```go
func ResetSecurityOpts()
```

##### `ResetShmSize` <a name="ResetShmSize" id="@cdktf/provider-docker.container.Container.resetShmSize"></a>

```go
func ResetShmSize()
```

##### `ResetStart` <a name="ResetStart" id="@cdktf/provider-docker.container.Container.resetStart"></a>

```go
func ResetStart()
```

##### `ResetStdinOpen` <a name="ResetStdinOpen" id="@cdktf/provider-docker.container.Container.resetStdinOpen"></a>

```go
func ResetStdinOpen()
```

##### `ResetStopSignal` <a name="ResetStopSignal" id="@cdktf/provider-docker.container.Container.resetStopSignal"></a>

```go
func ResetStopSignal()
```

##### `ResetStopTimeout` <a name="ResetStopTimeout" id="@cdktf/provider-docker.container.Container.resetStopTimeout"></a>

```go
func ResetStopTimeout()
```

##### `ResetStorageOpts` <a name="ResetStorageOpts" id="@cdktf/provider-docker.container.Container.resetStorageOpts"></a>

```go
func ResetStorageOpts()
```

##### `ResetSysctls` <a name="ResetSysctls" id="@cdktf/provider-docker.container.Container.resetSysctls"></a>

```go
func ResetSysctls()
```

##### `ResetTmpfs` <a name="ResetTmpfs" id="@cdktf/provider-docker.container.Container.resetTmpfs"></a>

```go
func ResetTmpfs()
```

##### `ResetTty` <a name="ResetTty" id="@cdktf/provider-docker.container.Container.resetTty"></a>

```go
func ResetTty()
```

##### `ResetUlimit` <a name="ResetUlimit" id="@cdktf/provider-docker.container.Container.resetUlimit"></a>

```go
func ResetUlimit()
```

##### `ResetUpload` <a name="ResetUpload" id="@cdktf/provider-docker.container.Container.resetUpload"></a>

```go
func ResetUpload()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-docker.container.Container.resetUser"></a>

```go
func ResetUser()
```

##### `ResetUsernsMode` <a name="ResetUsernsMode" id="@cdktf/provider-docker.container.Container.resetUsernsMode"></a>

```go
func ResetUsernsMode()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-docker.container.Container.resetVolumes"></a>

```go
func ResetVolumes()
```

##### `ResetWait` <a name="ResetWait" id="@cdktf/provider-docker.container.Container.resetWait"></a>

```go
func ResetWait()
```

##### `ResetWaitTimeout` <a name="ResetWaitTimeout" id="@cdktf/provider-docker.container.Container.resetWaitTimeout"></a>

```go
func ResetWaitTimeout()
```

##### `ResetWorkingDir` <a name="ResetWorkingDir" id="@cdktf/provider-docker.container.Container.resetWorkingDir"></a>

```go
func ResetWorkingDir()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.container.Container.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-docker.container.Container.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.Container_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.container.Container.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-docker.container.Container.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.Container_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.container.Container.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-docker.container.Container.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.Container_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.container.Container.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.bridge">Bridge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference">ContainerCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.containerLogs">ContainerLogs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.devices">Devices</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList">ContainerDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.exitCode">ExitCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.healthcheck">Healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference">ContainerHealthcheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.host">Host</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHostList">ContainerHostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList">ContainerLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.mounts">Mounts</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsList">ContainerMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networkData">NetworkData</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList">ContainerNetworkDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networksAdvanced">NetworksAdvanced</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList">ContainerNetworksAdvancedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerPortsList">ContainerPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ulimit">Ulimit</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList">ContainerUlimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.upload">Upload</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerUploadList">ContainerUploadList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList">ContainerVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.attachInput">AttachInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.capabilitiesInput">CapabilitiesInput</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cgroupnsModeInput">CgroupnsModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.containerReadRefreshTimeoutMillisecondsInput">ContainerReadRefreshTimeoutMillisecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpuSetInput">CpuSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpuSharesInput">CpuSharesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.destroyGraceSecondsInput">DestroyGraceSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.devicesInput">DevicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsInput">DnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsOptsInput">DnsOptsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsSearchInput">DnsSearchInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.domainnameInput">DomainnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.entrypointInput">EntrypointInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.envInput">EnvInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.gpusInput">GpusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.groupAddInput">GroupAddInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.healthcheckInput">HealthcheckInput</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.hostInput">HostInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.initInput">InitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ipcModeInput">IpcModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.labelsInput">LabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logDriverInput">LogDriverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logOptsInput">LogOptsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logsInput">LogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.maxRetryCountInput">MaxRetryCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.memoryInput">MemoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.memorySwapInput">MemorySwapInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.mountsInput">MountsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.mustRunInput">MustRunInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networkModeInput">NetworkModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networksAdvancedInput">NetworksAdvancedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.pidModeInput">PidModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.portsInput">PortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.privilegedInput">PrivilegedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.publishAllPortsInput">PublishAllPortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.removeVolumesInput">RemoveVolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.restartInput">RestartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.rmInput">RmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.runtimeInput">RuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.securityOptsInput">SecurityOptsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.shmSizeInput">ShmSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.startInput">StartInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stdinOpenInput">StdinOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stopSignalInput">StopSignalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stopTimeoutInput">StopTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.storageOptsInput">StorageOptsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.sysctlsInput">SysctlsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.tmpfsInput">TmpfsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ttyInput">TtyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ulimitInput">UlimitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.uploadInput">UploadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.usernsModeInput">UsernsModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.waitInput">WaitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.waitTimeoutInput">WaitTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.workingDirInput">WorkingDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.attach">Attach</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cgroupnsMode">CgroupnsMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.containerReadRefreshTimeoutMilliseconds">ContainerReadRefreshTimeoutMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpuSet">CpuSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpuShares">CpuShares</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.destroyGraceSeconds">DestroyGraceSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dns">Dns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsOpts">DnsOpts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsSearch">DnsSearch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.domainname">Domainname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.entrypoint">Entrypoint</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.env">Env</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.gpus">Gpus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.groupAdd">GroupAdd</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.init">Init</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ipcMode">IpcMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logDriver">LogDriver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logOpts">LogOpts</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logs">Logs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.maxRetryCount">MaxRetryCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.memory">Memory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.memorySwap">MemorySwap</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.mustRun">MustRun</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networkMode">NetworkMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.pidMode">PidMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.privileged">Privileged</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.publishAllPorts">PublishAllPorts</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.removeVolumes">RemoveVolumes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.restart">Restart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.rm">Rm</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.securityOpts">SecurityOpts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.shmSize">ShmSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.start">Start</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stdinOpen">StdinOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stopSignal">StopSignal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stopTimeout">StopTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.storageOpts">StorageOpts</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.sysctls">Sysctls</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.tmpfs">Tmpfs</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.tty">Tty</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.usernsMode">UsernsMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.wait">Wait</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.waitTimeout">WaitTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.workingDir">WorkingDir</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-docker.container.Container.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-docker.container.Container.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.Container.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-docker.container.Container.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-docker.container.Container.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-docker.container.Container.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-docker.container.Container.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.container.Container.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.container.Container.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.container.Container.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.container.Container.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.container.Container.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.container.Container.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.container.Container.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bridge`<sup>Required</sup> <a name="Bridge" id="@cdktf/provider-docker.container.Container.property.bridge"></a>

```go
func Bridge() *string
```

- *Type:* *string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-docker.container.Container.property.capabilities"></a>

```go
func Capabilities() ContainerCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference">ContainerCapabilitiesOutputReference</a>

---

##### `ContainerLogs`<sup>Required</sup> <a name="ContainerLogs" id="@cdktf/provider-docker.container.Container.property.containerLogs"></a>

```go
func ContainerLogs() *string
```

- *Type:* *string

---

##### `Devices`<sup>Required</sup> <a name="Devices" id="@cdktf/provider-docker.container.Container.property.devices"></a>

```go
func Devices() ContainerDevicesList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerDevicesList">ContainerDevicesList</a>

---

##### `ExitCode`<sup>Required</sup> <a name="ExitCode" id="@cdktf/provider-docker.container.Container.property.exitCode"></a>

```go
func ExitCode() *f64
```

- *Type:* *f64

---

##### `Healthcheck`<sup>Required</sup> <a name="Healthcheck" id="@cdktf/provider-docker.container.Container.property.healthcheck"></a>

```go
func Healthcheck() ContainerHealthcheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference">ContainerHealthcheckOutputReference</a>

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-docker.container.Container.property.host"></a>

```go
func Host() ContainerHostList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHostList">ContainerHostList</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-docker.container.Container.property.labels"></a>

```go
func Labels() ContainerLabelsList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerLabelsList">ContainerLabelsList</a>

---

##### `Mounts`<sup>Required</sup> <a name="Mounts" id="@cdktf/provider-docker.container.Container.property.mounts"></a>

```go
func Mounts() ContainerMountsList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsList">ContainerMountsList</a>

---

##### `NetworkData`<sup>Required</sup> <a name="NetworkData" id="@cdktf/provider-docker.container.Container.property.networkData"></a>

```go
func NetworkData() ContainerNetworkDataList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerNetworkDataList">ContainerNetworkDataList</a>

---

##### `NetworksAdvanced`<sup>Required</sup> <a name="NetworksAdvanced" id="@cdktf/provider-docker.container.Container.property.networksAdvanced"></a>

```go
func NetworksAdvanced() ContainerNetworksAdvancedList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList">ContainerNetworksAdvancedList</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-docker.container.Container.property.ports"></a>

```go
func Ports() ContainerPortsList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerPortsList">ContainerPortsList</a>

---

##### `Ulimit`<sup>Required</sup> <a name="Ulimit" id="@cdktf/provider-docker.container.Container.property.ulimit"></a>

```go
func Ulimit() ContainerUlimitList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerUlimitList">ContainerUlimitList</a>

---

##### `Upload`<sup>Required</sup> <a name="Upload" id="@cdktf/provider-docker.container.Container.property.upload"></a>

```go
func Upload() ContainerUploadList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerUploadList">ContainerUploadList</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-docker.container.Container.property.volumes"></a>

```go
func Volumes() ContainerVolumesList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerVolumesList">ContainerVolumesList</a>

---

##### `AttachInput`<sup>Optional</sup> <a name="AttachInput" id="@cdktf/provider-docker.container.Container.property.attachInput"></a>

```go
func AttachInput() interface{}
```

- *Type:* interface{}

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktf/provider-docker.container.Container.property.capabilitiesInput"></a>

```go
func CapabilitiesInput() ContainerCapabilities
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

---

##### `CgroupnsModeInput`<sup>Optional</sup> <a name="CgroupnsModeInput" id="@cdktf/provider-docker.container.Container.property.cgroupnsModeInput"></a>

```go
func CgroupnsModeInput() *string
```

- *Type:* *string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-docker.container.Container.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerReadRefreshTimeoutMillisecondsInput`<sup>Optional</sup> <a name="ContainerReadRefreshTimeoutMillisecondsInput" id="@cdktf/provider-docker.container.Container.property.containerReadRefreshTimeoutMillisecondsInput"></a>

```go
func ContainerReadRefreshTimeoutMillisecondsInput() *f64
```

- *Type:* *f64

---

##### `CpuSetInput`<sup>Optional</sup> <a name="CpuSetInput" id="@cdktf/provider-docker.container.Container.property.cpuSetInput"></a>

```go
func CpuSetInput() *string
```

- *Type:* *string

---

##### `CpuSharesInput`<sup>Optional</sup> <a name="CpuSharesInput" id="@cdktf/provider-docker.container.Container.property.cpuSharesInput"></a>

```go
func CpuSharesInput() *f64
```

- *Type:* *f64

---

##### `DestroyGraceSecondsInput`<sup>Optional</sup> <a name="DestroyGraceSecondsInput" id="@cdktf/provider-docker.container.Container.property.destroyGraceSecondsInput"></a>

```go
func DestroyGraceSecondsInput() *f64
```

- *Type:* *f64

---

##### `DevicesInput`<sup>Optional</sup> <a name="DevicesInput" id="@cdktf/provider-docker.container.Container.property.devicesInput"></a>

```go
func DevicesInput() interface{}
```

- *Type:* interface{}

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-docker.container.Container.property.dnsInput"></a>

```go
func DnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsOptsInput`<sup>Optional</sup> <a name="DnsOptsInput" id="@cdktf/provider-docker.container.Container.property.dnsOptsInput"></a>

```go
func DnsOptsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsSearchInput`<sup>Optional</sup> <a name="DnsSearchInput" id="@cdktf/provider-docker.container.Container.property.dnsSearchInput"></a>

```go
func DnsSearchInput() *[]*string
```

- *Type:* *[]*string

---

##### `DomainnameInput`<sup>Optional</sup> <a name="DomainnameInput" id="@cdktf/provider-docker.container.Container.property.domainnameInput"></a>

```go
func DomainnameInput() *string
```

- *Type:* *string

---

##### `EntrypointInput`<sup>Optional</sup> <a name="EntrypointInput" id="@cdktf/provider-docker.container.Container.property.entrypointInput"></a>

```go
func EntrypointInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-docker.container.Container.property.envInput"></a>

```go
func EnvInput() *[]*string
```

- *Type:* *[]*string

---

##### `GpusInput`<sup>Optional</sup> <a name="GpusInput" id="@cdktf/provider-docker.container.Container.property.gpusInput"></a>

```go
func GpusInput() *string
```

- *Type:* *string

---

##### `GroupAddInput`<sup>Optional</sup> <a name="GroupAddInput" id="@cdktf/provider-docker.container.Container.property.groupAddInput"></a>

```go
func GroupAddInput() *[]*string
```

- *Type:* *[]*string

---

##### `HealthcheckInput`<sup>Optional</sup> <a name="HealthcheckInput" id="@cdktf/provider-docker.container.Container.property.healthcheckInput"></a>

```go
func HealthcheckInput() ContainerHealthcheck
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-docker.container.Container.property.hostInput"></a>

```go
func HostInput() interface{}
```

- *Type:* interface{}

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-docker.container.Container.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-docker.container.Container.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-docker.container.Container.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `InitInput`<sup>Optional</sup> <a name="InitInput" id="@cdktf/provider-docker.container.Container.property.initInput"></a>

```go
func InitInput() interface{}
```

- *Type:* interface{}

---

##### `IpcModeInput`<sup>Optional</sup> <a name="IpcModeInput" id="@cdktf/provider-docker.container.Container.property.ipcModeInput"></a>

```go
func IpcModeInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-docker.container.Container.property.labelsInput"></a>

```go
func LabelsInput() interface{}
```

- *Type:* interface{}

---

##### `LogDriverInput`<sup>Optional</sup> <a name="LogDriverInput" id="@cdktf/provider-docker.container.Container.property.logDriverInput"></a>

```go
func LogDriverInput() *string
```

- *Type:* *string

---

##### `LogOptsInput`<sup>Optional</sup> <a name="LogOptsInput" id="@cdktf/provider-docker.container.Container.property.logOptsInput"></a>

```go
func LogOptsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LogsInput`<sup>Optional</sup> <a name="LogsInput" id="@cdktf/provider-docker.container.Container.property.logsInput"></a>

```go
func LogsInput() interface{}
```

- *Type:* interface{}

---

##### `MaxRetryCountInput`<sup>Optional</sup> <a name="MaxRetryCountInput" id="@cdktf/provider-docker.container.Container.property.maxRetryCountInput"></a>

```go
func MaxRetryCountInput() *f64
```

- *Type:* *f64

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-docker.container.Container.property.memoryInput"></a>

```go
func MemoryInput() *f64
```

- *Type:* *f64

---

##### `MemorySwapInput`<sup>Optional</sup> <a name="MemorySwapInput" id="@cdktf/provider-docker.container.Container.property.memorySwapInput"></a>

```go
func MemorySwapInput() *f64
```

- *Type:* *f64

---

##### `MountsInput`<sup>Optional</sup> <a name="MountsInput" id="@cdktf/provider-docker.container.Container.property.mountsInput"></a>

```go
func MountsInput() interface{}
```

- *Type:* interface{}

---

##### `MustRunInput`<sup>Optional</sup> <a name="MustRunInput" id="@cdktf/provider-docker.container.Container.property.mustRunInput"></a>

```go
func MustRunInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.container.Container.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkModeInput`<sup>Optional</sup> <a name="NetworkModeInput" id="@cdktf/provider-docker.container.Container.property.networkModeInput"></a>

```go
func NetworkModeInput() *string
```

- *Type:* *string

---

##### `NetworksAdvancedInput`<sup>Optional</sup> <a name="NetworksAdvancedInput" id="@cdktf/provider-docker.container.Container.property.networksAdvancedInput"></a>

```go
func NetworksAdvancedInput() interface{}
```

- *Type:* interface{}

---

##### `PidModeInput`<sup>Optional</sup> <a name="PidModeInput" id="@cdktf/provider-docker.container.Container.property.pidModeInput"></a>

```go
func PidModeInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-docker.container.Container.property.portsInput"></a>

```go
func PortsInput() interface{}
```

- *Type:* interface{}

---

##### `PrivilegedInput`<sup>Optional</sup> <a name="PrivilegedInput" id="@cdktf/provider-docker.container.Container.property.privilegedInput"></a>

```go
func PrivilegedInput() interface{}
```

- *Type:* interface{}

---

##### `PublishAllPortsInput`<sup>Optional</sup> <a name="PublishAllPortsInput" id="@cdktf/provider-docker.container.Container.property.publishAllPortsInput"></a>

```go
func PublishAllPortsInput() interface{}
```

- *Type:* interface{}

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-docker.container.Container.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `RemoveVolumesInput`<sup>Optional</sup> <a name="RemoveVolumesInput" id="@cdktf/provider-docker.container.Container.property.removeVolumesInput"></a>

```go
func RemoveVolumesInput() interface{}
```

- *Type:* interface{}

---

##### `RestartInput`<sup>Optional</sup> <a name="RestartInput" id="@cdktf/provider-docker.container.Container.property.restartInput"></a>

```go
func RestartInput() *string
```

- *Type:* *string

---

##### `RmInput`<sup>Optional</sup> <a name="RmInput" id="@cdktf/provider-docker.container.Container.property.rmInput"></a>

```go
func RmInput() interface{}
```

- *Type:* interface{}

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-docker.container.Container.property.runtimeInput"></a>

```go
func RuntimeInput() *string
```

- *Type:* *string

---

##### `SecurityOptsInput`<sup>Optional</sup> <a name="SecurityOptsInput" id="@cdktf/provider-docker.container.Container.property.securityOptsInput"></a>

```go
func SecurityOptsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ShmSizeInput`<sup>Optional</sup> <a name="ShmSizeInput" id="@cdktf/provider-docker.container.Container.property.shmSizeInput"></a>

```go
func ShmSizeInput() *f64
```

- *Type:* *f64

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-docker.container.Container.property.startInput"></a>

```go
func StartInput() interface{}
```

- *Type:* interface{}

---

##### `StdinOpenInput`<sup>Optional</sup> <a name="StdinOpenInput" id="@cdktf/provider-docker.container.Container.property.stdinOpenInput"></a>

```go
func StdinOpenInput() interface{}
```

- *Type:* interface{}

---

##### `StopSignalInput`<sup>Optional</sup> <a name="StopSignalInput" id="@cdktf/provider-docker.container.Container.property.stopSignalInput"></a>

```go
func StopSignalInput() *string
```

- *Type:* *string

---

##### `StopTimeoutInput`<sup>Optional</sup> <a name="StopTimeoutInput" id="@cdktf/provider-docker.container.Container.property.stopTimeoutInput"></a>

```go
func StopTimeoutInput() *f64
```

- *Type:* *f64

---

##### `StorageOptsInput`<sup>Optional</sup> <a name="StorageOptsInput" id="@cdktf/provider-docker.container.Container.property.storageOptsInput"></a>

```go
func StorageOptsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SysctlsInput`<sup>Optional</sup> <a name="SysctlsInput" id="@cdktf/provider-docker.container.Container.property.sysctlsInput"></a>

```go
func SysctlsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TmpfsInput`<sup>Optional</sup> <a name="TmpfsInput" id="@cdktf/provider-docker.container.Container.property.tmpfsInput"></a>

```go
func TmpfsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TtyInput`<sup>Optional</sup> <a name="TtyInput" id="@cdktf/provider-docker.container.Container.property.ttyInput"></a>

```go
func TtyInput() interface{}
```

- *Type:* interface{}

---

##### `UlimitInput`<sup>Optional</sup> <a name="UlimitInput" id="@cdktf/provider-docker.container.Container.property.ulimitInput"></a>

```go
func UlimitInput() interface{}
```

- *Type:* interface{}

---

##### `UploadInput`<sup>Optional</sup> <a name="UploadInput" id="@cdktf/provider-docker.container.Container.property.uploadInput"></a>

```go
func UploadInput() interface{}
```

- *Type:* interface{}

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-docker.container.Container.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `UsernsModeInput`<sup>Optional</sup> <a name="UsernsModeInput" id="@cdktf/provider-docker.container.Container.property.usernsModeInput"></a>

```go
func UsernsModeInput() *string
```

- *Type:* *string

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-docker.container.Container.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `WaitInput`<sup>Optional</sup> <a name="WaitInput" id="@cdktf/provider-docker.container.Container.property.waitInput"></a>

```go
func WaitInput() interface{}
```

- *Type:* interface{}

---

##### `WaitTimeoutInput`<sup>Optional</sup> <a name="WaitTimeoutInput" id="@cdktf/provider-docker.container.Container.property.waitTimeoutInput"></a>

```go
func WaitTimeoutInput() *f64
```

- *Type:* *f64

---

##### `WorkingDirInput`<sup>Optional</sup> <a name="WorkingDirInput" id="@cdktf/provider-docker.container.Container.property.workingDirInput"></a>

```go
func WorkingDirInput() *string
```

- *Type:* *string

---

##### `Attach`<sup>Required</sup> <a name="Attach" id="@cdktf/provider-docker.container.Container.property.attach"></a>

```go
func Attach() interface{}
```

- *Type:* interface{}

---

##### `CgroupnsMode`<sup>Required</sup> <a name="CgroupnsMode" id="@cdktf/provider-docker.container.Container.property.cgroupnsMode"></a>

```go
func CgroupnsMode() *string
```

- *Type:* *string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-docker.container.Container.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerReadRefreshTimeoutMilliseconds`<sup>Required</sup> <a name="ContainerReadRefreshTimeoutMilliseconds" id="@cdktf/provider-docker.container.Container.property.containerReadRefreshTimeoutMilliseconds"></a>

```go
func ContainerReadRefreshTimeoutMilliseconds() *f64
```

- *Type:* *f64

---

##### `CpuSet`<sup>Required</sup> <a name="CpuSet" id="@cdktf/provider-docker.container.Container.property.cpuSet"></a>

```go
func CpuSet() *string
```

- *Type:* *string

---

##### `CpuShares`<sup>Required</sup> <a name="CpuShares" id="@cdktf/provider-docker.container.Container.property.cpuShares"></a>

```go
func CpuShares() *f64
```

- *Type:* *f64

---

##### `DestroyGraceSeconds`<sup>Required</sup> <a name="DestroyGraceSeconds" id="@cdktf/provider-docker.container.Container.property.destroyGraceSeconds"></a>

```go
func DestroyGraceSeconds() *f64
```

- *Type:* *f64

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-docker.container.Container.property.dns"></a>

```go
func Dns() *[]*string
```

- *Type:* *[]*string

---

##### `DnsOpts`<sup>Required</sup> <a name="DnsOpts" id="@cdktf/provider-docker.container.Container.property.dnsOpts"></a>

```go
func DnsOpts() *[]*string
```

- *Type:* *[]*string

---

##### `DnsSearch`<sup>Required</sup> <a name="DnsSearch" id="@cdktf/provider-docker.container.Container.property.dnsSearch"></a>

```go
func DnsSearch() *[]*string
```

- *Type:* *[]*string

---

##### `Domainname`<sup>Required</sup> <a name="Domainname" id="@cdktf/provider-docker.container.Container.property.domainname"></a>

```go
func Domainname() *string
```

- *Type:* *string

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktf/provider-docker.container.Container.property.entrypoint"></a>

```go
func Entrypoint() *[]*string
```

- *Type:* *[]*string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-docker.container.Container.property.env"></a>

```go
func Env() *[]*string
```

- *Type:* *[]*string

---

##### `Gpus`<sup>Required</sup> <a name="Gpus" id="@cdktf/provider-docker.container.Container.property.gpus"></a>

```go
func Gpus() *string
```

- *Type:* *string

---

##### `GroupAdd`<sup>Required</sup> <a name="GroupAdd" id="@cdktf/provider-docker.container.Container.property.groupAdd"></a>

```go
func GroupAdd() *[]*string
```

- *Type:* *[]*string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-docker.container.Container.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-docker.container.Container.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-docker.container.Container.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Init`<sup>Required</sup> <a name="Init" id="@cdktf/provider-docker.container.Container.property.init"></a>

```go
func Init() interface{}
```

- *Type:* interface{}

---

##### `IpcMode`<sup>Required</sup> <a name="IpcMode" id="@cdktf/provider-docker.container.Container.property.ipcMode"></a>

```go
func IpcMode() *string
```

- *Type:* *string

---

##### `LogDriver`<sup>Required</sup> <a name="LogDriver" id="@cdktf/provider-docker.container.Container.property.logDriver"></a>

```go
func LogDriver() *string
```

- *Type:* *string

---

##### `LogOpts`<sup>Required</sup> <a name="LogOpts" id="@cdktf/provider-docker.container.Container.property.logOpts"></a>

```go
func LogOpts() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Logs`<sup>Required</sup> <a name="Logs" id="@cdktf/provider-docker.container.Container.property.logs"></a>

```go
func Logs() interface{}
```

- *Type:* interface{}

---

##### `MaxRetryCount`<sup>Required</sup> <a name="MaxRetryCount" id="@cdktf/provider-docker.container.Container.property.maxRetryCount"></a>

```go
func MaxRetryCount() *f64
```

- *Type:* *f64

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-docker.container.Container.property.memory"></a>

```go
func Memory() *f64
```

- *Type:* *f64

---

##### `MemorySwap`<sup>Required</sup> <a name="MemorySwap" id="@cdktf/provider-docker.container.Container.property.memorySwap"></a>

```go
func MemorySwap() *f64
```

- *Type:* *f64

---

##### `MustRun`<sup>Required</sup> <a name="MustRun" id="@cdktf/provider-docker.container.Container.property.mustRun"></a>

```go
func MustRun() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.container.Container.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktf/provider-docker.container.Container.property.networkMode"></a>

```go
func NetworkMode() *string
```

- *Type:* *string

---

##### `PidMode`<sup>Required</sup> <a name="PidMode" id="@cdktf/provider-docker.container.Container.property.pidMode"></a>

```go
func PidMode() *string
```

- *Type:* *string

---

##### `Privileged`<sup>Required</sup> <a name="Privileged" id="@cdktf/provider-docker.container.Container.property.privileged"></a>

```go
func Privileged() interface{}
```

- *Type:* interface{}

---

##### `PublishAllPorts`<sup>Required</sup> <a name="PublishAllPorts" id="@cdktf/provider-docker.container.Container.property.publishAllPorts"></a>

```go
func PublishAllPorts() interface{}
```

- *Type:* interface{}

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-docker.container.Container.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `RemoveVolumes`<sup>Required</sup> <a name="RemoveVolumes" id="@cdktf/provider-docker.container.Container.property.removeVolumes"></a>

```go
func RemoveVolumes() interface{}
```

- *Type:* interface{}

---

##### `Restart`<sup>Required</sup> <a name="Restart" id="@cdktf/provider-docker.container.Container.property.restart"></a>

```go
func Restart() *string
```

- *Type:* *string

---

##### `Rm`<sup>Required</sup> <a name="Rm" id="@cdktf/provider-docker.container.Container.property.rm"></a>

```go
func Rm() interface{}
```

- *Type:* interface{}

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-docker.container.Container.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `SecurityOpts`<sup>Required</sup> <a name="SecurityOpts" id="@cdktf/provider-docker.container.Container.property.securityOpts"></a>

```go
func SecurityOpts() *[]*string
```

- *Type:* *[]*string

---

##### `ShmSize`<sup>Required</sup> <a name="ShmSize" id="@cdktf/provider-docker.container.Container.property.shmSize"></a>

```go
func ShmSize() *f64
```

- *Type:* *f64

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-docker.container.Container.property.start"></a>

```go
func Start() interface{}
```

- *Type:* interface{}

---

##### `StdinOpen`<sup>Required</sup> <a name="StdinOpen" id="@cdktf/provider-docker.container.Container.property.stdinOpen"></a>

```go
func StdinOpen() interface{}
```

- *Type:* interface{}

---

##### `StopSignal`<sup>Required</sup> <a name="StopSignal" id="@cdktf/provider-docker.container.Container.property.stopSignal"></a>

```go
func StopSignal() *string
```

- *Type:* *string

---

##### `StopTimeout`<sup>Required</sup> <a name="StopTimeout" id="@cdktf/provider-docker.container.Container.property.stopTimeout"></a>

```go
func StopTimeout() *f64
```

- *Type:* *f64

---

##### `StorageOpts`<sup>Required</sup> <a name="StorageOpts" id="@cdktf/provider-docker.container.Container.property.storageOpts"></a>

```go
func StorageOpts() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Sysctls`<sup>Required</sup> <a name="Sysctls" id="@cdktf/provider-docker.container.Container.property.sysctls"></a>

```go
func Sysctls() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tmpfs`<sup>Required</sup> <a name="Tmpfs" id="@cdktf/provider-docker.container.Container.property.tmpfs"></a>

```go
func Tmpfs() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tty`<sup>Required</sup> <a name="Tty" id="@cdktf/provider-docker.container.Container.property.tty"></a>

```go
func Tty() interface{}
```

- *Type:* interface{}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-docker.container.Container.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `UsernsMode`<sup>Required</sup> <a name="UsernsMode" id="@cdktf/provider-docker.container.Container.property.usernsMode"></a>

```go
func UsernsMode() *string
```

- *Type:* *string

---

##### `Wait`<sup>Required</sup> <a name="Wait" id="@cdktf/provider-docker.container.Container.property.wait"></a>

```go
func Wait() interface{}
```

- *Type:* interface{}

---

##### `WaitTimeout`<sup>Required</sup> <a name="WaitTimeout" id="@cdktf/provider-docker.container.Container.property.waitTimeout"></a>

```go
func WaitTimeout() *f64
```

- *Type:* *f64

---

##### `WorkingDir`<sup>Required</sup> <a name="WorkingDir" id="@cdktf/provider-docker.container.Container.property.workingDir"></a>

```go
func WorkingDir() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-docker.container.Container.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerCapabilities <a name="ContainerCapabilities" id="@cdktf/provider-docker.container.ContainerCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerCapabilities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerCapabilities {
	Add: *[]*string,
	Drop: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities.property.add">Add</a></code> | <code>*[]*string</code> | List of linux capabilities to add. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities.property.drop">Drop</a></code> | <code>*[]*string</code> | List of linux capabilities to drop. |

---

##### `Add`<sup>Optional</sup> <a name="Add" id="@cdktf/provider-docker.container.ContainerCapabilities.property.add"></a>

```go
Add *[]*string
```

- *Type:* *[]*string

List of linux capabilities to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#add Container#add}

---

##### `Drop`<sup>Optional</sup> <a name="Drop" id="@cdktf/provider-docker.container.ContainerCapabilities.property.drop"></a>

```go
Drop *[]*string
```

- *Type:* *[]*string

List of linux capabilities to drop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#drop Container#drop}

---

### ContainerConfig <a name="ContainerConfig" id="@cdktf/provider-docker.container.ContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Image: *string,
	Name: *string,
	Attach: interface{},
	Capabilities: github.com/cdktf/cdktf-provider-docker-go/docker/v10.container.ContainerCapabilities,
	CgroupnsMode: *string,
	Command: *[]*string,
	ContainerReadRefreshTimeoutMilliseconds: *f64,
	CpuSet: *string,
	CpuShares: *f64,
	DestroyGraceSeconds: *f64,
	Devices: interface{},
	Dns: *[]*string,
	DnsOpts: *[]*string,
	DnsSearch: *[]*string,
	Domainname: *string,
	Entrypoint: *[]*string,
	Env: *[]*string,
	Gpus: *string,
	GroupAdd: *[]*string,
	Healthcheck: github.com/cdktf/cdktf-provider-docker-go/docker/v10.container.ContainerHealthcheck,
	Host: interface{},
	Hostname: *string,
	Id: *string,
	Init: interface{},
	IpcMode: *string,
	Labels: interface{},
	LogDriver: *string,
	LogOpts: *map[string]*string,
	Logs: interface{},
	MaxRetryCount: *f64,
	Memory: *f64,
	MemorySwap: *f64,
	Mounts: interface{},
	MustRun: interface{},
	NetworkMode: *string,
	NetworksAdvanced: interface{},
	PidMode: *string,
	Ports: interface{},
	Privileged: interface{},
	PublishAllPorts: interface{},
	ReadOnly: interface{},
	RemoveVolumes: interface{},
	Restart: *string,
	Rm: interface{},
	Runtime: *string,
	SecurityOpts: *[]*string,
	ShmSize: *f64,
	Start: interface{},
	StdinOpen: interface{},
	StopSignal: *string,
	StopTimeout: *f64,
	StorageOpts: *map[string]*string,
	Sysctls: *map[string]*string,
	Tmpfs: *map[string]*string,
	Tty: interface{},
	Ulimit: interface{},
	Upload: interface{},
	User: *string,
	UsernsMode: *string,
	Volumes: interface{},
	Wait: interface{},
	WaitTimeout: *f64,
	WorkingDir: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.image">Image</a></code> | <code>*string</code> | The ID of the image to back this container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.name">Name</a></code> | <code>*string</code> | The name of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.attach">Attach</a></code> | <code>interface{}</code> | If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.capabilities">Capabilities</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a></code> | capabilities block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.cgroupnsMode">CgroupnsMode</a></code> | <code>*string</code> | Cgroup namespace mode to use for the container. Possible values are: `private`, `host`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.command">Command</a></code> | <code>*[]*string</code> | The command to use to start the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.containerReadRefreshTimeoutMilliseconds">ContainerReadRefreshTimeoutMilliseconds</a></code> | <code>*f64</code> | The total number of milliseconds to wait for the container to reach status 'running'. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.cpuSet">CpuSet</a></code> | <code>*string</code> | A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.cpuShares">CpuShares</a></code> | <code>*f64</code> | CPU shares (relative weight) for the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.destroyGraceSeconds">DestroyGraceSeconds</a></code> | <code>*f64</code> | If defined will attempt to stop the container before destroying. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.devices">Devices</a></code> | <code>interface{}</code> | devices block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.dns">Dns</a></code> | <code>*[]*string</code> | DNS servers to use. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.dnsOpts">DnsOpts</a></code> | <code>*[]*string</code> | DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.dnsSearch">DnsSearch</a></code> | <code>*[]*string</code> | DNS search domains that are used when bare unqualified hostnames are used inside of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.domainname">Domainname</a></code> | <code>*string</code> | Domain name of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.entrypoint">Entrypoint</a></code> | <code>*[]*string</code> | The command to use as the Entrypoint for the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.env">Env</a></code> | <code>*[]*string</code> | Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.gpus">Gpus</a></code> | <code>*string</code> | GPU devices to add to the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.groupAdd">GroupAdd</a></code> | <code>*[]*string</code> | Additional groups for the container user. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.healthcheck">Healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.host">Host</a></code> | <code>interface{}</code> | host block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.hostname">Hostname</a></code> | <code>*string</code> | Hostname of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#id Container#id}. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.init">Init</a></code> | <code>interface{}</code> | Configured whether an init process should be injected for this container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.ipcMode">IpcMode</a></code> | <code>*string</code> | IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name\|id>` or `host`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.labels">Labels</a></code> | <code>interface{}</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.logDriver">LogDriver</a></code> | <code>*string</code> | The logging driver to use for the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.logOpts">LogOpts</a></code> | <code>*map[string]*string</code> | Key/value pairs to use as options for the logging driver. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.logs">Logs</a></code> | <code>interface{}</code> | Save the container logs (`attach` must be enabled). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.maxRetryCount">MaxRetryCount</a></code> | <code>*f64</code> | The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.memory">Memory</a></code> | <code>*f64</code> | The memory limit for the container in MBs. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.memorySwap">MemorySwap</a></code> | <code>*f64</code> | The total memory limit (memory + swap) for the container in MBs. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.mounts">Mounts</a></code> | <code>interface{}</code> | mounts block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.mustRun">MustRun</a></code> | <code>interface{}</code> | If `true`, then the Docker container will be kept running. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.networkMode">NetworkMode</a></code> | <code>*string</code> | Network mode of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.networksAdvanced">NetworksAdvanced</a></code> | <code>interface{}</code> | networks_advanced block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.pidMode">PidMode</a></code> | <code>*string</code> | he PID (Process) Namespace mode for the container. Either `container:<name\|id>` or `host`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.ports">Ports</a></code> | <code>interface{}</code> | ports block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.privileged">Privileged</a></code> | <code>interface{}</code> | If `true`, the container runs in privileged mode. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.publishAllPorts">PublishAllPorts</a></code> | <code>interface{}</code> | Publish all ports of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | If `true`, the container will be started as readonly. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.removeVolumes">RemoveVolumes</a></code> | <code>interface{}</code> | If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.restart">Restart</a></code> | <code>*string</code> | The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.rm">Rm</a></code> | <code>interface{}</code> | If `true`, then the container will be automatically removed when it exits. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.runtime">Runtime</a></code> | <code>*string</code> | Runtime to use for the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.securityOpts">SecurityOpts</a></code> | <code>*[]*string</code> | List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.shmSize">ShmSize</a></code> | <code>*f64</code> | Size of `/dev/shm` in MBs. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.start">Start</a></code> | <code>interface{}</code> | If `true`, then the Docker container will be started after creation. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.stdinOpen">StdinOpen</a></code> | <code>interface{}</code> | If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.stopSignal">StopSignal</a></code> | <code>*string</code> | Signal to stop a container (default `SIGTERM`). |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.stopTimeout">StopTimeout</a></code> | <code>*f64</code> | Timeout (in seconds) to stop a container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.storageOpts">StorageOpts</a></code> | <code>*map[string]*string</code> | Key/value pairs for the storage driver options, e.g. `size`: `120G`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.sysctls">Sysctls</a></code> | <code>*map[string]*string</code> | A map of kernel parameters (sysctls) to set in the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.tmpfs">Tmpfs</a></code> | <code>*map[string]*string</code> | A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.tty">Tty</a></code> | <code>interface{}</code> | If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.ulimit">Ulimit</a></code> | <code>interface{}</code> | ulimit block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.upload">Upload</a></code> | <code>interface{}</code> | upload block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.user">User</a></code> | <code>*string</code> | User used for run the first process. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.usernsMode">UsernsMode</a></code> | <code>*string</code> | Sets the usernamespace mode for the container when usernamespace remapping option is enabled. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.volumes">Volumes</a></code> | <code>interface{}</code> | volumes block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.wait">Wait</a></code> | <code>interface{}</code> | If `true`, then the Docker container is waited for being healthy state after creation. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.waitTimeout">WaitTimeout</a></code> | <code>*f64</code> | The timeout in seconds to wait the container to be healthy after creation. Defaults to `60`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.workingDir">WorkingDir</a></code> | <code>*string</code> | The working directory for commands to run in. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-docker.container.ContainerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-docker.container.ContainerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-docker.container.ContainerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-docker.container.ContainerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-docker.container.ContainerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-docker.container.ContainerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-docker.container.ContainerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-docker.container.ContainerConfig.property.image"></a>

```go
Image *string
```

- *Type:* *string

The ID of the image to back this container.

The easiest way to get this value is to use the `docker_image` resource as is shown in the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#image Container#image}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.container.ContainerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#name Container#name}

---

##### `Attach`<sup>Optional</sup> <a name="Attach" id="@cdktf/provider-docker.container.ContainerConfig.property.attach"></a>

```go
Attach interface{}
```

- *Type:* interface{}

If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#attach Container#attach}

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="@cdktf/provider-docker.container.ContainerConfig.property.capabilities"></a>

```go
Capabilities ContainerCapabilities
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#capabilities Container#capabilities}

---

##### `CgroupnsMode`<sup>Optional</sup> <a name="CgroupnsMode" id="@cdktf/provider-docker.container.ContainerConfig.property.cgroupnsMode"></a>

```go
CgroupnsMode *string
```

- *Type:* *string

Cgroup namespace mode to use for the container. Possible values are: `private`, `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#cgroupns_mode Container#cgroupns_mode}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-docker.container.ContainerConfig.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

The command to use to start the container.

For example, to run `/usr/bin/myprogram -f baz.conf` set the command to be `["/usr/bin/myprogram","-f","baz.con"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#command Container#command}

---

##### `ContainerReadRefreshTimeoutMilliseconds`<sup>Optional</sup> <a name="ContainerReadRefreshTimeoutMilliseconds" id="@cdktf/provider-docker.container.ContainerConfig.property.containerReadRefreshTimeoutMilliseconds"></a>

```go
ContainerReadRefreshTimeoutMilliseconds *f64
```

- *Type:* *f64

The total number of milliseconds to wait for the container to reach status 'running'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#container_read_refresh_timeout_milliseconds Container#container_read_refresh_timeout_milliseconds}

---

##### `CpuSet`<sup>Optional</sup> <a name="CpuSet" id="@cdktf/provider-docker.container.ContainerConfig.property.cpuSet"></a>

```go
CpuSet *string
```

- *Type:* *string

A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#cpu_set Container#cpu_set}

---

##### `CpuShares`<sup>Optional</sup> <a name="CpuShares" id="@cdktf/provider-docker.container.ContainerConfig.property.cpuShares"></a>

```go
CpuShares *f64
```

- *Type:* *f64

CPU shares (relative weight) for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#cpu_shares Container#cpu_shares}

---

##### `DestroyGraceSeconds`<sup>Optional</sup> <a name="DestroyGraceSeconds" id="@cdktf/provider-docker.container.ContainerConfig.property.destroyGraceSeconds"></a>

```go
DestroyGraceSeconds *f64
```

- *Type:* *f64

If defined will attempt to stop the container before destroying.

Container will be destroyed after `n` seconds or on successful stop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#destroy_grace_seconds Container#destroy_grace_seconds}

---

##### `Devices`<sup>Optional</sup> <a name="Devices" id="@cdktf/provider-docker.container.ContainerConfig.property.devices"></a>

```go
Devices interface{}
```

- *Type:* interface{}

devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#devices Container#devices}

---

##### `Dns`<sup>Optional</sup> <a name="Dns" id="@cdktf/provider-docker.container.ContainerConfig.property.dns"></a>

```go
Dns *[]*string
```

- *Type:* *[]*string

DNS servers to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#dns Container#dns}

---

##### `DnsOpts`<sup>Optional</sup> <a name="DnsOpts" id="@cdktf/provider-docker.container.ContainerConfig.property.dnsOpts"></a>

```go
DnsOpts *[]*string
```

- *Type:* *[]*string

DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#dns_opts Container#dns_opts}

---

##### `DnsSearch`<sup>Optional</sup> <a name="DnsSearch" id="@cdktf/provider-docker.container.ContainerConfig.property.dnsSearch"></a>

```go
DnsSearch *[]*string
```

- *Type:* *[]*string

DNS search domains that are used when bare unqualified hostnames are used inside of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#dns_search Container#dns_search}

---

##### `Domainname`<sup>Optional</sup> <a name="Domainname" id="@cdktf/provider-docker.container.ContainerConfig.property.domainname"></a>

```go
Domainname *string
```

- *Type:* *string

Domain name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#domainname Container#domainname}

---

##### `Entrypoint`<sup>Optional</sup> <a name="Entrypoint" id="@cdktf/provider-docker.container.ContainerConfig.property.entrypoint"></a>

```go
Entrypoint *[]*string
```

- *Type:* *[]*string

The command to use as the Entrypoint for the container.

The Entrypoint allows you to configure a container to run as an executable. For example, to run `/usr/bin/myprogram` when starting a container, set the entrypoint to be `"/usr/bin/myprogra"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#entrypoint Container#entrypoint}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-docker.container.ContainerConfig.property.env"></a>

```go
Env *[]*string
```

- *Type:* *[]*string

Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#env Container#env}

---

##### `Gpus`<sup>Optional</sup> <a name="Gpus" id="@cdktf/provider-docker.container.ContainerConfig.property.gpus"></a>

```go
Gpus *string
```

- *Type:* *string

GPU devices to add to the container.

Currently, only the value `all` is supported. Passing any other value will result in unexpected behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#gpus Container#gpus}

---

##### `GroupAdd`<sup>Optional</sup> <a name="GroupAdd" id="@cdktf/provider-docker.container.ContainerConfig.property.groupAdd"></a>

```go
GroupAdd *[]*string
```

- *Type:* *[]*string

Additional groups for the container user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#group_add Container#group_add}

---

##### `Healthcheck`<sup>Optional</sup> <a name="Healthcheck" id="@cdktf/provider-docker.container.ContainerConfig.property.healthcheck"></a>

```go
Healthcheck ContainerHealthcheck
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#healthcheck Container#healthcheck}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-docker.container.ContainerConfig.property.host"></a>

```go
Host interface{}
```

- *Type:* interface{}

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#host Container#host}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-docker.container.ContainerConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Hostname of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#hostname Container#hostname}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-docker.container.ContainerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#id Container#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Init`<sup>Optional</sup> <a name="Init" id="@cdktf/provider-docker.container.ContainerConfig.property.init"></a>

```go
Init interface{}
```

- *Type:* interface{}

Configured whether an init process should be injected for this container.

If unset this will default to the `dockerd` defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#init Container#init}

---

##### `IpcMode`<sup>Optional</sup> <a name="IpcMode" id="@cdktf/provider-docker.container.ContainerConfig.property.ipcMode"></a>

```go
IpcMode *string
```

- *Type:* *string

IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name|id>` or `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ipc_mode Container#ipc_mode}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-docker.container.ContainerConfig.property.labels"></a>

```go
Labels interface{}
```

- *Type:* interface{}

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#labels Container#labels}

---

##### `LogDriver`<sup>Optional</sup> <a name="LogDriver" id="@cdktf/provider-docker.container.ContainerConfig.property.logDriver"></a>

```go
LogDriver *string
```

- *Type:* *string

The logging driver to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#log_driver Container#log_driver}

---

##### `LogOpts`<sup>Optional</sup> <a name="LogOpts" id="@cdktf/provider-docker.container.ContainerConfig.property.logOpts"></a>

```go
LogOpts *map[string]*string
```

- *Type:* *map[string]*string

Key/value pairs to use as options for the logging driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#log_opts Container#log_opts}

---

##### `Logs`<sup>Optional</sup> <a name="Logs" id="@cdktf/provider-docker.container.ContainerConfig.property.logs"></a>

```go
Logs interface{}
```

- *Type:* interface{}

Save the container logs (`attach` must be enabled). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#logs Container#logs}

---

##### `MaxRetryCount`<sup>Optional</sup> <a name="MaxRetryCount" id="@cdktf/provider-docker.container.ContainerConfig.property.maxRetryCount"></a>

```go
MaxRetryCount *f64
```

- *Type:* *f64

The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#max_retry_count Container#max_retry_count}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-docker.container.ContainerConfig.property.memory"></a>

```go
Memory *f64
```

- *Type:* *f64

The memory limit for the container in MBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#memory Container#memory}

---

##### `MemorySwap`<sup>Optional</sup> <a name="MemorySwap" id="@cdktf/provider-docker.container.ContainerConfig.property.memorySwap"></a>

```go
MemorySwap *f64
```

- *Type:* *f64

The total memory limit (memory + swap) for the container in MBs.

This setting may compute to `-1` after `terraform apply` if the target host doesn't support memory swap, when that is the case docker will use a soft limitation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#memory_swap Container#memory_swap}

---

##### `Mounts`<sup>Optional</sup> <a name="Mounts" id="@cdktf/provider-docker.container.ContainerConfig.property.mounts"></a>

```go
Mounts interface{}
```

- *Type:* interface{}

mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#mounts Container#mounts}

---

##### `MustRun`<sup>Optional</sup> <a name="MustRun" id="@cdktf/provider-docker.container.ContainerConfig.property.mustRun"></a>

```go
MustRun interface{}
```

- *Type:* interface{}

If `true`, then the Docker container will be kept running.

If `false`, then as long as the container exists, Terraform assumes it is successful. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#must_run Container#must_run}

---

##### `NetworkMode`<sup>Optional</sup> <a name="NetworkMode" id="@cdktf/provider-docker.container.ContainerConfig.property.networkMode"></a>

```go
NetworkMode *string
```

- *Type:* *string

Network mode of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#network_mode Container#network_mode}

---

##### `NetworksAdvanced`<sup>Optional</sup> <a name="NetworksAdvanced" id="@cdktf/provider-docker.container.ContainerConfig.property.networksAdvanced"></a>

```go
NetworksAdvanced interface{}
```

- *Type:* interface{}

networks_advanced block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#networks_advanced Container#networks_advanced}

---

##### `PidMode`<sup>Optional</sup> <a name="PidMode" id="@cdktf/provider-docker.container.ContainerConfig.property.pidMode"></a>

```go
PidMode *string
```

- *Type:* *string

he PID (Process) Namespace mode for the container. Either `container:<name|id>` or `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#pid_mode Container#pid_mode}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-docker.container.ContainerConfig.property.ports"></a>

```go
Ports interface{}
```

- *Type:* interface{}

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ports Container#ports}

---

##### `Privileged`<sup>Optional</sup> <a name="Privileged" id="@cdktf/provider-docker.container.ContainerConfig.property.privileged"></a>

```go
Privileged interface{}
```

- *Type:* interface{}

If `true`, the container runs in privileged mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#privileged Container#privileged}

---

##### `PublishAllPorts`<sup>Optional</sup> <a name="PublishAllPorts" id="@cdktf/provider-docker.container.ContainerConfig.property.publishAllPorts"></a>

```go
PublishAllPorts interface{}
```

- *Type:* interface{}

Publish all ports of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#publish_all_ports Container#publish_all_ports}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-docker.container.ContainerConfig.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

If `true`, the container will be started as readonly. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#read_only Container#read_only}

---

##### `RemoveVolumes`<sup>Optional</sup> <a name="RemoveVolumes" id="@cdktf/provider-docker.container.ContainerConfig.property.removeVolumes"></a>

```go
RemoveVolumes interface{}
```

- *Type:* interface{}

If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#remove_volumes Container#remove_volumes}

---

##### `Restart`<sup>Optional</sup> <a name="Restart" id="@cdktf/provider-docker.container.ContainerConfig.property.restart"></a>

```go
Restart *string
```

- *Type:* *string

The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#restart Container#restart}

---

##### `Rm`<sup>Optional</sup> <a name="Rm" id="@cdktf/provider-docker.container.ContainerConfig.property.rm"></a>

```go
Rm interface{}
```

- *Type:* interface{}

If `true`, then the container will be automatically removed when it exits. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#rm Container#rm}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktf/provider-docker.container.ContainerConfig.property.runtime"></a>

```go
Runtime *string
```

- *Type:* *string

Runtime to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#runtime Container#runtime}

---

##### `SecurityOpts`<sup>Optional</sup> <a name="SecurityOpts" id="@cdktf/provider-docker.container.ContainerConfig.property.securityOpts"></a>

```go
SecurityOpts *[]*string
```

- *Type:* *[]*string

List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#security_opts Container#security_opts}

---

##### `ShmSize`<sup>Optional</sup> <a name="ShmSize" id="@cdktf/provider-docker.container.ContainerConfig.property.shmSize"></a>

```go
ShmSize *f64
```

- *Type:* *f64

Size of `/dev/shm` in MBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#shm_size Container#shm_size}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktf/provider-docker.container.ContainerConfig.property.start"></a>

```go
Start interface{}
```

- *Type:* interface{}

If `true`, then the Docker container will be started after creation.

If `false`, then the container is only created. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#start Container#start}

---

##### `StdinOpen`<sup>Optional</sup> <a name="StdinOpen" id="@cdktf/provider-docker.container.ContainerConfig.property.stdinOpen"></a>

```go
StdinOpen interface{}
```

- *Type:* interface{}

If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#stdin_open Container#stdin_open}

---

##### `StopSignal`<sup>Optional</sup> <a name="StopSignal" id="@cdktf/provider-docker.container.ContainerConfig.property.stopSignal"></a>

```go
StopSignal *string
```

- *Type:* *string

Signal to stop a container (default `SIGTERM`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#stop_signal Container#stop_signal}

---

##### `StopTimeout`<sup>Optional</sup> <a name="StopTimeout" id="@cdktf/provider-docker.container.ContainerConfig.property.stopTimeout"></a>

```go
StopTimeout *f64
```

- *Type:* *f64

Timeout (in seconds) to stop a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#stop_timeout Container#stop_timeout}

---

##### `StorageOpts`<sup>Optional</sup> <a name="StorageOpts" id="@cdktf/provider-docker.container.ContainerConfig.property.storageOpts"></a>

```go
StorageOpts *map[string]*string
```

- *Type:* *map[string]*string

Key/value pairs for the storage driver options, e.g. `size`: `120G`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#storage_opts Container#storage_opts}

---

##### `Sysctls`<sup>Optional</sup> <a name="Sysctls" id="@cdktf/provider-docker.container.ContainerConfig.property.sysctls"></a>

```go
Sysctls *map[string]*string
```

- *Type:* *map[string]*string

A map of kernel parameters (sysctls) to set in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#sysctls Container#sysctls}

---

##### `Tmpfs`<sup>Optional</sup> <a name="Tmpfs" id="@cdktf/provider-docker.container.ContainerConfig.property.tmpfs"></a>

```go
Tmpfs *map[string]*string
```

- *Type:* *map[string]*string

A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#tmpfs Container#tmpfs}

---

##### `Tty`<sup>Optional</sup> <a name="Tty" id="@cdktf/provider-docker.container.ContainerConfig.property.tty"></a>

```go
Tty interface{}
```

- *Type:* interface{}

If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#tty Container#tty}

---

##### `Ulimit`<sup>Optional</sup> <a name="Ulimit" id="@cdktf/provider-docker.container.ContainerConfig.property.ulimit"></a>

```go
Ulimit interface{}
```

- *Type:* interface{}

ulimit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ulimit Container#ulimit}

---

##### `Upload`<sup>Optional</sup> <a name="Upload" id="@cdktf/provider-docker.container.ContainerConfig.property.upload"></a>

```go
Upload interface{}
```

- *Type:* interface{}

upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#upload Container#upload}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-docker.container.ContainerConfig.property.user"></a>

```go
User *string
```

- *Type:* *string

User used for run the first process.

Format is `user` or `user:group` which user and group can be passed literraly or by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#user Container#user}

---

##### `UsernsMode`<sup>Optional</sup> <a name="UsernsMode" id="@cdktf/provider-docker.container.ContainerConfig.property.usernsMode"></a>

```go
UsernsMode *string
```

- *Type:* *string

Sets the usernamespace mode for the container when usernamespace remapping option is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#userns_mode Container#userns_mode}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-docker.container.ContainerConfig.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#volumes Container#volumes}

---

##### `Wait`<sup>Optional</sup> <a name="Wait" id="@cdktf/provider-docker.container.ContainerConfig.property.wait"></a>

```go
Wait interface{}
```

- *Type:* interface{}

If `true`, then the Docker container is waited for being healthy state after creation.

If `false`, then the container health state is not checked. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#wait Container#wait}

---

##### `WaitTimeout`<sup>Optional</sup> <a name="WaitTimeout" id="@cdktf/provider-docker.container.ContainerConfig.property.waitTimeout"></a>

```go
WaitTimeout *f64
```

- *Type:* *f64

The timeout in seconds to wait the container to be healthy after creation. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#wait_timeout Container#wait_timeout}

---

##### `WorkingDir`<sup>Optional</sup> <a name="WorkingDir" id="@cdktf/provider-docker.container.ContainerConfig.property.workingDir"></a>

```go
WorkingDir *string
```

- *Type:* *string

The working directory for commands to run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#working_dir Container#working_dir}

---

### ContainerDevices <a name="ContainerDevices" id="@cdktf/provider-docker.container.ContainerDevices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerDevices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerDevices {
	HostPath: *string,
	ContainerPath: *string,
	Permissions: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevices.property.hostPath">HostPath</a></code> | <code>*string</code> | The path on the host where the device is located. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevices.property.containerPath">ContainerPath</a></code> | <code>*string</code> | The path in the container where the device will be bound. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevices.property.permissions">Permissions</a></code> | <code>*string</code> | The cgroup permissions given to the container to access the device. Defaults to `rwm`. |

---

##### `HostPath`<sup>Required</sup> <a name="HostPath" id="@cdktf/provider-docker.container.ContainerDevices.property.hostPath"></a>

```go
HostPath *string
```

- *Type:* *string

The path on the host where the device is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#host_path Container#host_path}

---

##### `ContainerPath`<sup>Optional</sup> <a name="ContainerPath" id="@cdktf/provider-docker.container.ContainerDevices.property.containerPath"></a>

```go
ContainerPath *string
```

- *Type:* *string

The path in the container where the device will be bound.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#container_path Container#container_path}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-docker.container.ContainerDevices.property.permissions"></a>

```go
Permissions *string
```

- *Type:* *string

The cgroup permissions given to the container to access the device. Defaults to `rwm`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#permissions Container#permissions}

---

### ContainerHealthcheck <a name="ContainerHealthcheck" id="@cdktf/provider-docker.container.ContainerHealthcheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerHealthcheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerHealthcheck {
	Test: *[]*string,
	Interval: *string,
	Retries: *f64,
	StartPeriod: *string,
	Timeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.test">Test</a></code> | <code>*[]*string</code> | Command to run to check health. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.interval">Interval</a></code> | <code>*string</code> | Time between running the check (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.retries">Retries</a></code> | <code>*f64</code> | Consecutive failures needed to report unhealthy. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.startPeriod">StartPeriod</a></code> | <code>*string</code> | Start period for the container to initialize before counting retries towards unstable (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.timeout">Timeout</a></code> | <code>*string</code> | Maximum time to allow one check to run (ms\|s\|m\|h). Defaults to `0s`. |

---

##### `Test`<sup>Required</sup> <a name="Test" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.test"></a>

```go
Test *[]*string
```

- *Type:* *[]*string

Command to run to check health.

For example, to run `curl -f localhost/health` set the command to be `["CMD", "curl", "-f", "localhost/health"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#test Container#test}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.interval"></a>

```go
Interval *string
```

- *Type:* *string

Time between running the check (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#interval Container#interval}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

Consecutive failures needed to report unhealthy. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#retries Container#retries}

---

##### `StartPeriod`<sup>Optional</sup> <a name="StartPeriod" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.startPeriod"></a>

```go
StartPeriod *string
```

- *Type:* *string

Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#start_period Container#start_period}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#timeout Container#timeout}

---

### ContainerHost <a name="ContainerHost" id="@cdktf/provider-docker.container.ContainerHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerHost.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerHost {
	Host: *string,
	Ip: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHost.property.host">Host</a></code> | <code>*string</code> | Hostname to add. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHost.property.ip">Ip</a></code> | <code>*string</code> | IP address this hostname should resolve to. |

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-docker.container.ContainerHost.property.host"></a>

```go
Host *string
```

- *Type:* *string

Hostname to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#host Container#host}

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-docker.container.ContainerHost.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

IP address this hostname should resolve to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ip Container#ip}

---

### ContainerLabels <a name="ContainerLabels" id="@cdktf/provider-docker.container.ContainerLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerLabels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerLabels {
	Label: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabels.property.label">Label</a></code> | <code>*string</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabels.property.value">Value</a></code> | <code>*string</code> | Value of the label. |

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-docker.container.ContainerLabels.property.label"></a>

```go
Label *string
```

- *Type:* *string

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#label Container#label}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.container.ContainerLabels.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#value Container#value}

---

### ContainerMounts <a name="ContainerMounts" id="@cdktf/provider-docker.container.ContainerMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerMounts {
	Target: *string,
	Type: *string,
	BindOptions: github.com/cdktf/cdktf-provider-docker-go/docker/v10.container.ContainerMountsBindOptions,
	ReadOnly: interface{},
	Source: *string,
	TmpfsOptions: github.com/cdktf/cdktf-provider-docker-go/docker/v10.container.ContainerMountsTmpfsOptions,
	VolumeOptions: github.com/cdktf/cdktf-provider-docker-go/docker/v10.container.ContainerMountsVolumeOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.target">Target</a></code> | <code>*string</code> | Container path. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.type">Type</a></code> | <code>*string</code> | The mount type. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.bindOptions">BindOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a></code> | bind_options block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | Whether the mount should be read-only. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.source">Source</a></code> | <code>*string</code> | Mount source (e.g. a volume name, a host path). |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.tmpfsOptions">TmpfsOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a></code> | tmpfs_options block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.volumeOptions">VolumeOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a></code> | volume_options block. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-docker.container.ContainerMounts.property.target"></a>

```go
Target *string
```

- *Type:* *string

Container path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#target Container#target}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-docker.container.ContainerMounts.property.type"></a>

```go
Type *string
```

- *Type:* *string

The mount type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#type Container#type}

---

##### `BindOptions`<sup>Optional</sup> <a name="BindOptions" id="@cdktf/provider-docker.container.ContainerMounts.property.bindOptions"></a>

```go
BindOptions ContainerMountsBindOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a>

bind_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#bind_options Container#bind_options}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-docker.container.ContainerMounts.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

Whether the mount should be read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#read_only Container#read_only}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-docker.container.ContainerMounts.property.source"></a>

```go
Source *string
```

- *Type:* *string

Mount source (e.g. a volume name, a host path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#source Container#source}

---

##### `TmpfsOptions`<sup>Optional</sup> <a name="TmpfsOptions" id="@cdktf/provider-docker.container.ContainerMounts.property.tmpfsOptions"></a>

```go
TmpfsOptions ContainerMountsTmpfsOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a>

tmpfs_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#tmpfs_options Container#tmpfs_options}

---

##### `VolumeOptions`<sup>Optional</sup> <a name="VolumeOptions" id="@cdktf/provider-docker.container.ContainerMounts.property.volumeOptions"></a>

```go
VolumeOptions ContainerMountsVolumeOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a>

volume_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#volume_options Container#volume_options}

---

### ContainerMountsBindOptions <a name="ContainerMountsBindOptions" id="@cdktf/provider-docker.container.ContainerMountsBindOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMountsBindOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerMountsBindOptions {
	Propagation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions.property.propagation">Propagation</a></code> | <code>*string</code> | A propagation mode with the value. |

---

##### `Propagation`<sup>Optional</sup> <a name="Propagation" id="@cdktf/provider-docker.container.ContainerMountsBindOptions.property.propagation"></a>

```go
Propagation *string
```

- *Type:* *string

A propagation mode with the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#propagation Container#propagation}

---

### ContainerMountsTmpfsOptions <a name="ContainerMountsTmpfsOptions" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerMountsTmpfsOptions {
	Mode: *f64,
	SizeBytes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.property.mode">Mode</a></code> | <code>*f64</code> | The permission mode for the tmpfs mount in an integer. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.property.sizeBytes">SizeBytes</a></code> | <code>*f64</code> | The size for the tmpfs mount in bytes. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.property.mode"></a>

```go
Mode *f64
```

- *Type:* *f64

The permission mode for the tmpfs mount in an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#mode Container#mode}

---

##### `SizeBytes`<sup>Optional</sup> <a name="SizeBytes" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.property.sizeBytes"></a>

```go
SizeBytes *f64
```

- *Type:* *f64

The size for the tmpfs mount in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#size_bytes Container#size_bytes}

---

### ContainerMountsVolumeOptions <a name="ContainerMountsVolumeOptions" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerMountsVolumeOptions {
	DriverName: *string,
	DriverOptions: *map[string]*string,
	Labels: interface{},
	NoCopy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.driverName">DriverName</a></code> | <code>*string</code> | Name of the driver to use to create the volume. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.driverOptions">DriverOptions</a></code> | <code>*map[string]*string</code> | key/value map of driver specific options. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.labels">Labels</a></code> | <code>interface{}</code> | labels block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.noCopy">NoCopy</a></code> | <code>interface{}</code> | Populate volume with data from the target. |

---

##### `DriverName`<sup>Optional</sup> <a name="DriverName" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.driverName"></a>

```go
DriverName *string
```

- *Type:* *string

Name of the driver to use to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#driver_name Container#driver_name}

---

##### `DriverOptions`<sup>Optional</sup> <a name="DriverOptions" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.driverOptions"></a>

```go
DriverOptions *map[string]*string
```

- *Type:* *map[string]*string

key/value map of driver specific options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#driver_options Container#driver_options}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.labels"></a>

```go
Labels interface{}
```

- *Type:* interface{}

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#labels Container#labels}

---

##### `NoCopy`<sup>Optional</sup> <a name="NoCopy" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.noCopy"></a>

```go
NoCopy interface{}
```

- *Type:* interface{}

Populate volume with data from the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#no_copy Container#no_copy}

---

### ContainerMountsVolumeOptionsLabels <a name="ContainerMountsVolumeOptionsLabels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerMountsVolumeOptionsLabels {
	Label: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.property.label">Label</a></code> | <code>*string</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.property.value">Value</a></code> | <code>*string</code> | Value of the label. |

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.property.label"></a>

```go
Label *string
```

- *Type:* *string

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#label Container#label}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#value Container#value}

---

### ContainerNetworkData <a name="ContainerNetworkData" id="@cdktf/provider-docker.container.ContainerNetworkData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerNetworkData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerNetworkData {

}
```


### ContainerNetworksAdvanced <a name="ContainerNetworksAdvanced" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerNetworksAdvanced {
	Name: *string,
	Aliases: *[]*string,
	Ipv4Address: *string,
	Ipv6Address: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.name">Name</a></code> | <code>*string</code> | The name or id of the network to use. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.aliases">Aliases</a></code> | <code>*[]*string</code> | The network aliases of the container in the specific network. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | The IPV4 address of the container in the specific network. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | The IPV6 address of the container in the specific network. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name or id of the network to use.

You can use `name` or `id` attribute from a `docker_network` resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#name Container#name}

---

##### `Aliases`<sup>Optional</sup> <a name="Aliases" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.aliases"></a>

```go
Aliases *[]*string
```

- *Type:* *[]*string

The network aliases of the container in the specific network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#aliases Container#aliases}

---

##### `Ipv4Address`<sup>Optional</sup> <a name="Ipv4Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.ipv4Address"></a>

```go
Ipv4Address *string
```

- *Type:* *string

The IPV4 address of the container in the specific network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ipv4_address Container#ipv4_address}

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.ipv6Address"></a>

```go
Ipv6Address *string
```

- *Type:* *string

The IPV6 address of the container in the specific network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ipv6_address Container#ipv6_address}

---

### ContainerPorts <a name="ContainerPorts" id="@cdktf/provider-docker.container.ContainerPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerPorts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerPorts {
	Internal: *f64,
	External: *f64,
	Ip: *string,
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPorts.property.internal">Internal</a></code> | <code>*f64</code> | Port within the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPorts.property.external">External</a></code> | <code>*f64</code> | Port exposed out of the container. If not given a free random port `>= 32768` will be used. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPorts.property.ip">Ip</a></code> | <code>*string</code> | IP address/mask that can access this port. Defaults to `0.0.0.0`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPorts.property.protocol">Protocol</a></code> | <code>*string</code> | Protocol that can be used over this port. Defaults to `tcp`. |

---

##### `Internal`<sup>Required</sup> <a name="Internal" id="@cdktf/provider-docker.container.ContainerPorts.property.internal"></a>

```go
Internal *f64
```

- *Type:* *f64

Port within the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#internal Container#internal}

---

##### `External`<sup>Optional</sup> <a name="External" id="@cdktf/provider-docker.container.ContainerPorts.property.external"></a>

```go
External *f64
```

- *Type:* *f64

Port exposed out of the container. If not given a free random port `>= 32768` will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#external Container#external}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-docker.container.ContainerPorts.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

IP address/mask that can access this port. Defaults to `0.0.0.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ip Container#ip}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-docker.container.ContainerPorts.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Protocol that can be used over this port. Defaults to `tcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#protocol Container#protocol}

---

### ContainerUlimit <a name="ContainerUlimit" id="@cdktf/provider-docker.container.ContainerUlimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerUlimit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerUlimit {
	Hard: *f64,
	Name: *string,
	Soft: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimit.property.hard">Hard</a></code> | <code>*f64</code> | The hard limit. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimit.property.name">Name</a></code> | <code>*string</code> | The name of the ulimit. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimit.property.soft">Soft</a></code> | <code>*f64</code> | The soft limit. |

---

##### `Hard`<sup>Required</sup> <a name="Hard" id="@cdktf/provider-docker.container.ContainerUlimit.property.hard"></a>

```go
Hard *f64
```

- *Type:* *f64

The hard limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#hard Container#hard}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.container.ContainerUlimit.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the ulimit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#name Container#name}

---

##### `Soft`<sup>Required</sup> <a name="Soft" id="@cdktf/provider-docker.container.ContainerUlimit.property.soft"></a>

```go
Soft *f64
```

- *Type:* *f64

The soft limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#soft Container#soft}

---

### ContainerUpload <a name="ContainerUpload" id="@cdktf/provider-docker.container.ContainerUpload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerUpload.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerUpload {
	File: *string,
	Content: *string,
	ContentBase64: *string,
	Executable: interface{},
	Source: *string,
	SourceHash: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.file">File</a></code> | <code>*string</code> | Path to the file in the container where is upload goes to. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.content">Content</a></code> | <code>*string</code> | Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.contentBase64">ContentBase64</a></code> | <code>*string</code> | Base64-encoded data that will be decoded and uploaded as raw bytes for the object content. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.executable">Executable</a></code> | <code>interface{}</code> | If `true`, the file will be uploaded with user executable permission. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.source">Source</a></code> | <code>*string</code> | A filename that references a file which will be uploaded as the object content. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.sourceHash">SourceHash</a></code> | <code>*string</code> | If using `source`, this will force an update if the file content has updated but the filename has not. |

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-docker.container.ContainerUpload.property.file"></a>

```go
File *string
```

- *Type:* *string

Path to the file in the container where is upload goes to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#file Container#file}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-docker.container.ContainerUpload.property.content"></a>

```go
Content *string
```

- *Type:* *string

Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text.

Conflicts with `content_base64` & `source`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#content Container#content}

---

##### `ContentBase64`<sup>Optional</sup> <a name="ContentBase64" id="@cdktf/provider-docker.container.ContainerUpload.property.contentBase64"></a>

```go
ContentBase64 *string
```

- *Type:* *string

Base64-encoded data that will be decoded and uploaded as raw bytes for the object content.

This allows safely uploading non-UTF8 binary data, but is recommended only for larger binary content such as the result of the `base64encode` interpolation function. See [here](https://github.com/terraform-providers/terraform-provider-docker/issues/48#issuecomment-374174588) for the reason. Conflicts with `content` & `source`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#content_base64 Container#content_base64}

---

##### `Executable`<sup>Optional</sup> <a name="Executable" id="@cdktf/provider-docker.container.ContainerUpload.property.executable"></a>

```go
Executable interface{}
```

- *Type:* interface{}

If `true`, the file will be uploaded with user executable permission. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#executable Container#executable}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-docker.container.ContainerUpload.property.source"></a>

```go
Source *string
```

- *Type:* *string

A filename that references a file which will be uploaded as the object content.

This allows for large file uploads that do not get stored in state. Conflicts with `content` & `content_base64`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#source Container#source}

---

##### `SourceHash`<sup>Optional</sup> <a name="SourceHash" id="@cdktf/provider-docker.container.ContainerUpload.property.sourceHash"></a>

```go
SourceHash *string
```

- *Type:* *string

If using `source`, this will force an update if the file content has updated but the filename has not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#source_hash Container#source_hash}

---

### ContainerVolumes <a name="ContainerVolumes" id="@cdktf/provider-docker.container.ContainerVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

&container.ContainerVolumes {
	ContainerPath: *string,
	FromContainer: *string,
	HostPath: *string,
	ReadOnly: interface{},
	VolumeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.containerPath">ContainerPath</a></code> | <code>*string</code> | The path in the container where the volume will be mounted. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.fromContainer">FromContainer</a></code> | <code>*string</code> | The container where the volume is coming from. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.hostPath">HostPath</a></code> | <code>*string</code> | The path on the host where the volume is coming from. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | If `true`, this volume will be readonly. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.volumeName">VolumeName</a></code> | <code>*string</code> | The name of the docker volume which should be mounted. |

---

##### `ContainerPath`<sup>Optional</sup> <a name="ContainerPath" id="@cdktf/provider-docker.container.ContainerVolumes.property.containerPath"></a>

```go
ContainerPath *string
```

- *Type:* *string

The path in the container where the volume will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#container_path Container#container_path}

---

##### `FromContainer`<sup>Optional</sup> <a name="FromContainer" id="@cdktf/provider-docker.container.ContainerVolumes.property.fromContainer"></a>

```go
FromContainer *string
```

- *Type:* *string

The container where the volume is coming from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#from_container Container#from_container}

---

##### `HostPath`<sup>Optional</sup> <a name="HostPath" id="@cdktf/provider-docker.container.ContainerVolumes.property.hostPath"></a>

```go
HostPath *string
```

- *Type:* *string

The path on the host where the volume is coming from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#host_path Container#host_path}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-docker.container.ContainerVolumes.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

If `true`, this volume will be readonly. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#read_only Container#read_only}

---

##### `VolumeName`<sup>Optional</sup> <a name="VolumeName" id="@cdktf/provider-docker.container.ContainerVolumes.property.volumeName"></a>

```go
VolumeName *string
```

- *Type:* *string

The name of the docker volume which should be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#volume_name Container#volume_name}

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerCapabilitiesOutputReference <a name="ContainerCapabilitiesOutputReference" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resetAdd">ResetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resetDrop">ResetDrop</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdd` <a name="ResetAdd" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resetAdd"></a>

```go
func ResetAdd()
```

##### `ResetDrop` <a name="ResetDrop" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resetDrop"></a>

```go
func ResetDrop()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.addInput">AddInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.dropInput">DropInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.add">Add</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.drop">Drop</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddInput`<sup>Optional</sup> <a name="AddInput" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.addInput"></a>

```go
func AddInput() *[]*string
```

- *Type:* *[]*string

---

##### `DropInput`<sup>Optional</sup> <a name="DropInput" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.dropInput"></a>

```go
func DropInput() *[]*string
```

- *Type:* *[]*string

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.add"></a>

```go
func Add() *[]*string
```

- *Type:* *[]*string

---

##### `Drop`<sup>Required</sup> <a name="Drop" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.drop"></a>

```go
func Drop() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerCapabilities
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

---


### ContainerDevicesList <a name="ContainerDevicesList" id="@cdktf/provider-docker.container.ContainerDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerDevicesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerDevicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerDevicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerDevicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerDevicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerDevicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerDevicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.container.ContainerDevicesList.get"></a>

```go
func Get(index *f64) ContainerDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerDevicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerDevicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerDevicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerDevicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerDevicesOutputReference <a name="ContainerDevicesOutputReference" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerDevicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerDevicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.resetContainerPath">ResetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerPath` <a name="ResetContainerPath" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.resetContainerPath"></a>

```go
func ResetContainerPath()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.resetPermissions"></a>

```go
func ResetPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.containerPathInput">ContainerPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.hostPathInput">HostPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.containerPath">ContainerPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.hostPath">HostPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.permissions">Permissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPathInput`<sup>Optional</sup> <a name="ContainerPathInput" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.containerPathInput"></a>

```go
func ContainerPathInput() *string
```

- *Type:* *string

---

##### `HostPathInput`<sup>Optional</sup> <a name="HostPathInput" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.hostPathInput"></a>

```go
func HostPathInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() *string
```

- *Type:* *string

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.containerPath"></a>

```go
func ContainerPath() *string
```

- *Type:* *string

---

##### `HostPath`<sup>Required</sup> <a name="HostPath" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.hostPath"></a>

```go
func HostPath() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.permissions"></a>

```go
func Permissions() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerHealthcheckOutputReference <a name="ContainerHealthcheckOutputReference" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerHealthcheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerHealthcheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetStartPeriod">ResetStartPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetRetries"></a>

```go
func ResetRetries()
```

##### `ResetStartPeriod` <a name="ResetStartPeriod" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetStartPeriod"></a>

```go
func ResetStartPeriod()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startPeriodInput">StartPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.testInput">TestInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.interval">Interval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startPeriod">StartPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.test">Test</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *string
```

- *Type:* *string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `StartPeriodInput`<sup>Optional</sup> <a name="StartPeriodInput" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startPeriodInput"></a>

```go
func StartPeriodInput() *string
```

- *Type:* *string

---

##### `TestInput`<sup>Optional</sup> <a name="TestInput" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.testInput"></a>

```go
func TestInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.interval"></a>

```go
func Interval() *string
```

- *Type:* *string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `StartPeriod`<sup>Required</sup> <a name="StartPeriod" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startPeriod"></a>

```go
func StartPeriod() *string
```

- *Type:* *string

---

##### `Test`<sup>Required</sup> <a name="Test" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.test"></a>

```go
func Test() *[]*string
```

- *Type:* *[]*string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerHealthcheck
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

---


### ContainerHostList <a name="ContainerHostList" id="@cdktf/provider-docker.container.ContainerHostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerHostList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerHostList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerHostList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerHostList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerHostList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerHostList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerHostList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.container.ContainerHostList.get"></a>

```go
func Get(index *f64) ContainerHostOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerHostList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerHostList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerHostList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerHostList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerHostOutputReference <a name="ContainerHostOutputReference" id="@cdktf/provider-docker.container.ContainerHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerHostOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerHostOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerHostOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerHostOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerHostOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerHostOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerLabelsList <a name="ContainerLabelsList" id="@cdktf/provider-docker.container.ContainerLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerLabelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.container.ContainerLabelsList.get"></a>

```go
func Get(index *f64) ContainerLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerLabelsOutputReference <a name="ContainerLabelsOutputReference" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerMountsBindOptionsOutputReference <a name="ContainerMountsBindOptionsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerMountsBindOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerMountsBindOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resetPropagation">ResetPropagation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPropagation` <a name="ResetPropagation" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resetPropagation"></a>

```go
func ResetPropagation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.propagationInput">PropagationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.propagation">Propagation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropagationInput`<sup>Optional</sup> <a name="PropagationInput" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.propagationInput"></a>

```go
func PropagationInput() *string
```

- *Type:* *string

---

##### `Propagation`<sup>Required</sup> <a name="Propagation" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.propagation"></a>

```go
func Propagation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerMountsBindOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a>

---


### ContainerMountsList <a name="ContainerMountsList" id="@cdktf/provider-docker.container.ContainerMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerMountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerMountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerMountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerMountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerMountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.container.ContainerMountsList.get"></a>

```go
func Get(index *f64) ContainerMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerMountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerMountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerMountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerMountsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerMountsOutputReference <a name="ContainerMountsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerMountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerMountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.putBindOptions">PutBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.putTmpfsOptions">PutTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.putVolumeOptions">PutVolumeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetBindOptions">ResetBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetTmpfsOptions">ResetTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetVolumeOptions">ResetVolumeOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBindOptions` <a name="PutBindOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putBindOptions"></a>

```go
func PutBindOptions(value ContainerMountsBindOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putBindOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a>

---

##### `PutTmpfsOptions` <a name="PutTmpfsOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putTmpfsOptions"></a>

```go
func PutTmpfsOptions(value ContainerMountsTmpfsOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putTmpfsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a>

---

##### `PutVolumeOptions` <a name="PutVolumeOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putVolumeOptions"></a>

```go
func PutVolumeOptions(value ContainerMountsVolumeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putVolumeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a>

---

##### `ResetBindOptions` <a name="ResetBindOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetBindOptions"></a>

```go
func ResetBindOptions()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetReadOnly"></a>

```go
func ResetReadOnly()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetTmpfsOptions` <a name="ResetTmpfsOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetTmpfsOptions"></a>

```go
func ResetTmpfsOptions()
```

##### `ResetVolumeOptions` <a name="ResetVolumeOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetVolumeOptions"></a>

```go
func ResetVolumeOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.bindOptions">BindOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference">ContainerMountsBindOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.tmpfsOptions">TmpfsOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference">ContainerMountsTmpfsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.volumeOptions">VolumeOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference">ContainerMountsVolumeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.bindOptionsInput">BindOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.tmpfsOptionsInput">TmpfsOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.volumeOptionsInput">VolumeOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BindOptions`<sup>Required</sup> <a name="BindOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.bindOptions"></a>

```go
func BindOptions() ContainerMountsBindOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference">ContainerMountsBindOptionsOutputReference</a>

---

##### `TmpfsOptions`<sup>Required</sup> <a name="TmpfsOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.tmpfsOptions"></a>

```go
func TmpfsOptions() ContainerMountsTmpfsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference">ContainerMountsTmpfsOptionsOutputReference</a>

---

##### `VolumeOptions`<sup>Required</sup> <a name="VolumeOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.volumeOptions"></a>

```go
func VolumeOptions() ContainerMountsVolumeOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference">ContainerMountsVolumeOptionsOutputReference</a>

---

##### `BindOptionsInput`<sup>Optional</sup> <a name="BindOptionsInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.bindOptionsInput"></a>

```go
func BindOptionsInput() ContainerMountsBindOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a>

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TmpfsOptionsInput`<sup>Optional</sup> <a name="TmpfsOptionsInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.tmpfsOptionsInput"></a>

```go
func TmpfsOptionsInput() ContainerMountsTmpfsOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VolumeOptionsInput`<sup>Optional</sup> <a name="VolumeOptionsInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.volumeOptionsInput"></a>

```go
func VolumeOptionsInput() ContainerMountsVolumeOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a>

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerMountsTmpfsOptionsOutputReference <a name="ContainerMountsTmpfsOptionsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerMountsTmpfsOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerMountsTmpfsOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resetSizeBytes">ResetSizeBytes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetSizeBytes` <a name="ResetSizeBytes" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resetSizeBytes"></a>

```go
func ResetSizeBytes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.modeInput">ModeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.sizeBytesInput">SizeBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.mode">Mode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.sizeBytes">SizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.modeInput"></a>

```go
func ModeInput() *f64
```

- *Type:* *f64

---

##### `SizeBytesInput`<sup>Optional</sup> <a name="SizeBytesInput" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.sizeBytesInput"></a>

```go
func SizeBytesInput() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.mode"></a>

```go
func Mode() *f64
```

- *Type:* *f64

---

##### `SizeBytes`<sup>Required</sup> <a name="SizeBytes" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.sizeBytes"></a>

```go
func SizeBytes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerMountsTmpfsOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a>

---


### ContainerMountsVolumeOptionsLabelsList <a name="ContainerMountsVolumeOptionsLabelsList" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerMountsVolumeOptionsLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerMountsVolumeOptionsLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.get"></a>

```go
func Get(index *f64) ContainerMountsVolumeOptionsLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerMountsVolumeOptionsLabelsOutputReference <a name="ContainerMountsVolumeOptionsLabelsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerMountsVolumeOptionsLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerMountsVolumeOptionsLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerMountsVolumeOptionsOutputReference <a name="ContainerMountsVolumeOptionsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerMountsVolumeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerMountsVolumeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetDriverName">ResetDriverName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetDriverOptions">ResetDriverOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetNoCopy">ResetNoCopy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.putLabels"></a>

```go
func PutLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.putLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDriverName` <a name="ResetDriverName" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetDriverName"></a>

```go
func ResetDriverName()
```

##### `ResetDriverOptions` <a name="ResetDriverOptions" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetDriverOptions"></a>

```go
func ResetDriverOptions()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNoCopy` <a name="ResetNoCopy" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetNoCopy"></a>

```go
func ResetNoCopy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList">ContainerMountsVolumeOptionsLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverNameInput">DriverNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverOptionsInput">DriverOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.noCopyInput">NoCopyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverName">DriverName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverOptions">DriverOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.noCopy">NoCopy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.labels"></a>

```go
func Labels() ContainerMountsVolumeOptionsLabelsList
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList">ContainerMountsVolumeOptionsLabelsList</a>

---

##### `DriverNameInput`<sup>Optional</sup> <a name="DriverNameInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverNameInput"></a>

```go
func DriverNameInput() *string
```

- *Type:* *string

---

##### `DriverOptionsInput`<sup>Optional</sup> <a name="DriverOptionsInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverOptionsInput"></a>

```go
func DriverOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.labelsInput"></a>

```go
func LabelsInput() interface{}
```

- *Type:* interface{}

---

##### `NoCopyInput`<sup>Optional</sup> <a name="NoCopyInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.noCopyInput"></a>

```go
func NoCopyInput() interface{}
```

- *Type:* interface{}

---

##### `DriverName`<sup>Required</sup> <a name="DriverName" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverName"></a>

```go
func DriverName() *string
```

- *Type:* *string

---

##### `DriverOptions`<sup>Required</sup> <a name="DriverOptions" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverOptions"></a>

```go
func DriverOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NoCopy`<sup>Required</sup> <a name="NoCopy" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.noCopy"></a>

```go
func NoCopy() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerMountsVolumeOptions
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a>

---


### ContainerNetworkDataList <a name="ContainerNetworkDataList" id="@cdktf/provider-docker.container.ContainerNetworkDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerNetworkDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerNetworkDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerNetworkDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerNetworkDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerNetworkDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerNetworkDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.container.ContainerNetworkDataList.get"></a>

```go
func Get(index *f64) ContainerNetworkDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerNetworkDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerNetworkDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerNetworkDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ContainerNetworkDataOutputReference <a name="ContainerNetworkDataOutputReference" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerNetworkDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerNetworkDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.globalIpv6Address">GlobalIpv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.globalIpv6PrefixLength">GlobalIpv6PrefixLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipPrefixLength">IpPrefixLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipv6Gateway">Ipv6Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.macAddress">MacAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.networkName">NetworkName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerNetworkData">ContainerNetworkData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `GlobalIpv6Address`<sup>Required</sup> <a name="GlobalIpv6Address" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.globalIpv6Address"></a>

```go
func GlobalIpv6Address() *string
```

- *Type:* *string

---

##### `GlobalIpv6PrefixLength`<sup>Required</sup> <a name="GlobalIpv6PrefixLength" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.globalIpv6PrefixLength"></a>

```go
func GlobalIpv6PrefixLength() *f64
```

- *Type:* *f64

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IpPrefixLength`<sup>Required</sup> <a name="IpPrefixLength" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipPrefixLength"></a>

```go
func IpPrefixLength() *f64
```

- *Type:* *f64

---

##### `Ipv6Gateway`<sup>Required</sup> <a name="Ipv6Gateway" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipv6Gateway"></a>

```go
func Ipv6Gateway() *string
```

- *Type:* *string

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.macAddress"></a>

```go
func MacAddress() *string
```

- *Type:* *string

---

##### `NetworkName`<sup>Required</sup> <a name="NetworkName" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.networkName"></a>

```go
func NetworkName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerNetworkData
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerNetworkData">ContainerNetworkData</a>

---


### ContainerNetworksAdvancedList <a name="ContainerNetworksAdvancedList" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerNetworksAdvancedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerNetworksAdvancedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.get"></a>

```go
func Get(index *f64) ContainerNetworksAdvancedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerNetworksAdvancedOutputReference <a name="ContainerNetworksAdvancedOutputReference" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerNetworksAdvancedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerNetworksAdvancedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetAliases">ResetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetIpv4Address">ResetIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAliases` <a name="ResetAliases" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetAliases"></a>

```go
func ResetAliases()
```

##### `ResetIpv4Address` <a name="ResetIpv4Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetIpv4Address"></a>

```go
func ResetIpv4Address()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetIpv6Address"></a>

```go
func ResetIpv6Address()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.aliasesInput">AliasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv4AddressInput">Ipv4AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.aliases">Aliases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasesInput`<sup>Optional</sup> <a name="AliasesInput" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.aliasesInput"></a>

```go
func AliasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv4AddressInput`<sup>Optional</sup> <a name="Ipv4AddressInput" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv4AddressInput"></a>

```go
func Ipv4AddressInput() *string
```

- *Type:* *string

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv6AddressInput"></a>

```go
func Ipv6AddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.aliases"></a>

```go
func Aliases() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv4Address"></a>

```go
func Ipv4Address() *string
```

- *Type:* *string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerPortsList <a name="ContainerPortsList" id="@cdktf/provider-docker.container.ContainerPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerPortsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerPortsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.container.ContainerPortsList.get"></a>

```go
func Get(index *f64) ContainerPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerPortsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerPortsOutputReference <a name="ContainerPortsOutputReference" id="@cdktf/provider-docker.container.ContainerPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.resetExternal">ResetExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternal` <a name="ResetExternal" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resetExternal"></a>

```go
func ResetExternal()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resetIp"></a>

```go
func ResetIp()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.externalInput">ExternalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internalInput">InternalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.external">External</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internal">Internal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalInput`<sup>Optional</sup> <a name="ExternalInput" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.externalInput"></a>

```go
func ExternalInput() *f64
```

- *Type:* *f64

---

##### `InternalInput`<sup>Optional</sup> <a name="InternalInput" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internalInput"></a>

```go
func InternalInput() *f64
```

- *Type:* *f64

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `External`<sup>Required</sup> <a name="External" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.external"></a>

```go
func External() *f64
```

- *Type:* *f64

---

##### `Internal`<sup>Required</sup> <a name="Internal" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internal"></a>

```go
func Internal() *f64
```

- *Type:* *f64

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerUlimitList <a name="ContainerUlimitList" id="@cdktf/provider-docker.container.ContainerUlimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerUlimitList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerUlimitList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerUlimitList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerUlimitList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerUlimitList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerUlimitList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerUlimitList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.container.ContainerUlimitList.get"></a>

```go
func Get(index *f64) ContainerUlimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerUlimitList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerUlimitList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerUlimitList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerUlimitList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerUlimitOutputReference <a name="ContainerUlimitOutputReference" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerUlimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerUlimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.hardInput">HardInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.softInput">SoftInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.hard">Hard</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.soft">Soft</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HardInput`<sup>Optional</sup> <a name="HardInput" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.hardInput"></a>

```go
func HardInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SoftInput`<sup>Optional</sup> <a name="SoftInput" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.softInput"></a>

```go
func SoftInput() *f64
```

- *Type:* *f64

---

##### `Hard`<sup>Required</sup> <a name="Hard" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.hard"></a>

```go
func Hard() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Soft`<sup>Required</sup> <a name="Soft" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.soft"></a>

```go
func Soft() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerUploadList <a name="ContainerUploadList" id="@cdktf/provider-docker.container.ContainerUploadList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerUploadList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerUploadList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerUploadList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerUploadList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerUploadList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerUploadList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerUploadList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.container.ContainerUploadList.get"></a>

```go
func Get(index *f64) ContainerUploadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerUploadList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerUploadList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerUploadList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerUploadList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerUploadOutputReference <a name="ContainerUploadOutputReference" id="@cdktf/provider-docker.container.ContainerUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerUploadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerUploadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetContentBase64">ResetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetExecutable">ResetExecutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetSourceHash">ResetSourceHash</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetContent"></a>

```go
func ResetContent()
```

##### `ResetContentBase64` <a name="ResetContentBase64" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetContentBase64"></a>

```go
func ResetContentBase64()
```

##### `ResetExecutable` <a name="ResetExecutable" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetExecutable"></a>

```go
func ResetExecutable()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetSourceHash` <a name="ResetSourceHash" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetSourceHash"></a>

```go
func ResetSourceHash()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentBase64Input">ContentBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.executableInput">ExecutableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.fileInput">FileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceHashInput">SourceHashInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentBase64">ContentBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.executable">Executable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.file">File</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceHash">SourceHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentBase64Input`<sup>Optional</sup> <a name="ContentBase64Input" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentBase64Input"></a>

```go
func ContentBase64Input() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `ExecutableInput`<sup>Optional</sup> <a name="ExecutableInput" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.executableInput"></a>

```go
func ExecutableInput() interface{}
```

- *Type:* interface{}

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.fileInput"></a>

```go
func FileInput() *string
```

- *Type:* *string

---

##### `SourceHashInput`<sup>Optional</sup> <a name="SourceHashInput" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceHashInput"></a>

```go
func SourceHashInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentBase64"></a>

```go
func ContentBase64() *string
```

- *Type:* *string

---

##### `Executable`<sup>Required</sup> <a name="Executable" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.executable"></a>

```go
func Executable() interface{}
```

- *Type:* interface{}

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.file"></a>

```go
func File() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceHash`<sup>Required</sup> <a name="SourceHash" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceHash"></a>

```go
func SourceHash() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerVolumesList <a name="ContainerVolumesList" id="@cdktf/provider-docker.container.ContainerVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-docker.container.ContainerVolumesList.get"></a>

```go
func Get(index *f64) ContainerVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerVolumesOutputReference <a name="ContainerVolumesOutputReference" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-docker-go/docker/v10/container"

container.NewContainerVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetContainerPath">ResetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetFromContainer">ResetFromContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetHostPath">ResetHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetVolumeName">ResetVolumeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerPath` <a name="ResetContainerPath" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetContainerPath"></a>

```go
func ResetContainerPath()
```

##### `ResetFromContainer` <a name="ResetFromContainer" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetFromContainer"></a>

```go
func ResetFromContainer()
```

##### `ResetHostPath` <a name="ResetHostPath" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetHostPath"></a>

```go
func ResetHostPath()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetReadOnly"></a>

```go
func ResetReadOnly()
```

##### `ResetVolumeName` <a name="ResetVolumeName" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetVolumeName"></a>

```go
func ResetVolumeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.containerPathInput">ContainerPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fromContainerInput">FromContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.hostPathInput">HostPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.volumeNameInput">VolumeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.containerPath">ContainerPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fromContainer">FromContainer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.hostPath">HostPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.volumeName">VolumeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPathInput`<sup>Optional</sup> <a name="ContainerPathInput" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.containerPathInput"></a>

```go
func ContainerPathInput() *string
```

- *Type:* *string

---

##### `FromContainerInput`<sup>Optional</sup> <a name="FromContainerInput" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fromContainerInput"></a>

```go
func FromContainerInput() *string
```

- *Type:* *string

---

##### `HostPathInput`<sup>Optional</sup> <a name="HostPathInput" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.hostPathInput"></a>

```go
func HostPathInput() *string
```

- *Type:* *string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.volumeNameInput"></a>

```go
func VolumeNameInput() *string
```

- *Type:* *string

---

##### `ContainerPath`<sup>Required</sup> <a name="ContainerPath" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.containerPath"></a>

```go
func ContainerPath() *string
```

- *Type:* *string

---

##### `FromContainer`<sup>Required</sup> <a name="FromContainer" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fromContainer"></a>

```go
func FromContainer() *string
```

- *Type:* *string

---

##### `HostPath`<sup>Required</sup> <a name="HostPath" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.hostPath"></a>

```go
func HostPath() *string
```

- *Type:* *string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.volumeName"></a>

```go
func VolumeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



