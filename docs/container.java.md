# `docker_container`

Refer to the Terraform Registory for docs: [`docker_container`](https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container).

# `container` Submodule <a name="`container` Submodule" id="@cdktf/provider-docker.container"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Container <a name="Container" id="@cdktf/provider-docker.container.Container"></a>

Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container docker_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.Container.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.Container;

Container.Builder.create(Construct scope, java.lang.String id)
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
    .image(java.lang.String)
    .name(java.lang.String)
//  .attach(java.lang.Boolean)
//  .attach(IResolvable)
//  .capabilities(ContainerCapabilities)
//  .cgroupnsMode(java.lang.String)
//  .command(java.util.List<java.lang.String>)
//  .containerReadRefreshTimeoutMilliseconds(java.lang.Number)
//  .cpuSet(java.lang.String)
//  .cpuShares(java.lang.Number)
//  .destroyGraceSeconds(java.lang.Number)
//  .devices(IResolvable)
//  .devices(java.util.List<ContainerDevices>)
//  .dns(java.util.List<java.lang.String>)
//  .dnsOpts(java.util.List<java.lang.String>)
//  .dnsSearch(java.util.List<java.lang.String>)
//  .domainname(java.lang.String)
//  .entrypoint(java.util.List<java.lang.String>)
//  .env(java.util.List<java.lang.String>)
//  .gpus(java.lang.String)
//  .groupAdd(java.util.List<java.lang.String>)
//  .healthcheck(ContainerHealthcheck)
//  .host(IResolvable)
//  .host(java.util.List<ContainerHost>)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .init(java.lang.Boolean)
//  .init(IResolvable)
//  .ipcMode(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<ContainerLabels>)
//  .logDriver(java.lang.String)
//  .logOpts(java.util.Map<java.lang.String, java.lang.String>)
//  .logs(java.lang.Boolean)
//  .logs(IResolvable)
//  .maxRetryCount(java.lang.Number)
//  .memory(java.lang.Number)
//  .memorySwap(java.lang.Number)
//  .mounts(IResolvable)
//  .mounts(java.util.List<ContainerMounts>)
//  .mustRun(java.lang.Boolean)
//  .mustRun(IResolvable)
//  .networkMode(java.lang.String)
//  .networksAdvanced(IResolvable)
//  .networksAdvanced(java.util.List<ContainerNetworksAdvanced>)
//  .pidMode(java.lang.String)
//  .ports(IResolvable)
//  .ports(java.util.List<ContainerPorts>)
//  .privileged(java.lang.Boolean)
//  .privileged(IResolvable)
//  .publishAllPorts(java.lang.Boolean)
//  .publishAllPorts(IResolvable)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .removeVolumes(java.lang.Boolean)
//  .removeVolumes(IResolvable)
//  .restart(java.lang.String)
//  .rm(java.lang.Boolean)
//  .rm(IResolvable)
//  .runtime(java.lang.String)
//  .securityOpts(java.util.List<java.lang.String>)
//  .shmSize(java.lang.Number)
//  .start(java.lang.Boolean)
//  .start(IResolvable)
//  .stdinOpen(java.lang.Boolean)
//  .stdinOpen(IResolvable)
//  .stopSignal(java.lang.String)
//  .stopTimeout(java.lang.Number)
//  .storageOpts(java.util.Map<java.lang.String, java.lang.String>)
//  .sysctls(java.util.Map<java.lang.String, java.lang.String>)
//  .tmpfs(java.util.Map<java.lang.String, java.lang.String>)
//  .tty(java.lang.Boolean)
//  .tty(IResolvable)
//  .ulimit(IResolvable)
//  .ulimit(java.util.List<ContainerUlimit>)
//  .upload(IResolvable)
//  .upload(java.util.List<ContainerUpload>)
//  .user(java.lang.String)
//  .usernsMode(java.lang.String)
//  .volumes(IResolvable)
//  .volumes(java.util.List<ContainerVolumes>)
//  .wait(java.lang.Boolean)
//  .wait(IResolvable)
//  .waitTimeout(java.lang.Number)
//  .workingDir(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.image">image</a></code> | <code>java.lang.String</code> | The ID of the image to back this container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.attach">attach</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a></code> | capabilities block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.cgroupnsMode">cgroupnsMode</a></code> | <code>java.lang.String</code> | Cgroup namespace mode to use for the container. Possible values are: `private`, `host`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.command">command</a></code> | <code>java.util.List<java.lang.String></code> | The command to use to start the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.containerReadRefreshTimeoutMilliseconds">containerReadRefreshTimeoutMilliseconds</a></code> | <code>java.lang.Number</code> | The total number of milliseconds to wait for the container to reach status 'running'. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.cpuSet">cpuSet</a></code> | <code>java.lang.String</code> | A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.cpuShares">cpuShares</a></code> | <code>java.lang.Number</code> | CPU shares (relative weight) for the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.destroyGraceSeconds">destroyGraceSeconds</a></code> | <code>java.lang.Number</code> | If defined will attempt to stop the container before destroying. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.devices">devices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>></code> | devices block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.dns">dns</a></code> | <code>java.util.List<java.lang.String></code> | DNS servers to use. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.dnsOpts">dnsOpts</a></code> | <code>java.util.List<java.lang.String></code> | DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.dnsSearch">dnsSearch</a></code> | <code>java.util.List<java.lang.String></code> | DNS search domains that are used when bare unqualified hostnames are used inside of the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.domainname">domainname</a></code> | <code>java.lang.String</code> | Domain name of the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.entrypoint">entrypoint</a></code> | <code>java.util.List<java.lang.String></code> | The command to use as the Entrypoint for the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.env">env</a></code> | <code>java.util.List<java.lang.String></code> | Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.gpus">gpus</a></code> | <code>java.lang.String</code> | GPU devices to add to the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.groupAdd">groupAdd</a></code> | <code>java.util.List<java.lang.String></code> | Additional groups for the container user. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.host">host</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>></code> | host block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname of the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#id Container#id}. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.init">init</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Configured whether an init process should be injected for this container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.ipcMode">ipcMode</a></code> | <code>java.lang.String</code> | IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name\|id>` or `host`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.logDriver">logDriver</a></code> | <code>java.lang.String</code> | The logging driver to use for the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.logOpts">logOpts</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Key/value pairs to use as options for the logging driver. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.logs">logs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Save the container logs (`attach` must be enabled). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.maxRetryCount">maxRetryCount</a></code> | <code>java.lang.Number</code> | The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.memory">memory</a></code> | <code>java.lang.Number</code> | The memory limit for the container in MBs. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.memorySwap">memorySwap</a></code> | <code>java.lang.Number</code> | The total memory limit (memory + swap) for the container in MBs. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.mounts">mounts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>></code> | mounts block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.mustRun">mustRun</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, then the Docker container will be kept running. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.networkMode">networkMode</a></code> | <code>java.lang.String</code> | Network mode of the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.networksAdvanced">networksAdvanced</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>></code> | networks_advanced block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.pidMode">pidMode</a></code> | <code>java.lang.String</code> | he PID (Process) Namespace mode for the container. Either `container:<name\|id>` or `host`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.ports">ports</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>></code> | ports block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.privileged">privileged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, the container runs in privileged mode. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.publishAllPorts">publishAllPorts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Publish all ports of the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, the container will be started as readonly. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.removeVolumes">removeVolumes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.restart">restart</a></code> | <code>java.lang.String</code> | The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.rm">rm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, then the container will be automatically removed when it exits. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.runtime">runtime</a></code> | <code>java.lang.String</code> | Runtime to use for the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.securityOpts">securityOpts</a></code> | <code>java.util.List<java.lang.String></code> | List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.shmSize">shmSize</a></code> | <code>java.lang.Number</code> | Size of `/dev/shm` in MBs. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.start">start</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, then the Docker container will be started after creation. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.stdinOpen">stdinOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.stopSignal">stopSignal</a></code> | <code>java.lang.String</code> | Signal to stop a container (default `SIGTERM`). |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.stopTimeout">stopTimeout</a></code> | <code>java.lang.Number</code> | Timeout (in seconds) to stop a container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.storageOpts">storageOpts</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Key/value pairs for the storage driver options, e.g. `size`: `120G`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.sysctls">sysctls</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of kernel parameters (sysctls) to set in the container. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.tmpfs">tmpfs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.tty">tty</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.ulimit">ulimit</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>></code> | ulimit block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.upload">upload</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>></code> | upload block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.user">user</a></code> | <code>java.lang.String</code> | User used for run the first process. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.usernsMode">usernsMode</a></code> | <code>java.lang.String</code> | Sets the usernamespace mode for the container when usernamespace remapping option is enabled. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.volumes">volumes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>></code> | volumes block. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.wait">wait</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, then the Docker container is waited for being healthy state after creation. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.waitTimeout">waitTimeout</a></code> | <code>java.lang.Number</code> | The timeout in seconds to wait the container to be healthy after creation. Defaults to `60`. |
| <code><a href="#@cdktf/provider-docker.container.Container.Initializer.parameter.workingDir">workingDir</a></code> | <code>java.lang.String</code> | The working directory for commands to run in. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-docker.container.Container.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.container.Container.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.container.Container.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.container.Container.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.container.Container.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.container.Container.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.container.Container.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.container.Container.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.container.Container.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.container.Container.Initializer.parameter.image"></a>

- *Type:* java.lang.String

The ID of the image to back this container.

The easiest way to get this value is to use the `docker_image` resource as is shown in the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#image Container#image}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.Container.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#name Container#name}

---

##### `attach`<sup>Optional</sup> <a name="attach" id="@cdktf/provider-docker.container.Container.Initializer.parameter.attach"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#attach Container#attach}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-docker.container.Container.Initializer.parameter.capabilities"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#capabilities Container#capabilities}

---

##### `cgroupnsMode`<sup>Optional</sup> <a name="cgroupnsMode" id="@cdktf/provider-docker.container.Container.Initializer.parameter.cgroupnsMode"></a>

- *Type:* java.lang.String

Cgroup namespace mode to use for the container. Possible values are: `private`, `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#cgroupns_mode Container#cgroupns_mode}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-docker.container.Container.Initializer.parameter.command"></a>

- *Type:* java.util.List<java.lang.String>

The command to use to start the container.

For example, to run `/usr/bin/myprogram -f baz.conf` set the command to be `["/usr/bin/myprogram","-f","baz.con"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#command Container#command}

---

##### `containerReadRefreshTimeoutMilliseconds`<sup>Optional</sup> <a name="containerReadRefreshTimeoutMilliseconds" id="@cdktf/provider-docker.container.Container.Initializer.parameter.containerReadRefreshTimeoutMilliseconds"></a>

- *Type:* java.lang.Number

The total number of milliseconds to wait for the container to reach status 'running'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#container_read_refresh_timeout_milliseconds Container#container_read_refresh_timeout_milliseconds}

---

##### `cpuSet`<sup>Optional</sup> <a name="cpuSet" id="@cdktf/provider-docker.container.Container.Initializer.parameter.cpuSet"></a>

- *Type:* java.lang.String

A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#cpu_set Container#cpu_set}

---

##### `cpuShares`<sup>Optional</sup> <a name="cpuShares" id="@cdktf/provider-docker.container.Container.Initializer.parameter.cpuShares"></a>

- *Type:* java.lang.Number

CPU shares (relative weight) for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#cpu_shares Container#cpu_shares}

---

##### `destroyGraceSeconds`<sup>Optional</sup> <a name="destroyGraceSeconds" id="@cdktf/provider-docker.container.Container.Initializer.parameter.destroyGraceSeconds"></a>

- *Type:* java.lang.Number

If defined will attempt to stop the container before destroying.

Container will be destroyed after `n` seconds or on successful stop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#destroy_grace_seconds Container#destroy_grace_seconds}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-docker.container.Container.Initializer.parameter.devices"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>>

devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#devices Container#devices}

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-docker.container.Container.Initializer.parameter.dns"></a>

- *Type:* java.util.List<java.lang.String>

DNS servers to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#dns Container#dns}

---

##### `dnsOpts`<sup>Optional</sup> <a name="dnsOpts" id="@cdktf/provider-docker.container.Container.Initializer.parameter.dnsOpts"></a>

- *Type:* java.util.List<java.lang.String>

DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#dns_opts Container#dns_opts}

---

##### `dnsSearch`<sup>Optional</sup> <a name="dnsSearch" id="@cdktf/provider-docker.container.Container.Initializer.parameter.dnsSearch"></a>

- *Type:* java.util.List<java.lang.String>

DNS search domains that are used when bare unqualified hostnames are used inside of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#dns_search Container#dns_search}

---

##### `domainname`<sup>Optional</sup> <a name="domainname" id="@cdktf/provider-docker.container.Container.Initializer.parameter.domainname"></a>

- *Type:* java.lang.String

Domain name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#domainname Container#domainname}

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@cdktf/provider-docker.container.Container.Initializer.parameter.entrypoint"></a>

- *Type:* java.util.List<java.lang.String>

The command to use as the Entrypoint for the container.

The Entrypoint allows you to configure a container to run as an executable. For example, to run `/usr/bin/myprogram` when starting a container, set the entrypoint to be `"/usr/bin/myprogra"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#entrypoint Container#entrypoint}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.container.Container.Initializer.parameter.env"></a>

- *Type:* java.util.List<java.lang.String>

Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#env Container#env}

---

##### `gpus`<sup>Optional</sup> <a name="gpus" id="@cdktf/provider-docker.container.Container.Initializer.parameter.gpus"></a>

- *Type:* java.lang.String

GPU devices to add to the container.

Currently, only the value `all` is supported. Passing any other value will result in unexpected behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#gpus Container#gpus}

---

##### `groupAdd`<sup>Optional</sup> <a name="groupAdd" id="@cdktf/provider-docker.container.Container.Initializer.parameter.groupAdd"></a>

- *Type:* java.util.List<java.lang.String>

Additional groups for the container user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#group_add Container#group_add}

---

##### `healthcheck`<sup>Optional</sup> <a name="healthcheck" id="@cdktf/provider-docker.container.Container.Initializer.parameter.healthcheck"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#healthcheck Container#healthcheck}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-docker.container.Container.Initializer.parameter.host"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#host Container#host}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-docker.container.Container.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

Hostname of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#hostname Container#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.container.Container.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#id Container#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `init`<sup>Optional</sup> <a name="init" id="@cdktf/provider-docker.container.Container.Initializer.parameter.init"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Configured whether an init process should be injected for this container.

If unset this will default to the `dockerd` defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#init Container#init}

---

##### `ipcMode`<sup>Optional</sup> <a name="ipcMode" id="@cdktf/provider-docker.container.Container.Initializer.parameter.ipcMode"></a>

- *Type:* java.lang.String

IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name|id>` or `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ipc_mode Container#ipc_mode}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.container.Container.Initializer.parameter.labels"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#labels Container#labels}

---

##### `logDriver`<sup>Optional</sup> <a name="logDriver" id="@cdktf/provider-docker.container.Container.Initializer.parameter.logDriver"></a>

- *Type:* java.lang.String

The logging driver to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#log_driver Container#log_driver}

---

##### `logOpts`<sup>Optional</sup> <a name="logOpts" id="@cdktf/provider-docker.container.Container.Initializer.parameter.logOpts"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Key/value pairs to use as options for the logging driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#log_opts Container#log_opts}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-docker.container.Container.Initializer.parameter.logs"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Save the container logs (`attach` must be enabled). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#logs Container#logs}

---

##### `maxRetryCount`<sup>Optional</sup> <a name="maxRetryCount" id="@cdktf/provider-docker.container.Container.Initializer.parameter.maxRetryCount"></a>

- *Type:* java.lang.Number

The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#max_retry_count Container#max_retry_count}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.container.Container.Initializer.parameter.memory"></a>

- *Type:* java.lang.Number

The memory limit for the container in MBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#memory Container#memory}

---

##### `memorySwap`<sup>Optional</sup> <a name="memorySwap" id="@cdktf/provider-docker.container.Container.Initializer.parameter.memorySwap"></a>

- *Type:* java.lang.Number

The total memory limit (memory + swap) for the container in MBs.

This setting may compute to `-1` after `terraform apply` if the target host doesn't support memory swap, when that is the case docker will use a soft limitation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#memory_swap Container#memory_swap}

---

##### `mounts`<sup>Optional</sup> <a name="mounts" id="@cdktf/provider-docker.container.Container.Initializer.parameter.mounts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>>

mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#mounts Container#mounts}

---

##### `mustRun`<sup>Optional</sup> <a name="mustRun" id="@cdktf/provider-docker.container.Container.Initializer.parameter.mustRun"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, then the Docker container will be kept running.

If `false`, then as long as the container exists, Terraform assumes it is successful. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#must_run Container#must_run}

---

##### `networkMode`<sup>Optional</sup> <a name="networkMode" id="@cdktf/provider-docker.container.Container.Initializer.parameter.networkMode"></a>

- *Type:* java.lang.String

Network mode of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#network_mode Container#network_mode}

---

##### `networksAdvanced`<sup>Optional</sup> <a name="networksAdvanced" id="@cdktf/provider-docker.container.Container.Initializer.parameter.networksAdvanced"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>>

networks_advanced block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#networks_advanced Container#networks_advanced}

---

##### `pidMode`<sup>Optional</sup> <a name="pidMode" id="@cdktf/provider-docker.container.Container.Initializer.parameter.pidMode"></a>

- *Type:* java.lang.String

he PID (Process) Namespace mode for the container. Either `container:<name|id>` or `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#pid_mode Container#pid_mode}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-docker.container.Container.Initializer.parameter.ports"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>>

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ports Container#ports}

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="@cdktf/provider-docker.container.Container.Initializer.parameter.privileged"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, the container runs in privileged mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#privileged Container#privileged}

---

##### `publishAllPorts`<sup>Optional</sup> <a name="publishAllPorts" id="@cdktf/provider-docker.container.Container.Initializer.parameter.publishAllPorts"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Publish all ports of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#publish_all_ports Container#publish_all_ports}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-docker.container.Container.Initializer.parameter.readOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, the container will be started as readonly. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#read_only Container#read_only}

---

##### `removeVolumes`<sup>Optional</sup> <a name="removeVolumes" id="@cdktf/provider-docker.container.Container.Initializer.parameter.removeVolumes"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#remove_volumes Container#remove_volumes}

---

##### `restart`<sup>Optional</sup> <a name="restart" id="@cdktf/provider-docker.container.Container.Initializer.parameter.restart"></a>

- *Type:* java.lang.String

The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#restart Container#restart}

---

##### `rm`<sup>Optional</sup> <a name="rm" id="@cdktf/provider-docker.container.Container.Initializer.parameter.rm"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, then the container will be automatically removed when it exits. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#rm Container#rm}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-docker.container.Container.Initializer.parameter.runtime"></a>

- *Type:* java.lang.String

Runtime to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#runtime Container#runtime}

---

##### `securityOpts`<sup>Optional</sup> <a name="securityOpts" id="@cdktf/provider-docker.container.Container.Initializer.parameter.securityOpts"></a>

- *Type:* java.util.List<java.lang.String>

List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#security_opts Container#security_opts}

---

##### `shmSize`<sup>Optional</sup> <a name="shmSize" id="@cdktf/provider-docker.container.Container.Initializer.parameter.shmSize"></a>

- *Type:* java.lang.Number

Size of `/dev/shm` in MBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#shm_size Container#shm_size}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-docker.container.Container.Initializer.parameter.start"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, then the Docker container will be started after creation.

If `false`, then the container is only created. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#start Container#start}

---

##### `stdinOpen`<sup>Optional</sup> <a name="stdinOpen" id="@cdktf/provider-docker.container.Container.Initializer.parameter.stdinOpen"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#stdin_open Container#stdin_open}

---

##### `stopSignal`<sup>Optional</sup> <a name="stopSignal" id="@cdktf/provider-docker.container.Container.Initializer.parameter.stopSignal"></a>

- *Type:* java.lang.String

Signal to stop a container (default `SIGTERM`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#stop_signal Container#stop_signal}

---

##### `stopTimeout`<sup>Optional</sup> <a name="stopTimeout" id="@cdktf/provider-docker.container.Container.Initializer.parameter.stopTimeout"></a>

- *Type:* java.lang.Number

Timeout (in seconds) to stop a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#stop_timeout Container#stop_timeout}

---

##### `storageOpts`<sup>Optional</sup> <a name="storageOpts" id="@cdktf/provider-docker.container.Container.Initializer.parameter.storageOpts"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Key/value pairs for the storage driver options, e.g. `size`: `120G`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#storage_opts Container#storage_opts}

---

##### `sysctls`<sup>Optional</sup> <a name="sysctls" id="@cdktf/provider-docker.container.Container.Initializer.parameter.sysctls"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of kernel parameters (sysctls) to set in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#sysctls Container#sysctls}

---

##### `tmpfs`<sup>Optional</sup> <a name="tmpfs" id="@cdktf/provider-docker.container.Container.Initializer.parameter.tmpfs"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#tmpfs Container#tmpfs}

---

##### `tty`<sup>Optional</sup> <a name="tty" id="@cdktf/provider-docker.container.Container.Initializer.parameter.tty"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#tty Container#tty}

---

##### `ulimit`<sup>Optional</sup> <a name="ulimit" id="@cdktf/provider-docker.container.Container.Initializer.parameter.ulimit"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>>

ulimit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ulimit Container#ulimit}

---

##### `upload`<sup>Optional</sup> <a name="upload" id="@cdktf/provider-docker.container.Container.Initializer.parameter.upload"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>>

upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#upload Container#upload}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-docker.container.Container.Initializer.parameter.user"></a>

- *Type:* java.lang.String

User used for run the first process.

Format is `user` or `user:group` which user and group can be passed literraly or by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#user Container#user}

---

##### `usernsMode`<sup>Optional</sup> <a name="usernsMode" id="@cdktf/provider-docker.container.Container.Initializer.parameter.usernsMode"></a>

- *Type:* java.lang.String

Sets the usernamespace mode for the container when usernamespace remapping option is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#userns_mode Container#userns_mode}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-docker.container.Container.Initializer.parameter.volumes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#volumes Container#volumes}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-docker.container.Container.Initializer.parameter.wait"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, then the Docker container is waited for being healthy state after creation.

If `false`, then the container health state is not checked. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#wait Container#wait}

---

##### `waitTimeout`<sup>Optional</sup> <a name="waitTimeout" id="@cdktf/provider-docker.container.Container.Initializer.parameter.waitTimeout"></a>

- *Type:* java.lang.Number

The timeout in seconds to wait the container to be healthy after creation. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#wait_timeout Container#wait_timeout}

---

##### `workingDir`<sup>Optional</sup> <a name="workingDir" id="@cdktf/provider-docker.container.Container.Initializer.parameter.workingDir"></a>

- *Type:* java.lang.String

The working directory for commands to run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#working_dir Container#working_dir}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-docker.container.Container.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-docker.container.Container.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-docker.container.Container.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-docker.container.Container.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putCapabilities">putCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putDevices">putDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putHealthcheck">putHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putHost">putHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putMounts">putMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putNetworksAdvanced">putNetworksAdvanced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putUlimit">putUlimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putUpload">putUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetAttach">resetAttach</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCgroupnsMode">resetCgroupnsMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetContainerReadRefreshTimeoutMilliseconds">resetContainerReadRefreshTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCpuSet">resetCpuSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetCpuShares">resetCpuShares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDestroyGraceSeconds">resetDestroyGraceSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDevices">resetDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDnsOpts">resetDnsOpts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDnsSearch">resetDnsSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetDomainname">resetDomainname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetEntrypoint">resetEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetGpus">resetGpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetGroupAdd">resetGroupAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetHealthcheck">resetHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetInit">resetInit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetIpcMode">resetIpcMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetLogDriver">resetLogDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetLogOpts">resetLogOpts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetLogs">resetLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMaxRetryCount">resetMaxRetryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMemorySwap">resetMemorySwap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMounts">resetMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetMustRun">resetMustRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetNetworkMode">resetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetNetworksAdvanced">resetNetworksAdvanced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetPidMode">resetPidMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetPrivileged">resetPrivileged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetPublishAllPorts">resetPublishAllPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetRemoveVolumes">resetRemoveVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetRestart">resetRestart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetRm">resetRm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetSecurityOpts">resetSecurityOpts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetShmSize">resetShmSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStart">resetStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStdinOpen">resetStdinOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStopSignal">resetStopSignal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStopTimeout">resetStopTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetStorageOpts">resetStorageOpts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetSysctls">resetSysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetTmpfs">resetTmpfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetTty">resetTty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetUlimit">resetUlimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetUpload">resetUpload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetUser">resetUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetUsernsMode">resetUsernsMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetVolumes">resetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetWait">resetWait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetWaitTimeout">resetWaitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.resetWorkingDir">resetWorkingDir</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.Container.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-docker.container.Container.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-docker.container.Container.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-docker.container.Container.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-docker.container.Container.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-docker.container.Container.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-docker.container.Container.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-docker.container.Container.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.Container.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.Container.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.Container.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.Container.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.Container.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.Container.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.Container.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.Container.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.Container.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.Container.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.Container.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCapabilities` <a name="putCapabilities" id="@cdktf/provider-docker.container.Container.putCapabilities"></a>

```java
public void putCapabilities(ContainerCapabilities value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putCapabilities.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

---

##### `putDevices` <a name="putDevices" id="@cdktf/provider-docker.container.Container.putDevices"></a>

```java
public void putDevices(IResolvable OR java.util.List<ContainerDevices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putDevices.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>>

---

##### `putHealthcheck` <a name="putHealthcheck" id="@cdktf/provider-docker.container.Container.putHealthcheck"></a>

```java
public void putHealthcheck(ContainerHealthcheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putHealthcheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

---

##### `putHost` <a name="putHost" id="@cdktf/provider-docker.container.Container.putHost"></a>

```java
public void putHost(IResolvable OR java.util.List<ContainerHost> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putHost.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>>

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-docker.container.Container.putLabels"></a>

```java
public void putLabels(IResolvable OR java.util.List<ContainerLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>>

---

##### `putMounts` <a name="putMounts" id="@cdktf/provider-docker.container.Container.putMounts"></a>

```java
public void putMounts(IResolvable OR java.util.List<ContainerMounts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putMounts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>>

---

##### `putNetworksAdvanced` <a name="putNetworksAdvanced" id="@cdktf/provider-docker.container.Container.putNetworksAdvanced"></a>

```java
public void putNetworksAdvanced(IResolvable OR java.util.List<ContainerNetworksAdvanced> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putNetworksAdvanced.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>>

---

##### `putPorts` <a name="putPorts" id="@cdktf/provider-docker.container.Container.putPorts"></a>

```java
public void putPorts(IResolvable OR java.util.List<ContainerPorts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putPorts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>>

---

##### `putUlimit` <a name="putUlimit" id="@cdktf/provider-docker.container.Container.putUlimit"></a>

```java
public void putUlimit(IResolvable OR java.util.List<ContainerUlimit> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putUlimit.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>>

---

##### `putUpload` <a name="putUpload" id="@cdktf/provider-docker.container.Container.putUpload"></a>

```java
public void putUpload(IResolvable OR java.util.List<ContainerUpload> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putUpload.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>>

---

##### `putVolumes` <a name="putVolumes" id="@cdktf/provider-docker.container.Container.putVolumes"></a>

```java
public void putVolumes(IResolvable OR java.util.List<ContainerVolumes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.Container.putVolumes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>>

---

##### `resetAttach` <a name="resetAttach" id="@cdktf/provider-docker.container.Container.resetAttach"></a>

```java
public void resetAttach()
```

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktf/provider-docker.container.Container.resetCapabilities"></a>

```java
public void resetCapabilities()
```

##### `resetCgroupnsMode` <a name="resetCgroupnsMode" id="@cdktf/provider-docker.container.Container.resetCgroupnsMode"></a>

```java
public void resetCgroupnsMode()
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-docker.container.Container.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetContainerReadRefreshTimeoutMilliseconds` <a name="resetContainerReadRefreshTimeoutMilliseconds" id="@cdktf/provider-docker.container.Container.resetContainerReadRefreshTimeoutMilliseconds"></a>

```java
public void resetContainerReadRefreshTimeoutMilliseconds()
```

##### `resetCpuSet` <a name="resetCpuSet" id="@cdktf/provider-docker.container.Container.resetCpuSet"></a>

```java
public void resetCpuSet()
```

##### `resetCpuShares` <a name="resetCpuShares" id="@cdktf/provider-docker.container.Container.resetCpuShares"></a>

```java
public void resetCpuShares()
```

##### `resetDestroyGraceSeconds` <a name="resetDestroyGraceSeconds" id="@cdktf/provider-docker.container.Container.resetDestroyGraceSeconds"></a>

```java
public void resetDestroyGraceSeconds()
```

##### `resetDevices` <a name="resetDevices" id="@cdktf/provider-docker.container.Container.resetDevices"></a>

```java
public void resetDevices()
```

##### `resetDns` <a name="resetDns" id="@cdktf/provider-docker.container.Container.resetDns"></a>

```java
public void resetDns()
```

##### `resetDnsOpts` <a name="resetDnsOpts" id="@cdktf/provider-docker.container.Container.resetDnsOpts"></a>

```java
public void resetDnsOpts()
```

##### `resetDnsSearch` <a name="resetDnsSearch" id="@cdktf/provider-docker.container.Container.resetDnsSearch"></a>

```java
public void resetDnsSearch()
```

##### `resetDomainname` <a name="resetDomainname" id="@cdktf/provider-docker.container.Container.resetDomainname"></a>

```java
public void resetDomainname()
```

##### `resetEntrypoint` <a name="resetEntrypoint" id="@cdktf/provider-docker.container.Container.resetEntrypoint"></a>

```java
public void resetEntrypoint()
```

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-docker.container.Container.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetGpus` <a name="resetGpus" id="@cdktf/provider-docker.container.Container.resetGpus"></a>

```java
public void resetGpus()
```

##### `resetGroupAdd` <a name="resetGroupAdd" id="@cdktf/provider-docker.container.Container.resetGroupAdd"></a>

```java
public void resetGroupAdd()
```

##### `resetHealthcheck` <a name="resetHealthcheck" id="@cdktf/provider-docker.container.Container.resetHealthcheck"></a>

```java
public void resetHealthcheck()
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-docker.container.Container.resetHost"></a>

```java
public void resetHost()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-docker.container.Container.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-docker.container.Container.resetId"></a>

```java
public void resetId()
```

##### `resetInit` <a name="resetInit" id="@cdktf/provider-docker.container.Container.resetInit"></a>

```java
public void resetInit()
```

##### `resetIpcMode` <a name="resetIpcMode" id="@cdktf/provider-docker.container.Container.resetIpcMode"></a>

```java
public void resetIpcMode()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-docker.container.Container.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLogDriver` <a name="resetLogDriver" id="@cdktf/provider-docker.container.Container.resetLogDriver"></a>

```java
public void resetLogDriver()
```

##### `resetLogOpts` <a name="resetLogOpts" id="@cdktf/provider-docker.container.Container.resetLogOpts"></a>

```java
public void resetLogOpts()
```

##### `resetLogs` <a name="resetLogs" id="@cdktf/provider-docker.container.Container.resetLogs"></a>

```java
public void resetLogs()
```

##### `resetMaxRetryCount` <a name="resetMaxRetryCount" id="@cdktf/provider-docker.container.Container.resetMaxRetryCount"></a>

```java
public void resetMaxRetryCount()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-docker.container.Container.resetMemory"></a>

```java
public void resetMemory()
```

##### `resetMemorySwap` <a name="resetMemorySwap" id="@cdktf/provider-docker.container.Container.resetMemorySwap"></a>

```java
public void resetMemorySwap()
```

##### `resetMounts` <a name="resetMounts" id="@cdktf/provider-docker.container.Container.resetMounts"></a>

```java
public void resetMounts()
```

##### `resetMustRun` <a name="resetMustRun" id="@cdktf/provider-docker.container.Container.resetMustRun"></a>

```java
public void resetMustRun()
```

##### `resetNetworkMode` <a name="resetNetworkMode" id="@cdktf/provider-docker.container.Container.resetNetworkMode"></a>

```java
public void resetNetworkMode()
```

##### `resetNetworksAdvanced` <a name="resetNetworksAdvanced" id="@cdktf/provider-docker.container.Container.resetNetworksAdvanced"></a>

```java
public void resetNetworksAdvanced()
```

##### `resetPidMode` <a name="resetPidMode" id="@cdktf/provider-docker.container.Container.resetPidMode"></a>

```java
public void resetPidMode()
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-docker.container.Container.resetPorts"></a>

```java
public void resetPorts()
```

##### `resetPrivileged` <a name="resetPrivileged" id="@cdktf/provider-docker.container.Container.resetPrivileged"></a>

```java
public void resetPrivileged()
```

##### `resetPublishAllPorts` <a name="resetPublishAllPorts" id="@cdktf/provider-docker.container.Container.resetPublishAllPorts"></a>

```java
public void resetPublishAllPorts()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-docker.container.Container.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetRemoveVolumes` <a name="resetRemoveVolumes" id="@cdktf/provider-docker.container.Container.resetRemoveVolumes"></a>

```java
public void resetRemoveVolumes()
```

##### `resetRestart` <a name="resetRestart" id="@cdktf/provider-docker.container.Container.resetRestart"></a>

```java
public void resetRestart()
```

##### `resetRm` <a name="resetRm" id="@cdktf/provider-docker.container.Container.resetRm"></a>

```java
public void resetRm()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-docker.container.Container.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetSecurityOpts` <a name="resetSecurityOpts" id="@cdktf/provider-docker.container.Container.resetSecurityOpts"></a>

```java
public void resetSecurityOpts()
```

##### `resetShmSize` <a name="resetShmSize" id="@cdktf/provider-docker.container.Container.resetShmSize"></a>

```java
public void resetShmSize()
```

##### `resetStart` <a name="resetStart" id="@cdktf/provider-docker.container.Container.resetStart"></a>

```java
public void resetStart()
```

##### `resetStdinOpen` <a name="resetStdinOpen" id="@cdktf/provider-docker.container.Container.resetStdinOpen"></a>

```java
public void resetStdinOpen()
```

##### `resetStopSignal` <a name="resetStopSignal" id="@cdktf/provider-docker.container.Container.resetStopSignal"></a>

```java
public void resetStopSignal()
```

##### `resetStopTimeout` <a name="resetStopTimeout" id="@cdktf/provider-docker.container.Container.resetStopTimeout"></a>

```java
public void resetStopTimeout()
```

##### `resetStorageOpts` <a name="resetStorageOpts" id="@cdktf/provider-docker.container.Container.resetStorageOpts"></a>

```java
public void resetStorageOpts()
```

##### `resetSysctls` <a name="resetSysctls" id="@cdktf/provider-docker.container.Container.resetSysctls"></a>

```java
public void resetSysctls()
```

##### `resetTmpfs` <a name="resetTmpfs" id="@cdktf/provider-docker.container.Container.resetTmpfs"></a>

```java
public void resetTmpfs()
```

##### `resetTty` <a name="resetTty" id="@cdktf/provider-docker.container.Container.resetTty"></a>

```java
public void resetTty()
```

##### `resetUlimit` <a name="resetUlimit" id="@cdktf/provider-docker.container.Container.resetUlimit"></a>

```java
public void resetUlimit()
```

##### `resetUpload` <a name="resetUpload" id="@cdktf/provider-docker.container.Container.resetUpload"></a>

```java
public void resetUpload()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-docker.container.Container.resetUser"></a>

```java
public void resetUser()
```

##### `resetUsernsMode` <a name="resetUsernsMode" id="@cdktf/provider-docker.container.Container.resetUsernsMode"></a>

```java
public void resetUsernsMode()
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktf/provider-docker.container.Container.resetVolumes"></a>

```java
public void resetVolumes()
```

##### `resetWait` <a name="resetWait" id="@cdktf/provider-docker.container.Container.resetWait"></a>

```java
public void resetWait()
```

##### `resetWaitTimeout` <a name="resetWaitTimeout" id="@cdktf/provider-docker.container.Container.resetWaitTimeout"></a>

```java
public void resetWaitTimeout()
```

##### `resetWorkingDir` <a name="resetWorkingDir" id="@cdktf/provider-docker.container.Container.resetWorkingDir"></a>

```java
public void resetWorkingDir()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-docker.container.Container.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-docker.container.Container.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.Container;

Container.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-docker.container.Container.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.Container;

Container.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.container.Container.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-docker.container.Container.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.Container;

Container.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-docker.container.Container.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.bridge">bridge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference">ContainerCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.containerLogs">containerLogs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.devices">devices</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList">ContainerDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.exitCode">exitCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference">ContainerHealthcheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.host">host</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHostList">ContainerHostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList">ContainerLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.mounts">mounts</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsList">ContainerMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networkData">networkData</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList">ContainerNetworkDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networksAdvanced">networksAdvanced</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList">ContainerNetworksAdvancedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerPortsList">ContainerPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ulimit">ulimit</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList">ContainerUlimitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.upload">upload</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerUploadList">ContainerUploadList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList">ContainerVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.attachInput">attachInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.capabilitiesInput">capabilitiesInput</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cgroupnsModeInput">cgroupnsModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.containerReadRefreshTimeoutMillisecondsInput">containerReadRefreshTimeoutMillisecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpuSetInput">cpuSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpuSharesInput">cpuSharesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.destroyGraceSecondsInput">destroyGraceSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.devicesInput">devicesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsInput">dnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsOptsInput">dnsOptsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsSearchInput">dnsSearchInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.domainnameInput">domainnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.entrypointInput">entrypointInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.envInput">envInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.gpusInput">gpusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.groupAddInput">groupAddInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.healthcheckInput">healthcheckInput</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.hostInput">hostInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.initInput">initInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ipcModeInput">ipcModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.labelsInput">labelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logDriverInput">logDriverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logOptsInput">logOptsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logsInput">logsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.maxRetryCountInput">maxRetryCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.memoryInput">memoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.memorySwapInput">memorySwapInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.mountsInput">mountsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.mustRunInput">mustRunInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networkModeInput">networkModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networksAdvancedInput">networksAdvancedInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.pidModeInput">pidModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.portsInput">portsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.privilegedInput">privilegedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.publishAllPortsInput">publishAllPortsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.removeVolumesInput">removeVolumesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.restartInput">restartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.rmInput">rmInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.securityOptsInput">securityOptsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.shmSizeInput">shmSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.startInput">startInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stdinOpenInput">stdinOpenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stopSignalInput">stopSignalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stopTimeoutInput">stopTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.storageOptsInput">storageOptsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.sysctlsInput">sysctlsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.tmpfsInput">tmpfsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ttyInput">ttyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ulimitInput">ulimitInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.uploadInput">uploadInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.usernsModeInput">usernsModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.volumesInput">volumesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.waitInput">waitInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.waitTimeoutInput">waitTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.workingDirInput">workingDirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.attach">attach</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cgroupnsMode">cgroupnsMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.containerReadRefreshTimeoutMilliseconds">containerReadRefreshTimeoutMilliseconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpuSet">cpuSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.cpuShares">cpuShares</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.destroyGraceSeconds">destroyGraceSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dns">dns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsOpts">dnsOpts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.dnsSearch">dnsSearch</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.domainname">domainname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.entrypoint">entrypoint</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.env">env</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.gpus">gpus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.groupAdd">groupAdd</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.init">init</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.ipcMode">ipcMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logDriver">logDriver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logOpts">logOpts</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.logs">logs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.maxRetryCount">maxRetryCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.memory">memory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.memorySwap">memorySwap</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.mustRun">mustRun</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.networkMode">networkMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.pidMode">pidMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.privileged">privileged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.publishAllPorts">publishAllPorts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.removeVolumes">removeVolumes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.restart">restart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.rm">rm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.securityOpts">securityOpts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.shmSize">shmSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.start">start</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stdinOpen">stdinOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stopSignal">stopSignal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.stopTimeout">stopTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.storageOpts">storageOpts</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.sysctls">sysctls</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.tmpfs">tmpfs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.tty">tty</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.usernsMode">usernsMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.wait">wait</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.waitTimeout">waitTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.Container.property.workingDir">workingDir</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-docker.container.Container.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-docker.container.Container.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.Container.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-docker.container.Container.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-docker.container.Container.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-docker.container.Container.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-docker.container.Container.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.container.Container.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.container.Container.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.container.Container.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.container.Container.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.container.Container.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.container.Container.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.container.Container.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bridge`<sup>Required</sup> <a name="bridge" id="@cdktf/provider-docker.container.Container.property.bridge"></a>

```java
public java.lang.String getBridge();
```

- *Type:* java.lang.String

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-docker.container.Container.property.capabilities"></a>

```java
public ContainerCapabilitiesOutputReference getCapabilities();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference">ContainerCapabilitiesOutputReference</a>

---

##### `containerLogs`<sup>Required</sup> <a name="containerLogs" id="@cdktf/provider-docker.container.Container.property.containerLogs"></a>

```java
public java.lang.String getContainerLogs();
```

- *Type:* java.lang.String

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktf/provider-docker.container.Container.property.devices"></a>

```java
public ContainerDevicesList getDevices();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerDevicesList">ContainerDevicesList</a>

---

##### `exitCode`<sup>Required</sup> <a name="exitCode" id="@cdktf/provider-docker.container.Container.property.exitCode"></a>

```java
public java.lang.Number getExitCode();
```

- *Type:* java.lang.Number

---

##### `healthcheck`<sup>Required</sup> <a name="healthcheck" id="@cdktf/provider-docker.container.Container.property.healthcheck"></a>

```java
public ContainerHealthcheckOutputReference getHealthcheck();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference">ContainerHealthcheckOutputReference</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-docker.container.Container.property.host"></a>

```java
public ContainerHostList getHost();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHostList">ContainerHostList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.container.Container.property.labels"></a>

```java
public ContainerLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerLabelsList">ContainerLabelsList</a>

---

##### `mounts`<sup>Required</sup> <a name="mounts" id="@cdktf/provider-docker.container.Container.property.mounts"></a>

```java
public ContainerMountsList getMounts();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsList">ContainerMountsList</a>

---

##### `networkData`<sup>Required</sup> <a name="networkData" id="@cdktf/provider-docker.container.Container.property.networkData"></a>

```java
public ContainerNetworkDataList getNetworkData();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerNetworkDataList">ContainerNetworkDataList</a>

---

##### `networksAdvanced`<sup>Required</sup> <a name="networksAdvanced" id="@cdktf/provider-docker.container.Container.property.networksAdvanced"></a>

```java
public ContainerNetworksAdvancedList getNetworksAdvanced();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList">ContainerNetworksAdvancedList</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-docker.container.Container.property.ports"></a>

```java
public ContainerPortsList getPorts();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerPortsList">ContainerPortsList</a>

---

##### `ulimit`<sup>Required</sup> <a name="ulimit" id="@cdktf/provider-docker.container.Container.property.ulimit"></a>

```java
public ContainerUlimitList getUlimit();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerUlimitList">ContainerUlimitList</a>

---

##### `upload`<sup>Required</sup> <a name="upload" id="@cdktf/provider-docker.container.Container.property.upload"></a>

```java
public ContainerUploadList getUpload();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerUploadList">ContainerUploadList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-docker.container.Container.property.volumes"></a>

```java
public ContainerVolumesList getVolumes();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerVolumesList">ContainerVolumesList</a>

---

##### `attachInput`<sup>Optional</sup> <a name="attachInput" id="@cdktf/provider-docker.container.Container.property.attachInput"></a>

```java
public java.lang.Object getAttachInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-docker.container.Container.property.capabilitiesInput"></a>

```java
public ContainerCapabilities getCapabilitiesInput();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

---

##### `cgroupnsModeInput`<sup>Optional</sup> <a name="cgroupnsModeInput" id="@cdktf/provider-docker.container.Container.property.cgroupnsModeInput"></a>

```java
public java.lang.String getCgroupnsModeInput();
```

- *Type:* java.lang.String

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-docker.container.Container.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerReadRefreshTimeoutMillisecondsInput`<sup>Optional</sup> <a name="containerReadRefreshTimeoutMillisecondsInput" id="@cdktf/provider-docker.container.Container.property.containerReadRefreshTimeoutMillisecondsInput"></a>

```java
public java.lang.Number getContainerReadRefreshTimeoutMillisecondsInput();
```

- *Type:* java.lang.Number

---

##### `cpuSetInput`<sup>Optional</sup> <a name="cpuSetInput" id="@cdktf/provider-docker.container.Container.property.cpuSetInput"></a>

```java
public java.lang.String getCpuSetInput();
```

- *Type:* java.lang.String

---

##### `cpuSharesInput`<sup>Optional</sup> <a name="cpuSharesInput" id="@cdktf/provider-docker.container.Container.property.cpuSharesInput"></a>

```java
public java.lang.Number getCpuSharesInput();
```

- *Type:* java.lang.Number

---

##### `destroyGraceSecondsInput`<sup>Optional</sup> <a name="destroyGraceSecondsInput" id="@cdktf/provider-docker.container.Container.property.destroyGraceSecondsInput"></a>

```java
public java.lang.Number getDestroyGraceSecondsInput();
```

- *Type:* java.lang.Number

---

##### `devicesInput`<sup>Optional</sup> <a name="devicesInput" id="@cdktf/provider-docker.container.Container.property.devicesInput"></a>

```java
public java.lang.Object getDevicesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>>

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktf/provider-docker.container.Container.property.dnsInput"></a>

```java
public java.util.List<java.lang.String> getDnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsOptsInput`<sup>Optional</sup> <a name="dnsOptsInput" id="@cdktf/provider-docker.container.Container.property.dnsOptsInput"></a>

```java
public java.util.List<java.lang.String> getDnsOptsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsSearchInput`<sup>Optional</sup> <a name="dnsSearchInput" id="@cdktf/provider-docker.container.Container.property.dnsSearchInput"></a>

```java
public java.util.List<java.lang.String> getDnsSearchInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainnameInput`<sup>Optional</sup> <a name="domainnameInput" id="@cdktf/provider-docker.container.Container.property.domainnameInput"></a>

```java
public java.lang.String getDomainnameInput();
```

- *Type:* java.lang.String

---

##### `entrypointInput`<sup>Optional</sup> <a name="entrypointInput" id="@cdktf/provider-docker.container.Container.property.entrypointInput"></a>

```java
public java.util.List<java.lang.String> getEntrypointInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-docker.container.Container.property.envInput"></a>

```java
public java.util.List<java.lang.String> getEnvInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gpusInput`<sup>Optional</sup> <a name="gpusInput" id="@cdktf/provider-docker.container.Container.property.gpusInput"></a>

```java
public java.lang.String getGpusInput();
```

- *Type:* java.lang.String

---

##### `groupAddInput`<sup>Optional</sup> <a name="groupAddInput" id="@cdktf/provider-docker.container.Container.property.groupAddInput"></a>

```java
public java.util.List<java.lang.String> getGroupAddInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `healthcheckInput`<sup>Optional</sup> <a name="healthcheckInput" id="@cdktf/provider-docker.container.Container.property.healthcheckInput"></a>

```java
public ContainerHealthcheck getHealthcheckInput();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-docker.container.Container.property.hostInput"></a>

```java
public java.lang.Object getHostInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-docker.container.Container.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-docker.container.Container.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-docker.container.Container.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `initInput`<sup>Optional</sup> <a name="initInput" id="@cdktf/provider-docker.container.Container.property.initInput"></a>

```java
public java.lang.Object getInitInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipcModeInput`<sup>Optional</sup> <a name="ipcModeInput" id="@cdktf/provider-docker.container.Container.property.ipcModeInput"></a>

```java
public java.lang.String getIpcModeInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-docker.container.Container.property.labelsInput"></a>

```java
public java.lang.Object getLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>>

---

##### `logDriverInput`<sup>Optional</sup> <a name="logDriverInput" id="@cdktf/provider-docker.container.Container.property.logDriverInput"></a>

```java
public java.lang.String getLogDriverInput();
```

- *Type:* java.lang.String

---

##### `logOptsInput`<sup>Optional</sup> <a name="logOptsInput" id="@cdktf/provider-docker.container.Container.property.logOptsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLogOptsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `logsInput`<sup>Optional</sup> <a name="logsInput" id="@cdktf/provider-docker.container.Container.property.logsInput"></a>

```java
public java.lang.Object getLogsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxRetryCountInput`<sup>Optional</sup> <a name="maxRetryCountInput" id="@cdktf/provider-docker.container.Container.property.maxRetryCountInput"></a>

```java
public java.lang.Number getMaxRetryCountInput();
```

- *Type:* java.lang.Number

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-docker.container.Container.property.memoryInput"></a>

```java
public java.lang.Number getMemoryInput();
```

- *Type:* java.lang.Number

---

##### `memorySwapInput`<sup>Optional</sup> <a name="memorySwapInput" id="@cdktf/provider-docker.container.Container.property.memorySwapInput"></a>

```java
public java.lang.Number getMemorySwapInput();
```

- *Type:* java.lang.Number

---

##### `mountsInput`<sup>Optional</sup> <a name="mountsInput" id="@cdktf/provider-docker.container.Container.property.mountsInput"></a>

```java
public java.lang.Object getMountsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>>

---

##### `mustRunInput`<sup>Optional</sup> <a name="mustRunInput" id="@cdktf/provider-docker.container.Container.property.mustRunInput"></a>

```java
public java.lang.Object getMustRunInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.container.Container.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkModeInput`<sup>Optional</sup> <a name="networkModeInput" id="@cdktf/provider-docker.container.Container.property.networkModeInput"></a>

```java
public java.lang.String getNetworkModeInput();
```

- *Type:* java.lang.String

---

##### `networksAdvancedInput`<sup>Optional</sup> <a name="networksAdvancedInput" id="@cdktf/provider-docker.container.Container.property.networksAdvancedInput"></a>

```java
public java.lang.Object getNetworksAdvancedInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>>

---

##### `pidModeInput`<sup>Optional</sup> <a name="pidModeInput" id="@cdktf/provider-docker.container.Container.property.pidModeInput"></a>

```java
public java.lang.String getPidModeInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-docker.container.Container.property.portsInput"></a>

```java
public java.lang.Object getPortsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>>

---

##### `privilegedInput`<sup>Optional</sup> <a name="privilegedInput" id="@cdktf/provider-docker.container.Container.property.privilegedInput"></a>

```java
public java.lang.Object getPrivilegedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publishAllPortsInput`<sup>Optional</sup> <a name="publishAllPortsInput" id="@cdktf/provider-docker.container.Container.property.publishAllPortsInput"></a>

```java
public java.lang.Object getPublishAllPortsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-docker.container.Container.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `removeVolumesInput`<sup>Optional</sup> <a name="removeVolumesInput" id="@cdktf/provider-docker.container.Container.property.removeVolumesInput"></a>

```java
public java.lang.Object getRemoveVolumesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restartInput`<sup>Optional</sup> <a name="restartInput" id="@cdktf/provider-docker.container.Container.property.restartInput"></a>

```java
public java.lang.String getRestartInput();
```

- *Type:* java.lang.String

---

##### `rmInput`<sup>Optional</sup> <a name="rmInput" id="@cdktf/provider-docker.container.Container.property.rmInput"></a>

```java
public java.lang.Object getRmInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-docker.container.Container.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `securityOptsInput`<sup>Optional</sup> <a name="securityOptsInput" id="@cdktf/provider-docker.container.Container.property.securityOptsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityOptsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shmSizeInput`<sup>Optional</sup> <a name="shmSizeInput" id="@cdktf/provider-docker.container.Container.property.shmSizeInput"></a>

```java
public java.lang.Number getShmSizeInput();
```

- *Type:* java.lang.Number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-docker.container.Container.property.startInput"></a>

```java
public java.lang.Object getStartInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stdinOpenInput`<sup>Optional</sup> <a name="stdinOpenInput" id="@cdktf/provider-docker.container.Container.property.stdinOpenInput"></a>

```java
public java.lang.Object getStdinOpenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stopSignalInput`<sup>Optional</sup> <a name="stopSignalInput" id="@cdktf/provider-docker.container.Container.property.stopSignalInput"></a>

```java
public java.lang.String getStopSignalInput();
```

- *Type:* java.lang.String

---

##### `stopTimeoutInput`<sup>Optional</sup> <a name="stopTimeoutInput" id="@cdktf/provider-docker.container.Container.property.stopTimeoutInput"></a>

```java
public java.lang.Number getStopTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `storageOptsInput`<sup>Optional</sup> <a name="storageOptsInput" id="@cdktf/provider-docker.container.Container.property.storageOptsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStorageOptsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sysctlsInput`<sup>Optional</sup> <a name="sysctlsInput" id="@cdktf/provider-docker.container.Container.property.sysctlsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSysctlsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tmpfsInput`<sup>Optional</sup> <a name="tmpfsInput" id="@cdktf/provider-docker.container.Container.property.tmpfsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTmpfsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ttyInput`<sup>Optional</sup> <a name="ttyInput" id="@cdktf/provider-docker.container.Container.property.ttyInput"></a>

```java
public java.lang.Object getTtyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ulimitInput`<sup>Optional</sup> <a name="ulimitInput" id="@cdktf/provider-docker.container.Container.property.ulimitInput"></a>

```java
public java.lang.Object getUlimitInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>>

---

##### `uploadInput`<sup>Optional</sup> <a name="uploadInput" id="@cdktf/provider-docker.container.Container.property.uploadInput"></a>

```java
public java.lang.Object getUploadInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-docker.container.Container.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `usernsModeInput`<sup>Optional</sup> <a name="usernsModeInput" id="@cdktf/provider-docker.container.Container.property.usernsModeInput"></a>

```java
public java.lang.String getUsernsModeInput();
```

- *Type:* java.lang.String

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktf/provider-docker.container.Container.property.volumesInput"></a>

```java
public java.lang.Object getVolumesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>>

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktf/provider-docker.container.Container.property.waitInput"></a>

```java
public java.lang.Object getWaitInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `waitTimeoutInput`<sup>Optional</sup> <a name="waitTimeoutInput" id="@cdktf/provider-docker.container.Container.property.waitTimeoutInput"></a>

```java
public java.lang.Number getWaitTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `workingDirInput`<sup>Optional</sup> <a name="workingDirInput" id="@cdktf/provider-docker.container.Container.property.workingDirInput"></a>

```java
public java.lang.String getWorkingDirInput();
```

- *Type:* java.lang.String

---

##### `attach`<sup>Required</sup> <a name="attach" id="@cdktf/provider-docker.container.Container.property.attach"></a>

```java
public java.lang.Object getAttach();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cgroupnsMode`<sup>Required</sup> <a name="cgroupnsMode" id="@cdktf/provider-docker.container.Container.property.cgroupnsMode"></a>

```java
public java.lang.String getCgroupnsMode();
```

- *Type:* java.lang.String

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-docker.container.Container.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerReadRefreshTimeoutMilliseconds`<sup>Required</sup> <a name="containerReadRefreshTimeoutMilliseconds" id="@cdktf/provider-docker.container.Container.property.containerReadRefreshTimeoutMilliseconds"></a>

```java
public java.lang.Number getContainerReadRefreshTimeoutMilliseconds();
```

- *Type:* java.lang.Number

---

##### `cpuSet`<sup>Required</sup> <a name="cpuSet" id="@cdktf/provider-docker.container.Container.property.cpuSet"></a>

```java
public java.lang.String getCpuSet();
```

- *Type:* java.lang.String

---

##### `cpuShares`<sup>Required</sup> <a name="cpuShares" id="@cdktf/provider-docker.container.Container.property.cpuShares"></a>

```java
public java.lang.Number getCpuShares();
```

- *Type:* java.lang.Number

---

##### `destroyGraceSeconds`<sup>Required</sup> <a name="destroyGraceSeconds" id="@cdktf/provider-docker.container.Container.property.destroyGraceSeconds"></a>

```java
public java.lang.Number getDestroyGraceSeconds();
```

- *Type:* java.lang.Number

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-docker.container.Container.property.dns"></a>

```java
public java.util.List<java.lang.String> getDns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsOpts`<sup>Required</sup> <a name="dnsOpts" id="@cdktf/provider-docker.container.Container.property.dnsOpts"></a>

```java
public java.util.List<java.lang.String> getDnsOpts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsSearch`<sup>Required</sup> <a name="dnsSearch" id="@cdktf/provider-docker.container.Container.property.dnsSearch"></a>

```java
public java.util.List<java.lang.String> getDnsSearch();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainname`<sup>Required</sup> <a name="domainname" id="@cdktf/provider-docker.container.Container.property.domainname"></a>

```java
public java.lang.String getDomainname();
```

- *Type:* java.lang.String

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-docker.container.Container.property.entrypoint"></a>

```java
public java.util.List<java.lang.String> getEntrypoint();
```

- *Type:* java.util.List<java.lang.String>

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-docker.container.Container.property.env"></a>

```java
public java.util.List<java.lang.String> getEnv();
```

- *Type:* java.util.List<java.lang.String>

---

##### `gpus`<sup>Required</sup> <a name="gpus" id="@cdktf/provider-docker.container.Container.property.gpus"></a>

```java
public java.lang.String getGpus();
```

- *Type:* java.lang.String

---

##### `groupAdd`<sup>Required</sup> <a name="groupAdd" id="@cdktf/provider-docker.container.Container.property.groupAdd"></a>

```java
public java.util.List<java.lang.String> getGroupAdd();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-docker.container.Container.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-docker.container.Container.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.container.Container.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `init`<sup>Required</sup> <a name="init" id="@cdktf/provider-docker.container.Container.property.init"></a>

```java
public java.lang.Object getInit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipcMode`<sup>Required</sup> <a name="ipcMode" id="@cdktf/provider-docker.container.Container.property.ipcMode"></a>

```java
public java.lang.String getIpcMode();
```

- *Type:* java.lang.String

---

##### `logDriver`<sup>Required</sup> <a name="logDriver" id="@cdktf/provider-docker.container.Container.property.logDriver"></a>

```java
public java.lang.String getLogDriver();
```

- *Type:* java.lang.String

---

##### `logOpts`<sup>Required</sup> <a name="logOpts" id="@cdktf/provider-docker.container.Container.property.logOpts"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLogOpts();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/provider-docker.container.Container.property.logs"></a>

```java
public java.lang.Object getLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxRetryCount`<sup>Required</sup> <a name="maxRetryCount" id="@cdktf/provider-docker.container.Container.property.maxRetryCount"></a>

```java
public java.lang.Number getMaxRetryCount();
```

- *Type:* java.lang.Number

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-docker.container.Container.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

---

##### `memorySwap`<sup>Required</sup> <a name="memorySwap" id="@cdktf/provider-docker.container.Container.property.memorySwap"></a>

```java
public java.lang.Number getMemorySwap();
```

- *Type:* java.lang.Number

---

##### `mustRun`<sup>Required</sup> <a name="mustRun" id="@cdktf/provider-docker.container.Container.property.mustRun"></a>

```java
public java.lang.Object getMustRun();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.Container.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktf/provider-docker.container.Container.property.networkMode"></a>

```java
public java.lang.String getNetworkMode();
```

- *Type:* java.lang.String

---

##### `pidMode`<sup>Required</sup> <a name="pidMode" id="@cdktf/provider-docker.container.Container.property.pidMode"></a>

```java
public java.lang.String getPidMode();
```

- *Type:* java.lang.String

---

##### `privileged`<sup>Required</sup> <a name="privileged" id="@cdktf/provider-docker.container.Container.property.privileged"></a>

```java
public java.lang.Object getPrivileged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publishAllPorts`<sup>Required</sup> <a name="publishAllPorts" id="@cdktf/provider-docker.container.Container.property.publishAllPorts"></a>

```java
public java.lang.Object getPublishAllPorts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-docker.container.Container.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `removeVolumes`<sup>Required</sup> <a name="removeVolumes" id="@cdktf/provider-docker.container.Container.property.removeVolumes"></a>

```java
public java.lang.Object getRemoveVolumes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restart`<sup>Required</sup> <a name="restart" id="@cdktf/provider-docker.container.Container.property.restart"></a>

```java
public java.lang.String getRestart();
```

- *Type:* java.lang.String

---

##### `rm`<sup>Required</sup> <a name="rm" id="@cdktf/provider-docker.container.Container.property.rm"></a>

```java
public java.lang.Object getRm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-docker.container.Container.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `securityOpts`<sup>Required</sup> <a name="securityOpts" id="@cdktf/provider-docker.container.Container.property.securityOpts"></a>

```java
public java.util.List<java.lang.String> getSecurityOpts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shmSize`<sup>Required</sup> <a name="shmSize" id="@cdktf/provider-docker.container.Container.property.shmSize"></a>

```java
public java.lang.Number getShmSize();
```

- *Type:* java.lang.Number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-docker.container.Container.property.start"></a>

```java
public java.lang.Object getStart();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stdinOpen`<sup>Required</sup> <a name="stdinOpen" id="@cdktf/provider-docker.container.Container.property.stdinOpen"></a>

```java
public java.lang.Object getStdinOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stopSignal`<sup>Required</sup> <a name="stopSignal" id="@cdktf/provider-docker.container.Container.property.stopSignal"></a>

```java
public java.lang.String getStopSignal();
```

- *Type:* java.lang.String

---

##### `stopTimeout`<sup>Required</sup> <a name="stopTimeout" id="@cdktf/provider-docker.container.Container.property.stopTimeout"></a>

```java
public java.lang.Number getStopTimeout();
```

- *Type:* java.lang.Number

---

##### `storageOpts`<sup>Required</sup> <a name="storageOpts" id="@cdktf/provider-docker.container.Container.property.storageOpts"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStorageOpts();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sysctls`<sup>Required</sup> <a name="sysctls" id="@cdktf/provider-docker.container.Container.property.sysctls"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSysctls();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tmpfs`<sup>Required</sup> <a name="tmpfs" id="@cdktf/provider-docker.container.Container.property.tmpfs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTmpfs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tty`<sup>Required</sup> <a name="tty" id="@cdktf/provider-docker.container.Container.property.tty"></a>

```java
public java.lang.Object getTty();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-docker.container.Container.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `usernsMode`<sup>Required</sup> <a name="usernsMode" id="@cdktf/provider-docker.container.Container.property.usernsMode"></a>

```java
public java.lang.String getUsernsMode();
```

- *Type:* java.lang.String

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-docker.container.Container.property.wait"></a>

```java
public java.lang.Object getWait();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `waitTimeout`<sup>Required</sup> <a name="waitTimeout" id="@cdktf/provider-docker.container.Container.property.waitTimeout"></a>

```java
public java.lang.Number getWaitTimeout();
```

- *Type:* java.lang.Number

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktf/provider-docker.container.Container.property.workingDir"></a>

```java
public java.lang.String getWorkingDir();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.Container.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-docker.container.Container.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerCapabilities <a name="ContainerCapabilities" id="@cdktf/provider-docker.container.ContainerCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerCapabilities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerCapabilities;

ContainerCapabilities.builder()
//  .add(java.util.List<java.lang.String>)
//  .drop(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities.property.add">add</a></code> | <code>java.util.List<java.lang.String></code> | List of linux capabilities to add. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities.property.drop">drop</a></code> | <code>java.util.List<java.lang.String></code> | List of linux capabilities to drop. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-docker.container.ContainerCapabilities.property.add"></a>

```java
public java.util.List<java.lang.String> getAdd();
```

- *Type:* java.util.List<java.lang.String>

List of linux capabilities to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#add Container#add}

---

##### `drop`<sup>Optional</sup> <a name="drop" id="@cdktf/provider-docker.container.ContainerCapabilities.property.drop"></a>

```java
public java.util.List<java.lang.String> getDrop();
```

- *Type:* java.util.List<java.lang.String>

List of linux capabilities to drop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#drop Container#drop}

---

### ContainerConfig <a name="ContainerConfig" id="@cdktf/provider-docker.container.ContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerConfig;

ContainerConfig.builder()
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
    .image(java.lang.String)
    .name(java.lang.String)
//  .attach(java.lang.Boolean)
//  .attach(IResolvable)
//  .capabilities(ContainerCapabilities)
//  .cgroupnsMode(java.lang.String)
//  .command(java.util.List<java.lang.String>)
//  .containerReadRefreshTimeoutMilliseconds(java.lang.Number)
//  .cpuSet(java.lang.String)
//  .cpuShares(java.lang.Number)
//  .destroyGraceSeconds(java.lang.Number)
//  .devices(IResolvable)
//  .devices(java.util.List<ContainerDevices>)
//  .dns(java.util.List<java.lang.String>)
//  .dnsOpts(java.util.List<java.lang.String>)
//  .dnsSearch(java.util.List<java.lang.String>)
//  .domainname(java.lang.String)
//  .entrypoint(java.util.List<java.lang.String>)
//  .env(java.util.List<java.lang.String>)
//  .gpus(java.lang.String)
//  .groupAdd(java.util.List<java.lang.String>)
//  .healthcheck(ContainerHealthcheck)
//  .host(IResolvable)
//  .host(java.util.List<ContainerHost>)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .init(java.lang.Boolean)
//  .init(IResolvable)
//  .ipcMode(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<ContainerLabels>)
//  .logDriver(java.lang.String)
//  .logOpts(java.util.Map<java.lang.String, java.lang.String>)
//  .logs(java.lang.Boolean)
//  .logs(IResolvable)
//  .maxRetryCount(java.lang.Number)
//  .memory(java.lang.Number)
//  .memorySwap(java.lang.Number)
//  .mounts(IResolvable)
//  .mounts(java.util.List<ContainerMounts>)
//  .mustRun(java.lang.Boolean)
//  .mustRun(IResolvable)
//  .networkMode(java.lang.String)
//  .networksAdvanced(IResolvable)
//  .networksAdvanced(java.util.List<ContainerNetworksAdvanced>)
//  .pidMode(java.lang.String)
//  .ports(IResolvable)
//  .ports(java.util.List<ContainerPorts>)
//  .privileged(java.lang.Boolean)
//  .privileged(IResolvable)
//  .publishAllPorts(java.lang.Boolean)
//  .publishAllPorts(IResolvable)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .removeVolumes(java.lang.Boolean)
//  .removeVolumes(IResolvable)
//  .restart(java.lang.String)
//  .rm(java.lang.Boolean)
//  .rm(IResolvable)
//  .runtime(java.lang.String)
//  .securityOpts(java.util.List<java.lang.String>)
//  .shmSize(java.lang.Number)
//  .start(java.lang.Boolean)
//  .start(IResolvable)
//  .stdinOpen(java.lang.Boolean)
//  .stdinOpen(IResolvable)
//  .stopSignal(java.lang.String)
//  .stopTimeout(java.lang.Number)
//  .storageOpts(java.util.Map<java.lang.String, java.lang.String>)
//  .sysctls(java.util.Map<java.lang.String, java.lang.String>)
//  .tmpfs(java.util.Map<java.lang.String, java.lang.String>)
//  .tty(java.lang.Boolean)
//  .tty(IResolvable)
//  .ulimit(IResolvable)
//  .ulimit(java.util.List<ContainerUlimit>)
//  .upload(IResolvable)
//  .upload(java.util.List<ContainerUpload>)
//  .user(java.lang.String)
//  .usernsMode(java.lang.String)
//  .volumes(IResolvable)
//  .volumes(java.util.List<ContainerVolumes>)
//  .wait(java.lang.Boolean)
//  .wait(IResolvable)
//  .waitTimeout(java.lang.Number)
//  .workingDir(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.image">image</a></code> | <code>java.lang.String</code> | The ID of the image to back this container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.attach">attach</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a></code> | capabilities block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.cgroupnsMode">cgroupnsMode</a></code> | <code>java.lang.String</code> | Cgroup namespace mode to use for the container. Possible values are: `private`, `host`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | The command to use to start the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.containerReadRefreshTimeoutMilliseconds">containerReadRefreshTimeoutMilliseconds</a></code> | <code>java.lang.Number</code> | The total number of milliseconds to wait for the container to reach status 'running'. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.cpuSet">cpuSet</a></code> | <code>java.lang.String</code> | A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.cpuShares">cpuShares</a></code> | <code>java.lang.Number</code> | CPU shares (relative weight) for the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.destroyGraceSeconds">destroyGraceSeconds</a></code> | <code>java.lang.Number</code> | If defined will attempt to stop the container before destroying. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.devices">devices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>></code> | devices block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.dns">dns</a></code> | <code>java.util.List<java.lang.String></code> | DNS servers to use. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.dnsOpts">dnsOpts</a></code> | <code>java.util.List<java.lang.String></code> | DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.dnsSearch">dnsSearch</a></code> | <code>java.util.List<java.lang.String></code> | DNS search domains that are used when bare unqualified hostnames are used inside of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.domainname">domainname</a></code> | <code>java.lang.String</code> | Domain name of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.entrypoint">entrypoint</a></code> | <code>java.util.List<java.lang.String></code> | The command to use as the Entrypoint for the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.env">env</a></code> | <code>java.util.List<java.lang.String></code> | Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.gpus">gpus</a></code> | <code>java.lang.String</code> | GPU devices to add to the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.groupAdd">groupAdd</a></code> | <code>java.util.List<java.lang.String></code> | Additional groups for the container user. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.healthcheck">healthcheck</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a></code> | healthcheck block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.host">host</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>></code> | host block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#id Container#id}. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.init">init</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Configured whether an init process should be injected for this container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.ipcMode">ipcMode</a></code> | <code>java.lang.String</code> | IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name\|id>` or `host`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.logDriver">logDriver</a></code> | <code>java.lang.String</code> | The logging driver to use for the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.logOpts">logOpts</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Key/value pairs to use as options for the logging driver. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.logs">logs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Save the container logs (`attach` must be enabled). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.maxRetryCount">maxRetryCount</a></code> | <code>java.lang.Number</code> | The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.memory">memory</a></code> | <code>java.lang.Number</code> | The memory limit for the container in MBs. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.memorySwap">memorySwap</a></code> | <code>java.lang.Number</code> | The total memory limit (memory + swap) for the container in MBs. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.mounts">mounts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>></code> | mounts block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.mustRun">mustRun</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, then the Docker container will be kept running. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.networkMode">networkMode</a></code> | <code>java.lang.String</code> | Network mode of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.networksAdvanced">networksAdvanced</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>></code> | networks_advanced block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.pidMode">pidMode</a></code> | <code>java.lang.String</code> | he PID (Process) Namespace mode for the container. Either `container:<name\|id>` or `host`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.ports">ports</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>></code> | ports block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.privileged">privileged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, the container runs in privileged mode. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.publishAllPorts">publishAllPorts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Publish all ports of the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, the container will be started as readonly. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.removeVolumes">removeVolumes</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.restart">restart</a></code> | <code>java.lang.String</code> | The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.rm">rm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, then the container will be automatically removed when it exits. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.runtime">runtime</a></code> | <code>java.lang.String</code> | Runtime to use for the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.securityOpts">securityOpts</a></code> | <code>java.util.List<java.lang.String></code> | List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.shmSize">shmSize</a></code> | <code>java.lang.Number</code> | Size of `/dev/shm` in MBs. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.start">start</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, then the Docker container will be started after creation. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.stdinOpen">stdinOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.stopSignal">stopSignal</a></code> | <code>java.lang.String</code> | Signal to stop a container (default `SIGTERM`). |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.stopTimeout">stopTimeout</a></code> | <code>java.lang.Number</code> | Timeout (in seconds) to stop a container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.storageOpts">storageOpts</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Key/value pairs for the storage driver options, e.g. `size`: `120G`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.sysctls">sysctls</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of kernel parameters (sysctls) to set in the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.tmpfs">tmpfs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.tty">tty</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.ulimit">ulimit</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>></code> | ulimit block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.upload">upload</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>></code> | upload block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.user">user</a></code> | <code>java.lang.String</code> | User used for run the first process. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.usernsMode">usernsMode</a></code> | <code>java.lang.String</code> | Sets the usernamespace mode for the container when usernamespace remapping option is enabled. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.volumes">volumes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>></code> | volumes block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.wait">wait</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, then the Docker container is waited for being healthy state after creation. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.waitTimeout">waitTimeout</a></code> | <code>java.lang.Number</code> | The timeout in seconds to wait the container to be healthy after creation. Defaults to `60`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerConfig.property.workingDir">workingDir</a></code> | <code>java.lang.String</code> | The working directory for commands to run in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-docker.container.ContainerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-docker.container.ContainerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-docker.container.ContainerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-docker.container.ContainerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-docker.container.ContainerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-docker.container.ContainerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-docker.container.ContainerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-docker.container.ContainerConfig.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

The ID of the image to back this container.

The easiest way to get this value is to use the `docker_image` resource as is shown in the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#image Container#image}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.ContainerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#name Container#name}

---

##### `attach`<sup>Optional</sup> <a name="attach" id="@cdktf/provider-docker.container.ContainerConfig.property.attach"></a>

```java
public java.lang.Object getAttach();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true` attach to the container after its creation and waits the end of its execution. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#attach Container#attach}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-docker.container.ContainerConfig.property.capabilities"></a>

```java
public ContainerCapabilities getCapabilities();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#capabilities Container#capabilities}

---

##### `cgroupnsMode`<sup>Optional</sup> <a name="cgroupnsMode" id="@cdktf/provider-docker.container.ContainerConfig.property.cgroupnsMode"></a>

```java
public java.lang.String getCgroupnsMode();
```

- *Type:* java.lang.String

Cgroup namespace mode to use for the container. Possible values are: `private`, `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#cgroupns_mode Container#cgroupns_mode}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-docker.container.ContainerConfig.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

The command to use to start the container.

For example, to run `/usr/bin/myprogram -f baz.conf` set the command to be `["/usr/bin/myprogram","-f","baz.con"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#command Container#command}

---

##### `containerReadRefreshTimeoutMilliseconds`<sup>Optional</sup> <a name="containerReadRefreshTimeoutMilliseconds" id="@cdktf/provider-docker.container.ContainerConfig.property.containerReadRefreshTimeoutMilliseconds"></a>

```java
public java.lang.Number getContainerReadRefreshTimeoutMilliseconds();
```

- *Type:* java.lang.Number

The total number of milliseconds to wait for the container to reach status 'running'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#container_read_refresh_timeout_milliseconds Container#container_read_refresh_timeout_milliseconds}

---

##### `cpuSet`<sup>Optional</sup> <a name="cpuSet" id="@cdktf/provider-docker.container.ContainerConfig.property.cpuSet"></a>

```java
public java.lang.String getCpuSet();
```

- *Type:* java.lang.String

A comma-separated list or hyphen-separated range of CPUs a container can use, e.g. `0-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#cpu_set Container#cpu_set}

---

##### `cpuShares`<sup>Optional</sup> <a name="cpuShares" id="@cdktf/provider-docker.container.ContainerConfig.property.cpuShares"></a>

```java
public java.lang.Number getCpuShares();
```

- *Type:* java.lang.Number

CPU shares (relative weight) for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#cpu_shares Container#cpu_shares}

---

##### `destroyGraceSeconds`<sup>Optional</sup> <a name="destroyGraceSeconds" id="@cdktf/provider-docker.container.ContainerConfig.property.destroyGraceSeconds"></a>

```java
public java.lang.Number getDestroyGraceSeconds();
```

- *Type:* java.lang.Number

If defined will attempt to stop the container before destroying.

Container will be destroyed after `n` seconds or on successful stop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#destroy_grace_seconds Container#destroy_grace_seconds}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-docker.container.ContainerConfig.property.devices"></a>

```java
public java.lang.Object getDevices();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>>

devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#devices Container#devices}

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-docker.container.ContainerConfig.property.dns"></a>

```java
public java.util.List<java.lang.String> getDns();
```

- *Type:* java.util.List<java.lang.String>

DNS servers to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#dns Container#dns}

---

##### `dnsOpts`<sup>Optional</sup> <a name="dnsOpts" id="@cdktf/provider-docker.container.ContainerConfig.property.dnsOpts"></a>

```java
public java.util.List<java.lang.String> getDnsOpts();
```

- *Type:* java.util.List<java.lang.String>

DNS options used by the DNS provider(s), see `resolv.conf` documentation for valid list of options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#dns_opts Container#dns_opts}

---

##### `dnsSearch`<sup>Optional</sup> <a name="dnsSearch" id="@cdktf/provider-docker.container.ContainerConfig.property.dnsSearch"></a>

```java
public java.util.List<java.lang.String> getDnsSearch();
```

- *Type:* java.util.List<java.lang.String>

DNS search domains that are used when bare unqualified hostnames are used inside of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#dns_search Container#dns_search}

---

##### `domainname`<sup>Optional</sup> <a name="domainname" id="@cdktf/provider-docker.container.ContainerConfig.property.domainname"></a>

```java
public java.lang.String getDomainname();
```

- *Type:* java.lang.String

Domain name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#domainname Container#domainname}

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@cdktf/provider-docker.container.ContainerConfig.property.entrypoint"></a>

```java
public java.util.List<java.lang.String> getEntrypoint();
```

- *Type:* java.util.List<java.lang.String>

The command to use as the Entrypoint for the container.

The Entrypoint allows you to configure a container to run as an executable. For example, to run `/usr/bin/myprogram` when starting a container, set the entrypoint to be `"/usr/bin/myprogra"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#entrypoint Container#entrypoint}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-docker.container.ContainerConfig.property.env"></a>

```java
public java.util.List<java.lang.String> getEnv();
```

- *Type:* java.util.List<java.lang.String>

Environment variables to set in the form of `KEY=VALUE`, e.g. `DEBUG=0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#env Container#env}

---

##### `gpus`<sup>Optional</sup> <a name="gpus" id="@cdktf/provider-docker.container.ContainerConfig.property.gpus"></a>

```java
public java.lang.String getGpus();
```

- *Type:* java.lang.String

GPU devices to add to the container.

Currently, only the value `all` is supported. Passing any other value will result in unexpected behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#gpus Container#gpus}

---

##### `groupAdd`<sup>Optional</sup> <a name="groupAdd" id="@cdktf/provider-docker.container.ContainerConfig.property.groupAdd"></a>

```java
public java.util.List<java.lang.String> getGroupAdd();
```

- *Type:* java.util.List<java.lang.String>

Additional groups for the container user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#group_add Container#group_add}

---

##### `healthcheck`<sup>Optional</sup> <a name="healthcheck" id="@cdktf/provider-docker.container.ContainerConfig.property.healthcheck"></a>

```java
public ContainerHealthcheck getHealthcheck();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

healthcheck block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#healthcheck Container#healthcheck}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-docker.container.ContainerConfig.property.host"></a>

```java
public java.lang.Object getHost();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#host Container#host}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-docker.container.ContainerConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Hostname of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#hostname Container#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-docker.container.ContainerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#id Container#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `init`<sup>Optional</sup> <a name="init" id="@cdktf/provider-docker.container.ContainerConfig.property.init"></a>

```java
public java.lang.Object getInit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Configured whether an init process should be injected for this container.

If unset this will default to the `dockerd` defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#init Container#init}

---

##### `ipcMode`<sup>Optional</sup> <a name="ipcMode" id="@cdktf/provider-docker.container.ContainerConfig.property.ipcMode"></a>

```java
public java.lang.String getIpcMode();
```

- *Type:* java.lang.String

IPC sharing mode for the container. Possible values are: `none`, `private`, `shareable`, `container:<name|id>` or `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ipc_mode Container#ipc_mode}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.container.ContainerConfig.property.labels"></a>

```java
public java.lang.Object getLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#labels Container#labels}

---

##### `logDriver`<sup>Optional</sup> <a name="logDriver" id="@cdktf/provider-docker.container.ContainerConfig.property.logDriver"></a>

```java
public java.lang.String getLogDriver();
```

- *Type:* java.lang.String

The logging driver to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#log_driver Container#log_driver}

---

##### `logOpts`<sup>Optional</sup> <a name="logOpts" id="@cdktf/provider-docker.container.ContainerConfig.property.logOpts"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLogOpts();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Key/value pairs to use as options for the logging driver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#log_opts Container#log_opts}

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-docker.container.ContainerConfig.property.logs"></a>

```java
public java.lang.Object getLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Save the container logs (`attach` must be enabled). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#logs Container#logs}

---

##### `maxRetryCount`<sup>Optional</sup> <a name="maxRetryCount" id="@cdktf/provider-docker.container.ContainerConfig.property.maxRetryCount"></a>

```java
public java.lang.Number getMaxRetryCount();
```

- *Type:* java.lang.Number

The maximum amount of times to an attempt a restart when `restart` is set to 'on-failure'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#max_retry_count Container#max_retry_count}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-docker.container.ContainerConfig.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

The memory limit for the container in MBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#memory Container#memory}

---

##### `memorySwap`<sup>Optional</sup> <a name="memorySwap" id="@cdktf/provider-docker.container.ContainerConfig.property.memorySwap"></a>

```java
public java.lang.Number getMemorySwap();
```

- *Type:* java.lang.Number

The total memory limit (memory + swap) for the container in MBs.

This setting may compute to `-1` after `terraform apply` if the target host doesn't support memory swap, when that is the case docker will use a soft limitation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#memory_swap Container#memory_swap}

---

##### `mounts`<sup>Optional</sup> <a name="mounts" id="@cdktf/provider-docker.container.ContainerConfig.property.mounts"></a>

```java
public java.lang.Object getMounts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>>

mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#mounts Container#mounts}

---

##### `mustRun`<sup>Optional</sup> <a name="mustRun" id="@cdktf/provider-docker.container.ContainerConfig.property.mustRun"></a>

```java
public java.lang.Object getMustRun();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, then the Docker container will be kept running.

If `false`, then as long as the container exists, Terraform assumes it is successful. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#must_run Container#must_run}

---

##### `networkMode`<sup>Optional</sup> <a name="networkMode" id="@cdktf/provider-docker.container.ContainerConfig.property.networkMode"></a>

```java
public java.lang.String getNetworkMode();
```

- *Type:* java.lang.String

Network mode of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#network_mode Container#network_mode}

---

##### `networksAdvanced`<sup>Optional</sup> <a name="networksAdvanced" id="@cdktf/provider-docker.container.ContainerConfig.property.networksAdvanced"></a>

```java
public java.lang.Object getNetworksAdvanced();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>>

networks_advanced block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#networks_advanced Container#networks_advanced}

---

##### `pidMode`<sup>Optional</sup> <a name="pidMode" id="@cdktf/provider-docker.container.ContainerConfig.property.pidMode"></a>

```java
public java.lang.String getPidMode();
```

- *Type:* java.lang.String

he PID (Process) Namespace mode for the container. Either `container:<name|id>` or `host`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#pid_mode Container#pid_mode}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-docker.container.ContainerConfig.property.ports"></a>

```java
public java.lang.Object getPorts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>>

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ports Container#ports}

---

##### `privileged`<sup>Optional</sup> <a name="privileged" id="@cdktf/provider-docker.container.ContainerConfig.property.privileged"></a>

```java
public java.lang.Object getPrivileged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, the container runs in privileged mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#privileged Container#privileged}

---

##### `publishAllPorts`<sup>Optional</sup> <a name="publishAllPorts" id="@cdktf/provider-docker.container.ContainerConfig.property.publishAllPorts"></a>

```java
public java.lang.Object getPublishAllPorts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Publish all ports of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#publish_all_ports Container#publish_all_ports}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-docker.container.ContainerConfig.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, the container will be started as readonly. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#read_only Container#read_only}

---

##### `removeVolumes`<sup>Optional</sup> <a name="removeVolumes" id="@cdktf/provider-docker.container.ContainerConfig.property.removeVolumes"></a>

```java
public java.lang.Object getRemoveVolumes();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, it will remove anonymous volumes associated with the container. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#remove_volumes Container#remove_volumes}

---

##### `restart`<sup>Optional</sup> <a name="restart" id="@cdktf/provider-docker.container.ContainerConfig.property.restart"></a>

```java
public java.lang.String getRestart();
```

- *Type:* java.lang.String

The restart policy for the container. Must be one of 'no', 'on-failure', 'always', 'unless-stopped'. Defaults to `no`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#restart Container#restart}

---

##### `rm`<sup>Optional</sup> <a name="rm" id="@cdktf/provider-docker.container.ContainerConfig.property.rm"></a>

```java
public java.lang.Object getRm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, then the container will be automatically removed when it exits. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#rm Container#rm}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-docker.container.ContainerConfig.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

Runtime to use for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#runtime Container#runtime}

---

##### `securityOpts`<sup>Optional</sup> <a name="securityOpts" id="@cdktf/provider-docker.container.ContainerConfig.property.securityOpts"></a>

```java
public java.util.List<java.lang.String> getSecurityOpts();
```

- *Type:* java.util.List<java.lang.String>

List of string values to customize labels for MLS systems, such as SELinux. See https://docs.docker.com/engine/reference/run/#security-configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#security_opts Container#security_opts}

---

##### `shmSize`<sup>Optional</sup> <a name="shmSize" id="@cdktf/provider-docker.container.ContainerConfig.property.shmSize"></a>

```java
public java.lang.Number getShmSize();
```

- *Type:* java.lang.Number

Size of `/dev/shm` in MBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#shm_size Container#shm_size}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-docker.container.ContainerConfig.property.start"></a>

```java
public java.lang.Object getStart();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, then the Docker container will be started after creation.

If `false`, then the container is only created. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#start Container#start}

---

##### `stdinOpen`<sup>Optional</sup> <a name="stdinOpen" id="@cdktf/provider-docker.container.ContainerConfig.property.stdinOpen"></a>

```java
public java.lang.Object getStdinOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, keep STDIN open even if not attached (`docker run -i`). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#stdin_open Container#stdin_open}

---

##### `stopSignal`<sup>Optional</sup> <a name="stopSignal" id="@cdktf/provider-docker.container.ContainerConfig.property.stopSignal"></a>

```java
public java.lang.String getStopSignal();
```

- *Type:* java.lang.String

Signal to stop a container (default `SIGTERM`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#stop_signal Container#stop_signal}

---

##### `stopTimeout`<sup>Optional</sup> <a name="stopTimeout" id="@cdktf/provider-docker.container.ContainerConfig.property.stopTimeout"></a>

```java
public java.lang.Number getStopTimeout();
```

- *Type:* java.lang.Number

Timeout (in seconds) to stop a container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#stop_timeout Container#stop_timeout}

---

##### `storageOpts`<sup>Optional</sup> <a name="storageOpts" id="@cdktf/provider-docker.container.ContainerConfig.property.storageOpts"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStorageOpts();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Key/value pairs for the storage driver options, e.g. `size`: `120G`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#storage_opts Container#storage_opts}

---

##### `sysctls`<sup>Optional</sup> <a name="sysctls" id="@cdktf/provider-docker.container.ContainerConfig.property.sysctls"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSysctls();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of kernel parameters (sysctls) to set in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#sysctls Container#sysctls}

---

##### `tmpfs`<sup>Optional</sup> <a name="tmpfs" id="@cdktf/provider-docker.container.ContainerConfig.property.tmpfs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTmpfs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of container directories which should be replaced by `tmpfs mounts`, and their corresponding mount options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#tmpfs Container#tmpfs}

---

##### `tty`<sup>Optional</sup> <a name="tty" id="@cdktf/provider-docker.container.ContainerConfig.property.tty"></a>

```java
public java.lang.Object getTty();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, allocate a pseudo-tty (`docker run -t`). Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#tty Container#tty}

---

##### `ulimit`<sup>Optional</sup> <a name="ulimit" id="@cdktf/provider-docker.container.ContainerConfig.property.ulimit"></a>

```java
public java.lang.Object getUlimit();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>>

ulimit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ulimit Container#ulimit}

---

##### `upload`<sup>Optional</sup> <a name="upload" id="@cdktf/provider-docker.container.ContainerConfig.property.upload"></a>

```java
public java.lang.Object getUpload();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>>

upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#upload Container#upload}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-docker.container.ContainerConfig.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

User used for run the first process.

Format is `user` or `user:group` which user and group can be passed literraly or by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#user Container#user}

---

##### `usernsMode`<sup>Optional</sup> <a name="usernsMode" id="@cdktf/provider-docker.container.ContainerConfig.property.usernsMode"></a>

```java
public java.lang.String getUsernsMode();
```

- *Type:* java.lang.String

Sets the usernamespace mode for the container when usernamespace remapping option is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#userns_mode Container#userns_mode}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-docker.container.ContainerConfig.property.volumes"></a>

```java
public java.lang.Object getVolumes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#volumes Container#volumes}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-docker.container.ContainerConfig.property.wait"></a>

```java
public java.lang.Object getWait();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, then the Docker container is waited for being healthy state after creation.

If `false`, then the container health state is not checked. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#wait Container#wait}

---

##### `waitTimeout`<sup>Optional</sup> <a name="waitTimeout" id="@cdktf/provider-docker.container.ContainerConfig.property.waitTimeout"></a>

```java
public java.lang.Number getWaitTimeout();
```

- *Type:* java.lang.Number

The timeout in seconds to wait the container to be healthy after creation. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#wait_timeout Container#wait_timeout}

---

##### `workingDir`<sup>Optional</sup> <a name="workingDir" id="@cdktf/provider-docker.container.ContainerConfig.property.workingDir"></a>

```java
public java.lang.String getWorkingDir();
```

- *Type:* java.lang.String

The working directory for commands to run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#working_dir Container#working_dir}

---

### ContainerDevices <a name="ContainerDevices" id="@cdktf/provider-docker.container.ContainerDevices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerDevices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerDevices;

ContainerDevices.builder()
    .hostPath(java.lang.String)
//  .containerPath(java.lang.String)
//  .permissions(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevices.property.hostPath">hostPath</a></code> | <code>java.lang.String</code> | The path on the host where the device is located. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevices.property.containerPath">containerPath</a></code> | <code>java.lang.String</code> | The path in the container where the device will be bound. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevices.property.permissions">permissions</a></code> | <code>java.lang.String</code> | The cgroup permissions given to the container to access the device. Defaults to `rwm`. |

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-docker.container.ContainerDevices.property.hostPath"></a>

```java
public java.lang.String getHostPath();
```

- *Type:* java.lang.String

The path on the host where the device is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#host_path Container#host_path}

---

##### `containerPath`<sup>Optional</sup> <a name="containerPath" id="@cdktf/provider-docker.container.ContainerDevices.property.containerPath"></a>

```java
public java.lang.String getContainerPath();
```

- *Type:* java.lang.String

The path in the container where the device will be bound.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#container_path Container#container_path}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-docker.container.ContainerDevices.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

The cgroup permissions given to the container to access the device. Defaults to `rwm`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#permissions Container#permissions}

---

### ContainerHealthcheck <a name="ContainerHealthcheck" id="@cdktf/provider-docker.container.ContainerHealthcheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerHealthcheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerHealthcheck;

ContainerHealthcheck.builder()
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
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.test">test</a></code> | <code>java.util.List<java.lang.String></code> | Command to run to check health. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.interval">interval</a></code> | <code>java.lang.String</code> | Time between running the check (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.retries">retries</a></code> | <code>java.lang.Number</code> | Consecutive failures needed to report unhealthy. Defaults to `0`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.startPeriod">startPeriod</a></code> | <code>java.lang.String</code> | Start period for the container to initialize before counting retries towards unstable (ms\|s\|m\|h). Defaults to `0s`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Maximum time to allow one check to run (ms\|s\|m\|h). Defaults to `0s`. |

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.test"></a>

```java
public java.util.List<java.lang.String> getTest();
```

- *Type:* java.util.List<java.lang.String>

Command to run to check health.

For example, to run `curl -f localhost/health` set the command to be `["CMD", "curl", "-f", "localhost/health"]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#test Container#test}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

Time between running the check (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#interval Container#interval}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

Consecutive failures needed to report unhealthy. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#retries Container#retries}

---

##### `startPeriod`<sup>Optional</sup> <a name="startPeriod" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.startPeriod"></a>

```java
public java.lang.String getStartPeriod();
```

- *Type:* java.lang.String

Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#start_period Container#start_period}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-docker.container.ContainerHealthcheck.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#timeout Container#timeout}

---

### ContainerHost <a name="ContainerHost" id="@cdktf/provider-docker.container.ContainerHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerHost.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerHost;

ContainerHost.builder()
    .host(java.lang.String)
    .ip(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHost.property.host">host</a></code> | <code>java.lang.String</code> | Hostname to add. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHost.property.ip">ip</a></code> | <code>java.lang.String</code> | IP address this hostname should resolve to. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-docker.container.ContainerHost.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Hostname to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#host Container#host}

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-docker.container.ContainerHost.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

IP address this hostname should resolve to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ip Container#ip}

---

### ContainerLabels <a name="ContainerLabels" id="@cdktf/provider-docker.container.ContainerLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerLabels;

ContainerLabels.builder()
    .label(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabels.property.label">label</a></code> | <code>java.lang.String</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabels.property.value">value</a></code> | <code>java.lang.String</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.container.ContainerLabels.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#label Container#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#value Container#value}

---

### ContainerMounts <a name="ContainerMounts" id="@cdktf/provider-docker.container.ContainerMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerMounts;

ContainerMounts.builder()
    .target(java.lang.String)
    .type(java.lang.String)
//  .bindOptions(ContainerMountsBindOptions)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .source(java.lang.String)
//  .tmpfsOptions(ContainerMountsTmpfsOptions)
//  .volumeOptions(ContainerMountsVolumeOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.target">target</a></code> | <code>java.lang.String</code> | Container path. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.type">type</a></code> | <code>java.lang.String</code> | The mount type. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.bindOptions">bindOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a></code> | bind_options block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the mount should be read-only. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.source">source</a></code> | <code>java.lang.String</code> | Mount source (e.g. a volume name, a host path). |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.tmpfsOptions">tmpfsOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a></code> | tmpfs_options block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMounts.property.volumeOptions">volumeOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a></code> | volume_options block. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-docker.container.ContainerMounts.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Container path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#target Container#target}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-docker.container.ContainerMounts.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The mount type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#type Container#type}

---

##### `bindOptions`<sup>Optional</sup> <a name="bindOptions" id="@cdktf/provider-docker.container.ContainerMounts.property.bindOptions"></a>

```java
public ContainerMountsBindOptions getBindOptions();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a>

bind_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#bind_options Container#bind_options}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-docker.container.ContainerMounts.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the mount should be read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#read_only Container#read_only}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-docker.container.ContainerMounts.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Mount source (e.g. a volume name, a host path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#source Container#source}

---

##### `tmpfsOptions`<sup>Optional</sup> <a name="tmpfsOptions" id="@cdktf/provider-docker.container.ContainerMounts.property.tmpfsOptions"></a>

```java
public ContainerMountsTmpfsOptions getTmpfsOptions();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a>

tmpfs_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#tmpfs_options Container#tmpfs_options}

---

##### `volumeOptions`<sup>Optional</sup> <a name="volumeOptions" id="@cdktf/provider-docker.container.ContainerMounts.property.volumeOptions"></a>

```java
public ContainerMountsVolumeOptions getVolumeOptions();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a>

volume_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#volume_options Container#volume_options}

---

### ContainerMountsBindOptions <a name="ContainerMountsBindOptions" id="@cdktf/provider-docker.container.ContainerMountsBindOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMountsBindOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerMountsBindOptions;

ContainerMountsBindOptions.builder()
//  .propagation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions.property.propagation">propagation</a></code> | <code>java.lang.String</code> | A propagation mode with the value. |

---

##### `propagation`<sup>Optional</sup> <a name="propagation" id="@cdktf/provider-docker.container.ContainerMountsBindOptions.property.propagation"></a>

```java
public java.lang.String getPropagation();
```

- *Type:* java.lang.String

A propagation mode with the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#propagation Container#propagation}

---

### ContainerMountsTmpfsOptions <a name="ContainerMountsTmpfsOptions" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerMountsTmpfsOptions;

ContainerMountsTmpfsOptions.builder()
//  .mode(java.lang.Number)
//  .sizeBytes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.property.mode">mode</a></code> | <code>java.lang.Number</code> | The permission mode for the tmpfs mount in an integer. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.property.sizeBytes">sizeBytes</a></code> | <code>java.lang.Number</code> | The size for the tmpfs mount in bytes. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.property.mode"></a>

```java
public java.lang.Number getMode();
```

- *Type:* java.lang.Number

The permission mode for the tmpfs mount in an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#mode Container#mode}

---

##### `sizeBytes`<sup>Optional</sup> <a name="sizeBytes" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptions.property.sizeBytes"></a>

```java
public java.lang.Number getSizeBytes();
```

- *Type:* java.lang.Number

The size for the tmpfs mount in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#size_bytes Container#size_bytes}

---

### ContainerMountsVolumeOptions <a name="ContainerMountsVolumeOptions" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerMountsVolumeOptions;

ContainerMountsVolumeOptions.builder()
//  .driverName(java.lang.String)
//  .driverOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .labels(IResolvable)
//  .labels(java.util.List<ContainerMountsVolumeOptionsLabels>)
//  .noCopy(java.lang.Boolean)
//  .noCopy(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.driverName">driverName</a></code> | <code>java.lang.String</code> | Name of the driver to use to create the volume. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.driverOptions">driverOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | key/value map of driver specific options. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.noCopy">noCopy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Populate volume with data from the target. |

---

##### `driverName`<sup>Optional</sup> <a name="driverName" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.driverName"></a>

```java
public java.lang.String getDriverName();
```

- *Type:* java.lang.String

Name of the driver to use to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#driver_name Container#driver_name}

---

##### `driverOptions`<sup>Optional</sup> <a name="driverOptions" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.driverOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

key/value map of driver specific options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#driver_options Container#driver_options}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.labels"></a>

```java
public java.lang.Object getLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#labels Container#labels}

---

##### `noCopy`<sup>Optional</sup> <a name="noCopy" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptions.property.noCopy"></a>

```java
public java.lang.Object getNoCopy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Populate volume with data from the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#no_copy Container#no_copy}

---

### ContainerMountsVolumeOptionsLabels <a name="ContainerMountsVolumeOptionsLabels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerMountsVolumeOptionsLabels;

ContainerMountsVolumeOptionsLabels.builder()
    .label(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.property.label">label</a></code> | <code>java.lang.String</code> | Name of the label. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.property.value">value</a></code> | <code>java.lang.String</code> | Value of the label. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#label Container#label}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#value Container#value}

---

### ContainerNetworkData <a name="ContainerNetworkData" id="@cdktf/provider-docker.container.ContainerNetworkData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerNetworkData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerNetworkData;

ContainerNetworkData.builder()
    .build();
```


### ContainerNetworksAdvanced <a name="ContainerNetworksAdvanced" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerNetworksAdvanced;

ContainerNetworksAdvanced.builder()
    .name(java.lang.String)
//  .aliases(java.util.List<java.lang.String>)
//  .ipv4Address(java.lang.String)
//  .ipv6Address(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.name">name</a></code> | <code>java.lang.String</code> | The name or id of the network to use. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.aliases">aliases</a></code> | <code>java.util.List<java.lang.String></code> | The network aliases of the container in the specific network. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | The IPV4 address of the container in the specific network. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | The IPV6 address of the container in the specific network. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name or id of the network to use.

You can use `name` or `id` attribute from a `docker_network` resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#name Container#name}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.aliases"></a>

```java
public java.util.List<java.lang.String> getAliases();
```

- *Type:* java.util.List<java.lang.String>

The network aliases of the container in the specific network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#aliases Container#aliases}

---

##### `ipv4Address`<sup>Optional</sup> <a name="ipv4Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.ipv4Address"></a>

```java
public java.lang.String getIpv4Address();
```

- *Type:* java.lang.String

The IPV4 address of the container in the specific network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ipv4_address Container#ipv4_address}

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvanced.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

The IPV6 address of the container in the specific network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ipv6_address Container#ipv6_address}

---

### ContainerPorts <a name="ContainerPorts" id="@cdktf/provider-docker.container.ContainerPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerPorts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerPorts;

ContainerPorts.builder()
    .internal(java.lang.Number)
//  .external(java.lang.Number)
//  .ip(java.lang.String)
//  .protocol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPorts.property.internal">internal</a></code> | <code>java.lang.Number</code> | Port within the container. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPorts.property.external">external</a></code> | <code>java.lang.Number</code> | Port exposed out of the container. If not given a free random port `>= 32768` will be used. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPorts.property.ip">ip</a></code> | <code>java.lang.String</code> | IP address/mask that can access this port. Defaults to `0.0.0.0`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPorts.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Protocol that can be used over this port. Defaults to `tcp`. |

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-docker.container.ContainerPorts.property.internal"></a>

```java
public java.lang.Number getInternal();
```

- *Type:* java.lang.Number

Port within the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#internal Container#internal}

---

##### `external`<sup>Optional</sup> <a name="external" id="@cdktf/provider-docker.container.ContainerPorts.property.external"></a>

```java
public java.lang.Number getExternal();
```

- *Type:* java.lang.Number

Port exposed out of the container. If not given a free random port `>= 32768` will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#external Container#external}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-docker.container.ContainerPorts.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

IP address/mask that can access this port. Defaults to `0.0.0.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#ip Container#ip}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-docker.container.ContainerPorts.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Protocol that can be used over this port. Defaults to `tcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#protocol Container#protocol}

---

### ContainerUlimit <a name="ContainerUlimit" id="@cdktf/provider-docker.container.ContainerUlimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerUlimit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerUlimit;

ContainerUlimit.builder()
    .hard(java.lang.Number)
    .name(java.lang.String)
    .soft(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimit.property.hard">hard</a></code> | <code>java.lang.Number</code> | The hard limit. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimit.property.name">name</a></code> | <code>java.lang.String</code> | The name of the ulimit. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimit.property.soft">soft</a></code> | <code>java.lang.Number</code> | The soft limit. |

---

##### `hard`<sup>Required</sup> <a name="hard" id="@cdktf/provider-docker.container.ContainerUlimit.property.hard"></a>

```java
public java.lang.Number getHard();
```

- *Type:* java.lang.Number

The hard limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#hard Container#hard}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.ContainerUlimit.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the ulimit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#name Container#name}

---

##### `soft`<sup>Required</sup> <a name="soft" id="@cdktf/provider-docker.container.ContainerUlimit.property.soft"></a>

```java
public java.lang.Number getSoft();
```

- *Type:* java.lang.Number

The soft limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#soft Container#soft}

---

### ContainerUpload <a name="ContainerUpload" id="@cdktf/provider-docker.container.ContainerUpload"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerUpload.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerUpload;

ContainerUpload.builder()
    .file(java.lang.String)
//  .content(java.lang.String)
//  .contentBase64(java.lang.String)
//  .executable(java.lang.Boolean)
//  .executable(IResolvable)
//  .source(java.lang.String)
//  .sourceHash(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.file">file</a></code> | <code>java.lang.String</code> | Path to the file in the container where is upload goes to. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.content">content</a></code> | <code>java.lang.String</code> | Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.contentBase64">contentBase64</a></code> | <code>java.lang.String</code> | Base64-encoded data that will be decoded and uploaded as raw bytes for the object content. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.executable">executable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, the file will be uploaded with user executable permission. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.source">source</a></code> | <code>java.lang.String</code> | A filename that references a file which will be uploaded as the object content. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUpload.property.sourceHash">sourceHash</a></code> | <code>java.lang.String</code> | If using `source`, this will force an update if the file content has updated but the filename has not. |

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-docker.container.ContainerUpload.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

Path to the file in the container where is upload goes to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#file Container#file}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-docker.container.ContainerUpload.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text.

Conflicts with `content_base64` & `source`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#content Container#content}

---

##### `contentBase64`<sup>Optional</sup> <a name="contentBase64" id="@cdktf/provider-docker.container.ContainerUpload.property.contentBase64"></a>

```java
public java.lang.String getContentBase64();
```

- *Type:* java.lang.String

Base64-encoded data that will be decoded and uploaded as raw bytes for the object content.

This allows safely uploading non-UTF8 binary data, but is recommended only for larger binary content such as the result of the `base64encode` interpolation function. See [here](https://github.com/terraform-providers/terraform-provider-docker/issues/48#issuecomment-374174588) for the reason. Conflicts with `content` & `source`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#content_base64 Container#content_base64}

---

##### `executable`<sup>Optional</sup> <a name="executable" id="@cdktf/provider-docker.container.ContainerUpload.property.executable"></a>

```java
public java.lang.Object getExecutable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, the file will be uploaded with user executable permission. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#executable Container#executable}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-docker.container.ContainerUpload.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

A filename that references a file which will be uploaded as the object content.

This allows for large file uploads that do not get stored in state. Conflicts with `content` & `content_base64`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#source Container#source}

---

##### `sourceHash`<sup>Optional</sup> <a name="sourceHash" id="@cdktf/provider-docker.container.ContainerUpload.property.sourceHash"></a>

```java
public java.lang.String getSourceHash();
```

- *Type:* java.lang.String

If using `source`, this will force an update if the file content has updated but the filename has not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#source_hash Container#source_hash}

---

### ContainerVolumes <a name="ContainerVolumes" id="@cdktf/provider-docker.container.ContainerVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-docker.container.ContainerVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerVolumes;

ContainerVolumes.builder()
//  .containerPath(java.lang.String)
//  .fromContainer(java.lang.String)
//  .hostPath(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .volumeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.containerPath">containerPath</a></code> | <code>java.lang.String</code> | The path in the container where the volume will be mounted. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.fromContainer">fromContainer</a></code> | <code>java.lang.String</code> | The container where the volume is coming from. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.hostPath">hostPath</a></code> | <code>java.lang.String</code> | The path on the host where the volume is coming from. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If `true`, this volume will be readonly. Defaults to `false`. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumes.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | The name of the docker volume which should be mounted. |

---

##### `containerPath`<sup>Optional</sup> <a name="containerPath" id="@cdktf/provider-docker.container.ContainerVolumes.property.containerPath"></a>

```java
public java.lang.String getContainerPath();
```

- *Type:* java.lang.String

The path in the container where the volume will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#container_path Container#container_path}

---

##### `fromContainer`<sup>Optional</sup> <a name="fromContainer" id="@cdktf/provider-docker.container.ContainerVolumes.property.fromContainer"></a>

```java
public java.lang.String getFromContainer();
```

- *Type:* java.lang.String

The container where the volume is coming from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#from_container Container#from_container}

---

##### `hostPath`<sup>Optional</sup> <a name="hostPath" id="@cdktf/provider-docker.container.ContainerVolumes.property.hostPath"></a>

```java
public java.lang.String getHostPath();
```

- *Type:* java.lang.String

The path on the host where the volume is coming from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#host_path Container#host_path}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-docker.container.ContainerVolumes.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If `true`, this volume will be readonly. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#read_only Container#read_only}

---

##### `volumeName`<sup>Optional</sup> <a name="volumeName" id="@cdktf/provider-docker.container.ContainerVolumes.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

The name of the docker volume which should be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/3.0.2/docs/resources/container#volume_name Container#volume_name}

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerCapabilitiesOutputReference <a name="ContainerCapabilitiesOutputReference" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerCapabilitiesOutputReference;

new ContainerCapabilitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resetDrop">resetDrop</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resetAdd"></a>

```java
public void resetAdd()
```

##### `resetDrop` <a name="resetDrop" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.resetDrop"></a>

```java
public void resetDrop()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.addInput">addInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.dropInput">dropInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.add">add</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.drop">drop</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.addInput"></a>

```java
public java.util.List<java.lang.String> getAddInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dropInput`<sup>Optional</sup> <a name="dropInput" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.dropInput"></a>

```java
public java.util.List<java.lang.String> getDropInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.add"></a>

```java
public java.util.List<java.lang.String> getAdd();
```

- *Type:* java.util.List<java.lang.String>

---

##### `drop`<sup>Required</sup> <a name="drop" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.drop"></a>

```java
public java.util.List<java.lang.String> getDrop();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerCapabilitiesOutputReference.property.internalValue"></a>

```java
public ContainerCapabilities getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerCapabilities">ContainerCapabilities</a>

---


### ContainerDevicesList <a name="ContainerDevicesList" id="@cdktf/provider-docker.container.ContainerDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerDevicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerDevicesList;

new ContainerDevicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerDevicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerDevicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerDevicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerDevicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerDevicesList.get"></a>

```java
public ContainerDevicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerDevicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerDevicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerDevicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerDevicesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a>>

---


### ContainerDevicesOutputReference <a name="ContainerDevicesOutputReference" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerDevicesOutputReference;

new ContainerDevicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.resetContainerPath">resetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerPath` <a name="resetContainerPath" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.resetContainerPath"></a>

```java
public void resetContainerPath()
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.resetPermissions"></a>

```java
public void resetPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.containerPathInput">containerPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.hostPathInput">hostPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.containerPath">containerPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.hostPath">hostPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.permissions">permissions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerPathInput`<sup>Optional</sup> <a name="containerPathInput" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.containerPathInput"></a>

```java
public java.lang.String getContainerPathInput();
```

- *Type:* java.lang.String

---

##### `hostPathInput`<sup>Optional</sup> <a name="hostPathInput" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.hostPathInput"></a>

```java
public java.lang.String getHostPathInput();
```

- *Type:* java.lang.String

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.permissionsInput"></a>

```java
public java.lang.String getPermissionsInput();
```

- *Type:* java.lang.String

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.containerPath"></a>

```java
public java.lang.String getContainerPath();
```

- *Type:* java.lang.String

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.hostPath"></a>

```java
public java.lang.String getHostPath();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerDevicesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerDevices">ContainerDevices</a> OR com.hashicorp.cdktf.IResolvable

---


### ContainerHealthcheckOutputReference <a name="ContainerHealthcheckOutputReference" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerHealthcheckOutputReference;

new ContainerHealthcheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetStartPeriod">resetStartPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetRetries` <a name="resetRetries" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetRetries"></a>

```java
public void resetRetries()
```

##### `resetStartPeriod` <a name="resetStartPeriod" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetStartPeriod"></a>

```java
public void resetStartPeriod()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startPeriodInput">startPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.testInput">testInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.interval">interval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startPeriod">startPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.test">test</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.intervalInput"></a>

```java
public java.lang.String getIntervalInput();
```

- *Type:* java.lang.String

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `startPeriodInput`<sup>Optional</sup> <a name="startPeriodInput" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startPeriodInput"></a>

```java
public java.lang.String getStartPeriodInput();
```

- *Type:* java.lang.String

---

##### `testInput`<sup>Optional</sup> <a name="testInput" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.testInput"></a>

```java
public java.util.List<java.lang.String> getTestInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `startPeriod`<sup>Required</sup> <a name="startPeriod" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.startPeriod"></a>

```java
public java.lang.String getStartPeriod();
```

- *Type:* java.lang.String

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.test"></a>

```java
public java.util.List<java.lang.String> getTest();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerHealthcheckOutputReference.property.internalValue"></a>

```java
public ContainerHealthcheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHealthcheck">ContainerHealthcheck</a>

---


### ContainerHostList <a name="ContainerHostList" id="@cdktf/provider-docker.container.ContainerHostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerHostList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerHostList;

new ContainerHostList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerHostList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerHostList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerHostList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerHostList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerHostList.get"></a>

```java
public ContainerHostOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerHostList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerHostList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerHostList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerHostList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a>>

---


### ContainerHostOutputReference <a name="ContainerHostOutputReference" id="@cdktf/provider-docker.container.ContainerHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerHostOutputReference;

new ContainerHostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerHostOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerHostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerHostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerHostOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerHostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerHostOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerHost">ContainerHost</a> OR com.hashicorp.cdktf.IResolvable

---


### ContainerLabelsList <a name="ContainerLabelsList" id="@cdktf/provider-docker.container.ContainerLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerLabelsList;

new ContainerLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerLabelsList.get"></a>

```java
public ContainerLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a>>

---


### ContainerLabelsOutputReference <a name="ContainerLabelsOutputReference" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerLabelsOutputReference;

new ContainerLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerLabels">ContainerLabels</a> OR com.hashicorp.cdktf.IResolvable

---


### ContainerMountsBindOptionsOutputReference <a name="ContainerMountsBindOptionsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerMountsBindOptionsOutputReference;

new ContainerMountsBindOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resetPropagation">resetPropagation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPropagation` <a name="resetPropagation" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.resetPropagation"></a>

```java
public void resetPropagation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.propagationInput">propagationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.propagation">propagation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `propagationInput`<sup>Optional</sup> <a name="propagationInput" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.propagationInput"></a>

```java
public java.lang.String getPropagationInput();
```

- *Type:* java.lang.String

---

##### `propagation`<sup>Required</sup> <a name="propagation" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.propagation"></a>

```java
public java.lang.String getPropagation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference.property.internalValue"></a>

```java
public ContainerMountsBindOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a>

---


### ContainerMountsList <a name="ContainerMountsList" id="@cdktf/provider-docker.container.ContainerMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerMountsList;

new ContainerMountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerMountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerMountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerMountsList.get"></a>

```java
public ContainerMountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerMountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerMountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerMountsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a>>

---


### ContainerMountsOutputReference <a name="ContainerMountsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerMountsOutputReference;

new ContainerMountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.putBindOptions">putBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.putTmpfsOptions">putTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.putVolumeOptions">putVolumeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetBindOptions">resetBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetTmpfsOptions">resetTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.resetVolumeOptions">resetVolumeOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBindOptions` <a name="putBindOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putBindOptions"></a>

```java
public void putBindOptions(ContainerMountsBindOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putBindOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a>

---

##### `putTmpfsOptions` <a name="putTmpfsOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putTmpfsOptions"></a>

```java
public void putTmpfsOptions(ContainerMountsTmpfsOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putTmpfsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a>

---

##### `putVolumeOptions` <a name="putVolumeOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putVolumeOptions"></a>

```java
public void putVolumeOptions(ContainerMountsVolumeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.putVolumeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a>

---

##### `resetBindOptions` <a name="resetBindOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetBindOptions"></a>

```java
public void resetBindOptions()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetTmpfsOptions` <a name="resetTmpfsOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetTmpfsOptions"></a>

```java
public void resetTmpfsOptions()
```

##### `resetVolumeOptions` <a name="resetVolumeOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.resetVolumeOptions"></a>

```java
public void resetVolumeOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.bindOptions">bindOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference">ContainerMountsBindOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.tmpfsOptions">tmpfsOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference">ContainerMountsTmpfsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.volumeOptions">volumeOptions</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference">ContainerMountsVolumeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.bindOptionsInput">bindOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.tmpfsOptionsInput">tmpfsOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.volumeOptionsInput">volumeOptionsInput</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bindOptions`<sup>Required</sup> <a name="bindOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.bindOptions"></a>

```java
public ContainerMountsBindOptionsOutputReference getBindOptions();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptionsOutputReference">ContainerMountsBindOptionsOutputReference</a>

---

##### `tmpfsOptions`<sup>Required</sup> <a name="tmpfsOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.tmpfsOptions"></a>

```java
public ContainerMountsTmpfsOptionsOutputReference getTmpfsOptions();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference">ContainerMountsTmpfsOptionsOutputReference</a>

---

##### `volumeOptions`<sup>Required</sup> <a name="volumeOptions" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.volumeOptions"></a>

```java
public ContainerMountsVolumeOptionsOutputReference getVolumeOptions();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference">ContainerMountsVolumeOptionsOutputReference</a>

---

##### `bindOptionsInput`<sup>Optional</sup> <a name="bindOptionsInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.bindOptionsInput"></a>

```java
public ContainerMountsBindOptions getBindOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsBindOptions">ContainerMountsBindOptions</a>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `tmpfsOptionsInput`<sup>Optional</sup> <a name="tmpfsOptionsInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.tmpfsOptionsInput"></a>

```java
public ContainerMountsTmpfsOptions getTmpfsOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `volumeOptionsInput`<sup>Optional</sup> <a name="volumeOptionsInput" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.volumeOptionsInput"></a>

```java
public ContainerMountsVolumeOptions getVolumeOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a>

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerMountsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMounts">ContainerMounts</a> OR com.hashicorp.cdktf.IResolvable

---


### ContainerMountsTmpfsOptionsOutputReference <a name="ContainerMountsTmpfsOptionsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerMountsTmpfsOptionsOutputReference;

new ContainerMountsTmpfsOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resetSizeBytes">resetSizeBytes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetSizeBytes` <a name="resetSizeBytes" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.resetSizeBytes"></a>

```java
public void resetSizeBytes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.sizeBytesInput">sizeBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.mode">mode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.sizeBytes">sizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.modeInput"></a>

```java
public java.lang.Number getModeInput();
```

- *Type:* java.lang.Number

---

##### `sizeBytesInput`<sup>Optional</sup> <a name="sizeBytesInput" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.sizeBytesInput"></a>

```java
public java.lang.Number getSizeBytesInput();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.mode"></a>

```java
public java.lang.Number getMode();
```

- *Type:* java.lang.Number

---

##### `sizeBytes`<sup>Required</sup> <a name="sizeBytes" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.sizeBytes"></a>

```java
public java.lang.Number getSizeBytes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerMountsTmpfsOptionsOutputReference.property.internalValue"></a>

```java
public ContainerMountsTmpfsOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsTmpfsOptions">ContainerMountsTmpfsOptions</a>

---


### ContainerMountsVolumeOptionsLabelsList <a name="ContainerMountsVolumeOptionsLabelsList" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerMountsVolumeOptionsLabelsList;

new ContainerMountsVolumeOptionsLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.get"></a>

```java
public ContainerMountsVolumeOptionsLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>>

---


### ContainerMountsVolumeOptionsLabelsOutputReference <a name="ContainerMountsVolumeOptionsLabelsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerMountsVolumeOptionsLabelsOutputReference;

new ContainerMountsVolumeOptionsLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a> OR com.hashicorp.cdktf.IResolvable

---


### ContainerMountsVolumeOptionsOutputReference <a name="ContainerMountsVolumeOptionsOutputReference" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerMountsVolumeOptionsOutputReference;

new ContainerMountsVolumeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetDriverName">resetDriverName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetDriverOptions">resetDriverOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetNoCopy">resetNoCopy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabels` <a name="putLabels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.putLabels"></a>

```java
public void putLabels(IResolvable OR java.util.List<ContainerMountsVolumeOptionsLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.putLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>>

---

##### `resetDriverName` <a name="resetDriverName" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetDriverName"></a>

```java
public void resetDriverName()
```

##### `resetDriverOptions` <a name="resetDriverOptions" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetDriverOptions"></a>

```java
public void resetDriverOptions()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNoCopy` <a name="resetNoCopy" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.resetNoCopy"></a>

```java
public void resetNoCopy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList">ContainerMountsVolumeOptionsLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverNameInput">driverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverOptionsInput">driverOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.labelsInput">labelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.noCopyInput">noCopyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverName">driverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverOptions">driverOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.noCopy">noCopy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.labels"></a>

```java
public ContainerMountsVolumeOptionsLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabelsList">ContainerMountsVolumeOptionsLabelsList</a>

---

##### `driverNameInput`<sup>Optional</sup> <a name="driverNameInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverNameInput"></a>

```java
public java.lang.String getDriverNameInput();
```

- *Type:* java.lang.String

---

##### `driverOptionsInput`<sup>Optional</sup> <a name="driverOptionsInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.labelsInput"></a>

```java
public java.lang.Object getLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptionsLabels">ContainerMountsVolumeOptionsLabels</a>>

---

##### `noCopyInput`<sup>Optional</sup> <a name="noCopyInput" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.noCopyInput"></a>

```java
public java.lang.Object getNoCopyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `driverName`<sup>Required</sup> <a name="driverName" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverName"></a>

```java
public java.lang.String getDriverName();
```

- *Type:* java.lang.String

---

##### `driverOptions`<sup>Required</sup> <a name="driverOptions" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.driverOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDriverOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `noCopy`<sup>Required</sup> <a name="noCopy" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.noCopy"></a>

```java
public java.lang.Object getNoCopy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerMountsVolumeOptionsOutputReference.property.internalValue"></a>

```java
public ContainerMountsVolumeOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerMountsVolumeOptions">ContainerMountsVolumeOptions</a>

---


### ContainerNetworkDataList <a name="ContainerNetworkDataList" id="@cdktf/provider-docker.container.ContainerNetworkDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerNetworkDataList;

new ContainerNetworkDataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerNetworkDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerNetworkDataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerNetworkDataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerNetworkDataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerNetworkDataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerNetworkDataList.get"></a>

```java
public ContainerNetworkDataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerNetworkDataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerNetworkDataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerNetworkDataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ContainerNetworkDataOutputReference <a name="ContainerNetworkDataOutputReference" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerNetworkDataOutputReference;

new ContainerNetworkDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.gateway">gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.globalIpv6Address">globalIpv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.globalIpv6PrefixLength">globalIpv6PrefixLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipPrefixLength">ipPrefixLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipv6Gateway">ipv6Gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.networkName">networkName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerNetworkData">ContainerNetworkData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

---

##### `globalIpv6Address`<sup>Required</sup> <a name="globalIpv6Address" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.globalIpv6Address"></a>

```java
public java.lang.String getGlobalIpv6Address();
```

- *Type:* java.lang.String

---

##### `globalIpv6PrefixLength`<sup>Required</sup> <a name="globalIpv6PrefixLength" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.globalIpv6PrefixLength"></a>

```java
public java.lang.Number getGlobalIpv6PrefixLength();
```

- *Type:* java.lang.Number

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `ipPrefixLength`<sup>Required</sup> <a name="ipPrefixLength" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipPrefixLength"></a>

```java
public java.lang.Number getIpPrefixLength();
```

- *Type:* java.lang.Number

---

##### `ipv6Gateway`<sup>Required</sup> <a name="ipv6Gateway" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.ipv6Gateway"></a>

```java
public java.lang.String getIpv6Gateway();
```

- *Type:* java.lang.String

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.networkName"></a>

```java
public java.lang.String getNetworkName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerNetworkDataOutputReference.property.internalValue"></a>

```java
public ContainerNetworkData getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerNetworkData">ContainerNetworkData</a>

---


### ContainerNetworksAdvancedList <a name="ContainerNetworksAdvancedList" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerNetworksAdvancedList;

new ContainerNetworksAdvancedList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.get"></a>

```java
public ContainerNetworksAdvancedOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a>>

---


### ContainerNetworksAdvancedOutputReference <a name="ContainerNetworksAdvancedOutputReference" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerNetworksAdvancedOutputReference;

new ContainerNetworksAdvancedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetAliases">resetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetIpv4Address">resetIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAliases` <a name="resetAliases" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetAliases"></a>

```java
public void resetAliases()
```

##### `resetIpv4Address` <a name="resetIpv4Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetIpv4Address"></a>

```java
public void resetIpv4Address()
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.resetIpv6Address"></a>

```java
public void resetIpv6Address()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.aliasesInput">aliasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv4AddressInput">ipv4AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.aliases">aliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv4Address">ipv4Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.aliasesInput"></a>

```java
public java.util.List<java.lang.String> getAliasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv4AddressInput`<sup>Optional</sup> <a name="ipv4AddressInput" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv4AddressInput"></a>

```java
public java.lang.String getIpv4AddressInput();
```

- *Type:* java.lang.String

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv6AddressInput"></a>

```java
public java.lang.String getIpv6AddressInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.aliases"></a>

```java
public java.util.List<java.lang.String> getAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv4Address"></a>

```java
public java.lang.String getIpv4Address();
```

- *Type:* java.lang.String

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerNetworksAdvancedOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerNetworksAdvanced">ContainerNetworksAdvanced</a> OR com.hashicorp.cdktf.IResolvable

---


### ContainerPortsList <a name="ContainerPortsList" id="@cdktf/provider-docker.container.ContainerPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerPortsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerPortsList;

new ContainerPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerPortsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerPortsList.get"></a>

```java
public ContainerPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerPortsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a>>

---


### ContainerPortsOutputReference <a name="ContainerPortsOutputReference" id="@cdktf/provider-docker.container.ContainerPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerPortsOutputReference;

new ContainerPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.resetExternal">resetExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.resetIp">resetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExternal` <a name="resetExternal" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resetExternal"></a>

```java
public void resetExternal()
```

##### `resetIp` <a name="resetIp" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resetIp"></a>

```java
public void resetIp()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.externalInput">externalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internalInput">internalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.external">external</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internal">internal</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalInput`<sup>Optional</sup> <a name="externalInput" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.externalInput"></a>

```java
public java.lang.Number getExternalInput();
```

- *Type:* java.lang.Number

---

##### `internalInput`<sup>Optional</sup> <a name="internalInput" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internalInput"></a>

```java
public java.lang.Number getInternalInput();
```

- *Type:* java.lang.Number

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.external"></a>

```java
public java.lang.Number getExternal();
```

- *Type:* java.lang.Number

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internal"></a>

```java
public java.lang.Number getInternal();
```

- *Type:* java.lang.Number

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerPortsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerPorts">ContainerPorts</a> OR com.hashicorp.cdktf.IResolvable

---


### ContainerUlimitList <a name="ContainerUlimitList" id="@cdktf/provider-docker.container.ContainerUlimitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerUlimitList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerUlimitList;

new ContainerUlimitList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerUlimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerUlimitList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerUlimitList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerUlimitList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerUlimitList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerUlimitList.get"></a>

```java
public ContainerUlimitOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerUlimitList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerUlimitList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerUlimitList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerUlimitList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a>>

---


### ContainerUlimitOutputReference <a name="ContainerUlimitOutputReference" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerUlimitOutputReference;

new ContainerUlimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.hardInput">hardInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.softInput">softInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.hard">hard</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.soft">soft</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hardInput`<sup>Optional</sup> <a name="hardInput" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.hardInput"></a>

```java
public java.lang.Number getHardInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `softInput`<sup>Optional</sup> <a name="softInput" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.softInput"></a>

```java
public java.lang.Number getSoftInput();
```

- *Type:* java.lang.Number

---

##### `hard`<sup>Required</sup> <a name="hard" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.hard"></a>

```java
public java.lang.Number getHard();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `soft`<sup>Required</sup> <a name="soft" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.soft"></a>

```java
public java.lang.Number getSoft();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerUlimitOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerUlimit">ContainerUlimit</a> OR com.hashicorp.cdktf.IResolvable

---


### ContainerUploadList <a name="ContainerUploadList" id="@cdktf/provider-docker.container.ContainerUploadList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerUploadList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerUploadList;

new ContainerUploadList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerUploadList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerUploadList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerUploadList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerUploadList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerUploadList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerUploadList.get"></a>

```java
public ContainerUploadOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerUploadList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerUploadList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerUploadList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerUploadList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a>>

---


### ContainerUploadOutputReference <a name="ContainerUploadOutputReference" id="@cdktf/provider-docker.container.ContainerUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerUploadOutputReference;

new ContainerUploadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetContentBase64">resetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetExecutable">resetExecutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.resetSourceHash">resetSourceHash</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentBase64` <a name="resetContentBase64" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetContentBase64"></a>

```java
public void resetContentBase64()
```

##### `resetExecutable` <a name="resetExecutable" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetExecutable"></a>

```java
public void resetExecutable()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetSourceHash` <a name="resetSourceHash" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.resetSourceHash"></a>

```java
public void resetSourceHash()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentBase64Input">contentBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.executableInput">executableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.fileInput">fileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceHashInput">sourceHashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentBase64">contentBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.executable">executable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceHash">sourceHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerUploadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentBase64Input`<sup>Optional</sup> <a name="contentBase64Input" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentBase64Input"></a>

```java
public java.lang.String getContentBase64Input();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `executableInput`<sup>Optional</sup> <a name="executableInput" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.executableInput"></a>

```java
public java.lang.Object getExecutableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.fileInput"></a>

```java
public java.lang.String getFileInput();
```

- *Type:* java.lang.String

---

##### `sourceHashInput`<sup>Optional</sup> <a name="sourceHashInput" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceHashInput"></a>

```java
public java.lang.String getSourceHashInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.contentBase64"></a>

```java
public java.lang.String getContentBase64();
```

- *Type:* java.lang.String

---

##### `executable`<sup>Required</sup> <a name="executable" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.executable"></a>

```java
public java.lang.Object getExecutable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `sourceHash`<sup>Required</sup> <a name="sourceHash" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.sourceHash"></a>

```java
public java.lang.String getSourceHash();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerUploadOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerUpload">ContainerUpload</a> OR com.hashicorp.cdktf.IResolvable

---


### ContainerVolumesList <a name="ContainerVolumesList" id="@cdktf/provider-docker.container.ContainerVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerVolumesList;

new ContainerVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-docker.container.ContainerVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-docker.container.ContainerVolumesList.get"></a>

```java
public ContainerVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-docker.container.ContainerVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerVolumesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a>>

---


### ContainerVolumesOutputReference <a name="ContainerVolumesOutputReference" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.docker.container.ContainerVolumesOutputReference;

new ContainerVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetContainerPath">resetContainerPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetFromContainer">resetFromContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetHostPath">resetHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetVolumeName">resetVolumeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerPath` <a name="resetContainerPath" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetContainerPath"></a>

```java
public void resetContainerPath()
```

##### `resetFromContainer` <a name="resetFromContainer" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetFromContainer"></a>

```java
public void resetFromContainer()
```

##### `resetHostPath` <a name="resetHostPath" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetHostPath"></a>

```java
public void resetHostPath()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetVolumeName` <a name="resetVolumeName" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.resetVolumeName"></a>

```java
public void resetVolumeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.containerPathInput">containerPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fromContainerInput">fromContainerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.hostPathInput">hostPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.containerPath">containerPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fromContainer">fromContainer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.hostPath">hostPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerPathInput`<sup>Optional</sup> <a name="containerPathInput" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.containerPathInput"></a>

```java
public java.lang.String getContainerPathInput();
```

- *Type:* java.lang.String

---

##### `fromContainerInput`<sup>Optional</sup> <a name="fromContainerInput" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fromContainerInput"></a>

```java
public java.lang.String getFromContainerInput();
```

- *Type:* java.lang.String

---

##### `hostPathInput`<sup>Optional</sup> <a name="hostPathInput" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.hostPathInput"></a>

```java
public java.lang.String getHostPathInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.volumeNameInput"></a>

```java
public java.lang.String getVolumeNameInput();
```

- *Type:* java.lang.String

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.containerPath"></a>

```java
public java.lang.String getContainerPath();
```

- *Type:* java.lang.String

---

##### `fromContainer`<sup>Required</sup> <a name="fromContainer" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.fromContainer"></a>

```java
public java.lang.String getFromContainer();
```

- *Type:* java.lang.String

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.hostPath"></a>

```java
public java.lang.String getHostPath();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-docker.container.ContainerVolumesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-docker.container.ContainerVolumes">ContainerVolumes</a> OR com.hashicorp.cdktf.IResolvable

---



